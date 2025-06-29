import { Vehicle } from "../models/Vehicle";
import { ParkingSpot } from "../models/ParkingSpot";
import { SpotAllocator } from "./SpotAllocator";
import { ParkingLot } from "../models/ParkingLot";
import { v4 as uuidv4 } from "uuid";
import { IFeeCalculator } from "./FeeCalculator/IFeeCalculator";
import { CarFeeCalculator } from "./FeeCalculator/CarFeeCalculator";
import { MotorcycleFeeCalculator } from "./FeeCalculator/MotorcycleFeeCalculator";
import { BusFeeCalculator } from "./FeeCalculator/BusFeeCalculator";
import { VehicleType } from "../models/enums";

export class ParkingTicket {
    constructor(
        public ticketId: string,
        public vehicle: Vehicle,
        public spot: ParkingSpot,
        public checkInTime: Date
    ) {}
}

export class Receipt {
    constructor(
        public ticketId: string,
        public checkInTime: Date,
        public checkOutTime: Date,
        public totalFee: number
    ) {}
}

export class ParkingService {
    private activeTickets: Map<string, ParkingTicket> = new Map();

    private calculatorMap: Map<VehicleType, IFeeCalculator> = new Map<VehicleType, IFeeCalculator>([
        [VehicleType.CAR, new CarFeeCalculator()],
        [VehicleType.MOTORCYCLE, new MotorcycleFeeCalculator()],
        [VehicleType.BUS, new BusFeeCalculator()],
    ]);

    private allocator: SpotAllocator;

    constructor(private lot: ParkingLot) {
        this.allocator = new SpotAllocator(lot);
    }

    checkIn(vehicle: Vehicle): ParkingTicket | null {
        const spot = this.allocator.assignSpot(vehicle);
        if (!spot) return null;

        const ticket = new ParkingTicket(uuidv4(), vehicle, spot, new Date());
        this.activeTickets.set(ticket.ticketId, ticket);
        return ticket;
    }

    checkOut(ticketId: string): Receipt | null {
        const ticket = this.activeTickets.get(ticketId);
        if (!ticket) return null;

        const checkOutTime = new Date();
        const calculator = this.calculatorMap.get(ticket.vehicle.type);
        if (!calculator) throw new Error("Unsupported vehicle type");

        const totalFee = calculator.calculateFee(ticket.checkInTime, checkOutTime);
        ticket.spot.removeVehicle();
        this.activeTickets.delete(ticketId);

        return new Receipt(ticket.ticketId, ticket.checkInTime, checkOutTime, totalFee);
    }
}

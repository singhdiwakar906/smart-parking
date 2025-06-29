import { Vehicle } from "../models/Vehicle";
import { ParkingService } from "../services/ParkingService";
import { VehicleType } from "../models/enums";

export class ParkingController {
    constructor(private parkingService: ParkingService) {}

    checkIn(vehicleNumber: string, type: VehicleType) {
        const vehicle = new Vehicle(vehicleNumber, type);
        const ticket = this.parkingService.checkIn(vehicle);

        if (!ticket) {
            console.log("❌ No available parking spot!");
            return;
        }

        console.log(`✅ Vehicle ${vehicleNumber} parked at spot ${ticket.spot.id} on check-in.`);
        console.log(`🎟️ Ticket ID: ${ticket.ticketId}`);
    }

    checkOut(ticketId: string) {
        const receipt = this.parkingService.checkOut(ticketId);

        if (!receipt) {
            console.log("❌ Invalid ticket or already checked out.");
            return;
        }

        console.log("✅ Vehicle checked out successfully.");
        console.log(`🕒 Duration: ${receipt.checkInTime.toLocaleTimeString()} - ${receipt.checkOutTime.toLocaleTimeString()}`);
        console.log(`💸 Fee: ₹${receipt.totalFee}`);
    }
}

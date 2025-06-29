import { ParkingFloor } from "./ParkingFloor";
import { SpotType, VehicleType } from "./enums";

export class ParkingLot {
    public floors: ParkingFloor[] = [];

    // Define which spot types are eligible for each vehicle type
    private spotEligibility: Map<VehicleType, SpotType[]> = new Map([
        [VehicleType.MOTORCYCLE, [SpotType.SMALL, SpotType.MEDIUM, SpotType.LARGE]],
        [VehicleType.CAR, [SpotType.MEDIUM, SpotType.LARGE]],
        [VehicleType.BUS, [SpotType.LARGE]],
    ]);

    constructor(floors: ParkingFloor[]) {
        this.floors = floors;
    }

    getEligibleSpotTypes(vehicleType: VehicleType): SpotType[] {
        return this.spotEligibility.get(vehicleType) || [];
    }
}

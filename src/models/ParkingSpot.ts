import { SpotType } from "./enums";
import { Vehicle } from "./Vehicle";

export class ParkingSpot {
    public isAvailable: boolean = true;
    public assignedVehicle: Vehicle | null = null;

    constructor(
        public id: string,
        public type: SpotType
    ) {}

    assignVehicle(vehicle: Vehicle): void {
        this.assignedVehicle = vehicle;
        this.isAvailable = false;
    }

    removeVehicle(): void {
        this.assignedVehicle = null;
        this.isAvailable = true;
    }
}

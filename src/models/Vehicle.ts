import { VehicleType } from "./enums";

export class Vehicle {
    constructor(
        public vehicleNumber: string,
        public type: VehicleType
    ) {}
}

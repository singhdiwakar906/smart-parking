import { ParkingSpot } from "./ParkingSpot";

export class ParkingFloor {
    constructor(
        public floorId: string,
        public spots: ParkingSpot[]
    ) {}
}

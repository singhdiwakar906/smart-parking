import { ParkingLot } from "../models/ParkingLot";
import { ParkingFloor } from "../models/ParkingFloor";
import { ParkingSpot } from "../models/ParkingSpot";
import { SpotType } from "../models/enums";

export function seedParkingLot(): ParkingLot {
    const floors: ParkingFloor[] = [];

    for (let f = 1; f <= 3; f++) {
        const floorSpots: ParkingSpot[] = [];

        // Add spots per floor
        for (let i = 1; i <= 5; i++) {
            floorSpots.push(new ParkingSpot(`F${f}-S${i}`, SpotType.SMALL));
        }

        for (let i = 6; i <= 10; i++) {
            floorSpots.push(new ParkingSpot(`F${f}-M${i}`, SpotType.MEDIUM));
        }

        for (let i = 11; i <= 12; i++) {
            floorSpots.push(new ParkingSpot(`F${f}-L${i}`, SpotType.LARGE));
        }

        floors.push(new ParkingFloor(`Floor-${f}`, floorSpots));
    }

    return new ParkingLot(floors);
}

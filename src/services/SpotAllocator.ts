import { Vehicle } from "../models/Vehicle";
import { ParkingLot } from "../models/ParkingLot";
import { ParkingSpot } from "../models/ParkingSpot";
import { SpotType, VehicleType } from "../models/enums";

export class SpotAllocator {
    constructor(private lot: ParkingLot) {}

    assignSpot(vehicle: Vehicle): ParkingSpot | null {
        const eligibleSpots: SpotType[] = this.lot.getEligibleSpotTypes(vehicle.type);

        for (const floor of this.lot.floors) {
            for (const spot of floor.spots) {
                if (spot.isAvailable && eligibleSpots.includes(spot.type)) {
                    spot.assignVehicle(vehicle);
                    return spot;
                }
            }
        }

        return null;
    }
}

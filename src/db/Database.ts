import { ParkingLot } from "../models/ParkingLot";

export class Database {
    private static instance: Database;
    private lot: ParkingLot | null = null;

    private constructor() {}

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    setParkingLot(lot: ParkingLot) {
        this.lot = lot;
    }

    getParkingLot(): ParkingLot {
        if (!this.lot) {
            throw new Error("Parking lot not initialized");
        }
        return this.lot;
    }
}

import { seedParkingLot } from "./src/db/seedData";
import { ParkingService } from "./src/services/ParkingService";
import { ParkingController } from "./src/controllers/ParkingController";
import { VehicleType } from "./src/models/enums";


// Setup
const parkingLot = seedParkingLot();
const parkingService = new ParkingService(parkingLot);
const controller = new ParkingController(parkingService);

// Simulation
console.log("🚗 Vehicle entering...");
controller.checkIn("DL01AA1234", VehicleType.CAR);

console.log("\n🏍️ Another vehicle entering...");
controller.checkIn("DL01BB4321", VehicleType.MOTORCYCLE);

// Simulate waiting time using setTimeout (optional in real-time)
// For now, checkout manually after some time using ticket ID
setTimeout(() => {
    console.log("\n🚗 Vehicle exiting...");
    // Replace this with actual ticket ID printed earlier
    controller.checkOut("use-your-ticket-id-here");
}, 2000);

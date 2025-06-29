# 🅿️ Smart Parking Lot – Low Level Design

This project simulates a backend system for managing a multi-floor smart parking lot, designed as part of a low-level design assessment.

---

## 🚗 Features

- 🅿️ Automatic parking spot allocation based on vehicle size
- 🎟️ Ticket generation at entry
- ⏱️ Duration tracking
- 💰 Dynamic parking fee calculation
- ✅ Real-time spot availability
- 🧠 OOP-based modular design (LLD)

---

## 🧱 Architecture & Components

### ✅ Core Entities:
- `Vehicle`: Represents the vehicle
- `ParkingSpot`: Represents an individual parking spot
- `ParkingFloor`: Collection of parking spots
- `ParkingLot`: Multiple floors and overall system
- `ParkingTicket` & `Receipt`: Represent check-in/check-out states

### ✅ Services:
- `ParkingService`: Entry/exit operations and ticket management
- `SpotAllocator`: Assigns eligible parking spots
- `FeeCalculator`: Strategy pattern for vehicle-based fee logic

---

## 🗃️ Folder Structure

###### run this project using  -> npx ts-node main.ts

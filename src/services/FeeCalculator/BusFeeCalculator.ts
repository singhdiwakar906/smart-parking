import { IFeeCalculator } from "./IFeeCalculator";

export class BusFeeCalculator implements IFeeCalculator {
    private ratePerHour = 50;

    calculateFee(checkInTime: Date, checkOutTime: Date): number {
        const duration = Math.ceil((checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60 * 60));
        return duration * this.ratePerHour;
    }
}

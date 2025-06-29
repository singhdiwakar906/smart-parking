export interface IFeeCalculator {
    calculateFee(checkInTime: Date, checkOutTime: Date): number;
}

export interface UserIAPReceipt {
    receiptId: string;
    provider: string;
    productId: string;
    dateOfPurchase: Date;
    approximateDollarValue: number;
    orderId: string;
    refunded: boolean;
}
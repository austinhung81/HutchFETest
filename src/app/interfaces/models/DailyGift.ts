export interface DailyGift {
    totalGiftsClaimed: number;
    dateNextGiftAvailable: Date;
    dateNextConsecutiveGiftAvailable: Date;
    consecutiveGiftsClaimed: number;
    maxConsecutiveGiftsClaimed: number;
}
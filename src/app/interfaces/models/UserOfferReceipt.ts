import { Offer } from './Offer';

export interface UserOfferReceipt {
    offerId: string;
    numTimesClaimed: number;
    awardDates: string[];
    triggerDates: string[];
    offer: Offer;
    version: number;
}
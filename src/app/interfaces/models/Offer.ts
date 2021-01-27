import { OfferTypeEnum } from '../../enums/OfferType';
import { OfferPlacementType } from '../../enums/OfferPlacementType';

export interface Offer {
    id: string;
    version: number;
    name: string;
    nameColor: any;
    description: string;
    type: OfferTypeEnum;
    maxClaims: number;
    softCurrency1Cost: number;
    hardCurrency1Cost: number;
    hardCurrency2Cost: number;
    duration: number;
    startDate: Date;
    expiryDate: Date;
    priority: number;
    isKilled: boolean;
    iap: string;
    lootCrateId: string;
    minTriggerTier: number;
    maxTriggerTier: number;
    minTriggerGold: number;
    maxTriggerGold: number;
    minTriggerVIPTier: number;
    maxTriggerVIPTier: number;
    minTriggerDaysLapsed: number;
    maxTriggerDaysLapsed: number;
    placementType: OfferPlacementType;
    backgroundImage: string;
    carId: string;
    minTriggerPlayerLevel: number;
    maxTriggerPlayerLevel: number;
    optionalText: string;
    optionalTextColor: any;
    optionalTextBackgroundColor: any;
    isTiledBackground: boolean;
}
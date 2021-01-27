import { UserAppProfile } from '../models/UserAppProfile';
import { UserIAPReceipt } from '../models/UserIAPReceipt';
import { UserOfferReceipt } from '../models/UserOfferReceipt';
import { SocialAccount } from '../models/SocialAccount';
import { LogEntry } from '../models/LogEntry';
import { DailyGift } from '../models/DailyGift';
import { FTUEProgress } from '../models/FTUEProgress';
import { UserCar } from '../models/UserCar';
import { Fuel } from '../models/Fuel';
import { UserAugment } from '../models/UserAugment';
import { UserTier } from '../models/UserTier';
import { UserResource } from '../models/UserResource';
import { FusionCredits } from '../models/FusionCredits';
import { UserAds } from '../models/UserAds';

export interface PortalSync {
    userProfile: UserAppProfile;
    userIAPReceipts: UserIAPReceipt[];
    userOfferReceipts: UserOfferReceipt[];
    socialAccounts: SocialAccount[];
    logEntries: LogEntry[];
    ads: UserAds;
    dailyGift: DailyGift;
    ftueProgress: FTUEProgress[];
    fuel: Fuel;
    userCars: UserCar[];
    userAugments: UserAugment[];
    userTiers: UserTier[];
    userResources: UserResource[];
    fusionCredits: FusionCredits[];
}
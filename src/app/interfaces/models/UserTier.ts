import { CarClass } from '../../enums/CarClass';

export interface UserTier {
    tierIndex: number;
    bossRacesWon: number;
    bossRacesAttempted: number;
    bossRaceLastWon: Date;
    bossRaceLastAttempt: Date;
    ladderRacesWon: number;
    ladderRacesAttempted: number;
    ladderRaceLastWon: Date;
    ladderRaceLastAttempt: Date;
    easyMoneyRacesWon: number;
    easyMoneyRacesAttempted: number;
    easyMoneyRaceLastWon: Date;
    easyMoneyRaceLastAttempt: Date;
    dailyRacesWon: number
    dailyRacesAttempted: number;
    dailyRaceLastWon: Date;
    dailyRaceLastAttempt: Date;
    doublePayoutRacesWon: number;
    doublePayoutRacesAttempted: number;
    doublePayoutRaceLastWon: Date;
    doublePayoutRaceLastAttempts: Date[];
    declinedSuperBoostBossEvent: boolean;
    attemptedSuperBoostBossEvent: boolean;
    wonSuperBoostBossEvent: boolean;
    purchasedSuperBoost: boolean;
    carClass: CarClass;
    bossLadderRacesWon: number;
    bossLadderRacesAttempted: number;
    bossLadderRaceLastWon: Date;
    bossLadderRaceLastAttempt: Date;
    dailyClassRacesWon: number
    dailyClassRacesAttempted: number;
    dailyClassRaceLastWon: Date;
    dailyClassRaceLastAttempt: Date;
}
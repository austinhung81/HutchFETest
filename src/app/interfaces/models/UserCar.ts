import { CarSourceEnum } from '../../enums/CarSourceEnum';

export interface UserCar {
    userCarId: string;
    carId: string;
    garageSlot: number;
    customisationsTyre: string[];
    customisationsWheel: string[];
    customisationsWheelColour: string[];
    customisationsCaliperColour: string[];
    customisationsDecal: string[];
    customisationsPaintBody: string[];
    upgradeTyresLevel: number;
    upgradeTyresCompletionTime: string;
    upgradeEngineLevel: number;
    upgradeEngineCompletionTime: string;
    upgradeExhaustLevel: number;
    upgradeExhaustCompletionTime: string;
    upgradeBoostLevel: number;
    upgradeBoostCompletionTime: string;
    upgradeGearboxLevel: number;
    upgradeGearboxCompletionTime: string;
    upgradeIntakeLevel: number;
    upgradeIntakeCompletionTime: string;
    fusionLocked: boolean;
    fusionCompletionTime: string;
    source: CarSourceEnum;
}

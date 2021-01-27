export enum CarManufacturer {
    None = 0,
    Ford = 1,
    Mitsubishi = 2,
    Pagani = 3,
    BMW = 4,
    Bugatti = 5,
    Chevrolet = 6,
    Koenigsegg = 7,
    Lotus = 8,
    Mazda = 9,
    Mclaren = 10,
    Mercedes = 11,
    MMX = 12,
    Nissan = 13,
    P11 = 14,
    Pontiac = 15,
    RUF = 16,
    Subaru = 17,
    Drakart = 18,
    Ariel = 19,
    Tatum = 20,
    DMC = 21,
    Mini = 22,
    Caterham = 23,
    RangeRover = 24
}

export enum CarUpgradeType {
    Intake = 0,
    Exhaust = 1,
    Engine = 2,
    Boost = 3,
    Gearbox = 4,
    Tyres = 5
}

export enum CarClass {
    None = 0,
    Road = 1,
    OffRoad = 2,
    Buggy = 3,
    TracksAndLaps = 4,
    Italy = 5
}

export class Car {
    public carId: string;
    public dataVersion: string;
    public displayName: string;
    public modelName: string;
    public manufacturer: CarManufacturer;
    public enabledInGame: boolean;
    public visibleInStore: boolean;
    public basePP: number;
    public stars: number;
    public tier: number;
    public cost: number;
    public goldCost: number;
    public saleCost: number;
    public customisationSetId: string;
    public availability: number;
    public fusionCarId: string;
    public fusionPoints: number;
    public fusionTime: number;
    public fusionPreviousCarId: string;
    public purchasable: boolean;
    public requiredFusionCredits: number;
    public requiredFusionPoints: number;
    public defaultTyresUpgradeLevel: number;
    public defaultEngineUpgradeLevel: number;
    public defaultExhaustUpgradeLevel: number;
    public defaultBoostUpgradeLevel: number;
    public defaultGearboxUpgradeLevel: number;
    public defaultIntakeUpgradeLevel: number;
    public upgradeLeadingCoefficient: number;
    public upgradeCoefficient: number;
    public upgradeConstant: number;
    public imageName: string;
    public excludeInResolver: boolean;
    public prefabName: string;
    public upgradedBoostDuration: number;
    public carClass: CarClass;
    public sellable: boolean;
    public fusable: boolean;
    public version: number;
    public familyName: string;
}

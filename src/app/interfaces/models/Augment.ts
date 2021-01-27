import { CarUpgradeType, CarManufacturer } from "./Car";

export class Augment {
    public augmentId: string;
    public dataVersion: string;
    public displayName: string;
    public imageName: string;
    public upgradeType: CarUpgradeType;
    public manufacturer: CarManufacturer;
    public category: number;
    public availability: number;
    public cashInstallPrice: number;
    public cashSellValue: number;
    public fusionPoints: number;
    public goldUninstallPrice: number;
    public purchasable: boolean;
    public visibleInStore: boolean;
    public pp: number;
    public boostDuration: number;
    public version: number;
}

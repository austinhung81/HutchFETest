import { CarManufacturer, CarUpgradeType } from "./Car";

export class Resource {
    public resourceId: string;
    public dataVersion: string;
    public displayName: string;
    public availability: number;
    public cashSellValue: number;
    public category: number;
    public goldPrice: number;
    public manufacturer: CarManufacturer;
    public maxAmount: number;
    public purchasable: boolean;
    public upgradeType: CarUpgradeType;
    public visibleInStore: boolean;
    public imageName: string;
}

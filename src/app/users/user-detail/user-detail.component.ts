import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { PortalSyncService } from '../../services/portal-sync.service';
import { StaticDataService } from '../../services/static-data.service';

import { Manufacturer } from '../../enums/Manufacturer';

import { StaticDataMap } from '../../interfaces/responses/StaticDataMap';
import { PortalSync } from '../../interfaces/responses/PortalSync';
import { UserAppProfile } from '../../interfaces/models/UserAppProfile';
import { LogEntry } from '../../interfaces/models/LogEntry';
import { UserIAPReceipt } from '../../interfaces/models/UserIAPReceipt';
import { UserOfferReceipt } from '../../interfaces/models/UserOfferReceipt';
import { SocialAccount } from '../../interfaces/models/SocialAccount';
import { UserCar } from '../../interfaces/models/UserCar';
import { UserResource } from '../../interfaces/models/UserResource';
import { UserAugment } from '../../interfaces/models/UserAugment';
import { Fuel } from '../../interfaces/models/Fuel';
import { DailyGift } from '../../interfaces/models/DailyGift';
import { FTUEProgress } from '../../interfaces/models/FTUEProgress';
import { FusionCredits } from '../../interfaces/models/FusionCredits';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public fturGroup: FormGroup;
  public fusionCreditGroup: FormGroup;
  public tableLoading: boolean = true;
  public staticDataMap: StaticDataMap;
  public portalSync: PortalSync;
  public userAppProfile: UserAppProfile;
  public logEntry: LogEntry[];
  public userIAPReceipts: UserIAPReceipt[];
  public userOfferReceipts: UserOfferReceipt[];
  public socialAccounts: SocialAccount[];
  public ftueConfig: any = null;
  public orderedFTUEConfig: any = null;
  public carManufacturerEnumMap: any;
  public userCars: UserCar[];
  public userResources: UserResource[];
  public userAugments: UserAugment[];
  public fuel: Fuel;
  public dailyGift: DailyGift;
  public ftueProgress: FTUEProgress[];
  public fusionCredits: FusionCredits[];
  
  constructor(
    public portalSyncService: PortalSyncService,
    public staticDataService: StaticDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id; // Normally use id to query data
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder").subscribe(staticDataMapResponse => {
      console.log(staticDataMapResponse);
      this.staticDataMap = staticDataMapResponse;
      this.orderedFTUEConfig = {};
      Object.keys(this.staticDataMap.ftueConfig).forEach((ftueVersion) => {
        if (!this.orderedFTUEConfig.hasOwnProperty(ftueVersion)) {
          this.orderedFTUEConfig[ftueVersion] = {};
        }

        Object.keys(this.staticDataMap.ftueConfig[ftueVersion]).forEach((ftueStory) => {
          const ftueSteps = Object.keys(this.staticDataMap.ftueConfig[ftueVersion][ftueStory]);
          const orderedFTUESteps = [];
          for (let i = 0; i < ftueSteps.length; i++) {
            for (let j = 0; j < ftueSteps.length; j++) {
              if (this.staticDataMap.ftueConfig[ftueVersion][ftueStory][ftueSteps[j]] === i) {
                orderedFTUESteps.push(ftueSteps[j]);
                break;
              }
            }
          }
          this.orderedFTUEConfig[ftueVersion][ftueStory] = orderedFTUESteps;
        });
      });

      this.carManufacturerEnumMap = {};
      Object.keys(Manufacturer).forEach((manufacturer) => {
        this.carManufacturerEnumMap[Manufacturer[manufacturer]] = manufacturer;
      });
    });
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe((portalSyncResponse: PortalSync) => {
      const { 
        userProfile,
        logEntries,
        userIAPReceipts,
        userOfferReceipts,
        socialAccounts,
        userCars,
        userResources,
        userAugments,
        fuel,
        dailyGift,
        ftueProgress,
        fusionCredits
      } = portalSyncResponse;
      this.userAppProfile = userProfile;
      this.logEntry = logEntries;
      this.userIAPReceipts = userIAPReceipts;
      this.userOfferReceipts = userOfferReceipts;
      this.socialAccounts = socialAccounts;
      this.userCars = userCars;
      this.userResources = userResources;
      this.userAugments = userAugments;
      this.fuel = fuel;
      this.dailyGift = dailyGift;
      this.ftueProgress = ftueProgress;
      this.fusionCredits = fusionCredits;
      this.tableLoading = false;
    });
    this.fturGroup = new FormGroup({});
    this.fusionCreditGroup = new FormGroup({});
    for(let ftue of this.ftueProgress){
      this.fturGroup.addControl(ftue.ftueStory, new FormControl(ftue.ftueStory))
    }
    for(let fusion of this.fusionCredits){
      this.fusionCreditGroup.addControl(fusion.manufacturerId.toString(), new FormControl(fusion.manufacturerId))
    }
  }

}

import { Injectable } from '@angular/core';
import { MockStaticData } from '../mockdata/StaticData';
import { StaticDataMap } from '../interfaces/responses/StaticDataMap';
import { Observable, of } from 'rxjs';

import { Car } from '../interfaces/models/Car';
import { Augment } from '../interfaces/models/Augment';
import { Resource } from '../interfaces/models/Resource';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  
  public staticData: StaticDataMap = {
    carsMap: new Map<string, Car>([]),
    resourceMap: new Map<string, Resource>([]),
    augmentMap: new Map<string, Augment>([]),
    ftueConfig: []
  };

  constructor() { }

  getStaticData(appVersion: string, dataVersion: string, adminToken: string): Observable<StaticDataMap> {
    for (let i = 0; i < MockStaticData.cars.length; i++) {
      this.staticData.carsMap.set(MockStaticData.cars[i].carId, MockStaticData.cars[i]);
    }

    for (let i = 0; i < MockStaticData.resources.length; i++) {
      this.staticData.resourceMap.set(MockStaticData.resources[i].resourceId, MockStaticData.resources[i]);
    }

    for (let i = 0; i < MockStaticData.augments.length; i++) {
      this.staticData.augmentMap.set(MockStaticData.augments[i].augmentId, MockStaticData.augments[i]);
    }
    this.staticData.ftueConfig = MockStaticData.ftueConfig;
    return of(this.staticData);
  }
}

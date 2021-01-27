import { Car } from '../models/Car';
import { Augment } from '../models/Augment';
import { Resource } from '../models/Resource';

export interface StaticDataMap {
    carsMap: Map<string, Car>;
    augmentMap: Map<string, Augment>;
    resourceMap: Map<string, Resource>;
    ftueConfig: any;
}

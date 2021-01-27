import { Car } from '../models/Car';
import { Augment } from '../models/Augment';
import { Resource } from '../models/Resource';

export interface StaticData {
    cars: Car[];
    augments: Augment[];
    resources: Resource[];
    ftueConfig: any;
}

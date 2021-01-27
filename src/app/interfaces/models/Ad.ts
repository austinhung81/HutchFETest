import { AdRewardConfig } from './AdRewardConfig';
import { AdRewardProgress} from './AdRewardProgress';

export interface Ad {
    playerdata: AdRewardProgress;
    config: AdRewardConfig;
}
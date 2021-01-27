import { SocialDetails } from "./SocialDetails";

export interface SocialAccount {
    socialId: string;
    socialType: string;
    region: string;
    isDissociated: boolean;
    hutchId: string;
    socialDetails: SocialDetails;
}
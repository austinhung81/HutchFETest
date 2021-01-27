export interface AdRewardConfig {
    /**
     * The time in seconds to require between rewarded ad claims.
     */
    cooldown: number;

    /**
     * The maximum number of ads that can be watched for a reward in a single period.
     */
    cap: number;
     /**
    * The length of a rewarded ad period, in seconds.
     */
    capPeriod: number;
     /**
     * Whether the number of ads a player has watched resets at midnight.
     */
    midnightReset: boolean;
     /**
     * Object containing game-specific configuration for rewarded ads. In the case of F1, that
     * includes a list of rewards for each ad watched in a period.
     */
    gameConfig: any;
}

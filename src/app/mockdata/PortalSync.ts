import { PortalSync } from '../interfaces/responses/PortalSync';

export const MockPortalSync: PortalSync = {
    "userProfile": {
        "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
        "appId": "com.hutchgames.rebelracing",
        "flags": 264,
        "deviceId": "CD396ED4-646C-4BF6-B2C8-C47D0456A424",
        "region": "we",
        "socialName": "Geoff Pate",
        "registrationDate": new Date("2019-11-06T18:19:44.558Z"),
        "lastLoginDate": new Date("2020-09-07T16:59:20.088Z"),
        "cohorts": {},
        "hutchAccountRerouteId": null,
        "hutchAccountRerouteRegion": null,
        "activeQuests": 0,
        "completedQuests": 0,
        "claimedQuests": 0,
        "nextQuestActiveAt": new Date("1970-01-01T00:00:00.000Z"),
        "previousLoginDate": new Date("2020-09-07T16:59:19.431Z"),
        "locale": "EN",
        "hardCurrency1": 95,
        "hardCurrency2": 32429,
        "hardCurrency3": 0,
        "softCurrency1": 0,
        "xp": 85574,
        "level": 100,
        "garageSlotsUsed": 64,
        "bronzeKeys": 1487,
        "silverKeys": 1489,
        "goldKeys": 848,
        "trophies": 5190
    },
    "userIAPReceipts": [
        {
            "receiptId": "290000591182601",
            "provider": "apple",
            "productId": "rebel_racing_car_chevroletk5blazer_1_star",
            "dateOfPurchase": new Date("2020-04-07T19:20:37.788Z"),
            "approximateDollarValue": 1,
            "orderId": null,
            "refunded": false
        },
        {
            "receiptId": "290000678318979",
            "provider": "apple",
            "productId": "rebel_racing_smash_event_tier_1",
            "dateOfPurchase": new Date("2020-09-03T21:42:21.211Z"),
            "approximateDollarValue": 1,
            "orderId": null,
            "refunded": false
        },
        {
            "receiptId": "290000678319691",
            "provider": "apple",
            "productId": "rebel_racing_smash_event_tier_1",
            "dateOfPurchase": new Date("2020-09-03T21:44:25.527Z"),
            "approximateDollarValue": 1,
            "orderId": null,
            "refunded": false
        }
    ],
    "userOfferReceipts": [
        {
            "offerId": "01c77bc1-2318-4178-bde1-53f52180e51e",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-26T14:45:02.309Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "01c77bc1-2318-4178-bde1-53f52180e51e",
                "version": 2,
                "name": "SERVLOC_TXT_9f37ece2d7572f58a28f561e4fdb636556005ac27fb3876562a4a747651a2fce",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-10-23T14:30:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:50:34.000Z"),
                "priority": 103,
                "isKilled": false,
                "iap": "rebel_racing_offer_tier_5",
                "lootCrateId": "10b82def-8513-4540-9197-828a07e2a7c5",
                "minTriggerTier": 5,
                "maxTriggerTier": 5,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_tier_S",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "01cc310f-5350-4d48-89b4-15402e5be6f8",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-27T09:40:47.581Z"
            ],
            "awardDates": [
                "2019-12-27T09:41:52.398Z"
            ],
            "offer": {
                "id": "01cc310f-5350-4d48-89b4-15402e5be6f8",
                "version": 2,
                "name": "SERVLOC_TXT_b653b33a426c25c8d0819e9e17370dbcccccaa234d14b943294fec5de19c7bf0",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-27T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-28T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "5f72504e-3920-46fb-aaa4-68e9a32591a3",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.5843137254901961,
                    "g": 0.37254901960784315,
                    "b": 0.23529411764705882,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 0.5843137254901961,
                    "g": 0.37254901960784315,
                    "b": 0.23529411764705882,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "0920964a-d4e1-4683-8df5-c1b7da67996b",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-18T19:03:15.196Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "0920964a-d4e1-4683-8df5-c1b7da67996b",
                "version": 2,
                "name": "SERVLOC_TXT_13b324b4a07f32bf14c9d1a801e827fbaf848f1bf593b4639e0bd6e0191f35b9",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-09-26T13:32:09.761Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100005,
                "isKilled": false,
                "iap": "null",
                "lootCrateId": "28887350-f7c8-4948-bfff-89713235f1c4",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 20,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_912bffec39a735421632a6d7fe1a27b26e36c627aa169aff6d850bc6ab41a06e",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "0dbd38ac-e4b4-4a86-a6b0-098ac27631c4",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-11T07:43:09.335Z"
            ],
            "awardDates": [
                "2019-12-11T07:44:12.639Z"
            ],
            "offer": {
                "id": "0dbd38ac-e4b4-4a86-a6b0-098ac27631c4",
                "version": 2,
                "name": "SERVLOC_TXT_ac0a9957b9647b5c26161823f030f663798b2d0a38bfa4ccdddeafc3dbc49b32",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-11T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-12T06:00:00.000Z"),
                "priority": 1011,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "0e7ad41b-402f-4d95-a6bf-88d0c89ac641",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-04-13T07:31:18.373Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "0e7ad41b-402f-4d95-a6bf-88d0c89ac641",
                "version": 2,
                "name": "SERVLOC_TXT_a2df0e189d4b1dba718da2a08eacda42886492f043402c354f49207ca8f569b1",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:55:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100013,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "41b55d8d-da58-4a67-a30d-da2558f95bbe",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 60,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_15319fe7dcde42ee154801511e649ceeb5ab0001f83d138dd74131ba0e124780",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "0eda1b46-9e4e-4301-ad1b-e6de51f26e6d",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-29T11:30:30.355Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "0eda1b46-9e4e-4301-ad1b-e6de51f26e6d",
                "version": 2,
                "name": "SERVLOC_TXT_1f42a87feb314b160cf97718b742815db7b6c514b5fca62dd05f23f7f87ef8f9",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 2880,
                "startDate": new Date("2019-11-29T09:00:00.719Z"),
                "expiryDate": new Date("2019-12-04T06:00:00.000Z"),
                "priority": 100007,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "00000000-0000-0000-0000-000000000000",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Special_blackfriday",
                "carId": "055edb06-a964-4537-b2cb-71477df6bc6b",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "115761be-3d82-40fe-83d9-2a739e0adb5b",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-01-04T09:36:24.072Z"
            ],
            "awardDates": [
                "2020-01-04T09:38:29.488Z"
            ],
            "offer": {
                "id": "115761be-3d82-40fe-83d9-2a739e0adb5b",
                "version": 2,
                "name": "SERVLOC_TXT_13f082477c81367bc44afaecfb66b9ab2b4dc3befb86032b667742a663723b79",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2020-01-04T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-05T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.5843137254901961,
                    "g": 0.37254901960784315,
                    "b": 0.23529411764705882,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 0.5843137254901961,
                    "g": 0.37254901960784315,
                    "b": 0.23529411764705882,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "16c30ff7-6b3c-4c0b-b317-b433becc7e93",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-08T09:12:24.252Z"
            ],
            "awardDates": [
                "2019-12-08T09:13:27.000Z"
            ],
            "offer": {
                "id": "16c30ff7-6b3c-4c0b-b317-b433becc7e93",
                "version": 2,
                "name": "SERVLOC_TXT_0b9d3ce07ecb2cf888974e8092d66609ca1a1e787b7b860f24dd6afe9a89fcf3",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-08T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-09T06:00:00.000Z"),
                "priority": 1008,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "1a1e6788-dc00-4b8c-bb53-826f96d988a5",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-01-24T07:53:11.395Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "1a1e6788-dc00-4b8c-bb53-826f96d988a5",
                "version": 2,
                "name": "SERVLOC_TXT_5c48e60be7b4ffa42b3511481f3f39d54bf1a7a782797eb068899bbde53c3b76",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:55:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100012,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "5ca4b9be-50cf-4d85-8138-fa9d242a6246",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 55,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "1df274d5-3dd0-4f92-95f1-a52575341bfa",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-06T06:06:55.974Z"
            ],
            "awardDates": [
                "2019-12-06T06:14:42.481Z"
            ],
            "offer": {
                "id": "1df274d5-3dd0-4f92-95f1-a52575341bfa",
                "version": 2,
                "name": "SERVLOC_TXT_80788bf3acecbd0c78749c56df014e3e7c79ea2566455d8a156bc81f7fc7322e",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-06T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-07T06:00:00.000Z"),
                "priority": 1006,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "1fb3ec2a-d794-489b-a974-9c7d3891896a",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-13T08:30:02.083Z"
            ],
            "awardDates": [
                "2019-12-13T08:31:27.677Z"
            ],
            "offer": {
                "id": "1fb3ec2a-d794-489b-a974-9c7d3891896a",
                "version": 2,
                "name": "SERVLOC_TXT_28b7266d91ea3e5e89006d6b0355cefcd57b2c132dd68ab3a58c9ea0f5618b2d",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-13T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-14T06:00:00.000Z"),
                "priority": 1013,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "2066af1a-add7-47bf-8198-4287ed27d3f5",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-01-05T09:06:23.473Z"
            ],
            "awardDates": [
                "2020-01-05T21:03:43.500Z"
            ],
            "offer": {
                "id": "2066af1a-add7-47bf-8198-4287ed27d3f5",
                "version": 2,
                "name": "SERVLOC_TXT_07e3b118ff0d949c9d199b4166f86b2a730199b60e4b88feec5414d01fe37513",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2020-01-05T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-06T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "8b685df0-7041-4b6f-944d-05c60c10d7d5",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "20fb64fa-4b49-4393-8ee1-3ebc29fcc3b2",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-16T06:43:25.973Z"
            ],
            "awardDates": [
                "2019-12-16T06:44:46.000Z"
            ],
            "offer": {
                "id": "20fb64fa-4b49-4393-8ee1-3ebc29fcc3b2",
                "version": 2,
                "name": "SERVLOC_TXT_a3ce2b5e6640867b52dd1941372b6bda8f8cddba8f11a38670a02205600ebcf5",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-16T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-17T06:00:00.000Z"),
                "priority": 1016,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "282e54bb-e0c4-4bae-b1ef-1ed535e62729",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-07T12:56:19.057Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "282e54bb-e0c4-4bae-b1ef-1ed535e62729",
                "version": 2,
                "name": "SERVLOC_TXT_787e708e725674377d75ab80990567130415f41286c7d8e287f63742ca00f548",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:00:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100002,
                "isKilled": false,
                "iap": "null",
                "lootCrateId": "8e535dc7-cb27-4a7e-8228-37ea597cf683",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 5,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "2a036961-08ef-4657-97d7-5f8ad3a52ea9",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-14T09:11:51.725Z"
            ],
            "awardDates": [
                "2019-12-14T09:12:58.251Z"
            ],
            "offer": {
                "id": "2a036961-08ef-4657-97d7-5f8ad3a52ea9",
                "version": 2,
                "name": "SERVLOC_TXT_0f143169b08f82655cb99d89a0b85a161a4a5db7436c43361786bbdc671aee3c",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-14T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-19T04:00:00.000Z"),
                "priority": 999999,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "00000000-0000-0000-0000-000000000000",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "a36408af-1808-423d-a6f9-78f0a53d8af0",
                "minTriggerPlayerLevel": 3,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "311df0eb-85d0-46b9-970c-b2f81972c751",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-20T10:01:49.816Z"
            ],
            "awardDates": [
                "2019-12-20T10:03:18.588Z"
            ],
            "offer": {
                "id": "311df0eb-85d0-46b9-970c-b2f81972c751",
                "version": 2,
                "name": "SERVLOC_TXT_02f3d7762a9045559ddf6279a7c9456d5293066da4fd3cc88560443c6342e745",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-20T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-21T06:00:00.000Z"),
                "priority": 1020,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "32db0a5f-013a-44ca-ab5b-6c75e26b935b",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-01-01T09:18:39.156Z"
            ],
            "awardDates": [
                "2020-01-01T13:42:19.471Z"
            ],
            "offer": {
                "id": "32db0a5f-013a-44ca-ab5b-6c75e26b935b",
                "version": 2,
                "name": "SERVLOC_TXT_7718d7197d11c6f044ae2cc8fc4848913017c4f5c30fc66e42fe1da91122546d",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2020-01-01T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-02T09:00:00.000Z"),
                "priority": 10002,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "c90354c4-279e-49a1-b82d-a50377dbe730",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "358be423-fdc3-4147-ab78-9098345d8905",
            "numTimesClaimed": 2,
            "triggerDates": [
                "2020-05-04T17:06:54.986Z",
                "2020-05-04T17:10:22.754Z"
            ],
            "awardDates": [
                "2020-05-04T17:06:54.986Z",
                "2020-05-04T17:10:22.754Z"
            ],
            "offer": {
                "id": "358be423-fdc3-4147-ab78-9098345d8905",
                "version": 2,
                "name": "SERVLOC_TXT_2beaa0d43e978c61e636d921261ceec7808c7b22087eb96d61039e5fdc6663ac",
                "description": "NOT USED",
                "type": 0,
                "maxClaims": 25,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 0,
                "startDate": new Date("2020-05-04T17:00:00.000Z"),
                "expiryDate": new Date("2020-05-14T03:01:00.000Z"),
                "priority": 10004,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "cc4531ee-874c-45f6-823e-fe3c9bd9f640",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Offer_custom_ChevroletSilverado",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_07dc5b102f3e6fff979e0c7b1e82b5767733571b405541abededcedf1e1ad291",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": false
            },
            "version": 2
        },
        {
            "offerId": "35e3161a-73f4-473e-977d-0e1b8d0b4b09",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-01-03T09:26:13.111Z"
            ],
            "awardDates": [
                "2020-01-03T09:51:53.861Z"
            ],
            "offer": {
                "id": "35e3161a-73f4-473e-977d-0e1b8d0b4b09",
                "version": 2,
                "name": "SERVLOC_TXT_1eed9d04d528561ea9ecaa79266ef8d00498d383cd41f3e5789c329e62ec852a",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2020-01-03T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-04T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "38454531-1464-4517-b446-d0182da01732",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-07-06T15:34:58.641Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "38454531-1464-4517-b446-d0182da01732",
                "version": 2,
                "name": "SERVLOC_TXT_f8604be1ab4fc8d4f537b62b8f3310cac1d10dc130fbc87cbfda3757a2357469",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:10:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100018,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "7b0b1722-b005-4860-8670-ea6955e43c30",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 85,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "38740206-359d-404d-8279-f1743870783a",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-11-29T14:37:17.354Z"
            ],
            "awardDates": [
                "2019-11-29T14:37:17.354Z"
            ],
            "offer": {
                "id": "38740206-359d-404d-8279-f1743870783a",
                "version": 2,
                "name": "SERVLOC_TXT_64f451491394d76bd940637d67a12120bd307cca08f1f34d103262616302b911",
                "description": "NOT USED",
                "type": 0,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 2880,
                "startDate": new Date("2019-11-29T08:59:00.000Z"),
                "expiryDate": new Date("2019-12-05T06:01:00.000Z"),
                "priority": 100008,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "00000000-0000-0000-0000-000000000000",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 3,
                "backgroundImage": "Special_blackfriday",
                "carId": "8ba3741a-a879-477c-8d11-ee3c6e523afa",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "436dd65e-d4ae-4c0f-bfe1-41f84b5b316c",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-01-02T09:00:04.796Z"
            ],
            "awardDates": [
                "2020-01-02T09:42:15.371Z"
            ],
            "offer": {
                "id": "436dd65e-d4ae-4c0f-bfe1-41f84b5b316c",
                "version": 2,
                "name": "SERVLOC_TXT_c4f45befdc4368e0098b3fc5c2021ac718101399900115a126e85f5abcdf72e8",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2020-01-02T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-03T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "02434191-0df8-4d33-8d74-129da872143e",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.27450980392156865,
                    "g": 0.3607843137254902,
                    "b": 0.6392156862745098,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 0.27450980392156865,
                    "g": 0.3607843137254902,
                    "b": 0.6392156862745098,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "45d2c090-900e-4e86-8193-48912a6d1253",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-01-14T08:02:23.967Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "45d2c090-900e-4e86-8193-48912a6d1253",
                "version": 2,
                "name": "SERVLOC_TXT_c8e777ae8e205723d361702547bc8834e5da2e75d65392a7e77f2e894fce6ad2",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 999,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:55:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100011,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "95d71247-d1ea-49d7-8333-f41357f2eeb2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 50,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "480d2e13-7c1e-4037-a8e4-8575e0660a1d",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-22T15:09:09.405Z"
            ],
            "awardDates": [
                "2019-12-22T16:55:39.602Z"
            ],
            "offer": {
                "id": "480d2e13-7c1e-4037-a8e4-8575e0660a1d",
                "version": 2,
                "name": "SERVLOC_TXT_ee526f01fbe134ea66f8071f534f09b96e0bab6e577df55147d97b7cc88fbf51",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:50:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100009,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "1bbda705-7c4b-405e-bf13-fd60fe33d9df",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 40,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_912bffec39a735421632a6d7fe1a27b26e36c627aa169aff6d850bc6ab41a06e",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "495ceff0-9fc0-42b5-ac63-e4a63e1935bb",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-31T09:00:04.664Z"
            ],
            "awardDates": [
                "2019-12-31T09:18:18.884Z"
            ],
            "offer": {
                "id": "495ceff0-9fc0-42b5-ac63-e4a63e1935bb",
                "version": 2,
                "name": "SERVLOC_TXT_e152b970949c865aede2735af25f8db87cfa1a35224f92a737be3a63b9a2f5c9",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-31T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-01T09:00:00.000Z"),
                "priority": 10002,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "4a442828-1fb1-4d3e-80ec-36c7f16d7e49",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-12T15:25:56.887Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "4a442828-1fb1-4d3e-80ec-36c7f16d7e49",
                "version": 2,
                "name": "SERVLOC_TXT_cf1a27f47057899644f6cf59732b095b0b042e95ff2c28632f0f5cbd6f11bf61",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-10-23T14:30:00.000Z"),
                "expiryDate": new Date("2024-12-01T14:50:34.000Z"),
                "priority": 101,
                "isKilled": false,
                "iap": "rebel_racing_offer_tier_3",
                "lootCrateId": "bb6e1d4d-2ad2-40a5-a572-ef7ac07a36b6",
                "minTriggerTier": 3,
                "maxTriggerTier": 5,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_tier_B",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "4b2bfaf1-e0ca-483b-bd5a-609a50693d46",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-10T07:39:34.667Z"
            ],
            "awardDates": [
                "2019-12-10T10:23:51.947Z"
            ],
            "offer": {
                "id": "4b2bfaf1-e0ca-483b-bd5a-609a50693d46",
                "version": 2,
                "name": "SERVLOC_TXT_21fb22cd9f6836b73f6bcd7ac1a578c999341cf9151f79a9d1a70708aa6068f1",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-10T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-11T06:00:00.000Z"),
                "priority": 1010,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "4bb68d80-2f37-47e2-9a96-c88dd121dec6",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-02T06:47:07.263Z"
            ],
            "awardDates": [
                "2019-12-02T07:36:36.123Z"
            ],
            "offer": {
                "id": "4bb68d80-2f37-47e2-9a96-c88dd121dec6",
                "version": 2,
                "name": "SERVLOC_TXT_440588b1a435d14ff208f805491d4bc084542cb994d30ff01c91f6b4fa4129db",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-02T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-03T06:00:00.000Z"),
                "priority": 1002,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "4dedc2ed-e178-49e7-93f6-77c2c8a40932",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-10T12:29:57.227Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "4dedc2ed-e178-49e7-93f6-77c2c8a40932",
                "version": 2,
                "name": "SERVLOC_TXT_a8a87e391f5f522761fe343efcfdebf7579ae6e431c8c17c4c38c70e70775d96",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:45:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100003,
                "isKilled": false,
                "iap": "null",
                "lootCrateId": "8e646d3f-e54c-44bc-a5d3-c26692429b9a",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 10,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_912bffec39a735421632a6d7fe1a27b26e36c627aa169aff6d850bc6ab41a06e",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "52891ee4-7c4e-40fc-9dfc-15883c9e19ff",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-30T13:35:39.702Z"
            ],
            "awardDates": [
                "2019-12-30T14:04:39.660Z"
            ],
            "offer": {
                "id": "52891ee4-7c4e-40fc-9dfc-15883c9e19ff",
                "version": 2,
                "name": "SERVLOC_TXT_310b26c61df0676db8149f583ac8148fc94ef84c5bdf056135759672144c7aff",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-30T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-31T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "6b7bde39-6ac2-4fca-bd36-9de645e1d7a1",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "53f87779-0f93-4062-969b-a9af0919602e",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-12-02T06:47:07.590Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "53f87779-0f93-4062-969b-a9af0919602e",
                "version": 2,
                "name": "SERVLOC_TXT_a979550549b6bfab8fec34848614bbd09b8d89b2a9e9e5031b0c62036606863f",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-12-02T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-03T06:00:00.000Z"),
                "priority": 100006,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "8e535dc7-cb27-4a7e-8228-37ea597cf683",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Special_cybermonday",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "57c85017-9a60-45b5-858d-5b212d9afc82",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-12-01T07:54:59.376Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "57c85017-9a60-45b5-858d-5b212d9afc82",
                "version": 2,
                "name": "SERVLOC_TXT_d32cdf5dd065bfbab75bd947446c15268707b2f4a32ee94f4810754f0b9d7d37",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:50:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100007,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "bdb6a65e-f68b-4cf0-b0de-aaa5cd5cd66a",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 30,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_912bffec39a735421632a6d7fe1a27b26e36c627aa169aff6d850bc6ab41a06e",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "623a03c5-2780-417f-977c-b590a06b568b",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-06-16T12:20:27.078Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "623a03c5-2780-417f-977c-b590a06b568b",
                "version": 2,
                "name": "SERVLOC_TXT_68365e48e57d25753fa627bf07fb4798f0878d1db116c5f8a7ada678cee8a285",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:00:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100015,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "10b82def-8513-4540-9197-828a07e2a7c5",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 70,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_15319fe7dcde42ee154801511e649ceeb5ab0001f83d138dd74131ba0e124780",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "65066ee0-2799-4325-b8f8-5264c1397c34",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-19T09:17:03.684Z"
            ],
            "awardDates": [
                "2019-12-19T09:18:07.037Z"
            ],
            "offer": {
                "id": "65066ee0-2799-4325-b8f8-5264c1397c34",
                "version": 2,
                "name": "SERVLOC_TXT_d59f93d5449d9aa0ef5040866741ca3b2d6dab37b5642b2ba511d4801c1a262f",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-19T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-20T06:00:00.000Z"),
                "priority": 1019,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "6b47fc9c-e0bd-430d-a66c-17230f933b6d",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-22T08:54:33.328Z"
            ],
            "awardDates": [
                "2019-12-22T08:55:48.376Z"
            ],
            "offer": {
                "id": "6b47fc9c-e0bd-430d-a66c-17230f933b6d",
                "version": 2,
                "name": "SERVLOC_TXT_9f2a508c97ccdbcaea6c932a9aa9589e2d770b19ef2d5f374b30259b69fed853",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-22T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-23T06:00:00.000Z"),
                "priority": 1022,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "c90354c4-279e-49a1-b82d-a50377dbe730",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "7414cc47-3684-4cb0-b705-35bb5edf796f",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-21T09:36:53.806Z"
            ],
            "awardDates": [
                "2019-12-21T09:38:28.463Z"
            ],
            "offer": {
                "id": "7414cc47-3684-4cb0-b705-35bb5edf796f",
                "version": 2,
                "name": "SERVLOC_TXT_d93c6e00ba82f60e0af8ce9d3eb980749a1da49e969278924d13661f7f69cbc9",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-21T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-22T06:00:00.000Z"),
                "priority": 1021,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "c90354c4-279e-49a1-b82d-a50377dbe730",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "79b228a5-b167-4c69-b9c3-9e779d5e2765",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-23T06:42:43.297Z"
            ],
            "awardDates": [
                "2019-12-23T06:44:02.808Z"
            ],
            "offer": {
                "id": "79b228a5-b167-4c69-b9c3-9e779d5e2765",
                "version": 2,
                "name": "SERVLOC_TXT_469d71ccd56812e601e4a97d49a88749369a67cf50b40a48a5fd57c77d4d16e2",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-23T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-24T06:00:00.000Z"),
                "priority": 1023,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "7e0e5d9c-b5bb-4419-aa05-9b96f77051fa",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-29T11:30:31.570Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "7e0e5d9c-b5bb-4419-aa05-9b96f77051fa",
                "version": 2,
                "name": "SERVLOC_TXT_64f451491394d76bd940637d67a12120bd307cca08f1f34d103262616302b911",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 499,
                "hardCurrency2Cost": 0,
                "duration": 2880,
                "startDate": new Date("2019-11-29T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-04T06:00:00.000Z"),
                "priority": 100009,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "00000000-0000-0000-0000-000000000000",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Special_blackfriday",
                "carId": "8ba3741a-a879-477c-8d11-ee3c6e523afa",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "80c79376-6ef2-4d4c-abfa-cffa3d48dcc9",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-29T09:05:41.677Z"
            ],
            "awardDates": [
                "2019-12-29T19:39:42.658Z"
            ],
            "offer": {
                "id": "80c79376-6ef2-4d4c-abfa-cffa3d48dcc9",
                "version": 2,
                "name": "SERVLOC_TXT_f18a9adf35d13429f460c81f58fa932be018c97ee7ed4e9122f3ae41fd242c34",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-29T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-30T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.2901960784313726,
                    "g": 0.4745098039215686,
                    "b": 0.2784313725490196,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 0.2901960784313726,
                    "g": 0.4745098039215686,
                    "b": 0.2784313725490196,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "855ba3e5-5cb3-4300-b540-ca648da9122c",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-26T09:00:05.417Z"
            ],
            "awardDates": [
                "2019-12-26T11:34:06.558Z"
            ],
            "offer": {
                "id": "855ba3e5-5cb3-4300-b540-ca648da9122c",
                "version": 2,
                "name": "SERVLOC_TXT_642e70e0e5f11be6fbd1535190138da71b0632a851be8cd8b965193bc7347919",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-26T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-27T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "8bc1225c-2f04-4e5c-bf1d-da1c09168fa6",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-07-18T14:48:10.104Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "8bc1225c-2f04-4e5c-bf1d-da1c09168fa6",
                "version": 2,
                "name": "SERVLOC_TXT_859adc7472d8839baa9ac81f9bd40a9522089b4e9c67053fe8ae173d8970b2f7",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 999,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:10:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100019,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "b6d6468a-be76-46d6-8f85-fbdf177d5687",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 90,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "8c2ae539-8c84-4340-9c9c-4f4b52b342a8",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-11-06T18:24:15.759Z"
            ],
            "awardDates": [
                "2019-11-07T18:24:23.193Z"
            ],
            "offer": {
                "id": "8c2ae539-8c84-4340-9c9c-4f4b52b342a8",
                "version": 2,
                "name": "SERVLOC_TXT_6268460655a99e88f13617a2bec3905db99c08800e1ac1c920acbacb815981b0",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-09-09T14:30:00.967Z"),
                "expiryDate": new Date("2025-12-31T00:00:00.000Z"),
                "priority": 1000000000,
                "isKilled": false,
                "iap": "null",
                "lootCrateId": "5b68ded9-411d-4f2b-816b-c1ed5e0be438",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 2,
                "backgroundImage": "Offer_backing_locked_yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_41fb180dd46d9968bdbd6c9b0692b851a4357353e041cc538f2d9a767ee1dcf8",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.0784313725490196,
                    "g": 0.7058823529411765,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "8f452778-e20e-4192-b121-2a857fc3afc0",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-06-21T18:01:33.790Z"
            ],
            "awardDates": [
                "2020-06-21T18:01:33.790Z"
            ],
            "offer": {
                "id": "8f452778-e20e-4192-b121-2a857fc3afc0",
                "version": 2,
                "name": "SERVLOC_TXT_58ac279b200aff9e2636c8bd272b527ff917a6bbc2b72e949f0814e18eca01f3",
                "description": "NOT USED",
                "type": 0,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 399,
                "hardCurrency2Cost": 0,
                "duration": 0,
                "startDate": new Date("2020-06-19T14:00:00.000Z"),
                "expiryDate": new Date("2020-06-22T03:00:00.000Z"),
                "priority": 10006,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "00000000-0000-0000-0000-000000000000",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Offer_backing_tier_D",
                "carId": "f3574c11-baf2-4b90-a843-abb97a84861d",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "9512957a-df99-4518-a333-da6f9ec6bb3b",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-06-23T20:22:25.479Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "9512957a-df99-4518-a333-da6f9ec6bb3b",
                "version": 2,
                "name": "SERVLOC_TXT_9e5762e5dfc4157021a6f64ea656a7140a4efd9042eaeb2d37f3610d54d9ec4e",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:05:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100016,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "6f7fbd97-c747-4cae-b3a1-72fee1d25280",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 75,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "9d3e87e6-8c65-4b14-b6a7-24e55ea8f1ba",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-07T07:50:02.113Z"
            ],
            "awardDates": [
                "2019-12-07T07:51:04.934Z"
            ],
            "offer": {
                "id": "9d3e87e6-8c65-4b14-b6a7-24e55ea8f1ba",
                "version": 2,
                "name": "SERVLOC_TXT_25bc6a1f878e65a5b5fd11c611ee060d5db8912e0af7a94844dadfdb1272e105",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-07T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-08T06:00:00.000Z"),
                "priority": 1007,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "9de9fc2e-5169-46a0-b6ef-f66a0e1182cd",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-06T18:24:16.034Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "9de9fc2e-5169-46a0-b6ef-f66a0e1182cd",
                "version": 2,
                "name": "SERVLOC_TXT_6ac89e433fed4f2ab143994335f06d872c74aa4134b25eaada61276cf9f96879",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-10-23T14:30:00.000Z"),
                "expiryDate": new Date("2019-12-31T12:50:30.000Z"),
                "priority": 1000000002,
                "isKilled": false,
                "iap": "rebel_racing_offer_starter",
                "lootCrateId": "3aac725a-a1e7-4777-b1fc-35fe53061697",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 1,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_3ca93ca9a80d8a6e467eb14698f9aae696a9a04555e6112cb06fcc82bcfc3846",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "ab2645bb-3ffe-4e68-aba8-f0accf9760cb",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-24T11:15:05.663Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "ab2645bb-3ffe-4e68-aba8-f0accf9760cb",
                "version": 2,
                "name": "SERVLOC_TXT_b4eb84fd1399f8d56a01f6dbf6100e6d6a8ba2f15fc72c68e88841727da013f8",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:45:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100006,
                "isKilled": false,
                "iap": "null",
                "lootCrateId": "1eb6aa86-95cd-49b9-859c-2ef405177619",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 25,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "ab589461-eab1-430e-acc1-29961c9cca79",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-04T19:13:37.427Z"
            ],
            "awardDates": [
                "2019-12-04T19:14:40.244Z"
            ],
            "offer": {
                "id": "ab589461-eab1-430e-acc1-29961c9cca79",
                "version": 2,
                "name": "SERVLOC_TXT_05f37cfa566c8cab44e08d33835d29a63cb988d75e2b96349c41cc913391a3df",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-03T18:00:00.554Z"),
                "expiryDate": new Date("2019-12-05T18:00:00.000Z"),
                "priority": 1004,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "b49746e7-2f4c-42d9-a9db-d4bdc1996170",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-24T07:53:53.469Z"
            ],
            "awardDates": [
                "2019-12-24T08:21:45.586Z"
            ],
            "offer": {
                "id": "b49746e7-2f4c-42d9-a9db-d4bdc1996170",
                "version": 2,
                "name": "SERVLOC_TXT_e95b55e00a863e7e1aa1403f2b1c14d9d68159e0948ca3bb450bac63c9923cd4",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-24T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-25T06:00:00.000Z"),
                "priority": 1024,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "c90354c4-279e-49a1-b82d-a50377dbe730",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "b637a077-0d6b-4847-b3b9-aaafb3043f49",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-25T11:12:35.397Z"
            ],
            "awardDates": [
                "2019-12-25T11:21:29.451Z"
            ],
            "offer": {
                "id": "b637a077-0d6b-4847-b3b9-aaafb3043f49",
                "version": 2,
                "name": "SERVLOC_TXT_d656ef2fd8452aeb03b4d1b9e24d83bd9e9702d86284a63cd3e07185a3f446cb",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-25T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-26T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "c90354c4-279e-49a1-b82d-a50377dbe730",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "b729a3ba-7b82-49ea-a2dc-9e0d93def989",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-24T09:38:21.277Z"
            ],
            "awardDates": [
                "2019-12-24T09:41:30.112Z"
            ],
            "offer": {
                "id": "b729a3ba-7b82-49ea-a2dc-9e0d93def989",
                "version": 2,
                "name": "SERVLOC_TXT_28edd9e61bab260882835fb5afa249e3565bab51b05f4fd52c826dfd7c82fef6",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-24T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-25T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.2901960784313726,
                    "g": 0.4745098039215686,
                    "b": 0.2784313725490196,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 0.2901960784313726,
                    "g": 0.4745098039215686,
                    "b": 0.2784313725490196,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "b89fa9b9-b21a-4ac5-ad80-e87ab570acfd",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-17T06:56:29.646Z"
            ],
            "awardDates": [
                "2019-12-17T06:58:22.075Z"
            ],
            "offer": {
                "id": "b89fa9b9-b21a-4ac5-ad80-e87ab570acfd",
                "version": 2,
                "name": "SERVLOC_TXT_c56b5bc9d62611b054d2ec07a03dc18afd18ae2a64c493780a1886e7a61539fb",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-17T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-18T06:00:00.000Z"),
                "priority": 1017,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "c90354c4-279e-49a1-b82d-a50377dbe730",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "b933aba7-6d36-495a-9dc6-de6c55731bc4",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-09T06:46:21.664Z"
            ],
            "awardDates": [
                "2019-12-09T06:47:25.851Z"
            ],
            "offer": {
                "id": "b933aba7-6d36-495a-9dc6-de6c55731bc4",
                "version": 2,
                "name": "SERVLOC_TXT_70383b0006b5371bffe61576fa3b7aeb51c5999f8778febe677364b9afe406f7",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-09T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-10T06:00:00.000Z"),
                "priority": 1009,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "bc89f540-e487-41ec-bc7c-62999fac10f2",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-25T11:12:35.797Z"
            ],
            "awardDates": [
                "2019-12-25T11:21:23.981Z"
            ],
            "offer": {
                "id": "bc89f540-e487-41ec-bc7c-62999fac10f2",
                "version": 2,
                "name": "SERVLOC_TXT_14b66a03da870adcd5bb180de9221cc3176c601f9f873b3587791158824f6c8f",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-25T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-26T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "a89c7330-6c95-4524-ae96-b398fa4e8156",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.27450980392156865,
                    "g": 0.3607843137254902,
                    "b": 0.6392156862745098,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 0.27450980392156865,
                    "g": 0.3607843137254902,
                    "b": 0.6392156862745098,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "bdef9f81-5988-45d1-ac66-c85e155c4c50",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-31T09:00:10.226Z"
            ],
            "awardDates": [
                "2019-12-31T09:18:23.339Z"
            ],
            "offer": {
                "id": "bdef9f81-5988-45d1-ac66-c85e155c4c50",
                "version": 2,
                "name": "SERVLOC_TXT_b30237da279f9d2da5fd4dbf8dde3decfc4fc439d5720bb0e81bd7b16c0aeb24",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-31T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-01T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas02v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "c07a2df8-6700-4c3d-8f0e-4196f95b93cb",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-07-25T07:45:17.805Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "c07a2df8-6700-4c3d-8f0e-4196f95b93cb",
                "version": 2,
                "name": "SERVLOC_TXT_d969b8335f05b6201d975b55d8b9125fe32fab86dadfc9d0b9b565a4aec2181f",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-09-26T20:15:00.761Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100020,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "e3f4f376-438a-4ad5-bbda-c997382591cf",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 95,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "c1282643-3b1e-4f59-a1ce-07b9361bf215",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-29T11:30:31.893Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "c1282643-3b1e-4f59-a1ce-07b9361bf215",
                "version": 2,
                "name": "SERVLOC_TXT_5c7351e3696510958c9a6957308c3eba7366bd740b4f02ef1e3698934b887178",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 1100,
                "hardCurrency2Cost": 0,
                "duration": 2880,
                "startDate": new Date("2019-11-29T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-04T06:00:00.000Z"),
                "priority": 100010,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "b7edaa85-f6bf-47ce-9512-1cf32363615f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Special_blackfriday",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "c2238d29-02d3-4431-bf34-0387114cfea8",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-12-06T17:31:39.747Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "c2238d29-02d3-4431-bf34-0387114cfea8",
                "version": 2,
                "name": "SERVLOC_TXT_15ca1576d62217e8ce9bbd9fde4fea6907e93a0c7483233fb35a464bd3857c95",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:50:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100008,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "7fd3dc92-9f20-4257-ba00-8600fd1c0353",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 35,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "c22ffc5a-26fd-4c69-b6d0-ed37bd7146a2",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-28T09:30:48.237Z"
            ],
            "awardDates": [
                "2019-12-28T09:32:34.815Z"
            ],
            "offer": {
                "id": "c22ffc5a-26fd-4c69-b6d0-ed37bd7146a2",
                "version": 2,
                "name": "SERVLOC_TXT_5ed74e701b5e66bd347e891263fb4b9e1f4b1a14fe84c4c9458e7ea3c8bd73d4",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-28T09:00:00.000Z"),
                "expiryDate": new Date("2019-12-29T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "c5d9b379-e1a6-48f8-8620-cd13c2a7fe0d",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2020-01-01T09:18:39.486Z"
            ],
            "awardDates": [
                "2020-01-01T13:42:24.180Z"
            ],
            "offer": {
                "id": "c5d9b379-e1a6-48f8-8620-cd13c2a7fe0d",
                "version": 2,
                "name": "SERVLOC_TXT_025b6722bb2b0517533d84dd15a33f094440d011e11a6a264d8065e7d498c050",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2020-01-01T09:00:00.000Z"),
                "expiryDate": new Date("2020-01-02T09:00:00.000Z"),
                "priority": 10001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_Backing_Xmas01v2",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_82a2a5d2a5f3a9c059459d222faa51aaf093bdd0b94aaf0855ed0afa1e26348b",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0.807843137254902,
                    "g": 0.26666666666666666,
                    "b": 0.25882352941176473,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "cb3b290f-943b-46af-859c-dbdd27f91b5c",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-04-29T15:00:55.862Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "cb3b290f-943b-46af-859c-dbdd27f91b5c",
                "version": 2,
                "name": "SERVLOC_TXT_bbb6b0c2e7a60c54a838baec0f22f9908b5352e80b78afbe62ba4057c67e8353",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:00:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100014,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "1db4eca7-30f1-4751-9547-ed63b79a2189",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 65,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "cb58212b-ed00-4121-bf45-c3276ccd5726",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-11-14T18:14:26.096Z"
            ],
            "awardDates": [
                "2019-11-14T18:15:01.992Z"
            ],
            "offer": {
                "id": "cb58212b-ed00-4121-bf45-c3276ccd5726",
                "version": 2,
                "name": "SERVLOC_TXT_ba91cb86d9740a157c73ebcb77e7a085306ef1504f2e59aabc99569718aa8903",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:45:00.000Z"),
                "expiryDate": new Date("2024-09-02T13:32:09.000Z"),
                "priority": 100004,
                "isKilled": false,
                "iap": "null",
                "lootCrateId": "62eeab93-8de9-439d-9431-28943a2e3587",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 15,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "cb8fb75e-cd9b-4dc9-93a2-75e8663d3c06",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-14T07:37:59.471Z"
            ],
            "awardDates": [
                "2019-12-14T07:39:03.214Z"
            ],
            "offer": {
                "id": "cb8fb75e-cd9b-4dc9-93a2-75e8663d3c06",
                "version": 2,
                "name": "SERVLOC_TXT_67045aad19dd19463e27fb6e8567f795665700c0de41f2b074a00209550b0c6b",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-14T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-15T06:00:00.000Z"),
                "priority": 1014,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "ce91955f-aa68-4efc-8713-e2eebe6078ef",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-09T09:02:55.296Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "ce91955f-aa68-4efc-8713-e2eebe6078ef",
                "version": 2,
                "name": "SERVLOC_TXT_5bcb9645b2a2405419f070bd3755e508eafaa8274a3053ed6c8724b458452a79",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-10-23T14:30:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:50:34.000Z"),
                "priority": 100,
                "isKilled": false,
                "iap": "rebel_racing_offer_tier_2",
                "lootCrateId": "41cdb12f-0fe2-4fd9-9a74-ba6d166b2963",
                "minTriggerTier": 2,
                "maxTriggerTier": 5,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_tier_C",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "d31f734e-377d-469f-81df-02e9baa2053b",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-01T07:47:18.846Z"
            ],
            "awardDates": [
                "2019-12-01T11:32:01.948Z"
            ],
            "offer": {
                "id": "d31f734e-377d-469f-81df-02e9baa2053b",
                "version": 2,
                "name": "SERVLOC_TXT_85acb9a3529f41d84812c0ca310eb7d33eb218275511cbf9645b7446dd2796af",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-01T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-02T06:00:00.000Z"),
                "priority": 1001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "d43d13be-7236-44e4-a102-6bf2df84af94",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-03T06:27:00.248Z"
            ],
            "awardDates": [
                "2019-12-03T06:29:25.333Z"
            ],
            "offer": {
                "id": "d43d13be-7236-44e4-a102-6bf2df84af94",
                "version": 2,
                "name": "SERVLOC_TXT_1e475908daf4d14625f76a533ad342e6894e4a6fb1e07158969ea6961c6759ec",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-03T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-04T06:00:00.000Z"),
                "priority": 1003,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "d737f531-a5e0-4f13-8756-84a916201ff1",
            "numTimesClaimed": 7,
            "triggerDates": [
                "2020-08-10T17:54:21.934Z",
                "2020-08-10T17:54:28.248Z",
                "2020-08-10T17:54:34.172Z",
                "2020-08-10T17:54:40.555Z",
                "2020-08-10T17:54:46.091Z",
                "2020-08-10T17:54:51.955Z",
                "2020-08-10T17:55:07.212Z"
            ],
            "awardDates": [
                "2020-08-10T17:54:21.934Z",
                "2020-08-10T17:54:28.248Z",
                "2020-08-10T17:54:34.172Z",
                "2020-08-10T17:54:40.555Z",
                "2020-08-10T17:54:46.091Z",
                "2020-08-10T17:54:51.955Z",
                "2020-08-10T17:55:07.212Z"
            ],
            "offer": {
                "id": "d737f531-a5e0-4f13-8756-84a916201ff1",
                "version": 2,
                "name": "SERVLOC_TXT_2beaa0d43e978c61e636d921261ceec7808c7b22087eb96d61039e5fdc6663ac",
                "description": "NOT USED",
                "type": 0,
                "maxClaims": 25,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 0,
                "startDate": new Date("2020-08-10T13:59:00.000Z"),
                "expiryDate": new Date("2020-08-17T03:01:00.000Z"),
                "priority": 10004,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "baac4b08-97b1-4947-aedc-55b3466553a8",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 0,
                "backgroundImage": "Offer_custom_RaptorCrate",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_00ccc2bab5ca5306b518b3fb7f73f091fb4fd53f9e7ccdd59190d9a7cf68b84a",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.0784313725490196,
                    "a": 1
                },
                "isTiledBackground": false
            },
            "version": 2
        },
        {
            "offerId": "db6e98f9-be05-4fee-a5cf-d03d0d683815",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-12T06:37:34.678Z"
            ],
            "awardDates": [
                "2019-12-12T09:04:54.148Z"
            ],
            "offer": {
                "id": "db6e98f9-be05-4fee-a5cf-d03d0d683815",
                "version": 2,
                "name": "SERVLOC_TXT_85427f4717e2f00a3d100af5c1dc8041fdc785e77f6cf0015d55d5cc89039bd0",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-12T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-13T06:00:00.000Z"),
                "priority": 1012,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "ddad83c5-feb1-4988-8202-272a9e025dd4",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-11-06T18:24:16.338Z"
            ],
            "awardDates": [
                "2019-11-06T18:26:16.566Z"
            ],
            "offer": {
                "id": "ddad83c5-feb1-4988-8202-272a9e025dd4",
                "version": 2,
                "name": "SERVLOC_TXT_cf30c134fda139c1a7ffc7800f1970d8387ff66cc3776a68f3b478d18bb85272",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-11-04T12:00:00.000Z"),
                "expiryDate": new Date("2019-11-08T08:00:00.000Z"),
                "priority": 2000000001,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "6b4a19c5-8784-49d1-a864-a200a77496f8",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "ddccfd71-a6b1-4f7f-8b3b-8965aa09758e",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-08-04T12:19:43.355Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "ddccfd71-a6b1-4f7f-8b3b-8965aa09758e",
                "version": 2,
                "name": "SERVLOC_TXT_0bd451c0184b76df91a517ca81a3e9e45ac0d1916de7ee28b08bd07cdb50b4f1",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 999,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:00:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100021,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "b6d6468a-be76-46d6-8f85-fbdf177d5687",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 100,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "e8458b8a-1fb9-49fe-9516-95cbd1a32b0c",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-01-03T08:20:06.009Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "e8458b8a-1fb9-49fe-9516-95cbd1a32b0c",
                "version": 2,
                "name": "SERVLOC_TXT_dace1c6b97b2af7d6bfe0ca90debbb1059bdfe7622e081b1789505722b954811",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 249,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T20:55:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100010,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f4453f47-cd56-4cd1-9774-fc351895ee9a",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 45,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_dfb23c599a3afec590b215c08429c93f1d08ac3665d3a9b9fb9d5f64b57855d2",
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "e8ab2765-5a54-4aa0-bf5b-2ede2d15bae6",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2019-11-18T10:17:10.009Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "e8ab2765-5a54-4aa0-bf5b-2ede2d15bae6",
                "version": 2,
                "name": "SERVLOC_TXT_07d550f642aa9a36013da69395133937c9b541658ab4136f4409f76522d5c926",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-10-23T14:30:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:50:34.000Z"),
                "priority": 102,
                "isKilled": false,
                "iap": "rebel_racing_offer_tier_4",
                "lootCrateId": "0c505441-fdef-491f-bc3e-41bd7cdbeb16",
                "minTriggerTier": 4,
                "maxTriggerTier": 5,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_tier_A",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "e963c97b-7b52-40d9-8dd9-f6bdbea60118",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-11-06T18:24:16.600Z"
            ],
            "awardDates": [
                "2019-11-06T18:26:31.759Z"
            ],
            "offer": {
                "id": "e963c97b-7b52-40d9-8dd9-f6bdbea60118",
                "version": 2,
                "name": "SERVLOC_TXT_99ac98de29036375e1c73e446112d590fc3daa5431bf1902dd8da49ea22e95ac",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-11-04T12:00:00.000Z"),
                "expiryDate": new Date("2019-11-08T08:00:00.000Z"),
                "priority": 2000000002,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "6303d172-b91c-4226-9e15-998de912fb74",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_Yellow",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "e9807659-9633-4dfb-91c6-c961ae7e0e7d",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-18T09:03:55.352Z"
            ],
            "awardDates": [
                "2019-12-18T09:09:12.229Z"
            ],
            "offer": {
                "id": "e9807659-9633-4dfb-91c6-c961ae7e0e7d",
                "version": 2,
                "name": "SERVLOC_TXT_b3adcf7429f826e1e0dfcb53336c50355b56b352cdced48a459b36ee617feb91",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-18T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-19T06:00:00.000Z"),
                "priority": 1018,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "497c46e6-3952-424d-8df9-7bf162ffb03f",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "e9fe8ebd-1248-41e7-beac-e3b09ecdd564",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-05T06:47:29.039Z"
            ],
            "awardDates": [
                "2019-12-05T06:49:05.105Z"
            ],
            "offer": {
                "id": "e9fe8ebd-1248-41e7-beac-e3b09ecdd564",
                "version": 2,
                "name": "SERVLOC_TXT_4ba770ab057df80636fefe87d22dcaa7d73eee7257064f988d9fcf7a37a42a63",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-05T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-06T06:00:00.000Z"),
                "priority": 1005,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "efac049d-a863-4ae3-8cc5-4565355ce88b",
            "numTimesClaimed": 1,
            "triggerDates": [
                "2019-12-15T07:27:59.233Z"
            ],
            "awardDates": [
                "2019-12-15T08:10:04.269Z"
            ],
            "offer": {
                "id": "efac049d-a863-4ae3-8cc5-4565355ce88b",
                "version": 2,
                "name": "SERVLOC_TXT_c42b40845c663b62a68a2ce83c8f7f266b1a2ac86a2c38572b12c69ad6c6f50e",
                "description": "NOT USED",
                "type": 1,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 0,
                "hardCurrency2Cost": 0,
                "duration": 1,
                "startDate": new Date("2019-12-15T06:00:00.000Z"),
                "expiryDate": new Date("2019-12-16T06:00:00.000Z"),
                "priority": 1015,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 5,
                "backgroundImage": "Offer_backing_RR_red",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 1,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": null,
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 1,
                    "g": 0.0784313725490196,
                    "b": 0.1568627450980392,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        },
        {
            "offerId": "f57f739d-2056-4951-8403-7e94841e0635",
            "numTimesClaimed": 0,
            "triggerDates": [
                "2020-07-01T18:05:02.334Z"
            ],
            "awardDates": [],
            "offer": {
                "id": "f57f739d-2056-4951-8403-7e94841e0635",
                "version": 2,
                "name": "SERVLOC_TXT_254cb7b452b27c5c830e83338d840768fb7b8592c74c99630a855a41dc944e68",
                "description": "NOT USED",
                "type": 2,
                "maxClaims": 1,
                "softCurrency1Cost": 0,
                "hardCurrency1Cost": 599,
                "hardCurrency2Cost": 0,
                "duration": 1440,
                "startDate": new Date("2019-11-04T21:10:00.000Z"),
                "expiryDate": new Date("2024-09-01T13:32:09.000Z"),
                "priority": 100017,
                "isKilled": false,
                "iap": null,
                "lootCrateId": "150959b5-979e-433b-9369-d5bae1111f58",
                "minTriggerTier": 0,
                "maxTriggerTier": 0,
                "minTriggerGold": 0,
                "maxTriggerGold": 0,
                "minTriggerVIPTier": -1,
                "maxTriggerVIPTier": -1,
                "minTriggerDaysLapsed": 0,
                "maxTriggerDaysLapsed": 0,
                "placementType": 7,
                "backgroundImage": "Offer_backing_blue",
                "carId": "00000000-0000-0000-0000-000000000000",
                "minTriggerPlayerLevel": 80,
                "maxTriggerPlayerLevel": 100,
                "nameColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalText": "SERVLOC_TXT_15319fe7dcde42ee154801511e649ceeb5ab0001f83d138dd74131ba0e124780",
                "optionalTextColor": {
                    "r": 1,
                    "g": 1,
                    "b": 1,
                    "a": 1
                },
                "optionalTextBackgroundColor": {
                    "r": 0,
                    "g": 0,
                    "b": 0,
                    "a": 1
                },
                "isTiledBackground": true
            },
            "version": 2
        }
    ],
    "socialAccounts": [
        {
            "socialId": "10157454539001855",
            "socialType": "facebook",
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "region": "we",
            "socialDetails": {
                "name": "Geoff Pate",
                "socialType": "facebook",
                "email": null,
                "locale": null
            },
            "isDissociated": false
        }
    ],
    "logEntries": [
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "0117ded8-ba2c-4109-a256-c0a91a6a4e6f",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-19T16:39:07.187Z",
            "scope": "/internal/api/progress/startpvgrace"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "040779fa-d470-424d-9d1f-c92d8b284d7e",
            "warn": false,
            "error": true,
            "timestamp": "2020-04-12T13:44:01.108Z",
            "scope": "/api/game/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "0a56f52b-d8f8-43f1-8124-89a180e71111",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-25T16:35:31.928Z",
            "scope": "/internal/api/user/update"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "11e40406-760d-4b6c-9a1f-48675dd89497",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-21T22:07:02.764Z",
            "scope": "/internal/api/events/player/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "1624afd6-f17e-4e26-8997-e7c6996aa0f8",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-06T18:43:11.470Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "1d6883dc-3145-4cc6-b10c-8d959abd5ac7",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-06T17:38:50.617Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "20d3e9d1-9083-4904-94f9-f1d99b7ee499",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-23T19:57:00.825Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "24d4c6cb-6dac-4659-9788-91b3991a9764",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-08T16:48:11.135Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "27158d85-5c85-4c07-9f84-4ec29fbe7010",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:24:54.731Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "27f21bc2-3d16-4347-a7d6-efce0d6bb17f",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-02T20:24:44.893Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "36bb4625-573e-46de-89e0-0ca49a54649a",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-21T22:06:51.494Z",
            "scope": "/internal/api/events/player/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "37a55d43-a796-4450-8f2a-21791ce78f8d",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-25T16:35:09.264Z",
            "scope": "/internal/api/user/update"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "45eb322e-3e9d-4d6e-b7c3-4032eff1ebe0",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:24:54.910Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "485e7d88-df18-4ba0-b0fa-c9d3a404e888",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T17:40:36.250Z",
            "scope": "/internal/api/event/pvg/completechallenge"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "49f87dd3-057d-40a5-8ae6-2dea0b7a84a5",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T17:40:43.780Z",
            "scope": "/api/game/pvg/endrace"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "4cb49cd5-5560-4b5d-9377-5089770a7857",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-14T08:59:10.339Z",
            "scope": "/api/game/garage/upgradecar"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "4d41fbf4-2df3-4b1f-a283-3f10928a117a",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-29T13:23:01.502Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "4f7a3044-173b-4551-b865-d1617921d187",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-14T07:40:50.589Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "536aa0cc-fc42-4e8a-828f-64b3f80e83aa",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-25T16:35:24.411Z",
            "scope": "/internal/api/user/update"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "5490a1b1-a888-484b-b568-9609dd53433e",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-22T13:09:15.251Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "69f6094b-36d5-4c10-929c-e9e053712ca4",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T17:40:37.431Z",
            "scope": "/internal/api/event/pvg/completechallenge"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "6c79acc6-a1ae-4a1a-be2c-96bee4f8dd29",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-21T22:06:40.798Z",
            "scope": "/internal/api/events/player/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "7231f998-ea1a-4695-babb-65dad816f0f0",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-14T08:59:12.076Z",
            "scope": "/internal/api/garage/upgradecar"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "7460a8ae-b115-4bc6-b16e-2153f0fe71fe",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-26T20:20:44.651Z",
            "scope": "/api/game/ladder/register"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "751de281-37a1-42ff-b52f-06b0ace94e76",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-18T16:34:59.757Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "7a755c10-eaee-4200-9ed2-d9f51f80fe69",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-26T20:20:44.548Z",
            "scope": "/internal/api/event/ladder/register"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "7ec4a549-3721-450b-a44a-5e0d4b15e702",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-31T20:35:25.381Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "817a94ec-eb12-4c6e-a87c-6ccb0673852a",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T16:55:50.367Z",
            "scope": "/api/game/pvg/endrace"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "81930d34-9a2d-4460-84e2-493e5203a6fe",
            "warn": false,
            "error": true,
            "timestamp": "2020-02-03T13:48:33.585Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "848933b3-b2fe-4b75-9120-f18c84b17142",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-29T15:24:05.543Z",
            "scope": "/internal/api/events/player/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "89f4584b-dae9-41e3-884e-c837958303b2",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:24:54.797Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "8eaea770-2d3e-4c64-b313-f8434bb7f02b",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-14T08:59:12.234Z",
            "scope": "/api/game/garage/upgradecar"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "98928cda-ee67-4ec3-9731-0a750dbadeec",
            "warn": false,
            "error": true,
            "timestamp": "2020-04-12T13:49:49.636Z",
            "scope": "/internal/api/events/player/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "98a73181-feea-4911-9373-33bceed0c1c3",
            "warn": false,
            "error": true,
            "timestamp": "2020-04-12T13:43:38.925Z",
            "scope": "/api/game/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "9b57de19-e6ae-4d8f-a85f-6df937409055",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T16:55:50.028Z",
            "scope": "/internal/api/event/pvg/completechallenge"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "a1e5db6a-c840-4f3d-bf88-d31b40f2d8a4",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-25T09:55:46.415Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "a45de5b5-4be5-4375-bcb4-feb5684f314a",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-25T16:35:31.948Z",
            "scope": "/api/game/pvg/endrace"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "a7cf1e20-5c7d-46ca-b5cd-ff3d52f56df0",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-15T07:27:50.181Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "a9152f16-cca0-46fd-83a8-aa15cfa30eaa",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-19T16:39:07.296Z",
            "scope": "/api/game/pvg/matchmake"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "b11cd035-2c34-4356-9722-f8c6323e6859",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-08T21:16:27.610Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "bf3feb32-cb92-4541-9909-4388f5212d58",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-15T10:21:22.656Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "bfd6e527-b580-4df4-94aa-aae71a12cb0b",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T17:40:35.426Z",
            "scope": "/internal/api/event/pvg/completechallenge"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "c12e5549-47a5-4286-8a89-488662eac35b",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:24:54.717Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "c3c1dd3b-17c7-4731-a192-dce13157ec73",
            "warn": false,
            "error": true,
            "timestamp": "2020-02-03T11:57:21.284Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "c49d49a8-4a61-433f-8f80-511075abb2be",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:34:48.869Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "c927dd99-0f5d-4b22-9b77-5d45d8f4c734",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-08T06:43:22.443Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "cd7fc05c-11df-4ca9-980b-de45d186cf3e",
            "warn": false,
            "error": true,
            "timestamp": "2020-04-12T13:43:37.591Z",
            "scope": "/api/game/syncevents"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "cd8c8b87-f8be-4b72-b1f6-528b9bc5a414",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-15T11:17:17.777Z",
            "scope": "/api/login_v2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "d043004d-bb56-4d4e-abb4-c2e5c1a2b9d8",
            "warn": false,
            "error": true,
            "timestamp": "2020-04-12T13:44:01.085Z",
            "scope": "/api/game/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "d5a848cc-cdee-447f-9063-290f9a3af1a8",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T17:40:40.541Z",
            "scope": "/internal/api/event/pvg/completechallenge"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "d97995a7-1a6b-404a-9cad-f3741e95ef7b",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-14T16:05:22.642Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "daac8cb6-4ec2-42f2-a828-a45333ee7693",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-25T16:35:28.843Z",
            "scope": "/internal/api/user/update"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "e8dbfe9e-3847-4722-a0bc-98281fd977c9",
            "warn": false,
            "error": true,
            "timestamp": "2019-11-19T17:40:43.679Z",
            "scope": "/internal/api/event/pvg/completechallenge"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "e97f5322-543e-4ff7-8635-f55514113b27",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-23T08:45:21.817Z",
            "scope": "/internal/api/events/player/sync"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "e99058a7-1d51-4e68-81be-ebbb9646c638",
            "warn": false,
            "error": true,
            "timestamp": "2020-01-06T20:58:16.624Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "eaaa372d-5b2f-435e-a421-49ab6a05a601",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:25:01.149Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "eb7012c2-b08f-408e-8eb9-89f2cf33deca",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-02T17:07:38.786Z",
            "scope": "/internal/api/event/pvg/completechallenge2"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "ecf77b7c-5e2b-47aa-a855-6c73b1fc1925",
            "warn": false,
            "error": true,
            "timestamp": "2019-12-28T08:34:44.733Z",
            "scope": "/api/refresh"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "f05243fc-0097-4f1f-af5d-c2769c97a312",
            "warn": false,
            "error": true,
            "timestamp": "2020-08-01T16:24:54.867Z",
            "scope": "/api/garage/equipaugment"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "f5291fa4-e588-4268-8393-f979446d0147",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-29T05:08:57.767Z",
            "scope": "/internal/api/events/ladder/playerdata/8f5ed1b7-1fd3-47c1-8f82-e82831fa0b49"
        },
        {
            "userId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "requestId": "f9c99396-0a2d-41ff-bf99-579b82e5acf7",
            "warn": false,
            "error": true,
            "timestamp": "2020-07-25T16:35:25.697Z",
            "scope": "/internal/api/user/update"
        }
    ],
    "ads": {
        "pvgticket": {
            "playerdata": {
                "lastAdWatched": "2020-07-19T23:27:20.548Z",
                "numAdsWatched": 1,
                "firstAdWatchedInPeriod": "2020-07-19T23:27:20.548Z"
            },
            "config": {
                "cooldown": 3600,
                "capPeriod": 36000,
                "cap": 10,
                "midnightReset": true,
                "gameConfig": {}
            }
        },
        "pvgrematch": {
            "playerdata": {
                "lastAdWatched": "2020-08-08T17:23:31.625Z",
                "numAdsWatched": 1,
                "firstAdWatchedInPeriod": "2020-08-08T17:23:31.625Z",
            },
            "config": {
                "cooldown": 3600,
                "capPeriod": 36000,
                "cap": 10,
                "midnightReset": true,
                "gameConfig": {}
            }
        },
        "rematch": {
            "playerdata": null,
            "config": {
                "cooldown": 60,
                "capPeriod": 86400,
                "cap": 12,
                "midnightReset": true,
                "gameConfig": {}
            }
        },
        "gold": {
            "playerdata": null,
            "config": {
                "cooldown": 3600,
                "capPeriod": 36000,
                "cap": 10,
                "midnightReset": true,
                "gameConfig": {}
            }
        },
        "cash": {
            "playerdata": {
                "lastAdWatched": "2020-08-04T16:47:27.241Z",
                "numAdsWatched": 5,
                "firstAdWatchedInPeriod": "2020-08-04T16:44:36.713Z",
            },
            "config": {
                "cooldown": 0,
                "capPeriod": 28800,
                "cap": 5,
                "midnightReset": false,
                "gameConfig": {
                    "1": {
                        "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                        "rewardAmount": [
                            250,
                            300,
                            375,
                            500
                        ]
                    },
                    "2": {
                        "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                        "rewardAmount": [
                            300,
                            350,
                            425,
                            600
                        ]
                    },
                    "3": {
                        "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                        "rewardAmount": [
                            400,
                            475,
                            600,
                            800
                        ]
                    },
                    "4": {
                        "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                        "rewardAmount": [
                            525,
                            625,
                            800,
                            1000
                        ]
                    },
                    "5": {
                        "lootCrateId": "f6c11645-1a25-455b-b3e2-00d375106ca2",
                        "rewardAmount": [
                            700,
                            850,
                            1000,
                            1400
                        ]
                    }
                }
            }
        },
        "fuel": {
            "playerdata": {
                "lastAdWatched": "2020-08-14T08:07:48.126Z",
                "numAdsWatched": 1,
                "firstAdWatchedInPeriod": "2020-08-14T08:07:48.126Z"
            },
            "config": {
                "cooldown": 1800,
                "capPeriod": 86400,
                "cap": 48,
                "midnightReset": false,
                "gameConfig": {}
            }
        }
    },
    "dailyGift": {
        "dateNextGiftAvailable": new Date("2020-09-08T16:59:25.000Z"),
        "dateNextConsecutiveGiftAvailable": new Date("2020-09-08T16:59:25.915Z"),
        "totalGiftsClaimed": 182,
        "consecutiveGiftsClaimed": 4,
        "maxConsecutiveGiftsClaimed": 81
    },
    "ftueProgress": [
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "Augments",
            "version": 4,
            "lastStepStarted": "None",
            "lastStepComplete": "None"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "CarInventory",
            "version": 4,
            "lastStepStarted": "CarInventoryIntroduction",
            "lastStepComplete": "CarInventoryIntroduction"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "Clubs",
            "version": 4,
            "lastStepStarted": "None",
            "lastStepComplete": "None"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "Customisations",
            "version": 4,
            "lastStepStarted": "None",
            "lastStepComplete": "None"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "Fuel",
            "version": 4,
            "lastStepStarted": "FuelIntroduction",
            "lastStepComplete": "FuelIntroduction"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "Fusion",
            "version": 4,
            "lastStepStarted": "FusionIntroduction",
            "lastStepComplete": "FusionIntroduction"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "LootCrate",
            "version": 4,
            "lastStepStarted": "None",
            "lastStepComplete": "None"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "MainFTUE",
            "version": 4,
            "lastStepStarted": "FirstBossRaceAvailable",
            "lastStepComplete": "FirstBossRaceAvailable"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "OffRoad",
            "version": 4,
            "lastStepStarted": "OffRoadShopIntroduction",
            "lastStepComplete": "OffRoadShopIntroduction"
        },
        {
            "hutchId": "79aa4dfd-0ca6-486a-9c61-82bfc6525207",
            "ftueStory": "Tiers",
            "version": 4,
            "lastStepStarted": "CompleteTier4",
            "lastStepComplete": "CompleteTier4"
        }
    ],
    "fuel": {
        "remaining": 8,
        "timer": new Date("2020-09-07T16:59:41.434Z"),
        "max": 8,
        "fuelAdjust": 0
    },
    "userCars": [
        {
            "userCarId": "07e974a7-8084-4774-aefc-f6f50dcb28f5",
            "carId": "5c2d3818-9124-4845-9704-46792a4e7562",
            "garageSlot": 31,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "0968a3aa-0ecd-4243-bae5-1198db9b8e47",
            "carId": "37280727-1c3a-445a-bae8-d764e2f472d2",
            "garageSlot": 31,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "0d416e56-c195-418d-bbcf-a225289ae1c1",
            "carId": "1f54b48b-ff66-4fd8-8f33-36ca13a80e98",
            "garageSlot": 27,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "Mercedes_AMGGT_2017_Decals_04"
            ],
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-01-20T00:12:36.523Z",
            "upgradeEngineLevel": 5,
            "upgradeEngineCompletionTime": "2020-01-21T10:48:53.151Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2020-01-21T10:48:54.965Z",
            "upgradeBoostLevel": 5,
            "upgradeBoostCompletionTime": "2020-01-20T17:17:58.396Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2020-01-21T10:48:39.305Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2020-01-20T17:18:01.523Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-01-20T15:44:08.502Z",
            "source": 5
        },
        {
            "userCarId": "11158992-9b27-445e-bd0a-9822c0c26dae",
            "carId": "5d20d0e0-40c1-430b-bacd-9c8e4ce950a8",
            "garageSlot": 20,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "Mercedes_C63_AMG2015_Decals_08"
            ],
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-01-14T11:58:08.157Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2020-01-14T11:58:18.958Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2020-01-14T11:58:11.869Z",
            "upgradeBoostLevel": 5,
            "upgradeBoostCompletionTime": "2020-01-15T08:38:19.637Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2020-01-15T08:38:16.452Z",
            "upgradeIntakeLevel": 3,
            "upgradeIntakeCompletionTime": "2020-01-13T16:42:50.296Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-01-15T01:23:06.662Z",
            "source": 0
        },
        {
            "userCarId": "120aeb50-4c03-4d3c-91e6-21d56249aa6e",
            "carId": "3a2cad52-1522-4ceb-8b15-1a6cf2ab23af",
            "garageSlot": 57,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "1a5ab85d-ec13-4dff-b8b1-eb88bd75ed11",
            "carId": "59b19fe0-9fc8-4a27-b5f1-a204d7d48057",
            "garageSlot": 1,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 3,
            "upgradeTyresCompletionTime": "2020-08-05T09:26:20.070Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2020-08-06T21:48:37.434Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-08-05T09:26:22.601Z",
            "upgradeBoostLevel": 3,
            "upgradeBoostCompletionTime": "2020-08-05T09:26:24.648Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-08-05T09:26:26.344Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-08-28T12:04:01.780Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-08-08T05:51:51.187Z",
            "source": 12
        },
        {
            "userCarId": "1cb9a3df-6599-43e4-9af7-23ed8d6e1ae3",
            "carId": "470e0f91-0dc8-4755-9e22-cde6269a9b99",
            "garageSlot": 16,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2019-12-06T14:01:45.202Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2019-11-11T20:25:40.086Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2019-11-11T16:27:28.319Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-11-12T15:23:55.823Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2019-12-06T14:01:42.649Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2019-12-06T15:15:42.377Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2019-12-06T12:41:36.721Z",
            "source": 0
        },
        {
            "userCarId": "2882088c-1fd8-4d95-8c78-ef3df2f9faf7",
            "carId": "92de52e2-be68-4e14-893c-d275315b2120",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "2a50fff7-386b-410c-b2d9-133c36601e43",
            "carId": "21f1309b-0f15-4cde-815a-9a6c1f60a8d8",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "2cf646d2-7578-445a-a574-c9e132047ced",
            "carId": "f071d6fd-38f5-49ce-ae06-b73489dc75bd",
            "garageSlot": 57,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2019-12-16T21:23:05.431Z",
            "upgradeEngineLevel": 5,
            "upgradeEngineCompletionTime": "2019-12-23T11:32:17.324Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2019-12-23T11:32:12.988Z",
            "upgradeBoostLevel": 6,
            "upgradeBoostCompletionTime": "2019-12-23T13:14:04.802Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2019-12-23T07:23:23.862Z",
            "upgradeIntakeLevel": 6,
            "upgradeIntakeCompletionTime": "2019-12-23T13:14:00.236Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2019-12-22T22:38:02.232Z",
            "source": 0
        },
        {
            "userCarId": "34857ac8-ead2-4e8f-845e-618d0fdc7c7f",
            "carId": "1e9f49b1-4447-4ad0-969a-7554eba44ded",
            "garageSlot": 21,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "mx5_wheel_black"
            ],
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "mx5_decal_3"
            ],
            "customisationsPaintBody": [
                "mx5_fac_mat_jetblack"
            ],
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-01-12T14:33:55.673Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2020-01-12T14:34:13.316Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2020-01-12T14:34:00.318Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-01-12T14:34:04.240Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2020-01-12T14:34:09.015Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-01-12T14:33:50.284Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "36158422-0eef-45fa-8c63-886cdd339345",
            "carId": "4a5f34de-39ae-4a9d-96c1-3847cda4ce0a",
            "garageSlot": 62,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "3d8fd491-eace-4081-b0e4-25aa82f9402e",
            "carId": "2a4332a5-461f-4f50-8313-f79e647f25f4",
            "garageSlot": 59,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "mclaren_570_wheel_grey_02"
            ],
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "McLaren_570s_Coupe_Decals_02"
            ],
            "customisationsPaintBody": [
                "mclaren_570_mclaren_570_orange"
            ],
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2020-07-24T22:01:25.155Z",
            "upgradeEngineLevel": 5,
            "upgradeEngineCompletionTime": "2020-07-21T17:26:50.257Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2020-07-24T22:01:18.876Z",
            "upgradeBoostLevel": 5,
            "upgradeBoostCompletionTime": "2020-07-24T18:27:14.116Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2020-07-24T22:01:11.781Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2020-07-21T13:13:42.273Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-07-24T09:20:40.372Z",
            "source": 8
        },
        {
            "userCarId": "3ea569ca-a4b1-4bde-8e66-081a65a227b6",
            "carId": "5c78b3a3-0087-445f-be42-26af4e2e8bd1",
            "garageSlot": 55,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 3,
            "upgradeTyresCompletionTime": "2020-08-03T07:05:31.210Z",
            "upgradeEngineLevel": 3,
            "upgradeEngineCompletionTime": "2020-07-19T08:49:29.097Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-08-03T16:37:05.073Z",
            "upgradeBoostLevel": 1,
            "upgradeBoostCompletionTime": "2020-05-08T13:24:56.167Z",
            "upgradeGearboxLevel": 2,
            "upgradeGearboxCompletionTime": "2020-05-08T13:55:07.701Z",
            "upgradeIntakeLevel": 3,
            "upgradeIntakeCompletionTime": "2020-08-03T08:20:06.341Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 2
        },
        {
            "userCarId": "3f2ee55d-e64b-426b-b18f-094fafabc4a1",
            "carId": "fb87c714-086e-48dc-87ef-22b4fc0c12e7",
            "garageSlot": 3,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 2,
            "upgradeTyresCompletionTime": "2020-08-10T18:13:04.930Z",
            "upgradeEngineLevel": 2,
            "upgradeEngineCompletionTime": "2020-08-10T18:13:18.905Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-09-04T07:48:32.990Z",
            "upgradeBoostLevel": 3,
            "upgradeBoostCompletionTime": "2020-08-14T09:09:11.906Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-08-23T15:37:27.616Z",
            "upgradeIntakeLevel": 2,
            "upgradeIntakeCompletionTime": "2020-08-10T18:13:01.857Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "3fc3081e-6720-4658-9bb6-bd586e665c47",
            "carId": "7e877c7e-f26b-4ef8-b37a-7bc4f02d78a0",
            "garageSlot": 14,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 2,
            "upgradeTyresCompletionTime": "2020-02-11T16:39:14.110Z",
            "upgradeEngineLevel": 2,
            "upgradeEngineCompletionTime": "2020-02-11T16:39:19.204Z",
            "upgradeExhaustLevel": 1,
            "upgradeExhaustCompletionTime": "2020-02-11T16:37:51.772Z",
            "upgradeBoostLevel": 2,
            "upgradeBoostCompletionTime": "2020-02-11T16:39:21.358Z",
            "upgradeGearboxLevel": 1,
            "upgradeGearboxCompletionTime": "2020-02-11T16:37:54.458Z",
            "upgradeIntakeLevel": 2,
            "upgradeIntakeCompletionTime": "2020-02-11T16:39:11.527Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "41391654-f89b-45c3-9112-c5922cac8a7e",
            "carId": "92de52e2-be68-4e14-893c-d275315b2120",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "417dfab9-6d5f-43ad-946c-c2ca65a84213",
            "carId": "247d4ca5-fc4c-45d2-a7e4-4fc3d550b5a5",
            "garageSlot": 57,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-06-15T18:35:15.666Z",
            "upgradeEngineLevel": 2,
            "upgradeEngineCompletionTime": "2020-06-15T15:39:01.935Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-06-15T15:44:08.408Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-06-15T21:35:46.360Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-06-15T15:44:13.703Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-06-15T18:35:13.956Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "4633582d-a059-49c5-903f-0eb6e9330dff",
            "carId": "63d82e21-ac51-4107-833b-7e1e65de7118",
            "garageSlot": 35,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "46914f12-09d8-439b-9901-4693ecb9f126",
            "carId": "ae2a755c-20f8-4533-8a74-591c8485534a",
            "garageSlot": 19,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "pontiacFire_wheel_white"
            ],
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "firebird_decal_4"
            ],
            "customisationsPaintBody": [
                "pontiac_fac_yellow"
            ],
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2019-12-03T19:46:06.372Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2019-12-03T19:51:30.376Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2019-12-03T19:46:08.581Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-12-03T17:16:42.420Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2019-12-03T20:20:06.531Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2019-12-03T19:46:04.634Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "473b02cb-dbca-4b82-a5c2-280c4b357e98",
            "carId": "982c4a25-663a-4334-8330-e7502dd46041",
            "garageSlot": 58,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "Lotus_Exige_S_2012_Decals_02"
            ],
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2020-01-08T22:49:38.390Z",
            "upgradeEngineLevel": 6,
            "upgradeEngineCompletionTime": "2020-07-17T10:57:58.437Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2020-01-08T22:49:34.003Z",
            "upgradeBoostLevel": 5,
            "upgradeBoostCompletionTime": "2020-01-07T19:16:48.165Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2020-01-08T22:49:31.415Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2020-01-08T22:49:19.230Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-07-17T03:11:50.089Z",
            "source": 0
        },
        {
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "carId": "bf56d668-9079-4229-a7f4-964215d9412d",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "blazer_wheel_purple"
            ],
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "ChevroletK5Blazer_Decals_01"
            ],
            "customisationsPaintBody": [
                "BlazerK5_stock_matt_black",
                "BlazerK5_fact_light_pewter"
            ],
            "upgradeTyresLevel": 6,
            "upgradeTyresCompletionTime": "2020-07-25T13:37:28.005Z",
            "upgradeEngineLevel": 6,
            "upgradeEngineCompletionTime": "2020-07-25T13:37:13.599Z",
            "upgradeExhaustLevel": 6,
            "upgradeExhaustCompletionTime": "2020-07-25T13:37:20.272Z",
            "upgradeBoostLevel": 6,
            "upgradeBoostCompletionTime": "2020-07-25T13:37:22.095Z",
            "upgradeGearboxLevel": 6,
            "upgradeGearboxCompletionTime": "2020-07-25T13:37:29.844Z",
            "upgradeIntakeLevel": 6,
            "upgradeIntakeCompletionTime": "2020-07-25T13:37:26.659Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-04-09T19:29:20.753Z",
            "source": 3
        },
        {
            "userCarId": "4fa2e56d-fe0c-4f46-8e50-84ba207fd0a3",
            "carId": "1785b227-5c27-4f8b-99b6-779cbb61b881",
            "garageSlot": 23,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 6,
            "upgradeTyresCompletionTime": "2019-12-01T09:17:33.029Z",
            "upgradeEngineLevel": 5,
            "upgradeEngineCompletionTime": "2019-12-01T11:16:16.571Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2019-11-29T15:56:00.784Z",
            "upgradeBoostLevel": 6,
            "upgradeBoostCompletionTime": "2019-12-01T09:27:28.928Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2019-11-29T15:59:19.759Z",
            "upgradeIntakeLevel": 6,
            "upgradeIntakeCompletionTime": "2019-12-01T09:17:22.294Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2019-11-30T22:51:22.270Z",
            "source": 0
        },
        {
            "userCarId": "5588aa8c-c20b-4316-9794-45eef6709187",
            "carId": "703d48da-bed0-44c0-b9a3-8661bee4afa6",
            "garageSlot": 13,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2020-07-23T14:11:01.804Z",
            "upgradeEngineLevel": 3,
            "upgradeEngineCompletionTime": "2020-08-08T09:20:30.539Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-06-12T21:59:22.439Z",
            "upgradeBoostLevel": 3,
            "upgradeBoostCompletionTime": "2020-07-20T08:26:29.853Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-07-20T08:26:35.473Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2020-08-08T09:46:24.457Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-07-29T17:56:59.807Z",
            "source": 2
        },
        {
            "userCarId": "568faf32-097e-430f-82c1-6c6be5341a0c",
            "carId": "f3574c11-baf2-4b90-a843-abb97a84861d",
            "garageSlot": 56,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-06-23T08:12:06.269Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2020-06-23T19:44:32.703Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2020-06-23T08:12:09.403Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-06-23T08:12:11.516Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2020-06-23T18:07:20.420Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-06-23T08:12:03.847Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 11
        },
        {
            "userCarId": "5b009cb8-f96c-4421-ab8b-29e22175ab53",
            "carId": "21f1309b-0f15-4cde-815a-9a6c1f60a8d8",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "68b87be9-87ec-420b-b4b6-af0f60ed5052",
            "carId": "6a276546-c87a-421c-ac23-68640e3b3630",
            "garageSlot": 34,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "778a1f72-f0a8-430b-826e-f7eabcf4c1f4",
            "carId": "c4027329-fbd5-400c-af3d-306aa0eecae6",
            "garageSlot": 54,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "mustang_wheel_black"
            ],
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "mach1_decal_0"
            ],
            "customisationsPaintBody": [
                "mach1_stock_matt_black"
            ],
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2019-11-08T06:58:50.530Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2019-11-08T17:41:07.530Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2019-11-08T15:46:27.026Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-11-08T20:06:48.325Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2019-11-09T08:27:17.211Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2019-11-07T21:41:53.029Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "77d6ca90-8c9e-4d3e-b7d1-f7a525580986",
            "carId": "2a84bdbf-d13b-43bf-b077-cc6b1c8cd8c0",
            "garageSlot": 47,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2019-11-22T15:06:54.364Z",
            "upgradeEngineLevel": 5,
            "upgradeEngineCompletionTime": "2019-11-22T19:43:32.050Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2019-11-22T19:35:06.850Z",
            "upgradeBoostLevel": 5,
            "upgradeBoostCompletionTime": "2019-12-04T19:47:01.280Z",
            "upgradeGearboxLevel": 5,
            "upgradeGearboxCompletionTime": "2019-11-22T22:02:49.393Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2019-11-22T14:58:24.442Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2019-11-22T13:47:55.885Z",
            "source": 0
        },
        {
            "userCarId": "79b8c466-e989-48b3-9038-d207daf398b1",
            "carId": "b8c5ff03-daf8-4215-9f83-9c96c5988dff",
            "garageSlot": 63,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-05-10T11:55:13.375Z",
            "upgradeEngineLevel": 3,
            "upgradeEngineCompletionTime": "2020-04-12T09:47:20.796Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2020-04-24T10:29:00.972Z",
            "upgradeBoostLevel": 3,
            "upgradeBoostCompletionTime": "2020-04-13T08:56:24.521Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-04-12T15:42:38.999Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-04-13T17:44:21.432Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-04-15T17:52:31.439Z",
            "source": 0
        },
        {
            "userCarId": "7e7e8fe1-6413-420f-acc5-5af70d41e7af",
            "carId": "3272b1f2-21a8-40a7-bc3d-6a2eeba94c61",
            "garageSlot": 22,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 3,
            "upgradeTyresCompletionTime": "2019-12-02T18:41:20.870Z",
            "upgradeEngineLevel": 3,
            "upgradeEngineCompletionTime": "2019-12-03T10:38:36.169Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2019-12-01T15:15:13.995Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-12-05T18:12:28.389Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2019-12-05T10:38:33.816Z",
            "upgradeIntakeLevel": 3,
            "upgradeIntakeCompletionTime": "2019-11-28T20:53:15.956Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "85f22c73-7187-4590-8b88-74e2206f3b9b",
            "carId": "32521ac7-cb11-45eb-aef7-c02500a1cd81",
            "garageSlot": 45,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-02-02T08:57:56.819Z",
            "upgradeEngineLevel": 2,
            "upgradeEngineCompletionTime": "2020-01-31T10:08:18.313Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-01-31T10:13:07.963Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-07-08T18:34:35.680Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-07-08T18:24:30.271Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-02-02T08:57:54.942Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-07-29T07:11:16.122Z",
            "source": 0
        },
        {
            "userCarId": "8b830805-71df-4ae1-88d7-26343f12bec8",
            "carId": "1a921558-67f4-4eb1-81d2-9e3e2a38c1b6",
            "garageSlot": 30,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "93341fdd-0551-4a4e-951e-3d4ebd91b6fe",
            "carId": "12fcc1be-70f4-4e63-952f-934c10d88425",
            "garageSlot": 41,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 2,
            "upgradeTyresCompletionTime": "2020-02-20T08:43:08.362Z",
            "upgradeEngineLevel": 2,
            "upgradeEngineCompletionTime": "2020-02-20T08:43:04.177Z",
            "upgradeExhaustLevel": 2,
            "upgradeExhaustCompletionTime": "2020-02-20T08:44:32.825Z",
            "upgradeBoostLevel": 2,
            "upgradeBoostCompletionTime": "2020-02-20T08:44:38.229Z",
            "upgradeGearboxLevel": 2,
            "upgradeGearboxCompletionTime": "2020-02-20T08:44:41.809Z",
            "upgradeIntakeLevel": 2,
            "upgradeIntakeCompletionTime": "2020-02-20T08:43:05.996Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "9bc33908-ab05-485e-a479-b902b9448876",
            "carId": "5cbfe947-5a25-4a6a-9704-0f73549b332b",
            "garageSlot": 0,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "p1_wheel_white"
            ],
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "Mclaren_P1_Decals_06"
            ],
            "customisationsPaintBody": [
                "p1_volcano_yellow"
            ],
            "upgradeTyresLevel": 3,
            "upgradeTyresCompletionTime": "2020-07-29T06:46:25.579Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2020-08-05T12:26:08.298Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2020-08-09T01:55:09.072Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-07-29T15:43:35.638Z",
            "upgradeGearboxLevel": 3,
            "upgradeGearboxCompletionTime": "2020-07-31T11:44:59.662Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2020-08-04T01:58:03.059Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-07-31T05:59:07.063Z",
            "source": 6
        },
        {
            "userCarId": "b3f209c5-a688-4876-a38b-7ae324f7c635",
            "carId": "f5303f4b-10cb-4649-824e-48fe287c7eb3",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "bf0ffca8-577d-42d2-88e2-6c76171771b3",
            "carId": "1cf75239-2776-4128-9077-0b563e82025d",
            "garageSlot": 62,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-07-04T19:21:20.603Z",
            "upgradeEngineLevel": 3,
            "upgradeEngineCompletionTime": "2020-06-29T22:00:59.847Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-07-01T19:33:18.502Z",
            "upgradeBoostLevel": 3,
            "upgradeBoostCompletionTime": "2020-06-30T22:01:31.038Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2020-07-02T16:26:33.619Z",
            "upgradeIntakeLevel": 3,
            "upgradeIntakeCompletionTime": "2020-07-04T11:36:56.074Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-07-04T09:23:43.096Z",
            "source": 12
        },
        {
            "userCarId": "c21a0013-29d7-47d7-bd3c-cf77060bcd2b",
            "carId": "51de3784-197f-40fd-8a52-48b38e9b903f",
            "garageSlot": 40,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "c3df3a49-5023-4fd5-b320-9ffad9ce7228",
            "carId": "8ff4528f-da31-4115-a007-30a7965cdf36",
            "garageSlot": 42,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "sls_gt3_wheel_grey_02"
            ],
            "customisationsCaliperColour": [
                "SLS_caliper_white"
            ],
            "customisationsDecal": [
                "Mercedes_SLS_AMG_GT3_Decals_06",
                "Mercedes_SLS_AMG_GT3_Decals_08"
            ],
            "customisationsPaintBody": [
                "sls_gt3_diamond_white"
            ],
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2020-01-26T11:41:26.488Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2020-01-26T11:42:52.764Z",
            "upgradeExhaustLevel": 3,
            "upgradeExhaustCompletionTime": "2020-01-23T17:05:31.598Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-01-26T11:41:40.695Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2020-01-27T11:41:21.524Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2020-01-26T14:41:24.109Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-01-26T08:18:10.572Z",
            "source": 0
        },
        {
            "userCarId": "c61bccf5-ffca-45e1-8359-5857c81016a6",
            "carId": "08783a01-db9a-432a-8b73-0507b6ed42db",
            "garageSlot": 46,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": [
                "Nissan_GTR_2018_Decals_06"
            ],
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2019-12-30T01:42:40.353Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2019-12-27T13:47:40.753Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2019-12-29T22:43:26.901Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-12-27T13:47:06.007Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2019-12-27T13:47:45.980Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2019-12-29T22:43:22.815Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2019-12-31T20:35:20.426Z",
            "source": 0
        },
        {
            "userCarId": "c62e1e51-a1a4-4b67-82b9-f313f3db62b2",
            "carId": "8c95c8dd-9535-4d55-afe2-52974a2c220f",
            "garageSlot": 12,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 5,
            "upgradeTyresCompletionTime": "2020-08-06T09:32:36.117Z",
            "upgradeEngineLevel": 5,
            "upgradeEngineCompletionTime": "2020-08-06T09:36:00.230Z",
            "upgradeExhaustLevel": 5,
            "upgradeExhaustCompletionTime": "2020-08-06T09:32:38.682Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2020-06-18T06:44:44.775Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2020-06-24T09:00:28.899Z",
            "upgradeIntakeLevel": 5,
            "upgradeIntakeCompletionTime": "2020-08-06T09:32:33.572Z",
            "fusionLocked": true,
            "fusionCompletionTime": "2020-08-06T04:26:30.968Z",
            "source": 5
        },
        {
            "userCarId": "cead524a-8fc1-45c2-8dc5-62c0d3f8c47d",
            "carId": "21f1309b-0f15-4cde-815a-9a6c1f60a8d8",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        },
        {
            "userCarId": "cf8b6fd9-a89e-4d2f-9cba-f5b884b24c41",
            "carId": "a36408af-1808-423d-a6f9-78f0a53d8af0",
            "garageSlot": 44,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": [
                "silvia_wheel_black"
            ],
            "customisationsCaliperColour": [
                "silvia_caliper_white"
            ],
            "customisationsDecal": [
                "silvia_decal_1"
            ],
            "customisationsPaintBody": [
                "Silvia_stock_matt_black"
            ],
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2019-12-04T16:08:14.094Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2019-12-04T19:28:44.461Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2019-12-04T17:50:52.570Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-12-04T17:50:54.283Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2019-12-04T17:50:56.590Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2019-12-04T16:08:11.388Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "da2655d5-377b-435a-8063-c288450a18cd",
            "carId": "eb2601cf-202e-4e17-93f7-5c4232c6b88b",
            "garageSlot": 54,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 4,
            "upgradeTyresCompletionTime": "2019-11-23T17:18:54.105Z",
            "upgradeEngineLevel": 4,
            "upgradeEngineCompletionTime": "2019-11-25T01:16:37.949Z",
            "upgradeExhaustLevel": 4,
            "upgradeExhaustCompletionTime": "2019-12-09T12:17:13.388Z",
            "upgradeBoostLevel": 4,
            "upgradeBoostCompletionTime": "2019-11-26T09:37:38.888Z",
            "upgradeGearboxLevel": 4,
            "upgradeGearboxCompletionTime": "2019-11-25T17:35:55.591Z",
            "upgradeIntakeLevel": 4,
            "upgradeIntakeCompletionTime": "2019-11-23T11:41:39.712Z",
            "fusionLocked": true,
            "fusionCompletionTime": null,
            "source": 0
        },
        {
            "userCarId": "e008afcf-5b21-45c9-9fc1-7c2aa3a41c50",
            "carId": "21f1309b-0f15-4cde-815a-9a6c1f60a8d8",
            "garageSlot": 64,
            "customisationsTyre": null,
            "customisationsWheel": null,
            "customisationsWheelColour": null,
            "customisationsCaliperColour": null,
            "customisationsDecal": null,
            "customisationsPaintBody": null,
            "upgradeTyresLevel": 0,
            "upgradeTyresCompletionTime": null,
            "upgradeEngineLevel": 0,
            "upgradeEngineCompletionTime": null,
            "upgradeExhaustLevel": 0,
            "upgradeExhaustCompletionTime": null,
            "upgradeBoostLevel": 0,
            "upgradeBoostCompletionTime": null,
            "upgradeGearboxLevel": 0,
            "upgradeGearboxCompletionTime": null,
            "upgradeIntakeLevel": 0,
            "upgradeIntakeCompletionTime": null,
            "fusionLocked": false,
            "fusionCompletionTime": null,
            "source": 5
        }
    ],
    "userAugments": [
        {
            "augmentId": "d3e981ad-c176-44d6-a43c-5ab5ece9b3b7",
            "userAugmentId": "001be0d6-41d2-478b-b1f0-dc331161e242"
        },
        {
            "augmentId": "315b5243-754d-44f2-9463-379c117b85e4",
            "userAugmentId": "00259728-9f54-44c0-a9bf-e782f101797b"
        },
        {
            "augmentId": "c69b836b-0cff-4fcc-a611-ab65ac705948",
            "userAugmentId": "00b9e29b-19f3-4752-8a09-4ae32bccf321",
        },
        {
            "augmentId": "5f75be7d-d824-438b-96fd-e3853891e889",
            "userAugmentId": "01189896-4beb-4f9a-86cd-293e86d062eb"
        },
        {
            "augmentId": "f0a865ea-0db6-4d2b-945a-a58973b9950a",
            "userAugmentId": "01ad1a48-50f0-4fac-80bc-28c1f5e62341",
        },
        {
            "augmentId": "f892faa8-5756-4fff-a3dc-fb12a0f1b5e3",
            "userAugmentId": "01db4927-ed24-4857-b7a6-b20a865c4fcf",
        },
        {
            "augmentId": "68d3e0b2-3c3a-41da-a3c3-e40c28642bb0",
            "userAugmentId": "01e9c8f5-fed2-49dd-8b16-d251e10a4554",
        },
        {
            "augmentId": "e47ab0ca-9e82-4744-bf96-bf9e9fce46c1",
            "userAugmentId": "042fe95f-7d75-4036-99c3-d2d0d9693817",
        },
        {
            "augmentId": "b237e55b-2d5e-4c3c-9f47-372195b5652b",
            "userAugmentId": "04547126-326c-47eb-84f5-cbc2bea86ff2",
        },
        {
            "augmentId": "cb4e55a2-6a2c-42de-9d7a-d57d17428e98",
            "userAugmentId": "0553a31c-ab8a-4585-811b-c0d3d1c93784"
        },
        {
            "augmentId": "87b7ddfc-ea88-4bba-a221-00b390f8756a",
            "userAugmentId": "05edde6f-5930-463a-a0b4-d835d7a40ba7",
        },
        {
            "augmentId": "e09291be-7077-4a6a-a623-ee54b6977ec4",
            "userAugmentId": "0688f612-5005-4755-b778-27b5eaab7083"
        },
        {
            "augmentId": "25f4e43f-b711-471a-82a4-2f2bbcf8753a",
            "userAugmentId": "06c61e2d-880a-4c5b-b183-ad70201843b9",
        },
        {
            "augmentId": "924dfc3d-8450-4e97-851a-d3cf43a00645",
            "userAugmentId": "06ed10d9-5189-4901-825a-75315d326f35",
        },
        {
            "augmentId": "cb5321ce-c085-49f2-a16f-cbcb1f2955a0",
            "userAugmentId": "0712383d-9814-4ba3-8c84-583f90cc0eab",
        },
        {
            "augmentId": "8c2e40b9-9ec3-409b-af17-01092f355635",
            "userAugmentId": "091b364e-9292-4f00-a6ad-751d42ac64c9"
        },
        {
            "augmentId": "cb5321ce-c085-49f2-a16f-cbcb1f2955a0",
            "userAugmentId": "0a29edb5-344c-42ae-b332-87425b86d3e3",
        },
        {
            "augmentId": "1b0f8d0f-72d5-4847-87be-88443218a613",
            "userAugmentId": "0b986e4b-cf25-47ad-9bbf-fca4f910e93c"
        },
        {
            "augmentId": "cfcd0b86-cfec-4e19-b06e-5199616220fa",
            "userAugmentId": "0cd19593-a194-4105-9392-e2f5dda7af02"
        },
        {
            "augmentId": "350ae3bf-2656-4ecd-ba29-5ddb48e8ab43",
            "userAugmentId": "0cf2d3b2-2eb8-44ca-bc2f-69790f7493b5",
        },
        {
            "augmentId": "dfb66b19-68e6-4dba-ab4a-ecdf22755af7",
            "userAugmentId": "0fbf976b-33df-4e77-bedd-6757052770d1",
        },
        {
            "augmentId": "df5ff28b-357c-45f0-ac13-ab0d3cb67300",
            "userAugmentId": "1012880c-e26a-409b-8d30-5487b5a85737"
        },
        {
            "augmentId": "43d07f7d-4cad-41e7-bdc1-1f0a60800540",
            "userAugmentId": "10fdf87c-2bfa-404b-9905-fbb077fe475d"
        },
        {
            "augmentId": "9eb1b48a-a034-4e2c-ae2e-08585f062026",
            "userAugmentId": "1134c675-ba06-4eff-a7c9-1a592dda9ac0"
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "1176938d-cf36-4875-87a9-857c5bccab85"
        },
        {
            "augmentId": "4f8a2a9b-a0c1-45d4-8cea-3bf5de0dc5e7",
            "userAugmentId": "1488ce15-65e0-4277-94db-fd6c166c6cad"
        },
        {
            "augmentId": "8931e633-7f0b-495b-827b-4c5a5782286e",
            "userAugmentId": "16470888-cb40-4f52-aef7-e8178cef2a71"
        },
        {
            "augmentId": "cb5321ce-c085-49f2-a16f-cbcb1f2955a0",
            "userAugmentId": "1662ce53-1f0c-40fe-a603-de1533fc6c60",
        },
        {
            "augmentId": "48772280-fad9-435e-9c98-539511c872c4",
            "userAugmentId": "16eabeba-fa71-4ea3-9aaf-af647f0dac55"
        },
        {
            "augmentId": "a7dea170-400a-4139-9272-760b5fa04a03",
            "userAugmentId": "18ce1a3d-d4d5-4e12-a781-f586df2c1d21",
        },
        {
            "augmentId": "18c699d4-6de6-423f-861a-3c03726d6bf7",
            "userAugmentId": "199f866f-6a63-42e5-83ea-6a4c01dde99a"
        },
        {
            "augmentId": "35bbf5bc-f08d-41a8-9bee-30ae0fdf1ca0",
            "userAugmentId": "19a4ec82-039b-4d4b-bc13-c4e8ef7969ff",
        },
        {
            "augmentId": "f949ea6f-cf6d-460d-9848-389439cb7504",
            "userAugmentId": "1bb967c2-29a6-4367-9103-69160bf8f24c",
        },
        {
            "augmentId": "d3e981ad-c176-44d6-a43c-5ab5ece9b3b7",
            "userAugmentId": "1dc406e2-2bf9-40de-ae35-36aa59866016"
        },
        {
            "augmentId": "6312f800-9e13-48a6-8548-63d25f67c777",
            "userAugmentId": "1e6e8b9c-ad38-4fca-b353-cfeb62419e83",
        },
        {
            "augmentId": "53fe135b-1b8e-445a-8292-2a8febe4a855",
            "userAugmentId": "1e9d7320-a39e-4fe0-b02b-66038fa78c98"
        },
        {
            "augmentId": "a08f7b91-773e-4e8b-9e49-63cb13bb696f",
            "userAugmentId": "2258ed3f-0c15-47c7-aefc-403d1e0f5cb3",
        },
        {
            "augmentId": "4fccab95-7691-4206-aecf-bcef674f7e50",
            "userAugmentId": "22904791-1c15-47b1-a171-db068adaa1ab"
        },
        {
            "augmentId": "74f7f95a-a0d8-444e-b2c1-d549ecf79bdb",
            "userAugmentId": "257f9719-9fcd-45bf-806f-bc08a8504b4f"
        },
        {
            "augmentId": "b1a60e58-f4d5-4ebb-9bd6-d07e807dd5ff",
            "userAugmentId": "26df040f-dc54-40ad-b295-57b38ee5f3a7"
        },
        {
            "augmentId": "137d2033-3e00-44c9-8e89-69d31d32901c",
            "userAugmentId": "273630e9-ef6f-4b01-9991-2347115fb67f",
        },
        {
            "augmentId": "6745e658-8212-481e-9f94-a6147c6fc060",
            "userAugmentId": "27f6e968-f8f9-4bba-909e-34ceaed649ca"
        },
        {
            "augmentId": "cb5321ce-c085-49f2-a16f-cbcb1f2955a0",
            "userAugmentId": "28455cfd-90e8-405c-a669-7931b9daae4a",
        },
        {
            "augmentId": "3411ac20-c72f-4946-80b2-6e3059ea7d99",
            "userAugmentId": "2a689c88-47ed-48d1-8011-8fb5f9e27d9f"
        },
        {
            "augmentId": "bacbf824-3345-488a-acdb-8b48690f4ded",
            "userAugmentId": "2b310c65-f40e-4f36-8424-890de699bf40",
        },
        {
            "augmentId": "470e74d7-49a7-402d-b0b0-b8b687e7b4b3",
            "userAugmentId": "2b3882cd-4d8d-43af-8421-b9141d6ccdc3",
        },
        {
            "augmentId": "b0be8024-19e9-464c-98cb-f6212a083788",
            "userAugmentId": "2baec21c-4e2b-48cd-83c1-03814fa9caa2"
        },
        {
            "augmentId": "239af0c8-73fd-48a3-8459-6b877fbe24f2",
            "userAugmentId": "2d1f1aa9-6e1f-4460-a92f-22dfdefe5698",
        },
        {
            "augmentId": "c25fce17-a4cc-459d-a82c-f5edfda05dec",
            "userAugmentId": "2db19de3-3d4a-44a7-97a7-5334ddb08ed7"
        },
        {
            "augmentId": "eb62d2a7-7a44-4e6d-a459-b52c1292da17",
            "userAugmentId": "2e2440e1-7577-4950-97df-c5f317a22d02"
        },
        {
            "augmentId": "10fa0f5d-7013-4f84-a1c9-784cb2c09e20",
            "userAugmentId": "2f3075eb-5653-4c72-a300-53e4f4b60ac7"
        },
        {
            "augmentId": "2d6bc685-67e8-4ae7-8a9b-1d904dc12120",
            "userAugmentId": "2f75e4fe-bfc9-41ac-8075-f16c18c56685",
        },
        {
            "augmentId": "10fa0f5d-7013-4f84-a1c9-784cb2c09e20",
            "userAugmentId": "2fe09823-832b-4109-81a0-ef6cdc9cbf5e"
        },
        {
            "augmentId": "ced21159-6245-422a-8b42-bbc26e060f10",
            "userAugmentId": "302e865c-5aeb-4f71-b4ba-c8e4db03d165"
        },
        {
            "augmentId": "76080dd0-c897-4006-991d-2df3b95eb2d8",
            "userAugmentId": "31522695-d374-4c9d-b22c-2dbb252a6e1f"
        },
        {
            "augmentId": "ba50cff4-cb5a-4a75-8a10-eabe3b04e4f6",
            "userAugmentId": "318dc897-66a2-476c-ba8d-84ffea8efdae"
        },
        {
            "augmentId": "7db30307-cfd3-4fe9-ae33-5dc3e6429cd3",
            "userAugmentId": "3207a714-8a76-4810-aa37-7c0731e93bda",
        },
        {
            "augmentId": "b0be8024-19e9-464c-98cb-f6212a083788",
            "userAugmentId": "321dc909-d391-40f4-aa37-27e50822cd25",
        },
        {
            "augmentId": "ed7b1b30-87dc-4e23-83dc-e904b5b2c10b",
            "userAugmentId": "32395752-1ed5-4e4a-a597-dd1e7bcae738",
        },
        {
            "augmentId": "57159b03-4919-4235-9f5f-c881f098a38f",
            "userAugmentId": "329b5e19-a32e-417a-baa7-c9492f6348e6",
        },
        {
            "augmentId": "53ad5ba0-1c34-4917-9d77-6709d2851f6f",
            "userAugmentId": "33bc519c-0269-49f7-a438-f39ff6055b0b"
        },
        {
            "augmentId": "e8550c72-aba0-48e9-8054-b45c3a5e9935",
            "userAugmentId": "341b7bcf-e0ce-4841-8ef2-fd870156fcd6",
        },
        {
            "augmentId": "4b4e7604-c1ba-43d1-80a8-6dd41d56e225",
            "userAugmentId": "347712cc-ef3a-4b53-9085-573ce452ae39"
        },
        {
            "augmentId": "43d07f7d-4cad-41e7-bdc1-1f0a60800540",
            "userAugmentId": "35084790-11e9-4e0e-a1bc-a62e4b31c05b"
        },
        {
            "augmentId": "c3d2f8e8-6a94-4850-a825-0e525afcff53",
            "userAugmentId": "355780f7-611c-47b3-b17e-fe9b837122c9",
        },
        {
            "augmentId": "b11ab5df-dffb-4268-bbc7-02cfe5723c7e",
            "userAugmentId": "374eb2ca-5c07-441e-94ab-69453c8e5181"
        },
        {
            "augmentId": "cb532d3c-ef3f-4b7c-add3-121d63783f23",
            "userAugmentId": "390ff9e5-4783-401d-88ba-20ded1c96bd4"
        },
        {
            "augmentId": "470e74d7-49a7-402d-b0b0-b8b687e7b4b3",
            "userAugmentId": "394050b8-7250-45c3-86a9-92bc342ce65f",
        },
        {
            "augmentId": "d29b7953-e224-4e51-a0f4-c43f91685a68",
            "userAugmentId": "3c9e6fb3-aed4-4dde-a8ec-842135c41fbc"
        },
        {
            "augmentId": "f846628d-46a0-4ac4-bbbe-696615c73f8a",
            "userAugmentId": "3ccd1f57-8177-4883-a647-13d5df0db997"
        },
        {
            "augmentId": "86316729-597d-4955-9cb6-cfc986ef7c58",
            "userAugmentId": "3dbb93e9-afb3-49b7-97db-4348b18517ac"
        },
        {
            "augmentId": "3411ac20-c72f-4946-80b2-6e3059ea7d99",
            "userAugmentId": "3f7ee90a-a423-40be-be28-93e6e36f068f",
        },
        {
            "augmentId": "cb532d3c-ef3f-4b7c-add3-121d63783f23",
            "userAugmentId": "3fcfa623-9e59-4663-8a17-8bc97f4a93e3"
        },
        {
            "augmentId": "53ad5ba0-1c34-4917-9d77-6709d2851f6f",
            "userAugmentId": "3fffcbaf-5154-4dbf-b015-9a6cf0567fb8"
        },
        {
            "augmentId": "682a55ff-cd94-4f6b-a2c1-c80fc9fb2a3e",
            "userAugmentId": "406caae6-b66e-4a12-8046-ca63526bd216",
        },
        {
            "augmentId": "53fe135b-1b8e-445a-8292-2a8febe4a855",
            "userAugmentId": "414e5b7a-e904-4068-b512-1eb2ba64e855"
        },
        {
            "augmentId": "2a6cec9e-b1bb-4198-b05a-069a227b02b9",
            "userAugmentId": "4229cb09-92ce-4083-818d-df5f3133bb04",
        },
        {
            "augmentId": "48772280-fad9-435e-9c98-539511c872c4",
            "userAugmentId": "426fd3de-709c-4ac2-8f1a-9faf9683ae33"
        },
        {
            "augmentId": "c7a029bf-f8fb-4eee-b17f-46f95a20c98c",
            "userAugmentId": "427e0c61-29c6-499c-ad73-9e74bc8adac9"
        },
        {
            "augmentId": "ae324996-665e-4b88-8ebe-4cc43f0b315f",
            "userAugmentId": "42dd7497-d4bd-4c57-ac52-4314e575d8ef"
        },
        {
            "augmentId": "cb5321ce-c085-49f2-a16f-cbcb1f2955a0",
            "userAugmentId": "432be2a9-d3fc-4368-88b5-87d873eb2a4b",
        },
        {
            "augmentId": "add2170c-b49b-4af3-94c2-9211e6524cd5",
            "userAugmentId": "444ea91c-abc4-499d-b68f-bc41f0349718",
        },
        {
            "augmentId": "86316729-597d-4955-9cb6-cfc986ef7c58",
            "userAugmentId": "46178ca5-64f2-4620-ba6f-8a71f3f01b8a"
        },
        {
            "augmentId": "5b4446ca-91d8-4f57-85d1-ece3edb83290",
            "userAugmentId": "46c3bcc3-7e2b-4479-bf43-6f86008adbb6"
        },
        {
            "augmentId": "c7b0a55f-e381-4415-9f9c-abfde2d5c7b7",
            "userAugmentId": "46c535f8-f211-4fba-96cc-f70858f6c04c"
        },
        {
            "augmentId": "f892faa8-5756-4fff-a3dc-fb12a0f1b5e3",
            "userAugmentId": "470128d9-c0a3-4d52-9eea-bdc9913468a0",
        },
        {
            "augmentId": "222be039-0755-4508-bc02-c665e14446e8",
            "userAugmentId": "4746fe25-57ec-4c1e-aed3-07974de6532e",
        },
        {
            "augmentId": "53ad5ba0-1c34-4917-9d77-6709d2851f6f",
            "userAugmentId": "47dde86e-0c1f-471c-8899-18ee496f2d4b"
        },
        {
            "augmentId": "69d1bfb1-9d28-4419-b465-87ff1072eb96",
            "userAugmentId": "49160439-1b4b-4790-87eb-d5265cef8a91",
        },
        {
            "augmentId": "b6868166-b2da-4421-9bc6-6d9e31931d09",
            "userAugmentId": "4973ee3f-1e80-4e78-9df3-923e519cf34d",
        },
        {
            "augmentId": "ed7b1b30-87dc-4e23-83dc-e904b5b2c10b",
            "userAugmentId": "4a080cde-2740-47ad-bba1-b077cf93cb09",
        },
        {
            "augmentId": "0918f396-c833-4bf4-a585-1abfd1c68be8",
            "userAugmentId": "4ab530d0-fa0d-4eb4-8748-08159d487b64",
        },
        {
            "augmentId": "d3e981ad-c176-44d6-a43c-5ab5ece9b3b7",
            "userAugmentId": "4ac8e4d4-ece9-4440-95c6-e0f4aaf447ca"
        },
        {
            "augmentId": "a08f7b91-773e-4e8b-9e49-63cb13bb696f",
            "userAugmentId": "4ad22722-05b9-4902-89c4-540a3d34f6f8",
        },
        {
            "augmentId": "86316729-597d-4955-9cb6-cfc986ef7c58",
            "userAugmentId": "4ad8bca3-757a-4230-b6e1-6789d132e8dc"
        },
        {
            "augmentId": "239af0c8-73fd-48a3-8459-6b877fbe24f2",
            "userAugmentId": "4bbafe50-a6bc-4895-8297-179853ac0067",
        },
        {
            "augmentId": "222be039-0755-4508-bc02-c665e14446e8",
            "userAugmentId": "4c12ac93-d077-4dc5-9f85-6a8d140e5592",
        },
        {
            "augmentId": "22695ebf-01e2-4842-ac20-811313248a33",
            "userAugmentId": "4dadddf1-e73d-4544-8889-671a12adefce",
        },
        {
            "augmentId": "ba50cff4-cb5a-4a75-8a10-eabe3b04e4f6",
            "userAugmentId": "4dec870b-63e2-4ebb-9ce7-bc2ff7c4d733"
        },
        {
            "augmentId": "c69b836b-0cff-4fcc-a611-ab65ac705948",
            "userAugmentId": "4e3c3a42-65aa-4747-8745-241cb25bc0dd"
        },
        {
            "augmentId": "ebef7eb6-70da-4cc7-ba82-359523626a1e",
            "userAugmentId": "4e753a08-0b8a-46ee-b727-5e09d1e824c9",
        },
        {
            "augmentId": "45342dbb-db11-48e5-87a1-51f2d742dae9",
            "userAugmentId": "4ea64f79-15da-45aa-a2e7-4129ffd59591",
        },
        {
            "augmentId": "64db4092-af17-4cdc-b98d-14f99d39e121",
            "userAugmentId": "4f5eec72-661a-4521-b0d3-19b417557949"
        },
        {
            "augmentId": "af70bf98-abbf-4bc6-8342-9cb46ffaab02",
            "userAugmentId": "4f8bf6ad-7a28-4da5-b051-9c57243c7676"
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "50176371-a6c3-493e-b580-85c5338bba2f"
        },
        {
            "augmentId": "e171d1be-6a36-4982-9114-986415b45b05",
            "userAugmentId": "50e6244f-947d-468a-b0d0-56fddba5054c",
        },
        {
            "augmentId": "36dc6cda-9ee1-40e0-8a91-1327e91355c0",
            "userAugmentId": "5352aceb-7f33-4051-91f8-8a28fd273d9d"
        },
        {
            "augmentId": "adbc9598-1a32-4d9e-9f0e-39e8259c53f6",
            "userAugmentId": "58c77718-5858-47ca-a21f-15f21a6b9d1b"
        },
        {
            "augmentId": "30d7a599-f963-47bd-aaed-3bc1acc61fb3",
            "userAugmentId": "58d1296f-5e94-4f11-87c5-59f595c4400b"
        },
        {
            "augmentId": "cfcd0b86-cfec-4e19-b06e-5199616220fa",
            "userAugmentId": "5bfbee30-e870-4c44-9194-f30e803f7982",
        },
        {
            "augmentId": "cb5321ce-c085-49f2-a16f-cbcb1f2955a0",
            "userAugmentId": "5c1eb63d-6052-4b6d-b1bd-fa8de0821b45",
        },
        {
            "augmentId": "47f9bfd1-5f1f-4be6-8190-ce17cd063f44",
            "userAugmentId": "5c4ebc67-c9fd-4ab5-94b7-f5214227507e"
        },
        {
            "augmentId": "df7656a2-c297-4f78-bdb8-a8a199af5d65",
            "userAugmentId": "5eaba001-3f6d-443d-bff1-e0205385c1e3"
        },
        {
            "augmentId": "ec0c8313-160c-40f7-88cc-75869f4a7a7d",
            "userAugmentId": "5faff9e5-99d5-4b57-afbb-2d438e73de0d"
        },
        {
            "augmentId": "86316729-597d-4955-9cb6-cfc986ef7c58",
            "userAugmentId": "6061756f-42fe-49d4-a070-30694fd2a65c"
        },
        {
            "augmentId": "137d2033-3e00-44c9-8e89-69d31d32901c",
            "userAugmentId": "612ea8e4-3ad6-41de-b131-65669e54b788",
        },
        {
            "augmentId": "35963c70-9327-4cba-bbff-c1abf8c20fb7",
            "userAugmentId": "624c6eb2-17bc-484a-9728-e8e2b3491f5c"
        },
        {
            "augmentId": "d9901431-2704-41eb-b4ca-a464d3e977cf",
            "userAugmentId": "62be1704-46bd-4e83-8f66-a475bad35bdf",
        },
        {
            "augmentId": "d3e981ad-c176-44d6-a43c-5ab5ece9b3b7",
            "userAugmentId": "63192ad8-3f30-4862-9357-ebc648ce9da0"
        },
        {
            "augmentId": "15f48dd0-31c8-4017-8c44-f57422d548e0",
            "userAugmentId": "633e7f3e-e682-4578-837e-0ef1a4529465"
        },
        {
            "augmentId": "e249cbe3-67fa-48a8-973e-497b41ece553",
            "userAugmentId": "63887fa9-fb83-45a8-ac93-ba9406048b01"
        },
        {
            "augmentId": "b57b9ead-5515-4339-af13-5dd085e76260",
            "userAugmentId": "641f8b01-133e-4238-a5b0-12b9e9575743"
        },
        {
            "augmentId": "dc50bf59-aeb3-42c7-a8b1-0a0fc8a2b765",
            "userAugmentId": "64426c00-275c-4d29-8769-056b0c55e9d7",
        },
        {
            "augmentId": "7609468e-9336-494a-89cd-7d9ba19e7d3c",
            "userAugmentId": "650407b5-b76a-4e21-8153-c148c165d9d5",
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "68140bc0-e255-4817-9278-f40a31625a7f"
        },
        {
            "augmentId": "86316729-597d-4955-9cb6-cfc986ef7c58",
            "userAugmentId": "6d781f66-fe56-434b-80e4-3e4812f5d52f"
        },
        {
            "augmentId": "c69b836b-0cff-4fcc-a611-ab65ac705948",
            "userAugmentId": "6dee0bd9-5401-4a1d-8f19-4b287d9308b0"
        },
        {
            "augmentId": "682a55ff-cd94-4f6b-a2c1-c80fc9fb2a3e",
            "userAugmentId": "7338e9c5-b218-438a-8dcc-7b3bdf79e5c0",
        },
        {
            "augmentId": "65887c36-f884-400a-a3f7-fac9987e4bb6",
            "userAugmentId": "737c4428-d0e0-418c-8263-4695696c58d1"
        },
        {
            "augmentId": "3411ac20-c72f-4946-80b2-6e3059ea7d99",
            "userAugmentId": "73df1039-94dc-47d1-b4d3-975ebb746182",
        },
        {
            "augmentId": "1ebdc818-4f49-41b5-bc3a-abb2ca72fa11",
            "userAugmentId": "73ebb33c-a376-4e81-abea-e98083a1bdaf"
        },
        {
            "augmentId": "84a9b6b4-0cc4-4303-8df7-11a092f2332c",
            "userAugmentId": "73ec8d36-7b0c-463f-b73d-f0df640925c9"
        },
        {
            "augmentId": "30c9006c-a619-4602-9a47-b1ca62be72d0",
            "userAugmentId": "74862f22-b7a6-4e3c-be31-dd694082ec1c",
        },
        {
            "augmentId": "f949ea6f-cf6d-460d-9848-389439cb7504",
            "userAugmentId": "74f34909-0d88-41cd-926c-45e0f36fd52c"
        },
        {
            "augmentId": "f9267f08-c826-4749-b9ae-d22cc856deb8",
            "userAugmentId": "75321fea-a823-44f6-bee5-45413e9499be"
        },
        {
            "augmentId": "b11ab5df-dffb-4268-bbc7-02cfe5723c7e",
            "userAugmentId": "7549cf04-8d89-4419-9023-d39cc0b734a1"
        },
        {
            "augmentId": "6a4993a1-365f-435d-82f5-a8234e0f9b4a",
            "userAugmentId": "754cd832-84a8-48f6-a8bc-fb1010b88c9f"
        },
        {
            "augmentId": "94e21f56-6d8a-413d-a0a0-6b8ad5bcd200",
            "userAugmentId": "7614ffeb-10e1-4c1a-84d0-43d3914d943e"
        },
        {
            "augmentId": "b89cc6d3-9b27-45b7-9a35-15b843e15f75",
            "userAugmentId": "77a9ca03-c15e-4144-8029-1eebdfb958ef",
        },
        {
            "augmentId": "cfcd0b86-cfec-4e19-b06e-5199616220fa",
            "userAugmentId": "78092590-bed5-4f7b-9c41-4a18facdf2ac"
        },
        {
            "augmentId": "f949ea6f-cf6d-460d-9848-389439cb7504",
            "userAugmentId": "78d4656e-51dd-401c-9661-ddb357dc2da8"
        },
        {
            "augmentId": "34fbb40c-da4f-4039-965d-b6e9cef38c90",
            "userAugmentId": "79393a39-dfd0-4573-9909-77470db7ad2f",
        },
        {
            "augmentId": "ffdb0505-3aba-4661-a56b-b0756a54780b",
            "userAugmentId": "7a2f72df-5179-434c-adb7-c8f6c3178045"
        },
        {
            "augmentId": "222be039-0755-4508-bc02-c665e14446e8",
            "userAugmentId": "7b5e2c43-548b-4833-9876-a60647cc959a",
        },
        {
            "augmentId": "d29b7953-e224-4e51-a0f4-c43f91685a68",
            "userAugmentId": "7c7ff352-6c57-4ed8-b167-85f80de0897e"
        },
        {
            "augmentId": "3317949c-2d68-42bf-b203-d13448f68246",
            "userAugmentId": "7f14e062-4006-48ea-8e0f-e097f6bbc844"
        },
        {
            "augmentId": "845f96cd-1c55-4063-b2e8-7fa27167d02f",
            "userAugmentId": "7f1ba96e-6d1c-4c29-8711-b55c3b92ce32"
        },
        {
            "augmentId": "4d486f70-fa4b-4aaa-b9e2-22b4041928b7",
            "userAugmentId": "808a1871-7f22-4700-ab1a-1ea372af81ec"
        },
        {
            "augmentId": "8ffb8103-482b-4855-9e77-17398478bfb3",
            "userAugmentId": "811de69f-bb13-4eac-900e-52643adee4f2",
        },
        {
            "augmentId": "c7a029bf-f8fb-4eee-b17f-46f95a20c98c",
            "userAugmentId": "814640ab-12e7-492c-97ae-8eaa4ec08e91"
        },
        {
            "augmentId": "e76ecfd1-075a-4b81-a0ec-5ae1903e664d",
            "userAugmentId": "826600ce-bea5-4455-9117-857ba045bf74",
            "userCarId": "9bc33908-ab05-485e-a479-b902b9448876",
            "slot": 0
        },
        {
            "augmentId": "2d6bc685-67e8-4ae7-8a9b-1d904dc12120",
            "userAugmentId": "82863ba0-27f2-4345-830b-d59f891fd8fa",
            "userCarId": "85f22c73-7187-4590-8b88-74e2206f3b9b",
            "slot": 0
        },
        {
            "augmentId": "611c6bb3-f384-4865-8fa0-c704b173b190",
            "userAugmentId": "82a8d94b-550e-40ff-aa8d-96b7fc9bc54b"
        },
        {
            "augmentId": "171a60ba-538d-43bf-915b-d9f1e87336cc",
            "userAugmentId": "82d3316e-9186-4c72-849a-c6ff028d21ea"
        },
        {
            "augmentId": "a73658a6-4091-45d8-87bf-db71bd4e029b",
            "userAugmentId": "82e36e22-d7b7-4e0a-9e1a-19d51bf6f7f1"
        },
        {
            "augmentId": "97285fb8-64fd-45e4-8b30-79cdd0dd4137",
            "userAugmentId": "830f5ff1-a129-4076-8db8-6f65ccaade45",
            "userCarId": "9bc33908-ab05-485e-a479-b902b9448876",
            "slot": 0
        },
        {
            "augmentId": "f0a865ea-0db6-4d2b-945a-a58973b9950a",
            "userAugmentId": "84eb6626-ccff-41f2-8f5a-8591291db2b0"
        },
        {
            "augmentId": "6a95ae07-21d7-4726-ad7c-a8b75c6b54ee",
            "userAugmentId": "87c7973c-c639-409f-84a8-d09b57ffb763",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 2
        },
        {
            "augmentId": "d0cf60ec-d434-4924-aabd-85a8f12658b1",
            "userAugmentId": "8a1f52a1-1c14-4aa4-98bb-d093657d94fa",
            "userCarId": "778a1f72-f0a8-430b-826e-f7eabcf4c1f4",
            "slot": 0
        },
        {
            "augmentId": "db1513ef-763c-435e-a1a5-767cb0e2fcc6",
            "userAugmentId": "8a2e5041-1131-4487-9961-e4806f4529fa"
        },
        {
            "augmentId": "1e80fe23-6969-4bc5-b972-143dca3d8d4b",
            "userAugmentId": "8a7e2052-3ff3-4678-8944-4b187633c0e5",
            "userCarId": "79b8c466-e989-48b3-9038-d207daf398b1",
            "slot": 1
        },
        {
            "augmentId": "84a9b6b4-0cc4-4303-8df7-11a092f2332c",
            "userAugmentId": "8b961012-ae6a-44ab-8407-1f1179adbbbc",
            "userCarId": "77d6ca90-8c9e-4d3e-b7d1-f7a525580986",
            "slot": 1
        },
        {
            "augmentId": "811879a8-b38e-48f9-8be1-4c31aaf9d1d5",
            "userAugmentId": "8bedf38f-7baa-4505-b3ef-65f2a49bfdc1",
            "userCarId": "417dfab9-6d5f-43ad-946c-c2ca65a84213",
            "slot": 0
        },
        {
            "augmentId": "2c6ad2b2-6fc3-4dbe-bf17-3ac062f427b8",
            "userAugmentId": "8e8f9f9f-9e86-44e7-aaa6-02558c18bff2"
        },
        {
            "augmentId": "4fccab95-7691-4206-aecf-bcef674f7e50",
            "userAugmentId": "8e93ed5d-93cb-4486-9f44-b837cebffd46"
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "8f333445-eb97-4877-8b48-9ab963ad7a04"
        },
        {
            "augmentId": "57159b03-4919-4235-9f5f-c881f098a38f",
            "userAugmentId": "90c0de55-08ba-4120-82bf-408c1ea5d491"
        },
        {
            "augmentId": "2d6bc685-67e8-4ae7-8a9b-1d904dc12120",
            "userAugmentId": "90f3d70d-0b3b-4856-9982-8d412fcc302a"
        },
        {
            "augmentId": "10fa0f5d-7013-4f84-a1c9-784cb2c09e20",
            "userAugmentId": "9109e968-3e14-4615-ac60-359ee1869853"
        },
        {
            "augmentId": "470e74d7-49a7-402d-b0b0-b8b687e7b4b3",
            "userAugmentId": "921e6771-c494-4d1f-aca7-ceedec688faf",
            "userCarId": "5588aa8c-c20b-4316-9794-45eef6709187",
            "slot": 1
        },
        {
            "augmentId": "ffdb0505-3aba-4661-a56b-b0756a54780b",
            "userAugmentId": "94b2b71c-7ff9-4dc3-a908-736f10790179"
        },
        {
            "augmentId": "222be039-0755-4508-bc02-c665e14446e8",
            "userAugmentId": "959011d4-b4a6-44cf-8804-4cbd4e48ac5c",
            "userCarId": "bf0ffca8-577d-42d2-88e2-6c76171771b3",
            "slot": 0
        },
        {
            "augmentId": "0918f396-c833-4bf4-a585-1abfd1c68be8",
            "userAugmentId": "964cc847-9e87-4ddb-84cc-4f1201f042b8"
        },
        {
            "augmentId": "d15ba601-e228-4ba4-909f-df1396ea3d1c",
            "userAugmentId": "96535da9-8499-4cf7-af6f-bd293bec2881"
        },
        {
            "augmentId": "11fd7717-917a-4272-b2b8-9795ebddd9b3",
            "userAugmentId": "9674ad30-7079-49c2-8789-603ad0a37ef4"
        },
        {
            "augmentId": "5ed1dc32-61fe-4713-884e-259d4a0932b9",
            "userAugmentId": "96e8032a-43bd-4d3b-8128-ed707d4464ff"
        },
        {
            "augmentId": "43d07f7d-4cad-41e7-bdc1-1f0a60800540",
            "userAugmentId": "96fbf029-378a-45a2-bab0-f6eda4715dfd"
        },
        {
            "augmentId": "cfcd0b86-cfec-4e19-b06e-5199616220fa",
            "userAugmentId": "97048e0e-1961-4637-8c0e-cbd806870f68",
            "userCarId": "7e7e8fe1-6413-420f-acc5-5af70d41e7af",
            "slot": 0
        },
        {
            "augmentId": "038d08d6-dc14-44fe-a8a9-ca691ba69fad",
            "userAugmentId": "9739afac-a2bb-4a12-9e90-f3cea6dd3439"
        },
        {
            "augmentId": "dd57ca64-a63b-4149-95ee-c55ef6c69507",
            "userAugmentId": "99081a20-fd9a-467a-b697-afbb18b7e949",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 1
        },
        {
            "augmentId": "3411ac20-c72f-4946-80b2-6e3059ea7d99",
            "userAugmentId": "9b23ffe9-3085-424f-bc51-166827b5b529",
            "userCarId": "c61bccf5-ffca-45e1-8359-5857c81016a6",
            "slot": 2
        },
        {
            "augmentId": "845f96cd-1c55-4063-b2e8-7fa27167d02f",
            "userAugmentId": "9be73e21-e0ae-4f2c-81a8-c935c277733a"
        },
        {
            "augmentId": "bd62b58a-904a-480c-9e80-ea17b985c28c",
            "userAugmentId": "9c4e5ebf-334d-40b2-a756-d834948a9e6b",
            "userCarId": "568faf32-097e-430f-82c1-6c6be5341a0c",
            "slot": 0
        },
        {
            "augmentId": "db1513ef-763c-435e-a1a5-767cb0e2fcc6",
            "userAugmentId": "9c7e0494-946d-49e8-ae05-c7ac4f9adc6c",
            "userCarId": "85f22c73-7187-4590-8b88-74e2206f3b9b",
            "slot": 0
        },
        {
            "augmentId": "8c2e40b9-9ec3-409b-af17-01092f355635",
            "userAugmentId": "9cb9019f-cd5f-4d93-b80e-ecbdf839745a"
        },
        {
            "augmentId": "97aabd3b-7e68-4b79-8bb8-76628b5539e9",
            "userAugmentId": "9dc694cc-9183-4c0e-92df-7e1be41f8613",
            "userCarId": "77d6ca90-8c9e-4d3e-b7d1-f7a525580986",
            "slot": 0
        },
        {
            "augmentId": "ec0c8313-160c-40f7-88cc-75869f4a7a7d",
            "userAugmentId": "9e83be1d-eeb5-4fa6-a6f2-0ac9adf742ba"
        },
        {
            "augmentId": "33077fa0-fea2-426b-854c-a20e70255ba4",
            "userAugmentId": "9ef4b571-3484-4b3a-9ac8-5df5c6676097"
        },
        {
            "augmentId": "4c727680-a8ab-47de-86ac-874f9e451e2d",
            "userAugmentId": "9ef503fa-292d-46d8-bc9d-653a0d8a3f5a"
        },
        {
            "augmentId": "86316729-597d-4955-9cb6-cfc986ef7c58",
            "userAugmentId": "9f0ceccd-a93a-4b92-a999-be5acb5b574d"
        },
        {
            "augmentId": "43d07f7d-4cad-41e7-bdc1-1f0a60800540",
            "userAugmentId": "9f73ad8f-7c72-4b65-a787-b54de553fd28"
        },
        {
            "augmentId": "29adba15-644e-49fc-8d00-9ac9ace9ae34",
            "userAugmentId": "a1d83238-9d02-4f6f-9947-a665860b789c"
        },
        {
            "augmentId": "a08f7b91-773e-4e8b-9e49-63cb13bb696f",
            "userAugmentId": "a1ec6a66-568e-428a-b554-85eacd51db04",
            "userCarId": "c61bccf5-ffca-45e1-8359-5857c81016a6",
            "slot": 2
        },
        {
            "augmentId": "005fb3fc-ac06-46f8-9a35-e6f651f66dab",
            "userAugmentId": "a273fe9c-567c-4971-bbfd-3a7188f3b5ca"
        },
        {
            "augmentId": "28b767df-036b-4d81-97c0-b2f72727f087",
            "userAugmentId": "a305375a-65ec-459a-bdcc-81b617dd5308"
        },
        {
            "augmentId": "2a6cec9e-b1bb-4198-b05a-069a227b02b9",
            "userAugmentId": "a338db59-b4d5-4aef-a7f5-b6a879878fb6"
        },
        {
            "augmentId": "ffdb0505-3aba-4661-a56b-b0756a54780b",
            "userAugmentId": "a4da1ddd-1806-42ce-b24f-9b3499227081"
        },
        {
            "augmentId": "6a95ae07-21d7-4726-ad7c-a8b75c6b54ee",
            "userAugmentId": "a5fcbfcb-35e8-497e-8a82-b77202da6ed3",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 0
        },
        {
            "augmentId": "5e59e3d0-1f09-4ff7-863d-9730c965ff23",
            "userAugmentId": "a6392b12-bbda-44ad-bdcd-c37baf1a31b1"
        },
        {
            "augmentId": "350ae3bf-2656-4ecd-ba29-5ddb48e8ab43",
            "userAugmentId": "a748ebe4-e198-45a7-b05f-74449b1d7a9a"
        },
        {
            "augmentId": "3317949c-2d68-42bf-b203-d13448f68246",
            "userAugmentId": "a7faa6c1-1e76-4a1c-9847-db2ac3d228b4"
        },
        {
            "augmentId": "d9901431-2704-41eb-b4ca-a464d3e977cf",
            "userAugmentId": "a8424b3c-397f-4520-872e-0355c56eb44c"
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "a9210b56-53ce-4571-909d-cbb8010bb616"
        },
        {
            "augmentId": "f0a865ea-0db6-4d2b-945a-a58973b9950a",
            "userAugmentId": "a9d12588-67e5-4bd9-b459-5af4f512b318"
        },
        {
            "augmentId": "46359030-535d-46f1-a2cd-411e65bd99de",
            "userAugmentId": "adfa81f3-14bf-467c-b204-18c3425573e1"
        },
        {
            "augmentId": "db1513ef-763c-435e-a1a5-767cb0e2fcc6",
            "userAugmentId": "ae17a3b8-975c-47a0-b6e4-3b1b7dcdc23b",
            "userCarId": "7e7e8fe1-6413-420f-acc5-5af70d41e7af",
            "slot": 0
        },
        {
            "augmentId": "6312f800-9e13-48a6-8548-63d25f67c777",
            "userAugmentId": "afb15018-5973-4fe0-a853-c2afb22c88a1"
        },
        {
            "augmentId": "29adba15-644e-49fc-8d00-9ac9ace9ae34",
            "userAugmentId": "b006158f-c2ef-4a21-8329-da2baa439fc2"
        },
        {
            "augmentId": "9ce379ed-f9a9-4f7c-8cff-012622340159",
            "userAugmentId": "b037d22d-0ff6-416e-ad78-5c28b7ce3db6",
            "userCarId": "c62e1e51-a1a4-4b67-82b9-f313f3db62b2",
            "slot": 1
        },
        {
            "augmentId": "e76ecfd1-075a-4b81-a0ec-5ae1903e664d",
            "userAugmentId": "b09c6c94-6b8e-47a9-8ba4-3810fd4c496a",
            "userCarId": "1a5ab85d-ec13-4dff-b8b1-eb88bd75ed11",
            "slot": 0
        },
        {
            "augmentId": "26e44a44-d22f-42c4-a4bb-f1dbe3ca52f2",
            "userAugmentId": "b0dff36f-e16f-446b-9377-b2a2787901cb"
        },
        {
            "augmentId": "74f7f95a-a0d8-444e-b2c1-d549ecf79bdb",
            "userAugmentId": "b0fb679c-1454-4637-8541-eb5c8232d898"
        },
        {
            "augmentId": "db15ac71-2527-4f42-8343-064b41f880ef",
            "userAugmentId": "b1ef06ce-c753-4ef9-a301-59265948d89f"
        },
        {
            "augmentId": "ffdb0505-3aba-4661-a56b-b0756a54780b",
            "userAugmentId": "b22be784-17c9-40fc-884b-42c829c97dd2"
        },
        {
            "augmentId": "2a6cec9e-b1bb-4198-b05a-069a227b02b9",
            "userAugmentId": "b2a5de9a-f479-4418-a13c-783aa49d8a27"
        },
        {
            "augmentId": "5ed1dc32-61fe-4713-884e-259d4a0932b9",
            "userAugmentId": "b3a8c1b2-0304-470c-8874-85523ab8040f"
        },
        {
            "augmentId": "8b1d2687-955f-453f-924c-b9821fbbbf07",
            "userAugmentId": "b3abb51c-119b-4edc-9efd-d83bc0f72891"
        },
        {
            "augmentId": "d92c3f0a-6da6-4a09-9c94-d60b289e465f",
            "userAugmentId": "b67aebdf-f4d4-4103-b265-f12b74d28e8c"
        },
        {
            "augmentId": "f4fdb44c-8758-4634-a973-ce2b9a6e0bee",
            "userAugmentId": "b69870d6-26b6-4ad2-96b8-db2d750f8dd2"
        },
        {
            "augmentId": "811879a8-b38e-48f9-8be1-4c31aaf9d1d5",
            "userAugmentId": "b7a65f5e-d150-460f-8e29-653444510065"
        },
        {
            "augmentId": "730fad8a-8408-4714-b110-3ba27c1cfeea",
            "userAugmentId": "b7dde555-caeb-4eee-a4de-8cfda7089829",
            "userCarId": "3f2ee55d-e64b-426b-b18f-094fafabc4a1",
            "slot": 0
        },
        {
            "augmentId": "93ab866f-af28-4d5f-be58-82a2cb475fb0",
            "userAugmentId": "b85db9ee-6ce8-4a5c-9902-2a1d3d25a1f6"
        },
        {
            "augmentId": "ba50cff4-cb5a-4a75-8a10-eabe3b04e4f6",
            "userAugmentId": "ba64106e-ef19-48ff-aee8-202d3bf462a7"
        },
        {
            "augmentId": "27c7c24a-58f6-435c-8564-6385eae8ede0",
            "userAugmentId": "ba9f6b03-6244-42b7-a430-66f3d4bac8b5",
            "userCarId": "c62e1e51-a1a4-4b67-82b9-f313f3db62b2",
            "slot": 1
        },
        {
            "augmentId": "c7b0a55f-e381-4415-9f9c-abfde2d5c7b7",
            "userAugmentId": "bad3450f-2eed-4afb-bfe9-9429fb19afc9",
            "userCarId": "3d8fd491-eace-4081-b0e4-25aa82f9402e",
            "slot": 1
        },
        {
            "augmentId": "eb62d2a7-7a44-4e6d-a459-b52c1292da17",
            "userAugmentId": "bad3d909-ca54-4550-bc5e-aba0e4582a10"
        },
        {
            "augmentId": "137d2033-3e00-44c9-8e89-69d31d32901c",
            "userAugmentId": "bb8a7341-05b9-43b1-92dd-b21001eaea7e",
            "userCarId": "85f22c73-7187-4590-8b88-74e2206f3b9b",
            "slot": 1
        },
        {
            "augmentId": "f949ea6f-cf6d-460d-9848-389439cb7504",
            "userAugmentId": "bb8fe1d6-15a5-488a-af61-a2662fe4cb00"
        },
        {
            "augmentId": "6a95ae07-21d7-4726-ad7c-a8b75c6b54ee",
            "userAugmentId": "bc27cbd6-66b7-4ca2-82a1-888750df0292",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 1
        },
        {
            "augmentId": "87b7ddfc-ea88-4bba-a221-00b390f8756a",
            "userAugmentId": "bf6a0cda-5c5c-4b84-a876-b9c6021cde9d",
            "userCarId": "77d6ca90-8c9e-4d3e-b7d1-f7a525580986",
            "slot": 1
        },
        {
            "augmentId": "ed7b1b30-87dc-4e23-83dc-e904b5b2c10b",
            "userAugmentId": "c0ff6d89-78ef-4d18-861e-1d46c70d990b"
        },
        {
            "augmentId": "942c9277-5ccd-4b88-857b-865334fce248",
            "userAugmentId": "c11734c4-7d9a-43b7-8c29-daa0557cb65a"
        },
        {
            "augmentId": "ec0c8313-160c-40f7-88cc-75869f4a7a7d",
            "userAugmentId": "c244e8ee-07fb-46f9-9973-680f78a9fad7"
        },
        {
            "augmentId": "ec0c8313-160c-40f7-88cc-75869f4a7a7d",
            "userAugmentId": "c2b8d424-1d40-4b6b-a9dd-863f5f92d922"
        },
        {
            "augmentId": "4e4f2b4c-be5d-4d05-a660-77c80441b1cb",
            "userAugmentId": "c3edfb01-8a00-44f7-9a80-9ef9439a7984"
        },
        {
            "augmentId": "db15ac71-2527-4f42-8343-064b41f880ef",
            "userAugmentId": "c4c9a31c-0719-4e66-afaf-dda120b90f6b"
        },
        {
            "augmentId": "c6996dff-99d3-4cd5-afda-4c1c7a5b9c1d",
            "userAugmentId": "c5c37900-a028-404f-995a-c1bb60bfa897"
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "c8159990-21b9-4214-8b01-aa204149087f"
        },
        {
            "augmentId": "ec0c8313-160c-40f7-88cc-75869f4a7a7d",
            "userAugmentId": "ca085c33-c47d-4528-b11e-11f53faf8e7a"
        },
        {
            "augmentId": "431b6f43-813f-4576-9f6c-1a0b84c31423",
            "userAugmentId": "ca3c1d22-e032-4c69-84c5-4747a033af81"
        },
        {
            "augmentId": "431b6f43-813f-4576-9f6c-1a0b84c31423",
            "userAugmentId": "ca60e36e-44df-4e93-874d-aaba36a5d5c4",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 0
        },
        {
            "augmentId": "74143a33-787f-4dea-9167-eca54b9f4979",
            "userAugmentId": "ca7c14b7-d2a1-4af6-ac5c-ea9a72cc2d5b"
        },
        {
            "augmentId": "f846628d-46a0-4ac4-bbbe-696615c73f8a",
            "userAugmentId": "cbf07a99-e8df-45fc-b458-bfc10dfa8acd"
        },
        {
            "augmentId": "cea7ea33-4faf-470b-ab93-076193d7c21a",
            "userAugmentId": "cc4b0961-0cb5-4ad5-be09-05bcba338e1e"
        },
        {
            "augmentId": "db1513ef-763c-435e-a1a5-767cb0e2fcc6",
            "userAugmentId": "cc6266ab-2479-4a23-abf9-099663f2ed44",
            "userCarId": "85f22c73-7187-4590-8b88-74e2206f3b9b",
            "slot": 1
        },
        {
            "augmentId": "a08f7b91-773e-4e8b-9e49-63cb13bb696f",
            "userAugmentId": "ce1bf581-e076-46d8-b40c-307cb83f2c18",
            "userCarId": "1a5ab85d-ec13-4dff-b8b1-eb88bd75ed11",
            "slot": 0
        },
        {
            "augmentId": "e8db0780-3e3e-40ac-8f08-0a5c5a131a78",
            "userAugmentId": "d1c25382-4a02-41cf-9869-e2d0d0dba550"
        },
        {
            "augmentId": "43d07f7d-4cad-41e7-bdc1-1f0a60800540",
            "userAugmentId": "d2725a0d-7afc-42c0-a37f-e092fde024d1"
        },
        {
            "augmentId": "adb494eb-ee87-42cf-a158-898d84e104b0",
            "userAugmentId": "d772f74d-5d8e-40be-93aa-c1c5bb7dbb03"
        },
        {
            "augmentId": "1d489111-315c-428d-be42-3ab93d186818",
            "userAugmentId": "d9e7fc9a-dcf5-4d1c-b124-e0e3ca8cdd32",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 2
        },
        {
            "augmentId": "65887c36-f884-400a-a3f7-fac9987e4bb6",
            "userAugmentId": "d9f35016-8780-444c-9986-dcfc9f34faed",
            "userCarId": "3d8fd491-eace-4081-b0e4-25aa82f9402e",
            "slot": 2
        },
        {
            "augmentId": "c91dca1c-d3fa-47a4-9f77-a14e0f6805c4",
            "userAugmentId": "db000f7e-dd74-449b-8141-ccd6e1fb299a"
        },
        {
            "augmentId": "942c9277-5ccd-4b88-857b-865334fce248",
            "userAugmentId": "db402273-26a5-4a41-894d-e22e2f8bc72f"
        },
        {
            "augmentId": "222be039-0755-4508-bc02-c665e14446e8",
            "userAugmentId": "dd1d2195-d319-472b-95d9-fa0b485ee104",
            "userCarId": "5588aa8c-c20b-4316-9794-45eef6709187",
            "slot": 1
        },
        {
            "augmentId": "4e4f2b4c-be5d-4d05-a660-77c80441b1cb",
            "userAugmentId": "dd49d7c4-c9be-4c68-abfb-ac34ec75ad2a"
        },
        {
            "augmentId": "f949ea6f-cf6d-460d-9848-389439cb7504",
            "userAugmentId": "dd4b9b5f-0bad-427a-8f4f-bcb6fee8c9b2"
        },
        {
            "augmentId": "45342dbb-db11-48e5-87a1-51f2d742dae9",
            "userAugmentId": "dfed2c35-91c4-4afb-a15d-d1ed40fab017",
            "userCarId": "77d6ca90-8c9e-4d3e-b7d1-f7a525580986",
            "slot": 1
        },
        {
            "augmentId": "48772280-fad9-435e-9c98-539511c872c4",
            "userAugmentId": "e142f213-cecc-48aa-934c-e51566c18a22"
        },
        {
            "augmentId": "fda2acd2-0ca0-4eec-9063-124ea1503b82",
            "userAugmentId": "e282fd4c-b23c-4df8-b7dd-d7a064f95d68"
        },
        {
            "augmentId": "bd62b58a-904a-480c-9e80-ea17b985c28c",
            "userAugmentId": "e493cfd3-4c45-4bbd-8b7a-9ac4e8b64a45"
        },
        {
            "augmentId": "7bb93d5f-bbda-46bf-ae1d-df4a547d28de",
            "userAugmentId": "e49f86f8-3b49-4b0a-b1f8-54a13540d159",
            "userCarId": "3f2ee55d-e64b-426b-b18f-094fafabc4a1",
            "slot": 0
        },
        {
            "augmentId": "ced21159-6245-422a-8b42-bbc26e060f10",
            "userAugmentId": "e4a34368-85d6-4219-b564-f66c213a192b"
        },
        {
            "augmentId": "87b7ddfc-ea88-4bba-a221-00b390f8756a",
            "userAugmentId": "e4b8f293-93b0-49f8-ac10-03f4c6e99338",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 2
        },
        {
            "augmentId": "ae324996-665e-4b88-8ebe-4cc43f0b315f",
            "userAugmentId": "e4fb381d-236a-4f31-a031-d7f2c21503d4"
        },
        {
            "augmentId": "97aabd3b-7e68-4b79-8bb8-76628b5539e9",
            "userAugmentId": "e653b48c-070c-4361-b91b-cd8909069ad1",
            "userCarId": "4e044731-eee6-4b8d-b1f0-7bfb8fcc271c",
            "slot": 2
        },
        {
            "augmentId": "dcf904d9-72b1-4ade-8475-9877254ed4c0",
            "userAugmentId": "e6b4155b-05db-4a6d-81f2-3c63c17ed638",
            "userCarId": "1a5ab85d-ec13-4dff-b8b1-eb88bd75ed11",
            "slot": 0
        },
        {
            "augmentId": "4fccab95-7691-4206-aecf-bcef674f7e50",
            "userAugmentId": "e6cf1ef7-eeb3-4b8d-b42b-2dcfa58c552a"
        },
        {
            "augmentId": "2a6cec9e-b1bb-4198-b05a-069a227b02b9",
            "userAugmentId": "e7a1d2f6-846c-403b-ab8b-724cf267a5ae"
        },
        {
            "augmentId": "811879a8-b38e-48f9-8be1-4c31aaf9d1d5",
            "userAugmentId": "e814bf15-01b0-4486-be1b-1bfb9c2a04ec"
        },
        {
            "augmentId": "94db8f75-0ed3-4d9e-a3df-d228e5fbf5fb",
            "userAugmentId": "e8ba3f8a-4ced-4c06-8feb-141c0ed34a35"
        },
        {
            "augmentId": "62795881-8c8e-40fe-8f3d-f79686c5b2df",
            "userAugmentId": "eb3490d3-98b4-45f4-b775-e3624ad96460"
        },
        {
            "augmentId": "94e21f56-6d8a-413d-a0a0-6b8ad5bcd200",
            "userAugmentId": "ed8bce4d-78b3-4d2f-b719-9a406ed670b8"
        },
        {
            "augmentId": "47f9bfd1-5f1f-4be6-8190-ce17cd063f44",
            "userAugmentId": "eedf6a9f-98aa-4707-b72d-e6d3644a59ac",
            "userCarId": "79b8c466-e989-48b3-9038-d207daf398b1",
            "slot": 0
        },
        {
            "augmentId": "44dc5708-8958-4b9c-8d58-4d4d793af6aa",
            "userAugmentId": "ef48e029-460c-4ca9-8d1d-d2cf9c630749"
        },
        {
            "augmentId": "d3e981ad-c176-44d6-a43c-5ab5ece9b3b7",
            "userAugmentId": "f06c7583-c92c-4be3-a0f0-0617239f7d92"
        },
        {
            "augmentId": "a08f7b91-773e-4e8b-9e49-63cb13bb696f",
            "userAugmentId": "f073191a-bcb7-4b5b-96ff-49487dfd7ebf",
            "userCarId": "1a5ab85d-ec13-4dff-b8b1-eb88bd75ed11",
            "slot": 1
        },
        {
            "augmentId": "74f7f95a-a0d8-444e-b2c1-d549ecf79bdb",
            "userAugmentId": "f1fa5f2e-f6f5-4d5d-a4d0-c8bf068c8d0e"
        },
        {
            "augmentId": "ce026792-b651-4b9c-8731-46e7d7e5a873",
            "userAugmentId": "f2e30683-aff6-4298-9a62-7a54ea6c43b0"
        },
        {
            "augmentId": "c91dca1c-d3fa-47a4-9f77-a14e0f6805c4",
            "userAugmentId": "f627fa29-40e7-41f6-aad5-113ea2d42605"
        },
        {
            "augmentId": "4d497a17-5193-4302-89a9-946c47d296a3",
            "userAugmentId": "f6a30ae5-02ec-4aa2-820a-87a702d44c6c"
        },
        {
            "augmentId": "bacbf824-3345-488a-acdb-8b48690f4ded",
            "userAugmentId": "f6e45396-a3e6-415d-8b72-bb0aeb16e1ab"
        },
        {
            "augmentId": "35d2b025-aea3-4f71-8d3e-1b9d9f6ee4b8",
            "userAugmentId": "f7401c26-5e37-4cf8-9a72-d7bd7acb544f",
            "userCarId": "c62e1e51-a1a4-4b67-82b9-f313f3db62b2",
            "slot": 0
        },
        {
            "augmentId": "fda2acd2-0ca0-4eec-9063-124ea1503b82",
            "userAugmentId": "f88c6555-0400-4a45-80a1-b03c7e0571eb"
        },
        {
            "augmentId": "30d7a599-f963-47bd-aaed-3bc1acc61fb3",
            "userAugmentId": "f8c94d66-36c9-40e0-846b-cd402e674f94"
        },
        {
            "augmentId": "c7b0a55f-e381-4415-9f9c-abfde2d5c7b7",
            "userAugmentId": "f8f660af-1424-4af1-9106-c93cd662a772"
        },
        {
            "augmentId": "ee4ba9d0-b2c8-4bb1-8104-89150b6fe87a",
            "userAugmentId": "f98522b1-aef0-479c-a3c4-7339ea5ebc77"
        },
        {
            "augmentId": "5f75be7d-d824-438b-96fd-e3853891e889",
            "userAugmentId": "f9ede91e-c5ff-4c21-ac62-a14776adbb39"
        },
        {
            "augmentId": "c69b836b-0cff-4fcc-a611-ab65ac705948",
            "userAugmentId": "fba849df-5f34-4e03-97ab-2ce09b9d5772"
        },
        {
            "augmentId": "8a1846a9-ef73-4afc-a641-ebeb5c915178",
            "userAugmentId": "fe6ffdab-b4e0-4a83-9b15-05bb0d431b48",
            "userCarId": "5588aa8c-c20b-4316-9794-45eef6709187",
            "slot": 0
        },
        {
            "augmentId": "a08f7b91-773e-4e8b-9e49-63cb13bb696f",
            "userAugmentId": "fec4a57d-b9df-4fab-8822-25632faf9984"
        },
        {
            "augmentId": "26424277-6eee-47f0-99ed-90498f8d043f",
            "userAugmentId": "fedff4bc-4c94-49a0-ac81-f161a2938230",
            "userCarId": "85f22c73-7187-4590-8b88-74e2206f3b9b",
            "slot": 0
        },
        {
            "augmentId": "137d2033-3e00-44c9-8e89-69d31d32901c",
            "userAugmentId": "ff539b70-7d91-4de9-b52e-ad214c4d8892"
        }
    ],
    "userTiers": [
        {
            "tierIndex": 1,
            "carClass": 1,
            "bossRacesWon": 7,
            "bossRacesAttempted": 7,
            "bossRaceLastWon": new Date("2019-11-09T09:02:54.500Z"),
            "bossRaceLastAttempt": new Date("2019-11-09T09:02:21.141Z"),
            "ladderRacesWon": 20,
            "ladderRacesAttempted": 25,
            "ladderRaceLastWon": new Date("2019-11-22T22:33:52.365Z"),
            "ladderRaceLastAttempt": new Date("2019-11-22T22:33:26.170Z"),
            "easyMoneyRacesWon": 16,
            "easyMoneyRacesAttempted": 19,
            "easyMoneyRaceLastWon": new Date("2019-12-24T07:55:44.043Z"),
            "easyMoneyRaceLastAttempt": new Date("2019-12-24T07:55:09.086Z"),
            "dailyRacesWon": 3,
            "dailyRacesAttempted": 3,
            "dailyRaceLastWon": new Date("2019-11-08T22:37:15.835Z"),
            "dailyRaceLastAttempt": new Date("2019-11-08T22:36:45.096Z"),
            "doublePayoutRacesWon": 24,
            "doublePayoutRacesAttempted": 24,
            "doublePayoutRaceLastWon": new Date("2019-11-09T08:12:56.789Z"),
            "doublePayoutRaceLastAttempts": [
                new Date("2019-11-08T15:27:06.611Z"),
                new Date("2019-11-08T15:27:57.715Z"),
                new Date("2019-11-08T15:28:48.341Z"),
                new Date("2019-11-08T19:44:17.653Z"),
                new Date("2019-11-08T19:45:04.677Z"),
                new Date("2019-11-08T19:45:45.885Z"),
                new Date("2019-11-09T08:10:44.148Z"),
                new Date("2019-11-09T08:11:33.556Z"),
                new Date("2019-11-09T08:12:26.752Z")
            ],
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": true,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 0,
            "bossLadderRacesAttempted": 0,
            "bossLadderRaceLastWon": null,
            "bossLadderRaceLastAttempt": null,
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 1,
            "carClass": 2,
            "bossRacesWon": 0,
            "bossRacesAttempted": 0,
            "bossRaceLastWon": null,
            "bossRaceLastAttempt": null,
            "ladderRacesWon": 20,
            "ladderRacesAttempted": 24,
            "ladderRaceLastWon": new Date("2020-07-20T08:19:12.573Z"),
            "ladderRaceLastAttempt": new Date("2020-07-20T08:18:37.473Z"),
            "easyMoneyRacesWon": 1,
            "easyMoneyRacesAttempted": 1,
            "easyMoneyRaceLastWon": new Date("2020-07-24T06:59:08.648Z"),
            "easyMoneyRaceLastAttempt": new Date("2020-07-24T06:58:35.337Z"),
            "dailyRacesWon": 0,
            "dailyRacesAttempted": 0,
            "dailyRaceLastWon": null,
            "dailyRaceLastAttempt": null,
            "doublePayoutRacesWon": 0,
            "doublePayoutRacesAttempted": 0,
            "doublePayoutRaceLastWon": null,
            "doublePayoutRaceLastAttempts": null,
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": false,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 5,
            "bossLadderRacesAttempted": 5,
            "bossLadderRaceLastWon": new Date("2020-04-07T20:37:30.187Z"),
            "bossLadderRaceLastAttempt": new Date("2020-04-07T20:36:47.709Z"),
            "dailyClassRacesWon": 1,
            "dailyClassRacesAttempted": 1,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": new Date("2020-04-07T19:19:00.392Z")
        },
        {
            "tierIndex": 2,
            "carClass": 1,
            "bossRacesWon": 7,
            "bossRacesAttempted": 7,
            "bossRaceLastWon": new Date("2019-11-12T15:25:55.909Z"),
            "bossRaceLastAttempt": new Date("2019-11-12T15:25:25.827Z"),
            "ladderRacesWon": 20,
            "ladderRacesAttempted": 36,
            "ladderRaceLastWon": new Date("2019-12-08T10:47:28.600Z"),
            "ladderRaceLastAttempt": new Date("2019-12-08T10:47:00.152Z"),
            "easyMoneyRacesWon": 53,
            "easyMoneyRacesAttempted": 60,
            "easyMoneyRaceLastWon": new Date("2020-06-30T14:07:24.520Z"),
            "easyMoneyRaceLastAttempt": new Date("2020-06-30T14:06:54.593Z"),
            "dailyRacesWon": 5,
            "dailyRacesAttempted": 5,
            "dailyRaceLastWon": new Date("2019-11-13T17:19:29.335Z"),
            "dailyRaceLastAttempt": new Date("2019-11-13T17:19:03.592Z"),
            "doublePayoutRacesWon": 24,
            "doublePayoutRacesAttempted": 25,
            "doublePayoutRaceLastWon": new Date("2019-11-12T15:07:31.461Z"),
            "doublePayoutRaceLastAttempts": [
                new Date("2019-11-11T20:07:58.606Z"),
                new Date("2019-11-11T20:08:53.766Z"),
                new Date("2019-11-11T20:09:46.512Z"),
                new Date("2019-11-12T07:20:41.866Z"),
                new Date("2019-11-12T07:21:33.070Z"),
                new Date("2019-11-12T07:22:21.919Z"),
                new Date("2019-11-12T15:01:49.983Z"),
                new Date("2019-11-12T15:04:06.636Z"),
                new Date("2019-11-12T15:06:58.333Z")
            ],
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": true,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 0,
            "bossLadderRacesAttempted": 0,
            "bossLadderRaceLastWon": null,
            "bossLadderRaceLastAttempt": null,
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 2,
            "carClass": 2,
            "bossRacesWon": 0,
            "bossRacesAttempted": 0,
            "bossRaceLastWon": null,
            "bossRaceLastAttempt": null,
            "ladderRacesWon": 20,
            "ladderRacesAttempted": 29,
            "ladderRaceLastWon": new Date("2020-07-29T20:10:17.022Z"),
            "ladderRaceLastAttempt": new Date("2020-07-29T20:09:42.703Z"),
            "easyMoneyRacesWon": 0,
            "easyMoneyRacesAttempted": 1,
            "easyMoneyRaceLastWon": null,
            "easyMoneyRaceLastAttempt": new Date("2020-07-28T08:34:05.291Z"),
            "dailyRacesWon": 0,
            "dailyRacesAttempted": 0,
            "dailyRaceLastWon": null,
            "dailyRaceLastAttempt": null,
            "doublePayoutRacesWon": 0,
            "doublePayoutRacesAttempted": 0,
            "doublePayoutRaceLastWon": null,
            "doublePayoutRaceLastAttempts": null,
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": false,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 5,
            "bossLadderRacesAttempted": 8,
            "bossLadderRaceLastWon": new Date("2020-06-15T21:15:03.387Z"),
            "bossLadderRaceLastAttempt": new Date("2020-06-15T21:14:25.973Z"),
            "dailyClassRacesWon": 10,
            "dailyClassRacesAttempted": 10,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": new Date("2020-05-10T15:33:25.859Z")
        },
        {
            "tierIndex": 3,
            "carClass": 1,
            "bossRacesWon": 7,
            "bossRacesAttempted": 8,
            "bossRaceLastWon": new Date("2019-11-18T10:17:09.082Z"),
            "bossRaceLastAttempt": new Date("2019-11-18T10:16:33.189Z"),
            "ladderRacesWon": 20,
            "ladderRacesAttempted": 33,
            "ladderRaceLastWon": new Date("2019-11-18T10:16:03.137Z"),
            "ladderRaceLastAttempt": new Date("2019-11-18T10:15:35.026Z"),
            "easyMoneyRacesWon": 45,
            "easyMoneyRacesAttempted": 70,
            "easyMoneyRaceLastWon": new Date("2020-09-01T06:34:29.838Z"),
            "easyMoneyRaceLastAttempt": new Date("2020-09-01T06:33:57.291Z"),
            "dailyRacesWon": 5,
            "dailyRacesAttempted": 5,
            "dailyRaceLastWon": new Date("2019-11-18T09:15:28.284Z"),
            "dailyRaceLastAttempt": new Date("2019-11-18T09:15:00.988Z"),
            "doublePayoutRacesWon": 28,
            "doublePayoutRacesAttempted": 34,
            "doublePayoutRaceLastWon": new Date("2019-11-18T06:38:28.550Z"),
            "doublePayoutRaceLastAttempts": [
                new Date("2019-11-17T13:16:00.411Z"),
                new Date("2019-11-17T13:16:47.311Z"),
                new Date("2019-11-17T13:17:37.341Z"),
                new Date("2019-11-17T18:34:41.850Z"),
                new Date("2019-11-17T18:35:43.672Z"),
                new Date("2019-11-17T18:36:39.569Z"),
                new Date("2019-11-18T06:35:51.280Z"),
                new Date("2019-11-18T06:36:38.484Z"),
                new Date("2019-11-18T06:37:55.081Z")
            ],
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": true,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 0,
            "bossLadderRacesAttempted": 0,
            "bossLadderRaceLastWon": null,
            "bossLadderRaceLastAttempt": null,
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 3,
            "carClass": 2,
            "bossRacesWon": 0,
            "bossRacesAttempted": 0,
            "bossRaceLastWon": null,
            "bossRaceLastAttempt": null,
            "ladderRacesWon": 18,
            "ladderRacesAttempted": 30,
            "ladderRaceLastWon": new Date("2020-08-06T11:24:06.310Z"),
            "ladderRaceLastAttempt": new Date("2020-08-06T11:24:13.330Z"),
            "easyMoneyRacesWon": 0,
            "easyMoneyRacesAttempted": 0,
            "easyMoneyRaceLastWon": null,
            "easyMoneyRaceLastAttempt": null,
            "dailyRacesWon": 0,
            "dailyRacesAttempted": 0,
            "dailyRaceLastWon": null,
            "dailyRaceLastAttempt": null,
            "doublePayoutRacesWon": 0,
            "doublePayoutRacesAttempted": 0,
            "doublePayoutRaceLastWon": null,
            "doublePayoutRaceLastAttempts": null,
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": false,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 5,
            "bossLadderRacesAttempted": 15,
            "bossLadderRaceLastWon": new Date("2020-07-05T07:45:50.251Z"),
            "bossLadderRaceLastAttempt": new Date("2020-07-05T07:45:11.544Z"),
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 4,
            "carClass": 1,
            "bossRacesWon": 7,
            "bossRacesAttempted": 13,
            "bossRaceLastWon": new Date("2019-11-26T14:45:01.252Z"),
            "bossRaceLastAttempt": new Date("2019-11-26T14:44:24.801Z"),
            "ladderRacesWon": 20,
            "ladderRacesAttempted": 39,
            "ladderRaceLastWon": new Date("2019-12-27T13:51:01.734Z"),
            "ladderRaceLastAttempt": new Date("2019-12-27T13:50:24.975Z"),
            "easyMoneyRacesWon": 113,
            "easyMoneyRacesAttempted": 125,
            "easyMoneyRaceLastWon": new Date("2020-04-17T06:48:48.929Z"),
            "easyMoneyRaceLastAttempt": new Date("2020-04-21T07:09:38.431Z"),
            "dailyRacesWon": 7,
            "dailyRacesAttempted": 8,
            "dailyRaceLastWon": new Date("2019-11-26T14:43:56.832Z"),
            "dailyRaceLastAttempt": new Date("2019-11-26T14:43:19.387Z"),
            "doublePayoutRacesWon": 57,
            "doublePayoutRacesAttempted": 61,
            "doublePayoutRaceLastWon": new Date("2019-11-26T06:38:25.486Z"),
            "doublePayoutRaceLastAttempts": [
                new Date("2019-11-25T19:09:58.120Z"),
                new Date("2019-11-25T19:10:44.999Z"),
                new Date("2019-11-25T19:11:23.236Z"),
                new Date("2019-11-25T23:40:28.234Z"),
                new Date("2019-11-25T23:41:31.636Z"),
                new Date("2019-11-25T23:42:25.282Z"),
                new Date("2019-11-26T06:33:18.210Z"),
                new Date("2019-11-26T06:36:49.554Z"),
                new Date("2019-11-26T06:37:51.897Z")
            ],
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": true,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 0,
            "bossLadderRacesAttempted": 0,
            "bossLadderRaceLastWon": null,
            "bossLadderRaceLastAttempt": null,
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 4,
            "carClass": 2,
            "bossRacesWon": 0,
            "bossRacesAttempted": 0,
            "bossRaceLastWon": null,
            "bossRaceLastAttempt": null,
            "ladderRacesWon": 18,
            "ladderRacesAttempted": 25,
            "ladderRaceLastWon": new Date("2020-08-08T21:24:50.460Z"),
            "ladderRaceLastAttempt": new Date("2020-08-08T21:24:54.746Z"),
            "easyMoneyRacesWon": 1,
            "easyMoneyRacesAttempted": 3,
            "easyMoneyRaceLastWon": new Date("2020-09-01T06:39:14.028Z"),
            "easyMoneyRaceLastAttempt": new Date("2020-09-01T06:38:21.774Z"),
            "dailyRacesWon": 0,
            "dailyRacesAttempted": 0,
            "dailyRaceLastWon": null,
            "dailyRaceLastAttempt": null,
            "doublePayoutRacesWon": 0,
            "doublePayoutRacesAttempted": 0,
            "doublePayoutRaceLastWon": null,
            "doublePayoutRaceLastAttempts": null,
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": false,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 9,
            "bossLadderRacesAttempted": 16,
            "bossLadderRaceLastWon": new Date("2020-08-15T07:11:27.122Z"),
            "bossLadderRaceLastAttempt": new Date("2020-09-05T08:03:58.309Z"),
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 5,
            "carClass": 1,
            "bossRacesWon": 7,
            "bossRacesAttempted": 18,
            "bossRaceLastWon": new Date("2020-05-01T18:52:30.118Z"),
            "bossRaceLastAttempt": new Date("2020-05-01T18:52:04.849Z"),
            "ladderRacesWon": 19,
            "ladderRacesAttempted": 56,
            "ladderRaceLastWon": new Date("2020-05-10T15:30:51.332Z"),
            "ladderRaceLastAttempt": new Date("2020-09-01T06:30:50.574Z"),
            "easyMoneyRacesWon": 729,
            "easyMoneyRacesAttempted": 759,
            "easyMoneyRaceLastWon": new Date("2020-09-06T10:14:38.796Z"),
            "easyMoneyRaceLastAttempt": new Date("2020-09-06T10:14:18.355Z"),
            "dailyRacesWon": 136,
            "dailyRacesAttempted": 153,
            "dailyRaceLastWon": new Date("2020-09-06T10:10:11.579Z"),
            "dailyRaceLastAttempt": new Date("2020-09-06T10:09:44.027Z"),
            "doublePayoutRacesWon": 579,
            "doublePayoutRacesAttempted": 612,
            "doublePayoutRaceLastWon": new Date("2020-09-06T06:49:56.847Z"),
            "doublePayoutRaceLastAttempts": [
                new Date("2020-08-28T09:01:36.130Z"),
                new Date("2020-08-28T09:02:18.229Z"),
                new Date("2020-09-04T06:43:30.558Z"),
                new Date("2020-09-04T06:44:02.628Z"),
                new Date("2020-09-04T06:44:35.671Z"),
                new Date("2020-09-05T08:05:27.271Z"),
                new Date("2020-09-06T06:48:31.245Z"),
                new Date("2020-09-06T06:49:00.291Z"),
                new Date("2020-09-06T06:49:30.956Z")
            ],
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": true,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 0,
            "bossLadderRacesAttempted": 0,
            "bossLadderRaceLastWon": null,
            "bossLadderRaceLastAttempt": null,
            "dailyClassRacesWon": 0,
            "dailyClassRacesAttempted": 0,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": null
        },
        {
            "tierIndex": 5,
            "carClass": 2,
            "bossRacesWon": 0,
            "bossRacesAttempted": 0,
            "bossRaceLastWon": null,
            "bossRaceLastAttempt": null,
            "ladderRacesWon": 17,
            "ladderRacesAttempted": 27,
            "ladderRaceLastWon": new Date("2020-07-29T20:15:13.128Z"),
            "ladderRaceLastAttempt": new Date("2020-07-29T20:17:56.165Z"),
            "easyMoneyRacesWon": 0,
            "easyMoneyRacesAttempted": 0,
            "easyMoneyRaceLastWon": null,
            "easyMoneyRaceLastAttempt": null,
            "dailyRacesWon": 0,
            "dailyRacesAttempted": 0,
            "dailyRaceLastWon": null,
            "dailyRaceLastAttempt": null,
            "doublePayoutRacesWon": 0,
            "doublePayoutRacesAttempted": 0,
            "doublePayoutRaceLastWon": null,
            "doublePayoutRaceLastAttempts": null,
            "declinedSuperBoostBossEvent": false,
            "attemptedSuperBoostBossEvent": false,
            "wonSuperBoostBossEvent": false,
            "purchasedSuperBoost": false,
            "bossLadderRacesWon": 0,
            "bossLadderRacesAttempted": 0,
            "bossLadderRaceLastWon": null,
            "bossLadderRaceLastAttempt": null,
            "dailyClassRacesWon": 8,
            "dailyClassRacesAttempted": 11,
            "dailyClassRaceLastWon": null,
            "dailyClassRaceLastAttempt": new Date("2020-08-05T20:29:32.347Z")
        }
    ],
    "userResources": [
        {
            "resourceId": "096ca2e8-582e-42e9-ae9a-08a746511b14",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "09ca060a-1e89-4e1a-99a5-a3e59e945e63",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "0de2809a-c4bd-47c6-8d8b-7103ee9bb26d",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "10fe0f17-aa19-497d-9812-8a663c30987e",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "118b284d-ce87-49f3-8b6b-920394a06b88",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "14088420-3d94-4eb5-be15-432352374807",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "140a7f36-d605-4a04-97ca-9eeb7dc539c1",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "16c68573-5336-4249-9492-73d26a846fc7",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "2191b01d-9cdb-469a-a3cc-13e395d14d31",
            "amount": 9,
            "addedAmount": 0
        },
        {
            "resourceId": "21bbfd5b-5d2c-46ea-ab60-8b0075387ecf",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "21e03140-720b-464b-99a0-bec5ed9695c6",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "2d5b2107-2621-4984-ba82-698e62b6bb92",
            "amount": 6,
            "addedAmount": 0
        },
        {
            "resourceId": "2faf660d-4309-4b40-abfe-7ae4d9d5415e",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "33dc7ec1-66f9-44e5-a93c-16284ae8f5e1",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "3ae9ef34-a9c3-4586-a753-f98d5f340435",
            "amount": 6,
            "addedAmount": 0
        },
        {
            "resourceId": "3b14f547-3bcf-48e2-a7e1-3417aa5f66e5",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "3bff412a-64f0-480e-ac20-287b2b59546f",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "3f2986bc-b0e4-49de-bb1c-de5ba657b0ac",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "417ad01f-6dff-43e1-96fb-76465ec2e140",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "45f09607-342b-49d0-a438-94ff4ea0c8d6",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "4b1b49fd-0064-4e13-9064-6776f995427e",
            "amount": 6,
            "addedAmount": 0
        },
        {
            "resourceId": "4e72b6c8-62c4-4115-8c33-3dd31f6cfbc9",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "4f90d9cd-790f-4555-9250-6679c4ac9531",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "507ef00e-2acd-47ff-a756-d03a4c1ae21b",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "55253402-0668-44c4-a37e-2d5acc529b73",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "5565ae17-1c4a-4841-a3d3-5cf4ca9ad824",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "558a1ec3-cb3d-41aa-8e32-2075bdd25c06",
            "amount": 6,
            "addedAmount": 0
        },
        {
            "resourceId": "5d080e36-53aa-4827-865b-55cacb50c544",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "5d0f68f9-84c4-4944-adc8-f83b68a21f99",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "6029f471-8c6f-4f4d-9534-915645fb9ef1",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "62421917-9204-4928-9877-6d4e22283496",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "64796a49-0b52-4a6c-a54f-df8e508bd28f",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "6b7f3287-81d3-4704-90e3-5ab3a579a989",
            "amount": 6,
            "addedAmount": 0
        },
        {
            "resourceId": "6ca40336-ba1e-4681-9036-fd0d805086bb",
            "amount": 9,
            "addedAmount": 0
        },
        {
            "resourceId": "6f8e9022-6603-49f9-9343-fb15ec281fde",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "7587b7d6-51c8-4156-a161-f5c9da6d58f7",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "773d4eec-c029-4b12-9d1e-d1e3f9750401",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "7d3642ed-73dc-4c52-88a9-d8b32ab31625",
            "amount": 7,
            "addedAmount": 0
        },
        {
            "resourceId": "7fbcd6d3-6cf7-439e-8541-6cb4ab17b159",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "81641468-0a23-4ed2-a10f-8ba10833b4c6",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "82a9b659-2ac8-45a4-9075-53f46e5c32ea",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "8b012b45-68aa-4c2c-a027-581ff1f6df0f",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "8cc66040-7b18-4378-852a-2f750b8b03ad",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "8cf7e4da-0f57-4854-af78-21c6a3060564",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "8d17c2bb-e352-4906-b670-99cc34f71333",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "8eeb6622-3d47-4212-993c-73e4d2a4ca0c",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "9a9729ab-22ba-4eec-9560-cf49fba34c73",
            "amount": 9,
            "addedAmount": 0
        },
        {
            "resourceId": "9d2cde82-dc52-4ffc-8d92-181ffc8eba2e",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "a0d78f65-099e-4b22-9434-6be44e0b5fd9",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "a143764f-4d9c-40c1-ad7f-d0ddd2622720",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "a2c2b7ae-374a-4dba-8995-4fc41e12b97b",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "a9252745-df0a-40ff-b465-962184a78e62",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "a9c146f4-bc85-4803-b8ef-adb80dea90a2",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "ae9ce098-4722-4c2e-8ff2-477ef4d6cb6e",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "afeeca7b-9436-4a9d-91d9-522e6cdadbc7",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "b1c519d5-fab5-4854-8dad-489fdd26ee8d",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "b886d31e-d932-43ee-a3eb-38fd4fccb262",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "bba1a6ee-2abe-47f2-b30a-f55f47d0970d",
            "amount": 9,
            "addedAmount": 0
        },
        {
            "resourceId": "c526ae19-66e6-42bb-a18e-b71a1ebb2968",
            "amount": 1,
            "addedAmount": 0
        },
        {
            "resourceId": "c60d7374-4ab9-4786-bc99-32e6ea321b60",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "cb59a9b5-a43d-45d6-850f-0730a3933b41",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "ceb73fbe-f656-41d6-bd8a-923ba456080d",
            "amount": 2,
            "addedAmount": 0
        },
        {
            "resourceId": "cf04024b-05b7-4bc3-8725-9a72d027eadc",
            "amount": 6,
            "addedAmount": 0
        },
        {
            "resourceId": "d0ae39e0-6b1a-4a84-92b7-486ca75ee25b",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "d0d3e4ff-9527-4f4a-9ce7-f4109c53be18",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "d7fbdb02-eb42-4239-868f-8cb498e0b2a8",
            "amount": 4,
            "addedAmount": 0
        },
        {
            "resourceId": "d9594982-c596-4c73-b5dc-3adaaf2754ea",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "e38953d6-667a-4342-831c-10655114db3f",
            "amount": 3,
            "addedAmount": 0
        },
        {
            "resourceId": "ec1b02f0-6774-4d4c-aa33-05b070b5ce2a",
            "amount": 8,
            "addedAmount": 0
        },
        {
            "resourceId": "fb7940a9-dc17-43d3-9c83-51016fca3d32",
            "amount": 9,
            "addedAmount": 0
        },
        {
            "resourceId": "fce1f336-ab94-49b7-a4fd-05c9586eb1f0",
            "amount": 5,
            "addedAmount": 0
        },
        {
            "resourceId": "ff08a1c6-4fd4-41d6-abe3-b488cca8fded",
            "amount": 5,
            "addedAmount": 0
        }
    ],
    "fusionCredits": [
        {
            "manufacturerId": 1,
            "amount": 190
        },
        {
            "manufacturerId": 10,
            "amount": 1400
        },
        {
            "manufacturerId": 11,
            "amount": 1200
        },
        {
            "manufacturerId": 13,
            "amount": 150
        },
        {
            "manufacturerId": 16,
            "amount": 200
        },
        {
            "manufacturerId": 17,
            "amount": 50
        },
        {
            "manufacturerId": 2,
            "amount": 50
        },
        {
            "manufacturerId": 3,
            "amount": 400
        },
        {
            "manufacturerId": 4,
            "amount": 25
        },
        {
            "manufacturerId": 5,
            "amount": 400
        },
        {
            "manufacturerId": 6,
            "amount": 150
        },
        {
            "manufacturerId": 7,
            "amount": 400
        },
        {
            "manufacturerId": 8,
            "amount": 200
        }
    ]
}
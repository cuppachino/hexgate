import type { LcuComponents } from './components.js'

export type LcuOperations = {
  /** Download a backend asset */
  GetByPluginAssetsByPath: {
    parameters: {
      header: {
        /** @description optional ETag of the asset that the caller has cached */
        'if-none-match'?: string
      }
      path: {
        /** @description Plugin name to serve from */
        plugin: string
        /** @description Path to the asset to serve */
        path: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Download the header for a backend asset */
  HeadByPluginAssetsByPath: {
    parameters: {
      header: {
        /** @description optional ETag of the asset that the caller has cached */
        'if-none-match'?: string
      }
      path: {
        /** @description Plugin name to serve from */
        plugin: string
        /** @description Path to the asset to serve */
        path: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetAntiAddictionV1PoliciesByPolicyTypeAntiAddictionState: {
    parameters: {
      path: {
        /** @enum {string} */
        policyType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAntiAddictionAntiAddictionState']
        }
      }
    }
  }
  /** Retrieves the result of a completed asynchronous operation. */
  HttpAsyncResult: {
    parameters: {
      path: {
        /**
         * Format: int32
         * @description ID of the asynchronous operation to check
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves details on the current state of an asynchronous operation. */
  HttpAsyncStatus: {
    parameters: {
      path: {
        /**
         * Format: int32
         * @description ID of the asynchronous operation to check
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Cancels the asynchronous operation or removes its completion status. */
  HttpAsyncDelete: {
    parameters: {
      path: {
        /**
         * Format: int32
         * @description ID of the asynchronous operation to remove
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Cancels the asynchronous operation or removes its completion status. */
  AsyncDelete: {
    parameters: {
      query: {
        /**
         * Format: int32
         * @description ID of the asynchronous operation to remove
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves the result of a completed asynchronous operation. */
  AsyncResult: {
    parameters: {
      query: {
        /**
         * Format: int32
         * @description ID of the asynchronous operation to check
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves details on the current state of an asynchronous operation. */
  AsyncStatus: {
    parameters: {
      query: {
        /**
         * Format: int32
         * @description ID of the asynchronous operation to check
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Attempts to cancel an asynchronous operation */
  Cancel: {
    parameters: {
      query: {
        /**
         * Format: int32
         * @description Operation to cancel
         */
        asyncToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetClientConfigV1Config: {
    parameters: {
      query: {
        /** @enum {string} */
        type: string
        app?: string
        version?: string
        patchline?: string
        region?: string
        namespace?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | {
                  [key: string]: unknown | undefined
                }
              | undefined
          }
        }
      }
    }
  }
  GetClientConfigV1ConfigByName: {
    parameters: {
      query: {
        /** @enum {string} */
        type: string
        app?: string
        version?: string
        patchline?: string
        region?: string
      }
      path: {
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutClientConfigV1EntitlementsToken: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['ClientConfigEntitlementsUpdate']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutClientConfigV1RefreshConfigStatus: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetClientConfigV1StatusByType: {
    parameters: {
      path: {
        /** @enum {string} */
        type: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['ClientConfigConfigStatus']
        }
      }
    }
  }
  GetClientConfigV2ConfigByName: {
    parameters: {
      path: {
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutClientConfigV2NamespaceChanges: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['ClientConfigConfigNamespaceUpdate']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetClientConfigV2NamespaceByNamespace: {
    parameters: {
      path: {
        namespace: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | {
                  [key: string]: unknown | undefined
                }
              | undefined
          }
        }
      }
    }
  }
  GetClientConfigV2NamespaceByNamespacePlayer: {
    parameters: {
      path: {
        namespace: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | {
                  [key: string]: unknown | undefined
                }
              | undefined
          }
        }
      }
    }
  }
  GetClientConfigV2NamespaceByNamespacePublic: {
    parameters: {
      path: {
        namespace: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | {
                  [key: string]: unknown | undefined
                }
              | undefined
          }
        }
      }
    }
  }
  /** Get all cookies. */
  GetCookieJarV1Cookies: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['cookie'][]
        }
      }
    }
  }
  /** Set a cookie. */
  PostCookieJarV1Cookies: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['cookie'][]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Returns whether or not the game or client have crashed */
  GetCrashReportingV1CrashStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  /** Gets the current install directory (used internally.) */
  GetDataStoreV1InstallDir: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  /** Get the data for the specified key from the install settings. */
  GetDataStoreV1InstallSettingsByPath: {
    parameters: {
      path: {
        /** @description The path to the settings key */
        path: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Set the data for the specified key from the install settings. */
  PostDataStoreV1InstallSettingsByPath: {
    parameters: {
      path: {
        /** @description The path to the settings key */
        path: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: unknown | undefined
        }
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Get the setting for the specified key. */
  GetDataStoreV1SystemSettingsByPath: {
    parameters: {
      path: {
        /** @description The path to the settings key */
        path: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetEntitlementsV1Token: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['EntitlementsToken']
        }
      }
    }
  }
  /** Closes the connection. */
  Exit: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /**
   * Returns information on available functions and types
   * @description With no arguments, returns a list of all available functions and types along with a short description. If a function or type is specified, returns detailed information about it.
   */
  Help: {
    parameters: {
      query: {
        /** @description Name of the function or type to describe */
        target?: string
        /**
         * @description Format for returned information
         * @enum {string}
         */
        format?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Gets all buffered log entries since the last call. */
  LoggingGetEntries: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LogEvent'][]
        }
      }
    }
  }
  /** Returns all metrics */
  LoggingMetrics: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Returns metadata for all metrics */
  LoggingMetricsMetadata: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Initializes the logging system. */
  LoggingStart: {
    parameters: {
      query: {
        /** @description Specifies whether logs will be buffered for LoggingGetEntries to work */
        buffered?: string
        /**
         * @description Minimum severity level to fire a log event
         * @enum {string}
         */
        severity?: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Finalizes the logging system. */
  LoggingStop: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolAccountVerificationV1Authenticate: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolAccountVerificationAuthenticateRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAccountVerificationAuthenticateResponse']
        }
      }
    }
  }
  GetLolAccountVerificationV1Device: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAccountVerificationDeviceResponse']
        }
      }
    }
  }
  PostLolAccountVerificationV1Invalidate: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAccountVerificationInvalidateResponse']
        }
      }
    }
  }
  GetLolAccountVerificationV1IsVerified: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAccountVerificationIsVerifiedResponse']
        }
      }
    }
  }
  PostLolAccountVerificationV1SendToken: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolAccountVerificationSendTokenRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAccountVerificationSendTokenResponse']
        }
      }
    }
  }
  PostLolAccountVerificationV1Verify: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolAccountVerificationVerifyRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAccountVerificationVerifyResponse']
        }
      }
    }
  }
  GetLolActiveBoostsV1ActiveBoosts: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolActiveBoostsActiveBoosts']
        }
      }
    }
  }
  GetLolAntiAddictionV1AntiAddictionToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolAntiAddictionAntiAddictionToken']
        }
      }
    }
  }
  GetLolBannersV1CurrentSummonerFlags: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolBannersBannerFlag'][]
        }
      }
    }
  }
  GetLolBannersV1CurrentSummonerFlagsEquipped: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolBannersBannerFlag']
        }
      }
    }
  }
  PutLolBannersV1CurrentSummonerFlagsEquipped: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolBannersBannerFlag']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolBannersBannerFlag']
        }
      }
    }
  }
  GetLolBannersV1CurrentSummonerFramesEquipped: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolBannersBannerFrame']
        }
      }
    }
  }
  GetLolBannersV1PlayersByPuuidFlagsEquipped: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolBannersBannerFlag']
        }
      }
    }
  }
  GetLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue: {
    parameters: {
      path: {
        /** Format: int32 */
        championId: string
        /** @enum {string} */
        position: string
        /** @enum {string} */
        tier: string
        /** @enum {string} */
        queue: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsChampionQueueStatsResponse']
        }
      }
    }
  }
  GetLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue: {
    parameters: {
      path: {
        /** Format: int32 */
        season: string
        /** Format: int32 */
        championId: string
        /** @enum {string} */
        position: string
        /** @enum {string} */
        tier: string
        /** @enum {string} */
        queue: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsChampionQueueStatsResponse']
        }
      }
    }
  }
  GetLolCareerStatsV1ChampionExpertsByChampionIdByPosition: {
    parameters: {
      path: {
        /** Format: int32 */
        championId: string
        /** @enum {string} */
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsExpertPlayer'][]
        }
      }
    }
  }
  GetLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition: {
    parameters: {
      path: {
        /** Format: int32 */
        season: string
        /** Format: int32 */
        championId: string
        /** @enum {string} */
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsExpertPlayer'][]
        }
      }
    }
  }
  PostLolCareerStatsV1ChampionStatsPercentiles: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolCareerStatsStatsQueryRequest'][]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsStatisticsPercentilesResponse'][]
        }
      }
    }
  }
  GetLolCareerStatsV1PositionAveragesByPositionByTierByQueue: {
    parameters: {
      path: {
        /** @enum {string} */
        position: string
        /** @enum {string} */
        tier: string
        /** @enum {string} */
        queue: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsChampionQueueStatsResponse']
        }
      }
    }
  }
  GetLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue: {
    parameters: {
      path: {
        /** Format: int32 */
        season: string
        /** @enum {string} */
        position: string
        /** @enum {string} */
        tier: string
        /** @enum {string} */
        queue: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsChampionQueueStatsResponse']
        }
      }
    }
  }
  GetLolCareerStatsV1PositionExpertsByPosition: {
    parameters: {
      path: {
        /** @enum {string} */
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsExpertPlayer'][]
        }
      }
    }
  }
  GetLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition: {
    parameters: {
      path: {
        /** Format: int32 */
        season: string
        /** @enum {string} */
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsExpertPlayer'][]
        }
      }
    }
  }
  PostLolCareerStatsV1PositionStatsPercentiles: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolCareerStatsPositionStatsQueryRequest'][]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCareerStatsStatisticsPercentilesResponse'][]
        }
      }
    }
  }
  GetLolCareerStatsV1SummonerGamesByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason: {
    parameters: {
      path: {
        puuid: string
        /** Format: int32 */
        season: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition: {
    parameters: {
      query: {
        /** Format: int32 */
        championId?: string
      }
      path: {
        puuid: string
        /** Format: int32 */
        season: string
        /** @enum {string} */
        queue: string
        /** @enum {string} */
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolCatalogV1ItemDetails: {
    parameters: {
      query: {
        inventoryType: string
        /** Format: int64 */
        itemId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCatalogCatalogPluginItemWithDetails']
        }
      }
    }
  }
  GetLolCatalogV1Items: {
    parameters: {
      query: {
        inventoryType: string
        itemIds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCatalogItemChoiceDetails'][]
        }
      }
    }
  }
  GetLolCatalogV1ItemsByInventoryType: {
    parameters: {
      path: {
        inventoryType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCatalogCatalogPluginItem'][]
        }
      }
    }
  }
  GetLolChallengesV1AvailableQueueIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChallengesV1ChallengesByProductLocalPlayer: {
    parameters: {
      path: {
        product: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUIChallenge'][]
        }
      }
    }
  }
  GetLolChallengesV1LevelPoints: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: number | undefined
          }
        }
      }
    }
  }
  GetLolChallengesV1MyUpdatedChallengesByGameId: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUIChallenge'][]
        }
      }
    }
  }
  PostLolChallengesV1ProcessGameByProductByGameId: {
    parameters: {
      path: {
        product: string
        /** Format: int64 */
        gameId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolChallengesV1SuggestedChallengesByProductLocalPlayer: {
    parameters: {
      path: {
        product: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUIChallenge'][]
        }
      }
    }
  }
  GetLolChallengesV1SummaryPlayerDataByProductLocalPlayer: {
    parameters: {
      path: {
        product: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUIPlayerSummary']
        }
      }
    }
  }
  GetLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid: {
    parameters: {
      path: {
        product: string
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUIPlayerSummary']
        }
      }
    }
  }
  GetLolChallengesV1SummaryPlayersDataByProductPlayers: {
    parameters: {
      query: {
        puuids: string
      }
      path: {
        product: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolChallengesUIPlayerSummary']
              | undefined
          }
        }
      }
    }
  }
  GetLolChallengesV1TitlesLocalPlayer: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUITitle'][]
        }
      }
    }
  }
  PostLolChallengesV1UpdatePlayerPreferencesByProduct: {
    parameters: {
      path: {
        product: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChallengesChallengesPlayerPreferences']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolChallengesV1UpdatedChallengeByGameIdByPuuid: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChallengesUIChallenge']
        }
      }
    }
  }
  GetLolChampSelectLegacyV1BannableChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  PostLolChampSelectLegacyV1BattleTrainingLaunch: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampSelectLegacyV1CurrentChampion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolChampSelectLegacyV1DisabledChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChampSelectLegacyV1ImplementationActive: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolChampSelectLegacyV1PickableChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChampSelectLegacyV1PickableSkinIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChampSelectLegacyV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectSession']
        }
      }
    }
  }
  PatchLolChampSelectLegacyV1SessionActionsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectAction']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectLegacyV1SessionActionsByIdComplete: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolChampSelectLegacyV1SessionMySelection: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectMySelection']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectLegacyV1SessionMySelectionReroll: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampSelectLegacyV1SessionTimer: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectTimer']
        }
      }
    }
  }
  GetLolChampSelectLegacyV1SessionTrades: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectTradeContract'][]
        }
      }
    }
  }
  GetLolChampSelectLegacyV1SessionTradesById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectTradeContract']
        }
      }
    }
  }
  PostLolChampSelectLegacyV1SessionTradesByIdAccept: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectLegacyV1SessionTradesByIdCancel: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectLegacyV1SessionTradesByIdDecline: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectLegacyV1SessionTradesByIdRequest: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectLegacyChampSelectTradeContract']
        }
      }
    }
  }
  GetLolChampSelectLegacyV1TeamBoost: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectLegacyTeamBoost']
        }
      }
    }
  }
  GetLolChampSelectV1AllGridChampions: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampGridChampion'][]
        }
      }
    }
  }
  GetLolChampSelectV1BannableChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  PostLolChampSelectV1BattleTrainingLaunch: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampSelectV1CurrentChampion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolChampSelectV1DisabledChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChampSelectV1GridChampionsByChampionId: {
    parameters: {
      path: {
        /** Format: int32 */
        championId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampGridChampion']
        }
      }
    }
  }
  GetLolChampSelectV1MutedPlayers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectMutedPlayerInfo'][]
        }
      }
    }
  }
  GetLolChampSelectV1OngoingTrade: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectTradeNotification']
        }
      }
    }
  }
  PostLolChampSelectV1OngoingTradeByIdClear: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampSelectV1PickableChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChampSelectV1PickableSkinIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolChampSelectV1PinDropNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectPinDropNotification']
        }
      }
    }
  }
  PostLolChampSelectV1RetrieveLatestGameDto: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampSelectV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectSession']
        }
      }
    }
  }
  PatchLolChampSelectV1SessionActionsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChampSelectChampSelectAction']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionActionsByIdComplete: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionBenchSwapByChampionId: {
    parameters: {
      path: {
        /** Format: int32 */
        championId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolChampSelectV1SessionMySelection: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChampSelectChampSelectMySelection']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionMySelectionReroll: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionSimpleInventory: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampSelectV1SessionTimer: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectTimer']
        }
      }
    }
  }
  GetLolChampSelectV1SessionTrades: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectTradeContract'][]
        }
      }
    }
  }
  GetLolChampSelectV1SessionTradesById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectTradeContract']
        }
      }
    }
  }
  PostLolChampSelectV1SessionTradesByIdAccept: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionTradesByIdCancel: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionTradesByIdDecline: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1SessionTradesByIdRequest: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectTradeContract']
        }
      }
    }
  }
  GetLolChampSelectV1SfxNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectSfxNotification'][]
        }
      }
    }
  }
  GetLolChampSelectV1SkinCarouselSkins: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectSkinSelectorSkin'][]
        }
      }
    }
  }
  GetLolChampSelectV1SkinSelectorInfo: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectSkinSelectorInfo']
        }
      }
    }
  }
  GetLolChampSelectV1SummonersBySlotId: {
    parameters: {
      path: {
        /** Format: int32 */
        slotId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectChampSelectSummoner']
        }
      }
    }
  }
  GetLolChampSelectV1TeamBoost: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampSelectTeamBoost']
        }
      }
    }
  }
  PostLolChampSelectV1TeamBoostPurchase: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1ToggleFavoriteByChampionIdByPosition: {
    parameters: {
      path: {
        /** Format: int64 */
        championId: string
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChampSelectV1TogglePlayerMuted: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChampSelectMutedPlayerInfo']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampions: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampion'][]
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampionsMinimal: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionMinimal'][]
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampionsPlayableCount: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionPlayableCounts']
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionId: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        /** Format: int32 */
        championId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampion']
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        /** Format: int32 */
        championId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionSkin'][]
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        /** Format: int32 */
        championId: string
        /** Format: int32 */
        championSkinId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionSkin']
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsBySkinIdChromas: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        /** Format: int32 */
        championId: string
        /** Format: int32 */
        skinId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionChroma'][]
        }
      }
    }
  }
  GetLolChampionsV1InventoriesBySummonerIdSkinsMinimal: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionSkinMinimal'][]
        }
      }
    }
  }
  GetLolChampionsV1OwnedChampionsMinimal: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChampionsCollectionsChampionMinimal'][]
        }
      }
    }
  }
  GetLolChatV1BlockedPlayers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatBlockedPlayerResource'][]
        }
      }
    }
  }
  PostLolChatV1BlockedPlayers: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatBlockedPlayerResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1BlockedPlayersById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatBlockedPlayerResource']
        }
      }
    }
  }
  DeleteLolChatV1BlockedPlayersById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatChatServiceDynamicClientConfig']
        }
      }
    }
  }
  GetLolChatV1Conversations: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatConversationResource'][]
        }
      }
    }
  }
  PostLolChatV1Conversations: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatConversationResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatConversationResource']
        }
      }
    }
  }
  GetLolChatV1ConversationsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatConversationResource']
        }
      }
    }
  }
  PutLolChatV1ConversationsById: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatConversationResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatConversationResource']
        }
      }
    }
  }
  DeleteLolChatV1ConversationsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolChatV1ConversationsByIdClosed: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChatV1ConversationsByIdClosed: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1ConversationsByIdMessages: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatConversationMessageResource'][]
        }
      }
    }
  }
  PostLolChatV1ConversationsByIdMessages: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatConversationMessageResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatConversationMessageResource']
        }
      }
    }
  }
  DeleteLolChatV1ConversationsByIdMessages: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1ConversationsByIdParticipants: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatUserResource'][]
        }
      }
    }
  }
  PostLolChatV1ConversationsByIdParticipants: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatUserResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1ConversationsByIdParticipantsByPid: {
    parameters: {
      path: {
        id: string
        pid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatUserResource']
        }
      }
    }
  }
  GetLolChatV1ConversationsActive: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatActiveConversationResource']
        }
      }
    }
  }
  PutLolChatV1ConversationsActive: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatActiveConversationResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolChatV1ConversationsActive: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1ConversationsNotify: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolChatV1Errors: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatErrorResource'][]
        }
      }
    }
  }
  DeleteLolChatV1ErrorsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1FriendCounts: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatFriendCountsResource']
        }
      }
    }
  }
  GetLolChatV1FriendExistsBySummonerId: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolChatV1FriendGroups: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatGroupResource'][]
        }
      }
    }
  }
  PostLolChatV1FriendGroups: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatGroupResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1FriendGroupsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatGroupResource']
        }
      }
    }
  }
  PutLolChatV1FriendGroupsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatGroupResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolChatV1FriendGroupsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1FriendGroupsByIdFriends: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatFriendResource'][]
        }
      }
    }
  }
  PutLolChatV1FriendGroupsOrder: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatFriendGroupOrder']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1FriendRequests: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatFriendRequestResource'][]
        }
      }
    }
  }
  PostLolChatV1FriendRequests: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatFriendRequestResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolChatV1FriendRequestsById: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatFriendRequestResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolChatV1FriendRequestsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1Friends: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatFriendResource'][]
        }
      }
    }
  }
  GetLolChatV1FriendsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatFriendResource']
        }
      }
    }
  }
  PutLolChatV1FriendsById: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatFriendResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolChatV1FriendsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1Me: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatUserResource']
        }
      }
    }
  }
  PutLolChatV1Me: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatUserResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatUserResource']
        }
      }
    }
  }
  GetLolChatV1Resources: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatProductMetadataMap']
        }
      }
    }
  }
  GetLolChatV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatSessionResource']
        }
      }
    }
  }
  DeleteLolChatV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolChatV1SessionPlain: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatAuthResourcePlain']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatSessionResource']
        }
      }
    }
  }
  PostLolChatV1SessionRso: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolChatAuthResourceRsoAccessToken']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolChatSessionResource']
        }
      }
    }
  }
  GetLolChatV1Settings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolChatV1Settings: {
    parameters: {
      query: {
        doAsync?: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: unknown | undefined
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolChatV1SettingsByKey: {
    parameters: {
      path: {
        key: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolChatV1SettingsByKey: {
    parameters: {
      query: {
        doAsync?: string
      }
      path: {
        key: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: unknown | undefined
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolChatV1SettingsByKey: {
    parameters: {
      query: {
        doAsync?: string
      }
      path: {
        key: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1AllTournaments: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['TournamentDTO'][]
        }
      }
    }
  }
  GetLolClashV1BracketByBracketId: {
    parameters: {
      path: {
        /** Format: int64 */
        bracketId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashBracket']
        }
      }
    }
  }
  GetLolClashV1CheckinAllowed: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolClashV1CurrentTournamentIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolClashV1DisabledConfig: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashClashDisabledConfig']
        }
      }
    }
  }
  GetLolClashV1Enabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolClashV1EogPlayerUpdate: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashEogPlayerUpdateDTO']
        }
      }
    }
  }
  PostLolClashV1EogPlayerUpdateAcknowledge: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1EventByUuid: {
    parameters: {
      path: {
        uuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['ClashEventData']
        }
      }
    }
  }
  PostLolClashV1Events: {
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['ClashEventData']
              | undefined
          }
        }
      }
    }
  }
  GetLolClashV1GameEnd: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournamentGameEnd']
        }
      }
    }
  }
  PostLolClashV1GameEndAcknowledge: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1Historyandwinners: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournamentHistoryAndWinners']
        }
      }
    }
  }
  GetLolClashV1Iconconfig: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1InvitedRosterIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  PostLolClashV1LftPlayer: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashLftState']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1LftPlayerFind: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashFindPlayers']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerFinderDTO'][]
        }
      }
    }
  }
  PostLolClashV1LftTeam: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashTeamOpenState']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1LftTeamByRosterIdRequest: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1LftTeamFetchRequests: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1LftTeamFind: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashFindTeams']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['OpenedTeamDTO'][]
        }
      }
    }
  }
  GetLolClashV1LftTeamRequests: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PendingOpenedTeamDTO'][]
        }
      }
    }
  }
  GetLolClashV1Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashPlayerNotificationData']
        }
      }
    }
  }
  PostLolClashV1NotificationsAcknowledge: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1Ping: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1Player: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashPlayerData']
        }
      }
    }
  }
  GetLolClashV1PlayerChatRosters: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashPlayerChatRoster'][]
        }
      }
    }
  }
  GetLolClashV1PlayerHistory: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashRosterStats'][]
        }
      }
    }
  }
  GetLolClashV1PlaymodeRestricted: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolClashV1Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolClashV1Refresh: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1Rewards: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashPlayerRewards']
        }
      }
    }
  }
  GetLolClashV1RosterByRosterId: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashRoster']
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdAccept: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdCancelWithdraw: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdChangeAllDetails: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashRosterDetails']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdChangeIcon: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashChangeIconRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdChangeName: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashChangeNameRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdChangeShortName: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashChangeNameRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdDecline: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdDisband: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdInvite: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashClientFailedInvite'][]
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdKick: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashKickRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdLeave: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdLockin: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSetPosition: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashSetPositionRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSetTicket: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashSetTicketRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1RosterByRosterIdStats: {
    parameters: {
      path: {
        /** Format: int64 */
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashRosterStats']
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSubstituteBySummonerIdRevoke: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSubstituteAccept: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSubstituteDecline: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSubstituteInvite: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashInviteSubRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashClientFailedInvite'][]
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSubstituteReclaim: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSuggest: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSuggestBySummonerIdAccept: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSuggestBySummonerIdDecline: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdSuggestBySummonerIdRevoke: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdAccept: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdDecline: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdOffer: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashOfferTicketRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdRevoke: {
    parameters: {
      path: {
        rosterId: string
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdTransferCaptain: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdUnlockin: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdUnwithdraw: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdUpdateLogos: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1RosterByRosterIdWithdraw: {
    parameters: {
      path: {
        rosterId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1ScoutingChampions: {
    parameters: {
      query: {
        summonerIds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashScoutingChampions'][]
        }
      }
    }
  }
  GetLolClashV1ScoutingMatchhistory: {
    parameters: {
      query: {
        summonerIds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1SeasonRewardsBySeasonId: {
    parameters: {
      path: {
        /** Format: int32 */
        seasonId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['ClashSeasonRewardResult']
        }
      }
    }
  }
  GetLolClashV1SimpleStateFlags: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashSimpleStateFlag'][]
        }
      }
    }
  }
  PostLolClashV1SimpleStateFlagsByIdAcknowledge: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1ThirdpartyTeamData: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashThirdPartyApiRoster']
        }
      }
    }
  }
  GetLolClashV1Time: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolClashV1TournamentStateInfo: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournamentStateInfo'][]
        }
      }
    }
  }
  GetLolClashV1TournamentSummary: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournamentSummary'][]
        }
      }
    }
  }
  GetLolClashV1TournamentByTournamentId: {
    parameters: {
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournament']
        }
      }
    }
  }
  PostLolClashV1TournamentByTournamentIdCreateRoster: {
    parameters: {
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolClashRosterDetails']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1TournamentByTournamentIdGetPlayerTiers: {
    parameters: {
      query: {
        summonerIds: string
      }
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerTierDTO'][]
        }
      }
    }
  }
  GetLolClashV1TournamentByTournamentIdPlayer: {
    parameters: {
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashPlayerTournamentData']
        }
      }
    }
  }
  GetLolClashV1TournamentByTournamentIdPlayerHonorRestricted: {
    parameters: {
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolClashV1TournamentByTournamentIdStateInfo: {
    parameters: {
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournamentStateInfo']
        }
      }
    }
  }
  GetLolClashV1TournamentByTournamentIdWinners: {
    parameters: {
      path: {
        /** Format: int64 */
        tournamentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashTournamentWinnerHistory']
        }
      }
    }
  }
  GetLolClashV1TournamentCancelled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolClashV1TournamentGetAllPlayerTiers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerTierDTO'][]
        }
      }
    }
  }
  PostLolClashV1UpdateLogos: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1Visible: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolClashV1Voice: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolClashV1Voice: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolClashV1VoiceDelayByDelaySeconds: {
    parameters: {
      path: {
        /** Format: double */
        delaySeconds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolClashV1VoiceDelayByDelaySeconds: {
    parameters: {
      path: {
        /** Format: double */
        delaySeconds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolClashV1VoiceEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolClashV2PlaymodeRestricted: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolClashPlaymodeRestrictedInfo']
        }
      }
    }
  }
  GetLolClientConfigV3ClientConfigByName: {
    parameters: {
      path: {
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesBySummonerIdBackdrop: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsSummonerBackdrop']
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesBySummonerIdChampionMastery: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsChampionMastery'][]
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesBySummonerIdChampionMasteryTop: {
    parameters: {
      query: {
        /** Format: int64 */
        limit: string
        sortRule?: string
      }
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsTopChampionMasteries']
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesBySummonerIdSpells: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsSummonerSpells']
        }
      }
    }
  }
  PutLolCollectionsV1InventoriesBySummonerIdVerification: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesBySummonerIdWardSkins: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsWardSkin'][]
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesBySummonerIdWardSkinsByWardSkinId: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        /** Format: int64 */
        wardSkinId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsWardSkin']
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesChestEligibility: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCollectionsCollectionsChestEligibility']
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesLocalPlayerChampionMasteryScore: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolCollectionsV1InventoriesScouting: {
    requestBody?: {
      content: {
        'application/json': number[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RankedScoutingDTO'][]
        }
      }
    }
  }
  GetLolContentTargetingV1Filters: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolContentTargetingContentTargetingFilterResponse']
        }
      }
    }
  }
  GetLolContentTargetingV1Locale: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolContentTargetingContentTargetingLocaleResponse']
        }
      }
    }
  }
  GetLolContentTargetingV1ProtectedFilters: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolContentTargetingContentTargetingFilterResponse']
        }
      }
    }
  }
  PutLolContentTargetingV1TftExperimentBucket: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolCosmeticsV1InventoriesBySetNameCompanions: {
    parameters: {
      path: {
        setName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCosmeticsCompanionsGroupedViewModel']
        }
      }
    }
  }
  GetLolCosmeticsV1InventoriesBySetNameDamageSkins: {
    parameters: {
      path: {
        setName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCosmeticsTFTDamageSkinGroupedViewModel']
        }
      }
    }
  }
  GetLolCosmeticsV1InventoriesBySetNameMapSkins: {
    parameters: {
      path: {
        setName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolCosmeticsTFTMapSkinGroupedViewModel']
        }
      }
    }
  }
  PatchLolCosmeticsV1RecentByType: {
    parameters: {
      path: {
        type: string
      }
    }
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolCosmeticsV1SelectionCompanion: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolCosmeticsV1SelectionCompanion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolCosmeticsV1SelectionTftDamageSkin: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolCosmeticsV1SelectionTftDamageSkin: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolCosmeticsV1SelectionTftMapSkin: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolCosmeticsV1SelectionTftMapSkin: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolEmailVerificationV1ConfirmEmail: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolEmailVerificationV1Email: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEmailVerificationEmailVerificationSession']
        }
      }
    }
  }
  PutLolEmailVerificationV1Email: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolEmailVerificationEmailUpdate']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolEndOfGameV1ChampionMasteryUpdates: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEndOfGameChampionMasteryUpdate']
        }
      }
    }
  }
  GetLolEndOfGameV1EogStatsBlock: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEndOfGameEndOfGameStats']
        }
      }
    }
  }
  GetLolEndOfGameV1GameclientEogStatsBlock: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEndOfGameGameClientEndOfGameStats']
        }
      }
    }
  }
  PostLolEndOfGameV1GameclientEogStatsBlock: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolEndOfGameGameClientEndOfGameStats']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolEndOfGameV1ReportedPlayers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  PostLolEndOfGameV1StateDismissStats: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolEndOfGameV1TftEogStats: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEndOfGameTFTEndOfGameViewModel']
        }
      }
    }
  }
  PostLolEndOfGameV2PlayerComplaints: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolEndOfGameEndOfGamePlayerComplaintV2']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEndOfGameEndOfGamePlayerComplaintV2']
        }
      }
    }
  }
  GetLolEsportStreamNotificationsV1LiveStreams: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolEsportStreamNotificationsESportsLiveStreams']
        }
      }
    }
  }
  PostLolEsportStreamNotificationsV1SendStats: {
    parameters: {
      path: {
        eventType: string
        matchId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolEsportStreamNotificationsV1StreamUrl: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolGameClientChatV1Buddies: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  GetLolGameClientChatV1IgnoredSummoners: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  PostLolGameClientChatV1InstantMessages: {
    parameters: {
      query: {
        summonerName: string
        message: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameClientChatV1MutedSummoners: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  PostLolGameClientChatV1PartyMessages: {
    parameters: {
      query: {
        message: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameQueuesV1Custom: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueueCustomGame']
        }
      }
    }
  }
  GetLolGameQueuesV1CustomNonDefault: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueueCustomGame']
        }
      }
    }
  }
  GetLolGameQueuesV1GameTypeConfigByGameTypeConfigId: {
    parameters: {
      path: {
        /** Format: int32 */
        gameTypeConfigId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueueGameTypeConfig']
        }
      }
    }
  }
  GetLolGameQueuesV1GameTypeConfigByGameTypeConfigIdMapByMapId: {
    parameters: {
      path: {
        /** Format: int32 */
        gameTypeConfigId: string
        /** Format: int32 */
        mapId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueueGameTypeConfig']
        }
      }
    }
  }
  GetLolGameQueuesV1Queues: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueue'][]
        }
      }
    }
  }
  GetLolGameQueuesV1QueuesById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueue']
        }
      }
    }
  }
  GetLolGameQueuesV1QueuesTypeByQueueType: {
    parameters: {
      path: {
        queueType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameQueuesQueue']
        }
      }
    }
  }
  GetLolGameSettingsV1Didreset: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolGameSettingsV1GameSettings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolGameSettingsV1GameSettings: {
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: unknown | undefined
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameSettingsV1GameSettingsSchema: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameSettingsV1InputSettings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolGameSettingsV1InputSettings: {
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: unknown | undefined
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameSettingsV1InputSettingsSchema: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameSettingsV1Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameSettingsV1ReloadPostGame: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolGameSettingsV1Save: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameflowV1AckFailedToLaunch: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1ActivePatcherLock: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolGameflowV1Availability: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameflowGameflowAvailability']
        }
      }
    }
  }
  GetLolGameflowV1BasicTutorial: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameflowV1BasicTutorialStart: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameflowV1BattleTraining: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameflowV1BattleTrainingStart: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolGameflowV1BattleTrainingStop: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolGameflowV1ClientReceivedMessage: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolGameflowV1EarlyExit: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameflowV1EarlyExitNotificationsEog: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }[]
        }
      }
    }
  }
  DeleteLolGameflowV1EarlyExitNotificationsEog: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolGameflowV1EarlyExitNotificationsEogByKey: {
    parameters: {
      path: {
        /** Format: int32 */
        key: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1EarlyExitNotificationsMissions: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }[]
        }
      }
    }
  }
  DeleteLolGameflowV1EarlyExitNotificationsMissions: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolGameflowV1EarlyExitNotificationsMissionsByKey: {
    parameters: {
      path: {
        /** Format: int32 */
        key: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1ExtraGameClientArgs: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  PostLolGameflowV1ExtraGameClientArgs: {
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1GameflowMetadataPlayerStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameflowPlayerStatus']
        }
      }
    }
  }
  PostLolGameflowV1GameflowMetadataPlayerStatus: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolGameflowPlayerStatus']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1GameflowMetadataRegistrationStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameflowRegistrationStatus']
        }
      }
    }
  }
  PostLolGameflowV1GameflowMetadataRegistrationStatus: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolGameflowRegistrationStatus']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1GameflowPhase: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameflowGameflowPhase']
        }
      }
    }
  }
  PostLolGameflowV1PreEndGameTransition: {
    parameters: {
      query: {
        enabled: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolGameflowV1Reconnect: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGameflowV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameflowGameflowSession']
        }
      }
    }
  }
  PostLolGameflowV1SessionDodge: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolGameflowGameflowGameDodge']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolGameflowV1SessionEvent: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolGameflowV1SessionGameConfiguration: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolGameflowQueue']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowed: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolGameflowGameModeSpellList']
              | undefined
          }
        }
      }
    }
  }
  GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowedAsString: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolGameflowV1SessionPerPositionSummonerSpellsRequired: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolGameflowGameModeSpellList']
              | undefined
          }
        }
      }
    }
  }
  GetLolGameflowV1SessionPerPositionSummonerSpellsRequiredAsString: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  PostLolGameflowV1SessionRequestEnterGameflow: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameflowV1SessionRequestLobby: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameflowV1SessionRequestTournamentCheckin: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolGameflowV1SessionTournamentEnded: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1Spectate: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolGameflowV1SpectateDelayedLaunch: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolGameflowV1SpectateLaunch: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolGameflowV1SpectateQuit: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolGameflowV1Tick: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolGameflowV1Watch: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGameflowGameflowWatchPhase']
        }
      }
    }
  }
  PostLolGameflowV1WatchLaunch: {
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolGameflowV2SpectateLaunch: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolGameflowSpectateGameInfoResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolGeoinfoV1Getlocation: {
    parameters: {
      query: {
        ip_address: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGeoinfoGeoInfo']
        }
      }
    }
  }
  GetLolGeoinfoV1Whereami: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolGeoinfoGeoInfoResponse']
        }
      }
    }
  }
  GetLolHighlightsV1Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHighlightsHighlightsConfig']
        }
      }
    }
  }
  PostLolHighlightsV1FileBrowserByHighlightId: {
    parameters: {
      path: {
        /** Format: int64 */
        highlightId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolHighlightsV1Highlights: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHighlightsHighlight'][]
        }
      }
    }
  }
  PostLolHighlightsV1Highlights: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHighlightsHighlight'][]
        }
      }
    }
  }
  GetLolHighlightsV1HighlightsFolderPath: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolHighlightsV1HighlightsFolderPathDefault: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolHighlightsV1HighlightsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHighlightsHighlight']
        }
      }
    }
  }
  PutLolHighlightsV1HighlightsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolHighlightsHighlight']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHighlightsHighlight']
        }
      }
    }
  }
  DeleteLolHighlightsV1HighlightsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHighlightsHighlight']
        }
      }
    }
  }
  GetLolHonorV2V1Ballot: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2Ballot']
        }
      }
    }
  }
  GetLolHonorV2V1Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2HonorConfig']
        }
      }
    }
  }
  PostLolHonorV2V1HonorPlayer: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolHonorV2ApiHonorPlayerServerRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolHonorV2V1LateRecognition: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2Honor'][]
        }
      }
    }
  }
  PostLolHonorV2V1LateRecognitionAck: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolHonorV2V1LatestEligibleGame: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolHonorV2V1LevelChange: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2VendedHonorChange']
        }
      }
    }
  }
  PostLolHonorV2V1LevelChangeAck: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolHonorV2V1MutualHonor: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2MutualHonor']
        }
      }
    }
  }
  PostLolHonorV2V1MutualHonorAck: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolHonorV2V1Profile: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2ProfileInfo']
        }
      }
    }
  }
  GetLolHonorV2V1Recognition: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2Honor'][]
        }
      }
    }
  }
  GetLolHonorV2V1RewardGranted: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2VendedReward']
        }
      }
    }
  }
  PostLolHonorV2V1RewardGrantedAck: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolHonorV2V1TeamChoices: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolHonorV2V1VoteCompletion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHonorV2VoteCompletion']
        }
      }
    }
  }
  GetLolHovercardV1FriendInfoBySummonerBySummonerId: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHovercardHovercardUserInfo']
        }
      }
    }
  }
  GetLolHovercardV1FriendInfoByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolHovercardHovercardUserInfo']
        }
      }
    }
  }
  GetLolInventoryV1ChampSelectInventory: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolInventoryV1InitialConfigurationComplete: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolInventoryV1Inventory: {
    parameters: {
      query: {
        inventoryTypes: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolInventoryInventoryItemWithPayload'][]
        }
      }
    }
  }
  GetLolInventoryV1InventoryEmotes: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolInventoryInventoryItemWithPayload'][]
        }
      }
    }
  }
  PostLolInventoryV1NotificationAcknowledge: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolInventoryV1NotificationsByInventoryType: {
    parameters: {
      path: {
        inventoryType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolInventoryInventoryNotification'][]
        }
      }
    }
  }
  GetLolInventoryV1PlayersByPuuidInventory: {
    parameters: {
      query: {
        inventoryTypes: string
      }
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolInventoryInventoryItemWithPayload'][]
        }
      }
    }
  }
  GetLolInventoryV1SignedInventory: {
    parameters: {
      query: {
        inventoryTypes: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: string | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV1SignedInventorySimple: {
    parameters: {
      query: {
        inventoryTypes: string
        queryParams?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolInventoryV1SignedInventoryTournamentlogos: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: string | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV1SignedInventoryCache: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolInventoryInventoryCacheEntry']
              | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV1SignedWallet: {
    parameters: {
      query: {
        currencyTypes: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: string | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV1SignedWalletByCurrencyType: {
    parameters: {
      path: {
        currencyType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: string | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV1Wallet: {
    parameters: {
      query: {
        currencyTypes: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: number | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV1WalletByCurrencyType: {
    parameters: {
      path: {
        currencyType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: number | undefined
          }
        }
      }
    }
  }
  GetLolInventoryV2InventoryByInventoryType: {
    parameters: {
      path: {
        inventoryType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolInventoryInventoryItemWithPayload'][]
        }
      }
    }
  }
  GetLolItemSetsV1ItemSetsBySummonerIdSets: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolItemSetsItemSets']
        }
      }
    }
  }
  PutLolItemSetsV1ItemSetsBySummonerIdSets: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolItemSetsItemSets']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolItemSetsV1ItemSetsBySummonerIdSets: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolItemSetsItemSet']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolItemSetsV1ItemSetsBySummonerIdValidate: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolItemSetsValidateItemSetNameInput']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolItemSetsValidateItemSetNameResponse']
        }
      }
    }
  }
  GetLolKickoutV1Notification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKickoutKickoutMessage']
        }
      }
    }
  }
  GetLolKrPlaytimeReminderV1Message: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolKrPlaytimeReminderV1Playtime: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKrPlaytimeReminderPlaytimeReminder']
        }
      }
    }
  }
  GetLolKrShutdownLawV1CustomStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKrShutdownLawQueueShutdownStatus']
        }
      }
    }
  }
  GetLolKrShutdownLawV1DisabledQueues: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolKrShutdownLawV1Notification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKrShutdownLawShutdownLawNotification']
        }
      }
    }
  }
  GetLolKrShutdownLawV1QueueStatusByQueueId: {
    parameters: {
      path: {
        /** Format: int32 */
        queue_id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKrShutdownLawQueueShutdownStatus']
        }
      }
    }
  }
  GetLolKrShutdownLawV1RatingScreen: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKrShutdownLawRatingScreenInfo']
        }
      }
    }
  }
  PostLolKrShutdownLawV1RatingScreenAcknowledge: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolKrShutdownLawV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolKrShutdownLawAllQueueShutdownStatus']
        }
      }
    }
  }
  GetLolLeagueSessionV1LeagueSessionToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLeaverBusterV1Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLeaverBusterLeaverBusterNotificationResource'][]
        }
      }
    }
  }
  GetLolLeaverBusterV1NotificationsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLeaverBusterLeaverBusterNotificationResource']
        }
      }
    }
  }
  DeleteLolLeaverBusterV1NotificationsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLicenseAgreementV1Agreements: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLicenseAgreementLicenseAgreement'][]
        }
      }
    }
  }
  PostLolLicenseAgreementV1AgreementsByIdAccept: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLicenseAgreementV1AgreementsByIdDecline: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLicenseAgreementV1AllAgreements: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLicenseAgreementLicenseAgreement'][]
        }
      }
    }
  }
  GetLolLicenseAgreementV1ServeLocation: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLicenseAgreementLicenseServeLocation']
        }
      }
    }
  }
  GetLolLoadoutsV1LoadoutsReady: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolLoadoutsV4Loadouts: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoadoutsCreateLoadoutDTO']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoadoutsScopedLoadout']
        }
      }
    }
  }
  PutLolLoadoutsV4LoadoutsById: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoadoutsUpdateLoadoutDTO']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoadoutsScopedLoadout']
        }
      }
    }
  }
  DeleteLolLoadoutsV4LoadoutsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PatchLolLoadoutsV4LoadoutsById: {
    parameters: {
      path: {
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoadoutsUpdateLoadoutDTO']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoadoutsScopedLoadout']
        }
      }
    }
  }
  GetLolLoadoutsV4LoadoutsByLoadoutId: {
    parameters: {
      path: {
        loadoutId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoadoutsScopedLoadout']
        }
      }
    }
  }
  GetLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId: {
    parameters: {
      path: {
        scope: string
        /** Format: int32 */
        scopeItemId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoadoutsScopedLoadout'][]
        }
      }
    }
  }
  GetLolLoadoutsV4LoadoutsScopeAccount: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoadoutsScopedLoadout'][]
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1BannableChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1CurrentChampion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1DisabledChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1HasAutoAssignedSmite: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1ImplementationActive: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1MatchToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1PickableChampionIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1PickableSkinIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1Preferences: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampionSelectPreferences']
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1RetrieveLatestGameDto: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1SendingLoadoutsGcosEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectSession']
        }
      }
    }
  }
  PatchLolLobbyTeamBuilderChampSelectV1SessionActionsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectAction']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionActionsByIdComplete: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionBenchSwapByChampionId: {
    parameters: {
      path: {
        /** Format: int32 */
        championId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolLobbyTeamBuilderChampSelectV1SessionMySelection: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectMySelection']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionMySelectionReroll: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1SessionTimer: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTimer']
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1SessionTrades: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTradeContract'][]
        }
      }
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1SessionTradesById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTradeContract']
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdAccept: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdCancel: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdDecline: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdRequest: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTradeContract']
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1SimpleInventory: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyTeamBuilderChampSelectV1TeamBoost: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderTeamBoost']
        }
      }
    }
  }
  PostLolLobbyTeamBuilderChampSelectV1TeamBoostPurchase: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyTeamBuilderV1Matchmaking: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingSearchResource']
        }
      }
    }
  }
  PostLolLobbyTeamBuilderV1ReadyCheckAccept: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyTeamBuilderV1ReadyCheckDecline: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV1AutofillDisplayed: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PutLolLobbyV1AutofillDisplayed: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolLobbyV1Clash: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolLobbyV1Clash: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV1CustomGames: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyCustomGame'][]
        }
      }
    }
  }
  GetLolLobbyV1CustomGamesById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyCustomGame']
        }
      }
    }
  }
  PostLolLobbyV1CustomGamesByIdJoin: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyCustomJoinParameters']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV1CustomGamesRefresh: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV1LobbyAvailability: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyQueueAvailability']
        }
      }
    }
  }
  GetLolLobbyV1LobbyCountdown: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  PostLolLobbyV1LobbyCustomBots: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyBotParams']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV1LobbyCustomBotsBySummonerInternalName: {
    parameters: {
      path: {
        summonerInternalName: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyBotParams']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolLobbyV1LobbyCustomBotsBySummonerInternalName: {
    parameters: {
      path: {
        summonerInternalName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV1LobbyCustomCancelChampSelect: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV1LobbyCustomStartChampSelect: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyCustomChampSelectStartResponse']
        }
      }
    }
  }
  PostLolLobbyV1LobbyCustomSwitchTeams: {
    parameters: {
      query: {
        team?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV1LobbyInvitations: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitation'][]
        }
      }
    }
  }
  PostLolLobbyV1LobbyInvitations: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitation']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitation']
        }
      }
    }
  }
  GetLolLobbyV1LobbyInvitationsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitation']
        }
      }
    }
  }
  PutLolLobbyV1LobbyMembersLocalMemberPositionPreferences: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyPositionPreferences']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolLobbyV1PartiesByPartyIdMembersByPuuidRole: {
    parameters: {
      path: {
        partyId: string
        puuid: string
      }
    }
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolLobbyV1PartiesActive: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyV1PartiesGamemode: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyGameModeDto']
        }
      }
    }
  }
  PutLolLobbyV1PartiesMetadata: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyPartyMemberMetadataDto']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyV1PartiesPlayer: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyPlayerDto']
        }
      }
    }
  }
  PutLolLobbyV1PartiesQueue: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolLobbyV1PartiesReady: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyV1PartyRewards: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyPartyRewards']
        }
      }
    }
  }
  PostLolLobbyV1TournamentsByIdJoin: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV2CommsMembers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyPremadePartyDto']
        }
      }
    }
  }
  GetLolLobbyV2CommsToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLobbyV2EligibilityGameSelectEligibilityHash: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolLobbyV2EligibilityInitialConfigurationComplete: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolLobbyV2EligibilityParty: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyEligibility'][]
        }
      }
    }
  }
  PostLolLobbyV2EligibilitySelf: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyEligibility'][]
        }
      }
    }
  }
  PostLolLobbyV2EogInvitations: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitationDto'][]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitationDto'][]
        }
      }
    }
  }
  GetLolLobbyV2Lobby: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyDto']
        }
      }
    }
  }
  PostLolLobbyV2Lobby: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyChangeGameDto']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyDto']
        }
      }
    }
  }
  DeleteLolLobbyV2Lobby: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyV2LobbyCustomAvailableBots: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyBotChampion'][]
        }
      }
    }
  }
  GetLolLobbyV2LobbyCustomBotsEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolLobbyV2LobbyInvitations: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitationDto'][]
        }
      }
    }
  }
  PostLolLobbyV2LobbyInvitations: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitationDto'][]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyInvitationDto'][]
        }
      }
    }
  }
  PostLolLobbyV2LobbyMatchmakingSearch: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolLobbyV2LobbyMatchmakingSearch: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV2LobbyMatchmakingSearchState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyMatchmakingSearchResource']
        }
      }
    }
  }
  GetLolLobbyV2LobbyMembers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyParticipantDto'][]
        }
      }
    }
  }
  PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  PostLolLobbyV2LobbyMembersBySummonerIdKick: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  PostLolLobbyV2LobbyMembersBySummonerIdPromote: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  PostLolLobbyV2LobbyMembersBySummonerIdRevokeInvite: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  PutLolLobbyV2LobbyMembersLocalMemberPositionPreferences: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyPositionPreferences']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolLobbyV2LobbyPartyType: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV2LobbyTeamByTeam: {
    parameters: {
      path: {
        team: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolLobbyV2MatchmakingQuickSearch: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyChangeGameDto']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV2Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyLobbyNotification'][]
        }
      }
    }
  }
  PostLolLobbyV2Notifications: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyLobbyNotification']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolLobbyV2NotificationsByNotificationId: {
    parameters: {
      path: {
        notificationId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV2PartiesOverridesEnabledForTeamBuilderQueues: {
    parameters: {
      query: {
        enabledForTeambuilderQueues: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyV2PartyActive: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolLobbyV2PartyByPartyIdJoin: {
    parameters: {
      path: {
        partyId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLobbyCustomJoinOptionsDto']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV2PartyEogStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyPartyStatusDto']
        }
      }
    }
  }
  PostLolLobbyV2PlayAgain: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLobbyV2PlayAgainDecline: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLobbyV2ReceivedInvitations: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLobbyReceivedInvitationDto'][]
        }
      }
    }
  }
  PostLolLobbyV2ReceivedInvitationsByInvitationIdAccept: {
    parameters: {
      path: {
        invitationId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolLobbyV2ReceivedInvitationsByInvitationIdDecline: {
    parameters: {
      path: {
        invitationId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLobbyV2RegistrationStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLoginV1AccountState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginAccountStateResource']
        }
      }
    }
  }
  PostLolLoginV1AccountState: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolLoginV1ChangeSummonerName: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLoginV1DeleteRsoOnClose: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLoginV1LeagueSessionStatus: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoginLeagueSessionStatus']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLoginV1LoginConnectionState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLoginConnectionState']
        }
      }
    }
  }
  GetLolLoginV1LoginDataPacket: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLoginV1LoginInGameCreds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLoginV1LoginPlatformCredentials: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginPlatformGeneratedCredentials']
        }
      }
    }
  }
  GetLolLoginV1LoginQueueState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLoginQueue']
        }
      }
    }
  }
  PostLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName: {
    parameters: {
      query: {
        /** Format: int32 */
        pluginId: string
      }
      path: {
        serviceName: string
        methodName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName: {
    parameters: {
      query: {
        /** Format: int32 */
        pluginId: string
      }
      path: {
        serviceName: string
        methodName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolLoginV1ServiceProxyUuidRequests: {
    parameters: {
      query: {
        serviceName: string
        methodName: string
        /** Format: int32 */
        pluginId: string
        /** Format: int64 */
        timeoutMillis: string
        payload: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLoginV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLoginSession']
        }
      }
    }
  }
  PostLolLoginV1Session: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoginUsernameAndPassword']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLoginSession']
        }
      }
    }
  }
  DeleteLolLoginV1Session: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolLoginV1SessionInvoke: {
    parameters: {
      query: {
        destination: string
        method: string
      }
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': unknown
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLcdsResponse']
        }
      }
    }
  }
  PutLolLoginV1ShutdownLocksByLockName: {
    parameters: {
      path: {
        lockName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolLoginV1ShutdownLocksByLockName: {
    parameters: {
      path: {
        lockName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolLoginV1SummonerSession: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoginSummonerSessionResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLoginV1SummonerSessionFailed: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLoginV1Wallet: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLoginSessionWallet']
        }
      }
    }
  }
  GetLolLoginV2LeagueSessionInitToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoginLeagueSessionTokenEnvelope']
        }
      }
    }
  }
  GetLolLootV1CurrencyConfiguration: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLootV1Enabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolLootV1LootGrants: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootGrantNotification'][]
        }
      }
    }
  }
  DeleteLolLootV1LootGrantsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolLootV1LootItems: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootItem'][]
        }
      }
    }
  }
  GetLolLootV1LootOddsByRecipeName: {
    parameters: {
      path: {
        recipeName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootVerboseLootOddsResponse']
        }
      }
    }
  }
  GetLolLootV1Milestones: {
    parameters: {
      query: {
        minimizeResponse: string
        includeInactive?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootMilestones'][]
        }
      }
    }
  }
  GetLolLootV1MilestonesByLootMilestonesId: {
    parameters: {
      query: {
        includeInactive?: string
      }
      path: {
        lootMilestonesId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootMilestones']
        }
      }
    }
  }
  PostLolLootV1MilestonesByLootMilestonesIdClaim: {
    parameters: {
      path: {
        lootMilestonesId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLootV1MilestonesByLootMilestonesIdClaimProgress: {
    parameters: {
      path: {
        lootMilestonesId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootMilestonesClaimResponse']
        }
      }
    }
  }
  GetLolLootV1MilestonesByLootMilestonesIdCounter: {
    parameters: {
      path: {
        lootMilestonesId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootMilestonesCounter']
        }
      }
    }
  }
  GetLolLootV1MilestonesCounters: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootLootMilestonesCounter'][]
        }
      }
    }
  }
  GetLolLootV1MilestonesItems: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  GetLolLootV1NewPlayerCheckDone: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolLootV1NewPlayerCheckDoneByNewValue: {
    parameters: {
      path: {
        newValue: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLootV1PlayerDisplayCategories: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  GetLolLootV1PlayerLoot: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootPlayerLoot'][]
        }
      }
    }
  }
  GetLolLootV1PlayerLootMap: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolLootPlayerLoot']
              | undefined
          }
        }
      }
    }
  }
  GetLolLootV1PlayerLootNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootPlayerLootNotification'][]
        }
      }
    }
  }
  PostLolLootV1PlayerLootNotificationsByIdAcknowledge: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLootV1PlayerLootByLootId: {
    parameters: {
      path: {
        lootId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootPlayerLoot']
        }
      }
    }
  }
  GetLolLootV1PlayerLootByLootIdContextMenu: {
    parameters: {
      path: {
        lootId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootContextMenu'][]
        }
      }
    }
  }
  PostLolLootV1PlayerLootByLootIdContextMenu: {
    parameters: {
      path: {
        lootId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootContextMenu'][]
        }
      }
    }
  }
  DeleteLolLootV1PlayerLootByLootIdNewNotification: {
    parameters: {
      path: {
        lootId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolLootV1PlayerLootByLootNameRedeem: {
    parameters: {
      path: {
        lootName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootPlayerLootUpdate']
        }
      }
    }
  }
  GetLolLootV1Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolLootV1RecipesByRecipeNameCraft: {
    parameters: {
      query: {
        /** Format: int32 */
        repeat?: string
      }
      path: {
        recipeName: string
      }
    }
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootPlayerLootUpdate']
        }
      }
    }
  }
  GetLolLootV1RecipesConfiguration: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolLootV1RecipesInitialItemByLootId: {
    parameters: {
      query: {
        includeInactive?: string
      }
      path: {
        lootId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootRecipeWithMilestones'][]
        }
      }
    }
  }
  PostLolLootV1RecipesInitialItemByLootId: {
    parameters: {
      query: {
        includeInactive?: string
      }
      path: {
        lootId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootRecipeWithMilestones'][]
        }
      }
    }
  }
  PostLolLootV1Refresh: {
    parameters: {
      query: {
        force: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolLootV2PlayerLootMap: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLootPlayerLootMap']
        }
      }
    }
  }
  GetLolLoyaltyV1InventoryRequestNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoyaltyLoyaltyStatusNotification']
        }
      }
    }
  }
  GetLolLoyaltyV1StatusNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolLoyaltyLoyaltyStatusNotification']
        }
      }
    }
  }
  PostLolLoyaltyV1UpdateTftInventory: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolLoyaltyLoyaltyRewards']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolMapsV1Map: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolMapsMaps']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolMapsV1MapById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMapsMaps']
        }
      }
    }
  }
  GetLolMapsV1Maps: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMapsMaps'][]
        }
      }
    }
  }
  GetLolMapsV2MapByIdByGameMode: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
        gameMode: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMapsMaps']
        }
      }
    }
  }
  GetLolMapsV2MapByIdByGameModeByGameMutator: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
        gameMode: string
        gameMutator: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMapsMaps']
        }
      }
    }
  }
  GetLolMapsV2Maps: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMapsMaps'][]
        }
      }
    }
  }
  PostLolMatchHistoryV1AcsEndpointOverride: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolMatchHistoryAcsEndPoint']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolMatchHistoryV1Delta: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryMatchHistoryPlayerDelta']
        }
      }
    }
  }
  GetLolMatchHistoryV1GameTimelinesByGameId: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryMatchHistoryTimelineFrames']
        }
      }
    }
  }
  GetLolMatchHistoryV1GamesByGameId: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryMatchHistoryGame']
        }
      }
    }
  }
  GetLolMatchHistoryV1ProductsLolByPuuidMatches: {
    parameters: {
      query: {
        /** Format: int32 */
        begIndex?: string
        /** Format: int32 */
        endIndex?: string
      }
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryMatchHistoryList']
        }
      }
    }
  }
  GetLolMatchHistoryV1ProductsLolCurrentSummonerMatches: {
    parameters: {
      query: {
        /** Format: int32 */
        begIndex?: string
        /** Format: int32 */
        endIndex?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryMatchHistoryList']
        }
      }
    }
  }
  GetLolMatchHistoryV1ProductsTftByPuuidMatches: {
    parameters: {
      query: {
        /** Format: int32 */
        begin?: string
        /** Format: int32 */
        count?: string
        tag?: string
      }
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryGAMHSMatchHistoryList']
        }
      }
    }
  }
  GetLolMatchHistoryV1RecentlyPlayedSummoners: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryRecentlyPlayedSummoner'][]
        }
      }
    }
  }
  GetLolMatchHistoryV1WebUrl: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolMatchHistoryV3MatchlistAccountByAccountId: {
    parameters: {
      query: {
        /** Format: int32 */
        begIndex?: string
        /** Format: int32 */
        endIndex?: string
      }
      path: {
        /** Format: int64 */
        accountId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchHistoryMatchHistoryList']
        }
      }
    }
  }
  GetLolMatchmakingV1ReadyCheck: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchmakingMatchmakingReadyCheckResource']
        }
      }
    }
  }
  PostLolMatchmakingV1ReadyCheckAccept: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolMatchmakingV1ReadyCheckDecline: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolMatchmakingV1Search: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchmakingMatchmakingSearchResource']
        }
      }
    }
  }
  PutLolMatchmakingV1Search: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolMatchmakingMatchmakingSearchResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolMatchmakingV1Search: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolMatchmakingV1Search: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolMatchmakingV1SearchErrors: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchmakingMatchmakingSearchErrorResource'][]
        }
      }
    }
  }
  GetLolMatchmakingV1SearchErrorsById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMatchmakingMatchmakingSearchErrorResource']
        }
      }
    }
  }
  GetLolMissionsV1Data: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerMissionEligibilityData']
        }
      }
    }
  }
  PostLolMissionsV1Force: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolMissionsV1Missions: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerMissionDTO'][]
        }
      }
    }
  }
  PutLolMissionsV1Player: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['IdsDTO']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolMissionsV1PlayerByMissionId: {
    parameters: {
      path: {
        missionId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolMissionsRewardGroupsSelection']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolMissionsV1Series: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['SeriesDTO'][]
        }
      }
    }
  }
  PutLolMissionsV2PlayerOpt: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolMissionsSeriesOpt']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolNpeRewardsV1ChallengesOpt: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolNpeRewardsV1ChallengesProgress: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeRewardsChallengesProgress']
        }
      }
    }
  }
  GetLolNpeRewardsV1LevelRewards: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeRewardsRewardSeries']
        }
      }
    }
  }
  GetLolNpeRewardsV1LevelRewardsState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeRewardsRewardSeriesState']
        }
      }
    }
  }
  GetLolNpeRewardsV1LoginRewards: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeRewardsRewardSeries']
        }
      }
    }
  }
  GetLolNpeRewardsV1LoginRewardsState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeRewardsRewardSeriesState']
        }
      }
    }
  }
  GetLolNpeTutorialPathV1RewardsChamp: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeTutorialPathCollectionsChampion']
        }
      }
    }
  }
  GetLolNpeTutorialPathV1Settings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeTutorialPathAccountSettingsTutorial']
        }
      }
    }
  }
  PutLolNpeTutorialPathV1Settings: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolNpeTutorialPathAccountSettingsTutorial']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolNpeTutorialPathV1Tutorials: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolNpeTutorialPathTutorial'][]
        }
      }
    }
  }
  PutLolNpeTutorialPathV1TutorialsByTutorialIdView: {
    parameters: {
      path: {
        tutorialId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PatchLolNpeTutorialPathV1TutorialsInit: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPatchV1CheckingEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolPatchV1Environment: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPatchChunkingPatcherEnvironment']
        }
      }
    }
  }
  PutLolPatchV1GamePatchUrl: {
    parameters: {
      query: {
        url: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPatchV1GameVersion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolPatchV1Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPatchNotification'][]
        }
      }
    }
  }
  DeleteLolPatchV1NotificationsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPatchV1ProductsLeagueOfLegendsDetectCorruptionRequest: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPatchV1ProductsLeagueOfLegendsInstallLocation: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPatchInstallPaths']
        }
      }
    }
  }
  PostLolPatchV1ProductsLeagueOfLegendsPartialRepairRequest: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPatchV1ProductsLeagueOfLegendsStartCheckingRequest: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPatchV1ProductsLeagueOfLegendsStartPatchingRequest: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPatchV1ProductsLeagueOfLegendsState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPatchProductState']
        }
      }
    }
  }
  PostLolPatchV1ProductsLeagueOfLegendsStopCheckingRequest: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPatchV1ProductsLeagueOfLegendsStopPatchingRequest: {
    parameters: {
      query: {
        restart: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPatchV1ProductsLeagueOfLegendsSupportedGameReleases: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPatchSupportedGameReleases']
        }
      }
    }
  }
  PutLolPatchV1SelfUpdateRestart: {
    parameters: {
      query: {
        forceRestartOnSelfUpdate: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPatchV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPatchStatus']
        }
      }
    }
  }
  PutLolPatchV1Ux: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPatchUxResource']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPerksV1Currentpage: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPerkPageResource']
        }
      }
    }
  }
  PutLolPerksV1Currentpage: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPerksV1Customizationlimits: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksCustomizationLimits']
        }
      }
    }
  }
  GetLolPerksV1Inventory: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPlayerInventory']
        }
      }
    }
  }
  GetLolPerksV1Pages: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPerkPageResource'][]
        }
      }
    }
  }
  PostLolPerksV1Pages: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPerksPerkPageResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPerkPageResource']
        }
      }
    }
  }
  DeleteLolPerksV1Pages: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPerksV1PagesById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPerkPageResource']
        }
      }
    }
  }
  PutLolPerksV1PagesById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPerksPerkPageResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolPerksV1PagesById: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolPerksV1PagesByIdAutoModifiedSelections: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolPerksV1PagesValidate: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPerksValidatePageNameData']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksValidatePageNameResponse']
        }
      }
    }
  }
  GetLolPerksV1Perks: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPerkUIPerk'][]
        }
      }
    }
  }
  PutLolPerksV1PerksAckGameplayUpdated: {
    requestBody?: {
      content: {
        'application/json': number[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPerksV1PerksDisabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolPerksV1PerksGameplayUpdated: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolPerksV1SchemaVersion: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolPerksV1Servicesettings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksServiceSettings']
        }
      }
    }
  }
  GetLolPerksV1Settings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksUISettings']
        }
      }
    }
  }
  PutLolPerksV1Settings: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPerksUISettings']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPerksV1ShowAutoModifiedPagesNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolPerksV1ShowAutoModifiedPagesNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPerksV1Styles: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPerksPerkUIStyle'][]
        }
      }
    }
  }
  PostLolPerksV1UpdatePageOrder: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPerksUpdatePageOrderRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPersonalizedOffersV1Offers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPersonalizedOffersUIOffer'][]
        }
      }
    }
  }
  PostLolPersonalizedOffersV1OffersByIdPurchase: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPersonalizedOffersPurchaseResponse']
        }
      }
    }
  }
  PostLolPersonalizedOffersV1OffersByIdReveal: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPersonalizedOffersUIOffer'][]
        }
      }
    }
  }
  GetLolPersonalizedOffersV1Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolPersonalizedOffersV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPersonalizedOffersUIStatus']
        }
      }
    }
  }
  GetLolPersonalizedOffersV1Themed: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolPftV2Events: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPftPFTEvent']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPftV2Survey: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPftPFTSurvey']
        }
      }
    }
  }
  PostLolPftV2Survey: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPftPFTSurvey']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPlatformConfigV1InitialConfigurationComplete: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolPlatformConfigV1Namespaces: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlatformConfigV1NamespacesByNs: {
    parameters: {
      path: {
        ns: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlatformConfigV1NamespacesByNsByKey: {
    parameters: {
      path: {
        ns: string
        key: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlayerBehaviorV1Ban: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorBanNotification']
        }
      }
    }
  }
  GetLolPlayerBehaviorV1ChatRestriction: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorRestrictionNotification']
        }
      }
    }
  }
  GetLolPlayerBehaviorV1CodeOfConductNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorCodeOfConductNotification']
        }
      }
    }
  }
  DeleteLolPlayerBehaviorV1CodeOfConductNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlayerBehaviorV1Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorPlayerBehaviorConfig']
        }
      }
    }
  }
  GetLolPlayerBehaviorV1RankedRestriction: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorRestrictionNotification']
        }
      }
    }
  }
  GetLolPlayerBehaviorV1ReformCard: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorReformCard']
        }
      }
    }
  }
  GetLolPlayerBehaviorV1ReporterFeedback: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorReporterFeedback'][]
        }
      }
    }
  }
  GetLolPlayerBehaviorV1ReporterFeedbackById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorReporterFeedback']
        }
      }
    }
  }
  DeleteLolPlayerBehaviorV1ReporterFeedbackById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorReporterFeedback']
        }
      }
    }
  }
  GetLolPlayerBehaviorV2ReformCard: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerBehaviorReformCardV2']
        }
      }
    }
  }
  GetLolPlayerLevelUpV1LevelUp: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerLevelUpPlayerLevelUpEvent']
        }
      }
    }
  }
  GetLolPlayerLevelUpV1LevelUpNotificationsByPluginName: {
    parameters: {
      path: {
        pluginName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerLevelUpPlayerLevelUpEventAck']
        }
      }
    }
  }
  PostLolPlayerLevelUpV1LevelUpNotificationsByPluginName: {
    parameters: {
      path: {
        pluginName: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPlayerLevelUpPlayerLevelUpEventAck']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPlayerMessagingV1CelebrationNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerMessagingDynamicCelebrationMessagingNotificationResource']
        }
      }
    }
  }
  DeleteLolPlayerMessagingV1CelebrationNotificationByIdAcknowledge: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlayerMessagingV1Notification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPlayerMessagingPlayerMessagingNotificationResource']
        }
      }
    }
  }
  DeleteLolPlayerMessagingV1NotificationByIdAcknowledge: {
    parameters: {
      path: {
        /** Format: int32 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolPlayerPreferencesV1Hash: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  PostLolPlayerPreferencesV1PlayerPreferencesEndpointOverride: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPlayerPreferencesPlayerPreferencesEndpoint']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlayerPreferencesV1PlayerPreferencesReady: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PutLolPlayerPreferencesV1Preference: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPlayerPreferencesPlayerPreferences']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPlayerPreferencesV1PreferenceByType: {
    parameters: {
      query: {
        hash?: string
      }
      path: {
        type: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolPlayerReportSenderV1ChampSelectReportsPuuidByPuuidCategoryByCategory: {
    parameters: {
      path: {
        puuid: string
        category: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolPlayerReportSenderV1EndOfGameReports: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPlayerReportSenderEndOfGamePlayerReport']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolPreEndOfGameV1CompleteBySequenceEventName: {
    parameters: {
      path: {
        sequenceEventName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPreEndOfGameV1CurrentSequenceEvent: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPreEndOfGameSequenceEvent']
        }
      }
    }
  }
  DeleteLolPreEndOfGameV1RegistrationBySequenceEventName: {
    parameters: {
      path: {
        sequenceEventName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPreEndOfGameV1RegistrationBySequenceEventNameByPriority: {
    parameters: {
      path: {
        sequenceEventName: string
        /** Format: int32 */
        priority: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPremadeVoiceV1Availability: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoiceVoiceAvailability']
        }
      }
    }
  }
  GetLolPremadeVoiceV1Capturedevices: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoiceDeviceResource'][]
        }
      }
    }
  }
  PutLolPremadeVoiceV1Capturedevices: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPremadeVoiceV1FirstExperience: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoiceFirstExperience']
        }
      }
    }
  }
  PostLolPremadeVoiceV1FirstExperienceGame: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPremadeVoiceV1FirstExperienceLcu: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPremadeVoiceV1FirstExperienceReset: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPremadeVoiceV1GameClientUpdatedPTTKey: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPremadeVoiceV1MicTest: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoiceAudioPropertiesResource']
        }
      }
    }
  }
  PostLolPremadeVoiceV1MicTest: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolPremadeVoiceV1MicTest: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPremadeVoiceV1ParticipantRecords: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoicePremadeVoiceParticipantDto'][]
        }
      }
    }
  }
  GetLolPremadeVoiceV1Participants: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoicePremadeVoiceParticipantDto'][]
        }
      }
    }
  }
  PutLolPremadeVoiceV1ParticipantsByPuuidMute: {
    parameters: {
      path: {
        puuid: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolPremadeVoiceV1ParticipantsByPuuidVolume: {
    parameters: {
      path: {
        puuid: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPremadeVoiceV1PushToTalkCheckAvailable: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PutLolPremadeVoiceV1SelfActivationSensitivity: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolPremadeVoiceV1SelfInputMode: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPremadeVoiceInputMode']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolPremadeVoiceV1SelfMicLevel: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutLolPremadeVoiceV1SelfMute: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolPremadeVoiceV1Session: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolPremadeVoiceV1Session: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPremadeVoiceV1Settings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPremadeVoiceSettingsResource']
        }
      }
    }
  }
  PostLolPremadeVoiceV1SettingsReset: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolPublishingContentV1Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolPublishingContentV1TftHubCards: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPurchaseWidgetV1Configuration: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetPurchaseWidgetConfig']
        }
      }
    }
  }
  GetLolPurchaseWidgetV1OrderNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetOrderNotificationResource'][]
        }
      }
    }
  }
  GetLolPurchaseWidgetV1PurchasableItem: {
    parameters: {
      query: {
        inventoryType: string
        /** Format: int64 */
        itemId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetPurchasableItem']
        }
      }
    }
  }
  PostLolPurchaseWidgetV1PurchasableItemsByInventoryType: {
    parameters: {
      path: {
        inventoryType: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetItemChoices']
        }
      }
    }
  }
  PostLolPurchaseWidgetV2PurchaseItems: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPurchaseWidgetPurchaseRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolPurchaseWidgetV3BaseSkinLineDataByOfferId: {
    parameters: {
      path: {
        offerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetBaseSkinLineDto']
        }
      }
    }
  }
  GetLolPurchaseWidgetV3PurchaseOfferOrderStatuses: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetPurchaseOfferOrderStatuses']
        }
      }
    }
  }
  PostLolPurchaseWidgetV3PurchaseOffer: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPurchaseWidgetPurchaseOfferRequestV3']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetPurchaseOfferResponseV3']
        }
      }
    }
  }
  PostLolPurchaseWidgetV3ValidateOffer: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolPurchaseWidgetValidateOfferRequestV3']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolPurchaseWidgetValidateOfferResponseV3']
        }
      }
    }
  }
  GetLolRankedV1ApexLeaguesByQueueTypeByTier: {
    parameters: {
      path: {
        /** @enum {string} */
        queueType: string
        /** @enum {string} */
        tier: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedLeagueLadderInfo']
        }
      }
    }
  }
  GetLolRankedV1ChallengerLaddersEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  GetLolRankedV1CurrentLpChangeNotification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedLcuLeagueNotification']
        }
      }
    }
  }
  GetLolRankedV1CurrentRankedStats: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedRankedStats']
        }
      }
    }
  }
  GetLolRankedV1EosNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedEosNotificationResource'][]
        }
      }
    }
  }
  PostLolRankedV1EosNotificationsByIdAcknowledge: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolRankedV1EosRewards: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedEosRewardsConfig']
        }
      }
    }
  }
  GetLolRankedV1LeagueLaddersByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedLeagueLadderInfo'][]
        }
      }
    }
  }
  GetLolRankedV1Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedLcuLeagueNotification'][]
        }
      }
    }
  }
  PostLolRankedV1NotificationsByIdAcknowledge: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolRankedV1RankedStats: {
    parameters: {
      query: {
        puuids: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolRankedRankedStats']
              | undefined
          }
        }
      }
    }
  }
  GetLolRankedV1RankedStatsByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedRankedStats']
        }
      }
    }
  }
  GetLolRankedV1RatedLadderByQueueType: {
    parameters: {
      path: {
        /** @enum {string} */
        queueType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedRatedLadderInfo']
        }
      }
    }
  }
  GetLolRankedV1SignedRankedStats: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedSignedRankedStatsDTO']
        }
      }
    }
  }
  GetLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids: {
    parameters: {
      query: {
        /** @enum {string} */
        queueType: string
        puuids: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolRankedSocialLeaderboardRankedQueueStats']
              | undefined
          }
        }
      }
    }
  }
  GetLolRankedV1SplitsConfig: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedRewardsInfo']
        }
      }
    }
  }
  GetLolRankedV1TopRatedLaddersEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  GetLolRankedV2Tiers: {
    parameters: {
      query: {
        summonerIds: string
        queueTypes: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRankedParticipantTiers'][]
        }
      }
    }
  }
  GetLolRegaliaV2Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegaliaFrontendConfig']
        }
      }
    }
  }
  GetLolRegaliaV2CurrentSummonerRegalia: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegaliaWithPreferences']
        }
      }
    }
  }
  PutLolRegaliaV2CurrentSummonerRegalia: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolRegaliaRegaliaPreferences']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegaliaWithPreferences']
        }
      }
    }
  }
  GetLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        queue: string
        position: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegalia']
        }
      }
    }
  }
  GetLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
        queue: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegalia']
        }
      }
    }
  }
  GetLolRegaliaV2SummonersBySummonerIdRegalia: {
    parameters: {
      query: {
        hovercard: string
      }
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegalia']
        }
      }
    }
  }
  GetLolRegaliaV2SummonersBySummonerIdRegaliaAsync: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRegaliaRegaliaAsync']
        }
      }
    }
  }
  GetLolReplaysV1Configuration: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolReplaysReplaysConfiguration']
        }
      }
    }
  }
  GetLolReplaysV1MetadataByGameId: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolReplaysReplayMetadata']
        }
      }
    }
  }
  PostLolReplaysV1MetadataByGameIdCreateGameVersionByGameVersionGameTypeByGameTypeQueueIdByQueueId: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
        gameVersion: string
        gameType: string
        /** Format: int32 */
        queueId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolReplaysV1RoflsByGameIdDownload: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolReplaysReplayContextData']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolReplaysV1RoflsByGameIdDownloadGraceful: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolReplaysReplayContextData']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolReplaysV1RoflsByGameIdWatch: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolReplaysReplayContextData']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolReplaysV1RoflsPath: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolReplaysV1RoflsPathDefault: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  PostLolReplaysV1RoflsScan: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolReplaysV2MetadataByGameIdCreate: {
    parameters: {
      path: {
        /** Format: int64 */
        gameId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolReplaysReplayCreateMetadata']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolRewardsV1Grants: {
    parameters: {
      query: {
        /** @enum {string} */
        status?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRewardsRewardGrant'][]
        }
      }
    }
  }
  PostLolRewardsV1GrantsByGrantIdSelect: {
    parameters: {
      path: {
        grantId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolRewardsSelectionRequestDTO']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRewardsRewardGrant']
        }
      }
    }
  }
  PatchLolRewardsV1GrantsByGrantIdView: {
    parameters: {
      path: {
        grantId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolRewardsV1Groups: {
    parameters: {
      query: {
        types?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRewardsSvcRewardGroup'][]
        }
      }
    }
  }
  GetLolRmsV1ChampionMasteryLeaveupUpdate: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRiotMessagingServiceChampionMasteryLevelUp'][]
        }
      }
    }
  }
  DeleteLolRmsV1ChampionMasteryLeaveupUpdateById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolRsoAuthConfigurationV3ReadyState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthRSOConfigReadyState']
        }
      }
    }
  }
  GetLolRsoAuthV1AuthHintsHint: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthAuthHint']
        }
      }
    }
  }
  DeleteLolRsoAuthV1AuthHintsHint: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolRsoAuthV1Authorization: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthAuthorization']
        }
      }
    }
  }
  DeleteLolRsoAuthV1Authorization: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolRsoAuthV1AuthorizationAccessToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthAccessToken']
        }
      }
    }
  }
  GetLolRsoAuthV1AuthorizationError: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthAuthError']
        }
      }
    }
  }
  PostLolRsoAuthV1AuthorizationGas: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolRsoAuthRSOPlayerCredentials']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthAuthorization']
        }
      }
    }
  }
  GetLolRsoAuthV1AuthorizationIdToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthIdToken']
        }
      }
    }
  }
  PostLolRsoAuthV1AuthorizationRefresh: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthAuthorization']
        }
      }
    }
  }
  GetLolRsoAuthV1AuthorizationUserinfo: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthUserInfo']
        }
      }
    }
  }
  PostLolRsoAuthV1AuthorizationUserinfo: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthUserInfo']
        }
      }
    }
  }
  PostLolRsoAuthV1DeviceId: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthDeviceId']
        }
      }
    }
  }
  DeleteLolRsoAuthV1Session: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolRsoAuthV1StatusByPlatformId: {
    parameters: {
      path: {
        platformId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolRsoAuthRegionStatus']
        }
      }
    }
  }
  PostLolRsoAuthV2Config: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolRsoAuthPublicClientConfig']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolRsoAuthV2Config: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolServiceStatusV1LcuStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolServiceStatusServiceStatusResource']
        }
      }
    }
  }
  GetLolServiceStatusV1TickerMessages: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolServiceStatusTickerMessage'][]
        }
      }
    }
  }
  GetLolSettingsV1AccountByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolSettingsV1AccountByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSettingsSettingCategory']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolSettingsV1AccountByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSettingsSettingCategory']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSettingsV1AccountDidreset: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  PostLolSettingsV1AccountSave: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolSettingsV1LocalByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolSettingsV1LocalByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSettingsSettingCategory']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSettingsV2AccountByPpTypeByCategory: {
    parameters: {
      path: {
        ppType: string
        category: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutLolSettingsV2AccountByPpTypeByCategory: {
    parameters: {
      path: {
        ppType: string
        category: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSettingsSettingCategory']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolSettingsV2AccountByPpTypeByCategory: {
    parameters: {
      path: {
        ppType: string
        category: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSettingsSettingCategory']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSettingsV2DidresetByPpType: {
    parameters: {
      path: {
        ppType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolSettingsV2LocalByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PatchLolSettingsV2LocalByCategory: {
    parameters: {
      path: {
        category: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSettingsSettingCategory']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSettingsV2Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolShutdownV1Notification: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolShutdownShutdownNotification']
        }
      }
    }
  }
  GetLolSimpleDialogMessagesV1Messages: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSimpleDialogMessagesMessage'][]
        }
      }
    }
  }
  PostLolSimpleDialogMessagesV1Messages: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSimpleDialogMessagesLocalMessageRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  DeleteLolSimpleDialogMessagesV1MessagesByMessageId: {
    parameters: {
      path: {
        /** Format: int64 */
        messageId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSocialLeaderboardV1LeaderboardNextUpdateTime: {
    parameters: {
      query: {
        /** @enum {string} */
        queueType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  GetLolSocialLeaderboardV1SocialLeaderboardData: {
    parameters: {
      query: {
        /** @enum {string} */
        queueType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSocialLeaderboardSocialLeaderboardData']
        }
      }
    }
  }
  PostLolSpectatorV1BuddySpectate: {
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSpectatorSummonerOrTeamAvailabilty']
        }
      }
    }
  }
  GetLolSpectatorV1Spectate: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSpectatorSpectateGameInfo']
        }
      }
    }
  }
  PostLolSpectatorV1SpectateLaunch: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSpectatorSpectateGameInfo']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolStatstonesV1EogNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }[]
        }
      }
    }
  }
  DeleteLolStatstonesV1EogNotifications: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolStatstonesV1EogNotificationsByKey: {
    parameters: {
      path: {
        /** Format: int32 */
        key: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolStatstonesV1FeaturedChampionStatstonesByChampionItemId: {
    parameters: {
      path: {
        /** Format: int32 */
        championItemId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStatstonesStatstone'][]
        }
      }
    }
  }
  PostLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId: {
    parameters: {
      path: {
        /** Format: int32 */
        championItemId: string
        statstoneId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolStatstonesStatstoneFeaturedRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolStatstonesV1ProfileSummaryByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStatstonesProfileStatstoneSummary'][]
        }
      }
    }
  }
  GetLolStatstonesV1StatstoneByContentIdOwned: {
    parameters: {
      path: {
        contentId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolStatstonesV1StatstonesEnabledQueueIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number[]
        }
      }
    }
  }
  GetLolStatstonesV1VignetteNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }[]
        }
      }
    }
  }
  DeleteLolStatstonesV1VignetteNotifications: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteLolStatstonesV1VignetteNotificationsByKey: {
    parameters: {
      path: {
        /** Format: int32 */
        key: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolStatstonesV2PlayerStatstonesSelfByChampionItemId: {
    parameters: {
      path: {
        /** Format: int32 */
        championItemId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStatstonesStatstoneSet'][]
        }
      }
    }
  }
  GetLolStatstonesV2PlayerSummarySelf: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStatstonesChampionStatstoneSummary'][]
        }
      }
    }
  }
  GetLolStoreV1ByPageType: {
    parameters: {
      path: {
        pageType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolStoreV1Catalog: {
    parameters: {
      query: {
        inventoryType?: string
        itemId?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreCatalogItem'][]
        }
      }
    }
  }
  GetLolStoreV1CatalogByInventoryType: {
    parameters: {
      query: {
        itemIds: string
      }
      path: {
        inventoryType: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreCatalogItem'][]
        }
      }
    }
  }
  GetLolStoreV1CatalogSales: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreItemSale'][]
        }
      }
    }
  }
  GetLolStoreV1CatalogByInstanceIds: {
    parameters: {
      query: {
        instanceIds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreCatalogItem'][]
        }
      }
    }
  }
  GetLolStoreV1GetStoreUrl: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  GetLolStoreV1Giftablefriends: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreGiftingFriend'][]
        }
      }
    }
  }
  GetLolStoreV1ItemKeysFromInstanceIds: {
    parameters: {
      query: {
        instanceIds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolStoreItemKey']
              | undefined
          }
        }
      }
    }
  }
  GetLolStoreV1ItemKeysFromOfferIds: {
    parameters: {
      query: {
        offerIds: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]:
              | LcuComponents['schemas']['LolStoreItemKey']
              | undefined
          }
        }
      }
    }
  }
  GetLolStoreV1LastPage: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  PostLolStoreV1LastPage: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostLolStoreV1NotificationsAcknowledge: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolStoreV1Offers: {
    parameters: {
      query: {
        inventoryTypeUUIDs?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreCapOffer'][]
        }
      }
    }
  }
  GetLolStoreV1OrderNotifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreOrderNotificationResource'][]
        }
      }
    }
  }
  GetLolStoreV1OrderNotificationsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreOrderNotificationResource']
        }
      }
    }
  }
  GetLolStoreV1PaymentDetails: {
    parameters: {
      query: {
        action: string
        /** Format: int64 */
        giftRecipientAccountId?: string
        giftMessage?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolStoreV1SkinsBySkinId: {
    parameters: {
      path: {
        /** Format: int32 */
        skinId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreCatalogItem']
        }
      }
    }
  }
  PostLolStoreV1SkinsBySkinIdPurchase: {
    parameters: {
      path: {
        /** Format: int32 */
        skinId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolStoreItemCost']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolStoreV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreStoreStatus']
        }
      }
    }
  }
  GetLolStoreV1StoreReady: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolStoreV1Wallet: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolStoreWallet']
        }
      }
    }
  }
  PostLolSuggestedPlayersV1ReportedPlayer: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersReportedPlayer']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolSuggestedPlayersV1SuggestedPlayers: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersSuggestedPlayer'][]
        }
      }
    }
  }
  DeleteLolSuggestedPlayersV1SuggestedPlayersBySummonerId: {
    parameters: {
      path: {
        /** Format: int64 */
        summonerId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolSuggestedPlayersV1VictoriousComrade: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersVictoriousComrade']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetLolSummonerV1CheckNameAvailabilityNewSummonersByName: {
    parameters: {
      path: {
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolSummonerV1CheckNameAvailabilityByName: {
    parameters: {
      path: {
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummoner: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummonerAccountAndSummonerIds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerAccountIdAndSummonerId']
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummonerAutofill: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerAutoFillQueueDto'][]
        }
      }
    }
  }
  PutLolSummonerV1CurrentSummonerIcon: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSummonerSummonerIcon']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummonerJwt: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  PostLolSummonerV1CurrentSummonerName: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummonerProfilePrivacy: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerProfilePrivacy']
        }
      }
    }
  }
  PutLolSummonerV1CurrentSummonerProfilePrivacy: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSummonerProfilePrivacySetting']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummonerRerollPoints: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummonerRerollPoints']
        }
      }
    }
  }
  GetLolSummonerV1CurrentSummonerSummonerProfile: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostLolSummonerV1CurrentSummonerSummonerProfile: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSummonerSummonerProfileUpdate']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSummonerV1ProfilePrivacyEnabled: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerProfilePrivacyEnabledState']
        }
      }
    }
  }
  GetLolSummonerV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerStatus']
        }
      }
    }
  }
  GetLolSummonerV1SummonerProfile: {
    parameters: {
      query: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetLolSummonerV1SummonerRequestsReady: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolSummonerV1Summoners: {
    parameters: {
      query: {
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  PostLolSummonerV1Summoners: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['LolSummonerSummonerRequestedName']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolSummonerV1SummonersByPuuidCachedByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolSummonerV1SummonersById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolSummonerV2SummonerIcons: {
    parameters: {
      query: {
        ids: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummonerIdAndIcon'][]
        }
      }
    }
  }
  GetLolSummonerV2SummonerNames: {
    parameters: {
      query: {
        ids: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummonerIdAndName'][]
        }
      }
    }
  }
  GetLolSummonerV2Summoners: {
    parameters: {
      query: {
        ids?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner'][]
        }
      }
    }
  }
  PostLolSummonerV2SummonersNames: {
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner'][]
        }
      }
    }
  }
  PostLolSummonerV2SummonersPuuid: {
    requestBody?: {
      content: {
        'application/json': string[]
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner'][]
        }
      }
    }
  }
  GetLolSummonerV2SummonersPuuidByPuuid: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolSummonerSummoner']
        }
      }
    }
  }
  GetLolTastesV1Ready: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetLolTastesV1SkinsModel: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolTastesDataModelResponse']
        }
      }
    }
  }
  GetLolTftV1TftHubFooterColors: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolTftLolTftHubFooterColors']
        }
      }
    }
  }
  GetLolTftV1TftStorePromos: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolTftLolTftStorePromos']
        }
      }
    }
  }
  GetLolTftV2TftBattlepass: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolMissionsTftPaidBattlepass']
        }
      }
    }
  }
  GetLolTokenUpsellV1All: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolWorldsTokenCardTokenUpsell'][]
        }
      }
    }
  }
  GetLolTrophiesV1CurrentSummonerTrophiesProfile: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolTrophiesTrophyProfileData']
        }
      }
    }
  }
  GetLolTrophiesV1PlayersByPuuidTrophiesProfile: {
    parameters: {
      path: {
        puuid: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['LolTrophiesTrophyProfileData']
        }
      }
    }
  }
  /** Returns whether or not the frontend processes are ready */
  GetMemoryV1FeProcessesReady: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  /** Sends an event that the frontend processes are ready */
  PostMemoryV1NotifyFeProcessesReady: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Sends current memory usage info to telemetry. */
  PostMemoryV1Snapshot: {
    parameters: {
      query: {
        context: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number[]
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Returns current pool usage */
  MemoryPools: {
    parameters: {
      query: {
        /** @description Name of the context to find (optional) */
        contextName?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PatcherNotification'][]
        }
      }
    }
  }
  PostPatcherV1Notifications: {
    parameters: {
      query: {
        /** @enum {string} */
        notificationId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeletePatcherV1NotificationsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1P2pStatus: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PatcherP2PStatus']
        }
      }
    }
  }
  PatchPatcherV1P2pStatus: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['PatcherP2PStatusUpdate']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1Products: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  DeletePatcherV1ProductsByProductId: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdDetectCorruptionRequest: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PatcherProductState']
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdPartialRepairRequest: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1ProductsByProductIdPaths: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: string | undefined
          }
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdSignalStartPatchingDelayed: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdStartCheckingRequest: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdStartPatchingRequest: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1ProductsByProductIdState: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PatcherProductState']
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdStopCheckingRequest: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostPatcherV1ProductsByProductIdStopPatchingRequest: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1ProductsByProductIdTags: {
    parameters: {
      path: {
        'product-id': string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: string | undefined
          }
        }
      }
    }
  }
  PostPatcherV1ProductsLeagueOfLegendsFullRepairRequest: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PutPatcherV1SelfUpdateRestart: {
    parameters: {
      query: {
        forceRestartOnSelfUpdate: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPatcherV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PatcherStatus']
        }
      }
    }
  }
  PutPatcherV1Ux: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['PatcherUxResource']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostPaymentsV1PmcStartUrl: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['PaymentsFrontEndRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PaymentsFrontEndResult']
        }
      }
    }
  }
  /** Returns process memory status */
  GetPerformanceV1Memory: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Registers the process and includes it with the performance information. */
  PostPerformanceV1ProcessByProcessId: {
    parameters: {
      path: {
        /**
         * Format: int32
         * @description Id of the process to track performance information.
         */
        processId: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Returns the various performance information for the cef processes */
  GetPerformanceV1Report: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }[]
        }
      }
    }
  }
  /** Restarts the CPU timing information and returns the results from PerfReportProcesses */
  PostPerformanceV1ReportRestart: {
    parameters: {
      query: {
        /**
         * Format: int32
         * @description Time in seconds for each CPU timing sample.
         */
        sampleLength?: string
        /**
         * Format: int32
         * @description Number of samples to record.
         */
        sampleCount?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }[]
        }
      }
    }
  }
  /** Returns hardware and software specs for the machine the client is running on. */
  GetPerformanceV1SystemInfo: {
    parameters: {
      query: {
        /**
         * Format: int32
         * @description Returns all available system information
         */
        full?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetPlayerNotificationsV1Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationConfigResource']
        }
      }
    }
  }
  PutPlayerNotificationsV1Config: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationConfigResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationConfigResource']
        }
      }
    }
  }
  GetPlayerNotificationsV1Notifications: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationResource'][]
        }
      }
    }
  }
  PostPlayerNotificationsV1Notifications: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationResource']
        }
      }
    }
  }
  GetPlayerNotificationsV1NotificationsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationResource']
        }
      }
    }
  }
  PutPlayerNotificationsV1NotificationsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]: unknown | undefined
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PlayerNotificationsPlayerNotificationResource']
        }
      }
    }
  }
  DeletePlayerNotificationsV1NotificationsById: {
    parameters: {
      path: {
        /** Format: int64 */
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Get the status of the external plugin connection. */
  GetPluginManagerV1ExternalPluginsAvailability: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['ExternalPluginsResource']
        }
      }
    }
  }
  /** Get the status of the plugin manager. */
  GetPluginManagerV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PluginManagerResource']
        }
      }
    }
  }
  /** Get all plugin descriptions. */
  GetPluginManagerV2Descriptions: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PluginDescriptionResource'][]
        }
      }
    }
  }
  /** Get a plugin description. */
  GetPluginManagerV2DescriptionsByPlugin: {
    parameters: {
      path: {
        /** @description Plugin name */
        plugin: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PluginDescriptionResource']
        }
      }
    }
  }
  /** Get diagnostic information for all plugins. */
  GetPluginManagerV2Plugins: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PluginResource'][]
        }
      }
    }
  }
  /** Get diagnostic information for a single plugin. */
  GetPluginManagerV2PluginsByPlugin: {
    parameters: {
      path: {
        /** @description Plugin name */
        plugin: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['PluginResource']
        }
      }
    }
  }
  /** Get the plugin manifest. */
  GetPluginManagerV3PluginsManifest: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Returns information about the process-control. */
  GetProcessControlV1Process: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['ProcessControlProcess']
        }
      }
    }
  }
  /** Quits the application. */
  PostProcessControlV1ProcessQuit: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Restarts the application.  Does nothing if there is already a waiting delayed restart.  Optionally accepts specific version to restart. */
  PostProcessControlV1ProcessRestart: {
    parameters: {
      query: {
        /** Format: int32 */
        delaySeconds: string
        /** Format: int32 */
        restartVersion?: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Restarts the application in order to perform a full repair (including self repair). */
  PostProcessControlV1ProcessRestartToRepair: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostRiotMessagingServiceV1Connect: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteRiotMessagingServiceV1Connect: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostRiotMessagingServiceV1Entitlements: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['RiotMessagingServiceEntitlementsToken']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  DeleteRiotMessagingServiceV1Entitlements: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetRiotMessagingServiceV1MessageByA: {
    parameters: {
      path: {
        a: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RmsMessage']
        }
      }
    }
  }
  GetRiotMessagingServiceV1MessageByAByB: {
    parameters: {
      path: {
        a: string
        b: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RmsMessage']
        }
      }
    }
  }
  GetRiotMessagingServiceV1MessageByAByBByC: {
    parameters: {
      path: {
        a: string
        b: string
        c: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RmsMessage']
        }
      }
    }
  }
  GetRiotMessagingServiceV1MessageByAByBByCByD: {
    parameters: {
      path: {
        a: string
        b: string
        c: string
        d: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RmsMessage']
        }
      }
    }
  }
  GetRiotMessagingServiceV1MessageByAByBByCByDByE: {
    parameters: {
      path: {
        a: string
        b: string
        c: string
        d: string
        e: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RmsMessage']
        }
      }
    }
  }
  GetRiotMessagingServiceV1MessageByAByBByCByDByEByF: {
    parameters: {
      path: {
        a: string
        b: string
        c: string
        d: string
        e: string
        f: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RmsMessage']
        }
      }
    }
  }
  GetRiotMessagingServiceV1Session: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RiotMessagingServiceSession']
        }
      }
    }
  }
  DeleteRiotMessagingServiceV1Session: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetRiotMessagingServiceV1State: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RiotMessagingServiceState']
        }
      }
    }
  }
  /** Adds or Updates a Metric */
  PostRiotclientAddorupdatemetric: {
    parameters: {
      query: {
        /** @description Name of metric group */
        group: string
        /** @description Name of metric object */
        object: string
        /** @description Name of metric item */
        name: string
        /**
         * Format: int64
         * @description Value to store
         */
        value: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Get the current runtime affinity of the application. */
  GetRiotclientAffinity: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Sets the current runtime affinity of the application. */
  PostRiotclientAffinity: {
    parameters: {
      query: {
        /** @description The new affinity to use. */
        newAffinity: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Deletes the current runtime affinity of the application. */
  DeleteRiotclientAffinity: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Application name without file extension */
  GetRiotclientAppName: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  /** Get the TCP port number that the remoting server is listening on. */
  GetRiotclientAppPort: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  /** Return the auth token used by the remoting server */
  GetRiotclientAuthToken: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  /** Get the command line parameters for the application */
  GetRiotclientCommandLineArgs: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string[]
        }
      }
    }
  }
  /** Get the current region and locale. */
  GetRiotclientGetRegionLocale: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RegionLocale']
        }
      }
    }
  }
  /** Kills the ux process and restarts it. Used only when the ux process crashes. */
  PostRiotclientKillAndRestartUx: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Kills the ux process. */
  PostRiotclientKillUx: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Launches the ux process. */
  PostRiotclientLaunchUx: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Base64 encoded uuid identifying the user's machine */
  GetRiotclientMachineId: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  /** Endpoint for passing in new data. */
  PostRiotclientNewArgs: {
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': unknown
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Get the current region and locale. */
  GetRiotclientRegionLocale: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['RegionLocale']
        }
      }
    }
  }
  /** Update the region and locale. */
  PutRiotclientRegionLocale: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['RegionLocale']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Ux acknowledges the update to the region and locale. */
  PutRiotclientRegionLocaleAck: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Update the region and locale. */
  PostRiotclientSetRegionLocale: {
    parameters: {
      query: {
        /** @description Name of the region. */
        region: string
        /** @description Name of the locale. */
        locale: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Open swagger in the default browser. */
  PostRiotclientShowSwagger: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Show the splash screen. */
  PutRiotclientSplash: {
    parameters: {
      query: {
        splash: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Hide the splash screen. */
  DeleteRiotclientSplash: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Get basic system information: OS, memory, processor speed, and number of physical cores */
  GetRiotclientSystemInfoV1BasicInfo: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['basicSystemInfo']
        }
      }
    }
  }
  /** Retrieves a completed scheduler trace. */
  GetRiotclientTrace: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Unloads the UX process */
  PostRiotclientUnload: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Allows the background process to launch the game into the foregound. */
  PostRiotclientUxAllowForeground: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Returns whether the ux has crashed or not */
  GetRiotclientUxCrashCount: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  /** Flash the ux process' main window and the taskbar/dock icon, if they exist. */
  PostRiotclientUxFlash: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Ux notification that it has completed loading the main window. */
  PutRiotclientUxLoadComplete: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Minimize the ux process and all its windows if it exists. This does not kill the ux. */
  PostRiotclientUxMinimize: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Shows the ux process if it exists; create and show if it does not. */
  PostRiotclientUxShow: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Get the current Ux state. */
  GetRiotclientUxState: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
    }
  }
  /** Ux acknowledges the update to the Ux state. */
  PutRiotclientUxStateAck: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Register an auth token.  This is any alpha-numeric string that will be used as a password with the `riot` user when making requests. */
  PutRiotclientV1AuthTokensByAuthToken: {
    parameters: {
      path: {
        /** @description Authentication token to add. */
        authToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Unregister an existing auth token. */
  DeleteRiotclientV1AuthTokensByAuthToken: {
    parameters: {
      path: {
        authToken: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Get the crash reporting environment identifier. */
  GetRiotclientV1CrashReportingEnvironment: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['CrashReportingEnvironment']
        }
      }
    }
  }
  /** Tags the crash with an environment so it can be filtered more easily. */
  PutRiotclientV1CrashReportingEnvironment: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['CrashReportingEnvironment']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Adds the enclosed log to the app's crash report. */
  PostRiotclientV1CrashReportingLogs: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostRiotclientV1ElevationRequests: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['ElevationRequest']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PutRiotclientV1SelfUpdateInfo: {
    parameters: {
      query: {
        url: string
        uuid: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Gets the last known posted zoom-scale value. */
  GetRiotclientZoomScale: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  /** Handles changing the zoom scale value. */
  PostRiotclientZoomScale: {
    parameters: {
      query: {
        /**
         * Format: double
         * @description The new value of the zoom scale.
         */
        newZoomScale: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  PostSanitizerV1ContainsSanitized: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['SanitizerContainsSanitizedRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['SanitizerContainsSanitizedResponse']
        }
      }
    }
  }
  PostSanitizerV1Sanitize: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['SanitizerSanitizeRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['SanitizerSanitizeResponse']
        }
      }
    }
  }
  GetSanitizerV1Status: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['SanitizerSanitizerStatus']
        }
      }
    }
  }
  /** Subscribes to a given event */
  Subscribe: {
    parameters: {
      query: {
        /** @description Name of the event to subscribe to */
        eventName: string
        /**
         * @description Desired format to receive events in. If unspecified, events will be sent in the active result format at the time.
         * @enum {string}
         */
        format?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves the API documentation resource listing */
  HttpApiDocsV1: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves the API declaration for a supported API */
  HttpApiDeclarationV1: {
    parameters: {
      path: {
        /** @description API to get a declaration for */
        api: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves the API documentation */
  HttpApiDocsV2: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Retrieves the API documentation */
  HttpApiDocsV3: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  /** Information about the current artifacts that make up this build */
  GetSystemV1Builds: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['BuildInfo']
        }
      }
    }
  }
  /** Gets the millisecond UNIX timestamp of when the application was started. */
  GetTelemetryV1ApplicationStartTime: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': number
        }
      }
    }
  }
  /** Adds/updates a common data key and value to be sent with every subsequent event. */
  PostTelemetryV1CommonDataByKey: {
    parameters: {
      path: {
        /** @description The name of the common data key */
        key: string
      }
    }
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks that will be sent only once during this client executable run regardless of any javascript frontend restarts. All events will have their eventType prefixed with "riot__rclient__" */
  PostTelemetryV1EventsOnceByEventType: {
    parameters: {
      query: {
        /** @description A unique tag used to ensure this event is sent only once */
        onceTag: string
      }
      path: {
        /** @description The name of the event type */
        eventType: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]:
            | {
                [key: string]: unknown | undefined
              }
            | undefined
        }
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks. This will include current performance information along with the passed in data. Each call will record the performance counters then reset them for use in the next call. All events will have their eventType prefixed with "riot__rclient__" */
  PostTelemetryV1EventsWithPerfInfoByEventType: {
    parameters: {
      path: {
        /** @description The name of the event type */
        eventType: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]:
            | {
                [key: string]: unknown | undefined
              }
            | undefined
        }
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks. All events will have their eventType prefixed with "riot__rclient__" */
  PostTelemetryV1EventsByEventType: {
    parameters: {
      path: {
        /** @description The name of the event type */
        eventType: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]:
            | {
                [key: string]: unknown | undefined
              }
            | undefined
        }
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks using the Riot Data API that will be sent only once during this client executable run regardless of any javascript frontend restarts. All events will have their eventType prefixed with "riot__rclient__" */
  PostTelemetryV3EventsOnceByEventType: {
    parameters: {
      query: {
        /** @description A unique tag used to ensure this event is sent only once */
        onceTag: string
      }
      path: {
        /** @description The name of the event type */
        eventType: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]:
            | {
                [key: string]: unknown | undefined
              }
            | undefined
        }
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks using the Riot Data API. All events will have their eventType prefixed with "riot__rclient__" */
  PostTelemetryV3EventsByEventType: {
    parameters: {
      path: {
        /** @description The name of the event type */
        eventType: string
      }
    }
    requestBody?: {
      content: {
        'application/json': {
          [key: string]:
            | {
                [key: string]: unknown | undefined
              }
            | undefined
        }
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Starts recording of a performance metric. */
  PostTracingV1PerformanceByName: {
    parameters: {
      path: {
        name: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Ends recording of a performance metric. */
  DeleteTracingV1PerformanceByName: {
    parameters: {
      path: {
        name: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a tracing event. */
  PostTracingV1TraceEvent: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['TracingEventV1']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a module description. */
  PostTracingV1TraceModule: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['TracingModuleV1']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a non timing telemetry event. */
  PostTracingV1TraceNonTimingEventByEventName: {
    parameters: {
      query: {
        /** @description The value to be recorded */
        value: string
        /** @description The unit of measurement for the value */
        unit: string
      }
      path: {
        /** @description Name of the event */
        eventName: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a tracing phase beginning. */
  PostTracingV1TracePhaseBegin: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['TracingPhaseBeginV1']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a tracing phase ending. */
  PostTracingV1TracePhaseEnd: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['TracingPhaseEndV1']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a tracing step event. */
  PostTracingV1TraceStepEvent: {
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record the beginning of a time series event. */
  PostTracingV1TraceTimeSeriesEventByEventName: {
    parameters: {
      path: {
        /** @description Name of the event */
        eventName: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record the ending of a time series event. */
  DeleteTracingV1TraceTimeSeriesEventByEventName: {
    parameters: {
      query: {
        /**
         * Format: int64
         * @description When the event occurred
         */
        when: string
        /** @description Optional eventName suffix to apply that mutates the event name to indicate the outcome */
        suffix?: string
      }
      path: {
        /** @description Name of the event */
        eventName: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Record a marker within a time series event. */
  PostTracingV1TraceTimeSeriesEventByEventNameMarkerByMarkerName: {
    parameters: {
      path: {
        /** @description Plugin name */
        eventName: string
        /** @description Name of the marker within the event */
        markerName: string
      }
    }
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  /** Unsubscribes from a given event */
  Unsubscribe: {
    parameters: {
      query: {
        /** @description Name of the event to unsubscribe from */
        eventName: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  GetVoiceChatV1AudioProperties: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatAudioPropertiesResource']
        }
      }
    }
  }
  GetVoiceChatV1CallStatsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatCallStatsResource'][]
        }
      }
    }
  }
  GetVoiceChatV1CallStatsAggregate: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatCallStatsResource']
        }
      }
    }
  }
  GetVoiceChatV1CodecSettings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatCodecSettingsResource']
        }
      }
    }
  }
  PutVoiceChatV1CodecSettings: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['VoiceChatUpdateCodecSettingsResource']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetVoiceChatV1Config: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatConfigResource']
        }
      }
    }
  }
  GetVoiceChatV1Errors: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatVoiceErrorCounterResource'][]
        }
      }
    }
  }
  GetVoiceChatV1PushToTalk: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatPushToTalkResource']
        }
      }
    }
  }
  PutVoiceChatV1PushToTalk: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['VoiceChatPushToTalkResource']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
  PostVoiceChatV1PushToTalkCheckAvailable: {
    requestBody?: {
      content: {
        'application/json': number
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': boolean
        }
      }
    }
  }
  GetVoiceChatV2DevicesCapture: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatDeviceResource'][]
        }
      }
    }
  }
  GetVoiceChatV2DevicesCapturePermission: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatCaptureDevicePermissionStatus']
        }
      }
    }
  }
  PutVoiceChatV2DevicesCapturePromptForPermission: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetVoiceChatV2DevicesRender: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatDeviceResource'][]
        }
      }
    }
  }
  GetVoiceChatV2Sessions: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatSessionResource'][]
        }
      }
    }
  }
  PostVoiceChatV2Sessions: {
    parameters: {
      header: {
        JWT: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatSessionResource']
        }
      }
    }
  }
  DeleteVoiceChatV2Sessions: {
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetVoiceChatV2SessionsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatSessionResource']
        }
      }
    }
  }
  PostVoiceChatV2SessionsById: {
    parameters: {
      header: {
        JWT: string
      }
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatSessionResource']
        }
      }
    }
  }
  DeleteVoiceChatV2SessionsById: {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetVoiceChatV2SessionsBySessionIdParticipantsByParticipantId: {
    parameters: {
      path: {
        sessionId: string
        participantId: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatParticipantResource']
        }
      }
    }
  }
  PutVoiceChatV2SessionsBySessionIdParticipantsByParticipantId: {
    parameters: {
      path: {
        sessionId: string
        participantId: string
      }
    }
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['VoiceChatUpdateParticipantResource']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetVoiceChatV2Settings: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatSettingsResource']
        }
      }
    }
  }
  PutVoiceChatV2Settings: {
    requestBody?: {
      content: {
        'application/json': LcuComponents['schemas']['VoiceChatUpdateSettingsResource']
      }
    }
    responses: {
      /** @description No content */
      204: never
    }
  }
  GetVoiceChatV2State: {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': LcuComponents['schemas']['VoiceChatStateResource']
        }
      }
    }
  }
  /**
   * Controls the console output format
   * @description With no arguments, returns the current output format being used. If a format is specified, switches the console output to that format.
   */
  WebSocketFormat: {
    parameters: {
      query: {
        /**
         * @description Output format to switch to
         * @enum {string}
         */
        format?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            [key: string]: unknown | undefined
          }
        }
      }
    }
  }
}

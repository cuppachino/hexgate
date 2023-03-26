import type { ExcludeNever } from '../generic.js'

/**
 * LCU endpoints and query parameters
 */
export type LcuPaths = {
  '/{plugin}/assets/{path}': {
    /** Download a backend asset */
    get: LcuOperations['GetByPluginAssetsByPath']
    /** Download the header for a backend asset */
    head: LcuOperations['HeadByPluginAssetsByPath']
  }
  '/anti-addiction/v1/policies/{policyType}/anti-addiction-state': {
    get: LcuOperations['GetAntiAddictionV1PoliciesByPolicyTypeAntiAddictionState']
  }
  '/async/v1/result/{asyncToken}': {
    /** Retrieves the result of a completed asynchronous operation. */
    get: LcuOperations['HttpAsyncResult']
  }
  '/async/v1/status/{asyncToken}': {
    /** Retrieves details on the current state of an asynchronous operation. */
    get: LcuOperations['HttpAsyncStatus']
    /** Cancels the asynchronous operation or removes its completion status. */
    delete: LcuOperations['HttpAsyncDelete']
  }
  '/AsyncDelete': {
    /** Cancels the asynchronous operation or removes its completion status. */
    post: LcuOperations['AsyncDelete']
  }
  '/AsyncResult': {
    /** Retrieves the result of a completed asynchronous operation. */
    post: LcuOperations['AsyncResult']
  }
  '/AsyncStatus': {
    /** Retrieves details on the current state of an asynchronous operation. */
    post: LcuOperations['AsyncStatus']
  }
  '/Cancel': {
    /** Attempts to cancel an asynchronous operation */
    post: LcuOperations['Cancel']
  }
  '/client-config/v1/config': {
    get: LcuOperations['GetClientConfigV1Config']
  }
  '/client-config/v1/config/{name}': {
    get: LcuOperations['GetClientConfigV1ConfigByName']
  }
  '/client-config/v1/entitlements-token': {
    put: LcuOperations['PutClientConfigV1EntitlementsToken']
  }
  '/client-config/v1/refresh-config-status': {
    put: LcuOperations['PutClientConfigV1RefreshConfigStatus']
  }
  '/client-config/v1/status/{type}': {
    get: LcuOperations['GetClientConfigV1StatusByType']
  }
  '/client-config/v2/config/{name}': {
    get: LcuOperations['GetClientConfigV2ConfigByName']
  }
  '/client-config/v2/namespace-changes': {
    put: LcuOperations['PutClientConfigV2NamespaceChanges']
  }
  '/client-config/v2/namespace/{namespace}': {
    get: LcuOperations['GetClientConfigV2NamespaceByNamespace']
  }
  '/client-config/v2/namespace/{namespace}/player': {
    get: LcuOperations['GetClientConfigV2NamespaceByNamespacePlayer']
  }
  '/client-config/v2/namespace/{namespace}/public': {
    get: LcuOperations['GetClientConfigV2NamespaceByNamespacePublic']
  }
  '/cookie-jar/v1/cookies': {
    /** Get all cookies. */
    get: LcuOperations['GetCookieJarV1Cookies']
    /** Set a cookie. */
    post: LcuOperations['PostCookieJarV1Cookies']
  }
  '/crash-reporting/v1/crash-status': {
    /** Returns whether or not the game or client have crashed */
    get: LcuOperations['GetCrashReportingV1CrashStatus']
  }
  '/data-store/v1/install-dir': {
    /** Gets the current install directory (used internally.) */
    get: LcuOperations['GetDataStoreV1InstallDir']
  }
  '/data-store/v1/install-settings/{path}': {
    /** Get the data for the specified key from the install settings. */
    get: LcuOperations['GetDataStoreV1InstallSettingsByPath']
    /** Set the data for the specified key from the install settings. */
    post: LcuOperations['PostDataStoreV1InstallSettingsByPath']
  }
  '/data-store/v1/system-settings/{path}': {
    /** Get the setting for the specified key. */
    get: LcuOperations['GetDataStoreV1SystemSettingsByPath']
  }
  '/entitlements/v1/token': {
    get: LcuOperations['GetEntitlementsV1Token']
  }
  '/Exit': {
    /** Closes the connection. */
    post: LcuOperations['Exit']
  }
  '/Help': {
    /**
     * Returns information on available functions and types
     * @description With no arguments, returns a list of all available functions and types along with a short description. If a function or type is specified, returns detailed information about it.
     */
    post: LcuOperations['Help']
  }
  '/LoggingGetEntries': {
    /** Gets all buffered log entries since the last call. */
    post: LcuOperations['LoggingGetEntries']
  }
  '/LoggingMetrics': {
    /** Returns all metrics */
    post: LcuOperations['LoggingMetrics']
  }
  '/LoggingMetricsMetadata': {
    /** Returns metadata for all metrics */
    post: LcuOperations['LoggingMetricsMetadata']
  }
  '/LoggingStart': {
    /** Initializes the logging system. */
    post: LcuOperations['LoggingStart']
  }
  '/LoggingStop': {
    /** Finalizes the logging system. */
    post: LcuOperations['LoggingStop']
  }
  '/lol-account-verification/v1/authenticate': {
    post: LcuOperations['PostLolAccountVerificationV1Authenticate']
  }
  '/lol-account-verification/v1/device': {
    get: LcuOperations['GetLolAccountVerificationV1Device']
  }
  '/lol-account-verification/v1/invalidate': {
    post: LcuOperations['PostLolAccountVerificationV1Invalidate']
  }
  '/lol-account-verification/v1/is-verified': {
    get: LcuOperations['GetLolAccountVerificationV1IsVerified']
  }
  '/lol-account-verification/v1/send-token': {
    post: LcuOperations['PostLolAccountVerificationV1SendToken']
  }
  '/lol-account-verification/v1/verify': {
    post: LcuOperations['PostLolAccountVerificationV1Verify']
  }
  '/lol-active-boosts/v1/active-boosts': {
    get: LcuOperations['GetLolActiveBoostsV1ActiveBoosts']
  }
  '/lol-anti-addiction/v1/anti-addiction-token': {
    get: LcuOperations['GetLolAntiAddictionV1AntiAddictionToken']
  }
  '/lol-banners/v1/current-summoner/flags': {
    get: LcuOperations['GetLolBannersV1CurrentSummonerFlags']
  }
  '/lol-banners/v1/current-summoner/flags/equipped': {
    get: LcuOperations['GetLolBannersV1CurrentSummonerFlagsEquipped']
    put: LcuOperations['PutLolBannersV1CurrentSummonerFlagsEquipped']
  }
  '/lol-banners/v1/current-summoner/frames/equipped': {
    get: LcuOperations['GetLolBannersV1CurrentSummonerFramesEquipped']
  }
  '/lol-banners/v1/players/{puuid}/flags/equipped': {
    get: LcuOperations['GetLolBannersV1PlayersByPuuidFlagsEquipped']
  }
  '/lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}': {
    get: LcuOperations['GetLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue']
  }
  '/lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}': {
    get: LcuOperations['GetLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue']
  }
  '/lol-career-stats/v1/champion-experts/{championId}/{position}': {
    get: LcuOperations['GetLolCareerStatsV1ChampionExpertsByChampionIdByPosition']
  }
  '/lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}': {
    get: LcuOperations['GetLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition']
  }
  '/lol-career-stats/v1/champion-stats-percentiles': {
    post: LcuOperations['PostLolCareerStatsV1ChampionStatsPercentiles']
  }
  '/lol-career-stats/v1/position-averages/{position}/{tier}/{queue}': {
    get: LcuOperations['GetLolCareerStatsV1PositionAveragesByPositionByTierByQueue']
  }
  '/lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}': {
    get: LcuOperations['GetLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue']
  }
  '/lol-career-stats/v1/position-experts/{position}': {
    get: LcuOperations['GetLolCareerStatsV1PositionExpertsByPosition']
  }
  '/lol-career-stats/v1/position-experts/season/{season}/{position}': {
    get: LcuOperations['GetLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition']
  }
  '/lol-career-stats/v1/position-stats-percentiles': {
    post: LcuOperations['PostLolCareerStatsV1PositionStatsPercentiles']
  }
  '/lol-career-stats/v1/summoner-games/{puuid}': {
    get: LcuOperations['GetLolCareerStatsV1SummonerGamesByPuuid']
  }
  '/lol-career-stats/v1/summoner-games/{puuid}/season/{season}': {
    get: LcuOperations['GetLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason']
  }
  '/lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}': {
    get: LcuOperations['GetLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition']
  }
  '/lol-catalog/v1/item-details': {
    get: LcuOperations['GetLolCatalogV1ItemDetails']
  }
  '/lol-catalog/v1/items': {
    get: LcuOperations['GetLolCatalogV1Items']
  }
  '/lol-catalog/v1/items/{inventoryType}': {
    get: LcuOperations['GetLolCatalogV1ItemsByInventoryType']
  }
  '/lol-challenges/v1/available-queue-ids': {
    get: LcuOperations['GetLolChallengesV1AvailableQueueIds']
  }
  '/lol-challenges/v1/challenges/{product}/local-player': {
    get: LcuOperations['GetLolChallengesV1ChallengesByProductLocalPlayer']
  }
  '/lol-challenges/v1/level-points': {
    get: LcuOperations['GetLolChallengesV1LevelPoints']
  }
  '/lol-challenges/v1/my-updated-challenges/{gameId}': {
    get: LcuOperations['GetLolChallengesV1MyUpdatedChallengesByGameId']
  }
  '/lol-challenges/v1/processGame/{product}/{gameId}': {
    post: LcuOperations['PostLolChallengesV1ProcessGameByProductByGameId']
  }
  '/lol-challenges/v1/suggested-challenges/{product}/local-player': {
    get: LcuOperations['GetLolChallengesV1SuggestedChallengesByProductLocalPlayer']
  }
  '/lol-challenges/v1/summary-player-data/{product}/local-player': {
    get: LcuOperations['GetLolChallengesV1SummaryPlayerDataByProductLocalPlayer']
  }
  '/lol-challenges/v1/summary-player-data/{product}/player/{puuid}': {
    get: LcuOperations['GetLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid']
  }
  '/lol-challenges/v1/summary-players-data/{product}/players': {
    get: LcuOperations['GetLolChallengesV1SummaryPlayersDataByProductPlayers']
  }
  '/lol-challenges/v1/titles/local-player': {
    get: LcuOperations['GetLolChallengesV1TitlesLocalPlayer']
  }
  '/lol-challenges/v1/update-player-preferences/{product}': {
    post: LcuOperations['PostLolChallengesV1UpdatePlayerPreferencesByProduct']
  }
  '/lol-challenges/v1/updated-challenge/{gameId}/{puuid}': {
    get: LcuOperations['GetLolChallengesV1UpdatedChallengeByGameIdByPuuid']
  }
  '/lol-champ-select-legacy/v1/bannable-champion-ids': {
    get: LcuOperations['GetLolChampSelectLegacyV1BannableChampionIds']
  }
  '/lol-champ-select-legacy/v1/battle-training/launch': {
    post: LcuOperations['PostLolChampSelectLegacyV1BattleTrainingLaunch']
  }
  '/lol-champ-select-legacy/v1/current-champion': {
    get: LcuOperations['GetLolChampSelectLegacyV1CurrentChampion']
  }
  '/lol-champ-select-legacy/v1/disabled-champion-ids': {
    get: LcuOperations['GetLolChampSelectLegacyV1DisabledChampionIds']
  }
  '/lol-champ-select-legacy/v1/implementation-active': {
    get: LcuOperations['GetLolChampSelectLegacyV1ImplementationActive']
  }
  '/lol-champ-select-legacy/v1/pickable-champion-ids': {
    get: LcuOperations['GetLolChampSelectLegacyV1PickableChampionIds']
  }
  '/lol-champ-select-legacy/v1/pickable-skin-ids': {
    get: LcuOperations['GetLolChampSelectLegacyV1PickableSkinIds']
  }
  '/lol-champ-select-legacy/v1/session': {
    get: LcuOperations['GetLolChampSelectLegacyV1Session']
  }
  '/lol-champ-select-legacy/v1/session/actions/{id}': {
    patch: LcuOperations['PatchLolChampSelectLegacyV1SessionActionsById']
  }
  '/lol-champ-select-legacy/v1/session/actions/{id}/complete': {
    post: LcuOperations['PostLolChampSelectLegacyV1SessionActionsByIdComplete']
  }
  '/lol-champ-select-legacy/v1/session/my-selection': {
    patch: LcuOperations['PatchLolChampSelectLegacyV1SessionMySelection']
  }
  '/lol-champ-select-legacy/v1/session/my-selection/reroll': {
    post: LcuOperations['PostLolChampSelectLegacyV1SessionMySelectionReroll']
  }
  '/lol-champ-select-legacy/v1/session/timer': {
    get: LcuOperations['GetLolChampSelectLegacyV1SessionTimer']
  }
  '/lol-champ-select-legacy/v1/session/trades': {
    get: LcuOperations['GetLolChampSelectLegacyV1SessionTrades']
  }
  '/lol-champ-select-legacy/v1/session/trades/{id}': {
    get: LcuOperations['GetLolChampSelectLegacyV1SessionTradesById']
  }
  '/lol-champ-select-legacy/v1/session/trades/{id}/accept': {
    post: LcuOperations['PostLolChampSelectLegacyV1SessionTradesByIdAccept']
  }
  '/lol-champ-select-legacy/v1/session/trades/{id}/cancel': {
    post: LcuOperations['PostLolChampSelectLegacyV1SessionTradesByIdCancel']
  }
  '/lol-champ-select-legacy/v1/session/trades/{id}/decline': {
    post: LcuOperations['PostLolChampSelectLegacyV1SessionTradesByIdDecline']
  }
  '/lol-champ-select-legacy/v1/session/trades/{id}/request': {
    post: LcuOperations['PostLolChampSelectLegacyV1SessionTradesByIdRequest']
  }
  '/lol-champ-select-legacy/v1/team-boost': {
    get: LcuOperations['GetLolChampSelectLegacyV1TeamBoost']
  }
  '/lol-champ-select/v1/all-grid-champions': {
    get: LcuOperations['GetLolChampSelectV1AllGridChampions']
  }
  '/lol-champ-select/v1/bannable-champion-ids': {
    get: LcuOperations['GetLolChampSelectV1BannableChampionIds']
  }
  '/lol-champ-select/v1/battle-training/launch': {
    post: LcuOperations['PostLolChampSelectV1BattleTrainingLaunch']
  }
  '/lol-champ-select/v1/current-champion': {
    get: LcuOperations['GetLolChampSelectV1CurrentChampion']
  }
  '/lol-champ-select/v1/disabled-champion-ids': {
    get: LcuOperations['GetLolChampSelectV1DisabledChampionIds']
  }
  '/lol-champ-select/v1/grid-champions/{championId}': {
    get: LcuOperations['GetLolChampSelectV1GridChampionsByChampionId']
  }
  '/lol-champ-select/v1/muted-players': {
    get: LcuOperations['GetLolChampSelectV1MutedPlayers']
  }
  '/lol-champ-select/v1/ongoing-trade': {
    get: LcuOperations['GetLolChampSelectV1OngoingTrade']
  }
  '/lol-champ-select/v1/ongoing-trade/{id}/clear': {
    post: LcuOperations['PostLolChampSelectV1OngoingTradeByIdClear']
  }
  '/lol-champ-select/v1/pickable-champion-ids': {
    get: LcuOperations['GetLolChampSelectV1PickableChampionIds']
  }
  '/lol-champ-select/v1/pickable-skin-ids': {
    get: LcuOperations['GetLolChampSelectV1PickableSkinIds']
  }
  '/lol-champ-select/v1/pin-drop-notification': {
    get: LcuOperations['GetLolChampSelectV1PinDropNotification']
  }
  '/lol-champ-select/v1/retrieve-latest-game-dto': {
    post: LcuOperations['PostLolChampSelectV1RetrieveLatestGameDto']
  }
  '/lol-champ-select/v1/session': {
    get: LcuOperations['GetLolChampSelectV1Session']
  }
  '/lol-champ-select/v1/session/actions/{id}': {
    patch: LcuOperations['PatchLolChampSelectV1SessionActionsById']
  }
  '/lol-champ-select/v1/session/actions/{id}/complete': {
    post: LcuOperations['PostLolChampSelectV1SessionActionsByIdComplete']
  }
  '/lol-champ-select/v1/session/bench/swap/{championId}': {
    post: LcuOperations['PostLolChampSelectV1SessionBenchSwapByChampionId']
  }
  '/lol-champ-select/v1/session/my-selection': {
    patch: LcuOperations['PatchLolChampSelectV1SessionMySelection']
  }
  '/lol-champ-select/v1/session/my-selection/reroll': {
    post: LcuOperations['PostLolChampSelectV1SessionMySelectionReroll']
  }
  '/lol-champ-select/v1/session/simple-inventory': {
    post: LcuOperations['PostLolChampSelectV1SessionSimpleInventory']
  }
  '/lol-champ-select/v1/session/timer': {
    get: LcuOperations['GetLolChampSelectV1SessionTimer']
  }
  '/lol-champ-select/v1/session/trades': {
    get: LcuOperations['GetLolChampSelectV1SessionTrades']
  }
  '/lol-champ-select/v1/session/trades/{id}': {
    get: LcuOperations['GetLolChampSelectV1SessionTradesById']
  }
  '/lol-champ-select/v1/session/trades/{id}/accept': {
    post: LcuOperations['PostLolChampSelectV1SessionTradesByIdAccept']
  }
  '/lol-champ-select/v1/session/trades/{id}/cancel': {
    post: LcuOperations['PostLolChampSelectV1SessionTradesByIdCancel']
  }
  '/lol-champ-select/v1/session/trades/{id}/decline': {
    post: LcuOperations['PostLolChampSelectV1SessionTradesByIdDecline']
  }
  '/lol-champ-select/v1/session/trades/{id}/request': {
    post: LcuOperations['PostLolChampSelectV1SessionTradesByIdRequest']
  }
  '/lol-champ-select/v1/sfx-notifications': {
    get: LcuOperations['GetLolChampSelectV1SfxNotifications']
  }
  '/lol-champ-select/v1/skin-carousel-skins': {
    get: LcuOperations['GetLolChampSelectV1SkinCarouselSkins']
  }
  '/lol-champ-select/v1/skin-selector-info': {
    get: LcuOperations['GetLolChampSelectV1SkinSelectorInfo']
  }
  '/lol-champ-select/v1/summoners/{slotId}': {
    get: LcuOperations['GetLolChampSelectV1SummonersBySlotId']
  }
  '/lol-champ-select/v1/team-boost': {
    get: LcuOperations['GetLolChampSelectV1TeamBoost']
  }
  '/lol-champ-select/v1/team-boost/purchase': {
    post: LcuOperations['PostLolChampSelectV1TeamBoostPurchase']
  }
  '/lol-champ-select/v1/toggle-favorite/{championId}/{position}': {
    post: LcuOperations['PostLolChampSelectV1ToggleFavoriteByChampionIdByPosition']
  }
  '/lol-champ-select/v1/toggle-player-muted': {
    post: LcuOperations['PostLolChampSelectV1TogglePlayerMuted']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampions']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions-minimal': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampionsMinimal']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions-playable-count': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampionsPlayableCount']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions/{championId}': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionId']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId']
  }
  '/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsBySkinIdChromas']
  }
  '/lol-champions/v1/inventories/{summonerId}/skins-minimal': {
    get: LcuOperations['GetLolChampionsV1InventoriesBySummonerIdSkinsMinimal']
  }
  '/lol-champions/v1/owned-champions-minimal': {
    get: LcuOperations['GetLolChampionsV1OwnedChampionsMinimal']
  }
  '/lol-chat/v1/blocked-players': {
    get: LcuOperations['GetLolChatV1BlockedPlayers']
    post: LcuOperations['PostLolChatV1BlockedPlayers']
  }
  '/lol-chat/v1/blocked-players/{id}': {
    get: LcuOperations['GetLolChatV1BlockedPlayersById']
    delete: LcuOperations['DeleteLolChatV1BlockedPlayersById']
  }
  '/lol-chat/v1/config': {
    get: LcuOperations['GetLolChatV1Config']
  }
  '/lol-chat/v1/conversations': {
    get: LcuOperations['GetLolChatV1Conversations']
    post: LcuOperations['PostLolChatV1Conversations']
  }
  '/lol-chat/v1/conversations/{id}': {
    get: LcuOperations['GetLolChatV1ConversationsById']
    put: LcuOperations['PutLolChatV1ConversationsById']
    delete: LcuOperations['DeleteLolChatV1ConversationsById']
  }
  '/lol-chat/v1/conversations/{id}/closed': {
    put: LcuOperations['PutLolChatV1ConversationsByIdClosed']
    post: LcuOperations['PostLolChatV1ConversationsByIdClosed']
  }
  '/lol-chat/v1/conversations/{id}/messages': {
    get: LcuOperations['GetLolChatV1ConversationsByIdMessages']
    post: LcuOperations['PostLolChatV1ConversationsByIdMessages']
    delete: LcuOperations['DeleteLolChatV1ConversationsByIdMessages']
  }
  '/lol-chat/v1/conversations/{id}/participants': {
    get: LcuOperations['GetLolChatV1ConversationsByIdParticipants']
    post: LcuOperations['PostLolChatV1ConversationsByIdParticipants']
  }
  '/lol-chat/v1/conversations/{id}/participants/{pid}': {
    get: LcuOperations['GetLolChatV1ConversationsByIdParticipantsByPid']
  }
  '/lol-chat/v1/conversations/active': {
    get: LcuOperations['GetLolChatV1ConversationsActive']
    put: LcuOperations['PutLolChatV1ConversationsActive']
    delete: LcuOperations['DeleteLolChatV1ConversationsActive']
  }
  '/lol-chat/v1/conversations/notify': {
    get: LcuOperations['GetLolChatV1ConversationsNotify']
  }
  '/lol-chat/v1/errors': {
    get: LcuOperations['GetLolChatV1Errors']
  }
  '/lol-chat/v1/errors/{id}': {
    delete: LcuOperations['DeleteLolChatV1ErrorsById']
  }
  '/lol-chat/v1/friend-counts': {
    get: LcuOperations['GetLolChatV1FriendCounts']
  }
  '/lol-chat/v1/friend-exists/{summonerId}': {
    get: LcuOperations['GetLolChatV1FriendExistsBySummonerId']
  }
  '/lol-chat/v1/friend-groups': {
    get: LcuOperations['GetLolChatV1FriendGroups']
    post: LcuOperations['PostLolChatV1FriendGroups']
  }
  '/lol-chat/v1/friend-groups/{id}': {
    get: LcuOperations['GetLolChatV1FriendGroupsById']
    put: LcuOperations['PutLolChatV1FriendGroupsById']
    delete: LcuOperations['DeleteLolChatV1FriendGroupsById']
  }
  '/lol-chat/v1/friend-groups/{id}/friends': {
    get: LcuOperations['GetLolChatV1FriendGroupsByIdFriends']
  }
  '/lol-chat/v1/friend-groups/order': {
    put: LcuOperations['PutLolChatV1FriendGroupsOrder']
  }
  '/lol-chat/v1/friend-requests': {
    get: LcuOperations['GetLolChatV1FriendRequests']
    post: LcuOperations['PostLolChatV1FriendRequests']
  }
  '/lol-chat/v1/friend-requests/{id}': {
    put: LcuOperations['PutLolChatV1FriendRequestsById']
    delete: LcuOperations['DeleteLolChatV1FriendRequestsById']
  }
  '/lol-chat/v1/friends': {
    get: LcuOperations['GetLolChatV1Friends']
  }
  '/lol-chat/v1/friends/{id}': {
    get: LcuOperations['GetLolChatV1FriendsById']
    put: LcuOperations['PutLolChatV1FriendsById']
    delete: LcuOperations['DeleteLolChatV1FriendsById']
  }
  '/lol-chat/v1/me': {
    get: LcuOperations['GetLolChatV1Me']
    put: LcuOperations['PutLolChatV1Me']
  }
  '/lol-chat/v1/resources': {
    get: LcuOperations['GetLolChatV1Resources']
  }
  '/lol-chat/v1/session': {
    get: LcuOperations['GetLolChatV1Session']
    delete: LcuOperations['DeleteLolChatV1Session']
  }
  '/lol-chat/v1/session/plain': {
    post: LcuOperations['PostLolChatV1SessionPlain']
  }
  '/lol-chat/v1/session/rso': {
    post: LcuOperations['PostLolChatV1SessionRso']
  }
  '/lol-chat/v1/settings': {
    get: LcuOperations['GetLolChatV1Settings']
    put: LcuOperations['PutLolChatV1Settings']
  }
  '/lol-chat/v1/settings/{key}': {
    get: LcuOperations['GetLolChatV1SettingsByKey']
    put: LcuOperations['PutLolChatV1SettingsByKey']
    delete: LcuOperations['DeleteLolChatV1SettingsByKey']
  }
  '/lol-clash/v1/all-tournaments': {
    get: LcuOperations['GetLolClashV1AllTournaments']
  }
  '/lol-clash/v1/bracket/{bracketId}': {
    get: LcuOperations['GetLolClashV1BracketByBracketId']
  }
  '/lol-clash/v1/checkin-allowed': {
    get: LcuOperations['GetLolClashV1CheckinAllowed']
  }
  '/lol-clash/v1/currentTournamentIds': {
    get: LcuOperations['GetLolClashV1CurrentTournamentIds']
  }
  '/lol-clash/v1/disabled-config': {
    get: LcuOperations['GetLolClashV1DisabledConfig']
  }
  '/lol-clash/v1/enabled': {
    get: LcuOperations['GetLolClashV1Enabled']
  }
  '/lol-clash/v1/eog-player-update': {
    get: LcuOperations['GetLolClashV1EogPlayerUpdate']
  }
  '/lol-clash/v1/eog-player-update/acknowledge': {
    post: LcuOperations['PostLolClashV1EogPlayerUpdateAcknowledge']
  }
  '/lol-clash/v1/event/{uuid}': {
    get: LcuOperations['GetLolClashV1EventByUuid']
  }
  '/lol-clash/v1/events': {
    post: LcuOperations['PostLolClashV1Events']
  }
  '/lol-clash/v1/game-end': {
    get: LcuOperations['GetLolClashV1GameEnd']
  }
  '/lol-clash/v1/game-end/acknowledge': {
    post: LcuOperations['PostLolClashV1GameEndAcknowledge']
  }
  '/lol-clash/v1/historyandwinners': {
    get: LcuOperations['GetLolClashV1Historyandwinners']
  }
  '/lol-clash/v1/iconconfig': {
    get: LcuOperations['GetLolClashV1Iconconfig']
  }
  '/lol-clash/v1/invited-roster-ids': {
    get: LcuOperations['GetLolClashV1InvitedRosterIds']
  }
  '/lol-clash/v1/lft/player': {
    post: LcuOperations['PostLolClashV1LftPlayer']
  }
  '/lol-clash/v1/lft/player/find': {
    post: LcuOperations['PostLolClashV1LftPlayerFind']
  }
  '/lol-clash/v1/lft/team': {
    post: LcuOperations['PostLolClashV1LftTeam']
  }
  '/lol-clash/v1/lft/team/{rosterId}/request': {
    post: LcuOperations['PostLolClashV1LftTeamByRosterIdRequest']
  }
  '/lol-clash/v1/lft/team/fetch-requests': {
    post: LcuOperations['PostLolClashV1LftTeamFetchRequests']
  }
  '/lol-clash/v1/lft/team/find': {
    post: LcuOperations['PostLolClashV1LftTeamFind']
  }
  '/lol-clash/v1/lft/team/requests': {
    get: LcuOperations['GetLolClashV1LftTeamRequests']
  }
  '/lol-clash/v1/notifications': {
    get: LcuOperations['GetLolClashV1Notifications']
  }
  '/lol-clash/v1/notifications/acknowledge': {
    post: LcuOperations['PostLolClashV1NotificationsAcknowledge']
  }
  '/lol-clash/v1/ping': {
    get: LcuOperations['GetLolClashV1Ping']
  }
  '/lol-clash/v1/player': {
    get: LcuOperations['GetLolClashV1Player']
  }
  '/lol-clash/v1/player/chat-rosters': {
    get: LcuOperations['GetLolClashV1PlayerChatRosters']
  }
  '/lol-clash/v1/player/history': {
    get: LcuOperations['GetLolClashV1PlayerHistory']
  }
  '/lol-clash/v1/playmode-restricted': {
    get: LcuOperations['GetLolClashV1PlaymodeRestricted']
  }
  '/lol-clash/v1/ready': {
    get: LcuOperations['GetLolClashV1Ready']
  }
  '/lol-clash/v1/refresh': {
    post: LcuOperations['PostLolClashV1Refresh']
  }
  '/lol-clash/v1/rewards': {
    get: LcuOperations['GetLolClashV1Rewards']
  }
  '/lol-clash/v1/roster/{rosterId}': {
    get: LcuOperations['GetLolClashV1RosterByRosterId']
  }
  '/lol-clash/v1/roster/{rosterId}/accept': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdAccept']
  }
  '/lol-clash/v1/roster/{rosterId}/cancel-withdraw': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdCancelWithdraw']
  }
  '/lol-clash/v1/roster/{rosterId}/change-all-details': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdChangeAllDetails']
  }
  '/lol-clash/v1/roster/{rosterId}/change-icon': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdChangeIcon']
  }
  '/lol-clash/v1/roster/{rosterId}/change-name': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdChangeName']
  }
  '/lol-clash/v1/roster/{rosterId}/change-short-name': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdChangeShortName']
  }
  '/lol-clash/v1/roster/{rosterId}/decline': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdDecline']
  }
  '/lol-clash/v1/roster/{rosterId}/disband': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdDisband']
  }
  '/lol-clash/v1/roster/{rosterId}/invite': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdInvite']
  }
  '/lol-clash/v1/roster/{rosterId}/kick': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdKick']
  }
  '/lol-clash/v1/roster/{rosterId}/leave': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdLeave']
  }
  '/lol-clash/v1/roster/{rosterId}/lockin': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdLockin']
  }
  '/lol-clash/v1/roster/{rosterId}/set-position': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSetPosition']
  }
  '/lol-clash/v1/roster/{rosterId}/set-ticket': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSetTicket']
  }
  '/lol-clash/v1/roster/{rosterId}/stats': {
    get: LcuOperations['GetLolClashV1RosterByRosterIdStats']
  }
  '/lol-clash/v1/roster/{rosterId}/substitute/{summonerId}/revoke': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSubstituteBySummonerIdRevoke']
  }
  '/lol-clash/v1/roster/{rosterId}/substitute/accept': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSubstituteAccept']
  }
  '/lol-clash/v1/roster/{rosterId}/substitute/decline': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSubstituteDecline']
  }
  '/lol-clash/v1/roster/{rosterId}/substitute/invite': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSubstituteInvite']
  }
  '/lol-clash/v1/roster/{rosterId}/substitute/reclaim': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSubstituteReclaim']
  }
  '/lol-clash/v1/roster/{rosterId}/suggest': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSuggest']
  }
  '/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSuggestBySummonerIdAccept']
  }
  '/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSuggestBySummonerIdDecline']
  }
  '/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdSuggestBySummonerIdRevoke']
  }
  '/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdAccept']
  }
  '/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdDecline']
  }
  '/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdOffer']
  }
  '/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdRevoke']
  }
  '/lol-clash/v1/roster/{rosterId}/transfer-captain': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdTransferCaptain']
  }
  '/lol-clash/v1/roster/{rosterId}/unlockin': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdUnlockin']
  }
  '/lol-clash/v1/roster/{rosterId}/unwithdraw': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdUnwithdraw']
  }
  '/lol-clash/v1/roster/{rosterId}/update-logos': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdUpdateLogos']
  }
  '/lol-clash/v1/roster/{rosterId}/withdraw': {
    post: LcuOperations['PostLolClashV1RosterByRosterIdWithdraw']
  }
  '/lol-clash/v1/scouting/champions': {
    get: LcuOperations['GetLolClashV1ScoutingChampions']
  }
  '/lol-clash/v1/scouting/matchhistory': {
    get: LcuOperations['GetLolClashV1ScoutingMatchhistory']
  }
  '/lol-clash/v1/season-rewards/{seasonId}': {
    get: LcuOperations['GetLolClashV1SeasonRewardsBySeasonId']
  }
  '/lol-clash/v1/simple-state-flags': {
    get: LcuOperations['GetLolClashV1SimpleStateFlags']
  }
  '/lol-clash/v1/simple-state-flags/{id}/acknowledge': {
    post: LcuOperations['PostLolClashV1SimpleStateFlagsByIdAcknowledge']
  }
  '/lol-clash/v1/thirdparty/team-data': {
    get: LcuOperations['GetLolClashV1ThirdpartyTeamData']
  }
  '/lol-clash/v1/time': {
    get: LcuOperations['GetLolClashV1Time']
  }
  '/lol-clash/v1/tournament-state-info': {
    get: LcuOperations['GetLolClashV1TournamentStateInfo']
  }
  '/lol-clash/v1/tournament-summary': {
    get: LcuOperations['GetLolClashV1TournamentSummary']
  }
  '/lol-clash/v1/tournament/{tournamentId}': {
    get: LcuOperations['GetLolClashV1TournamentByTournamentId']
  }
  '/lol-clash/v1/tournament/{tournamentId}/create-roster': {
    post: LcuOperations['PostLolClashV1TournamentByTournamentIdCreateRoster']
  }
  '/lol-clash/v1/tournament/{tournamentId}/get-player-tiers': {
    get: LcuOperations['GetLolClashV1TournamentByTournamentIdGetPlayerTiers']
  }
  '/lol-clash/v1/tournament/{tournamentId}/player': {
    get: LcuOperations['GetLolClashV1TournamentByTournamentIdPlayer']
  }
  '/lol-clash/v1/tournament/{tournamentId}/player-honor-restricted': {
    get: LcuOperations['GetLolClashV1TournamentByTournamentIdPlayerHonorRestricted']
  }
  '/lol-clash/v1/tournament/{tournamentId}/stateInfo': {
    get: LcuOperations['GetLolClashV1TournamentByTournamentIdStateInfo']
  }
  '/lol-clash/v1/tournament/{tournamentId}/winners': {
    get: LcuOperations['GetLolClashV1TournamentByTournamentIdWinners']
  }
  '/lol-clash/v1/tournament/cancelled': {
    get: LcuOperations['GetLolClashV1TournamentCancelled']
  }
  '/lol-clash/v1/tournament/get-all-player-tiers': {
    get: LcuOperations['GetLolClashV1TournamentGetAllPlayerTiers']
  }
  '/lol-clash/v1/update-logos': {
    post: LcuOperations['PostLolClashV1UpdateLogos']
  }
  '/lol-clash/v1/visible': {
    get: LcuOperations['GetLolClashV1Visible']
  }
  '/lol-clash/v1/voice': {
    post: LcuOperations['PostLolClashV1Voice']
    delete: LcuOperations['DeleteLolClashV1Voice']
  }
  '/lol-clash/v1/voice-delay/{delaySeconds}': {
    post: LcuOperations['PostLolClashV1VoiceDelayByDelaySeconds']
    delete: LcuOperations['DeleteLolClashV1VoiceDelayByDelaySeconds']
  }
  '/lol-clash/v1/voice-enabled': {
    get: LcuOperations['GetLolClashV1VoiceEnabled']
  }
  '/lol-clash/v2/playmode-restricted': {
    get: LcuOperations['GetLolClashV2PlaymodeRestricted']
  }
  '/lol-client-config/v3/client-config/{name}': {
    get: LcuOperations['GetLolClientConfigV3ClientConfigByName']
  }
  '/lol-collections/v1/inventories/{summonerId}/backdrop': {
    get: LcuOperations['GetLolCollectionsV1InventoriesBySummonerIdBackdrop']
  }
  '/lol-collections/v1/inventories/{summonerId}/champion-mastery': {
    get: LcuOperations['GetLolCollectionsV1InventoriesBySummonerIdChampionMastery']
  }
  '/lol-collections/v1/inventories/{summonerId}/champion-mastery/top': {
    get: LcuOperations['GetLolCollectionsV1InventoriesBySummonerIdChampionMasteryTop']
  }
  '/lol-collections/v1/inventories/{summonerId}/spells': {
    get: LcuOperations['GetLolCollectionsV1InventoriesBySummonerIdSpells']
  }
  '/lol-collections/v1/inventories/{summonerId}/verification': {
    put: LcuOperations['PutLolCollectionsV1InventoriesBySummonerIdVerification']
  }
  '/lol-collections/v1/inventories/{summonerId}/ward-skins': {
    get: LcuOperations['GetLolCollectionsV1InventoriesBySummonerIdWardSkins']
  }
  '/lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}': {
    get: LcuOperations['GetLolCollectionsV1InventoriesBySummonerIdWardSkinsByWardSkinId']
  }
  '/lol-collections/v1/inventories/chest-eligibility': {
    get: LcuOperations['GetLolCollectionsV1InventoriesChestEligibility']
  }
  '/lol-collections/v1/inventories/local-player/champion-mastery-score': {
    get: LcuOperations['GetLolCollectionsV1InventoriesLocalPlayerChampionMasteryScore']
  }
  '/lol-collections/v1/inventories/scouting': {
    get: LcuOperations['GetLolCollectionsV1InventoriesScouting']
  }
  '/lol-content-targeting/v1/filters': {
    get: LcuOperations['GetLolContentTargetingV1Filters']
  }
  '/lol-content-targeting/v1/locale': {
    get: LcuOperations['GetLolContentTargetingV1Locale']
  }
  '/lol-content-targeting/v1/protected_filters': {
    get: LcuOperations['GetLolContentTargetingV1ProtectedFilters']
  }
  '/lol-content-targeting/v1/tft_experiment_bucket': {
    put: LcuOperations['PutLolContentTargetingV1TftExperimentBucket']
  }
  '/lol-cosmetics/v1/inventories/{setName}/companions': {
    get: LcuOperations['GetLolCosmeticsV1InventoriesBySetNameCompanions']
  }
  '/lol-cosmetics/v1/inventories/{setName}/damage-skins': {
    get: LcuOperations['GetLolCosmeticsV1InventoriesBySetNameDamageSkins']
  }
  '/lol-cosmetics/v1/inventories/{setName}/map-skins': {
    get: LcuOperations['GetLolCosmeticsV1InventoriesBySetNameMapSkins']
  }
  '/lol-cosmetics/v1/recent/{type}': {
    patch: LcuOperations['PatchLolCosmeticsV1RecentByType']
  }
  '/lol-cosmetics/v1/selection/companion': {
    put: LcuOperations['PutLolCosmeticsV1SelectionCompanion']
    delete: LcuOperations['DeleteLolCosmeticsV1SelectionCompanion']
  }
  '/lol-cosmetics/v1/selection/tft-damage-skin': {
    put: LcuOperations['PutLolCosmeticsV1SelectionTftDamageSkin']
    delete: LcuOperations['DeleteLolCosmeticsV1SelectionTftDamageSkin']
  }
  '/lol-cosmetics/v1/selection/tft-map-skin': {
    put: LcuOperations['PutLolCosmeticsV1SelectionTftMapSkin']
    delete: LcuOperations['DeleteLolCosmeticsV1SelectionTftMapSkin']
  }
  '/lol-email-verification/v1/confirm-email': {
    post: LcuOperations['PostLolEmailVerificationV1ConfirmEmail']
  }
  '/lol-email-verification/v1/email': {
    get: LcuOperations['GetLolEmailVerificationV1Email']
    put: LcuOperations['PutLolEmailVerificationV1Email']
  }
  '/lol-end-of-game/v1/champion-mastery-updates': {
    get: LcuOperations['GetLolEndOfGameV1ChampionMasteryUpdates']
  }
  '/lol-end-of-game/v1/eog-stats-block': {
    get: LcuOperations['GetLolEndOfGameV1EogStatsBlock']
  }
  '/lol-end-of-game/v1/gameclient-eog-stats-block': {
    get: LcuOperations['GetLolEndOfGameV1GameclientEogStatsBlock']
    post: LcuOperations['PostLolEndOfGameV1GameclientEogStatsBlock']
  }
  '/lol-end-of-game/v1/reported-players': {
    get: LcuOperations['GetLolEndOfGameV1ReportedPlayers']
  }
  '/lol-end-of-game/v1/state/dismiss-stats': {
    post: LcuOperations['PostLolEndOfGameV1StateDismissStats']
  }
  '/lol-end-of-game/v1/tft-eog-stats': {
    get: LcuOperations['GetLolEndOfGameV1TftEogStats']
  }
  '/lol-end-of-game/v2/player-complaints': {
    post: LcuOperations['PostLolEndOfGameV2PlayerComplaints']
  }
  '/lol-esport-stream-notifications/v1/live-streams': {
    get: LcuOperations['GetLolEsportStreamNotificationsV1LiveStreams']
  }
  '/lol-esport-stream-notifications/v1/send-stats': {
    post: LcuOperations['PostLolEsportStreamNotificationsV1SendStats']
  }
  '/lol-esport-stream-notifications/v1/stream-url': {
    get: LcuOperations['GetLolEsportStreamNotificationsV1StreamUrl']
  }
  '/lol-game-client-chat/v1/buddies': {
    get: LcuOperations['GetLolGameClientChatV1Buddies']
  }
  '/lol-game-client-chat/v1/ignored-summoners': {
    get: LcuOperations['GetLolGameClientChatV1IgnoredSummoners']
  }
  '/lol-game-client-chat/v1/instant-messages': {
    post: LcuOperations['PostLolGameClientChatV1InstantMessages']
  }
  '/lol-game-client-chat/v1/muted-summoners': {
    get: LcuOperations['GetLolGameClientChatV1MutedSummoners']
  }
  '/lol-game-client-chat/v1/party-messages': {
    post: LcuOperations['PostLolGameClientChatV1PartyMessages']
  }
  '/lol-game-queues/v1/custom': {
    get: LcuOperations['GetLolGameQueuesV1Custom']
  }
  '/lol-game-queues/v1/custom-non-default': {
    get: LcuOperations['GetLolGameQueuesV1CustomNonDefault']
  }
  '/lol-game-queues/v1/game-type-config/{gameTypeConfigId}': {
    get: LcuOperations['GetLolGameQueuesV1GameTypeConfigByGameTypeConfigId']
  }
  '/lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}': {
    get: LcuOperations['GetLolGameQueuesV1GameTypeConfigByGameTypeConfigIdMapByMapId']
  }
  '/lol-game-queues/v1/queues': {
    get: LcuOperations['GetLolGameQueuesV1Queues']
  }
  '/lol-game-queues/v1/queues/{id}': {
    get: LcuOperations['GetLolGameQueuesV1QueuesById']
  }
  '/lol-game-queues/v1/queues/type/{queueType}': {
    get: LcuOperations['GetLolGameQueuesV1QueuesTypeByQueueType']
  }
  '/lol-game-settings/v1/didreset': {
    get: LcuOperations['GetLolGameSettingsV1Didreset']
  }
  '/lol-game-settings/v1/game-settings': {
    get: LcuOperations['GetLolGameSettingsV1GameSettings']
    patch: LcuOperations['PatchLolGameSettingsV1GameSettings']
  }
  '/lol-game-settings/v1/game-settings-schema': {
    get: LcuOperations['GetLolGameSettingsV1GameSettingsSchema']
  }
  '/lol-game-settings/v1/input-settings': {
    get: LcuOperations['GetLolGameSettingsV1InputSettings']
    patch: LcuOperations['PatchLolGameSettingsV1InputSettings']
  }
  '/lol-game-settings/v1/input-settings-schema': {
    get: LcuOperations['GetLolGameSettingsV1InputSettingsSchema']
  }
  '/lol-game-settings/v1/ready': {
    get: LcuOperations['GetLolGameSettingsV1Ready']
  }
  '/lol-game-settings/v1/reload-post-game': {
    post: LcuOperations['PostLolGameSettingsV1ReloadPostGame']
  }
  '/lol-game-settings/v1/save': {
    post: LcuOperations['PostLolGameSettingsV1Save']
  }
  '/lol-gameflow/v1/ack-failed-to-launch': {
    post: LcuOperations['PostLolGameflowV1AckFailedToLaunch']
  }
  '/lol-gameflow/v1/active-patcher-lock': {
    get: LcuOperations['GetLolGameflowV1ActivePatcherLock']
  }
  '/lol-gameflow/v1/availability': {
    get: LcuOperations['GetLolGameflowV1Availability']
  }
  '/lol-gameflow/v1/basic-tutorial': {
    get: LcuOperations['GetLolGameflowV1BasicTutorial']
  }
  '/lol-gameflow/v1/basic-tutorial/start': {
    post: LcuOperations['PostLolGameflowV1BasicTutorialStart']
  }
  '/lol-gameflow/v1/battle-training': {
    get: LcuOperations['GetLolGameflowV1BattleTraining']
  }
  '/lol-gameflow/v1/battle-training/start': {
    post: LcuOperations['PostLolGameflowV1BattleTrainingStart']
  }
  '/lol-gameflow/v1/battle-training/stop': {
    post: LcuOperations['PostLolGameflowV1BattleTrainingStop']
  }
  '/lol-gameflow/v1/client-received-message': {
    post: LcuOperations['PostLolGameflowV1ClientReceivedMessage']
  }
  '/lol-gameflow/v1/early-exit': {
    post: LcuOperations['PostLolGameflowV1EarlyExit']
  }
  '/lol-gameflow/v1/early-exit-notifications/eog': {
    get: LcuOperations['GetLolGameflowV1EarlyExitNotificationsEog']
    delete: LcuOperations['DeleteLolGameflowV1EarlyExitNotificationsEog']
  }
  '/lol-gameflow/v1/early-exit-notifications/eog/{key}': {
    delete: LcuOperations['DeleteLolGameflowV1EarlyExitNotificationsEogByKey']
  }
  '/lol-gameflow/v1/early-exit-notifications/missions': {
    get: LcuOperations['GetLolGameflowV1EarlyExitNotificationsMissions']
    delete: LcuOperations['DeleteLolGameflowV1EarlyExitNotificationsMissions']
  }
  '/lol-gameflow/v1/early-exit-notifications/missions/{key}': {
    delete: LcuOperations['DeleteLolGameflowV1EarlyExitNotificationsMissionsByKey']
  }
  '/lol-gameflow/v1/extra-game-client-args': {
    get: LcuOperations['GetLolGameflowV1ExtraGameClientArgs']
    post: LcuOperations['PostLolGameflowV1ExtraGameClientArgs']
  }
  '/lol-gameflow/v1/gameflow-metadata/player-status': {
    get: LcuOperations['GetLolGameflowV1GameflowMetadataPlayerStatus']
    post: LcuOperations['PostLolGameflowV1GameflowMetadataPlayerStatus']
  }
  '/lol-gameflow/v1/gameflow-metadata/registration-status': {
    get: LcuOperations['GetLolGameflowV1GameflowMetadataRegistrationStatus']
    post: LcuOperations['PostLolGameflowV1GameflowMetadataRegistrationStatus']
  }
  '/lol-gameflow/v1/gameflow-phase': {
    get: LcuOperations['GetLolGameflowV1GameflowPhase']
  }
  '/lol-gameflow/v1/pre-end-game-transition': {
    post: LcuOperations['PostLolGameflowV1PreEndGameTransition']
  }
  '/lol-gameflow/v1/reconnect': {
    post: LcuOperations['PostLolGameflowV1Reconnect']
  }
  '/lol-gameflow/v1/session': {
    get: LcuOperations['GetLolGameflowV1Session']
  }
  '/lol-gameflow/v1/session/dodge': {
    post: LcuOperations['PostLolGameflowV1SessionDodge']
  }
  '/lol-gameflow/v1/session/event': {
    post: LcuOperations['PostLolGameflowV1SessionEvent']
  }
  '/lol-gameflow/v1/session/game-configuration': {
    post: LcuOperations['PostLolGameflowV1SessionGameConfiguration']
  }
  '/lol-gameflow/v1/session/per-position-summoner-spells/disallowed': {
    get: LcuOperations['GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowed']
  }
  '/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string': {
    get: LcuOperations['GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowedAsString']
  }
  '/lol-gameflow/v1/session/per-position-summoner-spells/required': {
    get: LcuOperations['GetLolGameflowV1SessionPerPositionSummonerSpellsRequired']
  }
  '/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string': {
    get: LcuOperations['GetLolGameflowV1SessionPerPositionSummonerSpellsRequiredAsString']
  }
  '/lol-gameflow/v1/session/request-enter-gameflow': {
    post: LcuOperations['PostLolGameflowV1SessionRequestEnterGameflow']
  }
  '/lol-gameflow/v1/session/request-lobby': {
    post: LcuOperations['PostLolGameflowV1SessionRequestLobby']
  }
  '/lol-gameflow/v1/session/request-tournament-checkin': {
    post: LcuOperations['PostLolGameflowV1SessionRequestTournamentCheckin']
  }
  '/lol-gameflow/v1/session/tournament-ended': {
    post: LcuOperations['PostLolGameflowV1SessionTournamentEnded']
  }
  '/lol-gameflow/v1/spectate': {
    get: LcuOperations['GetLolGameflowV1Spectate']
  }
  '/lol-gameflow/v1/spectate/delayed-launch': {
    get: LcuOperations['GetLolGameflowV1SpectateDelayedLaunch']
  }
  '/lol-gameflow/v1/spectate/launch': {
    post: LcuOperations['PostLolGameflowV1SpectateLaunch']
  }
  '/lol-gameflow/v1/spectate/quit': {
    post: LcuOperations['PostLolGameflowV1SpectateQuit']
  }
  '/lol-gameflow/v1/tick': {
    post: LcuOperations['PostLolGameflowV1Tick']
  }
  '/lol-gameflow/v1/watch': {
    get: LcuOperations['GetLolGameflowV1Watch']
  }
  '/lol-gameflow/v1/watch/launch': {
    post: LcuOperations['PostLolGameflowV1WatchLaunch']
  }
  '/lol-gameflow/v2/spectate/launch': {
    post: LcuOperations['PostLolGameflowV2SpectateLaunch']
  }
  '/lol-geoinfo/v1/getlocation': {
    get: LcuOperations['GetLolGeoinfoV1Getlocation']
  }
  '/lol-geoinfo/v1/whereami': {
    get: LcuOperations['GetLolGeoinfoV1Whereami']
  }
  '/lol-highlights/v1/config': {
    get: LcuOperations['GetLolHighlightsV1Config']
  }
  '/lol-highlights/v1/file-browser/{highlightId}': {
    post: LcuOperations['PostLolHighlightsV1FileBrowserByHighlightId']
  }
  '/lol-highlights/v1/highlights': {
    get: LcuOperations['GetLolHighlightsV1Highlights']
    post: LcuOperations['PostLolHighlightsV1Highlights']
  }
  '/lol-highlights/v1/highlights-folder-path': {
    get: LcuOperations['GetLolHighlightsV1HighlightsFolderPath']
  }
  '/lol-highlights/v1/highlights-folder-path/default': {
    get: LcuOperations['GetLolHighlightsV1HighlightsFolderPathDefault']
  }
  '/lol-highlights/v1/highlights/{id}': {
    get: LcuOperations['GetLolHighlightsV1HighlightsById']
    put: LcuOperations['PutLolHighlightsV1HighlightsById']
    delete: LcuOperations['DeleteLolHighlightsV1HighlightsById']
  }
  '/lol-honor-v2/v1/ballot': {
    get: LcuOperations['GetLolHonorV2V1Ballot']
  }
  '/lol-honor-v2/v1/config': {
    get: LcuOperations['GetLolHonorV2V1Config']
  }
  '/lol-honor-v2/v1/honor-player': {
    post: LcuOperations['PostLolHonorV2V1HonorPlayer']
  }
  '/lol-honor-v2/v1/late-recognition': {
    get: LcuOperations['GetLolHonorV2V1LateRecognition']
  }
  '/lol-honor-v2/v1/late-recognition/ack': {
    post: LcuOperations['PostLolHonorV2V1LateRecognitionAck']
  }
  '/lol-honor-v2/v1/latest-eligible-game': {
    get: LcuOperations['GetLolHonorV2V1LatestEligibleGame']
  }
  '/lol-honor-v2/v1/level-change': {
    get: LcuOperations['GetLolHonorV2V1LevelChange']
  }
  '/lol-honor-v2/v1/level-change/ack': {
    post: LcuOperations['PostLolHonorV2V1LevelChangeAck']
  }
  '/lol-honor-v2/v1/mutual-honor': {
    get: LcuOperations['GetLolHonorV2V1MutualHonor']
  }
  '/lol-honor-v2/v1/mutual-honor/ack': {
    post: LcuOperations['PostLolHonorV2V1MutualHonorAck']
  }
  '/lol-honor-v2/v1/profile': {
    get: LcuOperations['GetLolHonorV2V1Profile']
  }
  '/lol-honor-v2/v1/recognition': {
    get: LcuOperations['GetLolHonorV2V1Recognition']
  }
  '/lol-honor-v2/v1/reward-granted': {
    get: LcuOperations['GetLolHonorV2V1RewardGranted']
  }
  '/lol-honor-v2/v1/reward-granted/ack': {
    post: LcuOperations['PostLolHonorV2V1RewardGrantedAck']
  }
  '/lol-honor-v2/v1/team-choices': {
    get: LcuOperations['GetLolHonorV2V1TeamChoices']
  }
  '/lol-honor-v2/v1/vote-completion': {
    get: LcuOperations['GetLolHonorV2V1VoteCompletion']
  }
  '/lol-hovercard/v1/friend-info-by-summoner/{summonerId}': {
    get: LcuOperations['GetLolHovercardV1FriendInfoBySummonerBySummonerId']
  }
  '/lol-hovercard/v1/friend-info/{puuid}': {
    get: LcuOperations['GetLolHovercardV1FriendInfoByPuuid']
  }
  '/lol-inventory/v1/champSelectInventory': {
    get: LcuOperations['GetLolInventoryV1ChampSelectInventory']
  }
  '/lol-inventory/v1/initial-configuration-complete': {
    get: LcuOperations['GetLolInventoryV1InitialConfigurationComplete']
  }
  '/lol-inventory/v1/inventory': {
    get: LcuOperations['GetLolInventoryV1Inventory']
  }
  '/lol-inventory/v1/inventory/emotes': {
    get: LcuOperations['GetLolInventoryV1InventoryEmotes']
  }
  '/lol-inventory/v1/notification/acknowledge': {
    post: LcuOperations['PostLolInventoryV1NotificationAcknowledge']
  }
  '/lol-inventory/v1/notifications/{inventoryType}': {
    get: LcuOperations['GetLolInventoryV1NotificationsByInventoryType']
  }
  '/lol-inventory/v1/players/{puuid}/inventory': {
    get: LcuOperations['GetLolInventoryV1PlayersByPuuidInventory']
  }
  '/lol-inventory/v1/signedInventory': {
    get: LcuOperations['GetLolInventoryV1SignedInventory']
  }
  '/lol-inventory/v1/signedInventory/simple': {
    get: LcuOperations['GetLolInventoryV1SignedInventorySimple']
  }
  '/lol-inventory/v1/signedInventory/tournamentlogos': {
    get: LcuOperations['GetLolInventoryV1SignedInventoryTournamentlogos']
  }
  '/lol-inventory/v1/signedInventoryCache': {
    get: LcuOperations['GetLolInventoryV1SignedInventoryCache']
  }
  '/lol-inventory/v1/signedWallet': {
    get: LcuOperations['GetLolInventoryV1SignedWallet']
  }
  '/lol-inventory/v1/signedWallet/{currencyType}': {
    get: LcuOperations['GetLolInventoryV1SignedWalletByCurrencyType']
  }
  '/lol-inventory/v1/wallet': {
    get: LcuOperations['GetLolInventoryV1Wallet']
  }
  '/lol-inventory/v1/wallet/{currencyType}': {
    get: LcuOperations['GetLolInventoryV1WalletByCurrencyType']
  }
  '/lol-inventory/v2/inventory/{inventoryType}': {
    get: LcuOperations['GetLolInventoryV2InventoryByInventoryType']
  }
  '/lol-item-sets/v1/item-sets/{summonerId}/sets': {
    get: LcuOperations['GetLolItemSetsV1ItemSetsBySummonerIdSets']
    put: LcuOperations['PutLolItemSetsV1ItemSetsBySummonerIdSets']
    post: LcuOperations['PostLolItemSetsV1ItemSetsBySummonerIdSets']
  }
  '/lol-item-sets/v1/item-sets/{summonerId}/validate': {
    post: LcuOperations['PostLolItemSetsV1ItemSetsBySummonerIdValidate']
  }
  '/lol-kickout/v1/notification': {
    get: LcuOperations['GetLolKickoutV1Notification']
  }
  '/lol-kr-playtime-reminder/v1/message': {
    get: LcuOperations['GetLolKrPlaytimeReminderV1Message']
  }
  '/lol-kr-playtime-reminder/v1/playtime': {
    get: LcuOperations['GetLolKrPlaytimeReminderV1Playtime']
  }
  '/lol-kr-shutdown-law/v1/custom-status': {
    get: LcuOperations['GetLolKrShutdownLawV1CustomStatus']
  }
  '/lol-kr-shutdown-law/v1/disabled-queues': {
    get: LcuOperations['GetLolKrShutdownLawV1DisabledQueues']
  }
  '/lol-kr-shutdown-law/v1/notification': {
    get: LcuOperations['GetLolKrShutdownLawV1Notification']
  }
  '/lol-kr-shutdown-law/v1/queue-status/{queue_id}': {
    get: LcuOperations['GetLolKrShutdownLawV1QueueStatusByQueueId']
  }
  '/lol-kr-shutdown-law/v1/rating-screen': {
    get: LcuOperations['GetLolKrShutdownLawV1RatingScreen']
  }
  '/lol-kr-shutdown-law/v1/rating-screen/acknowledge': {
    post: LcuOperations['PostLolKrShutdownLawV1RatingScreenAcknowledge']
  }
  '/lol-kr-shutdown-law/v1/status': {
    get: LcuOperations['GetLolKrShutdownLawV1Status']
  }
  '/lol-league-session/v1/league-session-token': {
    get: LcuOperations['GetLolLeagueSessionV1LeagueSessionToken']
  }
  '/lol-leaver-buster/v1/notifications': {
    get: LcuOperations['GetLolLeaverBusterV1Notifications']
  }
  '/lol-leaver-buster/v1/notifications/{id}': {
    get: LcuOperations['GetLolLeaverBusterV1NotificationsById']
    delete: LcuOperations['DeleteLolLeaverBusterV1NotificationsById']
  }
  '/lol-license-agreement/v1/agreements': {
    get: LcuOperations['GetLolLicenseAgreementV1Agreements']
  }
  '/lol-license-agreement/v1/agreements/{id}/accept': {
    post: LcuOperations['PostLolLicenseAgreementV1AgreementsByIdAccept']
  }
  '/lol-license-agreement/v1/agreements/{id}/decline': {
    post: LcuOperations['PostLolLicenseAgreementV1AgreementsByIdDecline']
  }
  '/lol-license-agreement/v1/all-agreements': {
    get: LcuOperations['GetLolLicenseAgreementV1AllAgreements']
  }
  '/lol-license-agreement/v1/serve-location': {
    get: LcuOperations['GetLolLicenseAgreementV1ServeLocation']
  }
  '/lol-loadouts/v1/loadouts-ready': {
    get: LcuOperations['GetLolLoadoutsV1LoadoutsReady']
  }
  '/lol-loadouts/v4/loadouts': {
    post: LcuOperations['PostLolLoadoutsV4Loadouts']
  }
  '/lol-loadouts/v4/loadouts/{id}': {
    put: LcuOperations['PutLolLoadoutsV4LoadoutsById']
    delete: LcuOperations['DeleteLolLoadoutsV4LoadoutsById']
    patch: LcuOperations['PatchLolLoadoutsV4LoadoutsById']
  }
  '/lol-loadouts/v4/loadouts/{loadoutId}': {
    get: LcuOperations['GetLolLoadoutsV4LoadoutsByLoadoutId']
  }
  '/lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}': {
    get: LcuOperations['GetLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId']
  }
  '/lol-loadouts/v4/loadouts/scope/account': {
    get: LcuOperations['GetLolLoadoutsV4LoadoutsScopeAccount']
  }
  '/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1BannableChampionIds']
  }
  '/lol-lobby-team-builder/champ-select/v1/current-champion': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1CurrentChampion']
  }
  '/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1DisabledChampionIds']
  }
  '/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1HasAutoAssignedSmite']
  }
  '/lol-lobby-team-builder/champ-select/v1/implementation-active': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1ImplementationActive']
  }
  '/lol-lobby-team-builder/champ-select/v1/match-token': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1MatchToken']
  }
  '/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1PickableChampionIds']
  }
  '/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1PickableSkinIds']
  }
  '/lol-lobby-team-builder/champ-select/v1/preferences': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1Preferences']
  }
  '/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1RetrieveLatestGameDto']
  }
  '/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1SendingLoadoutsGcosEnabled']
  }
  '/lol-lobby-team-builder/champ-select/v1/session': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1Session']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/actions/{id}': {
    patch: LcuOperations['PatchLolLobbyTeamBuilderChampSelectV1SessionActionsById']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionActionsByIdComplete']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionBenchSwapByChampionId']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/my-selection': {
    patch: LcuOperations['PatchLolLobbyTeamBuilderChampSelectV1SessionMySelection']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionMySelectionReroll']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/timer': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1SessionTimer']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/trades': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1SessionTrades']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/trades/{id}': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1SessionTradesById']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdAccept']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdCancel']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdDecline']
  }
  '/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdRequest']
  }
  '/lol-lobby-team-builder/champ-select/v1/simple-inventory': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1SimpleInventory']
  }
  '/lol-lobby-team-builder/champ-select/v1/team-boost': {
    get: LcuOperations['GetLolLobbyTeamBuilderChampSelectV1TeamBoost']
  }
  '/lol-lobby-team-builder/champ-select/v1/team-boost/purchase': {
    post: LcuOperations['PostLolLobbyTeamBuilderChampSelectV1TeamBoostPurchase']
  }
  '/lol-lobby-team-builder/v1/matchmaking': {
    get: LcuOperations['GetLolLobbyTeamBuilderV1Matchmaking']
  }
  '/lol-lobby-team-builder/v1/ready-check/accept': {
    post: LcuOperations['PostLolLobbyTeamBuilderV1ReadyCheckAccept']
  }
  '/lol-lobby-team-builder/v1/ready-check/decline': {
    post: LcuOperations['PostLolLobbyTeamBuilderV1ReadyCheckDecline']
  }
  '/lol-lobby/v1/autofill-displayed': {
    get: LcuOperations['GetLolLobbyV1AutofillDisplayed']
    put: LcuOperations['PutLolLobbyV1AutofillDisplayed']
  }
  '/lol-lobby/v1/clash': {
    post: LcuOperations['PostLolLobbyV1Clash']
    delete: LcuOperations['DeleteLolLobbyV1Clash']
  }
  '/lol-lobby/v1/custom-games': {
    get: LcuOperations['GetLolLobbyV1CustomGames']
  }
  '/lol-lobby/v1/custom-games/{id}': {
    get: LcuOperations['GetLolLobbyV1CustomGamesById']
  }
  '/lol-lobby/v1/custom-games/{id}/join': {
    post: LcuOperations['PostLolLobbyV1CustomGamesByIdJoin']
  }
  '/lol-lobby/v1/custom-games/refresh': {
    post: LcuOperations['PostLolLobbyV1CustomGamesRefresh']
  }
  '/lol-lobby/v1/lobby/availability': {
    get: LcuOperations['GetLolLobbyV1LobbyAvailability']
  }
  '/lol-lobby/v1/lobby/countdown': {
    get: LcuOperations['GetLolLobbyV1LobbyCountdown']
  }
  '/lol-lobby/v1/lobby/custom/bots': {
    post: LcuOperations['PostLolLobbyV1LobbyCustomBots']
  }
  '/lol-lobby/v1/lobby/custom/bots/{summonerInternalName}': {
    post: LcuOperations['PostLolLobbyV1LobbyCustomBotsBySummonerInternalName']
    delete: LcuOperations['DeleteLolLobbyV1LobbyCustomBotsBySummonerInternalName']
  }
  '/lol-lobby/v1/lobby/custom/cancel-champ-select': {
    post: LcuOperations['PostLolLobbyV1LobbyCustomCancelChampSelect']
  }
  '/lol-lobby/v1/lobby/custom/start-champ-select': {
    post: LcuOperations['PostLolLobbyV1LobbyCustomStartChampSelect']
  }
  '/lol-lobby/v1/lobby/custom/switch-teams': {
    post: LcuOperations['PostLolLobbyV1LobbyCustomSwitchTeams']
  }
  '/lol-lobby/v1/lobby/invitations': {
    get: LcuOperations['GetLolLobbyV1LobbyInvitations']
    post: LcuOperations['PostLolLobbyV1LobbyInvitations']
  }
  '/lol-lobby/v1/lobby/invitations/{id}': {
    get: LcuOperations['GetLolLobbyV1LobbyInvitationsById']
  }
  '/lol-lobby/v1/lobby/members/localMember/position-preferences': {
    put: LcuOperations['PutLolLobbyV1LobbyMembersLocalMemberPositionPreferences']
  }
  '/lol-lobby/v1/parties/{partyId}/members/{puuid}/role': {
    put: LcuOperations['PutLolLobbyV1PartiesByPartyIdMembersByPuuidRole']
  }
  '/lol-lobby/v1/parties/active': {
    put: LcuOperations['PutLolLobbyV1PartiesActive']
  }
  '/lol-lobby/v1/parties/gamemode': {
    get: LcuOperations['GetLolLobbyV1PartiesGamemode']
  }
  '/lol-lobby/v1/parties/metadata': {
    put: LcuOperations['PutLolLobbyV1PartiesMetadata']
  }
  '/lol-lobby/v1/parties/player': {
    get: LcuOperations['GetLolLobbyV1PartiesPlayer']
  }
  '/lol-lobby/v1/parties/queue': {
    put: LcuOperations['PutLolLobbyV1PartiesQueue']
  }
  '/lol-lobby/v1/parties/ready': {
    put: LcuOperations['PutLolLobbyV1PartiesReady']
  }
  '/lol-lobby/v1/party-rewards': {
    get: LcuOperations['GetLolLobbyV1PartyRewards']
  }
  '/lol-lobby/v1/tournaments/{id}/join': {
    post: LcuOperations['PostLolLobbyV1TournamentsByIdJoin']
  }
  '/lol-lobby/v2/comms/members': {
    get: LcuOperations['GetLolLobbyV2CommsMembers']
  }
  '/lol-lobby/v2/comms/token': {
    get: LcuOperations['GetLolLobbyV2CommsToken']
  }
  '/lol-lobby/v2/eligibility/game-select-eligibility-hash': {
    get: LcuOperations['GetLolLobbyV2EligibilityGameSelectEligibilityHash']
  }
  '/lol-lobby/v2/eligibility/initial-configuration-complete': {
    get: LcuOperations['GetLolLobbyV2EligibilityInitialConfigurationComplete']
  }
  '/lol-lobby/v2/eligibility/party': {
    post: LcuOperations['PostLolLobbyV2EligibilityParty']
  }
  '/lol-lobby/v2/eligibility/self': {
    post: LcuOperations['PostLolLobbyV2EligibilitySelf']
  }
  '/lol-lobby/v2/eog-invitations': {
    post: LcuOperations['PostLolLobbyV2EogInvitations']
  }
  '/lol-lobby/v2/lobby': {
    get: LcuOperations['GetLolLobbyV2Lobby']
    post: LcuOperations['PostLolLobbyV2Lobby']
    delete: LcuOperations['DeleteLolLobbyV2Lobby']
  }
  '/lol-lobby/v2/lobby/custom/available-bots': {
    get: LcuOperations['GetLolLobbyV2LobbyCustomAvailableBots']
  }
  '/lol-lobby/v2/lobby/custom/bots-enabled': {
    get: LcuOperations['GetLolLobbyV2LobbyCustomBotsEnabled']
  }
  '/lol-lobby/v2/lobby/invitations': {
    get: LcuOperations['GetLolLobbyV2LobbyInvitations']
    post: LcuOperations['PostLolLobbyV2LobbyInvitations']
  }
  '/lol-lobby/v2/lobby/matchmaking/search': {
    post: LcuOperations['PostLolLobbyV2LobbyMatchmakingSearch']
    delete: LcuOperations['DeleteLolLobbyV2LobbyMatchmakingSearch']
  }
  '/lol-lobby/v2/lobby/matchmaking/search-state': {
    get: LcuOperations['GetLolLobbyV2LobbyMatchmakingSearchState']
  }
  '/lol-lobby/v2/lobby/members': {
    get: LcuOperations['GetLolLobbyV2LobbyMembers']
  }
  '/lol-lobby/v2/lobby/members/{summonerId}/grant-invite': {
    post: LcuOperations['PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite']
  }
  '/lol-lobby/v2/lobby/members/{summonerId}/kick': {
    post: LcuOperations['PostLolLobbyV2LobbyMembersBySummonerIdKick']
  }
  '/lol-lobby/v2/lobby/members/{summonerId}/promote': {
    post: LcuOperations['PostLolLobbyV2LobbyMembersBySummonerIdPromote']
  }
  '/lol-lobby/v2/lobby/members/{summonerId}/revoke-invite': {
    post: LcuOperations['PostLolLobbyV2LobbyMembersBySummonerIdRevokeInvite']
  }
  '/lol-lobby/v2/lobby/members/localMember/position-preferences': {
    put: LcuOperations['PutLolLobbyV2LobbyMembersLocalMemberPositionPreferences']
  }
  '/lol-lobby/v2/lobby/partyType': {
    put: LcuOperations['PutLolLobbyV2LobbyPartyType']
  }
  '/lol-lobby/v2/lobby/team/{team}': {
    post: LcuOperations['PostLolLobbyV2LobbyTeamByTeam']
  }
  '/lol-lobby/v2/matchmaking/quick-search': {
    post: LcuOperations['PostLolLobbyV2MatchmakingQuickSearch']
  }
  '/lol-lobby/v2/notifications': {
    get: LcuOperations['GetLolLobbyV2Notifications']
    post: LcuOperations['PostLolLobbyV2Notifications']
  }
  '/lol-lobby/v2/notifications/{notificationId}': {
    delete: LcuOperations['DeleteLolLobbyV2NotificationsByNotificationId']
  }
  '/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues': {
    post: LcuOperations['PostLolLobbyV2PartiesOverridesEnabledForTeamBuilderQueues']
  }
  '/lol-lobby/v2/party-active': {
    get: LcuOperations['GetLolLobbyV2PartyActive']
  }
  '/lol-lobby/v2/party/{partyId}/join': {
    post: LcuOperations['PostLolLobbyV2PartyByPartyIdJoin']
  }
  '/lol-lobby/v2/party/eog-status': {
    get: LcuOperations['GetLolLobbyV2PartyEogStatus']
  }
  '/lol-lobby/v2/play-again': {
    post: LcuOperations['PostLolLobbyV2PlayAgain']
  }
  '/lol-lobby/v2/play-again-decline': {
    post: LcuOperations['PostLolLobbyV2PlayAgainDecline']
  }
  '/lol-lobby/v2/received-invitations': {
    get: LcuOperations['GetLolLobbyV2ReceivedInvitations']
  }
  '/lol-lobby/v2/received-invitations/{invitationId}/accept': {
    post: LcuOperations['PostLolLobbyV2ReceivedInvitationsByInvitationIdAccept']
  }
  '/lol-lobby/v2/received-invitations/{invitationId}/decline': {
    post: LcuOperations['PostLolLobbyV2ReceivedInvitationsByInvitationIdDecline']
  }
  '/lol-lobby/v2/registration-status': {
    get: LcuOperations['GetLolLobbyV2RegistrationStatus']
  }
  '/lol-login/v1/account-state': {
    get: LcuOperations['GetLolLoginV1AccountState']
    post: LcuOperations['PostLolLoginV1AccountState']
  }
  '/lol-login/v1/change-summoner-name': {
    post: LcuOperations['PostLolLoginV1ChangeSummonerName']
  }
  '/lol-login/v1/delete-rso-on-close': {
    post: LcuOperations['PostLolLoginV1DeleteRsoOnClose']
  }
  '/lol-login/v1/leagueSessionStatus': {
    post: LcuOperations['PostLolLoginV1LeagueSessionStatus']
  }
  '/lol-login/v1/login-connection-state': {
    get: LcuOperations['GetLolLoginV1LoginConnectionState']
  }
  '/lol-login/v1/login-data-packet': {
    get: LcuOperations['GetLolLoginV1LoginDataPacket']
  }
  '/lol-login/v1/login-in-game-creds': {
    get: LcuOperations['GetLolLoginV1LoginInGameCreds']
  }
  '/lol-login/v1/login-platform-credentials': {
    get: LcuOperations['GetLolLoginV1LoginPlatformCredentials']
  }
  '/lol-login/v1/login-queue-state': {
    get: LcuOperations['GetLolLoginV1LoginQueueState']
  }
  '/lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}': {
    post: LcuOperations['PostLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName']
    delete: LcuOperations['DeleteLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName']
  }
  '/lol-login/v1/service-proxy-uuid-requests': {
    post: LcuOperations['PostLolLoginV1ServiceProxyUuidRequests']
  }
  '/lol-login/v1/session': {
    get: LcuOperations['GetLolLoginV1Session']
    post: LcuOperations['PostLolLoginV1Session']
    delete: LcuOperations['DeleteLolLoginV1Session']
  }
  '/lol-login/v1/session/invoke': {
    post: LcuOperations['PostLolLoginV1SessionInvoke']
  }
  '/lol-login/v1/shutdown-locks/{lockName}': {
    put: LcuOperations['PutLolLoginV1ShutdownLocksByLockName']
    delete: LcuOperations['DeleteLolLoginV1ShutdownLocksByLockName']
  }
  '/lol-login/v1/summoner-session': {
    post: LcuOperations['PostLolLoginV1SummonerSession']
  }
  '/lol-login/v1/summoner-session-failed': {
    post: LcuOperations['PostLolLoginV1SummonerSessionFailed']
  }
  '/lol-login/v1/wallet': {
    get: LcuOperations['GetLolLoginV1Wallet']
  }
  '/lol-login/v2/league-session-init-token': {
    get: LcuOperations['GetLolLoginV2LeagueSessionInitToken']
  }
  '/lol-loot/v1/currency-configuration': {
    get: LcuOperations['GetLolLootV1CurrencyConfiguration']
  }
  '/lol-loot/v1/enabled': {
    get: LcuOperations['GetLolLootV1Enabled']
  }
  '/lol-loot/v1/loot-grants': {
    get: LcuOperations['GetLolLootV1LootGrants']
  }
  '/lol-loot/v1/loot-grants/{id}': {
    delete: LcuOperations['DeleteLolLootV1LootGrantsById']
  }
  '/lol-loot/v1/loot-items': {
    get: LcuOperations['GetLolLootV1LootItems']
  }
  '/lol-loot/v1/loot-odds/{recipeName}': {
    get: LcuOperations['GetLolLootV1LootOddsByRecipeName']
  }
  '/lol-loot/v1/milestones': {
    get: LcuOperations['GetLolLootV1Milestones']
  }
  '/lol-loot/v1/milestones/{lootMilestonesId}': {
    get: LcuOperations['GetLolLootV1MilestonesByLootMilestonesId']
  }
  '/lol-loot/v1/milestones/{lootMilestonesId}/claim': {
    post: LcuOperations['PostLolLootV1MilestonesByLootMilestonesIdClaim']
  }
  '/lol-loot/v1/milestones/{lootMilestonesId}/claimProgress': {
    get: LcuOperations['GetLolLootV1MilestonesByLootMilestonesIdClaimProgress']
  }
  '/lol-loot/v1/milestones/{lootMilestonesId}/counter': {
    get: LcuOperations['GetLolLootV1MilestonesByLootMilestonesIdCounter']
  }
  '/lol-loot/v1/milestones/counters': {
    get: LcuOperations['GetLolLootV1MilestonesCounters']
  }
  '/lol-loot/v1/milestones/items': {
    get: LcuOperations['GetLolLootV1MilestonesItems']
  }
  '/lol-loot/v1/new-player-check-done': {
    get: LcuOperations['GetLolLootV1NewPlayerCheckDone']
  }
  '/lol-loot/v1/new-player-check-done/{newValue}': {
    post: LcuOperations['PostLolLootV1NewPlayerCheckDoneByNewValue']
  }
  '/lol-loot/v1/player-display-categories': {
    get: LcuOperations['GetLolLootV1PlayerDisplayCategories']
  }
  '/lol-loot/v1/player-loot': {
    get: LcuOperations['GetLolLootV1PlayerLoot']
  }
  '/lol-loot/v1/player-loot-map': {
    get: LcuOperations['GetLolLootV1PlayerLootMap']
  }
  '/lol-loot/v1/player-loot-notifications': {
    get: LcuOperations['GetLolLootV1PlayerLootNotifications']
  }
  '/lol-loot/v1/player-loot-notifications/{id}/acknowledge': {
    post: LcuOperations['PostLolLootV1PlayerLootNotificationsByIdAcknowledge']
  }
  '/lol-loot/v1/player-loot/{lootId}': {
    get: LcuOperations['GetLolLootV1PlayerLootByLootId']
  }
  '/lol-loot/v1/player-loot/{lootId}/context-menu': {
    get: LcuOperations['GetLolLootV1PlayerLootByLootIdContextMenu']
    post: LcuOperations['PostLolLootV1PlayerLootByLootIdContextMenu']
  }
  '/lol-loot/v1/player-loot/{lootId}/new-notification': {
    delete: LcuOperations['DeleteLolLootV1PlayerLootByLootIdNewNotification']
  }
  '/lol-loot/v1/player-loot/{lootName}/redeem': {
    post: LcuOperations['PostLolLootV1PlayerLootByLootNameRedeem']
  }
  '/lol-loot/v1/ready': {
    get: LcuOperations['GetLolLootV1Ready']
  }
  '/lol-loot/v1/recipes/{recipeName}/craft': {
    post: LcuOperations['PostLolLootV1RecipesByRecipeNameCraft']
  }
  '/lol-loot/v1/recipes/configuration': {
    get: LcuOperations['GetLolLootV1RecipesConfiguration']
  }
  '/lol-loot/v1/recipes/initial-item/{lootId}': {
    get: LcuOperations['GetLolLootV1RecipesInitialItemByLootId']
    post: LcuOperations['PostLolLootV1RecipesInitialItemByLootId']
  }
  '/lol-loot/v1/refresh': {
    post: LcuOperations['PostLolLootV1Refresh']
  }
  '/lol-loot/v2/player-loot-map': {
    get: LcuOperations['GetLolLootV2PlayerLootMap']
  }
  '/lol-loyalty/v1/inventory-request-notification': {
    get: LcuOperations['GetLolLoyaltyV1InventoryRequestNotification']
  }
  '/lol-loyalty/v1/status-notification': {
    get: LcuOperations['GetLolLoyaltyV1StatusNotification']
  }
  '/lol-loyalty/v1/updateTftInventory': {
    post: LcuOperations['PostLolLoyaltyV1UpdateTftInventory']
  }
  '/lol-maps/v1/map': {
    post: LcuOperations['PostLolMapsV1Map']
  }
  '/lol-maps/v1/map/{id}': {
    get: LcuOperations['GetLolMapsV1MapById']
  }
  '/lol-maps/v1/maps': {
    get: LcuOperations['GetLolMapsV1Maps']
  }
  '/lol-maps/v2/map/{id}/{gameMode}': {
    get: LcuOperations['GetLolMapsV2MapByIdByGameMode']
  }
  '/lol-maps/v2/map/{id}/{gameMode}/{gameMutator}': {
    get: LcuOperations['GetLolMapsV2MapByIdByGameModeByGameMutator']
  }
  '/lol-maps/v2/maps': {
    get: LcuOperations['GetLolMapsV2Maps']
  }
  '/lol-match-history/v1/acs-endpoint-override': {
    post: LcuOperations['PostLolMatchHistoryV1AcsEndpointOverride']
  }
  '/lol-match-history/v1/delta': {
    get: LcuOperations['GetLolMatchHistoryV1Delta']
  }
  '/lol-match-history/v1/game-timelines/{gameId}': {
    get: LcuOperations['GetLolMatchHistoryV1GameTimelinesByGameId']
  }
  '/lol-match-history/v1/games/{gameId}': {
    get: LcuOperations['GetLolMatchHistoryV1GamesByGameId']
  }
  '/lol-match-history/v1/products/lol/{puuid}/matches': {
    get: LcuOperations['GetLolMatchHistoryV1ProductsLolByPuuidMatches']
  }
  '/lol-match-history/v1/products/lol/current-summoner/matches': {
    get: LcuOperations['GetLolMatchHistoryV1ProductsLolCurrentSummonerMatches']
  }
  '/lol-match-history/v1/products/tft/{puuid}/matches': {
    get: LcuOperations['GetLolMatchHistoryV1ProductsTftByPuuidMatches']
  }
  '/lol-match-history/v1/recently-played-summoners': {
    get: LcuOperations['GetLolMatchHistoryV1RecentlyPlayedSummoners']
  }
  '/lol-match-history/v1/web-url': {
    get: LcuOperations['GetLolMatchHistoryV1WebUrl']
  }
  '/lol-match-history/v3/matchlist/account/{accountId}': {
    get: LcuOperations['GetLolMatchHistoryV3MatchlistAccountByAccountId']
  }
  '/lol-matchmaking/v1/ready-check': {
    get: LcuOperations['GetLolMatchmakingV1ReadyCheck']
  }
  '/lol-matchmaking/v1/ready-check/accept': {
    post: LcuOperations['PostLolMatchmakingV1ReadyCheckAccept']
  }
  '/lol-matchmaking/v1/ready-check/decline': {
    post: LcuOperations['PostLolMatchmakingV1ReadyCheckDecline']
  }
  '/lol-matchmaking/v1/search': {
    get: LcuOperations['GetLolMatchmakingV1Search']
    put: LcuOperations['PutLolMatchmakingV1Search']
    post: LcuOperations['PostLolMatchmakingV1Search']
    delete: LcuOperations['DeleteLolMatchmakingV1Search']
  }
  '/lol-matchmaking/v1/search/errors': {
    get: LcuOperations['GetLolMatchmakingV1SearchErrors']
  }
  '/lol-matchmaking/v1/search/errors/{id}': {
    get: LcuOperations['GetLolMatchmakingV1SearchErrorsById']
  }
  '/lol-missions/v1/data': {
    get: LcuOperations['GetLolMissionsV1Data']
  }
  '/lol-missions/v1/force': {
    post: LcuOperations['PostLolMissionsV1Force']
  }
  '/lol-missions/v1/missions': {
    get: LcuOperations['GetLolMissionsV1Missions']
  }
  '/lol-missions/v1/player': {
    put: LcuOperations['PutLolMissionsV1Player']
  }
  '/lol-missions/v1/player/{missionId}': {
    put: LcuOperations['PutLolMissionsV1PlayerByMissionId']
  }
  '/lol-missions/v1/series': {
    get: LcuOperations['GetLolMissionsV1Series']
  }
  '/lol-missions/v2/player/opt': {
    put: LcuOperations['PutLolMissionsV2PlayerOpt']
  }
  '/lol-npe-rewards/v1/challenges/opt': {
    post: LcuOperations['PostLolNpeRewardsV1ChallengesOpt']
  }
  '/lol-npe-rewards/v1/challenges/progress': {
    get: LcuOperations['GetLolNpeRewardsV1ChallengesProgress']
  }
  '/lol-npe-rewards/v1/level-rewards': {
    get: LcuOperations['GetLolNpeRewardsV1LevelRewards']
  }
  '/lol-npe-rewards/v1/level-rewards/state': {
    get: LcuOperations['GetLolNpeRewardsV1LevelRewardsState']
  }
  '/lol-npe-rewards/v1/login-rewards': {
    get: LcuOperations['GetLolNpeRewardsV1LoginRewards']
  }
  '/lol-npe-rewards/v1/login-rewards/state': {
    get: LcuOperations['GetLolNpeRewardsV1LoginRewardsState']
  }
  '/lol-npe-tutorial-path/v1/rewards/champ': {
    get: LcuOperations['GetLolNpeTutorialPathV1RewardsChamp']
  }
  '/lol-npe-tutorial-path/v1/settings': {
    get: LcuOperations['GetLolNpeTutorialPathV1Settings']
    put: LcuOperations['PutLolNpeTutorialPathV1Settings']
  }
  '/lol-npe-tutorial-path/v1/tutorials': {
    get: LcuOperations['GetLolNpeTutorialPathV1Tutorials']
  }
  '/lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view': {
    put: LcuOperations['PutLolNpeTutorialPathV1TutorialsByTutorialIdView']
  }
  '/lol-npe-tutorial-path/v1/tutorials/init': {
    patch: LcuOperations['PatchLolNpeTutorialPathV1TutorialsInit']
  }
  '/lol-patch/v1/checking-enabled': {
    get: LcuOperations['GetLolPatchV1CheckingEnabled']
  }
  '/lol-patch/v1/environment': {
    get: LcuOperations['GetLolPatchV1Environment']
  }
  '/lol-patch/v1/game-patch-url': {
    put: LcuOperations['PutLolPatchV1GamePatchUrl']
  }
  '/lol-patch/v1/game-version': {
    get: LcuOperations['GetLolPatchV1GameVersion']
  }
  '/lol-patch/v1/notifications': {
    get: LcuOperations['GetLolPatchV1Notifications']
  }
  '/lol-patch/v1/notifications/{id}': {
    delete: LcuOperations['DeleteLolPatchV1NotificationsById']
  }
  '/lol-patch/v1/products/league_of_legends/detect-corruption-request': {
    post: LcuOperations['PostLolPatchV1ProductsLeagueOfLegendsDetectCorruptionRequest']
  }
  '/lol-patch/v1/products/league_of_legends/install-location': {
    get: LcuOperations['GetLolPatchV1ProductsLeagueOfLegendsInstallLocation']
  }
  '/lol-patch/v1/products/league_of_legends/partial-repair-request': {
    post: LcuOperations['PostLolPatchV1ProductsLeagueOfLegendsPartialRepairRequest']
  }
  '/lol-patch/v1/products/league_of_legends/start-checking-request': {
    post: LcuOperations['PostLolPatchV1ProductsLeagueOfLegendsStartCheckingRequest']
  }
  '/lol-patch/v1/products/league_of_legends/start-patching-request': {
    post: LcuOperations['PostLolPatchV1ProductsLeagueOfLegendsStartPatchingRequest']
  }
  '/lol-patch/v1/products/league_of_legends/state': {
    get: LcuOperations['GetLolPatchV1ProductsLeagueOfLegendsState']
  }
  '/lol-patch/v1/products/league_of_legends/stop-checking-request': {
    post: LcuOperations['PostLolPatchV1ProductsLeagueOfLegendsStopCheckingRequest']
  }
  '/lol-patch/v1/products/league_of_legends/stop-patching-request': {
    post: LcuOperations['PostLolPatchV1ProductsLeagueOfLegendsStopPatchingRequest']
  }
  '/lol-patch/v1/products/league_of_legends/supported-game-releases': {
    get: LcuOperations['GetLolPatchV1ProductsLeagueOfLegendsSupportedGameReleases']
  }
  '/lol-patch/v1/self-update-restart': {
    put: LcuOperations['PutLolPatchV1SelfUpdateRestart']
  }
  '/lol-patch/v1/status': {
    get: LcuOperations['GetLolPatchV1Status']
  }
  '/lol-patch/v1/ux': {
    put: LcuOperations['PutLolPatchV1Ux']
  }
  '/lol-perks/v1/currentpage': {
    get: LcuOperations['GetLolPerksV1Currentpage']
    put: LcuOperations['PutLolPerksV1Currentpage']
  }
  '/lol-perks/v1/customizationlimits': {
    get: LcuOperations['GetLolPerksV1Customizationlimits']
  }
  '/lol-perks/v1/inventory': {
    get: LcuOperations['GetLolPerksV1Inventory']
  }
  '/lol-perks/v1/pages': {
    get: LcuOperations['GetLolPerksV1Pages']
    post: LcuOperations['PostLolPerksV1Pages']
    delete: LcuOperations['DeleteLolPerksV1Pages']
  }
  '/lol-perks/v1/pages/{id}': {
    get: LcuOperations['GetLolPerksV1PagesById']
    put: LcuOperations['PutLolPerksV1PagesById']
    delete: LcuOperations['DeleteLolPerksV1PagesById']
  }
  '/lol-perks/v1/pages/{id}/auto-modified-selections': {
    delete: LcuOperations['DeleteLolPerksV1PagesByIdAutoModifiedSelections']
  }
  '/lol-perks/v1/pages/validate': {
    put: LcuOperations['PutLolPerksV1PagesValidate']
  }
  '/lol-perks/v1/perks': {
    get: LcuOperations['GetLolPerksV1Perks']
  }
  '/lol-perks/v1/perks/ack-gameplay-updated': {
    put: LcuOperations['PutLolPerksV1PerksAckGameplayUpdated']
  }
  '/lol-perks/v1/perks/disabled': {
    get: LcuOperations['GetLolPerksV1PerksDisabled']
  }
  '/lol-perks/v1/perks/gameplay-updated': {
    get: LcuOperations['GetLolPerksV1PerksGameplayUpdated']
  }
  '/lol-perks/v1/schema-version': {
    get: LcuOperations['GetLolPerksV1SchemaVersion']
  }
  '/lol-perks/v1/servicesettings': {
    get: LcuOperations['GetLolPerksV1Servicesettings']
  }
  '/lol-perks/v1/settings': {
    get: LcuOperations['GetLolPerksV1Settings']
    put: LcuOperations['PutLolPerksV1Settings']
  }
  '/lol-perks/v1/show-auto-modified-pages-notification': {
    get: LcuOperations['GetLolPerksV1ShowAutoModifiedPagesNotification']
    post: LcuOperations['PostLolPerksV1ShowAutoModifiedPagesNotification']
  }
  '/lol-perks/v1/styles': {
    get: LcuOperations['GetLolPerksV1Styles']
  }
  '/lol-perks/v1/update-page-order': {
    post: LcuOperations['PostLolPerksV1UpdatePageOrder']
  }
  '/lol-personalized-offers/v1/offers': {
    get: LcuOperations['GetLolPersonalizedOffersV1Offers']
  }
  '/lol-personalized-offers/v1/offers/{id}/purchase': {
    post: LcuOperations['PostLolPersonalizedOffersV1OffersByIdPurchase']
  }
  '/lol-personalized-offers/v1/offers/{id}/reveal': {
    post: LcuOperations['PostLolPersonalizedOffersV1OffersByIdReveal']
  }
  '/lol-personalized-offers/v1/ready': {
    get: LcuOperations['GetLolPersonalizedOffersV1Ready']
  }
  '/lol-personalized-offers/v1/status': {
    get: LcuOperations['GetLolPersonalizedOffersV1Status']
  }
  '/lol-personalized-offers/v1/themed': {
    get: LcuOperations['GetLolPersonalizedOffersV1Themed']
  }
  '/lol-pft/v2/events': {
    post: LcuOperations['PostLolPftV2Events']
  }
  '/lol-pft/v2/survey': {
    get: LcuOperations['GetLolPftV2Survey']
    post: LcuOperations['PostLolPftV2Survey']
  }
  '/lol-platform-config/v1/initial-configuration-complete': {
    get: LcuOperations['GetLolPlatformConfigV1InitialConfigurationComplete']
  }
  '/lol-platform-config/v1/namespaces': {
    get: LcuOperations['GetLolPlatformConfigV1Namespaces']
  }
  '/lol-platform-config/v1/namespaces/{ns}': {
    get: LcuOperations['GetLolPlatformConfigV1NamespacesByNs']
  }
  '/lol-platform-config/v1/namespaces/{ns}/{key}': {
    get: LcuOperations['GetLolPlatformConfigV1NamespacesByNsByKey']
  }
  '/lol-player-behavior/v1/ban': {
    get: LcuOperations['GetLolPlayerBehaviorV1Ban']
  }
  '/lol-player-behavior/v1/chat-restriction': {
    get: LcuOperations['GetLolPlayerBehaviorV1ChatRestriction']
  }
  '/lol-player-behavior/v1/code-of-conduct-notification': {
    get: LcuOperations['GetLolPlayerBehaviorV1CodeOfConductNotification']
    delete: LcuOperations['DeleteLolPlayerBehaviorV1CodeOfConductNotification']
  }
  '/lol-player-behavior/v1/config': {
    get: LcuOperations['GetLolPlayerBehaviorV1Config']
  }
  '/lol-player-behavior/v1/ranked-restriction': {
    get: LcuOperations['GetLolPlayerBehaviorV1RankedRestriction']
  }
  '/lol-player-behavior/v1/reform-card': {
    get: LcuOperations['GetLolPlayerBehaviorV1ReformCard']
  }
  '/lol-player-behavior/v1/reporter-feedback': {
    get: LcuOperations['GetLolPlayerBehaviorV1ReporterFeedback']
  }
  '/lol-player-behavior/v1/reporter-feedback/{id}': {
    get: LcuOperations['GetLolPlayerBehaviorV1ReporterFeedbackById']
    delete: LcuOperations['DeleteLolPlayerBehaviorV1ReporterFeedbackById']
  }
  '/lol-player-behavior/v2/reform-card': {
    get: LcuOperations['GetLolPlayerBehaviorV2ReformCard']
  }
  '/lol-player-level-up/v1/level-up': {
    get: LcuOperations['GetLolPlayerLevelUpV1LevelUp']
  }
  '/lol-player-level-up/v1/level-up-notifications/{pluginName}': {
    get: LcuOperations['GetLolPlayerLevelUpV1LevelUpNotificationsByPluginName']
    post: LcuOperations['PostLolPlayerLevelUpV1LevelUpNotificationsByPluginName']
  }
  '/lol-player-messaging/v1/celebration/notification': {
    get: LcuOperations['GetLolPlayerMessagingV1CelebrationNotification']
  }
  '/lol-player-messaging/v1/celebration/notification/{id}/acknowledge': {
    delete: LcuOperations['DeleteLolPlayerMessagingV1CelebrationNotificationByIdAcknowledge']
  }
  '/lol-player-messaging/v1/notification': {
    get: LcuOperations['GetLolPlayerMessagingV1Notification']
  }
  '/lol-player-messaging/v1/notification/{id}/acknowledge': {
    delete: LcuOperations['DeleteLolPlayerMessagingV1NotificationByIdAcknowledge']
  }
  '/lol-player-preferences/v1/hash': {
    post: LcuOperations['PostLolPlayerPreferencesV1Hash']
  }
  '/lol-player-preferences/v1/player-preferences-endpoint-override': {
    post: LcuOperations['PostLolPlayerPreferencesV1PlayerPreferencesEndpointOverride']
  }
  '/lol-player-preferences/v1/player-preferences-ready': {
    get: LcuOperations['GetLolPlayerPreferencesV1PlayerPreferencesReady']
  }
  '/lol-player-preferences/v1/preference': {
    put: LcuOperations['PutLolPlayerPreferencesV1Preference']
  }
  '/lol-player-preferences/v1/preference/{type}': {
    get: LcuOperations['GetLolPlayerPreferencesV1PreferenceByType']
  }
  '/lol-player-report-sender/v1/champ-select-reports/puuid/{puuid}/category/{category}': {
    post: LcuOperations['PostLolPlayerReportSenderV1ChampSelectReportsPuuidByPuuidCategoryByCategory']
  }
  '/lol-player-report-sender/v1/end-of-game-reports': {
    post: LcuOperations['PostLolPlayerReportSenderV1EndOfGameReports']
  }
  '/lol-pre-end-of-game/v1/complete/{sequenceEventName}': {
    post: LcuOperations['PostLolPreEndOfGameV1CompleteBySequenceEventName']
  }
  '/lol-pre-end-of-game/v1/currentSequenceEvent': {
    get: LcuOperations['GetLolPreEndOfGameV1CurrentSequenceEvent']
  }
  '/lol-pre-end-of-game/v1/registration/{sequenceEventName}': {
    delete: LcuOperations['DeleteLolPreEndOfGameV1RegistrationBySequenceEventName']
  }
  '/lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}': {
    post: LcuOperations['PostLolPreEndOfGameV1RegistrationBySequenceEventNameByPriority']
  }
  '/lol-premade-voice/v1/availability': {
    get: LcuOperations['GetLolPremadeVoiceV1Availability']
  }
  '/lol-premade-voice/v1/capturedevices': {
    get: LcuOperations['GetLolPremadeVoiceV1Capturedevices']
    put: LcuOperations['PutLolPremadeVoiceV1Capturedevices']
  }
  '/lol-premade-voice/v1/first-experience': {
    get: LcuOperations['GetLolPremadeVoiceV1FirstExperience']
  }
  '/lol-premade-voice/v1/first-experience/game': {
    post: LcuOperations['PostLolPremadeVoiceV1FirstExperienceGame']
  }
  '/lol-premade-voice/v1/first-experience/lcu': {
    post: LcuOperations['PostLolPremadeVoiceV1FirstExperienceLcu']
  }
  '/lol-premade-voice/v1/first-experience/reset': {
    post: LcuOperations['PostLolPremadeVoiceV1FirstExperienceReset']
  }
  '/lol-premade-voice/v1/gameClientUpdatedPTTKey': {
    post: LcuOperations['PostLolPremadeVoiceV1GameClientUpdatedPTTKey']
  }
  '/lol-premade-voice/v1/mic-test': {
    get: LcuOperations['GetLolPremadeVoiceV1MicTest']
    post: LcuOperations['PostLolPremadeVoiceV1MicTest']
    delete: LcuOperations['DeleteLolPremadeVoiceV1MicTest']
  }
  '/lol-premade-voice/v1/participant-records': {
    get: LcuOperations['GetLolPremadeVoiceV1ParticipantRecords']
  }
  '/lol-premade-voice/v1/participants': {
    get: LcuOperations['GetLolPremadeVoiceV1Participants']
  }
  '/lol-premade-voice/v1/participants/{puuid}/mute': {
    put: LcuOperations['PutLolPremadeVoiceV1ParticipantsByPuuidMute']
  }
  '/lol-premade-voice/v1/participants/{puuid}/volume': {
    put: LcuOperations['PutLolPremadeVoiceV1ParticipantsByPuuidVolume']
  }
  '/lol-premade-voice/v1/push-to-talk/check-available': {
    post: LcuOperations['PostLolPremadeVoiceV1PushToTalkCheckAvailable']
  }
  '/lol-premade-voice/v1/self/activationSensitivity': {
    put: LcuOperations['PutLolPremadeVoiceV1SelfActivationSensitivity']
  }
  '/lol-premade-voice/v1/self/inputMode': {
    put: LcuOperations['PutLolPremadeVoiceV1SelfInputMode']
  }
  '/lol-premade-voice/v1/self/micLevel': {
    put: LcuOperations['PutLolPremadeVoiceV1SelfMicLevel']
  }
  '/lol-premade-voice/v1/self/mute': {
    put: LcuOperations['PutLolPremadeVoiceV1SelfMute']
  }
  '/lol-premade-voice/v1/session': {
    post: LcuOperations['PostLolPremadeVoiceV1Session']
    delete: LcuOperations['DeleteLolPremadeVoiceV1Session']
  }
  '/lol-premade-voice/v1/settings': {
    get: LcuOperations['GetLolPremadeVoiceV1Settings']
  }
  '/lol-premade-voice/v1/settings/reset': {
    post: LcuOperations['PostLolPremadeVoiceV1SettingsReset']
  }
  '/lol-publishing-content/v1/ready': {
    get: LcuOperations['GetLolPublishingContentV1Ready']
  }
  '/lol-publishing-content/v1/tft-hub-cards': {
    get: LcuOperations['GetLolPublishingContentV1TftHubCards']
  }
  '/lol-purchase-widget/v1/configuration': {
    get: LcuOperations['GetLolPurchaseWidgetV1Configuration']
  }
  '/lol-purchase-widget/v1/order-notifications': {
    get: LcuOperations['GetLolPurchaseWidgetV1OrderNotifications']
  }
  '/lol-purchase-widget/v1/purchasable-item': {
    get: LcuOperations['GetLolPurchaseWidgetV1PurchasableItem']
  }
  '/lol-purchase-widget/v1/purchasable-items/{inventoryType}': {
    post: LcuOperations['PostLolPurchaseWidgetV1PurchasableItemsByInventoryType']
  }
  '/lol-purchase-widget/v2/purchaseItems': {
    post: LcuOperations['PostLolPurchaseWidgetV2PurchaseItems']
  }
  '/lol-purchase-widget/v3/base-skin-line-data/{offerId}': {
    get: LcuOperations['GetLolPurchaseWidgetV3BaseSkinLineDataByOfferId']
  }
  '/lol-purchase-widget/v3/purchase-offer-order-statuses': {
    get: LcuOperations['GetLolPurchaseWidgetV3PurchaseOfferOrderStatuses']
  }
  '/lol-purchase-widget/v3/purchaseOffer': {
    post: LcuOperations['PostLolPurchaseWidgetV3PurchaseOffer']
  }
  '/lol-purchase-widget/v3/validateOffer': {
    post: LcuOperations['PostLolPurchaseWidgetV3ValidateOffer']
  }
  '/lol-ranked/v1/apex-leagues/{queueType}/{tier}': {
    get: LcuOperations['GetLolRankedV1ApexLeaguesByQueueTypeByTier']
  }
  '/lol-ranked/v1/challenger-ladders-enabled': {
    get: LcuOperations['GetLolRankedV1ChallengerLaddersEnabled']
  }
  '/lol-ranked/v1/current-lp-change-notification': {
    get: LcuOperations['GetLolRankedV1CurrentLpChangeNotification']
  }
  '/lol-ranked/v1/current-ranked-stats': {
    get: LcuOperations['GetLolRankedV1CurrentRankedStats']
  }
  '/lol-ranked/v1/eos-notifications': {
    get: LcuOperations['GetLolRankedV1EosNotifications']
  }
  '/lol-ranked/v1/eos-notifications/{id}/acknowledge': {
    post: LcuOperations['PostLolRankedV1EosNotificationsByIdAcknowledge']
  }
  '/lol-ranked/v1/eos-rewards': {
    get: LcuOperations['GetLolRankedV1EosRewards']
  }
  '/lol-ranked/v1/league-ladders/{puuid}': {
    get: LcuOperations['GetLolRankedV1LeagueLaddersByPuuid']
  }
  '/lol-ranked/v1/notifications': {
    get: LcuOperations['GetLolRankedV1Notifications']
  }
  '/lol-ranked/v1/notifications/{id}/acknowledge': {
    post: LcuOperations['PostLolRankedV1NotificationsByIdAcknowledge']
  }
  '/lol-ranked/v1/ranked-stats': {
    get: LcuOperations['GetLolRankedV1RankedStats']
  }
  '/lol-ranked/v1/ranked-stats/{puuid}': {
    get: LcuOperations['GetLolRankedV1RankedStatsByPuuid']
  }
  '/lol-ranked/v1/rated-ladder/{queueType}': {
    get: LcuOperations['GetLolRankedV1RatedLadderByQueueType']
  }
  '/lol-ranked/v1/signed-ranked-stats': {
    get: LcuOperations['GetLolRankedV1SignedRankedStats']
  }
  '/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids': {
    get: LcuOperations['GetLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids']
  }
  '/lol-ranked/v1/splits-config': {
    get: LcuOperations['GetLolRankedV1SplitsConfig']
  }
  '/lol-ranked/v1/top-rated-ladders-enabled': {
    get: LcuOperations['GetLolRankedV1TopRatedLaddersEnabled']
  }
  '/lol-ranked/v2/tiers': {
    get: LcuOperations['GetLolRankedV2Tiers']
  }
  '/lol-regalia/v2/config': {
    get: LcuOperations['GetLolRegaliaV2Config']
  }
  '/lol-regalia/v2/current-summoner/regalia': {
    get: LcuOperations['GetLolRegaliaV2CurrentSummonerRegalia']
    put: LcuOperations['PutLolRegaliaV2CurrentSummonerRegalia']
  }
  '/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia': {
    get: LcuOperations['GetLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia']
  }
  '/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia': {
    get: LcuOperations['GetLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia']
  }
  '/lol-regalia/v2/summoners/{summonerId}/regalia': {
    get: LcuOperations['GetLolRegaliaV2SummonersBySummonerIdRegalia']
  }
  '/lol-regalia/v2/summoners/{summonerId}/regalia/async': {
    get: LcuOperations['GetLolRegaliaV2SummonersBySummonerIdRegaliaAsync']
  }
  '/lol-replays/v1/configuration': {
    get: LcuOperations['GetLolReplaysV1Configuration']
  }
  '/lol-replays/v1/metadata/{gameId}': {
    get: LcuOperations['GetLolReplaysV1MetadataByGameId']
  }
  '/lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}': {
    post: LcuOperations['PostLolReplaysV1MetadataByGameIdCreateGameVersionByGameVersionGameTypeByGameTypeQueueIdByQueueId']
  }
  '/lol-replays/v1/rofls/{gameId}/download': {
    post: LcuOperations['PostLolReplaysV1RoflsByGameIdDownload']
  }
  '/lol-replays/v1/rofls/{gameId}/download/graceful': {
    post: LcuOperations['PostLolReplaysV1RoflsByGameIdDownloadGraceful']
  }
  '/lol-replays/v1/rofls/{gameId}/watch': {
    post: LcuOperations['PostLolReplaysV1RoflsByGameIdWatch']
  }
  '/lol-replays/v1/rofls/path': {
    get: LcuOperations['GetLolReplaysV1RoflsPath']
  }
  '/lol-replays/v1/rofls/path/default': {
    get: LcuOperations['GetLolReplaysV1RoflsPathDefault']
  }
  '/lol-replays/v1/rofls/scan': {
    post: LcuOperations['PostLolReplaysV1RoflsScan']
  }
  '/lol-replays/v2/metadata/{gameId}/create': {
    post: LcuOperations['PostLolReplaysV2MetadataByGameIdCreate']
  }
  '/lol-rewards/v1/grants': {
    get: LcuOperations['GetLolRewardsV1Grants']
  }
  '/lol-rewards/v1/grants/{grantId}/select': {
    post: LcuOperations['PostLolRewardsV1GrantsByGrantIdSelect']
  }
  '/lol-rewards/v1/grants/{grantId}/view': {
    patch: LcuOperations['PatchLolRewardsV1GrantsByGrantIdView']
  }
  '/lol-rewards/v1/groups': {
    get: LcuOperations['GetLolRewardsV1Groups']
  }
  '/lol-rms/v1/champion-mastery-leaveup-update': {
    get: LcuOperations['GetLolRmsV1ChampionMasteryLeaveupUpdate']
  }
  '/lol-rms/v1/champion-mastery-leaveup-update/{id}': {
    delete: LcuOperations['DeleteLolRmsV1ChampionMasteryLeaveupUpdateById']
  }
  '/lol-rso-auth/configuration/v3/ready-state': {
    get: LcuOperations['GetLolRsoAuthConfigurationV3ReadyState']
  }
  '/lol-rso-auth/v1/auth-hints/hint': {
    get: LcuOperations['GetLolRsoAuthV1AuthHintsHint']
    delete: LcuOperations['DeleteLolRsoAuthV1AuthHintsHint']
  }
  '/lol-rso-auth/v1/authorization': {
    get: LcuOperations['GetLolRsoAuthV1Authorization']
    delete: LcuOperations['DeleteLolRsoAuthV1Authorization']
  }
  '/lol-rso-auth/v1/authorization/access-token': {
    get: LcuOperations['GetLolRsoAuthV1AuthorizationAccessToken']
  }
  '/lol-rso-auth/v1/authorization/error': {
    get: LcuOperations['GetLolRsoAuthV1AuthorizationError']
  }
  '/lol-rso-auth/v1/authorization/gas': {
    post: LcuOperations['PostLolRsoAuthV1AuthorizationGas']
  }
  '/lol-rso-auth/v1/authorization/id-token': {
    get: LcuOperations['GetLolRsoAuthV1AuthorizationIdToken']
  }
  '/lol-rso-auth/v1/authorization/refresh': {
    post: LcuOperations['PostLolRsoAuthV1AuthorizationRefresh']
  }
  '/lol-rso-auth/v1/authorization/userinfo': {
    get: LcuOperations['GetLolRsoAuthV1AuthorizationUserinfo']
    post: LcuOperations['PostLolRsoAuthV1AuthorizationUserinfo']
  }
  '/lol-rso-auth/v1/device-id': {
    post: LcuOperations['PostLolRsoAuthV1DeviceId']
  }
  '/lol-rso-auth/v1/session': {
    delete: LcuOperations['DeleteLolRsoAuthV1Session']
  }
  '/lol-rso-auth/v1/status/{platformId}': {
    get: LcuOperations['GetLolRsoAuthV1StatusByPlatformId']
  }
  '/lol-rso-auth/v2/config': {
    post: LcuOperations['PostLolRsoAuthV2Config']
    delete: LcuOperations['DeleteLolRsoAuthV2Config']
  }
  '/lol-service-status/v1/lcu-status': {
    get: LcuOperations['GetLolServiceStatusV1LcuStatus']
  }
  '/lol-service-status/v1/ticker-messages': {
    get: LcuOperations['GetLolServiceStatusV1TickerMessages']
  }
  '/lol-settings/v1/account/{category}': {
    get: LcuOperations['GetLolSettingsV1AccountByCategory']
    put: LcuOperations['PutLolSettingsV1AccountByCategory']
    patch: LcuOperations['PatchLolSettingsV1AccountByCategory']
  }
  '/lol-settings/v1/account/didreset': {
    get: LcuOperations['GetLolSettingsV1AccountDidreset']
  }
  '/lol-settings/v1/account/save': {
    post: LcuOperations['PostLolSettingsV1AccountSave']
  }
  '/lol-settings/v1/local/{category}': {
    get: LcuOperations['GetLolSettingsV1LocalByCategory']
    patch: LcuOperations['PatchLolSettingsV1LocalByCategory']
  }
  '/lol-settings/v2/account/{ppType}/{category}': {
    get: LcuOperations['GetLolSettingsV2AccountByPpTypeByCategory']
    put: LcuOperations['PutLolSettingsV2AccountByPpTypeByCategory']
    patch: LcuOperations['PatchLolSettingsV2AccountByPpTypeByCategory']
  }
  '/lol-settings/v2/didreset/{ppType}': {
    get: LcuOperations['GetLolSettingsV2DidresetByPpType']
  }
  '/lol-settings/v2/local/{category}': {
    get: LcuOperations['GetLolSettingsV2LocalByCategory']
    patch: LcuOperations['PatchLolSettingsV2LocalByCategory']
  }
  '/lol-settings/v2/ready': {
    get: LcuOperations['GetLolSettingsV2Ready']
  }
  '/lol-shutdown/v1/notification': {
    get: LcuOperations['GetLolShutdownV1Notification']
  }
  '/lol-simple-dialog-messages/v1/messages': {
    get: LcuOperations['GetLolSimpleDialogMessagesV1Messages']
    post: LcuOperations['PostLolSimpleDialogMessagesV1Messages']
  }
  '/lol-simple-dialog-messages/v1/messages/{messageId}': {
    delete: LcuOperations['DeleteLolSimpleDialogMessagesV1MessagesByMessageId']
  }
  '/lol-social-leaderboard/v1/leaderboard-next-update-time': {
    get: LcuOperations['GetLolSocialLeaderboardV1LeaderboardNextUpdateTime']
  }
  '/lol-social-leaderboard/v1/social-leaderboard-data': {
    get: LcuOperations['GetLolSocialLeaderboardV1SocialLeaderboardData']
  }
  '/lol-spectator/v1/buddy/spectate': {
    post: LcuOperations['PostLolSpectatorV1BuddySpectate']
  }
  '/lol-spectator/v1/spectate': {
    get: LcuOperations['GetLolSpectatorV1Spectate']
  }
  '/lol-spectator/v1/spectate/launch': {
    post: LcuOperations['PostLolSpectatorV1SpectateLaunch']
  }
  '/lol-statstones/v1/eog-notifications': {
    get: LcuOperations['GetLolStatstonesV1EogNotifications']
    delete: LcuOperations['DeleteLolStatstonesV1EogNotifications']
  }
  '/lol-statstones/v1/eog-notifications/{key}': {
    delete: LcuOperations['DeleteLolStatstonesV1EogNotificationsByKey']
  }
  '/lol-statstones/v1/featured-champion-statstones/{championItemId}': {
    get: LcuOperations['GetLolStatstonesV1FeaturedChampionStatstonesByChampionItemId']
  }
  '/lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}': {
    post: LcuOperations['PostLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId']
  }
  '/lol-statstones/v1/profile-summary/{puuid}': {
    get: LcuOperations['GetLolStatstonesV1ProfileSummaryByPuuid']
  }
  '/lol-statstones/v1/statstone/{contentId}/owned': {
    get: LcuOperations['GetLolStatstonesV1StatstoneByContentIdOwned']
  }
  '/lol-statstones/v1/statstones-enabled-queue-ids': {
    get: LcuOperations['GetLolStatstonesV1StatstonesEnabledQueueIds']
  }
  '/lol-statstones/v1/vignette-notifications': {
    get: LcuOperations['GetLolStatstonesV1VignetteNotifications']
    delete: LcuOperations['DeleteLolStatstonesV1VignetteNotifications']
  }
  '/lol-statstones/v1/vignette-notifications/{key}': {
    delete: LcuOperations['DeleteLolStatstonesV1VignetteNotificationsByKey']
  }
  '/lol-statstones/v2/player-statstones-self/{championItemId}': {
    get: LcuOperations['GetLolStatstonesV2PlayerStatstonesSelfByChampionItemId']
  }
  '/lol-statstones/v2/player-summary-self': {
    get: LcuOperations['GetLolStatstonesV2PlayerSummarySelf']
  }
  '/lol-store/v1/{pageType}': {
    get: LcuOperations['GetLolStoreV1ByPageType']
  }
  '/lol-store/v1/catalog': {
    get: LcuOperations['GetLolStoreV1Catalog']
  }
  '/lol-store/v1/catalog/{inventoryType}': {
    get: LcuOperations['GetLolStoreV1CatalogByInventoryType']
  }
  '/lol-store/v1/catalog/sales': {
    get: LcuOperations['GetLolStoreV1CatalogSales']
  }
  '/lol-store/v1/catalogByInstanceIds': {
    get: LcuOperations['GetLolStoreV1CatalogByInstanceIds']
  }
  '/lol-store/v1/getStoreUrl': {
    get: LcuOperations['GetLolStoreV1GetStoreUrl']
  }
  '/lol-store/v1/giftablefriends': {
    get: LcuOperations['GetLolStoreV1Giftablefriends']
  }
  '/lol-store/v1/itemKeysFromInstanceIds': {
    get: LcuOperations['GetLolStoreV1ItemKeysFromInstanceIds']
  }
  '/lol-store/v1/itemKeysFromOfferIds': {
    get: LcuOperations['GetLolStoreV1ItemKeysFromOfferIds']
  }
  '/lol-store/v1/lastPage': {
    get: LcuOperations['GetLolStoreV1LastPage']
    post: LcuOperations['PostLolStoreV1LastPage']
  }
  '/lol-store/v1/notifications/acknowledge': {
    post: LcuOperations['PostLolStoreV1NotificationsAcknowledge']
  }
  '/lol-store/v1/offers': {
    get: LcuOperations['GetLolStoreV1Offers']
  }
  '/lol-store/v1/order-notifications': {
    get: LcuOperations['GetLolStoreV1OrderNotifications']
  }
  '/lol-store/v1/order-notifications/{id}': {
    get: LcuOperations['GetLolStoreV1OrderNotificationsById']
  }
  '/lol-store/v1/paymentDetails': {
    get: LcuOperations['GetLolStoreV1PaymentDetails']
  }
  '/lol-store/v1/skins/{skinId}': {
    get: LcuOperations['GetLolStoreV1SkinsBySkinId']
  }
  '/lol-store/v1/skins/{skinId}/purchase': {
    post: LcuOperations['PostLolStoreV1SkinsBySkinIdPurchase']
  }
  '/lol-store/v1/status': {
    get: LcuOperations['GetLolStoreV1Status']
  }
  '/lol-store/v1/store-ready': {
    get: LcuOperations['GetLolStoreV1StoreReady']
  }
  '/lol-store/v1/wallet': {
    get: LcuOperations['GetLolStoreV1Wallet']
  }
  '/lol-suggested-players/v1/reported-player': {
    post: LcuOperations['PostLolSuggestedPlayersV1ReportedPlayer']
  }
  '/lol-suggested-players/v1/suggested-players': {
    get: LcuOperations['GetLolSuggestedPlayersV1SuggestedPlayers']
  }
  '/lol-suggested-players/v1/suggested-players/{summonerId}': {
    delete: LcuOperations['DeleteLolSuggestedPlayersV1SuggestedPlayersBySummonerId']
  }
  '/lol-suggested-players/v1/victorious-comrade': {
    post: LcuOperations['PostLolSuggestedPlayersV1VictoriousComrade']
  }
  '/lol-summoner/v1/check-name-availability-new-summoners/{name}': {
    get: LcuOperations['GetLolSummonerV1CheckNameAvailabilityNewSummonersByName']
  }
  '/lol-summoner/v1/check-name-availability/{name}': {
    get: LcuOperations['GetLolSummonerV1CheckNameAvailabilityByName']
  }
  '/lol-summoner/v1/current-summoner': {
    get: LcuOperations['GetLolSummonerV1CurrentSummoner']
  }
  '/lol-summoner/v1/current-summoner/account-and-summoner-ids': {
    get: LcuOperations['GetLolSummonerV1CurrentSummonerAccountAndSummonerIds']
  }
  '/lol-summoner/v1/current-summoner/autofill': {
    get: LcuOperations['GetLolSummonerV1CurrentSummonerAutofill']
  }
  '/lol-summoner/v1/current-summoner/icon': {
    put: LcuOperations['PutLolSummonerV1CurrentSummonerIcon']
  }
  '/lol-summoner/v1/current-summoner/jwt': {
    get: LcuOperations['GetLolSummonerV1CurrentSummonerJwt']
  }
  '/lol-summoner/v1/current-summoner/name': {
    post: LcuOperations['PostLolSummonerV1CurrentSummonerName']
  }
  '/lol-summoner/v1/current-summoner/profile-privacy': {
    get: LcuOperations['GetLolSummonerV1CurrentSummonerProfilePrivacy']
    put: LcuOperations['PutLolSummonerV1CurrentSummonerProfilePrivacy']
  }
  '/lol-summoner/v1/current-summoner/rerollPoints': {
    get: LcuOperations['GetLolSummonerV1CurrentSummonerRerollPoints']
  }
  '/lol-summoner/v1/current-summoner/summoner-profile': {
    get: LcuOperations['GetLolSummonerV1CurrentSummonerSummonerProfile']
    post: LcuOperations['PostLolSummonerV1CurrentSummonerSummonerProfile']
  }
  '/lol-summoner/v1/profile-privacy-enabled': {
    get: LcuOperations['GetLolSummonerV1ProfilePrivacyEnabled']
  }
  '/lol-summoner/v1/status': {
    get: LcuOperations['GetLolSummonerV1Status']
  }
  '/lol-summoner/v1/summoner-profile': {
    get: LcuOperations['GetLolSummonerV1SummonerProfile']
  }
  '/lol-summoner/v1/summoner-requests-ready': {
    get: LcuOperations['GetLolSummonerV1SummonerRequestsReady']
  }
  '/lol-summoner/v1/summoners': {
    get: LcuOperations['GetLolSummonerV1Summoners']
    post: LcuOperations['PostLolSummonerV1Summoners']
  }
  '/lol-summoner/v1/summoners-by-puuid-cached/{puuid}': {
    get: LcuOperations['GetLolSummonerV1SummonersByPuuidCachedByPuuid']
  }
  '/lol-summoner/v1/summoners/{id}': {
    get: LcuOperations['GetLolSummonerV1SummonersById']
  }
  '/lol-summoner/v2/summoner-icons': {
    get: LcuOperations['GetLolSummonerV2SummonerIcons']
  }
  '/lol-summoner/v2/summoner-names': {
    get: LcuOperations['GetLolSummonerV2SummonerNames']
  }
  '/lol-summoner/v2/summoners': {
    get: LcuOperations['GetLolSummonerV2Summoners']
  }
  '/lol-summoner/v2/summoners/names': {
    post: LcuOperations['PostLolSummonerV2SummonersNames']
  }
  '/lol-summoner/v2/summoners/puuid': {
    post: LcuOperations['PostLolSummonerV2SummonersPuuid']
  }
  '/lol-summoner/v2/summoners/puuid/{puuid}': {
    get: LcuOperations['GetLolSummonerV2SummonersPuuidByPuuid']
  }
  '/lol-tastes/v1/ready': {
    get: LcuOperations['GetLolTastesV1Ready']
  }
  '/lol-tastes/v1/skins-model': {
    get: LcuOperations['GetLolTastesV1SkinsModel']
  }
  '/lol-tft/v1/tft/hubFooterColors': {
    get: LcuOperations['GetLolTftV1TftHubFooterColors']
  }
  '/lol-tft/v1/tft/storePromos': {
    get: LcuOperations['GetLolTftV1TftStorePromos']
  }
  '/lol-tft/v2/tft/battlepass': {
    get: LcuOperations['GetLolTftV2TftBattlepass']
  }
  '/lol-token-upsell/v1/all': {
    get: LcuOperations['GetLolTokenUpsellV1All']
  }
  '/lol-trophies/v1/current-summoner/trophies/profile': {
    get: LcuOperations['GetLolTrophiesV1CurrentSummonerTrophiesProfile']
  }
  '/lol-trophies/v1/players/{puuid}/trophies/profile': {
    get: LcuOperations['GetLolTrophiesV1PlayersByPuuidTrophiesProfile']
  }
  '/memory/v1/fe-processes-ready': {
    /** Returns whether or not the frontend processes are ready */
    get: LcuOperations['GetMemoryV1FeProcessesReady']
  }
  '/memory/v1/notify-fe-processes-ready': {
    /** Sends an event that the frontend processes are ready */
    post: LcuOperations['PostMemoryV1NotifyFeProcessesReady']
  }
  '/memory/v1/snapshot': {
    /** Sends current memory usage info to telemetry. */
    post: LcuOperations['PostMemoryV1Snapshot']
  }
  '/MemoryPools': {
    /** Returns current pool usage */
    post: LcuOperations['MemoryPools']
  }
  '/patcher/v1/notifications': {
    get: LcuOperations['GetPatcherV1Notifications']
    post: LcuOperations['PostPatcherV1Notifications']
  }
  '/patcher/v1/notifications/{id}': {
    delete: LcuOperations['DeletePatcherV1NotificationsById']
  }
  '/patcher/v1/p2p/status': {
    get: LcuOperations['GetPatcherV1P2pStatus']
    patch: LcuOperations['PatchPatcherV1P2pStatus']
  }
  '/patcher/v1/products': {
    get: LcuOperations['GetPatcherV1Products']
  }
  '/patcher/v1/products/{product-id}': {
    delete: LcuOperations['DeletePatcherV1ProductsByProductId']
  }
  '/patcher/v1/products/{product-id}/detect-corruption-request': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdDetectCorruptionRequest']
  }
  '/patcher/v1/products/{product-id}/partial-repair-request': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdPartialRepairRequest']
  }
  '/patcher/v1/products/{product-id}/paths': {
    get: LcuOperations['GetPatcherV1ProductsByProductIdPaths']
  }
  '/patcher/v1/products/{product-id}/signal-start-patching-delayed': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdSignalStartPatchingDelayed']
  }
  '/patcher/v1/products/{product-id}/start-checking-request': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdStartCheckingRequest']
  }
  '/patcher/v1/products/{product-id}/start-patching-request': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdStartPatchingRequest']
  }
  '/patcher/v1/products/{product-id}/state': {
    get: LcuOperations['GetPatcherV1ProductsByProductIdState']
  }
  '/patcher/v1/products/{product-id}/stop-checking-request': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdStopCheckingRequest']
  }
  '/patcher/v1/products/{product-id}/stop-patching-request': {
    post: LcuOperations['PostPatcherV1ProductsByProductIdStopPatchingRequest']
  }
  '/patcher/v1/products/{product-id}/tags': {
    get: LcuOperations['GetPatcherV1ProductsByProductIdTags']
  }
  '/patcher/v1/products/league_of_legends/full-repair-request': {
    post: LcuOperations['PostPatcherV1ProductsLeagueOfLegendsFullRepairRequest']
  }
  '/patcher/v1/self-update-restart': {
    put: LcuOperations['PutPatcherV1SelfUpdateRestart']
  }
  '/patcher/v1/status': {
    get: LcuOperations['GetPatcherV1Status']
  }
  '/patcher/v1/ux': {
    put: LcuOperations['PutPatcherV1Ux']
  }
  '/payments/v1/pmc-start-url': {
    post: LcuOperations['PostPaymentsV1PmcStartUrl']
  }
  '/performance/v1/memory': {
    /** Returns process memory status */
    get: LcuOperations['GetPerformanceV1Memory']
  }
  '/performance/v1/process/{processId}': {
    /** Registers the process and includes it with the performance information. */
    post: LcuOperations['PostPerformanceV1ProcessByProcessId']
  }
  '/performance/v1/report': {
    /** Returns the various performance information for the cef processes */
    get: LcuOperations['GetPerformanceV1Report']
  }
  '/performance/v1/report/restart': {
    /** Restarts the CPU timing information and returns the results from PerfReportProcesses */
    post: LcuOperations['PostPerformanceV1ReportRestart']
  }
  '/performance/v1/system-info': {
    /** Returns hardware and software specs for the machine the client is running on. */
    get: LcuOperations['GetPerformanceV1SystemInfo']
  }
  '/player-notifications/v1/config': {
    get: LcuOperations['GetPlayerNotificationsV1Config']
    put: LcuOperations['PutPlayerNotificationsV1Config']
  }
  '/player-notifications/v1/notifications': {
    get: LcuOperations['GetPlayerNotificationsV1Notifications']
    post: LcuOperations['PostPlayerNotificationsV1Notifications']
  }
  '/player-notifications/v1/notifications/{id}': {
    get: LcuOperations['GetPlayerNotificationsV1NotificationsById']
    put: LcuOperations['PutPlayerNotificationsV1NotificationsById']
    delete: LcuOperations['DeletePlayerNotificationsV1NotificationsById']
  }
  '/plugin-manager/v1/external-plugins/availability': {
    /** Get the status of the external plugin connection. */
    get: LcuOperations['GetPluginManagerV1ExternalPluginsAvailability']
  }
  '/plugin-manager/v1/status': {
    /** Get the status of the plugin manager. */
    get: LcuOperations['GetPluginManagerV1Status']
  }
  '/plugin-manager/v2/descriptions': {
    /** Get all plugin descriptions. */
    get: LcuOperations['GetPluginManagerV2Descriptions']
  }
  '/plugin-manager/v2/descriptions/{plugin}': {
    /** Get a plugin description. */
    get: LcuOperations['GetPluginManagerV2DescriptionsByPlugin']
  }
  '/plugin-manager/v2/plugins': {
    /** Get diagnostic information for all plugins. */
    get: LcuOperations['GetPluginManagerV2Plugins']
  }
  '/plugin-manager/v2/plugins/{plugin}': {
    /** Get diagnostic information for a single plugin. */
    get: LcuOperations['GetPluginManagerV2PluginsByPlugin']
  }
  '/plugin-manager/v3/plugins-manifest': {
    /** Get the plugin manifest. */
    get: LcuOperations['GetPluginManagerV3PluginsManifest']
  }
  '/process-control/v1/process': {
    /** Returns information about the process-control. */
    get: LcuOperations['GetProcessControlV1Process']
  }
  '/process-control/v1/process/quit': {
    /** Quits the application. */
    post: LcuOperations['PostProcessControlV1ProcessQuit']
  }
  '/process-control/v1/process/restart': {
    /** Restarts the application.  Does nothing if there is already a waiting delayed restart.  Optionally accepts specific version to restart. */
    post: LcuOperations['PostProcessControlV1ProcessRestart']
  }
  '/process-control/v1/process/restart-to-repair': {
    /** Restarts the application in order to perform a full repair (including self repair). */
    post: LcuOperations['PostProcessControlV1ProcessRestartToRepair']
  }
  '/riot-messaging-service/v1/connect': {
    post: LcuOperations['PostRiotMessagingServiceV1Connect']
    delete: LcuOperations['DeleteRiotMessagingServiceV1Connect']
  }
  '/riot-messaging-service/v1/entitlements': {
    post: LcuOperations['PostRiotMessagingServiceV1Entitlements']
    delete: LcuOperations['DeleteRiotMessagingServiceV1Entitlements']
  }
  '/riot-messaging-service/v1/message/{a}': {
    get: LcuOperations['GetRiotMessagingServiceV1MessageByA']
  }
  '/riot-messaging-service/v1/message/{a}/{b}': {
    get: LcuOperations['GetRiotMessagingServiceV1MessageByAByB']
  }
  '/riot-messaging-service/v1/message/{a}/{b}/{c}': {
    get: LcuOperations['GetRiotMessagingServiceV1MessageByAByBByC']
  }
  '/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}': {
    get: LcuOperations['GetRiotMessagingServiceV1MessageByAByBByCByD']
  }
  '/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}': {
    get: LcuOperations['GetRiotMessagingServiceV1MessageByAByBByCByDByE']
  }
  '/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}': {
    get: LcuOperations['GetRiotMessagingServiceV1MessageByAByBByCByDByEByF']
  }
  '/riot-messaging-service/v1/session': {
    get: LcuOperations['GetRiotMessagingServiceV1Session']
    delete: LcuOperations['DeleteRiotMessagingServiceV1Session']
  }
  '/riot-messaging-service/v1/state': {
    get: LcuOperations['GetRiotMessagingServiceV1State']
  }
  '/riotclient/addorupdatemetric': {
    /** Adds or Updates a Metric */
    post: LcuOperations['PostRiotclientAddorupdatemetric']
  }
  '/riotclient/affinity': {
    /** Get the current runtime affinity of the application. */
    get: LcuOperations['GetRiotclientAffinity']
    /** Sets the current runtime affinity of the application. */
    post: LcuOperations['PostRiotclientAffinity']
    /** Deletes the current runtime affinity of the application. */
    delete: LcuOperations['DeleteRiotclientAffinity']
  }
  '/riotclient/app-name': {
    /** Application name without file extension */
    get: LcuOperations['GetRiotclientAppName']
  }
  '/riotclient/app-port': {
    /** Get the TCP port number that the remoting server is listening on. */
    get: LcuOperations['GetRiotclientAppPort']
  }
  '/riotclient/auth-token': {
    /** Return the auth token used by the remoting server */
    get: LcuOperations['GetRiotclientAuthToken']
  }
  '/riotclient/command-line-args': {
    /** Get the command line parameters for the application */
    get: LcuOperations['GetRiotclientCommandLineArgs']
  }
  '/riotclient/get_region_locale': {
    /** Get the current region and locale. */
    get: LcuOperations['GetRiotclientGetRegionLocale']
  }
  '/riotclient/kill-and-restart-ux': {
    /** Kills the ux process and restarts it. Used only when the ux process crashes. */
    post: LcuOperations['PostRiotclientKillAndRestartUx']
  }
  '/riotclient/kill-ux': {
    /** Kills the ux process. */
    post: LcuOperations['PostRiotclientKillUx']
  }
  '/riotclient/launch-ux': {
    /** Launches the ux process. */
    post: LcuOperations['PostRiotclientLaunchUx']
  }
  '/riotclient/machine-id': {
    /** Base64 encoded uuid identifying the user's machine */
    get: LcuOperations['GetRiotclientMachineId']
  }
  '/riotclient/new-args': {
    /** Endpoint for passing in new data. */
    post: LcuOperations['PostRiotclientNewArgs']
  }
  '/riotclient/region-locale': {
    /** Get the current region and locale. */
    get: LcuOperations['GetRiotclientRegionLocale']
    /** Update the region and locale. */
    put: LcuOperations['PutRiotclientRegionLocale']
  }
  '/riotclient/region-locale/ack': {
    /** Ux acknowledges the update to the region and locale. */
    put: LcuOperations['PutRiotclientRegionLocaleAck']
  }
  '/riotclient/set_region_locale': {
    /** Update the region and locale. */
    post: LcuOperations['PostRiotclientSetRegionLocale']
  }
  '/riotclient/show-swagger': {
    /** Open swagger in the default browser. */
    post: LcuOperations['PostRiotclientShowSwagger']
  }
  '/riotclient/splash': {
    /** Show the splash screen. */
    put: LcuOperations['PutRiotclientSplash']
    /** Hide the splash screen. */
    delete: LcuOperations['DeleteRiotclientSplash']
  }
  '/riotclient/system-info/v1/basic-info': {
    /** Get basic system information: OS, memory, processor speed, and number of physical cores */
    get: LcuOperations['GetRiotclientSystemInfoV1BasicInfo']
  }
  '/riotclient/trace': {
    /** Retrieves a completed scheduler trace. */
    get: LcuOperations['GetRiotclientTrace']
  }
  '/riotclient/unload': {
    /** Unloads the UX process */
    post: LcuOperations['PostRiotclientUnload']
  }
  '/riotclient/ux-allow-foreground': {
    /** Allows the background process to launch the game into the foregound. */
    post: LcuOperations['PostRiotclientUxAllowForeground']
  }
  '/riotclient/ux-crash-count': {
    /** Returns whether the ux has crashed or not */
    get: LcuOperations['GetRiotclientUxCrashCount']
  }
  '/riotclient/ux-flash': {
    /** Flash the ux process' main window and the taskbar/dock icon, if they exist. */
    post: LcuOperations['PostRiotclientUxFlash']
  }
  '/riotclient/ux-load-complete': {
    /** Ux notification that it has completed loading the main window. */
    put: LcuOperations['PutRiotclientUxLoadComplete']
  }
  '/riotclient/ux-minimize': {
    /** Minimize the ux process and all its windows if it exists. This does not kill the ux. */
    post: LcuOperations['PostRiotclientUxMinimize']
  }
  '/riotclient/ux-show': {
    /** Shows the ux process if it exists; create and show if it does not. */
    post: LcuOperations['PostRiotclientUxShow']
  }
  '/riotclient/ux-state': {
    /** Get the current Ux state. */
    get: LcuOperations['GetRiotclientUxState']
  }
  '/riotclient/ux-state/ack': {
    /** Ux acknowledges the update to the Ux state. */
    put: LcuOperations['PutRiotclientUxStateAck']
  }
  '/riotclient/v1/auth-tokens/{authToken}': {
    /** Register an auth token.  This is any alpha-numeric string that will be used as a password with the `riot` user when making requests. */
    put: LcuOperations['PutRiotclientV1AuthTokensByAuthToken']
    /** Unregister an existing auth token. */
    delete: LcuOperations['DeleteRiotclientV1AuthTokensByAuthToken']
  }
  '/riotclient/v1/crash-reporting/environment': {
    /** Get the crash reporting environment identifier. */
    get: LcuOperations['GetRiotclientV1CrashReportingEnvironment']
    /** Tags the crash with an environment so it can be filtered more easily. */
    put: LcuOperations['PutRiotclientV1CrashReportingEnvironment']
  }
  '/riotclient/v1/crash-reporting/logs': {
    /** Adds the enclosed log to the app's crash report. */
    post: LcuOperations['PostRiotclientV1CrashReportingLogs']
  }
  '/riotclient/v1/elevation-requests': {
    post: LcuOperations['PostRiotclientV1ElevationRequests']
  }
  '/riotclient/v1/self-update-info': {
    put: LcuOperations['PutRiotclientV1SelfUpdateInfo']
  }
  '/riotclient/zoom-scale': {
    /** Gets the last known posted zoom-scale value. */
    get: LcuOperations['GetRiotclientZoomScale']
    /** Handles changing the zoom scale value. */
    post: LcuOperations['PostRiotclientZoomScale']
  }
  '/sanitizer/v1/containsSanitized': {
    post: LcuOperations['PostSanitizerV1ContainsSanitized']
  }
  '/sanitizer/v1/sanitize': {
    post: LcuOperations['PostSanitizerV1Sanitize']
  }
  '/sanitizer/v1/status': {
    get: LcuOperations['GetSanitizerV1Status']
  }
  '/Subscribe': {
    /** Subscribes to a given event */
    post: LcuOperations['Subscribe']
  }
  '/swagger/v1/api-docs': {
    /** Retrieves the API documentation resource listing */
    get: LcuOperations['HttpApiDocsV1']
  }
  '/swagger/v1/api-docs/{api}': {
    /** Retrieves the API declaration for a supported API */
    get: LcuOperations['HttpApiDeclarationV1']
  }
  '/swagger/v2/swagger.json': {
    /** Retrieves the API documentation */
    get: LcuOperations['HttpApiDocsV2']
  }
  '/swagger/v3/openapi.json': {
    /** Retrieves the API documentation */
    get: LcuOperations['HttpApiDocsV3']
  }
  '/system/v1/builds': {
    /** Information about the current artifacts that make up this build */
    get: LcuOperations['GetSystemV1Builds']
  }
  '/telemetry/v1/application-start-time': {
    /** Gets the millisecond UNIX timestamp of when the application was started. */
    get: LcuOperations['GetTelemetryV1ApplicationStartTime']
  }
  '/telemetry/v1/common-data/{key}': {
    /** Adds/updates a common data key and value to be sent with every subsequent event. */
    post: LcuOperations['PostTelemetryV1CommonDataByKey']
  }
  '/telemetry/v1/events-once/{eventType}': {
    /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks that will be sent only once during this client executable run regardless of any javascript frontend restarts. All events will have their eventType prefixed with "riot__rclient__" */
    post: LcuOperations['PostTelemetryV1EventsOnceByEventType']
  }
  '/telemetry/v1/events-with-perf-info/{eventType}': {
    /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks. This will include current performance information along with the passed in data. Each call will record the performance counters then reset them for use in the next call. All events will have their eventType prefixed with "riot__rclient__" */
    post: LcuOperations['PostTelemetryV1EventsWithPerfInfoByEventType']
  }
  '/telemetry/v1/events/{eventType}': {
    /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks. All events will have their eventType prefixed with "riot__rclient__" */
    post: LcuOperations['PostTelemetryV1EventsByEventType']
  }
  '/telemetry/v3/events-once/{eventType}': {
    /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks using the Riot Data API that will be sent only once during this client executable run regardless of any javascript frontend restarts. All events will have their eventType prefixed with "riot__rclient__" */
    post: LcuOperations['PostTelemetryV3EventsOnceByEventType']
  }
  '/telemetry/v3/events/{eventType}': {
    /** Adds a new event to be sent to Dradis and/or other analytics/monitoring data sinks using the Riot Data API. All events will have their eventType prefixed with "riot__rclient__" */
    post: LcuOperations['PostTelemetryV3EventsByEventType']
  }
  '/tracing/v1/performance/{name}': {
    /** Starts recording of a performance metric. */
    post: LcuOperations['PostTracingV1PerformanceByName']
    /** Ends recording of a performance metric. */
    delete: LcuOperations['DeleteTracingV1PerformanceByName']
  }
  '/tracing/v1/trace/event': {
    /** Record a tracing event. */
    post: LcuOperations['PostTracingV1TraceEvent']
  }
  '/tracing/v1/trace/module': {
    /** Record a module description. */
    post: LcuOperations['PostTracingV1TraceModule']
  }
  '/tracing/v1/trace/non-timing-event/{eventName}': {
    /** Record a non timing telemetry event. */
    post: LcuOperations['PostTracingV1TraceNonTimingEventByEventName']
  }
  '/tracing/v1/trace/phase/begin': {
    /** Record a tracing phase beginning. */
    post: LcuOperations['PostTracingV1TracePhaseBegin']
  }
  '/tracing/v1/trace/phase/end': {
    /** Record a tracing phase ending. */
    post: LcuOperations['PostTracingV1TracePhaseEnd']
  }
  '/tracing/v1/trace/step-event': {
    /** Record a tracing step event. */
    post: LcuOperations['PostTracingV1TraceStepEvent']
  }
  '/tracing/v1/trace/time-series-event/{eventName}': {
    /** Record the beginning of a time series event. */
    post: LcuOperations['PostTracingV1TraceTimeSeriesEventByEventName']
    /** Record the ending of a time series event. */
    delete: LcuOperations['DeleteTracingV1TraceTimeSeriesEventByEventName']
  }
  '/tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}': {
    /** Record a marker within a time series event. */
    post: LcuOperations['PostTracingV1TraceTimeSeriesEventByEventNameMarkerByMarkerName']
  }
  '/Unsubscribe': {
    /** Unsubscribes from a given event */
    post: LcuOperations['Unsubscribe']
  }
  '/voice-chat/v1/audio-properties': {
    get: LcuOperations['GetVoiceChatV1AudioProperties']
  }
  '/voice-chat/v1/call-stats/{id}': {
    get: LcuOperations['GetVoiceChatV1CallStatsById']
  }
  '/voice-chat/v1/call-stats/aggregate': {
    get: LcuOperations['GetVoiceChatV1CallStatsAggregate']
  }
  '/voice-chat/v1/codec-settings': {
    get: LcuOperations['GetVoiceChatV1CodecSettings']
    put: LcuOperations['PutVoiceChatV1CodecSettings']
  }
  '/voice-chat/v1/config': {
    get: LcuOperations['GetVoiceChatV1Config']
  }
  '/voice-chat/v1/errors': {
    get: LcuOperations['GetVoiceChatV1Errors']
  }
  '/voice-chat/v1/push-to-talk': {
    get: LcuOperations['GetVoiceChatV1PushToTalk']
    put: LcuOperations['PutVoiceChatV1PushToTalk']
  }
  '/voice-chat/v1/push-to-talk/check-available': {
    post: LcuOperations['PostVoiceChatV1PushToTalkCheckAvailable']
  }
  '/voice-chat/v2/devices/capture': {
    get: LcuOperations['GetVoiceChatV2DevicesCapture']
  }
  '/voice-chat/v2/devices/capture/permission': {
    get: LcuOperations['GetVoiceChatV2DevicesCapturePermission']
  }
  '/voice-chat/v2/devices/capture/prompt-for-permission': {
    put: LcuOperations['PutVoiceChatV2DevicesCapturePromptForPermission']
  }
  '/voice-chat/v2/devices/render': {
    get: LcuOperations['GetVoiceChatV2DevicesRender']
  }
  '/voice-chat/v2/sessions': {
    get: LcuOperations['GetVoiceChatV2Sessions']
    post: LcuOperations['PostVoiceChatV2Sessions']
    delete: LcuOperations['DeleteVoiceChatV2Sessions']
  }
  '/voice-chat/v2/sessions/{id}': {
    get: LcuOperations['GetVoiceChatV2SessionsById']
    post: LcuOperations['PostVoiceChatV2SessionsById']
    delete: LcuOperations['DeleteVoiceChatV2SessionsById']
  }
  '/voice-chat/v2/sessions/{sessionId}/participants/{participantId}': {
    get: LcuOperations['GetVoiceChatV2SessionsBySessionIdParticipantsByParticipantId']
    put: LcuOperations['PutVoiceChatV2SessionsBySessionIdParticipantsByParticipantId']
  }
  '/voice-chat/v2/settings': {
    get: LcuOperations['GetVoiceChatV2Settings']
    put: LcuOperations['PutVoiceChatV2Settings']
  }
  '/voice-chat/v2/state': {
    get: LcuOperations['GetVoiceChatV2State']
  }
  '/WebSocketFormat': {
    /**
     * Controls the console output format
     * @description With no arguments, returns the current output format being used. If a format is specified, switches the console output to that format.
     */
    post: LcuOperations['WebSocketFormat']
  }
}

export type LcuComponents = ExcludeNever<{
  schemas: {
    'ActiveBoostsLcdsStoreFulfillmentNotification': {
      data?: {
        [key: string]: unknown | undefined
      }
      inventoryType?: string
    }
    'ActiveBoostsLcdsSummonerActiveBoostsDTO': {
      /** Format: int64 */
      ipBoostEndDate?: number
      /** Format: int32 */
      ipBoostPerWinCount?: number
      /** Format: int32 */
      ipLoyaltyBoost?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int64 */
      xpBoostEndDate?: number
      /** Format: int32 */
      xpBoostPerWinCount?: number
      /** Format: int32 */
      xpLoyaltyBoost?: number
    }
    /** @enum {string} */
    'AggregationType': 'none' | 'sum' | 'average'
    'AlertDTO': {
      /** Format: int64 */
      alertTime?: number
    }
    'BannedChampion': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      pickTurn?: number
      /** Format: int32 */
      teamId?: number
    }
    'BasePlayerDTO': {
      /** Format: int32 */
      code?: number
      data?: LcuComponents['schemas']['MatchedPlayerDTO']
      message?: string
    }
    /** @description User Experience Settings Operating System Information */
    'basicOperatingSystemInfo': {
      edition?: string
      platform?: string
      versionMajor?: string
      versionMinor?: string
    }
    /** @description User Experience Settings System Information */
    'basicSystemInfo': {
      operatingSystem?: LcuComponents['schemas']['basicOperatingSystemInfo']
      /** Format: int64 */
      physicalMemory?: number
      /** Format: int32 */
      physicalProcessorCores?: number
      /** Format: int32 */
      processorSpeed?: number
    }
    /** @description Represents a cancelled asynchronous operation. */
    'BindingAsyncCancelEvent': {
      /**
       * Format: int32
       * @description Asynchronous operation token
       */
      asyncToken?: number
    }
    /** @description Represents a failed asynchronous operation. */
    'BindingAsyncFailureEvent': {
      /**
       * Format: int32
       * @description Asynchronous operation token
       */
      asyncToken?: number
      /** @description Error message */
      error?: string
    }
    /**
     * @description Possible states of an asynchronous operation.
     * @enum {string}
     */
    'BindingAsyncState': 'None' | 'Running' | 'Cancelling' | 'Cancelled' | 'Succeeded' | 'Failed'
    /** @description Represents the parameters of a call to a provided callback. */
    'BindingCallbackEvent': {
      /**
       * Format: int32
       * @description ID of the callback being invoked
       */
      id?: number
      /** @description Callback parameters */
      parameters?: {
        [key: string]: unknown | undefined
      }[]
    }
    /** @description Describes the exposed native API. */
    'BindingFullApiHelp': {
      events?: LcuComponents['schemas']['BindingFullEventHelp'][]
      functions?: LcuComponents['schemas']['BindingFullFunctionHelp'][]
      types?: LcuComponents['schemas']['BindingFullTypeHelp'][]
    }
    /** @description Describes a function parameter. */
    'BindingFullArgumentHelp': {
      description?: string
      name?: string
      optional?: boolean
      type?: LcuComponents['schemas']['BindingFullTypeIdentifier']
    }
    /** @description Describes an enumerator. */
    'BindingFullEnumValueHelp': {
      description?: string
      name?: string
      /** Format: int32 */
      value?: number
    }
    /** @description Describes an event. */
    'BindingFullEventHelp': {
      description?: string
      name?: string
      nameSpace?: string
      tags?: string[]
      type?: LcuComponents['schemas']['BindingFullTypeIdentifier']
    }
    /** @description Describes a member of a struct. */
    'BindingFullFieldHelp': {
      description?: string
      name?: string
      /** Format: int32 */
      offset?: number
      optional?: boolean
      type?: LcuComponents['schemas']['BindingFullTypeIdentifier']
    }
    /** @description Describes a function. */
    'BindingFullFunctionHelp': {
      arguments?: LcuComponents['schemas']['BindingFullArgumentHelp'][]
      async?: string
      description?: string
      help?: string
      name?: string
      nameSpace?: string
      returns?: LcuComponents['schemas']['BindingFullTypeIdentifier']
      tags?: string[]
      threadSafe?: boolean
    }
    /** @description Describes a struct or enum type. */
    'BindingFullTypeHelp': {
      description?: string
      fields?: LcuComponents['schemas']['BindingFullFieldHelp'][]
      name?: string
      nameSpace?: string
      /** Format: int32 */
      size?: number
      tags?: string[]
      values?: LcuComponents['schemas']['BindingFullEnumValueHelp'][]
    }
    /** @description Describes the type of a value. */
    'BindingFullTypeIdentifier': {
      elementType?: string
      type?: string
    }
    /** @description Represents generic data for an asynchronous event. */
    'BindingGenericAsyncEvent': {
      /**
       * Format: int32
       * @description Asynchronous operation token
       */
      asyncToken?: number
      /** @description Event data */
      data?: {
        [key: string]: unknown | undefined
      }
    }
    /** @description Represents generic data for an event. */
    'BindingGenericEvent': {
      /** @description Event data */
      data?: {
        [key: string]: unknown | undefined
      }
    }
    /**
     * @description Help format for binding functions and types.
     * @enum {string}
     */
    'BindingHelpFormat': 'Full' | 'Epytext'
    'BoostTeamSkinRentalDTO': {
      availableSkins?: number[]
      /** Format: int64 */
      ipReward?: number
      /** Format: int64 */
      ipRewardForPurchaser?: number
      /** Format: int64 */
      price?: number
      skinUnlockMode?: string
      summonerName?: string
      unlocked?: boolean
    }
    'Bracket': {
      /** Format: int64 */
      id?: number
      matches?: LcuComponents['schemas']['BracketMatch'][]
      /** Format: int64 */
      phaseId?: number
      rosters?: LcuComponents['schemas']['BracketRoster'][]
      /** Format: int32 */
      size?: number
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      version?: number
    }
    'BracketMatch': {
      /** Format: int32 */
      failRosterStatus?: number
      /** Format: int64 */
      forfeitRosterId?: number
      /** Format: int64 */
      gameId?: number
      /** Format: int64 */
      gameStartTime?: number
      /** Format: int32 */
      highestPossiblePosition?: number
      /** Format: int64 */
      id?: number
      loserBracket?: boolean
      /** Format: int32 */
      lowestPossiblePosition?: number
      /** Format: int32 */
      order?: number
      resultHistory?: string
      /** Format: int64 */
      rosterId1?: number
      /** Format: int64 */
      rosterId2?: number
      /** Format: int32 */
      round?: number
      /** Format: int64 */
      roundStartTime?: number
      status?: LcuComponents['schemas']['ClientBracketMatchStatus']
      /** Format: int64 */
      winnerId?: number
    }
    'BracketRoster': {
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      name?: string
      /** Format: int64 */
      rosterId?: number
      shortName?: string
    }
    'BuildInfo': {
      branch?: string
      patchline?: string
      patchlineVisibleName?: string
      version?: string
    }
    /** @enum {string} */
    'CapacityEnum': 'LOW' | 'MEDIUM' | 'HIGH' | 'FULL'
    'ChampionMasteryPublicDTO': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championLevel?: number
      /** Format: int32 */
      championPoints?: number
    }
    'ChampionScoutingDTO': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      gameCount?: number
      /** Format: float */
      kda?: number
      /** Format: int32 */
      winCount?: number
    }
    'ChampSelectLcdsGameDTO': {
      bannedChampions?: LcuComponents['schemas']['BannedChampion'][]
      gameMutators?: string[]
      gameState?: string
      /** Format: int64 */
      id?: number
      multiUserChatJwtMap?: {
        [key: string]: string | undefined
      }
      name?: string
      /** Format: int64 */
      optimisticLock?: number
      /** Format: int32 */
      pickTurn?: number
      playerChampionSelections?: LcuComponents['schemas']['ChampSelectLcdsPlayerChampionSelectionDTO'][]
      queueTypeName?: string
      roomName?: string
      roomPassword?: string
      /** Format: int64 */
      spectatorDelay?: number
      statusOfParticipants?: string
      teamOne?: {
        [key: string]: unknown | undefined
      }[]
      teamTwo?: {
        [key: string]: unknown | undefined
      }[]
    }
    'ChampSelectLcdsGameTimerDTO': {
      currentGameState?: string
      /** Format: double */
      remainingTimeInMillis?: number
    }
    'ChampSelectLcdsObfuscatedParticipant': {
      /** Format: int64 */
      gameUniqueId?: number
    }
    'ChampSelectLcdsPlayerChampionSelectionDTO': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      selectedSkinIndex?: number
      /** Format: int32 */
      spell1Id?: number
      /** Format: int32 */
      spell2Id?: number
      summonerInternalName?: string
    }
    'ChampSelectLcdsPlayerParticipant': {
      /** Format: int32 */
      pickMode?: number
      /** Format: int32 */
      pickTurn?: number
      /** Format: int64 */
      summonerId?: number
      summonerInternalName?: string
      summonerName?: string
    }
    'ChampSelectLcdsPointSummary': {
      /** Format: int32 */
      currentPoints?: number
      /** Format: int32 */
      maxRolls?: number
      /** Format: int32 */
      numberOfRolls?: number
      /** Format: int32 */
      pointsCostToRoll?: number
      /** Format: int32 */
      pointsToNextRoll?: number
    }
    'ChampSelectLcdsPotentialTradersDTO': {
      potentialTraders?: string[]
    }
    'ChampSelectLcdsRollResult': {
      /** Format: int32 */
      championId?: number
      pointSummary?: LcuComponents['schemas']['ChampSelectLcdsPointSummary']
    }
    'ChampSelectLcdsTradeContractDTO': {
      /** Format: int32 */
      requesterChampionId?: number
      requesterInternalSummonerName?: string
      /** Format: int32 */
      responderChampionId?: number
      responderInternalSummonerName?: string
      state?: string
    }
    'ClashEventData': {
      /** Format: int64 */
      bracket?: number
      earnedDate?: string
      playerUUIDs?: string[]
      rewardSpec?: LcuComponents['schemas']['ClashRewardSpec']
      rewardType?: string
      /** Format: int64 */
      rosterId?: number
      /** Format: int32 */
      seasonId?: number
      teamLogoChromaId?: string
      teamLogoName?: string
      teamName?: string
      teamShortName?: string
      theme?: string
      tier?: string
      /** Format: int64 */
      tournamentId?: number
      tournamentName?: string
    }
    'ClashOfflineNotification': {
      metaData?: {
        [key: string]: string | undefined
      }
      reason?: string
      /** Format: int64 */
      tournamentId?: number
    }
    'ClashRewardConfigClient': {
      entries?: LcuComponents['schemas']['ClashRewardConfigEntry'][]
      grantToSub?: boolean
      keyDef?: LcuComponents['schemas']['ClashRewardKeyType'][]
      name?: string
    }
    'ClashRewardConfigEntry': {
      key?: string
      vals?: LcuComponents['schemas']['ClashRewardOutput'][]
    }
    'ClashRewardDefinition': {
      rewardSpec?: LcuComponents['schemas']['ClashRewardSpec']
      rewardType?: LcuComponents['schemas']['ClashRewardType']
    }
    /** @enum {string} */
    'ClashRewardKeyType':
      | 'TIER'
      | 'CUP'
      | 'TICKET_COUNT'
      | 'TICKET_TYPE'
      | 'LOWEST_POSITION'
      | 'TOURNAMENT_WIN_POS'
      | 'WINS'
      | 'POINTS'
      | 'THEME_VP'
      | 'SEASON_VP'
      | 'SEASON_FLAG_COUNT'
      | 'TOC_STATE'
    'ClashRewardOutput': {
      alternative?: LcuComponents['schemas']['ClashRewardDefinition']
      grant?: LcuComponents['schemas']['ClashRewardTime']
      primary?: LcuComponents['schemas']['ClashRewardDefinition']
      show?: LcuComponents['schemas']['ClashRewardTime']
    }
    'ClashRewardSpec': {
      bracket?: string
      cup?: string
      gem?: string
      level?: string
      name?: string
      pedestal?: string
      quantity?: string
      seasonId?: string
      theme?: string
      tier?: string
    }
    /** @enum {string} */
    'ClashRewardTime': 'NONE' | 'EOG' | 'EOB' | 'EOT'
    /** @enum {string} */
    'ClashRewardType': 'TROPHY' | 'FLAG' | 'FRAME' | 'LOGO' | 'LOOT' | 'VP' | 'TOC'
    'ClashSeasonRewardResult': {
      banned?: boolean
      eligible?: boolean
      /** Format: int32 */
      honorLevel?: number
      /** Format: int64 */
      playerId?: number
      rewards?: LcuComponents['schemas']['ClashRewardDefinition'][]
      /** Format: int32 */
      seasonId?: number
      /** Format: int32 */
      seasonVp?: number
    }
    /** @enum {string} */
    'ClientBracketMatchStatus': 'UPCOMING' | 'STARTED' | 'COMPLETED'
    'ClientConfigAuthenticatedConnection': {
      authToken?: string
      /** Format: int32 */
      connectionId?: number
      subscribed?: boolean
    }
    'ClientConfigBuildInfo': {
      branch?: string
      branchFull?: string
      /** Format: int32 */
      codeBuildId?: number
      /** Format: int32 */
      contentBuildId?: number
      gameBranch?: string
      gameBranchFull?: string
      /** Format: int32 */
      gameDataBuildId?: number
      patchline?: string
      patchlineVisibleName?: string
      version?: string
    }
    'ClientConfigClientConfig': {
      data?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      params?: LcuComponents['schemas']['ClientConfigConfigParams']
      /** Format: int64 */
      updateTime?: number
    }
    'ClientConfigConfigNamespaceUpdate': {
      player?: string[]
      public?: string[]
    }
    'ClientConfigConfigParams': {
      appName?: string
      namespace?: string
      patchline?: string
      region?: string
      type?: LcuComponents['schemas']['ClientConfigConfigType']
      version?: string
    }
    /** @enum {string} */
    'ClientConfigConfigReadinessEnum': 'NotReady' | 'Ready' | 'Disabled'
    'ClientConfigConfigStatus': {
      readiness?: LcuComponents['schemas']['ClientConfigConfigReadinessEnum']
      /** Format: int64 */
      updateId?: number
    }
    /** @enum {string} */
    'ClientConfigConfigType': 'public' | 'player'
    'ClientConfigDataPaths': {
      configRoot?: string
      dataRoot?: string
      localSettingsPath?: string
      privateSettingsPath?: string
      userDataRoot?: string
    }
    'ClientConfigDepInjectorEntitlements': {
      accessToken?: string
      entitlements?: string[]
      issuer?: string
      subject?: string
      token?: string
    }
    'ClientConfigDepInjectorEntitlementsUpdate': {
      EntitlementsTokenResource?: LcuComponents['schemas']['ClientConfigDepInjectorEntitlements']
      EntitlementsUpdateType?: LcuComponents['schemas']['ClientConfigDepInjectorEntitlementsUpdateType']
    }
    /** @enum {string} */
    'ClientConfigDepInjectorEntitlementsUpdateType': 'Create' | 'Update' | 'Delete'
    'ClientConfigEntitlements': {
      accessToken?: string
      entitlements?: string[]
      issuer?: string
      subject?: string
      token?: string
    }
    'ClientConfigEntitlementsUpdate': {
      EntitlementsTokenResource?: LcuComponents['schemas']['ClientConfigEntitlements']
      UpdateType?: LcuComponents['schemas']['ClientConfigUpdateType']
    }
    'ClientConfigSession': {
      connections?: LcuComponents['schemas']['ClientConfigAuthenticatedConnection'][]
      isInternal?: boolean
      patchlineId?: string
      productId?: string
      version?: string
    }
    /** @enum {string} */
    'ClientConfigUpdateType': 'Create' | 'Update' | 'Delete'
    'ClientDynamicConfig': {
      compressed?: boolean
      configs?: string
      delta?: boolean
    }
    /** @enum {string} */
    'ClientRequestError':
      | 'ALREADY_IN_GAME'
      | 'ALREADY_MEMBER'
      | 'ALREADY_INVITED'
      | 'ALREADY_SUGGESTED'
      | 'ALREADY_DECLINE_WITHDRAW'
      | 'ALREADY_DECLINED'
      | 'ALREADY_VOTE_WITHDRAW'
      | 'ALREADY_IN_PHASE'
      | 'CAPTAIN_NOT_ALLOWED'
      | 'CANNOT_SUB'
      | 'CLASH_BANNED'
      | 'CLASH_BANNED_INVITEE'
      | 'ELIGIBILITY_SERVER_ERROR'
      | 'FAIL_INVITE'
      | 'FAIL_SUGGESTINVITE'
      | 'HONOR_INELIGIBILITY'
      | 'LOGO_NOT_ALLOWED'
      | 'LOGOCOLOR_NOT_ALLOWED'
      | 'IN_OTHER_ROSTER'
      | 'IN_OTHER_PENDINGROSTER'
      | 'IN_OTHER_PENDINGSUB'
      | 'IN_OTHER_PHASE_OF_PERIOD'
      | 'INACTIVE_REGISTRATION'
      | 'INACTIVE_PHASE'
      | 'INTERNAL_ERROR'
      | 'INVALID_ROSTER'
      | 'INVALID_BUY_BACK'
      | 'INVALID_SUB'
      | 'INVALID_TOURNAMENT'
      | 'INVALID_PHASE'
      | 'INVALID_INVITEE'
      | 'INVALID_ROSTER_MEMBER_SIZE'
      | 'INVALID_POSITION'
      | 'INVALID_LOGO'
      | 'INVALID_LOGOCOLOR'
      | 'INVALID_NAME'
      | 'INVALID_SHORTNAME'
      | 'INVALID_CHECKELIGIBILITY_SIZE'
      | 'INVALID_BRACKET'
      | 'INVALID_MATCHID'
      | 'INVALID_PLAYER'
      | 'INVALID_Tier'
      | 'INVALID_WITHDRAW'
      | 'INVALID_MATCHSTATUS_FORGAMEEND'
      | 'INVALID_REWARD_CONFIG_NAME'
      | 'INVALID_SEASON'
      | 'MAX_INVITED'
      | 'MAX_SUBED'
      | 'MAX_ROSTER_FETCHSIZE'
      | 'MAX_SUB_SIZE'
      | 'SUB_IN_OTHER_ROSTER'
      | 'NO_SAME_PLAYER'
      | 'NO_AVAILABLE_PHASE'
      | 'NOT_CAPTAIN'
      | 'NOT_MEMBER'
      | 'NOT_INVITEE'
      | 'NOT_SEED_INTO_LEAGUE'
      | 'NOT_ENOUGH_TICKETS'
      | 'NOT_ALLOWED_DELETE_TOURNAMENT'
      | 'NOT_ALLOWED_DELETE_TOURNAMENT_REWARD_CONFIG'
      | 'NO_PERMISSION'
      | 'NO_MORE_RECOMMEND'
      | 'OVER_SUGGESTION_INVITE'
      | 'OVER_INVITE'
      | 'PENDING_ROSTER_NOT_READY'
      | 'PENDING_ROSTER_FULL'
      | 'PENDING_ROSTER_CLOSE'
      | 'PHASE_CANCELLED'
      | 'PHASE_FULL'
      | 'ROSTER_ELIMINATED'
      | 'ROSTER_DISBAND_NOT_ALLOWED'
      | 'SUGGEST_INVITEE_NOT_EXIST'
      | 'SMS_NOT_VERIFIED'
      | 'TICKET_ALREADY_SET'
      | 'TICKET_OFFER_NOT_EXIST'
      | 'TICKET_OFFER_INVALID_COUNT'
      | 'TICKET_NOT_SET'
      | 'VOICE_NOT_AVAILABLE'
      | 'WITHDRAW_NOT_ALLOWED'
      | 'WITHDRAW_CANCEL_NOT_ALLOWED'
      | 'WITHDRAW_LOCKOUT'
    'CollectionsLcdsChampionDTO': {
      active?: boolean
      botEnabled?: boolean
      /** Format: int32 */
      championId?: number
      championSkins?: LcuComponents['schemas']['CollectionsLcdsChampionSkinDTO'][]
      /** Format: int64 */
      endDate?: number
      freeToPlay?: boolean
      freeToPlayReward?: boolean
      owned?: boolean
      /** Format: int64 */
      purchased?: number
      /** Format: int64 */
      purchaseDate?: number
      rankedPlayEnabled?: boolean
      sources?: string[]
      /** Format: int32 */
      winCountRemaining?: number
    }
    'CollectionsLcdsChampionSkinDTO': {
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      endDate?: number
      freeToPlayReward?: boolean
      lastSelected?: boolean
      owned?: boolean
      /** Format: int64 */
      purchaseDate?: number
      /** Format: int32 */
      skinId?: number
      sources?: string[]
      stillObtainable?: boolean
      /** Format: int32 */
      winCountRemaining?: number
    }
    'CollectionsLcdsClientDynamicConfigurationNotification': {
      configs?: string
      delta?: boolean
    }
    'CollectionsLcdsRentalUpdateNotification': {
      data?: {
        [key: string]: unknown | undefined
      }
      inventoryType?: string
    }
    'CollectionsLcdsStoreFulfillmentNotification': {
      data?: {
        [key: string]: unknown | undefined
      }
      inventoryType?: string
    }
    'ContentItemIdentifier': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'cookie': {
      domain?: string
      /** Format: int64 */
      expires?: number
      httponly?: boolean
      name?: string
      path?: string
      secure?: boolean
      url?: string
      value?: string
    }
    'CraftLootRefTransactionDTO': {
      /** Format: int64 */
      accountId?: number
      clientId?: string
      lootNameRefIds?: LcuComponents['schemas']['LootNameRefId'][]
      /** Format: int64 */
      playerId?: number
      puuid?: string
      recipeName?: string
      /** Format: int32 */
      repeat?: number
    }
    'CrashReportingEnvironment': {
      environment?: string
      userId?: string
      userName?: string
    }
    'DownloadUrlRequestV2': {
      /** Format: int64 */
      gameId?: number
      platformId?: string
    }
    'DownloadUrlResponseV2': {
      url?: string
    }
    /** @enum {string} */
    'ElevationAction': 'FixBrokenPermissions'
    'ElevationRequest': {
      action?: LcuComponents['schemas']['ElevationAction']
    }
    'EndOfGameLcdsClientReportV1': {
      comments?: string
      /** Format: int64 */
      gameId?: number
      /** Format: int64 */
      offenderSummonerId?: number
      offenses?: string
    }
    'EndOfGameLcdsEndOfGameStats': {
      /** Format: int32 */
      basePoints?: number
      /** Format: int32 */
      battleBoostIpEarned?: number
      /** Format: int32 */
      boostIpEarned?: number
      /** Format: int32 */
      boostXpEarned?: number
      causedEarlySurrender?: boolean
      /** Format: int32 */
      completionBonusPoints?: number
      /** Format: int32 */
      coOpVsAiMinutesLeftToday?: number
      /** Format: int32 */
      coOpVsAiMsecsUntilReset?: number
      /** Format: int32 */
      customMinutesLeftToday?: number
      /** Format: int32 */
      customMsecsUntilReset?: number
      difficulty?: string
      earlySurrenderAccomplice?: boolean
      /** Format: int32 */
      elo?: number
      /** Format: int32 */
      eloChange?: number
      /** Format: int32 */
      experienceEarned?: number
      /** Format: int32 */
      experienceTotal?: number
      /** Format: int32 */
      firstWinBonus?: number
      gameEndedInEarlySurrender?: boolean
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      gameLength?: number
      gameMode?: string
      gameMutators?: string[]
      gameType?: string
      imbalancedTeamsNoPoints?: boolean
      invalid?: boolean
      /** Format: int32 */
      ipEarned?: number
      /** Format: int32 */
      ipTotal?: number
      leveledUp?: boolean
      /** Format: int32 */
      loyaltyBoostIpEarned?: number
      /** Format: int32 */
      loyaltyBoostXpEarned?: number
      multiUserChatJwt?: string
      myTeamInfo?: LcuComponents['schemas']['EndOfGameLcdsTeamInfo']
      myTeamStatus?: string
      newSpells?: LcuComponents['schemas']['EndOfGameLcdsSpell'][]
      /** Format: int32 */
      odinBonusIp?: number
      otherTeamInfo?: LcuComponents['schemas']['EndOfGameLcdsTeamInfo']
      otherTeamPlayerParticipantStats?: LcuComponents['schemas']['EndOfGameLcdsPlayerParticipantStatsSummary'][]
      /** Format: int32 */
      partyRewardsBonusIpEarned?: number
      pointsPenalties?: LcuComponents['schemas']['EndOfGameLcdsPointsPenalty'][]
      /** Format: int64 */
      previousLevel?: number
      /** Format: int64 */
      previousXpTotal?: number
      /** Format: int32 */
      queueBonusEarned?: number
      queueType?: string
      ranked?: boolean
      /** Format: int64 */
      reportGameId?: number
      roomName?: string
      roomPassword?: string
      /** Format: int32 */
      rpEarned?: number
      sendStatsToTournamentProvider?: boolean
      /** Format: int32 */
      skinId?: number
      /** Format: int32 */
      skinIndex?: number
      summonerName?: string
      /** Format: int32 */
      talentPointsGained?: number
      teamEarlySurrendered?: boolean
      teamPlayerParticipantStats?: LcuComponents['schemas']['EndOfGameLcdsPlayerParticipantStatsSummary'][]
      /** Format: int32 */
      timeUntilNextFirstWinBonus?: number
      /** Format: int64 */
      userId?: number
    }
    'EndOfGameLcdsHarassmentReport': {
      comment?: string
      /** Format: int64 */
      gameId?: number
      offense?: string
      /** Format: int64 */
      reportedSummonerId?: number
      /** Format: int64 */
      reportingSummonerId?: number
      reportSource?: string
    }
    'EndOfGameLcdsPlayerParticipantStatsSummary': {
      botPlayer?: boolean
      /** Format: int32 */
      championId?: number
      detectedTeamPosition?: string
      /** Format: int32 */
      elo?: number
      /** Format: int32 */
      eloChange?: number
      /** Format: int64 */
      gameId?: number
      leaver?: boolean
      /** Format: int32 */
      leaves?: number
      /** Format: int32 */
      level?: number
      /** Format: int32 */
      losses?: number
      /** Format: int32 */
      profileIconId?: number
      selectedPosition?: string
      /** Format: int32 */
      skinIndex?: number
      skinName?: string
      /** Format: int32 */
      spell1Id?: number
      /** Format: int32 */
      spell2Id?: number
      statistics?: LcuComponents['schemas']['EndOfGameLcdsRawStatDTO'][]
      summonerName?: string
      /** Format: int32 */
      teamId?: number
      /** Format: int64 */
      userId?: number
      /** Format: int32 */
      wins?: number
    }
    'EndOfGameLcdsPointsPenalty': {
      /** Format: double */
      penalty?: number
      type?: string
    }
    'EndOfGameLcdsRawStatDTO': {
      statTypeName?: string
      /** Format: int64 */
      value?: number
    }
    'EndOfGameLcdsSpell': {
      /** Format: int32 */
      spellId?: number
    }
    'EndOfGameLcdsTeamId': {
      fullId?: string
    }
    'EndOfGameLcdsTeamInfo': {
      memberStatusString?: string
      name?: string
      /** Format: int64 */
      secondsUntilEligibleForDeletion?: number
      tag?: string
      teamId?: LcuComponents['schemas']['EndOfGameLcdsTeamId']
    }
    'EntitlementsToken': {
      accessToken?: string
      entitlements?: string[]
      issuer?: string
      subject?: string
      token?: string
    }
    'EogLcdsGameDTO': {
      bannedChampions?: LcuComponents['schemas']['BannedChampion'][]
      gameState?: string
      /** Format: int64 */
      id?: number
      teamOne?: LcuComponents['schemas']['PlayerParticipant'][]
      teamTwo?: LcuComponents['schemas']['PlayerParticipant'][]
    }
    /** @enum {string} */
    'ExternalPluginsAvailability':
      | 'NotAvailable'
      | 'Preparing'
      | 'Connected'
      | 'Recovering'
      | 'Error'
    'ExternalPluginsResource': {
      errorString?: string
      state?: LcuComponents['schemas']['ExternalPluginsAvailability']
    }
    'FailedInvite': {
      exception?: LcuComponents['schemas']['ClientRequestError']
      /** Format: int64 */
      playerId?: number
    }
    'GameflowLcdsGameDTO': {
      gameMode?: string
      /** Format: int32 */
      gameQueueConfigId?: number
      gameState?: string
      gameType?: string
      /** Format: int32 */
      gameTypeConfigId?: number
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxNumPlayers?: number
      playerChampionSelections?: {
        [key: string]: unknown | undefined
      }[]
      queueTypeName?: string
      /** Format: int32 */
      spectatorDelay?: number
      teamOne?: {
        [key: string]: unknown | undefined
      }[]
      teamTwo?: {
        [key: string]: unknown | undefined
      }[]
    }
    'GameflowLcdsPlayerCredentialsDto': {
      encryptionKey?: string
      /** Format: int64 */
      gameId?: number
      observer?: boolean
      observerEncryptionKey?: string
      observerServerIp?: string
      observerServerPort?: number
      serverIp?: string
      serverPort?: number
      /** Format: int64 */
      summonerId?: number
    }
    'GameflowLcdsReconnectInfoDto': {
      game?: LcuComponents['schemas']['GameflowLcdsGameDTO']
      playerCredentials?: LcuComponents['schemas']['GameflowLcdsPlayerCredentialsDto']
      /** Format: int32 */
      reconnectDelay?: number
    }
    /** @enum {string} */
    'GameQueuesLcdsAllowSpectators': 'NONE' | 'LOBBYONLY' | 'DROPINONLY' | 'ALL'
    'GameQueuesLcdsGameQueueConfig': {
      /** Format: int32 */
      blockedMinutesThreshold?: number
      botsCanSpawnOnBlueSide?: boolean
      cacheName?: string
      disallowFreeChampions?: boolean
      gameMode?: string
      gameMutators?: string[]
      /** Format: int32 */
      gameTypeConfigId?: number
      /** Format: int32 */
      id?: number
      /** Format: int64 */
      lastToggledOffTime?: number
      /** Format: int64 */
      lastToggledOnTime?: number
      mapSelectionAlgorithm?: string
      matchingThrottleConfig?: LcuComponents['schemas']['GameQueuesLcdsMatchingThrottleConfig']
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxSummonerLevelForFirstWinOfTheDay?: number
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minimumQueueDodgeDelayTime?: number
      /** Format: int32 */
      minLevel?: number
      /** Format: int32 */
      numPlayersPerTeam?: number
      pointsConfigKey?: string
      queueBonusKey?: string
      queueState?: string
      queueStateString?: string
      randomizeTeamSizes?: boolean
      ranked?: boolean
      removalFromGameAllowed?: boolean
      /** Format: int32 */
      removalFromGameDelayMinutes?: number
      supportedMapIds?: number[]
      teamOnly?: boolean
      thresholdEnabled?: boolean
      /** Format: int64 */
      thresholdSize?: number
      type?: string
      typeString?: string
    }
    'GameQueuesLcdsMatchingThrottleConfig': {
      cacheName?: string
      /** Format: int64 */
      limit?: number
    }
    'IdsDTO': {
      missionIds?: string[]
      seriesIds?: string[]
    }
    /** @enum {string} */
    'InviteType': 'FREEAGENT' | 'FRIEND' | 'SUGGEST' | 'SELFJOIN' | 'NONE'
    'LcdsBotParticipant': {
      /** Format: int32 */
      botSkillLevel?: number
      /** Format: int64 */
      summonerId?: number
      summonerInternalName?: string
      summonerName?: string
      teamId?: string
    }
    'LCDSBroadcastNotification': {
      broadcastMessages?: LcuComponents['schemas']['LolServiceStatusBroadcastMessage'][]
    }
    'LCDSChampionReward': {
      /** Format: int32 */
      championId?: number
      skins?: number[]
    }
    'LcdsFailedJoinPlayer': {
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['LcdsSummoner']
    }
    'LcdsGameDTO': {
      gameMode?: string
      gameMutators?: string[]
      gameState?: string
      gameType?: string
      /** Format: int32 */
      gameTypeConfigId?: number
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxNumPlayers?: number
      multiUserChatJwtMap?: {
        [key: string]: string | undefined
      }
      name?: string
      observers?: LcuComponents['schemas']['LcdsPlayerParticipant'][]
      /** Format: int64 */
      optimisticLock?: number
      ownerSummary?: LcuComponents['schemas']['LcdsPlayerParticipant']
      passbackDataPacket?: string
      passbackUrl?: string
      practiceGameRewardsDisabledReasons?: string[]
      roomName?: string
      roomPassword?: string
      spectatorsAllowed?: string
      teamOne?: LcuComponents['schemas']['LcdsPlayerParticipant'][]
      teamTwo?: LcuComponents['schemas']['LcdsPlayerParticipant'][]
    }
    'LcdsGameInviteBaseRuntimeException': {
      rootCauseClassname?: string
    }
    'LcdsGameMap': {
      description?: string
      displayName?: string
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      minCustomPlayers?: number
      name?: string
      /** Format: int32 */
      totalPlayers?: number
    }
    'LcdsGameNotification': {
      messageArgument?: string
      messageCode?: string
      type?: string
    }
    'LCDSGlobalRewards': {
      allChampions?: boolean
    }
    'LcdsInvitationRequest': {
      gameMetaData?: string
      invitationId?: string
      invitationState?: LcuComponents['schemas']['LcdsInvitationState']
      invitePayload?: string
      inviter?: LcuComponents['schemas']['LcdsInviter']
      inviteType?: string
      owner?: LcuComponents['schemas']['LcdsPlayer']
    }
    /** @enum {string} */
    'LcdsInvitationState': 'ACTIVE' | 'ON_HOLD' | 'REVOKED'
    'LcdsInvitee': {
      inviteeState?: LcuComponents['schemas']['LcdsInviteeState']
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    /** @enum {string} */
    'LcdsInviteeState':
      | 'CREATOR'
      | 'PENDING'
      | 'DECLINED'
      | 'ACCEPTED'
      | 'ACCEPT_FAILED'
      | 'JOINED'
      | 'QUIT'
      | 'KICKED'
      | 'BANNED'
    'LcdsInviteFailed': {
      exception?: LcuComponents['schemas']['LcdsGameInviteBaseRuntimeException']
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LcdsInvitePrivileges': {
      canInvite?: boolean
    }
    'LcdsInviter': {
      previousSeasonHighestTier?: string
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LcdsLobbyStatus': {
      chatKey?: string
      gameMetaData?: string
      invitationId?: string
      invitees?: LcuComponents['schemas']['LcdsInvitee'][]
      members?: LcuComponents['schemas']['LcdsMember'][]
      owner?: LcuComponents['schemas']['LcdsPlayer']
    }
    'LCDSLoyaltyRewards': {
      champions?: LcuComponents['schemas']['LCDSChampionReward'][]
      global?: LcuComponents['schemas']['LCDSGlobalRewards']
      /** Format: int32 */
      ipBoost?: number
      /** Format: int32 */
      xpBoost?: number
    }
    'LCDSLoyaltyStateChangeNotification': {
      /** Format: int64 */
      accountId?: number
      notificationCategory?: LcuComponents['schemas']['LCDSLoyaltyStateChangeNotificationCategory']
      rewards?: LcuComponents['schemas']['LCDSLoyaltyRewards']
    }
    /** @enum {string} */
    'LCDSLoyaltyStateChangeNotificationCategory':
      | 'legacy'
      | 'grant'
      | 'expiry'
      | 'change'
      | 'revoke'
      | 'disabled'
    'LcdsMember': {
      hasDelegatedInvitePower?: boolean
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LcdsPayloadDto': {
      body?: string
      headers?: {
        [key: string]: string | undefined
      }
      method?: string
      path?: string
    }
    'LcdsPlayer': {
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LCDSPlayerMessagingSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      bodyCode?: string
      msgId?: string
      params?: string[]
      titleCode?: string
      type?: string
    }
    'LCDSPlayerMessagingSimpleMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'LcdsPlayerParticipant': {
      /** Format: int32 */
      botSkillLevel?: number
      /** Format: int64 */
      summonerId?: number
      summonerInternalName?: string
      summonerName?: string
    }
    'LcdsPracticeGameConfig': {
      allowSpectators?: string
      gameMap?: LcuComponents['schemas']['LcdsGameMap']
      gameMode?: string
      gameMutators?: string[]
      gameName?: string
      gamePassword?: string
      /** Format: int32 */
      gameTypeConfig?: number
      gameVersion?: string
      /** Format: int32 */
      maxNumPlayers?: number
      passbackDataPacket?: string
      passbackUrl?: string
      region?: string
    }
    'LcdsPracticeGameSearchResult': {
      allowSpectators?: string
      gameMap?: LcuComponents['schemas']['LcdsGameMap']
      /** Format: int32 */
      gameMapId?: number
      gameMode?: string
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      maxNumPlayers?: number
      name?: string
      owner?: LcuComponents['schemas']['LcdsPlayerParticipant']
      pickType?: string
      privateGame?: boolean
      /** Format: int32 */
      spectatorCount?: number
      /** Format: int32 */
      team1Count?: number
      /** Format: int32 */
      team2Count?: number
    }
    /** @enum {string} */
    'LcdsRemovalReason': 'KICKED' | 'DESTROYED' | 'PROGRESSED'
    'LcdsRemovedFromLobbyNotification': {
      removalReason?: LcuComponents['schemas']['LcdsRemovalReason']
    }
    'LcdsSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LcdsSimpleMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'LcdsStartChampSelectDto': {
      invalidPlayers?: LcuComponents['schemas']['LcdsFailedJoinPlayer'][]
    }
    'LcdsSummoner': {
      name?: string
      /** Format: int64 */
      sumId?: number
    }
    'LeaverBusterLcdsMatchmakingNotification': {
      playerJoinFailures?: {
        [key: string]: unknown | undefined
      }[]
    }
    'LeaverBusterLcdsSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LeaverBusterSimpleMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'LobbyClientDynamicConfigurationNotification': {
      configs?: string
      delta?: boolean
    }
    /** @description Describes a log entry. */
    'LogEvent': {
      message?: string
      severity?: LcuComponents['schemas']['LogSeverityLevels']
    }
    /**
     * @description Allowable severity levels for log events.
     * @enum {string}
     */
    'LogSeverityLevels': 'Okay' | 'Warning' | 'Error' | 'Always'
    'LolAccountVerificationAuthenticateRequest': {
      password?: string
      username?: string
    }
    'LolAccountVerificationAuthenticateResponse': {
      message?: string
      /** Format: int32 */
      status?: number
      success?: boolean
    }
    'LolAccountVerificationAVSConfig': {
      Enabled?: boolean
      PasswordEnabled?: boolean
    }
    'LolAccountVerificationDeviceResponse': {
      message?: string
      /** Format: int32 */
      status?: number
      success?: boolean
    }
    'LolAccountVerificationInvalidateResponse': {
      message?: string
      /** Format: int32 */
      smsTokenExpireDurationInSec?: number
      /** Format: int32 */
      status?: number
      success?: boolean
    }
    'LolAccountVerificationIsVerifiedResponse': {
      message?: string
      /** Format: int32 */
      status?: number
      success?: boolean
    }
    'LolAccountVerificationLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolAccountVerificationLoginSessionState']
      /** Format: int64 */
      summonerId?: number
      username?: string
    }
    /** @enum {string} */
    'LolAccountVerificationLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolAccountVerificationSendTokenRequest': {
      device?: string
      locale?: string
      mediator?: string
    }
    'LolAccountVerificationSendTokenResponse': {
      message?: string
      /** Format: int32 */
      smsTokenExpireDurationInSec?: number
      /** Format: int32 */
      status?: number
      success?: boolean
    }
    'LolAccountVerificationVerifyRequest': {
      mediator?: string
      token?: string
    }
    'LolAccountVerificationVerifyResponse': {
      message?: string
      /** Format: int32 */
      status?: number
      success?: boolean
    }
    'LolActiveBoostsActiveBoosts': {
      firstWinOfTheDayStartTime?: string
      ipBoostEndDate?: string
      /** Format: int32 */
      ipBoostPerWinCount?: number
      /** Format: int32 */
      ipLoyaltyBoost?: number
      /** Format: int64 */
      summonerId?: number
      xpBoostEndDate?: string
      /** Format: int32 */
      xpBoostPerWinCount?: number
      /** Format: int32 */
      xpLoyaltyBoost?: number
    }
    'LolActiveBoostsEndOfGameStats': {
      /** Format: int64 */
      timeUntilNextFirstWinBonus?: number
    }
    'LolActiveBoostsLoginDataPacket': {
      /** Format: int64 */
      timeUntilFirstWinOfDay?: number
    }
    'LolAntiAddictionAntiAddictionState': {
      antiAddictionToken?: string
      localizationKey?: string
      policyType?: LcuComponents['schemas']['LolAntiAddictionPolicyType']
    }
    'LolAntiAddictionAntiAddictionToken': {
      antiAddictionToken?: string
    }
    /** @enum {string} */
    'LolAntiAddictionPolicyType':
      | 'antiAddictionWarning'
      | 'antiAddictionShutdown'
      | 'antiAddictionHeartbeat'
    'LolBannersBannerFlag': {
      earnedDateIso8601?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int64 */
      level?: number
      /** Format: int64 */
      seasonId?: number
      theme?: string
    }
    'LolBannersBannerFrame': {
      /** Format: int64 */
      level?: number
    }
    'LolBannersCapClashFlagEntitlementPayload': {
      rewardSpec?: LcuComponents['schemas']['LolBannersClashV2FlagRewardSpec']
      rewardType?: string
    }
    'LolBannersCapClashFrameEntitlementPayload': {
      rewardSpec?: LcuComponents['schemas']['LolBannersClashV2FrameRewardSpec']
      rewardType?: string
    }
    'LolBannersClashV2FlagRewardSpec': {
      level?: string
      seasonId?: string
      theme?: string
    }
    'LolBannersClashV2FrameRewardSpec': {
      level?: string
      seasonId?: string
    }
    'LolBannersInventoryItemsByType': {
      TOURNAMENT_FLAG?: LcuComponents['schemas']['LolBannersTournamentFlagInventoryItem'][]
      TOURNAMENT_FRAME?: LcuComponents['schemas']['LolBannersTournamentFrameInventoryItem'][]
    }
    'LolBannersInventoryItemWithPayload': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      payload?: {
        [key: string]: unknown | undefined
      }
      purchaseDate?: string
      uuid?: string
    }
    'LolBannersInventoryResponse': {
      items?: LcuComponents['schemas']['LolBannersInventoryItemsByType']
    }
    'LolBannersLoadout': {
      id?: string
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolBannersLoadoutsSlot'] | undefined
      }
      name?: string
      scope?: string
    }
    'LolBannersLoadoutsSlot': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolBannersSummonerProfileUpdate': {
      key?: string
      value?: {
        [key: string]: unknown | undefined
      }
    }
    'LolBannersTournamentFlagInventoryItem': {
      /** Format: int32 */
      itemId?: number
      payload?: LcuComponents['schemas']['LolBannersCapClashFlagEntitlementPayload']
      purchaseDate?: string
    }
    'LolBannersTournamentFrameInventoryItem': {
      payload?: LcuComponents['schemas']['LolBannersCapClashFrameEntitlementPayload']
      purchaseDate?: string
    }
    /** @enum {string} */
    'LolCareerStatsCareerStatsQueueType':
      | 'draft5'
      | 'rank5flex'
      | 'rank5solo'
      | 'blind5'
      | 'aram'
      | 'blind3'
      | 'rank3flex'
      | 'other'
    'LolCareerStatsChampionQueueStatsResponse': {
      /** Format: int32 */
      championId?: number
      position?: LcuComponents['schemas']['LolCareerStatsSummonersRiftPosition']
      queueType?: LcuComponents['schemas']['LolCareerStatsCareerStatsQueueType']
      rankTier?: LcuComponents['schemas']['LolCareerStatsRankedTier']
      stats?: {
        [key: string]: unknown | undefined
      }
    }
    'LolCareerStatsChampionStatistics': {
      /** Format: int32 */
      championId?: number
      experts?: LcuComponents['schemas']['LolCareerStatsExpertPlayer'][]
      queueStats?: LcuComponents['schemas']['LolCareerStatsStatisticsByQueue'][]
    }
    'LolCareerStatsEntitlementsToken': {
      entitlements?: string[]
    }
    'LolCareerStatsExpertPlayer': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      expertRank?: number
      /** Format: int32 */
      numOfGames?: number
      position?: LcuComponents['schemas']['LolCareerStatsSummonersRiftPosition']
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: float */
      winRate?: number
    }
    'LolCareerStatsPositionStatistics': {
      experts?: LcuComponents['schemas']['LolCareerStatsExpertPlayer'][]
      position?: LcuComponents['schemas']['LolCareerStatsSummonersRiftPosition']
      queueStats?: LcuComponents['schemas']['LolCareerStatsStatisticsByQueue'][]
    }
    'LolCareerStatsPositionStatsQueryRequest': {
      position?: LcuComponents['schemas']['LolCareerStatsSummonersRiftPosition']
      queueType?: LcuComponents['schemas']['LolCareerStatsCareerStatsQueueType']
      rankTier?: LcuComponents['schemas']['LolCareerStatsRankedTier']
      /** Format: int32 */
      season?: number
    }
    /** @enum {string} */
    'LolCareerStatsRankedTier':
      | 'ALL'
      | 'UNRANKED'
      | 'IRON'
      | 'BRONZE'
      | 'SILVER'
      | 'GOLD'
      | 'PLATINUM'
      | 'DIAMOND'
      | 'MASTER'
      | 'GRANDMASTER'
      | 'CHALLENGER'
    'LolCareerStatsStatisticsByQueue': {
      queueType?: LcuComponents['schemas']['LolCareerStatsCareerStatsQueueType']
      stats?: {
        [key: string]: unknown | undefined
      }
    }
    'LolCareerStatsStatisticsPercentilesResponse': {
      /** Format: int32 */
      championId?: number
      position?: LcuComponents['schemas']['LolCareerStatsSummonersRiftPosition']
      queueType?: LcuComponents['schemas']['LolCareerStatsCareerStatsQueueType']
      rankTier?: LcuComponents['schemas']['LolCareerStatsRankedTier']
      /** Format: int32 */
      season?: number
      stats?: {
        [key: string]: unknown | undefined
      }
    }
    'LolCareerStatsStatsQueryRequest': {
      /** Format: int32 */
      championId?: number
      position?: LcuComponents['schemas']['LolCareerStatsSummonersRiftPosition']
      queueType?: LcuComponents['schemas']['LolCareerStatsCareerStatsQueueType']
      rankTier?: LcuComponents['schemas']['LolCareerStatsRankedTier']
      /** Format: int32 */
      season?: number
    }
    /** @enum {string} */
    'LolCareerStatsSummonersRiftPosition':
      | 'ALL'
      | 'UNKNOWN'
      | 'TOP'
      | 'JUNGLE'
      | 'MID'
      | 'BOTTOM'
      | 'SUPPORT'
    'LolCatalogBundled': {
      flexible?: boolean
      items?: LcuComponents['schemas']['LolCatalogBundledItem'][]
      minimumPrices?: LcuComponents['schemas']['LolCatalogBundledItemCost'][]
    }
    'LolCatalogBundledItem': {
      discountPrices?: LcuComponents['schemas']['LolCatalogBundledItemCost'][]
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      quantity?: number
    }
    'LolCatalogBundledItemCost': {
      /** Format: int64 */
      cost?: number
      costType?: string
      currency?: string
      /** Format: float */
      discount?: number
    }
    'LolCatalogCatalogItem': {
      active?: boolean
      bundled?: LcuComponents['schemas']['LolCatalogBundled']
      iconUrl?: string
      inactiveDate?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
      itemRequirements?: LcuComponents['schemas']['LolCatalogItemKey'][]
      localizations?: {
        [key: string]: LcuComponents['schemas']['LolCatalogItemLocalization'] | undefined
      }
      metadata?: LcuComponents['schemas']['LolCatalogItemMetadataEntry'][]
      offerId?: string
      prices?: LcuComponents['schemas']['LolCatalogItemCost'][]
      releaseDate?: string
      sale?: LcuComponents['schemas']['LolCatalogSale']
      subInventoryType?: string
      tags?: string[]
    }
    'LolCatalogCatalogPluginItem': {
      active?: boolean
      description?: string
      imagePath?: string
      /** Format: int64 */
      inactiveDate?: number
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
      metadata?: LcuComponents['schemas']['LolCatalogItemMetadataEntry'][]
      name?: string
      offerId?: string
      owned?: boolean
      ownershipType?: LcuComponents['schemas']['LolCatalogInventoryOwnership']
      prices?: LcuComponents['schemas']['LolCatalogCatalogPluginPrice'][]
      /** Format: int64 */
      purchaseDate?: number
      questSkinInfo?: LcuComponents['schemas']['LolCatalogSkinLineInfo']
      /** Format: int64 */
      releaseDate?: number
      sale?: LcuComponents['schemas']['LolCatalogSale']
      subInventoryType?: string
      subTitle?: string
      tags?: string[]
    }
    'LolCatalogCatalogPluginItemAssets': {
      colors?: string[]
      emblems?: LcuComponents['schemas']['LolCatalogChampionSkinEmblem'][]
      iconPath?: string
      splashPath?: string
      tilePath?: string
    }
    'LolCatalogCatalogPluginItemWithDetails': {
      assets?: LcuComponents['schemas']['LolCatalogCatalogPluginItemAssets']
      bundledDiscountPrices?: LcuComponents['schemas']['LolCatalogCatalogPluginPrice'][]
      bundledItems?: LcuComponents['schemas']['LolCatalogCatalogPluginItemWithDetails'][]
      item?: LcuComponents['schemas']['LolCatalogCatalogPluginItem']
      minimumBundlePrices?: LcuComponents['schemas']['LolCatalogCatalogPluginPrice'][]
      /** Format: int32 */
      quantity?: number
      requiredItems?: LcuComponents['schemas']['LolCatalogCatalogPluginItemWithDetails'][]
    }
    'LolCatalogCatalogPluginPrice': {
      /** Format: int64 */
      cost?: number
      costType?: string
      currency?: string
      sale?: LcuComponents['schemas']['LolCatalogCatalogPluginRetailDiscount']
    }
    'LolCatalogCatalogPluginRetailDiscount': {
      /** Format: int64 */
      cost?: number
      /** Format: float */
      discount?: number
      endDate?: string
      startDate?: string
    }
    'LolCatalogChampionSkinEmblem': {
      emblemPath?: LcuComponents['schemas']['LolCatalogChampionSkinEmblemPath']
      emblemPosition?: LcuComponents['schemas']['LolCatalogChampionSkinEmblemPosition']
      name?: string
    }
    'LolCatalogChampionSkinEmblemPath': {
      large?: string
      small?: string
    }
    'LolCatalogChampionSkinEmblemPosition': {
      horizontal?: string
      vertical?: string
    }
    'LolCatalogGameDataChampion': {
      skins?: LcuComponents['schemas']['LolCatalogGameDataChampionSkin'][]
    }
    'LolCatalogGameDataChampionChroma': {
      chromaPath?: string
      colors?: string[]
      /** Format: int64 */
      id?: number
      name?: string
    }
    'LolCatalogGameDataChampionSkin': {
      chromaPath?: string
      chromas?: LcuComponents['schemas']['LolCatalogGameDataChampionChroma'][]
      colors?: string[]
      emblems?: LcuComponents['schemas']['LolCatalogChampionSkinEmblem'][]
      /** Format: int64 */
      id?: number
      name?: string
      questSkinInfo?: LcuComponents['schemas']['LolCatalogSkinLineInfo']
      splashPath?: string
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolCatalogGameDataChampionSummary': {
      /** Format: int64 */
      id?: number
      name?: string
      skins?: LcuComponents['schemas']['LolCatalogGameDataChampionSkin'][]
      squarePortraitPath?: string
    }
    'LolCatalogGameDataItemReference': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolCatalogGameDataStatstone': {
      category?: string
      contentId?: string
      description?: string
      iconFull?: string
      isDuration?: boolean
      isEpic?: boolean
      isRetired?: boolean
      /** Format: int32 */
      itemId?: number
      name?: string
    }
    'LolCatalogGameDataStatstonePack': {
      contentId?: string
      description?: string
      /** Format: int32 */
      itemId?: number
      name?: string
    }
    'LolCatalogGameDataStatstoneSet': {
      name?: string
      statstones?: LcuComponents['schemas']['LolCatalogGameDataStatstone'][]
    }
    'LolCatalogGameDataStatstonesInfo': {
      champIdToPackIds?: {
        [key: string]: unknown | undefined
      }
      collectionIdToStatStoneIds?: {
        [key: string]: unknown | undefined
      }
      packData?: LcuComponents['schemas']['LolCatalogGameDataStatstonePack'][]
      packIdToChampIds?: {
        [key: string]: unknown | undefined
      }
      packIdToStatStonesIds?: {
        [key: string]: unknown | undefined
      }
      packIdToSubPackIds?: {
        [key: string]: unknown | undefined
      }
      seriesIdToStatStoneIds?: {
        [key: string]: unknown | undefined
      }
      statstoneData?: LcuComponents['schemas']['LolCatalogGameDataStatstoneSet'][]
    }
    'LolCatalogGameDataSummonerEmote': {
      description?: string
      /** Format: int64 */
      id?: number
      inventoryIcon?: string
      name?: string
    }
    'LolCatalogGameDataSummonerIcon': {
      /** Format: int64 */
      id?: number
      imagePath?: string
      title?: string
    }
    'LolCatalogGameDataWardSkin': {
      description?: string
      /** Format: int64 */
      id?: number
      name?: string
      wardImagePath?: string
    }
    'LolCatalogInventoryContent': {
      /** Format: int64 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolCatalogInventoryOwnership']
      purchaseDate?: string
    }
    /** @enum {string} */
    'LolCatalogInventoryOwnership': 'OWNED' | 'RENTED' | 'LOYALTY' | 'F2P'
    'LolCatalogItemChoiceDetails': {
      backgroundImage?: string
      contents?: LcuComponents['schemas']['LolCatalogItemDetails'][]
      discount?: string
      displayType?: string
      /** Format: int64 */
      fullPrice?: number
      item?: LcuComponents['schemas']['LolCatalogCatalogPluginItem']
      metadata?: {
        [key: string]: unknown | undefined
      }
    }
    'LolCatalogItemCost': {
      /** Format: int64 */
      cost?: number
      currency?: string
      /** Format: float */
      discount?: number
    }
    'LolCatalogItemDetails': {
      description?: string
      iconUrl?: string
      subTitle?: string
      title?: string
    }
    'LolCatalogItemKey': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolCatalogItemLocalization': {
      description?: string
      language?: string
      name?: string
    }
    'LolCatalogItemMetadataEntry': {
      type?: string
      value?: string
    }
    'LolCatalogSale': {
      endDate?: string
      prices?: LcuComponents['schemas']['LolCatalogItemCost'][]
      startDate?: string
    }
    'LolCatalogSkinLineDescriptionInfo': {
      description?: string
      iconPath?: string
      title?: string
    }
    'LolCatalogSkinLineInfo': {
      collectionCardPath?: string
      collectionDescription?: string
      descriptionInfo?: LcuComponents['schemas']['LolCatalogSkinLineDescriptionInfo'][]
      name?: string
      splashPath?: string
      tiers?: LcuComponents['schemas']['LolCatalogSkinLineTier'][]
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolCatalogSkinLineTier': {
      collectionSplashVideoPath?: string
      description?: string
      /** Format: int64 */
      id?: number
      loadScreenPath?: string
      name?: string
      shortName?: string
      splashPath?: string
      splashVideoPath?: string
      /** Format: int64 */
      stage?: number
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChallengesChallengeData': {
      category?: string
      currentLevel?: string
      /** Format: int64 */
      currentLevelAchievedTime?: number
      /** Format: double */
      currentThreshold?: number
      /** Format: double */
      currentValue?: number
      friendsAtLevels?: LcuComponents['schemas']['LolChallengesFriendLevelsData'][]
      /** Format: int64 */
      id?: number
      /** Format: double */
      initValue?: number
      legacy?: boolean
      newLevels?: string[]
      nextLevel?: string
      /** Format: double */
      nextThreshold?: number
      /** Format: double */
      percentile?: number
      /** Format: int32 */
      playersInLevel?: number
      /** Format: int32 */
      position?: number
      previousLevel?: string
      /** Format: double */
      previousThreshold?: number
      /** Format: double */
      previousValue?: number
      seasonal?: boolean
      /** Format: int32 */
      seasonId?: number
    }
    'LolChallengesChallengeLevelData': {
      level?: string
    }
    'LolChallengesChallengePlayerData': {
      /** Format: int64 */
      apexLaderUpdateTime?: number
      categoryPoints?: {
        [key: string]: LcuComponents['schemas']['LolChallengesChallengePoints'] | undefined
      }
      id?: string
      levelPoints?: {
        [key: string]: number | undefined
      }
      playerChallenges?: LcuComponents['schemas']['LolChallengesChallengeData'][]
      preferences?: LcuComponents['schemas']['LolChallengesPlayerClientPreferences']
      puuid?: string
      source?: LcuComponents['schemas']['LolChallengesSource']
      tags?: {
        [key: string]: string | undefined
      }
      totalPoints?: LcuComponents['schemas']['LolChallengesChallengePoints']
    }
    'LolChallengesChallengePoints': {
      /** Format: int32 */
      current?: number
      level?: string
      /** Format: int32 */
      max?: number
      /** Format: double */
      percentile?: number
    }
    'LolChallengesChallengeSignedUpdatePayload': {
      tokensByType?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolChallengesChallengesPlayerPreferences': {
      bannerAccent?: string
      challengeIds?: number[]
      signedJWTPayload?: LcuComponents['schemas']['LolChallengesChallengeSignedUpdatePayload']
      title?: string
    }
    'LolChallengesChallengesRMSNotification': {
      ackRequired?: boolean
      payload?: string
    }
    'LolChallengesChallengesRMSPayload': {
      id?: string
      playerKey?: LcuComponents['schemas']['LolChallengesChallengesRMSPlayerKey']
    }
    'LolChallengesChallengesRMSPlayerKey': {
      product?: string
      puuid?: string
    }
    'LolChallengesChallengeThreshold': {
      rewardGroupId?: string
      rewards?: LcuComponents['schemas']['LolChallengesChallengeThresholdReward'][]
      /** Format: double */
      value?: number
    }
    'LolChallengesChallengeThresholdReward': {
      category?: string
      id?: string
      /** Format: int32 */
      quantity?: number
    }
    'LolChallengesEndOfGameStats': {
      /** Format: int64 */
      gameId?: number
    }
    'LolChallengesFriendLevelsData': {
      friends?: string[]
      level?: string
    }
    'LolChallengesFriendResource': {
      puuid?: string
    }
    'LolChallengesGameDataChallengeConfig': {
      description?: string
      descriptionShort?: string
      iconPath?: string
      leaderboard?: boolean
      levelToIconPath?: {
        [key: string]: string | undefined
      }
      name?: string
      queueIds?: number[]
      reverseDirection?: boolean
      source?: string
      tags?: {
        [key: string]: string | undefined
      }
      thresholds?: {
        [key: string]: LcuComponents['schemas']['LolChallengesChallengeThreshold'] | undefined
      }
    }
    'LolChallengesGameDataChallengesData': {
      challenges?: {
        [key: string]: LcuComponents['schemas']['LolChallengesGameDataChallengeConfig'] | undefined
      }
      titles?: {
        [key: string]: LcuComponents['schemas']['LolChallengesGameDataChallengeTitle'] | undefined
      }
    }
    'LolChallengesGameDataChallengeTitle': {
      /** Format: int32 */
      itemId?: number
      name?: string
    }
    'LolChallengesInventoryTypeAchievementTitle': {
      /** Format: int32 */
      itemId?: number
      uuid?: string
    }
    'LolChallengesPlayerClientPreferences': {
      tabard?: string
      title?: string
      tokens?: number[]
    }
    'LolChallengesQueue': {
      gameMode?: string
      /** Format: int32 */
      id?: number
    }
    /** @enum {string} */
    'LolChallengesSource':
      | 'CHALLENGES'
      | 'EOGD'
      | 'CAP_INVENTORY'
      | 'HONOR'
      | 'CHAMPION_MASTERY'
      | 'RANKED_LEAGUES'
      | 'CLASH'
      | 'LOOT'
      | 'ETERNALS'
    'LolChallengesUICategoryProgress': {
      category?: string
      /** Format: int32 */
      current?: number
      level?: string
      /** Format: int32 */
      max?: number
      /** Format: double */
      positionPercentile?: number
    }
    'LolChallengesUIChallenge': {
      /** Format: int64 */
      capstoneGroupId?: number
      capstoneGroupName?: string
      /** Format: int64 */
      capstoneId?: number
      category?: string
      currentLevel?: string
      /** Format: int64 */
      currentLevelAchievedTime?: number
      /** Format: double */
      currentThreshold?: number
      /** Format: double */
      currentValue?: number
      description?: string
      descriptionShort?: string
      friendsAtLevels?: LcuComponents['schemas']['LolChallengesFriendLevelsData'][]
      gameModes?: string[]
      hasLeaderboard?: boolean
      iconPath?: string
      /** Format: int64 */
      id?: number
      isApex?: boolean
      isCapstone?: boolean
      isReverseDirection?: boolean
      levelToIconPath?: {
        [key: string]: string | undefined
      }
      name?: string
      nextLevel?: string
      nextLevelIconPath?: string
      /** Format: double */
      nextThreshold?: number
      /** Format: double */
      percentile?: number
      /** Format: int64 */
      pointsAwarded?: number
      /** Format: int32 */
      position?: number
      previousLevel?: string
      /** Format: double */
      previousValue?: number
      source?: string
      thresholds?: {
        [key: string]: LcuComponents['schemas']['LolChallengesUIChallengeThreshold'] | undefined
      }
      valueMapping?: string
    }
    'LolChallengesUIChallengeReward': {
      asset?: string
      category?: string
      name?: string
      /** Format: int64 */
      quantity?: number
    }
    'LolChallengesUIChallengeThreshold': {
      rewards?: LcuComponents['schemas']['LolChallengesUIChallengeReward'][]
      /** Format: double */
      value?: number
    }
    'LolChallengesUIPlayerSummary': {
      /** Format: int64 */
      apexLadderUpdateTime?: number
      categoryProgress?: LcuComponents['schemas']['LolChallengesUICategoryProgress'][]
      overallChallengeLevel?: string
      /** Format: int64 */
      pointsUntilNextRank?: number
      /** Format: double */
      positionPercentile?: number
      title?: LcuComponents['schemas']['LolChallengesUITitle']
      topChallenges?: LcuComponents['schemas']['LolChallengesUIChallenge'][]
      /** Format: int64 */
      totalChallengeScore?: number
    }
    'LolChallengesUITitle': {
      contentId?: string
      /** Format: int32 */
      itemId?: number
      name?: string
    }
    'LolChampionsChampionQuestSkinInfo': {
      collectionCardPath?: string
      collectionDescription?: string
      descriptionInfo?: LcuComponents['schemas']['LolChampionsQuestSkinDescriptionInfo'][]
      name?: string
      splashPath?: string
      tiers?: LcuComponents['schemas']['LolChampionsCollectionsChampionQuestSkin'][]
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChampionsCollectionsChampion': {
      active?: boolean
      alias?: string
      banVoPath?: string
      baseLoadScreenPath?: string
      baseSplashPath?: string
      botEnabled?: boolean
      chooseVoPath?: string
      disabledQueues?: string[]
      freeToPlay?: boolean
      /** Format: int32 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolChampionsCollectionsOwnership']
      passive?: LcuComponents['schemas']['LolChampionsCollectionsChampionSpell']
      /** Format: int64 */
      purchased?: number
      rankedPlayEnabled?: boolean
      roles?: string[]
      skins?: LcuComponents['schemas']['LolChampionsCollectionsChampionSkin'][]
      spells?: LcuComponents['schemas']['LolChampionsCollectionsChampionSpell'][]
      squarePortraitPath?: string
      stingerSfxPath?: string
      tacticalInfo?: LcuComponents['schemas']['LolChampionsCollectionsChampionTacticalInfo']
      title?: string
    }
    'LolChampionsCollectionsChampionChroma': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      colors?: string[]
      disabled?: boolean
      /** Format: int32 */
      id?: number
      lastSelected?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampionsCollectionsOwnership']
      stillObtainable?: boolean
    }
    'LolChampionsCollectionsChampionMinimal': {
      active?: boolean
      alias?: string
      banVoPath?: string
      baseLoadScreenPath?: string
      baseSplashPath?: string
      botEnabled?: boolean
      chooseVoPath?: string
      disabledQueues?: string[]
      freeToPlay?: boolean
      /** Format: int32 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolChampionsCollectionsOwnership']
      /** Format: int64 */
      purchased?: number
      rankedPlayEnabled?: boolean
      roles?: string[]
      squarePortraitPath?: string
      stingerSfxPath?: string
      title?: string
    }
    'LolChampionsCollectionsChampionPlayableCounts': {
      /** Format: int32 */
      championsFreeToPlay?: number
      /** Format: int32 */
      championsFreeToPlayReward?: number
      /** Format: int32 */
      championsOwned?: number
      /** Format: int32 */
      championsRented?: number
    }
    'LolChampionsCollectionsChampionQuestSkin': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      collectionSplashVideoPath?: string
      description?: string
      disabled?: boolean
      /** Format: int32 */
      id?: number
      isBase?: boolean
      lastSelected?: boolean
      loadScreenPath?: string
      name?: string
      ownership?: LcuComponents['schemas']['LolChampionsCollectionsOwnership']
      shortName?: string
      splashPath?: string
      splashVideoPath?: string
      /** Format: int32 */
      stage?: number
      stillObtainable?: boolean
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChampionsCollectionsChampionSkin': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      chromas?: LcuComponents['schemas']['LolChampionsCollectionsChampionChroma'][]
      collectionSplashVideoPath?: string
      disabled?: boolean
      emblems?: LcuComponents['schemas']['LolChampionsCollectionsChampionSkinEmblem'][]
      featuresText?: string
      /** Format: int32 */
      id?: number
      isBase?: boolean
      lastSelected?: boolean
      loadScreenPath?: string
      name?: string
      ownership?: LcuComponents['schemas']['LolChampionsCollectionsOwnership']
      questSkinInfo?: LcuComponents['schemas']['LolChampionsChampionQuestSkinInfo']
      rarityGemPath?: string
      skinType?: string
      splashPath?: string
      splashVideoPath?: string
      stillObtainable?: boolean
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChampionsCollectionsChampionSkinEmblem': {
      emblemPath?: LcuComponents['schemas']['LolChampionsCollectionsChampionSkinEmblemPath']
      name?: string
      positions?: LcuComponents['schemas']['LolChampionsCollectionsChampionSkinEmblemPosition']
    }
    'LolChampionsCollectionsChampionSkinEmblemPath': {
      large?: string
      small?: string
    }
    'LolChampionsCollectionsChampionSkinEmblemPosition': {
      horizontal?: string
      vertical?: string
    }
    'LolChampionsCollectionsChampionSkinMinimal': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      disabled?: boolean
      /** Format: int32 */
      id?: number
      isBase?: boolean
      lastSelected?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampionsCollectionsOwnership']
      splashPath?: string
      stillObtainable?: boolean
      tilePath?: string
    }
    'LolChampionsCollectionsChampionSpell': {
      description?: string
      name?: string
    }
    'LolChampionsCollectionsChampionTacticalInfo': {
      damageType?: string
      /** Format: int32 */
      difficulty?: number
      /** Format: int32 */
      style?: number
    }
    'LolChampionsCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolChampionsCollectionsRental']
    }
    'LolChampionsCollectionsRental': {
      /** Format: int64 */
      endDate?: number
      /** Format: int64 */
      purchaseDate?: number
      rented?: boolean
      /** Format: int32 */
      winCountRemaining?: number
    }
    'LolChampionsGameDataChampion': {
      alias?: string
      banVoPath?: string
      chooseVoPath?: string
      /** Format: int32 */
      id?: number
      name?: string
      passive?: LcuComponents['schemas']['LolChampionsGameDataChampionSpell']
      roles?: string[]
      skins?: LcuComponents['schemas']['LolChampionsGameDataChampionSkin'][]
      spells?: LcuComponents['schemas']['LolChampionsGameDataChampionSpell'][]
      squarePortraitPath?: string
      stingerSfxPath?: string
      tacticalInfo?: LcuComponents['schemas']['LolChampionsGameDataChampionTacticalInfo']
      title?: string
    }
    'LolChampionsGameDataChampionChroma': {
      chromaPath?: string
      colors?: string[]
      /** Format: int32 */
      id?: number
    }
    'LolChampionsGameDataChampionQuestSkin': {
      collectionSplashVideoPath?: string
      description?: string
      /** Format: int32 */
      id?: number
      loadScreenPath?: string
      name?: string
      shortName?: string
      splashPath?: string
      splashVideoPath?: string
      /** Format: int32 */
      stage?: number
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChampionsGameDataChampionSkin': {
      chromaPath?: string
      chromas?: LcuComponents['schemas']['LolChampionsGameDataChampionChroma'][]
      collectionSplashVideoPath?: string
      emblems?: LcuComponents['schemas']['LolChampionsCollectionsChampionSkinEmblem'][]
      featuresText?: string
      /** Format: int32 */
      id?: number
      loadScreenPath?: string
      name?: string
      questSkinInfo?: LcuComponents['schemas']['LolChampionsGameDataQuestSkinInfo']
      rarityGemPath?: string
      skinType?: string
      splashPath?: string
      splashVideoPath?: string
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChampionsGameDataChampionSpell': {
      description?: string
      name?: string
    }
    'LolChampionsGameDataChampionSummary': {
      /** Format: int32 */
      id?: number
    }
    'LolChampionsGameDataChampionTacticalInfo': {
      damageType?: string
      /** Format: int32 */
      difficulty?: number
      /** Format: int32 */
      style?: number
    }
    'LolChampionsGameDataQuestSkinDescriptionInfo': {
      description?: string
      iconPath?: string
      title?: string
    }
    'LolChampionsGameDataQuestSkinInfo': {
      collectionCardPath?: string
      collectionDescription?: string
      descriptionInfo?: LcuComponents['schemas']['LolChampionsGameDataQuestSkinDescriptionInfo'][]
      name?: string
      splashPath?: string
      tiers?: LcuComponents['schemas']['LolChampionsGameDataChampionQuestSkin'][]
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolChampionsLcdsDynamicClientConfig': {
      DisabledChampions?: {
        [key: string]: unknown | undefined
      }
    }
    'LolChampionsLoginSession': {
      connected?: boolean
      state?: LcuComponents['schemas']['LolChampionsLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolChampionsLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    /** @enum {string} */
    'LolChampionsLoyaltyStatus':
      | 'LEGACY'
      | 'REWARDS_GRANT'
      | 'EXPIRY'
      | 'CHANGE'
      | 'REVOKE'
      | 'DISABLED'
    'LolChampionsLoyaltyStatusNotification': {
      status?: LcuComponents['schemas']['LolChampionsLoyaltyStatus']
    }
    'LolChampionsPlayerNotification': {
      backgroundUrl?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolChampionsQuestSkinDescriptionInfo': {
      description?: string
      iconPath?: string
      title?: string
    }
    'LolChampionsSummoner': {
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolChampSelectChampGridChampion': {
      disabled?: boolean
      freeToPlay?: boolean
      freeToPlayForQueue?: boolean
      freeToPlayReward?: boolean
      /** Format: int32 */
      id?: number
      masteryChestGranted?: boolean
      /** Format: int32 */
      masteryLevel?: number
      /** Format: int32 */
      masteryPoints?: number
      name?: string
      owned?: boolean
      positionsFavorited?: string[]
      rented?: boolean
      roles?: string[]
      selectionStatus?: LcuComponents['schemas']['LolChampSelectChampionSelection']
      squarePortraitPath?: string
    }
    'LolChampSelectChampionQuestSkinInfo': {
      splashPath?: string
      tiers?: LcuComponents['schemas']['LolChampSelectCollectionsChampionQuestSkin'][]
      tilePath?: string
    }
    'LolChampSelectChampionSelection': {
      banIntented?: boolean
      banIntentedByMe?: boolean
      isBanned?: boolean
      pickedByOtherOrBanned?: boolean
      pickIntented?: boolean
      pickIntentedByMe?: boolean
      pickIntentedPosition?: string
      selectedByMe?: boolean
    }
    'LolChampSelectChampSelectAction': {
      /** Format: int64 */
      actorCellId?: number
      /** Format: int32 */
      championId?: number
      completed?: boolean
      /** Format: int64 */
      id?: number
      isAllyAction?: boolean
      type?: string
    }
    'LolChampSelectChampSelectBannedChampions': {
      myTeamBans?: number[]
      /** Format: int32 */
      numBans?: number
      theirTeamBans?: number[]
    }
    'LolChampSelectChampSelectChatRoomDetails': {
      chatRoomName?: string
      chatRoomPassword?: string
    }
    'LolChampSelectChampSelectMySelection': {
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolChampSelectChampSelectPinDropNotification': {
      mapSide?: string
      pinDropSummoners?: LcuComponents['schemas']['LolChampSelectChampSelectPinDropSummoner'][]
    }
    'LolChampSelectChampSelectPinDropSummoner': {
      isLocalSummoner?: boolean
      isPlaceholder?: boolean
      lane?: string
      /** Format: int32 */
      lanePosition?: number
      position?: string
      /** Format: int32 */
      slotId?: number
    }
    'LolChampSelectChampSelectPlayerSelection': {
      assignedPosition?: string
      /** Format: int64 */
      cellId?: number
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championPickIntent?: number
      entitledFeatureType?: string
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      team?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolChampSelectChampSelectSession': {
      actions?: {
        [key: string]: unknown | undefined
      }[]
      allowBattleBoost?: boolean
      allowDuplicatePicks?: boolean
      allowLockedEvents?: boolean
      allowRerolling?: boolean
      allowSkinSelection?: boolean
      bans?: LcuComponents['schemas']['LolChampSelectChampSelectBannedChampions']
      benchChampionIds?: number[]
      benchEnabled?: boolean
      /** Format: int32 */
      boostableSkinCount?: number
      chatDetails?: LcuComponents['schemas']['LolChampSelectChampSelectChatRoomDetails']
      /** Format: int64 */
      counter?: number
      entitledFeatureState?: LcuComponents['schemas']['LolChampSelectEntitledFeatureState']
      /** Format: int64 */
      gameId?: number
      hasSimultaneousBans?: boolean
      hasSimultaneousPicks?: boolean
      isCustomGame?: boolean
      isSpectating?: boolean
      /** Format: int64 */
      localPlayerCellId?: number
      /** Format: int32 */
      lockedEventIndex?: number
      myTeam?: LcuComponents['schemas']['LolChampSelectChampSelectPlayerSelection'][]
      /** Format: int64 */
      recoveryCounter?: number
      /** Format: int32 */
      rerollsRemaining?: number
      skipChampionSelect?: boolean
      theirTeam?: LcuComponents['schemas']['LolChampSelectChampSelectPlayerSelection'][]
      timer?: LcuComponents['schemas']['LolChampSelectChampSelectTimer']
      trades?: LcuComponents['schemas']['LolChampSelectChampSelectTradeContract'][]
    }
    'LolChampSelectChampSelectSummoner': {
      actingBackgroundAnimationState?: string
      activeActionType?: string
      areSummonerActionsComplete?: boolean
      assignedPosition?: string
      banIntentSquarePortratPath?: string
      /** Format: int64 */
      cellId?: number
      championIconStyle?: string
      championName?: string
      /** Format: int32 */
      currentChampionVotePercentInteger?: number
      entitledFeatureType?: string
      isActingNow?: boolean
      isDonePicking?: boolean
      isOnPlayersTeam?: boolean
      isPickIntenting?: boolean
      isPlaceholder?: boolean
      isSelf?: boolean
      pickSnipedClass?: string
      shouldShowActingBar?: boolean
      shouldShowBanIntentIcon?: boolean
      shouldShowExpanded?: boolean
      shouldShowRingAnimations?: boolean
      shouldShowSelectedSkin?: boolean
      shouldShowSpells?: boolean
      showMuted?: boolean
      showTrades?: boolean
      /** Format: int32 */
      skinId?: number
      skinSplashPath?: string
      /** Format: int32 */
      slotId?: number
      spell1IconPath?: string
      spell2IconPath?: string
      statusMessageKey?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int64 */
      tradeId?: number
    }
    'LolChampSelectChampSelectTimer': {
      /** Format: int64 */
      adjustedTimeLeftInPhase?: number
      /** Format: int64 */
      internalNowInEpochMs?: number
      isInfinite?: boolean
      phase?: string
      /** Format: int64 */
      totalTimeInPhase?: number
    }
    'LolChampSelectChampSelectTradeContract': {
      /** Format: int64 */
      cellId?: number
      /** Format: int64 */
      id?: number
      state?: LcuComponents['schemas']['LolChampSelectChampSelectTradeState']
    }
    'LolChampSelectChampSelectTradeNotification': {
      /** Format: int64 */
      id?: number
      initiatedByLocalPlayer?: boolean
      /** Format: int64 */
      otherSummonerId?: number
      requesterChampionName?: string
      requesterChampionSplashPath?: string
      responderChampionName?: string
      /** Format: int64 */
      responderIndex?: number
      state?: LcuComponents['schemas']['LolChampSelectChampSelectTradeState']
    }
    /** @enum {string} */
    'LolChampSelectChampSelectTradeState':
      | 'AVAILABLE'
      | 'BUSY'
      | 'INVALID'
      | 'RECEIVED'
      | 'SENT'
      | 'DECLINED'
      | 'CANCELLED'
      | 'ACCEPTED'
    'LolChampSelectCollectionsChampionChroma': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      colors?: string[]
      disabled?: boolean
      /** Format: int32 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      stillObtainable?: boolean
    }
    'LolChampSelectCollectionsChampionMastery': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championLevel?: number
      /** Format: int32 */
      championPoints?: number
      chestGranted?: boolean
    }
    'LolChampSelectCollectionsChampionMinimal': {
      banVoPath?: string
      baseSplashPath?: string
      chooseVoPath?: string
      disabledQueues?: string[]
      freeToPlay?: boolean
      /** Format: int32 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      roles?: string[]
      squarePortraitPath?: string
      stingerSfxPath?: string
    }
    'LolChampSelectCollectionsChampionQuestSkin': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      disabled?: boolean
      /** Format: int32 */
      id?: number
      isBase?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      shortName?: string
      splashPath?: string
      splashVideoPath?: string
      /** Format: int32 */
      stage?: number
      stillObtainable?: boolean
      tilePath?: string
    }
    'LolChampSelectCollectionsChampionSkin': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      chromas?: LcuComponents['schemas']['LolChampSelectCollectionsChampionChroma'][]
      disabled?: boolean
      emblems?: LcuComponents['schemas']['LolChampSelectCollectionsChampionSkinEmblem'][]
      /** Format: int32 */
      id?: number
      isBase?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      questSkinInfo?: LcuComponents['schemas']['LolChampSelectChampionQuestSkinInfo']
      rarityGemPath?: string
      splashPath?: string
      splashVideoPath?: string
      stillObtainable?: boolean
      tilePath?: string
    }
    'LolChampSelectCollectionsChampionSkinEmblem': {
      emblemPath?: LcuComponents['schemas']['LolChampSelectCollectionsChampionSkinEmblemPath']
      name?: string
      positions?: LcuComponents['schemas']['LolChampSelectCollectionsChampionSkinEmblemPosition']
    }
    'LolChampSelectCollectionsChampionSkinEmblemPath': {
      large?: string
      small?: string
    }
    'LolChampSelectCollectionsChampionSkinEmblemPosition': {
      horizontal?: string
      vertical?: string
    }
    'LolChampSelectCollectionsChampionSkinMinimal': {
      /** Format: int32 */
      championId?: number
      chromaPath?: string
      disabled?: boolean
      /** Format: int32 */
      id?: number
      isBase?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      splashPath?: string
      stillObtainable?: boolean
      tilePath?: string
    }
    'LolChampSelectCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolChampSelectCollectionsRental']
    }
    'LolChampSelectCollectionsRental': {
      rented?: boolean
    }
    'LolChampSelectEntitledFeatureState': {
      /** Format: int32 */
      additionalRerolls?: number
      unlockedSkinIds?: number[]
    }
    'LolChampSelectGameDataSummonerSpell': {
      iconPath?: string
      /** Format: int64 */
      id?: number
    }
    'LolChampSelectLegacyChampionSelectPreferences': {
      skins?: {
        [key: string]: number | undefined
      }
      spells?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolChampSelectLegacyChampSelectAction': {
      /** Format: int64 */
      actorCellId?: number
      /** Format: int32 */
      championId?: number
      completed?: boolean
      /** Format: int64 */
      id?: number
      isAllyAction?: boolean
      isInProgress?: boolean
      /** Format: int32 */
      pickTurn?: number
      type?: string
    }
    'LolChampSelectLegacyChampSelectBannedChampions': {
      myTeamBans?: number[]
      /** Format: int32 */
      numBans?: number
      theirTeamBans?: number[]
    }
    'LolChampSelectLegacyChampSelectChatRoomDetails': {
      chatRoomName?: string
      chatRoomPassword?: string
    }
    'LolChampSelectLegacyChampSelectMySelection': {
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolChampSelectLegacyChampSelectPlayerSelection': {
      assignedPosition?: string
      /** Format: int64 */
      cellId?: number
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championPickIntent?: number
      playerType?: string
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      team?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolChampSelectLegacyChampSelectSession': {
      actions?: {
        [key: string]: unknown | undefined
      }[]
      allowBattleBoost?: boolean
      allowRerolling?: boolean
      allowSkinSelection?: boolean
      bans?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectBannedChampions']
      chatDetails?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectChatRoomDetails']
      hasSimultaneousBans?: boolean
      hasSimultaneousPicks?: boolean
      isCustomGame?: boolean
      isSpectating?: boolean
      /** Format: int64 */
      localPlayerCellId?: number
      myTeam?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectPlayerSelection'][]
      /** Format: int32 */
      rerollsRemaining?: number
      theirTeam?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectPlayerSelection'][]
      timer?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectTimer']
      trades?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectTradeContract'][]
    }
    'LolChampSelectLegacyChampSelectTimer': {
      /** Format: int64 */
      adjustedTimeLeftInPhase?: number
      /** Format: int64 */
      internalNowInEpochMs?: number
      isInfinite?: boolean
      phase?: string
      /** Format: int64 */
      totalTimeInPhase?: number
    }
    'LolChampSelectLegacyChampSelectTradeContract': {
      /** Format: int64 */
      cellId?: number
      /** Format: int64 */
      id?: number
      state?: LcuComponents['schemas']['LolChampSelectLegacyChampSelectTradeState']
    }
    /** @enum {string} */
    'LolChampSelectLegacyChampSelectTradeState':
      | 'AVAILABLE'
      | 'BUSY'
      | 'INVALID'
      | 'RECEIVED'
      | 'SENT'
    'LolChampSelectLegacyCollectionsChampion': {
      active?: boolean
      disabledQueues?: string[]
      freeToPlay?: boolean
      /** Format: int32 */
      id?: number
      ownership?: LcuComponents['schemas']['LolChampSelectLegacyCollectionsOwnership']
    }
    'LolChampSelectLegacyCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolChampSelectLegacyCollectionsRental']
    }
    'LolChampSelectLegacyCollectionsRental': {
      rented?: boolean
    }
    'LolChampSelectLegacyGameflowGameClient': {
      running?: boolean
      visible?: boolean
    }
    'LolChampSelectLegacyGameflowGameData': {
      queue?: LcuComponents['schemas']['LolChampSelectLegacyQueue']
    }
    'LolChampSelectLegacyGameflowGameDodge': {
      dodgeIds?: number[]
      state?: LcuComponents['schemas']['LolChampSelectLegacyGameflowGameDodgeState']
    }
    /** @enum {string} */
    'LolChampSelectLegacyGameflowGameDodgeState':
      | 'Invalid'
      | 'PartyDodged'
      | 'StrangerDodged'
      | 'TournamentDodged'
    /** @enum {string} */
    'LolChampSelectLegacyGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolChampSelectLegacyGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolChampSelectLegacyGameflowGameClient']
      gameData?: LcuComponents['schemas']['LolChampSelectLegacyGameflowGameData']
      phase?: LcuComponents['schemas']['LolChampSelectLegacyGameflowPhase']
    }
    'LolChampSelectLegacyInventoryItemWithPayload': {
      /** Format: int64 */
      itemId?: number
      payload?: {
        [key: string]: unknown | undefined
      }
    }
    'LolChampSelectLegacyLobbyStatus': {
      allowedPlayAgain?: boolean
      isCustom?: boolean
      isLeader?: boolean
      isSpectator?: boolean
      memberSummonerIds?: number[]
      /** Format: int32 */
      queueId?: number
    }
    'LolChampSelectLegacyLoginSession': {
      connected?: boolean
      state?: LcuComponents['schemas']['LolChampSelectLegacyLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolChampSelectLegacyLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolChampSelectLegacyPlayerStatus': {
      currentLobbyStatus?: LcuComponents['schemas']['LolChampSelectLegacyLobbyStatus']
      lastQueuedLobbyStatus?: LcuComponents['schemas']['LolChampSelectLegacyLobbyStatus']
    }
    'LolChampSelectLegacyQueue': {
      areFreeChampionsAllowed?: boolean
      gameTypeConfig?: LcuComponents['schemas']['LolChampSelectLegacyQueueGameTypeConfig']
    }
    'LolChampSelectLegacyQueueGameTypeConfig': {
      allowTrades?: boolean
      battleBoost?: boolean
      /** Format: int32 */
      maxAllowableBans?: number
      name?: string
    }
    'LolChampSelectLegacySettingCategoryResource': {
      data?: LcuComponents['schemas']['LolChampSelectLegacyChampionSelectPreferences']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolChampSelectLegacySummoner': {
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolChampSelectLegacyTeamBoost': {
      availableSkins?: number[]
      /** Format: int64 */
      ipReward?: number
      /** Format: int64 */
      ipRewardForPurchaser?: number
      /** Format: int64 */
      price?: number
      skinUnlockMode?: string
      summonerName?: string
      unlocked?: boolean
    }
    'LolChampSelectLoginSession': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolChampSelectMutedPlayerInfo': {
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolChampSelectSettingsResource': {
      data?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      schemaVersion?: number
    }
    'LolChampSelectSfxNotification': {
      /** Format: int64 */
      delayMillis?: number
      eventType?: string
      path?: string
    }
    'LolChampSelectSkinSelectorChildSkin': {
      /** Format: int32 */
      championId?: number
      chromaPreviewPath?: string
      colors?: string[]
      disabled?: boolean
      /** Format: int32 */
      id?: number
      isBase?: boolean
      isChampionUnlocked?: boolean
      isUnlockedFromEntitledFeature?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      /** Format: int32 */
      parentSkinId?: number
      shortName?: string
      splashPath?: string
      splashVideoPath?: string
      /** Format: int32 */
      stage?: number
      stillObtainable?: boolean
      tilePath?: string
      unlocked?: boolean
    }
    'LolChampSelectSkinSelectorInfo': {
      championName?: string
      isSkinGrantedFromBoost?: boolean
      /** Format: int32 */
      selectedChampionId?: number
      /** Format: int32 */
      selectedSkinId?: number
      showSkinSelector?: boolean
      skinSelectionDisabled?: boolean
    }
    'LolChampSelectSkinSelectorSkin': {
      /** Format: int32 */
      championId?: number
      childSkins?: LcuComponents['schemas']['LolChampSelectSkinSelectorChildSkin'][]
      chromaPreviewPath?: string
      disabled?: boolean
      emblems?: LcuComponents['schemas']['LolChampSelectCollectionsChampionSkinEmblem'][]
      groupSplash?: string
      /** Format: int32 */
      id?: number
      isBase?: boolean
      isChampionUnlocked?: boolean
      isUnlockedFromEntitledFeature?: boolean
      name?: string
      ownership?: LcuComponents['schemas']['LolChampSelectCollectionsOwnership']
      rarityGemPath?: string
      splashPath?: string
      splashVideoPath?: string
      stillObtainable?: boolean
      tilePath?: string
      unlocked?: boolean
    }
    'LolChampSelectTeamBoost': {
      availableSkins?: number[]
      /** Format: int64 */
      ipReward?: number
      /** Format: int64 */
      ipRewardForPurchaser?: number
      /** Format: int64 */
      price?: number
      skinUnlockMode?: string
      /** Format: int64 */
      summonerId?: number
      unlocked?: boolean
    }
    /** @enum {string} */
    'LolChatAccountState': 'offline' | 'mobile' | 'away' | 'chat' | 'dnd'
    'LolChatActiveConversationResource': {
      id?: string
    }
    'LolChatAuthResourcePlain': {
      gasToken?: {
        [key: string]: unknown | undefined
      }
      password?: string
      username?: string
    }
    'LolChatAuthResourceRsoAccessToken': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    /** @enum {string} */
    'LolChatAuthType': 'plain' | 'rsoCreate' | 'rsoRefresh'
    'LolChatBlocked': {
      game_name?: string
      game_tag?: string
      name?: string
      pid?: string
    }
    'LolChatBlockedList': {
      blocked?: LcuComponents['schemas']['LolChatBlocked'][]
    }
    'LolChatBlockedPlayerResource': {
      gameName?: string
      gameTag?: string
      /** Format: int32 */
      icon?: number
      id?: string
      name?: string
      pid?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolChatChampSelection': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      selectedSkinIndex?: number
      summonerInternalName?: string
    }
    'LolChatChatDomainConfig': {
      ChampSelectDomainName?: string
      ClubDomainName?: string
      CustomGameDomainName?: string
      P2PDomainName?: string
      PostGameDomainName?: string
    }
    'LolChatChatFriendUpdate': {
      group?: string
      note?: string
      pid?: string
    }
    'LolChatChatMessage': {
      body?: string
      cid?: string
      game_name?: string
      game_tag?: string
      id?: string
      mid?: string
      name?: string
      pid?: string
      read?: boolean
      time?: string
      type?: LcuComponents['schemas']['LolChatMessageType']
    }
    'LolChatChatMessageList': {
      messages?: LcuComponents['schemas']['LolChatChatMessage'][]
    }
    'LolChatChatPlatformLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      isNewPlayer?: boolean
      puuid?: string
      state?: LcuComponents['schemas']['LolChatChatPlatformLoginSessionState']
      /** Format: int64 */
      summonerId?: number
      userAuthToken?: string
      username?: string
    }
    /** @enum {string} */
    'LolChatChatPlatformLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolChatChatServiceDynamicClientConfig': {
      ChatDomain?: LcuComponents['schemas']['LolChatChatDomainConfig']
      LcuSocial?: LcuComponents['schemas']['LolChatLcuSocialConfig']
    }
    /** @enum {string} */
    'LolChatChatSessionState': 'disconnected' | 'connecting' | 'connected'
    'LolChatChatSettings': {
      'bounceDockIconEnabled'?: boolean
      'chat-status-message'?: string
      'chatFilterDisabled'?: boolean
      'chatGBG'?: boolean
      'chatGroupMobile'?: boolean
      'chatGroupOffline'?: boolean
      'chatWindow'?: LcuComponents['schemas']['LolChatChatWindowSettings']
      /** Format: int32 */
      'chatWindowDockedHeight'?: number
      'closed-conversations'?: {
        [key: string]: number | undefined
      }
      'friendRequestToastsDisabled'?: boolean
      'hidden-conversations'?: {
        [key: string]: number | undefined
      }
      'linkClickWarningEnabled'?: boolean
      'messageNotificationsEnabled'?: boolean
      'moreUnreadsEnabled'?: boolean
      'muted-conversations'?: {
        [key: string]: number | undefined
      }
      'recentlyPlayedFirstOpen'?: boolean
      'recentlyPlayedOpen'?: boolean
      'roster-group-collapsed'?: {
        [key: string]: boolean | undefined
      }
      'showWhenTypingEnabled'?: boolean
      'sortBy'?: string
      'usePlayerPreferences'?: boolean
    }
    'LolChatChatSummoner': {
      displayName?: string
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      unnamed?: boolean
    }
    'LolChatChatWindowSettings': {
      detached?: boolean
      /** Format: int32 */
      height?: number
      /** Format: int32 */
      left?: number
      /** Format: int32 */
      top?: number
      /** Format: int32 */
      width?: number
    }
    'LolChatCidBody': {
      cid?: string
    }
    /** @enum {string} */
    'LolChatConfigReadinessEnum': 'NotReady' | 'Ready' | 'Disabled'
    'LolChatConfigStatus': {
      readiness?: LcuComponents['schemas']['LolChatConfigReadinessEnum']
    }
    /** @enum {string} */
    'LolChatConfigType': 'public' | 'player'
    'LolChatContentCookies': {
      content_id?: string
      content_path?: string
      cookies?: LcuComponents['schemas']['LolChatcookie'][]
    }
    'LolChatConversation': {
      cid?: string
      mid?: string
      muted?: boolean
      type?: string
      /** Format: int64 */
      unread_count?: number
    }
    'LolChatConversationJoinFederated': {
      domain?: string
      hidden?: boolean
      id?: string
      password?: string
      targetRegion?: string
      type?: string
    }
    'LolChatConversationList': {
      conversations?: LcuComponents['schemas']['LolChatConversation'][]
    }
    'LolChatConversationMessageResource': {
      body?: string
      fromId?: string
      fromPid?: string
      /** Format: int64 */
      fromSummonerId?: number
      id?: string
      isHistorical?: boolean
      timestamp?: string
      type?: string
    }
    'LolChatConversationResource': {
      gameName?: string
      gameTag?: string
      id?: string
      inviterId?: string
      isMuted?: boolean
      lastMessage?: LcuComponents['schemas']['LolChatConversationMessageResource']
      name?: string
      password?: string
      pid?: string
      targetRegion?: string
      type?: string
      /** Format: int64 */
      unreadMessageCount?: number
    }
    'LolChatConversationUpdate': {
      cid?: string
      hidden?: boolean
      muted?: boolean
    }
    'LolChatcookie': {
      domain?: string
      /** Format: int64 */
      expires?: number
      httponly?: boolean
      name?: string
      path?: string
      secure?: boolean
      url?: string
      value?: string
    }
    'LolChatDebugResource': {
      /** Format: int32 */
      asyncWaitInterval?: number
      enableChatFiltering?: boolean
      failAllChatLogin?: boolean
      failNextChatLogin?: boolean
      failNextChatLogout?: boolean
      failNextKeepAlive?: boolean
      isXMPPLoggingEnabled?: boolean
      /** Format: int32 */
      keepAliveInterval?: number
      /** Format: int32 */
      maxReconnectInterval?: number
      /** Format: int32 */
      minReconnectInterval?: number
      silenceChatWhileInGame?: boolean
      triggerChatDisconnect?: boolean
    }
    'LolChatError': {
      cid?: string
      class?: string
      code?: string
      id?: string
      pid?: string
      subtype?: string
      text?: string
      ts?: string
      type?: string
    }
    'LolChatErrorList': {
      errors?: LcuComponents['schemas']['LolChatError'][]
    }
    'LolChatErrorResource': {
      /** Format: int64 */
      code?: number
      from?: string
      /** Format: int64 */
      id?: number
      message?: string
      text?: string
    }
    'LolChatFriend': {
      displayGroup?: string
      game_name?: string
      game_tag?: string
      group?: string
      name?: string
      note?: string
      pid?: string
      puuid?: string
      region?: string
    }
    'LolChatFriendCountsResource': {
      /** Format: int32 */
      numFriends?: number
      /** Format: int32 */
      numFriendsAvailable?: number
      /** Format: int32 */
      numFriendsAway?: number
      /** Format: int32 */
      numFriendsInChampSelect?: number
      /** Format: int32 */
      numFriendsInGame?: number
      /** Format: int32 */
      numFriendsInQueue?: number
      /** Format: int32 */
      numFriendsMobile?: number
      /** Format: int32 */
      numFriendsOnline?: number
    }
    'LolChatFriendGroup': {
      collapsed?: boolean
      isMetaGroup?: boolean
      name?: string
    }
    'LolChatFriendGroupCreate': {
      collapsed?: boolean
      name?: string
    }
    'LolChatFriendGroupList': {
      groups?: LcuComponents['schemas']['LolChatFriendGroup'][]
    }
    'LolChatFriendGroupOrder': {
      groups?: string[]
    }
    'LolChatFriendGroupUpdate': {
      collapsed?: boolean
      name?: string
      new_name?: string
    }
    'LolChatFriendList': {
      friends?: LcuComponents['schemas']['LolChatFriend'][]
    }
    'LolChatFriendRequest': {
      game_name?: string
      game_tag?: string
      name?: string
      note?: string
      pid?: string
      puuid?: string
      region?: string
      subscription?: LcuComponents['schemas']['LolChatFriendSubscriptionType']
    }
    'LolChatFriendRequestAdd': {
      game_name?: string
      game_tag?: string
      name?: string
      note?: string
      pid?: string
      puuid?: string
      region?: string
    }
    /** @enum {string} */
    'LolChatFriendRequestDirection': 'in' | 'out' | 'both'
    'LolChatFriendRequestList': {
      requests?: LcuComponents['schemas']['LolChatFriendRequest'][]
    }
    'LolChatFriendRequestResource': {
      direction?: LcuComponents['schemas']['LolChatFriendRequestDirection']
      gameName?: string
      gameTag?: string
      /** Format: int32 */
      icon?: number
      id?: string
      name?: string
      note?: string
      pid?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolChatFriendResource': {
      availability?: string
      /** Format: int32 */
      displayGroupId?: number
      displayGroupName?: string
      gameName?: string
      gameTag?: string
      /** Format: int32 */
      groupId?: number
      groupName?: string
      /** Format: int32 */
      icon?: number
      id?: string
      isP2PConversationMuted?: boolean
      lastSeenOnlineTimestamp?: string
      lol?: {
        [key: string]: string | undefined
      }
      name?: string
      note?: string
      patchline?: string
      pid?: string
      platformId?: string
      product?: string
      productName?: string
      puuid?: string
      statusMessage?: string
      summary?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int64 */
      time?: number
    }
    /** @enum {string} */
    'LolChatFriendSubscriptionType': 'pending_out' | 'pending_in'
    'LolChatGameDataChampionSummary': {
      alias?: string
      /** Format: int32 */
      id?: number
    }
    'LolChatGameflowGameData': {
      /** Format: int64 */
      gameId?: number
      playerChampionSelections?: LcuComponents['schemas']['LolChatChampSelection'][]
      queue?: LcuComponents['schemas']['LolChatQueue']
      teamOne?: LcuComponents['schemas']['LolChatTeamPlayerEntry'][]
      teamTwo?: LcuComponents['schemas']['LolChatTeamPlayerEntry'][]
    }
    'LolChatGameflowGameMap': {
      /** Format: int64 */
      id?: number
    }
    /** @enum {string} */
    'LolChatGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolChatGameflowSession': {
      gameData?: LcuComponents['schemas']['LolChatGameflowGameData']
      map?: LcuComponents['schemas']['LolChatGameflowGameMap']
      phase?: LcuComponents['schemas']['LolChatGameflowPhase']
    }
    'LolChatGroupResource': {
      collapsed?: boolean
      /** Format: int32 */
      id?: number
      isLocalized?: boolean
      isMetaGroup?: boolean
      name?: string
      /** Format: int32 */
      priority?: number
    }
    'LolChatIdBody': {
      id?: string
    }
    'LolChatLcuSocialConfig': {
      AggressiveScanning?: boolean
      allowGroupByGame?: boolean
      ForceChatFilter?: boolean
      gameNameTaglineEnabled?: boolean
      platformToRegionMap?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      QueueJobGraceSeconds?: number
      ReplaceRichMessages?: boolean
      SilenceChatWhileInGame?: boolean
    }
    /** @enum {string} */
    'LolChatLeagueDivision': 'I' | 'II' | 'III' | 'IV' | 'V' | 'NA'
    /** @enum {string} */
    'LolChatLeagueQueueType':
      | 'NONE'
      | 'RANKED_SOLO_5x5'
      | 'RANKED_FLEX_SR'
      | 'RANKED_FLEX_TT'
      | 'RANKED_TFT'
    /** @enum {string} */
    'LolChatLeagueTier':
      | 'NONE'
      | 'IRON'
      | 'BRONZE'
      | 'SILVER'
      | 'GOLD'
      | 'PLATINUM'
      | 'DIAMOND'
      | 'MASTER'
      | 'GRANDMASTER'
      | 'CHALLENGER'
    'LolChatLobbyMember': {
      /** Format: int64 */
      id?: number
      isOwner?: boolean
    }
    'LolChatLobbyPlayerStatus': {
      currentLobbyStatus?: LcuComponents['schemas']['LolChatLobbyStatus']
      lastQueuedLobbyStatus?: LcuComponents['schemas']['LolChatLobbyStatus']
    }
    'LolChatLobbyStatus': {
      customSpectatorPolicy?: LcuComponents['schemas']['LolChatQueueCustomGameSpectatorPolicy']
      isCustom?: boolean
      isLeader?: boolean
      isPracticeTool?: boolean
      /** Format: int32 */
      queueId?: number
    }
    'LolChatMessage': {
      body?: string
      cid?: string
      game_name?: string
      game_tag?: string
      id?: string
      mid?: string
      name?: string
      pid?: string
      read?: boolean
      time?: string
      type?: string
    }
    'LolChatMessageList': {
      messages?: LcuComponents['schemas']['LolChatMessage'][]
    }
    'LolChatMessagePost': {
      cid?: string
      message?: string
      type?: LcuComponents['schemas']['LolChatMessageType']
    }
    'LolChatMessageSend': {
      message?: string
      type?: string
    }
    /** @enum {string} */
    'LolChatMessageType': 'chat' | 'groupchat' | 'dm' | 'system'
    'LolChatMultiGamePresence': {
      actor?: string
      details?: string
      game_name?: string
      game_tag?: string
      location?: string
      msg?: string
      name?: string
      patchline?: string
      pid?: string
      platform?: string
      private?: string
      privateJwt?: string
      product?: string
      puuid?: string
      region?: string
      resource?: string
      state?: LcuComponents['schemas']['LolChatAccountState']
      summary?: string
      /** Format: int64 */
      time?: number
    }
    'LolChatMultiGamePresenceList': {
      presences?: LcuComponents['schemas']['LolChatMultiGamePresence'][]
    }
    'LolChatMultiGamePresenceSharedPayload': {
      actor?: string
      details?: string
      location?: string
      patchline?: string
      platform?: string
      product?: string
      /** Format: int64 */
      time?: number
    }
    'LolChatMultiGamePresenceUpdate': {
      msg?: string
      private?: string
      privateJwt?: string
      shared?: LcuComponents['schemas']['LolChatMultiGamePresenceSharedPayload']
      sharedJwt?: string
      state?: LcuComponents['schemas']['LolChatAccountState']
    }
    'LolChatMutedPlayerInfo': {
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolChatNameBody': {
      name?: string
    }
    'LolChatParticipant': {
      cid?: string
      game_name?: string
      game_tag?: string
      muted?: boolean
      name?: string
      pid?: string
      puuid?: string
      region?: string
    }
    'LolChatParticipantList': {
      participants?: LcuComponents['schemas']['LolChatParticipant'][]
    }
    'LolChatPatchlineMetadata': {
      content_cookies?: LcuComponents['schemas']['LolChatContentCookies'][]
      content_paths?: {
        [key: string]: string | undefined
      }
      id?: string
      product_id?: string
    }
    'LolChatPidBody': {
      pid?: string
    }
    'LolChatPlayerPreferences': {
      data?: string
      hash?: string
      /** Format: int64 */
      modified?: number
      type?: string
    }
    'LolChatPluginRegionLocaleChangedEvent': {
      locale?: string
      region?: string
    }
    'LolChatPresenceProduct': {
      product?: string
    }
    'LolChatProductMetadata': {
      id?: string
      name?: string
      patchlines?: {
        [key: string]: LcuComponents['schemas']['LolChatPatchlineMetadata'] | undefined
      }
    }
    'LolChatProductMetadataMap': {
      products?: {
        [key: string]: LcuComponents['schemas']['LolChatProductMetadata'] | undefined
      }
    }
    'LolChatQueue': {
      gameMode?: string
      gameTypeConfig?: LcuComponents['schemas']['LolChatQueueGameTypeConfig']
      /** Format: int32 */
      id?: number
      type?: string
    }
    /** @enum {string} */
    'LolChatQueueCustomGameSpectatorPolicy':
      | 'NotAllowed'
      | 'LobbyAllowed'
      | 'FriendsAllowed'
      | 'AllAllowed'
    'LolChatQueueGameTypeConfig': {
      /** Format: int64 */
      id?: number
      name?: string
    }
    'LolChatRankedQueueStats': {
      division?: LcuComponents['schemas']['LolChatLeagueDivision']
      /** Format: int32 */
      games?: number
      isProvisional?: boolean
      queueType?: LcuComponents['schemas']['LolChatLeagueQueueType']
      tier?: LcuComponents['schemas']['LolChatLeagueTier']
      /** Format: int32 */
      wins?: number
    }
    'LolChatRankedStats': {
      highestPreviousSeasonAchievedDivision?: LcuComponents['schemas']['LolChatLeagueDivision']
      highestPreviousSeasonAchievedTier?: LcuComponents['schemas']['LolChatLeagueTier']
      highestRankedEntry?: LcuComponents['schemas']['LolChatRankedQueueStats']
      /** Format: int32 */
      rankedRegaliaLevel?: number
    }
    'LolChatRsoAuthorization': {
      /** Format: int64 */
      currentAccountId?: number
      currentPlatformId?: string
      subject?: string
    }
    'LolChatSanitizeRequest': {
      aggressiveScan?: boolean
      /** Format: int32 */
      level?: number
      texts?: string[]
    }
    'LolChatSanitizeResponse': {
      modified?: boolean
      texts?: string[]
    }
    'LolChatSanitizerStatus': {
      locale?: string
      platformID?: string
      ready?: boolean
    }
    'LolChatSession': {
      game_name?: string
      game_tag?: string
      loaded?: boolean
      name?: string
      pid?: string
      resource?: string
      state?: LcuComponents['schemas']['LolChatChatSessionState']
    }
    'LolChatSessionResource': {
      /** Format: int32 */
      sessionExpire?: number
      sessionState?: LcuComponents['schemas']['LolChatSessionState']
    }
    /** @enum {string} */
    'LolChatSessionState': 'initializing' | 'connected' | 'loaded' | 'disconnected' | 'shuttingdown'
    'LolChatSettingsResource': {
      data?: {
        [key: string]: unknown | undefined
      }
    }
    'LolChatSpectateGameInfoResource': {
      allowObserveMode?: string
      dropInSpectateGameId?: string
      gameQueueType?: string
      puuid?: string
    }
    'LolChatSummonerStatus': {
      ready?: boolean
    }
    'LolChatTeamPlayerEntry': {
      /** Format: int64 */
      summonerId?: number
      summonerInternalName?: string
      summonerName?: string
    }
    'LolChatTranslateRequest': {
      blocking?: boolean
      keys?: string[]
      locale?: string
      patchline?: string
      product_id?: string
    }
    'LolChatTranslateResponse': {
      results?: LcuComponents['schemas']['LolChatTranslateResult'][]
    }
    'LolChatTranslateResult': {
      found?: boolean
      key?: string
      product_id?: string
      value?: string
    }
    'LolChatUserResource': {
      availability?: string
      gameName?: string
      gameTag?: string
      /** Format: int32 */
      icon?: number
      id?: string
      lastSeenOnlineTimestamp?: string
      lol?: {
        [key: string]: string | undefined
      }
      name?: string
      patchline?: string
      pid?: string
      platformId?: string
      product?: string
      productName?: string
      puuid?: string
      statusMessage?: string
      summary?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int64 */
      time?: number
    }
    'LolClashBlockedPlayerResource': {
      name?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolClashBracket': {
      /** Format: int64 */
      id?: number
      isComplete?: boolean
      matches?: LcuComponents['schemas']['BracketMatch'][]
      /** Format: int32 */
      period?: number
      rosters?: LcuComponents['schemas']['BracketRoster'][]
      /** Format: int32 */
      size?: number
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      version?: number
    }
    'LolClashBracketReadyNotification': {
      /** Format: int64 */
      bracketId?: number
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashBracketUpdateNotification': {
      /** Format: int64 */
      bracketId?: number
      /** Format: int64 */
      currentMatchId?: number
      notifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashChangeIconRequest': {
      /** Format: int32 */
      iconColorId?: number
      /** Format: int32 */
      iconId?: number
    }
    'LolClashChangeNameRequest': {
      name?: string
    }
    'LolClashClashConfig': {
      CheckPartiesRegistration?: boolean
      DisabledEvents?: string[]
      DisabledReason?: string
      EnabledState?: LcuComponents['schemas']['LolClashClashState']
      /** Format: int64 */
      EstimatedEnableTimeMillis?: number
      EventSendingEnabled?: boolean
      /** Format: int32 */
      HonorLevelRequired?: number
      /** Format: int32 */
      HonorRefreshRetrySeconds?: number
      IconConfig?: string
      IsPlaymodeRestrictionEnabled?: boolean
      /** Format: int32 */
      MaxTimeBeforeLockinNotifySeconds?: number
      /** Format: int32 */
      MinClashNotificationsSummonerLevel?: number
      /** Format: int32 */
      MinClashSummonerLevel?: number
      /** Format: int32 */
      RewardGrantRetryIntervalSeconds?: number
      Visibility?: LcuComponents['schemas']['LolClashClashVisibility']
      /** Format: int32 */
      VoiceEobQuitDelaySeconds?: number
      /** Format: int32 */
      VoiceNoDelayAutoStartSeconds?: number
      /** Format: int32 */
      VoiceRandomStartMaxSeconds?: number
      /** Format: int32 */
      VoiceRandomStartMinSeconds?: number
      /** Format: int32 */
      VoiceRetryCountLimit?: number
      /** Format: int32 */
      VoiceRetryDelaySeconds?: number
    }
    'LolClashClashDisabledConfig': {
      disabledReason?: string
      /** Format: int64 */
      estimatedEnableTimeMillis?: number
    }
    'LolClashClashSettingCategory': {
      simpleStateFlagIds?: string[]
    }
    /** @enum {string} */
    'LolClashClashState': 'Disabled' | 'Enabled'
    /** @enum {string} */
    'LolClashClashVisibility': 'Hidden' | 'Visible'
    'LolClashClientFailedInvite': {
      exception?: string
      /** Format: int64 */
      playerId?: number
    }
    'LolClashClubsSummoner': {
      displayName?: string
      /** Format: int32 */
      profileIconId?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolClashEogPlayerUpdateDTO': {
      /** Format: int32 */
      bid?: number
      /** Format: int32 */
      bracketSize?: number
      earnedRewards?: LcuComponents['schemas']['ClashRewardDefinition'][]
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      lowestPosition?: number
      rewardProgress?: LcuComponents['schemas']['ClashRewardDefinition'][]
      /** Format: int32 */
      seasonVp?: number
      /** Format: int32 */
      themeVp?: number
      /** Format: int32 */
      tier?: number
      /** Format: int64 */
      tournamentId?: number
      winner?: boolean
    }
    'LolClashFindPlayers': {
      /** Format: int32 */
      count?: number
      invitationId?: string
      /** Format: int64 */
      memberId?: number
      /** Format: int32 */
      page?: number
    }
    'LolClashFindTeams': {
      /** Format: int32 */
      count?: number
      /** Format: int32 */
      page?: number
      /** Format: int64 */
      tournamentId?: number
    }
    /** @enum {string} */
    'LolClashFoundationError':
      | 'CLASH_NOT_INITIALIZED'
      | 'CLASH_DISABLED'
      | 'DESERIALIZATION_FAILED'
      | 'GAMEFLOW_UNAVAILABLE'
      | 'LOL_INVENTORY_NOT_READY'
      | 'INVALID_SIMPLE_STATE_FLAG'
    'LolClashGameflowAvailability': {
      isAvailable?: boolean
    }
    'LolClashGameflowGameDodge': {
      dodgeIds?: number[]
      state?: LcuComponents['schemas']['LolClashMatchmakingDodgeState']
    }
    'LolClashGameflowPartiesRegistrationStatus': {
      complete?: boolean
      errorCodes?: string[]
    }
    /** @enum {string} */
    'LolClashGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolClashGameflowSession': {
      phase?: LcuComponents['schemas']['LolClashGameflowPhase']
    }
    'LolClashInviteSubRequest': {
      /** Format: int64 */
      replacedSummonerId?: number
      /** Format: int64 */
      substituteSummonerId?: number
    }
    /** @enum {string} */
    'LolClashKdaClassification': 'LOW' | 'AVERAGE' | 'HIGH'
    'LolClashKickRequest': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolClashLftState': {
      lft?: boolean
      primaryPos?: string
      secondaryPos?: string
    }
    'LolClashLoginSession': {
      state?: LcuComponents['schemas']['LolClashLoginSessionState']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolClashLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolClashMatchmakingDodgeData': {
      /** Format: int64 */
      dodgerId?: number
      state?: LcuComponents['schemas']['LolClashMatchmakingDodgeState']
    }
    /** @enum {string} */
    'LolClashMatchmakingDodgeState':
      | 'Invalid'
      | 'PartyDodged'
      | 'StrangerDodged'
      | 'TournamentDodged'
    /** @enum {string} */
    'LolClashMatchmakingDodgeWarning': 'None' | 'Warning' | 'Penalty'
    'LolClashMatchmakingReadyCheckResource': {
      declinerIds?: number[]
      dodgeWarning?: LcuComponents['schemas']['LolClashMatchmakingDodgeWarning']
      playerResponse?: LcuComponents['schemas']['LolClashMatchmakingReadyCheckResponse']
      state?: LcuComponents['schemas']['LolClashMatchmakingReadyCheckState']
      /** Format: float */
      timer?: number
    }
    /** @enum {string} */
    'LolClashMatchmakingReadyCheckResponse': 'None' | 'Accepted' | 'Declined'
    /** @enum {string} */
    'LolClashMatchmakingReadyCheckState':
      | 'Invalid'
      | 'InProgress'
      | 'EveryoneReady'
      | 'StrangerNotReady'
      | 'PartyNotReady'
      | 'Error'
    'LolClashMatchmakingSearchResource': {
      dodgeData?: LcuComponents['schemas']['LolClashMatchmakingDodgeData']
      /** Format: int32 */
      queueId?: number
      readyCheck?: LcuComponents['schemas']['LolClashMatchmakingReadyCheckResource']
    }
    'LolClashMemberBanUnbanNotification': {
      /** Format: int64 */
      notifyPlayerId?: number
      notifyPuuid?: string
      notifyReason?: LcuComponents['schemas']['LolClashNotifyReason']
      /** Format: int64 */
      playerId?: number
      reason?: string
      tournaments?: LcuComponents['schemas']['MemberBanUnbanTournament'][]
    }
    'LolClashNoShowPingDTO': {
      /** Format: int64 */
      dodgeTime?: number
      /** Format: int64 */
      matchId?: number
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashNoShowPingResponse': {
      data?: string
      /** Format: int64 */
      dodgeTime?: number
      /** Format: int64 */
      matchId?: number
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashNoShowPingResponseData': {
      /** Format: int64 */
      dodgeTime?: number
      gameflowState?: LcuComponents['schemas']['LolClashGameflowPhase']
      isPlaymodeRestricted?: boolean
      /** Format: int64 */
      loginTime?: number
      readyCheckInfo?: LcuComponents['schemas']['LolClashReadyCheckInfo']
    }
    /** @enum {string} */
    'LolClashNotifyReason':
      | 'SUGGESTION'
      | 'DECLINE_SUGGESTION'
      | 'ACCEPT_SUGGESTION'
      | 'REVOKE_SUGGESTION'
      | 'DECLINE_SELFJOIN'
      | 'ACCEPT_SELFJOIN'
      | 'REVOKE_SELFJOIN'
      | 'SELFJOIN'
      | 'READY'
      | 'UNREADY'
      | 'OWNER_CLOSE'
      | 'DISMISS'
      | 'ROSTER_DELETE'
      | 'OWNER_TRANSFER'
      | 'CHANGE_LOGO'
      | 'CHANGE_NAME'
      | 'CHANGE_SHORTNAME'
      | 'CHANGE_POSITION'
      | 'CHANGE_NAMETAGLOGO'
      | 'CHANGE_LFT'
      | 'INVITE'
      | 'RESENT_INVITE'
      | 'DECLINE_INVITE'
      | 'ACCEPT_INVITE'
      | 'REVOKE_INVITE'
      | 'LEAVE'
      | 'CAPTAIN_LEAVE'
      | 'KICK'
      | 'SET_TICKET'
      | 'OFFER_TICKET'
      | 'REVOKED_TICKET'
      | 'DECLINE_TICKET'
      | 'ACCEPT_TICKET'
      | 'REWARD_GRANT_FAILED'
      | 'REWARD_GRANT_RETRY'
      | 'REVERTED_REGISTRATION'
      | 'BAN'
      | 'UNBAN'
      | 'MEMBER_BAN'
      | 'TEAMMATE_BAN'
      | 'TEAMMATE_UNBAN'
    'LolClashOfferTicketRequest': {
      /** Format: int32 */
      ticketAmount?: number
      ticketType?: LcuComponents['schemas']['TicketType']
    }
    'LolClashPendingRosterNotification': {
      notifyReason?: LcuComponents['schemas']['LolClashNotifyReason']
      pendingRoster?: LcuComponents['schemas']['PendingRosterDTO']
      /** Format: int64 */
      sourcePlayerId?: number
      /** Format: int64 */
      targetPlayerId?: number
    }
    'LolClashPlayerChatRoster': {
      /** Format: int64 */
      endTimeMs?: number
      /** Format: int32 */
      iconColorId?: number
      /** Format: int32 */
      iconId?: number
      invitationId?: string
      isRegistered?: boolean
      key?: string
      logoUrl?: string
      name?: string
      playerState?: LcuComponents['schemas']['LolClashPlayerState']
      shortName?: string
      /** Format: int64 */
      startTimeMs?: number
      /** Format: int64 */
      tournamentId?: number
      tournamentState?: LcuComponents['schemas']['LolClashTournamentState']
    }
    'LolClashPlayerData': {
      isClashBanned?: boolean
      lft?: boolean
      primaryPos?: string
      secondaryPos?: string
      tickets?: {
        [key: string]: number | undefined
      }
      /** Format: int32 */
      tier?: number
    }
    'LolClashPlayerNotification': {
      backgroundUrl?: string
      created?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      dismissible?: boolean
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolClashPlayerNotificationData': {
      keySuffix?: string
      notification?: LcuComponents['schemas']['LolClashPlayerNotification']
      notifyReason?: LcuComponents['schemas']['LolClashNotifyReason']
      rosterNotifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      /** Format: int64 */
      sourceSummonerId?: number
      /** Format: int64 */
      targetSummonerId?: number
      tournamentNotifyReason?: LcuComponents['schemas']['LolClashTournamentNotifyReason']
    }
    'LolClashPlayerRewards': {
      /** Format: int32 */
      seasonVp?: number
      themeVp?: LcuComponents['schemas']['LolClashThemeVp'][]
    }
    /** @enum {string} */
    'LolClashPlayerState':
      | 'NO_ROSTER'
      | 'PENDING_ROSTER'
      | 'REGISTERED_ROSTER'
      | 'BRACKET_ROSTER'
      | 'ELIMINATED'
    'LolClashPlayerTournamentData': {
      /** Format: int64 */
      bracketId?: number
      isSub?: boolean
      rosterId?: string
      state?: LcuComponents['schemas']['LolClashPlayerState']
    }
    'LolClashPlayerUpdateNotification': {
      notifyReason?: LcuComponents['schemas']['LolClashNotifyReason']
      player?: LcuComponents['schemas']['PlayerDTO']
    }
    'LolClashPlaymodeRestrictedInfo': {
      isRestricted?: boolean
      /** Format: int64 */
      phaseId?: number
      presenceState?: LcuComponents['schemas']['LolClashPresenceState']
      readyForVoice?: boolean
      rosterId?: string
      /** Format: int64 */
      tournamentId?: number
    }
    /** @enum {string} */
    'LolClashPresenceState': 'NONE' | 'LOCKED_IN' | 'SCOUTING'
    'LolClashProfileInfo': {
      /** Format: int32 */
      honorLevel?: number
    }
    'LolClashQueue': {
      areFreeChampionsAllowed?: boolean
      category?: LcuComponents['schemas']['LolClashQueueGameCategory']
      description?: string
      detailedDescription?: string
      gameMode?: string
      gameTypeConfig?: LcuComponents['schemas']['LolClashQueueGameTypeConfig']
      /** Format: int32 */
      id?: number
      isRanked?: boolean
      isTeamBuilderManaged?: boolean
      isTeamOnly?: boolean
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxSummonerLevelForFirstWinOfTheDay?: number
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minLevel?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeam?: number
      queueAvailability?: LcuComponents['schemas']['LolClashQueueAvailability']
      queueRewards?: LcuComponents['schemas']['LolClashQueueReward']
      shortName?: string
      spectatorEnabled?: boolean
      type?: string
    }
    /** @enum {string} */
    'LolClashQueueAvailability': 'Available' | 'PlatformDisabled' | 'DoesntMeetRequirements'
    /** @enum {string} */
    'LolClashQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    'LolClashQueueGameTypeConfig': {
      advancedLearningQuests?: boolean
      allowTrades?: boolean
      banMode?: string
      /** Format: int32 */
      banTimerDuration?: number
      battleBoost?: boolean
      crossTeamChampionPool?: boolean
      deathMatch?: boolean
      doNotRemove?: boolean
      duplicatePick?: boolean
      exclusivePick?: boolean
      /** Format: int64 */
      id?: number
      learningQuests?: boolean
      /** Format: int32 */
      mainPickTimerDuration?: number
      /** Format: int32 */
      maxAllowableBans?: number
      name?: string
      onboardCoopBeginner?: boolean
      pickMode?: string
      /** Format: int32 */
      postPickTimerDuration?: number
      reroll?: boolean
      teamChampionPool?: boolean
    }
    'LolClashQueueReward': {
      isChampionPointsEnabled?: boolean
      isIpEnabled?: boolean
      isXpEnabled?: boolean
      partySizeIpRewards?: number[]
    }
    'LolClashRankedScoutingMember': {
      championScoutingData?: LcuComponents['schemas']['LolClashRankedScoutingTopChampion'][]
      /** Format: int64 */
      playerId?: number
    }
    'LolClashRankedScoutingTopChampion': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      gameCount?: number
      kda?: string
      kdaClassification?: LcuComponents['schemas']['LolClashKdaClassification']
      /** Format: int32 */
      rank?: number
      /** Format: int32 */
      winCount?: number
      /** Format: int32 */
      winRate?: number
    }
    'LolClashReadyCheckInfo': {
      acceptError?: string
      isAcceptSuccessful?: boolean
      /** Format: int32 */
      queueId?: number
      readyCheckResource?: LcuComponents['schemas']['LolClashMatchmakingReadyCheckResource']
      /** Format: int64 */
      timestampLastClashGameflowDodge?: number
      /** Format: int64 */
      timestampReceived?: number
      /** Format: int64 */
      timestampResponseComplete?: number
    }
    'LolClashRegisteredRosterNotification': {
      notifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      roster?: LcuComponents['schemas']['RosterDTO']
    }
    'LolClashRoster': {
      availableLogos?: LcuComponents['schemas']['RewardLogo'][]
      /** Format: int64 */
      captainSummonerId?: number
      /** Format: int32 */
      currentBracketWins?: number
      highTierVariance?: boolean
      /** Format: int32 */
      iconColorId?: number
      /** Format: int32 */
      iconId?: number
      id?: string
      invitationId?: string
      isActiveInCurrentPhase?: boolean
      isClashBanned?: boolean
      isCurrentBracketComplete?: boolean
      isEliminated?: boolean
      isRegistered?: boolean
      lft?: boolean
      /** Format: int32 */
      losses?: number
      members?: LcuComponents['schemas']['LolClashRosterMember'][]
      name?: string
      /** Format: int32 */
      numCompletedPeriods?: number
      phaseInfos?: LcuComponents['schemas']['LolClashRosterPhaseInfo'][]
      /** Format: int32 */
      points?: number
      shortName?: string
      suggestedInvites?: LcuComponents['schemas']['LolClashSuggestedInvite'][]
      /** Format: int32 */
      tier?: number
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      wins?: number
      withdraw?: LcuComponents['schemas']['RosterWithdraw']
    }
    'LolClashRosterDetails': {
      /** Format: int32 */
      iconColorId?: number
      /** Format: int32 */
      iconId?: number
      name?: string
      shortName?: string
    }
    'LolClashRosterDynamicStateNotification': {
      notifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      rosterDynamicState?: LcuComponents['schemas']['RosterDynamicStateDTO']
      /** Format: int64 */
      sourcePlayerId?: number
    }
    'LolClashRosterMatchAggregatedStats': {
      /** Format: int64 */
      durationMs?: number
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      kills?: number
      loserBracket?: boolean
      /** Format: int32 */
      opponentIconColorId?: number
      /** Format: int32 */
      opponentIconId?: number
      /** Format: int32 */
      opponentKills?: number
      opponentShortName?: string
      playerChampionIds?: {
        [key: string]: number | undefined
      }
      /** Format: int32 */
      round?: number
      win?: boolean
    }
    'LolClashRosterMember': {
      buyinType?: LcuComponents['schemas']['TicketType']
      /** Format: int32 */
      currentBuyin?: number
      incomingOffers?: LcuComponents['schemas']['LolClashTicketOffer'][]
      /** Format: int64 */
      inviterId?: number
      inviteType?: LcuComponents['schemas']['InviteType']
      isSubbedOut?: boolean
      isSubForOtherTeam?: boolean
      isSubstitute?: boolean
      position?: LcuComponents['schemas']['Position']
      /** Format: int32 */
      previousBuyin?: number
      /** Format: int64 */
      replacedSummonerId?: number
      state?: LcuComponents['schemas']['LolClashRosterMemberState']
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      tier?: number
    }
    /** @enum {string} */
    'LolClashRosterMemberState': 'DECLINED' | 'PENDING' | 'NOT_READY' | 'FORCED_NOT_READY' | 'READY'
    /** @enum {string} */
    'LolClashRosterNotifyReason':
      | 'ROSTER_SET_TICKET'
      | 'ROSTER_OFFER_TICKET'
      | 'ROSTER_ACCEPT_TICKET'
      | 'ROSTER_DECLINE_TICKET'
      | 'ROSTER_REVOKED_TICKET'
      | 'BYE_AUTO_WIN'
      | 'BRACKET_READY'
      | 'CHANGE_POSITION'
      | 'EOG_PLAYER_UPDATE'
      | 'REGISTERED'
      | 'RESTRICTION_AUTO_WIN'
      | 'PHASE_UNREADY'
      | 'PHASE_READY'
      | 'PHASE_CHECKIN'
      | 'PHASE_BACKOUT'
      | 'PERIOD_CANCEL'
      | 'PERIOD_SPLIT'
      | 'GAME_COMPLETED'
      | 'GAME_SCHEDULED'
      | 'GAME_STARTED'
      | 'GAME_STARTED_ERROR'
      | 'GAME_END_ERROR'
      | 'QUEUE_DODGE'
      | 'OWNER_TRANSFER'
      | 'SUB_INVITE'
      | 'SUB_ACCEPT'
      | 'SUB_DECLINE'
      | 'SUB_REVOKE'
      | 'SUB_SUGGEST'
      | 'SUB_ACCEPTSUGGEST'
      | 'SUB_DECLINESUGGEST'
      | 'SUB_RECLAIM'
      | 'SUB_LEAVE'
      | 'MEMBER_SUBBED'
      | 'MEMBER_SUB_REVOKE'
      | 'MEMBER_SUB_RECLAIM'
      | 'VOTE_WITHDRAW_UPDATE'
      | 'VOTE_WITHDRAW_DISMISS'
      | 'WITHDRAW'
      | 'ROUND_COMPLETE'
      | 'NO_SHOW_PING'
      | 'TIER_CHANGED'
      | 'BRACKET_ROSTER_REMOVED'
      | 'BRACKET_ROSTER_REPLACED'
      | 'CANNOT_FIND_MATCH'
      | 'BANNED_SMURF'
      | 'BANNED_SMURF_TEAMMATE'
      | 'BANNED_SMURF_OPPONENT'
      | 'TICKET_CHARGED'
      | 'TICKET_REFUNDED'
      | 'TICKET_COULD_NOT_BE_CHARGED'
      | 'SUB_INVITE_SELF'
      | 'GAME_START_RETRY'
      | 'GAME_START_RETRY_SUMMONERS'
      | 'GAME_START_RETRY_OPPONENT'
      | 'GAME_START_FAILED'
      | 'GAME_START_FAILED_SUMMONERS'
      | 'GAME_START_FAILED_OPPONENT'
      | 'GAME_RESCHEDULED'
    'LolClashRosterPeriodAggregatedStats': {
      /** Format: int32 */
      bracketSize?: number
      matchStats?: LcuComponents['schemas']['LolClashRosterMatchAggregatedStats'][]
      /** Format: int32 */
      period?: number
      playerBids?: {
        [key: string]: number | undefined
      }
      /** Format: int64 */
      time?: number
    }
    'LolClashRosterPhaseInfo': {
      /** Format: int64 */
      checkinTime?: number
      isBracketComplete?: boolean
      /** Format: int32 */
      period?: number
      /** Format: int64 */
      phaseId?: number
    }
    'LolClashRosterPlayerAggregatedStats': {
      rawStatsMax?: {
        [key: string]: number | undefined
      }
      rawStatsSum?: {
        [key: string]: number | undefined
      }
      sub?: boolean
    }
    'LolClashRosterPlayerNotification': {
      notifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      playerNotificationDTO?: LcuComponents['schemas']['PlayerDTO']
      roster?: LcuComponents['schemas']['RosterDTO']
      /** Format: int64 */
      sourcePlayerId?: number
    }
    'LolClashRosterStats': {
      /** Format: int64 */
      endTimeMs?: number
      periodStats?: LcuComponents['schemas']['LolClashRosterPeriodAggregatedStats'][]
      playerStats?: {
        [key: string]: LcuComponents['schemas']['LolClashRosterPlayerAggregatedStats'] | undefined
      }
      /** Format: int32 */
      rosterIconColorId?: number
      /** Format: int32 */
      rosterIconId?: number
      /** Format: int64 */
      rosterId?: number
      rosterName?: string
      rosterShortName?: string
      /** Format: int64 */
      startTimeMs?: number
      /** Format: int32 */
      tier?: number
      tournamentNameLocKey?: string
      tournamentNameLocKeySecondary?: string
      /** Format: int32 */
      tournamentPeriods?: number
      /** Format: int32 */
      tournamentThemeId?: number
    }
    'LolClashRosterWithdrawNotification': {
      notifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      /** Format: int64 */
      rosterId?: number
      /** Format: int64 */
      sourcePlayerId?: number
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      version?: number
      withdraw?: LcuComponents['schemas']['RosterWithdraw']
    }
    'LolClashScoutingChampionMastery': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championLevel?: number
      /** Format: int32 */
      championPoints?: number
    }
    'LolClashScoutingChampions': {
      /** Format: int64 */
      playerId?: number
      topMasteries?: LcuComponents['schemas']['LolClashScoutingChampionMastery'][]
      topSeasonChampions?: LcuComponents['schemas']['LolClashScoutingSeasonChampion'][]
      /** Format: int64 */
      totalMasteryScore?: number
    }
    'LolClashScoutingSeasonChampion': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      gameCount?: number
      kda?: string
      kdaClassification?: LcuComponents['schemas']['LolClashKdaClassification']
      /** Format: int32 */
      winCount?: number
      /** Format: int32 */
      winRate?: number
    }
    'LolClashSetPositionRequest': {
      position?: LcuComponents['schemas']['Position']
    }
    'LolClashSetTicketRequest': {
      /** Format: int32 */
      ticketAmount?: number
      ticketType?: LcuComponents['schemas']['TicketType']
    }
    'LolClashSettingCategory': {
      data?: {
        [key: string]: unknown | undefined
      }
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolClashSimpleStateFlag': {
      id?: string
      status?: LcuComponents['schemas']['LolClashSimpleStateStatus']
    }
    /** @enum {string} */
    'LolClashSimpleStateStatus': 'UNACKNOWLEDGED' | 'ACKNOWLEDGED'
    'LolClashSuggestedInvite': {
      /** Format: int64 */
      suggesterSummonerId?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolClashSuggestionInvite': {
      inviteePlayers?: number[]
      /** Format: int64 */
      inviterId?: number
    }
    'LolClashSuggestionInvitee': {
      /** Format: int64 */
      captainId?: number
      /** Format: int64 */
      inviteeId?: number
    }
    'LolClashTeamOpenState': {
      /** Format: int64 */
      captainId?: number
      invitationId?: string
      openTeam?: boolean
    }
    'LolClashThemeVp': {
      /** Format: int32 */
      themeId?: number
      /** Format: int32 */
      vp?: number
    }
    'LolClashThirdPartyApiPlayer': {
      role?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolClashThirdPartyApiRoster': {
      captain?: LcuComponents['schemas']['LolClashThirdPartyApiPlayer']
      members?: LcuComponents['schemas']['LolClashThirdPartyApiPlayer'][]
    }
    'LolClashTicketOffer': {
      /** Format: int32 */
      amount?: number
      isAccepted?: boolean
      /** Format: int64 */
      summonerId?: number
      ticketType?: LcuComponents['schemas']['TicketType']
    }
    'LolClashTournament': {
      allowRosterCreation?: boolean
      /** Format: int64 */
      bracketFormationInitDelayMs?: number
      /** Format: int64 */
      bracketFormationIntervalMs?: number
      bracketSize?: string
      buyInOptions?: number[]
      buyInOptionsPremium?: number[]
      /** Format: int64 */
      endTimeMs?: number
      /** Format: int32 */
      entryFee?: number
      /** Format: int64 */
      id?: number
      isHonorRestrictionEnabled?: boolean
      isRankedRestrictionEnabled?: boolean
      isSmsRestrictionEnabled?: boolean
      lastThemeOfSeason?: boolean
      lft?: boolean
      /** Format: int32 */
      maxInvites?: number
      /** Format: int32 */
      maxSubstitutes?: number
      /** Format: int32 */
      maxSuggestionsPerPlayer?: number
      nameLocKey?: string
      nameLocKeySecondary?: string
      phases?: LcuComponents['schemas']['LolClashTournamentPhase'][]
      /** Format: int64 */
      resumeTime?: number
      rewardConfig?: LcuComponents['schemas']['ClashRewardConfigClient'][]
      /** Format: int64 */
      rosterCreateDeadline?: number
      /** Format: int32 */
      rosterSize?: number
      /** Format: int64 */
      scoutingDurationMs?: number
      /** Format: int64 */
      startTimeMs?: number
      status?: LcuComponents['schemas']['TournamentStatusEnum']
      /** Format: int32 */
      themeId?: number
      tierConfigs?: LcuComponents['schemas']['TierConfig'][]
    }
    'LolClashTournamentGameEnd': {
      /** Format: int64 */
      bracketId?: number
      oldBracket?: LcuComponents['schemas']['LolClashBracket']
      /** Format: int64 */
      tournamentId?: number
      tournamentNameLocKey?: string
      tournamentNameLocKeySecondary?: string
    }
    'LolClashTournamentHistoryAndWinners': {
      tournamentHistory?: LcuComponents['schemas']['LolClashTournament'][]
      tournamentWinners?: LcuComponents['schemas']['LolClashTournamentWinnerHistory']
    }
    /** @enum {string} */
    'LolClashTournamentNotifyReason':
      | 'NEW_TOURNAMENT'
      | 'UPDATE_TOURNAMENT'
      | 'CANCEL_TOURNAMENT'
      | 'CANCEL_PERIOD'
      | 'ADD_PHASE'
      | 'UPDATE_PHASE'
      | 'REVERT_PHASE'
      | 'UPDATE_STATUS'
    'LolClashTournamentPhase': {
      cancelled?: boolean
      capacityStatus?: LcuComponents['schemas']['CapacityEnum']
      /** Format: int64 */
      id?: number
      limitTiers?: number[]
      /** Format: int64 */
      lockinStartTime?: number
      /** Format: int32 */
      period?: number
      /** Format: int64 */
      scoutingStartTime?: number
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashTournamentPhaseProgressNotificationDTO': {
      capacityStatus?: LcuComponents['schemas']['CapacityEnum']
      /** Format: int64 */
      phaseId?: number
      /** Format: int64 */
      tournamentId?: number
    }
    /** @enum {string} */
    'LolClashTournamentState': 'UPCOMING' | 'IDLE' | 'LOCK_IN' | 'SCOUTING' | 'IN_GAME' | 'RESULTS'
    'LolClashTournamentStateInfo': {
      /** Format: int64 */
      currentPhaseId?: number
      /** Format: int64 */
      nextPhaseId?: number
      /** Format: int64 */
      nextStateChangeTime?: number
      /** Format: int32 */
      numRemainingPeriods?: number
      state?: LcuComponents['schemas']['LolClashTournamentState']
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashTournamentSummary': {
      /** Format: int64 */
      bracketId?: number
      rosterId?: string
      state?: LcuComponents['schemas']['LolClashTournamentState']
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashTournamentUpdatedNotification': {
      /** Format: int32 */
      currentRetry?: number
      /** Format: int32 */
      maxRetry?: number
      missingPlayerIds?: number[]
      notifyReason?: LcuComponents['schemas']['LolClashRosterNotifyReason']
      /** Format: int64 */
      retrySeconds?: number
    }
    'LolClashTournamentUpdatedNotificationDTO': {
      reason?: LcuComponents['schemas']['LolClashTournamentNotifyReason']
      /** Format: int64 */
      relevantPhaseId?: number
      tournament?: LcuComponents['schemas']['TournamentDTO']
      /** Format: int64 */
      tournamentId?: number
    }
    'LolClashTournamentWinnerHistory': {
      /** Format: int64 */
      tournamentId?: number
      winners?: LcuComponents['schemas']['LolClashTournamentWinnerInfo'][]
    }
    'LolClashTournamentWinnerInfo': {
      /** Format: int64 */
      averageWinDuration?: number
      /** Format: int64 */
      createTime?: number
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      name?: string
      playerIds?: number[]
      /** Format: int64 */
      rosterId?: number
      shortName?: string
      /** Format: int32 */
      tier?: number
    }
    'LolClashUserResource': {
      lol?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      summonerId?: number
    }
    'LolCollectionsAccountIdAndSummonerId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolCollectionsCollectionsChampionMastery': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championLevel?: number
      /** Format: int32 */
      championPoints?: number
      /** Format: int32 */
      championPointsSinceLastLevel?: number
      /** Format: int32 */
      championPointsUntilNextLevel?: number
      chestGranted?: boolean
      formattedChampionPoints?: string
      formattedMasteryGoal?: string
      highestGrade?: string
      /** Format: int64 */
      lastPlayTime?: number
      /** Format: int64 */
      playerId?: number
      /** Format: int32 */
      tokensEarned?: number
    }
    'LolCollectionsCollectionsChestEligibility': {
      /** Format: int32 */
      earnableChests?: number
      /** Format: int32 */
      maximumChests?: number
      /** Format: int64 */
      nextChestRechargeTime?: number
    }
    'LolCollectionsCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolCollectionsCollectionsRental']
    }
    'LolCollectionsCollectionsRental': {
      /** Format: int64 */
      endDate?: number
      /** Format: int64 */
      purchaseDate?: number
      rented?: boolean
      /** Format: int32 */
      winCountRemaining?: number
    }
    'LolCollectionsCollectionsSummonerBackdrop': {
      /** Format: int64 */
      accountId?: number
      backdropImage?: string
      backdropMaskColor?: string
      backdropType?: LcuComponents['schemas']['LolCollectionsCollectionsSummonerBackdropType']
      backdropVideo?: string
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolCollectionsCollectionsSummonerBackdropType':
      | 'default'
      | 'summoner-icon'
      | 'highest-mastery'
      | 'specified-skin'
    'LolCollectionsCollectionsSummonerSpells': {
      spells?: number[]
      /** Format: int64 */
      summonerId?: number
    }
    'LolCollectionsCollectionsTopChampionMasteries': {
      masteries?: LcuComponents['schemas']['LolCollectionsCollectionsChampionMastery'][]
      /** Format: int64 */
      score?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolCollectionsCollectionsWardSkin': {
      description?: string
      /** Format: int64 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolCollectionsCollectionsOwnership']
      wardImagePath?: string
      wardShadowImagePath?: string
    }
    'LolCollectionsCollectionsWardSkinList': {
      wardSkinList?: number[]
    }
    'LolCollectionsGameDataChampionMasteries': {
      tree?: LcuComponents['schemas']['LolCollectionsGameDataChampionMasteryTree']
    }
    'LolCollectionsGameDataChampionMasteryGroup': {
      /** Format: int32 */
      id?: number
      rows?: LcuComponents['schemas']['LolCollectionsGameDataChampionMasteryRow'][]
    }
    'LolCollectionsGameDataChampionMasteryRow': {
      masteries?: number[]
    }
    'LolCollectionsGameDataChampionMasteryTree': {
      groups?: LcuComponents['schemas']['LolCollectionsGameDataChampionMasteryGroup'][]
    }
    'LolCollectionsGameDataChampionQuestSkin': {
      /** Format: int32 */
      id?: number
      name?: string
      splashPath?: string
      splashVideoPath?: string
    }
    'LolCollectionsGameDataChampionSkin': {
      /** Format: int32 */
      id?: number
      isBase?: boolean
      name?: string
      questSkinInfo?: LcuComponents['schemas']['LolCollectionsGameDataQuestSkinInfo']
      splashPath?: string
      splashVideoPath?: string
    }
    'LolCollectionsGameDataChampionSummary': {
      /** Format: int32 */
      id?: number
    }
    'LolCollectionsGameDataQuestSkinInfo': {
      tiers?: LcuComponents['schemas']['LolCollectionsGameDataChampionQuestSkin'][]
    }
    'LolCollectionsGameDataSplashMetadata': {
      CalculatedColor?: string
      OverrideColor?: string
    }
    'LolCollectionsInventoryItem': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolCollectionsItemOwnershipType']
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      uuid?: string
    }
    'LolCollectionsInventoryItemDTO': {
      entitlementId?: string
      entitlementTypeId?: string
      expirationDate?: string
      f2p?: boolean
      instanceId?: string
      instanceTypeId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      loyalty?: boolean
      lsb?: boolean
      payload?: {
        [key: string]: unknown | undefined
      }
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      rental?: boolean
      usedInGameDate?: string
      /** Format: int64 */
      wins?: number
    }
    'LolCollectionsInventoryItemWithPayload': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolCollectionsItemOwnershipType']
      payload?: {
        [key: string]: unknown | undefined
      }
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      uuid?: string
    }
    /** @enum {string} */
    'LolCollectionsItemOwnershipType': 'OWNED' | 'RENTED' | 'LOYALTY' | 'F2P'
    'LolCollectionsLcdsDynamicClientConfig': {
      DisabledChampions?: {
        [key: string]: unknown | undefined
      }
    }
    'LolCollectionsLoginSession': {
      connected?: boolean
      state?: LcuComponents['schemas']['LolCollectionsLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolCollectionsLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolCollectionsNumberFormattingBehavior': {
      /** Format: int32 */
      digitsForThousandsSeperator?: number
      trimTrailingZerosAfterDecimal?: boolean
      westernNumberGrouping?: boolean
    }
    'LolCollectionsNumberFormattingData': {
      billionAbbreviation?: string
      decimalSeperator?: string
      hourAbbreviation?: string
      kilometersAbbreviation?: string
      metersAbbreviation?: string
      millionAbbreviation?: string
      minuteAbbreviation?: string
      numberFormattingBehavior?: LcuComponents['schemas']['LolCollectionsNumberFormattingBehavior']
      oneHundredMillionAbbreviation?: string
      percentageFormat?: string
      secondAbbreviation?: string
      tenThousandAbbreviation?: string
      thousandAbbreviation?: string
      thousandSeperator?: string
      trillionAbbreviation?: string
    }
    'LolCollectionsPlayerNotification': {
      backgroundUrl?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolCollectionsSummoner': {
      /** Format: int64 */
      accountId?: number
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolCollectionsSummonerProfile': {
      /** Format: int32 */
      backgroundSkinId?: number
    }
    'LolCollectionsSummonerProfileUpdate': {
      key?: string
      value?: {
        [key: string]: unknown | undefined
      }
    }
    'LolCollectionsTPVSaveResponseDTO': {
      data?: string
    }
    'LolContentTargetingAccountIdAndSummonerId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolContentTargetingCollectionsChampionMastery': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championLevel?: number
      /** Format: int32 */
      championPoints?: number
      /** Format: int64 */
      lastPlayTime?: number
      /** Format: int64 */
      playerId?: number
    }
    'LolContentTargetingContentTargetingFilterResponse': {
      filters?: string[]
    }
    'LolContentTargetingContentTargetingLocaleResponse': {
      locale?: string
    }
    'LolContentTargetingGameflowGameData': {
      /** Format: int64 */
      gameId?: number
      queue?: LcuComponents['schemas']['LolContentTargetingQueue']
    }
    /** @enum {string} */
    'LolContentTargetingGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolContentTargetingGameflowSession': {
      gameData?: LcuComponents['schemas']['LolContentTargetingGameflowGameData']
      phase?: LcuComponents['schemas']['LolContentTargetingGameflowPhase']
    }
    'LolContentTargetingGeoInfo': {
      city?: string
      country?: string
      region?: string
    }
    'LolContentTargetingGeoInfoResponse': {
      errorMessage?: string
      geoInfo?: LcuComponents['schemas']['LolContentTargetingGeoInfo']
      isInitialized?: boolean
      isLatest?: boolean
      success?: boolean
    }
    'LolContentTargetingLoginSession': {
      idToken?: string
      puuid?: string
      state?: LcuComponents['schemas']['LolContentTargetingLoginSessionState']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolContentTargetingLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolContentTargetingMission': {
      /** Format: int64 */
      completedDate?: number
      id?: string
      internalName?: string
      status?: string
    }
    'LolContentTargetingPlatformConfig': {
      ABTestFilterEnabled?: boolean
      /** Format: int64 */
      ABTestFilterGroups?: number
      /** Format: int64 */
      ABTestFilterSalt?: number
      /** Format: int32 */
      AsynchronousEventHandlerSetupDelayInSeconds?: number
      Enabled?: boolean
      EntitlementsFilterEnabled?: boolean
      EntitlementsPrefix?: string
      LevelFilterEnabled?: boolean
      LocationFiltersEnabled?: boolean
      MainFilterEnabled?: boolean
      Mapping?: string
      /** Format: int32 */
      MasteryFilterChampionLimit?: number
      /** Format: int32 */
      MasteryFilterDaysSinceLastPlayed?: number
      MasteryFilterEnabled?: boolean
      /** Format: int32 */
      MasteryFilterLevelThreshold?: number
      MissionsFilterEnabled?: boolean
      RankedFilterEnabled?: boolean
      RankFilterEnabled?: boolean
      SummonerIconFilterEnabled?: boolean
      TargetingAttributeStorageBaseUri?: string
      TargetingAttributeStorageEnabled?: boolean
      /** Format: int32 */
      TasIngestionDelayInSeconds?: number
    }
    'LolContentTargetingQueue': {
      category?: LcuComponents['schemas']['LolContentTargetingQueueGameCategory']
      gameMode?: string
      /** Format: int32 */
      id?: number
      /** Format: int32 */
      mapId?: number
    }
    /** @enum {string} */
    'LolContentTargetingQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    /** @enum {string} */
    'LolContentTargetingRankedDivision': 'NA' | 'I' | 'II' | 'III' | 'IV' | 'V'
    /** @enum {string} */
    'LolContentTargetingRankedQueue':
      | 'NONE'
      | 'RANKED_SOLO_5x5'
      | 'RANKED_FLEX_SR'
      | 'RANKED_FLEX_TT'
      | 'RANKED_TFT'
    'LolContentTargetingRankedQueueStats': {
      division?: LcuComponents['schemas']['LolContentTargetingRankedDivision']
      isProvisional?: boolean
      queueType?: LcuComponents['schemas']['LolContentTargetingRankedQueue']
      tier?: LcuComponents['schemas']['LolContentTargetingRankedTier']
    }
    'LolContentTargetingRankedStats': {
      highestRankedEntry?: LcuComponents['schemas']['LolContentTargetingRankedQueueStats']
      queues?: LcuComponents['schemas']['LolContentTargetingRankedQueueStats'][]
    }
    /** @enum {string} */
    'LolContentTargetingRankedTier':
      | 'NONE'
      | 'IRON'
      | 'BRONZE'
      | 'SILVER'
      | 'GOLD'
      | 'PLATINUM'
      | 'DIAMOND'
      | 'MASTER'
      | 'GRANDMASTER'
      | 'CHALLENGER'
    'LolContentTargetingRegionLocale': {
      locale?: string
    }
    'LolContentTargetingSettingsResource': {
      data?: {
        [key: string]: unknown | undefined
      }
    }
    'LolContentTargetingSummoner': {
      /** Format: int32 */
      profileIconId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolContentTargetingTargetingAttributes': {
      result?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolContentTargetingToken': {
      entitlements?: string[]
    }
    'LolCosmeticsAccountSettingsCategoryDataResource': {
      typeToLastOpenedDate?: {
        [key: string]: number | undefined
      }
    }
    'LolCosmeticsCapOffer': {
      active?: boolean
      createdDate?: string
      id?: string
      label?: string
      merchantId?: string
      payload?: LcuComponents['schemas']['LolCosmeticsCapOfferPayloadEntry'][]
      productId?: string
      startDate?: string
      typeId?: string
    }
    'LolCosmeticsCapOfferPayloadEntry': {
      fulfillmentTypeId?: string
      inventoryTypeUUID?: string
      itemInstanceId?: string
      itemPriceMap?: {
        [key: string]: number | undefined
      }
    }
    'LolCosmeticsCompanionsGroupedViewModel': {
      /** Format: int32 */
      defaultItemId?: number
      groups?: LcuComponents['schemas']['LolCosmeticsCompanionsGroupViewModel'][]
      selectedLoadoutItem?: LcuComponents['schemas']['LolCosmeticsCosmeticsCompanionViewModel']
    }
    'LolCosmeticsCompanionsGroupViewModel': {
      /** Format: int32 */
      groupId?: number
      groupName?: string
      items?: LcuComponents['schemas']['LolCosmeticsCosmeticsCompanionViewModel'][]
      /** Format: int32 */
      numAvailable?: number
      /** Format: int32 */
      numOwned?: number
    }
    'LolCosmeticsCosmeticsCompanion': {
      color?: string
      contentId?: string
      description?: string
      f2p?: boolean
      /** Format: int32 */
      groupId?: number
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      level?: number
      loadoutsIcon?: string
      loyalty?: boolean
      name?: string
      owned?: boolean
      purchaseDate?: string
      /** Format: int32 */
      rarityValue?: number
      selected?: boolean
      species?: string
      upgrades?: string[]
    }
    'LolCosmeticsCosmeticsCompanionViewModel': {
      color?: string
      contentId?: string
      description?: string
      f2p?: boolean
      /** Format: int32 */
      groupId?: number
      isRecentItem?: boolean
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      level?: number
      loadoutsIcon?: string
      loyalty?: boolean
      name?: string
      offerData?: LcuComponents['schemas']['LolCosmeticsCapOffer']
      owned?: boolean
      purchaseDate?: string
      /** Format: int32 */
      rarityValue?: number
      selected?: boolean
      species?: string
      starShardsPrice?: LcuComponents['schemas']['LolCosmeticsCosmeticsOfferPrice']
      upgrades?: LcuComponents['schemas']['LolCosmeticsCosmeticsCompanionViewModel'][]
    }
    'LolCosmeticsCosmeticSettingsResource': {
      data?: LcuComponents['schemas']['LolCosmeticsAccountSettingsCategoryDataResource']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolCosmeticsCosmeticsOfferPrice': {
      offerId?: string
      /** Format: int32 */
      price?: number
    }
    'LolCosmeticsCosmeticsTFTDamageSkin': {
      contentId?: string
      description?: string
      f2p?: boolean
      /** Format: int32 */
      groupId?: number
      groupName?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      level?: number
      loadoutsIcon?: string
      loyalty?: boolean
      name?: string
      owned?: boolean
      purchaseDate?: string
      /** Format: int32 */
      rarityValue?: number
      selected?: boolean
      upgrades?: string[]
    }
    'LolCosmeticsCosmeticsTFTDamageSkinViewModel': {
      contentId?: string
      description?: string
      f2p?: boolean
      /** Format: int32 */
      groupId?: number
      groupName?: string
      isRecentItem?: boolean
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      level?: number
      loadoutsIcon?: string
      loyalty?: boolean
      name?: string
      owned?: boolean
      purchaseDate?: string
      /** Format: int32 */
      rarityValue?: number
      selected?: boolean
      upgrades?: LcuComponents['schemas']['LolCosmeticsCosmeticsTFTDamageSkinViewModel'][]
    }
    'LolCosmeticsCosmeticsTFTMapSkin': {
      contentId?: string
      description?: string
      f2p?: boolean
      /** Format: int32 */
      groupId?: number
      groupName?: string
      /** Format: int32 */
      itemId?: number
      loadoutsIcon?: string
      loyalty?: boolean
      name?: string
      owned?: boolean
      purchaseDate?: string
      /** Format: int32 */
      rarityValue?: number
      selected?: boolean
    }
    'LolCosmeticsCosmeticsTFTMapSkinViewModel': {
      contentId?: string
      description?: string
      f2p?: boolean
      /** Format: int32 */
      groupId?: number
      groupName?: string
      isRecentItem?: boolean
      /** Format: int32 */
      itemId?: number
      loadoutsIcon?: string
      loyalty?: boolean
      name?: string
      owned?: boolean
      purchaseDate?: string
      /** Format: int32 */
      rarityValue?: number
      selected?: boolean
    }
    'LolCosmeticsGameDataCompanion': {
      colorName?: string
      contentId?: string
      description?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      level?: number
      loadoutsIcon?: string
      name?: string
      /** Format: int32 */
      rarityValue?: number
      /** Format: int32 */
      speciesId?: number
      speciesName?: string
      TFTOnly?: boolean
      upgrades?: string[]
    }
    'LolCosmeticsGameDataTFTDamageSkin': {
      contentId?: string
      description?: string
      /** Format: int32 */
      groupId?: number
      groupName?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      level?: number
      loadoutsIcon?: string
      name?: string
      /** Format: int32 */
      rarityValue?: number
    }
    'LolCosmeticsGameDataTFTMapSkin': {
      contentId?: string
      description?: string
      /** Format: int32 */
      groupId?: number
      groupName?: string
      /** Format: int32 */
      itemId?: number
      loadoutsIcon?: string
      name?: string
      /** Format: int32 */
      rarityValue?: number
    }
    'LolCosmeticsLoadout': {
      id?: string
      /** Format: int32 */
      itemId?: number
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolCosmeticsLoadoutItem'] | undefined
      }
      name?: string
      scope?: string
    }
    'LolCosmeticsLoadoutItem': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolCosmeticsLoadoutUpdateDto': {
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolCosmeticsLoadoutItem'] | undefined
      }
    }
    'LolCosmeticsTFTDamageSkinGroupedViewModel': {
      /** Format: int32 */
      defaultItemId?: number
      groups?: LcuComponents['schemas']['LolCosmeticsTFTDamageSkinGroupViewModel'][]
      selectedLoadoutItem?: LcuComponents['schemas']['LolCosmeticsCosmeticsTFTDamageSkinViewModel']
    }
    'LolCosmeticsTFTDamageSkinGroupViewModel': {
      /** Format: int32 */
      groupId?: number
      groupName?: string
      items?: LcuComponents['schemas']['LolCosmeticsCosmeticsTFTDamageSkinViewModel'][]
      /** Format: int32 */
      numAvailable?: number
      /** Format: int32 */
      numOwned?: number
    }
    'LolCosmeticsTFTMapSkinGroupedViewModel': {
      /** Format: int32 */
      defaultItemId?: number
      groups?: LcuComponents['schemas']['LolCosmeticsTFTMapSkinGroupViewModel'][]
      selectedLoadoutItem?: LcuComponents['schemas']['LolCosmeticsCosmeticsTFTMapSkinViewModel']
    }
    'LolCosmeticsTFTMapSkinGroupViewModel': {
      /** Format: int32 */
      groupId?: number
      groupName?: string
      items?: LcuComponents['schemas']['LolCosmeticsCosmeticsTFTMapSkinViewModel'][]
      /** Format: int32 */
      numAvailable?: number
      /** Format: int32 */
      numOwned?: number
    }
    'LolCosmeticsTFTSettingsDataResource': {
      iconOverride?: string
    }
    'LolCosmeticsTFTSettingsResource': {
      data?: LcuComponents['schemas']['LolCosmeticsTFTSettingsDataResource']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolCosmeticsUserResource': {
      lol?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      summonerId?: number
    }
    'LolDiscordRpGameDataChampionSummary': {
      alias?: string
      /** Format: int32 */
      id?: number
      name?: string
    }
    'LolDiscordRpPartyPresenceData': {
      /** Format: int32 */
      maxPlayers?: number
      partyId?: string
      /** Format: int32 */
      queueId?: number
      summoners?: number[]
    }
    'LolEmailVerificationAccessToken': {
      /** Format: int64 */
      expiry?: number
      token?: string
    }
    'LolEmailVerificationEmailUpdate': {
      email?: string
      password?: string
    }
    'LolEmailVerificationEmailVerificationSession': {
      email?: string
      emailVerified?: boolean
      fatalError?: boolean
    }
    'LolEmailVerificationRegionLocale': {
      locale?: string
      region?: string
      webLanguage?: string
      webRegion?: string
    }
    'LolEmailVerificationRemoteEmailVerificationSession': {
      email?: string
      emailVerified?: boolean
    }
    'LolEmailVerificationValidationStatus': {
      emailStatus?: string
    }
    'LolEndOfGameChampionMasteryGrade': {
      /** Format: int32 */
      championId?: number
      grade?: string
      /** Format: int64 */
      playerId?: number
    }
    'LolEndOfGameChampionMasteryMini': {
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      championLevel?: number
      /** Format: int64 */
      playerId?: number
    }
    'LolEndOfGameChampionMasteryUpdate': {
      /** Format: int64 */
      bonusPointsGained?: number
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      gameId?: number
      grade?: string
      hasLeveledUp?: boolean
      id?: string
      /** Format: int64 */
      level?: number
      levelUpList?: LcuComponents['schemas']['LolEndOfGameChampionMasteryMini'][]
      memberGrades?: LcuComponents['schemas']['LolEndOfGameChampionMasteryGrade'][]
      /** Format: int64 */
      playerId?: number
      /** Format: int64 */
      pointsBeforeGame?: number
      /** Format: int64 */
      pointsGained?: number
      /** Format: int64 */
      pointsGainedIndividualContribution?: number
      /** Format: int64 */
      pointsSinceLastLevelBeforeGame?: number
      /** Format: int64 */
      pointsUntilNextLevelAfterGame?: number
      /** Format: int64 */
      pointsUntilNextLevelBeforeGame?: number
      /** Format: int64 */
      score?: number
    }
    'LolEndOfGameEndOfGamePlayer': {
      botPlayer?: boolean
      /** Format: int32 */
      championId?: number
      detectedTeamPosition?: string
      /** Format: int32 */
      elo?: number
      /** Format: int32 */
      eloChange?: number
      /** Format: int64 */
      gameId?: number
      isReportingDisabled?: boolean
      items?: number[]
      leaver?: boolean
      /** Format: int32 */
      leaves?: number
      /** Format: int32 */
      level?: number
      /** Format: int32 */
      losses?: number
      /** Format: int32 */
      profileIconId?: number
      selectedPosition?: string
      /** Format: int32 */
      skinIndex?: number
      skinName?: string
      /** Format: int32 */
      spell1Id?: number
      /** Format: int32 */
      spell2Id?: number
      stats?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      teamId?: number
      /** Format: int64 */
      userId?: number
      /** Format: int32 */
      wins?: number
    }
    'LolEndOfGameEndOfGamePlayerComplaintV2': {
      comment?: string
      /** Format: int64 */
      gameId?: number
      offenses?: string
      /** Format: int64 */
      reportedSummonerId?: number
    }
    'LolEndOfGameEndOfGamePlayerReport': {
      comment?: string
      /** Format: int64 */
      gameId?: number
      offense?: string
      reportedPuuid?: string
    }
    'LolEndOfGameEndOfGamePoints': {
      /** Format: int32 */
      pointChangeFromChampionsOwned?: number
      /** Format: int32 */
      pointChangeFromGameplay?: number
      /** Format: int32 */
      pointsUntilNextReroll?: number
      /** Format: int32 */
      pointsUsed?: number
      /** Format: int32 */
      previousPoints?: number
      /** Format: int32 */
      rerollCount?: number
      /** Format: int32 */
      totalPoints?: number
    }
    'LolEndOfGameEndOfGameStats': {
      /** Format: int64 */
      accountId?: number
      /** Format: int32 */
      basePoints?: number
      /** Format: int32 */
      battleBoostIpEarned?: number
      /** Format: int32 */
      boostIpEarned?: number
      /** Format: int32 */
      boostXpEarned?: number
      causedEarlySurrender?: boolean
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      completionBonusPoints?: number
      /** Format: int32 */
      coOpVsAiMinutesLeftToday?: number
      /** Format: int32 */
      coOpVsAiMsecsUntilReset?: number
      /** Format: int64 */
      currentLevel?: number
      /** Format: int32 */
      customMinutesLeftToday?: number
      /** Format: int32 */
      customMsecsUntilReset?: number
      difficulty?: string
      earlySurrenderAccomplice?: boolean
      /** Format: int32 */
      elo?: number
      /** Format: int32 */
      eloChange?: number
      /** Format: int32 */
      experienceEarned?: number
      /** Format: int32 */
      experienceTotal?: number
      /** Format: int32 */
      firstWinBonus?: number
      gameEndedInEarlySurrender?: boolean
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      gameLength?: number
      gameMode?: string
      gameMutators?: string[]
      gameType?: string
      /** Format: int32 */
      globalBoostXpEarned?: number
      imbalancedTeamsNoPoints?: boolean
      invalid?: boolean
      /** Format: int32 */
      ipEarned?: number
      /** Format: int32 */
      ipTotal?: number
      leveledUp?: boolean
      /** Format: int32 */
      loyaltyBoostIpEarned?: number
      /** Format: int32 */
      loyaltyBoostXpEarned?: number
      /** Format: int32 */
      missionsXpEarned?: number
      myTeamStatus?: string
      newSpells?: number[]
      /** Format: int64 */
      nextLevelXp?: number
      /** Format: int32 */
      odinBonusIp?: number
      /** Format: int32 */
      partyRewardsBonusIpEarned?: number
      pointsPenalties?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      preLevelUpExperienceTotal?: number
      /** Format: int64 */
      preLevelUpNextLevelXp?: number
      /** Format: int64 */
      previousLevel?: number
      /** Format: int64 */
      previousXpTotal?: number
      /** Format: int32 */
      queueBonusEarned?: number
      queueType?: string
      ranked?: boolean
      /** Format: int64 */
      reportGameId?: number
      rerollData?: LcuComponents['schemas']['LolEndOfGameEndOfGamePoints']
      roomName?: string
      roomPassword?: string
      /** Format: int32 */
      rpEarned?: number
      sendStatsToTournamentProvider?: boolean
      /** Format: int32 */
      skinId?: number
      /** Format: int32 */
      skinIndex?: number
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      talentPointsGained?: number
      teamBoost?: LcuComponents['schemas']['LolEndOfGameEndOfGameTeamBoost']
      teamEarlySurrendered?: boolean
      teams?: LcuComponents['schemas']['LolEndOfGameEndOfGameTeam'][]
      /** Format: int32 */
      timeUntilNextFirstWinBonus?: number
      /** Format: int64 */
      userId?: number
    }
    'LolEndOfGameEndOfGameTeam': {
      championBans?: number[]
      fullId?: string
      isBottomTeam?: boolean
      isPlayerTeam?: boolean
      isWinningTeam?: boolean
      memberStatusString?: string
      name?: string
      players?: LcuComponents['schemas']['LolEndOfGameEndOfGamePlayer'][]
      stats?: {
        [key: string]: unknown | undefined
      }
      tag?: string
      /** Format: int32 */
      teamId?: number
    }
    'LolEndOfGameEndOfGameTeamBoost': {
      availableSkins?: number[]
      /** Format: int64 */
      ipReward?: number
      /** Format: int64 */
      ipRewardForPurchaser?: number
      /** Format: int64 */
      price?: number
      skinUnlockMode?: string
      summonerName?: string
      unlocked?: boolean
    }
    'LolEndOfGameGameClientEndOfGame': {
      gameClientEOG?: LcuComponents['schemas']['LolEndOfGameGameClientEndOfGameStats']
    }
    'LolEndOfGameGameClientEndOfGameStats': {
      /** Format: int64 */
      gameId?: number
      gameMode?: string
      isRanked?: boolean
      /** Format: int32 */
      queueId?: number
      queueType?: string
      statsBlock?: {
        [key: string]: unknown | undefined
      }
    }
    'LolEndOfGameGameDataChampionSummary': {
      alias?: string
      /** Format: int32 */
      id?: number
      name?: string
      squarePortraitPath?: string
    }
    'LolEndOfGameGameDataCompanion': {
      colorName?: string
      contentId?: string
      loadoutsIcon?: string
      speciesName?: string
    }
    'LolEndOfGameGameDataTftChampion': {
      character_id?: string
      display_name?: string
      path?: string
      /** Format: int32 */
      rarity?: number
      squareIconPath?: string
      traits?: LcuComponents['schemas']['LolEndOfGameGameDataTftTrait'][]
    }
    'LolEndOfGameGameDataTftItem': {
      /** Format: int32 */
      id?: number
      loadoutsIcon?: string
      name?: string
    }
    'LolEndOfGameGameDataTftTrait': {
      id?: string
      name?: string
    }
    'LolEndOfGameGameflowAvailability': {
      state?: string
    }
    'LolEndOfGameGameflowClient': {
      observerServerIp?: string
      observerServerPort?: number
      running?: boolean
    }
    'LolEndOfGameGameflowGameData': {
      /** Format: int64 */
      gameId?: number
      queue?: LcuComponents['schemas']['LolEndOfGameQueue']
    }
    /** @enum {string} */
    'LolEndOfGameGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolEndOfGameGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolEndOfGameGameflowClient']
      gameData?: LcuComponents['schemas']['LolEndOfGameGameflowGameData']
      phase?: LcuComponents['schemas']['LolEndOfGameGameflowPhase']
    }
    'LolEndOfGameLobbyInvitation': {
      state?: string
    }
    'LolEndOfGameLoginDataPacket': {
      platformId?: string
      simpleMessages?: LcuComponents['schemas']['LolEndOfGameSimpleMessage'][]
    }
    'LolEndOfGameLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolEndOfGameLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolEndOfGameLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolEndOfGameQueue': {
      /** Format: int32 */
      id?: number
      isRanked?: boolean
      type?: string
    }
    /** @enum {string} */
    'LolEndOfGameReportRecipientMode': 'Legacy' | 'Game-Agnostic' | 'Combined'
    'LolEndOfGameRerollDataBagForClientV1': {
      /** Format: int32 */
      maximumRerolls?: number
      /** Format: int32 */
      pointCostOfReroll?: number
      /** Format: int32 */
      pointsGainedLastGame?: number
      /** Format: int32 */
      pointsUntilNextReroll?: number
      /** Format: int32 */
      rerollCount?: number
      /** Format: int32 */
      totalPoints?: number
    }
    'LolEndOfGameSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LolEndOfGameSummoner': {
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      /** Format: int64 */
      xpSinceLastLevel?: number
      /** Format: int64 */
      xpUntilNextLevel?: number
    }
    'LolEndOfGameTFTEndOfGameCompanionViewModel': {
      colorName?: string
      icon?: string
      speciesName?: string
    }
    'LolEndOfGameTFTEndOfGameItemViewModel': {
      icon?: string
      /** Format: int32 */
      id?: number
      name?: string
    }
    'LolEndOfGameTFTEndOfGamePieceViewModel': {
      icon?: string
      items?: LcuComponents['schemas']['LolEndOfGameTFTEndOfGameItemViewModel'][]
      /** Format: int32 */
      level?: number
      name?: string
      /** Format: int32 */
      price?: number
      traits?: LcuComponents['schemas']['LolEndOfGameTFTEndOfGameTraitViewModel'][]
    }
    'LolEndOfGameTFTEndOfGamePlayerViewModel': {
      boardPieces?: LcuComponents['schemas']['LolEndOfGameTFTEndOfGamePieceViewModel'][]
      companion?: LcuComponents['schemas']['LolEndOfGameTFTEndOfGameCompanionViewModel']
      ffaStanding?: number
      health?: number
      /** Format: int32 */
      iconId?: number
      isLocalPlayer?: boolean
      partnerGroupId?: number
      puuid?: string
      rank?: number
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolEndOfGameTFTEndOfGameTraitViewModel': {
      id?: string
      name?: string
    }
    'LolEndOfGameTFTEndOfGameViewModel': {
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      gameLength?: number
      isRanked?: boolean
      localPlayer?: LcuComponents['schemas']['LolEndOfGameTFTEndOfGamePlayerViewModel']
      players?: LcuComponents['schemas']['LolEndOfGameTFTEndOfGamePlayerViewModel'][]
      /** Format: int32 */
      queueId?: number
      queueType?: string
    }
    'LolEsportStreamNotificationsEsportsAPI_highlanderTournaments': {
      brackets?: {
        [key: string]:
          | LcuComponents['schemas']['LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets']
          | undefined
      }
      description?: string
      id?: string
      rosters?: {
        [key: string]:
          | LcuComponents['schemas']['LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters']
          | undefined
      }
      title?: string
    }
    'LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets': {
      id?: string
      matches?: {
        [key: string]:
          | LcuComponents['schemas']['LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches']
          | undefined
      }
    }
    'LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches': {
      id?: string
      input?: LcuComponents['schemas']['LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster'][]
    }
    'LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster': {
      roster?: string
    }
    'LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters': {
      id?: string
      name?: string
      /** Format: int64 */
      team?: number
    }
    'LolEsportStreamNotificationsESportsAPI_streamgroups': {
      content?: string
      /** Format: int64 */
      id?: number
      live?: boolean
      slug?: string
      title?: string
    }
    'LolEsportStreamNotificationsESportsAPI_streamgroups_root': {
      highlanderTournaments?: LcuComponents['schemas']['LolEsportStreamNotificationsEsportsAPI_highlanderTournaments'][]
      streamgroups?: LcuComponents['schemas']['LolEsportStreamNotificationsESportsAPI_streamgroups'][]
      teams?: LcuComponents['schemas']['LolEsportStreamNotificationsEsportsAPI_teams'][]
    }
    'LolEsportStreamNotificationsEsportsAPI_teams': {
      acronym?: string
      guid?: string
      /** Format: int64 */
      id?: number
      logoUrl?: string
      name?: string
      slug?: string
    }
    'LolEsportStreamNotificationsESportsLiveStreams': {
      liveStreams?: LcuComponents['schemas']['LolEsportStreamNotificationsESportsStreams'][]
    }
    'LolEsportStreamNotificationsESportsStreams': {
      teamAAcronym?: string
      teamAGuid?: string
      /** Format: int64 */
      teamAId?: number
      teamALogoUrl?: string
      teamAName?: string
      teamBAcronym?: string
      teamBGuid?: string
      /** Format: int64 */
      teamBId?: number
      teamBLogoUrl?: string
      teamBName?: string
      title?: string
      tournamentDescription?: string
    }
    'LolEsportStreamNotificationsESportStreamNotificationsConfig': {
      /** Format: int64 */
      beappFailureLongPollMinutes?: number
      notificationsAssetMagickURL?: string
      notificationsEnabled?: boolean
      /** Format: int64 */
      notificationsLongPollMinutes?: number
      notificationsServiceEndpoint?: string
      notificationsServiceEndpointV2?: string
      /** Format: int64 */
      notificationsShortPollMinutes?: number
      notificationsStreamGroupSlug?: string
      notificationsStreamURL?: string
      useServiceEndpointV2?: boolean
    }
    /** @enum {string} */
    'LolEsportStreamNotificationsGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolEsportStreamNotificationsGameflowSession': {
      phase?: LcuComponents['schemas']['LolEsportStreamNotificationsGameflowPhase']
    }
    'LolEsportStreamNotificationsLiveMatch': {
      id?: string
      streamGroup?: string
      teams?: LcuComponents['schemas']['LolEsportStreamNotificationsLiveMatchTeam'][]
      title?: string
      tournamentDescription?: string
    }
    'LolEsportStreamNotificationsLiveMatchTeam': {
      acronym?: string
      guid?: string
      logoUrl?: string
      name?: string
    }
    'LolEsportStreamNotificationsPlayerNotificationResource': {
      backgroundUrl?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolFeaturedModesAccountIdAndSummonerId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolFeaturedModesCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
    }
    'LolFeaturedModesCollectionsSummonerIcon': {
      /** Format: int32 */
      iconId?: number
      ownership?: LcuComponents['schemas']['LolFeaturedModesCollectionsOwnership']
    }
    'LolFeaturedModesEligibility': {
      eligible?: boolean
      /** Format: int32 */
      queueId?: number
      restrictions?: LcuComponents['schemas']['LolFeaturedModesEligibilityRestriction'][]
    }
    'LolFeaturedModesEligibilityRestriction': {
      /** Format: int64 */
      expiredTimestamp?: number
      restrictionArgs?: {
        [key: string]: string | undefined
      }
      restrictionCode?: LcuComponents['schemas']['LolFeaturedModesEligibilityRestrictionCode']
      summonerIds?: number[]
    }
    /** @enum {string} */
    'LolFeaturedModesEligibilityRestrictionCode':
      | 'QueueDisabled'
      | 'QueueUnsupported'
      | 'PlayerLevelRestriction'
      | 'PlayerTimedRestriction'
      | 'PlayerBannedRestriction'
      | 'PlayerAvailableChampionRestriction'
      | 'TeamDivisionRestriction'
      | 'TeamMaxSizeRestriction'
      | 'TeamMinSizeRestriction'
      | 'PlayerBingeRestriction'
      | 'PlayerDodgeRestriction'
      | 'PlayerInGameRestriction'
      | 'PlayerLeaverBustedRestriction'
      | 'PlayerLeaverQueueLockoutRestriction'
      | 'PlayerLeaverTaintedWarningRestriction'
      | 'PlayerMaxLevelRestriction'
      | 'PlayerMinLevelRestriction'
      | 'PlayerMinorRestriction'
      | 'PlayerRankedSuspensionRestriction'
      | 'TeamHighMMRMaxSizeRestriction'
      | 'TeamSizeRestriction'
      | 'PrerequisiteQueuesNotPlayedRestriction'
      | 'GameVersionMismatch'
      | 'GameVersionMissing'
      | 'GameVersionNotSupported'
      | 'QueueEntryNotEntitledRestriction'
      | 'UnknownRestriction'
    'LolFeaturedModesFeaturedModesConfig': {
      /** Format: int32 */
      MaxNotificationSaveDelayMinutes?: number
      NotificationsEnabled?: boolean
      /** Format: int32 */
      QueueToggleNotificationMinutesThreshold?: number
    }
    'LolFeaturedModesGameflowAvailability': {
      isAvailable?: boolean
      state?: LcuComponents['schemas']['LolFeaturedModesGameflowAvailabilityState']
    }
    /** @enum {string} */
    'LolFeaturedModesGameflowAvailabilityState':
      | 'Available'
      | 'Initializing'
      | 'Patching'
      | 'PlayerBanned'
      | 'InGameFlow'
      | 'Configuration'
    /** @enum {string} */
    'LolFeaturedModesGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolFeaturedModesGameflowSession': {
      phase?: LcuComponents['schemas']['LolFeaturedModesGameflowPhase']
    }
    'LolFeaturedModesLoginSession': {
      state?: LcuComponents['schemas']['LolFeaturedModesLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolFeaturedModesLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolFeaturedModesMaps': {
      assets?: {
        [key: string]: string | undefined
      }
      gameModeName?: string
      isRGM?: boolean
    }
    'LolFeaturedModesPlayerNotificationResource': {
      backgroundUrl?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolFeaturedModesQueue': {
      category?: LcuComponents['schemas']['LolFeaturedModesQueueGameCategory']
      gameMode?: string
      /** Format: int32 */
      id?: number
      /** Format: int64 */
      lastToggledOffTime?: number
      /** Format: int64 */
      lastToggledOnTime?: number
      /** Format: int32 */
      mapId?: number
      name?: string
      queueAvailability?: LcuComponents['schemas']['LolFeaturedModesQueueAvailability']
    }
    /** @enum {string} */
    'LolFeaturedModesQueueAvailability': 'Available' | 'PlatformDisabled' | 'DoesntMeetRequirements'
    /** @enum {string} */
    'LolFeaturedModesQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    'LolGameClientChatGameClientChatMessageResource': {
      body?: string
      fromSummonerName?: string
    }
    'LolGameClientChatMutedPlayerInfo': {
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolGameflowCrashReportingSettings': {
      enabled?: boolean
      type?: string
    }
    'LolGameflowGameflowAvailability': {
      isAvailable?: boolean
      state?: LcuComponents['schemas']['LolGameflowGameflowAvailabilityState']
    }
    /** @enum {string} */
    'LolGameflowGameflowAvailabilityState':
      | 'Available'
      | 'Initializing'
      | 'Patching'
      | 'PlayerBanned'
      | 'InGameFlow'
      | 'Configuration'
      | 'EligibilityInfoMissing'
    'LolGameflowGameflowGameClient': {
      observerServerIp?: string
      observerServerPort?: number
      running?: boolean
      serverIp?: string
      serverPort?: number
      visible?: boolean
    }
    'LolGameflowGameflowGameData': {
      /** Format: int64 */
      gameId?: number
      gameName?: string
      isCustomGame?: boolean
      password?: string
      playerChampionSelections?: {
        [key: string]: unknown | undefined
      }[]
      queue?: LcuComponents['schemas']['LolGameflowQueue']
      spectatorsAllowed?: boolean
      teamOne?: {
        [key: string]: unknown | undefined
      }[]
      teamTwo?: {
        [key: string]: unknown | undefined
      }[]
    }
    'LolGameflowGameflowGameDodge': {
      dodgeIds?: number[]
      phase?: LcuComponents['schemas']['LolGameflowGameflowPhase']
      state?: LcuComponents['schemas']['LolGameflowGameflowGameDodgeState']
    }
    /** @enum {string} */
    'LolGameflowGameflowGameDodgeState':
      | 'Invalid'
      | 'PartyDodged'
      | 'StrangerDodged'
      | 'TournamentDodged'
    'LolGameflowGameflowGameMap': {
      assets?: {
        [key: string]: unknown | undefined
      }
      categorizedContentBundles?: {
        [key: string]: unknown | undefined
      }
      description?: string
      gameMode?: string
      gameModeName?: string
      gameModeShortName?: string
      gameMutator?: string
      /** Format: int64 */
      id?: number
      isRGM?: boolean
      mapStringId?: string
      name?: string
      perPositionDisallowedSummonerSpells?: {
        [key: string]: LcuComponents['schemas']['LolGameflowGameModeSpellList'] | undefined
      }
      perPositionRequiredSummonerSpells?: {
        [key: string]: LcuComponents['schemas']['LolGameflowGameModeSpellList'] | undefined
      }
      platformId?: string
      platformName?: string
      properties?: {
        [key: string]: unknown | undefined
      }
    }
    /** @enum {string} */
    'LolGameflowGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolGameflowGameflowProcessInfo': {
      /** Format: int32 */
      pid?: number
      rawArgs?: string[]
    }
    'LolGameflowGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolGameflowGameflowGameClient']
      gameData?: LcuComponents['schemas']['LolGameflowGameflowGameData']
      gameDodge?: LcuComponents['schemas']['LolGameflowGameflowGameDodge']
      map?: LcuComponents['schemas']['LolGameflowGameflowGameMap']
      phase?: LcuComponents['schemas']['LolGameflowGameflowPhase']
    }
    /** @enum {string} */
    'LolGameflowGameflowWatchPhase':
      | 'None'
      | 'WatchStarted'
      | 'WatchInProgress'
      | 'WatchFailedToLaunch'
    'LolGameflowGameModeSpellList': {
      spells?: number[]
    }
    'LolGameflowInstallPaths': {
      gameExecutablePath?: string
      gameInstallRoot?: string
    }
    'LolGameflowLobbyStatus': {
      allowedPlayAgain?: boolean
      customSpectatorPolicy?: LcuComponents['schemas']['LolGameflowQueueCustomGameSpectatorPolicy']
      invitedSummonerIds?: number[]
      isCustom?: boolean
      isLeader?: boolean
      isPracticeTool?: boolean
      isSpectator?: boolean
      lobbyId?: string
      memberSummonerIds?: number[]
      /** Format: int32 */
      queueId?: number
    }
    'LolGameflowLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      state?: LcuComponents['schemas']['LolGameflowLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolGameflowLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolGameflowPatcherProductState': {
      action?: LcuComponents['schemas']['LolGameflowPatcherProductStateAction']
      isCorrupted?: boolean
      isStopped?: boolean
      isUpdateAvailable?: boolean
      isUpToDate?: boolean
    }
    /** @enum {string} */
    'LolGameflowPatcherProductStateAction':
      | 'Idle'
      | 'CheckingForUpdates'
      | 'Patching'
      | 'Repairing'
      | 'Migrating'
    'LolGameflowPlayerStatus': {
      canInviteOthersAtEog?: boolean
      currentLobbyStatus?: LcuComponents['schemas']['LolGameflowLobbyStatus']
      lastQueuedLobbyStatus?: LcuComponents['schemas']['LolGameflowLobbyStatus']
    }
    'LolGameflowQueue': {
      allowablePremadeSizes?: number[]
      areFreeChampionsAllowed?: boolean
      assetMutator?: string
      category?: LcuComponents['schemas']['LolGameflowQueueGameCategory']
      /** Format: int32 */
      championsRequiredToPlay?: number
      description?: string
      detailedDescription?: string
      gameMode?: string
      gameTypeConfig?: LcuComponents['schemas']['LolGameflowQueueGameTypeConfig']
      /** Format: int32 */
      id?: number
      isRanked?: boolean
      isTeamBuilderManaged?: boolean
      isTeamOnly?: boolean
      /** Format: int64 */
      lastToggledOffTime?: number
      /** Format: int64 */
      lastToggledOnTime?: number
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxSummonerLevelForFirstWinOfTheDay?: number
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minLevel?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeam?: number
      queueAvailability?: LcuComponents['schemas']['LolGameflowQueueAvailability']
      queueRewards?: LcuComponents['schemas']['LolGameflowQueueReward']
      removalFromGameAllowed?: boolean
      /** Format: int32 */
      removalFromGameDelayMinutes?: number
      shortName?: string
      showPositionSelector?: boolean
      spectatorEnabled?: boolean
      type?: string
    }
    /** @enum {string} */
    'LolGameflowQueueAvailability': 'Available' | 'PlatformDisabled' | 'DoesntMeetRequirements'
    /** @enum {string} */
    'LolGameflowQueueCustomGameSpectatorPolicy':
      | 'NotAllowed'
      | 'LobbyAllowed'
      | 'FriendsAllowed'
      | 'AllAllowed'
    /** @enum {string} */
    'LolGameflowQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    'LolGameflowQueueGameTypeConfig': {
      advancedLearningQuests?: boolean
      allowTrades?: boolean
      banMode?: string
      /** Format: int32 */
      banTimerDuration?: number
      battleBoost?: boolean
      crossTeamChampionPool?: boolean
      deathMatch?: boolean
      doNotRemove?: boolean
      duplicatePick?: boolean
      exclusivePick?: boolean
      /** Format: int64 */
      id?: number
      learningQuests?: boolean
      /** Format: int32 */
      mainPickTimerDuration?: number
      /** Format: int32 */
      maxAllowableBans?: number
      name?: string
      onboardCoopBeginner?: boolean
      pickMode?: string
      /** Format: int32 */
      postPickTimerDuration?: number
      reroll?: boolean
      teamChampionPool?: boolean
    }
    'LolGameflowQueueReward': {
      isChampionPointsEnabled?: boolean
      isIpEnabled?: boolean
      isXpEnabled?: boolean
      partySizeIpRewards?: number[]
    }
    'LolGameflowRegionLocale': {
      locale?: string
      region?: string
    }
    'LolGameflowRegistrationStatus': {
      complete?: boolean
      errorCodes?: string[]
    }
    'LolGameflowReplaysSettingsData': {
      'highlights-folder-path'?: string
    }
    'LolGameflowReplaysSettingsResource': {
      data?: LcuComponents['schemas']['LolGameflowReplaysSettingsData']
    }
    'LolGameflowSpectateGameInfoResource': {
      allowObserveMode?: string
      dropInSpectateGameId?: string
      gameQueueType?: string
      puuid?: string
    }
    'LolGameQueuesLoginDataPacket': {
      gameTypeConfigs?: LcuComponents['schemas']['LolGameQueuesQueueGameTypeConfig'][]
    }
    'LolGameQueuesLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      state?: LcuComponents['schemas']['LolGameQueuesLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolGameQueuesLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolGameQueuesPlatformConfigEnabledMap': {
      /** Format: int32 */
      gameMapId?: number
      /** Format: int32 */
      minPlayers?: number
    }
    'LolGameQueuesQueue': {
      allowablePremadeSizes?: number[]
      areFreeChampionsAllowed?: boolean
      assetMutator?: string
      category?: LcuComponents['schemas']['LolGameQueuesQueueGameCategory']
      /** Format: int32 */
      championsRequiredToPlay?: number
      description?: string
      detailedDescription?: string
      gameMode?: string
      gameTypeConfig?: LcuComponents['schemas']['LolGameQueuesQueueGameTypeConfig']
      /** Format: int32 */
      id?: number
      isRanked?: boolean
      isTeamBuilderManaged?: boolean
      isTeamOnly?: boolean
      /** Format: int64 */
      lastToggledOffTime?: number
      /** Format: int64 */
      lastToggledOnTime?: number
      /** Format: int32 */
      mapId?: number
      maxDivisionForPremadeSize2?: string
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxSummonerLevelForFirstWinOfTheDay?: number
      maxTierForPremadeSize2?: string
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minLevel?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeam?: number
      queueAvailability?: LcuComponents['schemas']['LolGameQueuesQueueAvailability']
      queueRewards?: LcuComponents['schemas']['LolGameQueuesQueueReward']
      removalFromGameAllowed?: boolean
      /** Format: int32 */
      removalFromGameDelayMinutes?: number
      shortName?: string
      showPositionSelector?: boolean
      spectatorEnabled?: boolean
      type?: string
    }
    /** @enum {string} */
    'LolGameQueuesQueueAvailability': 'Available' | 'PlatformDisabled' | 'DoesntMeetRequirements'
    'LolGameQueuesQueueCustomGame': {
      gameServerRegions?: string[]
      queueAvailability?: LcuComponents['schemas']['LolGameQueuesQueueAvailability']
      spectatorPolicies?: LcuComponents['schemas']['LolGameQueuesQueueCustomGameSpectatorPolicy'][]
      /** Format: int32 */
      spectatorSlotLimit?: number
      subcategories?: LcuComponents['schemas']['LolGameQueuesQueueCustomGameSubcategory'][]
    }
    /** @enum {string} */
    'LolGameQueuesQueueCustomGameSpectatorPolicy':
      | 'NotAllowed'
      | 'LobbyAllowed'
      | 'FriendsAllowed'
      | 'AllAllowed'
    'LolGameQueuesQueueCustomGameSubcategory': {
      customSpectatorPolicies?: LcuComponents['schemas']['LolGameQueuesQueueCustomGameSpectatorPolicy'][]
      gameMode?: string
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxPlayerCount?: number
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minLevel?: number
      mutators?: LcuComponents['schemas']['LolGameQueuesQueueGameTypeConfig'][]
      /** Format: int32 */
      numPlayersPerTeam?: number
      queueAvailability?: LcuComponents['schemas']['LolGameQueuesQueueAvailability']
    }
    /** @enum {string} */
    'LolGameQueuesQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    'LolGameQueuesQueueGameTypeConfig': {
      advancedLearningQuests?: boolean
      allowTrades?: boolean
      banMode?: string
      /** Format: int32 */
      banTimerDuration?: number
      battleBoost?: boolean
      crossTeamChampionPool?: boolean
      deathMatch?: boolean
      doNotRemove?: boolean
      duplicatePick?: boolean
      exclusivePick?: boolean
      gameModeOverride?: string
      /** Format: int64 */
      id?: number
      learningQuests?: boolean
      /** Format: int32 */
      mainPickTimerDuration?: number
      /** Format: int32 */
      maxAllowableBans?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeamOverride?: number
      onboardCoopBeginner?: boolean
      pickMode?: string
      /** Format: int32 */
      postPickTimerDuration?: number
      reroll?: boolean
      teamChampionPool?: boolean
    }
    'LolGameQueuesQueueReward': {
      isChampionPointsEnabled?: boolean
      isIpEnabled?: boolean
      isXpEnabled?: boolean
      partySizeIpRewards?: number[]
    }
    'LolGameQueuesQueueTranslation': {
      description?: string
      detailedDescription?: string
      name?: string
      shortName?: string
    }
    'LolGameSettingsgamesettingsgameclient': {
      running?: boolean
    }
    'LolGameSettingsgamesettingsgameflowsession': {
      gameClient?: LcuComponents['schemas']['LolGameSettingsgamesettingsgameclient']
    }
    'LolGameSettingsLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      state?: LcuComponents['schemas']['LolGameSettingsLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolGameSettingsLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolGeoinfoGeoInfo': {
      city?: string
      country?: string
      region?: string
    }
    'LolGeoinfoGeoInfoConfig': {
      Enabled?: boolean
    }
    'LolGeoinfoGeoInfoResponse': {
      errorMessage?: string
      geoInfo?: LcuComponents['schemas']['LolGeoinfoGeoInfo']
      isInitialized?: boolean
      isLatest?: boolean
      success?: boolean
    }
    'LolGeoinfoLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolGeoinfoLoginSessionState']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolGeoinfoLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolGeoinfoWhereAmIRequest': {
      ipAddress?: string
    }
    'LolGeoinfoWhereAmIResponse': {
      city?: string
      country?: string
      region?: string
    }
    'LolHeartbeatLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolHeartbeatLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolHeartbeatLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolHighlightsHighlight': {
      filepath?: string
      /** Format: int64 */
      fileSizeBytes?: number
      /** Format: int64 */
      id?: number
      mtimeIso8601?: string
      /** Format: int64 */
      mtimeMsUtc?: number
      name?: string
      url?: string
    }
    'LolHighlightsHighlightsConfig': {
      invalidHighlightNameCharacters?: string
      isHighlightsEnabled?: boolean
    }
    'LolHighlightsHighlightsDynamicConfig': {
      Enabled?: boolean
    }
    'LolHighlightsHighlightsSettingsData': {
      'highlights-folder-path'?: string
    }
    'LolHighlightsHighlightsSettingsResource': {
      data?: LcuComponents['schemas']['LolHighlightsHighlightsSettingsData']
    }
    'LolHonorV2AccountIdAndSummonerId': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolHonorV2ApiHonorPlayerServerRequest': {
      /** Format: int64 */
      gameId?: number
      honorCategory?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolHonorV2Ballot': {
      eligiblePlayers?: LcuComponents['schemas']['LolHonorV2EligiblePlayer'][]
      /** Format: int64 */
      gameId?: number
    }
    'LolHonorV2DynamicHonorMessage': {
      messageId?: string
      /** Format: int32 */
      value?: number
    }
    'LolHonorV2EligiblePlayer': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      skinIndex?: number
      skinName?: string
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolHonorV2EndOfGamePlayer': {
      botPlayer?: boolean
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      gameId?: number
      isReportingDisabled?: boolean
      leaver?: boolean
      /** Format: int32 */
      profileIconId?: number
      /** Format: int32 */
      skinIndex?: number
      skinName?: string
      stats?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      teamId?: number
      /** Format: int64 */
      userId?: number
      /** Format: int32 */
      wins?: number
    }
    'LolHonorV2EndOfGameStats': {
      /** Format: int64 */
      accountId?: number
      /** Format: int32 */
      championId?: number
      difficulty?: string
      gameEndedInEarlySurrender?: boolean
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      gameLength?: number
      gameMode?: string
      gameMutators?: string[]
      gameType?: string
      imbalancedTeamsNoPoints?: boolean
      invalid?: boolean
      myTeamStatus?: string
      queueType?: string
      ranked?: boolean
      /** Format: int64 */
      reportGameId?: number
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      teams?: LcuComponents['schemas']['LolHonorV2EndOfGameTeam'][]
    }
    'LolHonorV2EndOfGameTeam': {
      championBans?: number[]
      fullId?: string
      isBottomTeam?: boolean
      isPlayerTeam?: boolean
      isWinningTeam?: boolean
      memberStatusString?: string
      name?: string
      players?: LcuComponents['schemas']['LolHonorV2EndOfGamePlayer'][]
      stats?: {
        [key: string]: unknown | undefined
      }
      tag?: string
      /** Format: int32 */
      teamId?: number
    }
    'LolHonorV2GameflowGameData': {
      /** Format: int64 */
      gameId?: number
      queue?: LcuComponents['schemas']['LolHonorV2Queue']
    }
    /** @enum {string} */
    'LolHonorV2GameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolHonorV2GameflowSession': {
      gameData?: LcuComponents['schemas']['LolHonorV2GameflowGameData']
      phase?: LcuComponents['schemas']['LolHonorV2GameflowPhase']
    }
    'LolHonorV2Honor': {
      honorCategory?: string
      voterRelationship?: string
    }
    'LolHonorV2HonorConfig': {
      DayOneModalEnabled?: boolean
      Enabled?: boolean
      Honor2018Enabled?: boolean
      LedgeEndpointsEnabled?: boolean
      /** Format: int32 */
      SecondsToVote?: number
    }
    'LolHonorV2HonorRecipient': {
      /** Format: int64 */
      gameId?: number
      honors?: LcuComponents['schemas']['LolHonorV2Honor'][]
      /** Format: int64 */
      summonerId?: number
    }
    'LolHonorV2MutualHonor': {
      /** Format: int64 */
      gameId?: number
      summoners?: LcuComponents['schemas']['LolHonorV2MutualHonorPlayer'][]
    }
    'LolHonorV2MutualHonorPlayer': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      skinIndex?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolHonorV2ProfileInfo': {
      /** Format: int32 */
      checkpoint?: number
      /** Format: int32 */
      honorLevel?: number
      rewardsLocked?: boolean
    }
    'LolHonorV2Queue': {
      gameMode?: string
      /** Format: int32 */
      id?: number
      /** Format: int32 */
      mapId?: number
      removalFromGameAllowed?: boolean
      /** Format: int32 */
      removalFromGameDelayMinutes?: number
      type?: string
    }
    'LolHonorV2Reward': {
      /** Format: int32 */
      quantity?: number
      rewardType?: string
    }
    'LolHonorV2SequenceEvent': {
      name?: string
      /** Format: int32 */
      priority?: number
    }
    'LolHonorV2ServiceProxyHonorPlayerServerRequest': {
      /** Format: int64 */
      gameId?: number
      honorType?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolHonorV2ServiceProxyRetrieveProfileResponse': {
      /** Format: int32 */
      checkpoint?: number
      /** Format: int32 */
      honorLevel?: number
      rewardsLocked?: boolean
    }
    'LolHonorV2VendedHonorChange': {
      actionType?: string
      currentState?: LcuComponents['schemas']['LolHonorV2VendedHonorState']
      dynamicHonorMessage?: LcuComponents['schemas']['LolHonorV2DynamicHonorMessage']
      previousState?: LcuComponents['schemas']['LolHonorV2VendedHonorState']
      reward?: LcuComponents['schemas']['LolHonorV2Reward']
    }
    'LolHonorV2VendedHonorState': {
      /** Format: int32 */
      checkpoint?: number
      /** Format: int32 */
      level?: number
      rewardsLocked?: boolean
    }
    'LolHonorV2VendedReward': {
      dynamicHonorMessage?: LcuComponents['schemas']['LolHonorV2DynamicHonorMessage']
      /** Format: int32 */
      quantity?: number
      rewardType?: string
    }
    'LolHonorV2VoteCompletion': {
      fullTeamVote?: boolean
      /** Format: int64 */
      gameId?: number
    }
    'LolHovercardChatSession': {
      sessionState?: string
    }
    'LolHovercardContentCookies': {
      content_id?: string
      content_path?: string
      cookies?: LcuComponents['schemas']['LolHovercardcookie'][]
    }
    'LolHovercardcookie': {
      name?: string
      value?: string
    }
    'LolHovercardFriendResult': {
      /** Format: int64 */
      accountId?: number
      availability?: string
      gameName?: string
      gameTag?: string
      /** Format: int32 */
      icon?: number
      id?: string
      lol?: {
        [key: string]: string | undefined
      }
      name?: string
      note?: string
      patchline?: string
      platformId?: string
      product?: string
      productName?: string
      puuid?: string
      /** Format: int64 */
      score?: number
      statusMessage?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolHovercardHovercardUserInfo': {
      /** Format: int64 */
      accountId?: number
      availability?: string
      gameName?: string
      gameTag?: string
      /** Format: int32 */
      icon?: number
      id?: string
      lol?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      masteryScore?: number
      name?: string
      note?: string
      partySummoners?: string[]
      patchline?: string
      platformId?: string
      product?: string
      productName?: string
      puuid?: string
      remotePlatform?: boolean
      remoteProduct?: boolean
      remoteProductBackdropUrl?: string
      remoteProductIconUrl?: string
      statusMessage?: string
      /** Format: int32 */
      summonerIcon?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolHovercardPartyInfo': {
      summoners?: number[]
    }
    'LolHovercardPatchlineMetadata': {
      content_cookies?: LcuComponents['schemas']['LolHovercardContentCookies'][]
      content_paths?: {
        [key: string]: string | undefined
      }
      id?: string
      product_id?: string
    }
    'LolHovercardProductMetadata': {
      id?: string
      name?: string
      patchlines?: {
        [key: string]: LcuComponents['schemas']['LolHovercardPatchlineMetadata'] | undefined
      }
    }
    'LolHovercardProductMetadataMap': {
      products?: {
        [key: string]: LcuComponents['schemas']['LolHovercardProductMetadata'] | undefined
      }
    }
    'LolHovercardSummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolHovercardSummonerIdAndIcon': {
      /** Format: int32 */
      profileIconId?: number
    }
    'LolHovercardSummonerIdAndName': {
      displayName?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolHovercardTopChampionMastery': {
      /** Format: int64 */
      score?: number
    }
    'LolInventoryAccessTokenResource': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    'LolInventoryCatalogItem': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
    }
    'LolInventoryClientCacheClearMessageDTO': {
      clearAll?: boolean
      inventoryTypes?: string[]
      regions?: string[]
    }
    'LolInventoryCurrencyDTO': {
      /** Format: int32 */
      amount?: number
      subCurrencies?: {
        [key: string]: number | undefined
      }
    }
    'LolInventoryInventoryCacheEntry': {
      /** Format: int64 */
      expirationMS?: number
      /** Format: int64 */
      issuedAtMS?: number
      /** Format: int64 */
      receivedAtMS?: number
      signedInventoryJwt?: string
      valid?: boolean
    }
    'LolInventoryInventoryDTO': {
      /** Format: int64 */
      accountId?: number
      expires?: string
      items?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      itemsJwt?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolInventoryInventoryItem': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolInventoryItemOwnershipType']
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      uuid?: string
    }
    'LolInventoryInventoryItemDTO': {
      entitlementId?: string
      entitlementTypeId?: string
      expirationDate?: string
      f2p?: boolean
      instanceId?: string
      instanceTypeId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      loyalty?: boolean
      lsb?: boolean
      payload?: {
        [key: string]: unknown | undefined
      }
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      rental?: boolean
      usedInGameDate?: string
      /** Format: int64 */
      wins?: number
    }
    'LolInventoryInventoryItemWithPayload': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolInventoryItemOwnershipType']
      payload?: {
        [key: string]: unknown | undefined
      }
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      uuid?: string
    }
    'LolInventoryInventoryNotification': {
      acknowledged?: boolean
      /** Format: int64 */
      id?: number
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      type?: string
    }
    'LolInventoryInventoryResponseDTO': {
      data?: LcuComponents['schemas']['LolInventoryInventoryDTO']
    }
    'LolInventoryItemKey': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    /** @enum {string} */
    'LolInventoryItemOwnershipType': 'OWNED' | 'RENTED' | 'LOYALTY' | 'F2P'
    'LolInventoryLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      puuid?: string
      state?: LcuComponents['schemas']['LolInventoryLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolInventoryLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolInventoryLoyaltyRewards': {
      championIds?: number[]
      /** Format: int32 */
      freeRewardedChampionsCount?: number
      /** Format: int32 */
      freeRewardedSkinsCount?: number
      /** Format: int32 */
      ipBoost?: number
      /** Format: int32 */
      loyaltyTFTCompanionCount?: number
      /** Format: int32 */
      loyaltyTFTMapSkinCount?: number
      skinIds?: number[]
      /** Format: int32 */
      xpBoost?: number
    }
    /** @enum {string} */
    'LolInventoryLoyaltyStatus':
      | 'LEGACY'
      | 'REWARDS_GRANT'
      | 'EXPIRY'
      | 'CHANGE'
      | 'REVOKE'
      | 'DISABLED'
    'LolInventoryLoyaltyStatusNotification': {
      rewards?: LcuComponents['schemas']['LolInventoryLoyaltyRewards']
      status?: LcuComponents['schemas']['LolInventoryLoyaltyStatus']
    }
    'LolInventoryRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'LolInventoryRmsEntitlementPayload': {
      entitlementTypeId?: string
      itemId?: string
      itemTypeId?: string
      resourceOperation?: string
    }
    'LolInventoryRmsStoreEntitlementItem': {
      inventoryType?: string
      itemId?: string
    }
    'LolInventoryRmsStoreEntitlementPayload': {
      items?: LcuComponents['schemas']['LolInventoryRmsStoreEntitlementItem'][]
      transactionId?: string
    }
    'LolInventoryRmsWalletPayload': Record<string, never>
    'LolInventorySimpleInventoryDTO': {
      expires?: string
      items?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      itemsJwt?: string
    }
    'LolInventorySimpleInventoryResponseDTO': {
      data?: LcuComponents['schemas']['LolInventorySimpleInventoryDTO']
    }
    'LolInventorySummonerIcon': {
      /** Format: int32 */
      itemId?: number
    }
    'LolInventoryWallet': {
      /** Format: int64 */
      ip?: number
      /** Format: int64 */
      rp?: number
    }
    'LolInventoryWalletCacheEntry': {
      /** Format: int64 */
      expirationMS?: number
      /** Format: int64 */
      issuedAtMS?: number
      /** Format: int64 */
      receivedAtMS?: number
      signedBalancesJwt?: string
      valid?: boolean
    }
    'LolInventoryWalletDTO': {
      /** Format: int64 */
      accountId?: number
      balances?: {
        [key: string]: number | undefined
      }
      balancesJwt?: string
      expires?: string
      puuid?: string
    }
    'LolInventoryWalletResponseDTO': {
      data?: LcuComponents['schemas']['LolInventoryWalletDTO']
    }
    'LolItemSetsGameDataChampion': {
      alias?: string
    }
    'LolItemSetsItemSet': {
      associatedChampions?: number[]
      associatedMaps?: number[]
      blocks?: LcuComponents['schemas']['LolItemSetsItemSetBlock'][]
      map?: string
      mode?: string
      preferredItemSlots?: LcuComponents['schemas']['LolItemSetsPreferredItemSlot'][]
      /** Format: int32 */
      sortrank?: number
      startedFrom?: string
      title?: string
      type?: string
      uid?: string
    }
    'LolItemSetsItemSetBlock': {
      hideIfSummonerSpell?: string
      items?: LcuComponents['schemas']['LolItemSetsItemSetItem'][]
      showIfSummonerSpell?: string
      type?: string
    }
    'LolItemSetsItemSetItem': {
      count?: number
      id?: string
    }
    'LolItemSetsItemSets': {
      /** Format: int64 */
      accountId?: number
      itemSets?: LcuComponents['schemas']['LolItemSetsItemSet'][]
      /** Format: int64 */
      timestamp?: number
    }
    'LolItemSetsLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolItemSetsLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolItemSetsLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolItemSetsNameCheckPayload': {
      name?: string
      shard?: string
    }
    'LolItemSetsNameCheckResponse': {
      errors?: string[]
    }
    'LolItemSetsPreferredItemSlot': {
      id?: string
      preferredItemSlot?: number
    }
    'LolItemSetsValidateItemSetNameInput': {
      name?: string
    }
    'LolItemSetsValidateItemSetNameResponse': {
      nameCheckResponse?: LcuComponents['schemas']['LolItemSetsNameCheckResponse']
      success?: boolean
    }
    'LolKickoutKickoutMessage': {
      message?: string
    }
    'LolKrPlaytimeReminderPlaytimeReminder': {
      /** Format: int32 */
      hours?: number
    }
    'LolKrShutdownLawAllQueueShutdownStatus': {
      isAllQueuesDisabled?: boolean
    }
    'LolKrShutdownLawAntiAddictionState': {
      policyType?: LcuComponents['schemas']['LolKrShutdownLawPolicyType']
    }
    /** @enum {string} */
    'LolKrShutdownLawPolicyType': 'shutdown' | 'playTime' | 'warningMessage' | 'disableMatchMaking'
    'LolKrShutdownLawQueueShutdownStatus': {
      isDisabled?: boolean
    }
    'LolKrShutdownLawRatingScreenInfo': {
      shown?: boolean
    }
    'LolKrShutdownLawShutdownLawNotification': {
      type?: LcuComponents['schemas']['LolKrShutdownLawShutdownLawStatus']
    }
    /** @enum {string} */
    'LolKrShutdownLawShutdownLawStatus': 'NONE' | 'WARNING' | 'CUT_OFF'
    'LolLeagueSessionAntiAddictionTokenEnvelope': {
      antiAddictionToken?: string
    }
    'LolLeagueSessionLeagueSessionRMSNotification': {
      puuid?: string
      sessionId?: string
      /** Format: int64 */
      sessionInitiatedAt?: number
      state?: string
    }
    /** @enum {string} */
    'LolLeagueSessionLeagueSessionStatus':
      | 'UNINITIALIZED'
      | 'INITIALIZED'
      | 'EXPIRED'
      | 'DUPLICATED'
      | 'ANTI_ADDICTION_EXPIRED'
    'LolLeagueSessionLeagueSessionTokenEnvelope': {
      logoutOnFailure?: boolean
      token?: string
    }
    'LolLeaverBusterAllSummonerData': {
      summoner?: LcuComponents['schemas']['LolLeaverBusterSummoner']
    }
    'LolLeaverBusterLeaverBusterNotificationResource': {
      /** Format: int64 */
      accountId?: number
      fromRms?: boolean
      /** Format: int32 */
      id?: number
      msgId?: string
      /** Format: int32 */
      punishedGamesRemaining?: number
      /** Format: int64 */
      queueLockoutTimerExpiryUtcMillisDiff?: number
      type?: LcuComponents['schemas']['LolLeaverBusterLeaverBusterNotificationType']
    }
    /** @enum {string} */
    'LolLeaverBusterLeaverBusterNotificationType':
      | 'Invalid'
      | 'TaintedWarning'
      | 'PunishmentIncurred'
      | 'PunishedGamesRemaining'
      | 'Reforming'
      | 'PreLockoutWarning'
      | 'OnLockoutWarning'
    'LolLeaverBusterLoginDataPacket': {
      allSummonerData?: LcuComponents['schemas']['LolLeaverBusterAllSummonerData']
      simpleMessages?: LcuComponents['schemas']['LolLeaverBusterSimpleMessage'][]
    }
    'LolLeaverBusterMatchmakingSearchErrorResource': {
      errorType?: string
      /** Format: int32 */
      id?: number
      message?: string
      /** Format: int64 */
      penalizedSummonerId?: number
      /** Format: double */
      penaltyTimeRemaining?: number
    }
    'LolLeaverBusterMatchmakingSearchResource': {
      errors?: LcuComponents['schemas']['LolLeaverBusterMatchmakingSearchErrorResource'][]
      /** Format: int32 */
      queueId?: number
    }
    'LolLeaverBusterPlayerNotificationResource': {
      backgroundUrl?: string
      created?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolLeaverBusterSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LolLeaverBusterSummoner': {
      /** Format: int64 */
      acctId?: number
      /** Format: int64 */
      sumId?: number
    }
    'LolLicenseAgreementLicenseAgreement': {
      id?: string
      licenseType?: LcuComponents['schemas']['LolLicenseAgreementLicenseAgreementType']
      text?: string
    }
    /** @enum {string} */
    'LolLicenseAgreementLicenseAgreementType': 'PrivacyNotice' | 'TermsOfUse'
    /** @enum {string} */
    'LolLicenseAgreementLicenseServeLocation': 'Preparing' | 'Local' | 'External'
    'LolLicenseAgreementPluginRegionLocaleChangedEvent': {
      locale?: string
      region?: string
    }
    'LolLoadoutsAccessTokenResource': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    'LolLoadoutsCreateLoadoutDTO': {
      /** Format: int32 */
      itemId?: number
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolLoadoutsItemKey'] | undefined
      }
      name?: string
      refreshTime?: string
      scope?: string
    }
    'LolLoadoutsCreateLoadoutRequestDTO': {
      loadout?: LcuComponents['schemas']['LolLoadoutsCreateLoadoutDTO']
      serviceToJwtsMap?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLoadoutsCreateOrUpdateItemsRequest': {
      /** Format: int32 */
      id?: number
      inventoryJWTs?: string[]
      items?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLoadoutsFrontendInventoryResponse': {
      entitlements?: LcuComponents['schemas']['LolLoadoutsItemKey'][]
    }
    'LolLoadoutsGameflowGameData': {
      queue?: LcuComponents['schemas']['LolLoadoutsQueue']
    }
    /** @enum {string} */
    'LolLoadoutsGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolLoadoutsGameflowSession': {
      gameData?: LcuComponents['schemas']['LolLoadoutsGameflowGameData']
      phase?: LcuComponents['schemas']['LolLoadoutsGameflowPhase']
    }
    'LolLoadoutsGetItemsRequest': {
      /** Format: int32 */
      id?: number
      inventoryJWTs?: string[]
      inventoryTypes?: string[]
    }
    'LolLoadoutsInventoryDTO': {
      /** Format: int64 */
      accountId?: number
      expires?: string
      items?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      itemsJwt?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolLoadoutsInventoryItemDTO': {
      entitlementId?: string
      entitlementTypeId?: string
      expirationDate?: string
      f2p?: boolean
      instanceId?: string
      instanceTypeId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      lsb?: boolean
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      rental?: boolean
      usedInGameDate?: string
      /** Format: int64 */
      wins?: number
    }
    'LolLoadoutsInventoryResponseDTO': {
      data?: LcuComponents['schemas']['LolLoadoutsInventoryDTO']
    }
    'LolLoadoutsItemKey': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolLoadoutsLoadout': {
      /** Format: int32 */
      id?: number
      items?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      name?: string
    }
    'LolLoadoutsLoadoutRequestDTOBase': {
      serviceToJwtsMap?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLoadoutsLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      puuid?: string
      state?: LcuComponents['schemas']['LolLoadoutsLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolLoadoutsLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolLoadoutsQueue': {
      isTeamBuilderManaged?: boolean
    }
    'LolLoadoutsScopedLoadout': {
      id?: string
      /** Format: int32 */
      itemId?: number
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolLoadoutsItemKey'] | undefined
      }
      name?: string
      refreshTime?: string
      scope?: string
    }
    'LolLoadoutsSignGCORequestDTO': {
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolLoadoutsItemKey'] | undefined
      }
      serviceToJwtsMap?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLoadoutsUpdateLoadoutDTO': {
      id?: string
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolLoadoutsItemKey'] | undefined
      }
      name?: string
    }
    'LolLoadoutsUpdateLoadoutRequestDTO': {
      loadout?: LcuComponents['schemas']['LolLoadoutsUpdateLoadoutDTO']
      serviceToJwtsMap?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLobbyAccountIdAndSummonerId': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyAmbassadorMessage': {
      errorCode?: string
      /** Format: int32 */
      httpStatus?: number
      implementationDetails?: string
      message?: string
      payload?: {
        [key: string]: unknown | undefined
      }
    }
    'LolLobbyAutoFillQueueDto': {
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForStreaking?: boolean
      /** Format: int32 */
      queueId?: number
    }
    'LolLobbyBotParticipantDto': {
      /** Format: int32 */
      botSkillLevel?: number
      /** Format: int32 */
      championId?: number
      team?: string
    }
    'LolLobbyChampionSkinSelection': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      skinId?: number
    }
    'LolLobbyChatBlockedPlayerResource': {
      name?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyChatFriend': {
      lol?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyChatFriendCounts': {
      /** Format: int32 */
      numFriends?: number
      /** Format: int32 */
      numFriendsAvailable?: number
      /** Format: int32 */
      numFriendsAway?: number
      /** Format: int32 */
      numFriendsInChampSelect?: number
      /** Format: int32 */
      numFriendsInGame?: number
      /** Format: int32 */
      numFriendsInQueue?: number
      /** Format: int32 */
      numFriendsMobile?: number
      /** Format: int32 */
      numFriendsOnline?: number
    }
    'LolLobbyCollectionsChampion': {
      active?: boolean
      botEnabled?: boolean
      /** Format: int32 */
      id?: number
      name?: string
    }
    'LolLobbyCollectionsChampionMinimal': {
      active?: boolean
      disabledQueues?: string[]
      freeToPlay?: boolean
      /** Format: int32 */
      id?: number
      ownership?: LcuComponents['schemas']['LolLobbyCollectionsOwnership']
    }
    'LolLobbyCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolLobbyCollectionsRental']
    }
    'LolLobbyCollectionsRental': Record<string, never>
    'LolLobbyCustomEligibilityDto': {
      eligible?: boolean
      restrictions?: LcuComponents['schemas']['LolLobbyGatekeeperRestrictionDto'][]
    }
    'LolLobbyCustomGameDto': {
      allowSpectators?: string
      gameType?: string
      lobbyName?: string
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxNumPlayers?: number
      ownerPuuid?: string
      partyId?: string
      privateGame?: boolean
      /** Format: int32 */
      spectatorCount?: number
      /** Format: int32 */
      team1Count?: number
      /** Format: int32 */
      team2Count?: number
    }
    'LolLobbyCustomGameSettingsDto': {
      /** Format: int64 */
      gameId?: number
      lobbyName?: string
      lobbyPassword?: string
    }
    'LolLobbyCustomJoinOptionsDto': {
      lobbyPassword?: string
      team?: string
    }
    'LolLobbyEligibility': {
      eligible?: boolean
      /** Format: int32 */
      queueId?: number
      restrictions?: LcuComponents['schemas']['LolLobbyEligibilityRestriction'][]
    }
    'LolLobbyEligibilityRestriction': {
      /** Format: int64 */
      expiredTimestamp?: number
      restrictionArgs?: {
        [key: string]: string | undefined
      }
      restrictionCode?: LcuComponents['schemas']['LolLobbyEligibilityRestrictionCode']
      summonerIds?: number[]
      summonerIdsString?: string
    }
    /** @enum {string} */
    'LolLobbyEligibilityRestrictionCode':
      | 'QueueDisabled'
      | 'QueueUnsupported'
      | 'PlayerLevelRestriction'
      | 'PlayerTimedRestriction'
      | 'PlayerBannedRestriction'
      | 'PlayerAvailableChampionRestriction'
      | 'TeamDivisionRestriction'
      | 'TeamMaxSizeRestriction'
      | 'TeamMinSizeRestriction'
      | 'PlayerBingeRestriction'
      | 'PlayerDodgeRestriction'
      | 'PlayerInGameRestriction'
      | 'PlayerLeaverBustedRestriction'
      | 'PlayerLeaverQueueLockoutRestriction'
      | 'PlayerLeaverTaintedWarningRestriction'
      | 'PlayerMaxLevelRestriction'
      | 'PlayerMinLevelRestriction'
      | 'PlayerMinorRestriction'
      | 'PlayerTimePlayedRestriction'
      | 'PlayerRankSoloOnlyRestriction'
      | 'PlayerRankedSuspensionRestriction'
      | 'TeamHighMMRMaxSizeRestriction'
      | 'TeamSizeRestriction'
      | 'PrerequisiteQueuesNotPlayedRestriction'
      | 'GameVersionMismatch'
      | 'GameVersionMissing'
      | 'GameVersionNotSupported'
      | 'QueueEntryNotEntitledRestriction'
      | 'UnknownRestriction'
      | 'BanInfoNotAvailable'
      | 'MinorInfoNotAvailable'
      | 'SummonerInfoNotAvailable'
      | 'LeaguesInfoNotAvailable'
      | 'InventoryChampsInfoNotAvailable'
      | 'InventoryQueuesInfoNotAvailable'
      | 'MmrStandardDeviationTooLarge'
    'LolLobbyFriendAvailabilityAnalytics': {
      eventData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      eventTimestamp?: number
      eventType?: string
      /** Format: int32 */
      numFriends?: number
      /** Format: int32 */
      numFriendsAvailable?: number
      /** Format: int32 */
      numFriendsAway?: number
      /** Format: int32 */
      numFriendsInChampSelect?: number
      /** Format: int32 */
      numFriendsInGame?: number
      /** Format: int32 */
      numFriendsInQueue?: number
      /** Format: int32 */
      numFriendsMobile?: number
      /** Format: int32 */
      numFriendsOnline?: number
      partyType?: string
      platformId?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyGameDataChampionSummary': {
      alias?: string
      /** Format: int32 */
      id?: number
    }
    'LolLobbyGameflowGameClient': {
      running?: boolean
    }
    'LolLobbyGameflowGameData': {
      queue?: LcuComponents['schemas']['LolLobbyQueue']
    }
    'LolLobbyGameflowGameDodge': {
      dodgeIds?: number[]
      phase?: LcuComponents['schemas']['LolLobbyGameflowPhase']
      state?: LcuComponents['schemas']['LolLobbyMatchmakingDodgeState']
    }
    /** @enum {string} */
    'LolLobbyGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolLobbyGameflowSampleDto': {
      /** Format: double */
      intervalSecs?: number
      /** Format: double */
      probability?: number
      state?: string
      tags?: LcuComponents['schemas']['LolLobbyGameflowSampleTag'][]
    }
    /** @enum {string} */
    'LolLobbyGameflowSampleTag':
      | 'Unregistered'
      | 'GameVersionMissing'
      | 'UserInfoTokenMissing'
      | 'SummonerTokenMissing'
      | 'RankedTokenMissing'
      | 'InventoryTokenMissing'
    'LolLobbyGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolLobbyGameflowGameClient']
      gameData?: LcuComponents['schemas']['LolLobbyGameflowGameData']
      gameDodge?: LcuComponents['schemas']['LolLobbyGameflowGameDodge']
      phase?: LcuComponents['schemas']['LolLobbyGameflowPhase']
    }
    'LolLobbyGameModeDto': {
      allowSpectators?: string
      botDifficulty?: string
      customsSettings?: LcuComponents['schemas']['LolLobbyCustomGameSettingsDto']
      gameCustomization?: {
        [key: string]: string | undefined
      }
      gameType?: string
      /** Format: int64 */
      gameTypeConfigId?: number
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxPartySize?: number
      /** Format: int32 */
      maxTeamSize?: number
      /** Format: int32 */
      queueId?: number
    }
    'LolLobbyGatekeeperRestrictionDto': {
      /** Format: int64 */
      accountId?: number
      details?: {
        [key: string]: string | undefined
      }
      payload?: string
      puuid?: string
      /** Format: int32 */
      queueId?: number
      reason?: string
      /** Format: int64 */
      remainingMillis?: number
    }
    'LolLobbyInventoryCacheEntry': {
      /** Format: int64 */
      expirationMS?: number
      signedInventoryJwt?: string
      valid?: boolean
    }
    'LolLobbyInventoryItem': {
      /** Format: int32 */
      itemId?: number
    }
    /** @enum {string} */
    'LolLobbyInvitationType': 'invalid' | 'lobby' | 'party'
    'LolLobbyJoinPartyAnalytics': {
      eventData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      eventTimestamp?: number
      eventType?: string
      gameMode?: string
      /** Format: int32 */
      numFriendsOnline?: number
      /** Format: int32 */
      numOpenFriends?: number
      /** Format: int32 */
      numOpenParties?: number
      /** Format: int32 */
      numOtherInvites?: number
      /** Format: int32 */
      numPartyInvites?: number
      /** Format: int32 */
      numTotalInvites?: number
      partyId?: string
      /** Format: int32 */
      partySize?: number
      platformId?: string
    }
    'LolLobbyLcdsDynamicClientConfig': {
      PartyRewards?: LcuComponents['schemas']['LolLobbyLcdsPartyRewardsConfig']
    }
    'LolLobbyLcdsGameMetaData': {
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      mapId?: number
    }
    'LolLobbyLcdsPartyRewardsConfig': {
      Enabled?: boolean
    }
    'LolLobbyLobby': {
      allowablePremadeSizes?: number[]
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForStreaking?: boolean
      canStartMatchmaking?: boolean
      chatRoomId?: string
      chatRoomKey?: string
      customGameLobby?: LcuComponents['schemas']['LolLobbyLobbyCustomGameLobby']
      gameMode?: string
      invitationId?: string
      invitations?: LcuComponents['schemas']['LolLobbyLobbyInvitation'][]
      isCustom?: boolean
      isTeamBuilderManaged?: boolean
      localMember?: LcuComponents['schemas']['LolLobbyLobbyMember']
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maximumParticipantListSize?: number
      members?: LcuComponents['schemas']['LolLobbyLobbyMember'][]
      premadeSizeAllowed?: boolean
      queueAvailability?: LcuComponents['schemas']['LolLobbyQueueAvailability']
      /** Format: int32 */
      queueId?: number
      removalReason?: LcuComponents['schemas']['LolLobbyLobbyRemovedFromGameReason']
      requiredPositionCoverageMet?: boolean
      showPositionExcluder?: boolean
      showPositionSelector?: boolean
      specifiablePositionPreferences?: string[]
      wasKicked?: boolean
    }
    'LolLobbyLobbyBotChampion': {
      active?: boolean
      botDifficulties?: LcuComponents['schemas']['LolLobbyLobbyBotDifficulty'][]
      /** Format: int32 */
      id?: number
      name?: string
    }
    /** @enum {string} */
    'LolLobbyLobbyBotDifficulty':
      | 'NONE'
      | 'EASY'
      | 'MEDIUM'
      | 'HARD'
      | 'UBER'
      | 'TUTORIAL'
      | 'INTRO'
    'LolLobbyLobbyBotParams': {
      botDifficulty?: LcuComponents['schemas']['LolLobbyLobbyBotDifficulty']
      /** Format: int32 */
      championId?: number
      teamId?: string
    }
    'LolLobbyLobbyChangeGameDto': {
      customGameLobby?: LcuComponents['schemas']['LolLobbyLobbyCustomGameLobby']
      gameCustomization?: {
        [key: string]: string | undefined
      }
      isCustom?: boolean
      /** Format: int32 */
      queueId?: number
    }
    'LolLobbyLobbyChangeQueue': {
      customGameLobby?: LcuComponents['schemas']['LolLobbyLobbyCustomGameLobby']
      isCustom?: boolean
      /** Format: int32 */
      queueId?: number
    }
    'LolLobbyLobbyCustomChampSelectStartResponse': {
      failedPlayers?: LcuComponents['schemas']['LolLobbyLobbyCustomFailedPlayer'][]
      success?: boolean
    }
    'LolLobbyLobbyCustomFailedPlayer': {
      reason?: string
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolLobbyLobbyCustomGame': {
      /** Format: int32 */
      filledPlayerSlots?: number
      /** Format: int32 */
      filledSpectatorSlots?: number
      gameType?: string
      hasPassword?: boolean
      /** Format: int64 */
      id?: number
      lobbyName?: string
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxPlayerSlots?: number
      /** Format: int64 */
      maxSpectatorSlots?: number
      ownerSummonerName?: string
      partyId?: string
      passbackUrl?: string
      spectatorPolicy?: string
    }
    'LolLobbyLobbyCustomGameConfiguration': {
      gameMode?: string
      gameServerRegion?: string
      gameTypeConfig?: LcuComponents['schemas']['LolLobbyQueueGameTypeConfig']
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxPlayerCount?: number
      mutators?: LcuComponents['schemas']['LolLobbyQueueGameTypeConfig']
      spectatorPolicy?: LcuComponents['schemas']['LolLobbyQueueCustomGameSpectatorPolicy']
      /** Format: int32 */
      teamSize?: number
      tournamentGameMode?: string
      tournamentPassbackDataPacket?: string
      tournamentPassbackUrl?: string
    }
    'LolLobbyLobbyCustomGameLobby': {
      configuration?: LcuComponents['schemas']['LolLobbyLobbyCustomGameConfiguration']
      /** Format: int64 */
      gameId?: number
      lobbyName?: string
      lobbyPassword?: string
      practiceGameRewardsDisabledReasons?: string[]
      spectators?: LcuComponents['schemas']['LolLobbyLobbyMember'][]
      teamOne?: LcuComponents['schemas']['LolLobbyLobbyMember'][]
      teamTwo?: LcuComponents['schemas']['LolLobbyLobbyMember'][]
    }
    'LolLobbyLobbyCustomJoinParameters': {
      asSpectator?: boolean
      password?: string
    }
    'LolLobbyLobbyDto': {
      canStartActivity?: boolean
      chatRoomId?: string
      chatRoomKey?: string
      gameConfig?: LcuComponents['schemas']['LolLobbyLobbyGameConfigDto']
      invitations?: LcuComponents['schemas']['LolLobbyLobbyInvitationDto'][]
      localMember?: LcuComponents['schemas']['LolLobbyLobbyParticipantDto']
      members?: LcuComponents['schemas']['LolLobbyLobbyParticipantDto'][]
      partyId?: string
      partyType?: string
      restrictions?: LcuComponents['schemas']['LolLobbyEligibilityRestriction'][]
      warnings?: LcuComponents['schemas']['LolLobbyEligibilityRestriction'][]
    }
    'LolLobbyLobbyGameConfigDto': {
      allowablePremadeSizes?: number[]
      customLobbyName?: string
      customMutatorName?: string
      customRewardsDisabledReasons?: string[]
      customSpectatorPolicy?: LcuComponents['schemas']['LolLobbyQueueCustomGameSpectatorPolicy']
      customSpectators?: LcuComponents['schemas']['LolLobbyLobbyParticipantDto'][]
      customTeam100?: LcuComponents['schemas']['LolLobbyLobbyParticipantDto'][]
      customTeam200?: LcuComponents['schemas']['LolLobbyLobbyParticipantDto'][]
      gameMode?: string
      isCustom?: boolean
      isLobbyFull?: boolean
      isTeamBuilderManaged?: boolean
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maxHumanPlayers?: number
      /** Format: int32 */
      maxLobbySize?: number
      /** Format: int32 */
      maxTeamSize?: number
      pickType?: string
      premadeSizeAllowed?: boolean
      /** Format: int32 */
      queueId?: number
      showPositionSelector?: boolean
    }
    'LolLobbyLobbyInvitation': {
      eligibility?: LcuComponents['schemas']['LolLobbyEligibility']
      errorType?: string
      /** Format: int64 */
      fromSummonerId?: number
      fromSummonerName?: string
      id?: string
      invitationMetaData?: {
        [key: string]: unknown | undefined
      }
      state?: LcuComponents['schemas']['LolLobbyLobbyInvitationState']
      timestamp?: string
      /** Format: int64 */
      toSummonerId?: number
      toSummonerName?: string
    }
    'LolLobbyLobbyInvitationDto': {
      invitationId?: string
      invitationType?: LcuComponents['schemas']['LolLobbyInvitationType']
      state?: LcuComponents['schemas']['LolLobbyLobbyInvitationState']
      timestamp?: string
      /** Format: int64 */
      toSummonerId?: number
      toSummonerName?: string
    }
    /** @enum {string} */
    'LolLobbyLobbyInvitationState':
      | 'Requested'
      | 'Pending'
      | 'Accepted'
      | 'Joined'
      | 'Declined'
      | 'Kicked'
      | 'OnHold'
      | 'Error'
    'LolLobbyLobbyLastQueuedLobby': {
      canPlayAgain?: boolean
      members?: LcuComponents['schemas']['LolLobbyLobbyLastQueuedMember'][]
      /** Format: int32 */
      queueId?: number
      wasOwner?: boolean
    }
    'LolLobbyLobbyLastQueuedMember': {
      /** Format: int64 */
      id?: number
    }
    'LolLobbyLobbyMatchmakingLowPriorityDataResource': {
      bustedLeaverAccessToken?: string
      penalizedSummonerIds?: number[]
      /** Format: double */
      penaltyTime?: number
      /** Format: double */
      penaltyTimeRemaining?: number
      reason?: string
    }
    'LolLobbyLobbyMatchmakingSearchErrorResource': {
      errorType?: string
      /** Format: int32 */
      id?: number
      message?: string
      /** Format: int64 */
      penalizedSummonerId?: number
      /** Format: double */
      penaltyTimeRemaining?: number
    }
    'LolLobbyLobbyMatchmakingSearchResource': {
      errors?: LcuComponents['schemas']['LolLobbyLobbyMatchmakingSearchErrorResource'][]
      lowPriorityData?: LcuComponents['schemas']['LolLobbyLobbyMatchmakingLowPriorityDataResource']
      searchState?: LcuComponents['schemas']['LolLobbyLobbyMatchmakingSearchState']
    }
    /** @enum {string} */
    'LolLobbyLobbyMatchmakingSearchState':
      | 'Invalid'
      | 'AbandonedLowPriorityQueue'
      | 'Canceled'
      | 'Searching'
      | 'Found'
      | 'Error'
      | 'ServiceError'
      | 'ServiceShutdown'
    'LolLobbyLobbyMember': {
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForSoloing?: boolean
      autoFillProtectedForStreaking?: boolean
      /** Format: int32 */
      botChampionId?: number
      botDifficulty?: LcuComponents['schemas']['LolLobbyLobbyBotDifficulty']
      canInviteOthers?: boolean
      excludedPositionPreference?: string
      /** Format: int64 */
      id?: number
      isBot?: boolean
      isOwner?: boolean
      isSpectator?: boolean
      positionPreferences?: LcuComponents['schemas']['LolLobbyLobbyPositionPreferences']
      showPositionExcluder?: boolean
      summonerInternalName?: string
    }
    'LolLobbyLobbyNotification': {
      notificationId?: string
      notificationReason?: string
      summonerIds?: number[]
      /** Format: int64 */
      timestamp?: number
    }
    'LolLobbyLobbyParticipantDto': {
      allowedChangeActivity?: boolean
      allowedInviteOthers?: boolean
      allowedKickOthers?: boolean
      allowedStartActivity?: boolean
      allowedToggleInvite?: boolean
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForSoloing?: boolean
      autoFillProtectedForStreaking?: boolean
      /** Format: int32 */
      botChampionId?: number
      botDifficulty?: LcuComponents['schemas']['LolLobbyLobbyBotDifficulty']
      botId?: string
      firstPositionPreference?: string
      isBot?: boolean
      isLeader?: boolean
      isSpectator?: boolean
      puuid?: string
      ready?: boolean
      secondPositionPreference?: string
      showGhostedBanner?: boolean
      /** Format: int32 */
      summonerIconId?: number
      /** Format: int64 */
      summonerId?: number
      summonerInternalName?: string
      /** Format: int32 */
      summonerLevel?: number
      summonerName?: string
      /** Format: int32 */
      teamId?: number
    }
    'LolLobbyLobbyPartyRewards': {
      isCustom?: boolean
      isEnabled?: boolean
      partyRewards?: LcuComponents['schemas']['LolLobbyPartyReward'][]
      /** Format: int32 */
      queueId?: number
    }
    /** @enum {string} */
    'LolLobbyLobbyPartyRewardType': 'Ip' | 'Icon' | 'None'
    'LolLobbyLobbyPositionPreferences': {
      firstPreference?: string
      secondPreference?: string
    }
    /** @enum {string} */
    'LolLobbyLobbyRemovedFromGameReason':
      | 'None'
      | 'Kicked'
      | 'Disbanded'
      | 'Left'
      | 'ServiceError'
      | 'Other'
      | 'Timeout'
      | 'GameStartError'
      | 'ServiceShutdown'
    'LolLobbyLobbyStatus': {
      allowedPlayAgain?: boolean
      customSpectatorPolicy?: LcuComponents['schemas']['LolLobbyQueueCustomGameSpectatorPolicy']
      invitedSummonerIds?: number[]
      isCustom?: boolean
      isLeader?: boolean
      isPracticeTool?: boolean
      isSpectator?: boolean
      lobbyId?: string
      memberSummonerIds?: number[]
      /** Format: int32 */
      queueId?: number
    }
    'LolLobbyLobbyTimer': {
      /** Format: int64 */
      countdown?: number
      enabled?: boolean
    }
    'LolLobbyLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      puuid?: string
      state?: LcuComponents['schemas']['LolLobbyLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
      userAuthToken?: string
      username?: string
    }
    /** @enum {string} */
    'LolLobbyLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    /** @enum {string} */
    'LolLobbyMatchmakingDodgeState': 'Invalid' | 'PartyDodged' | 'StrangerDodged'
    'LolLobbyOpenPartyToggleAnalytics': {
      /** Format: int64 */
      elapsedTime?: number
      /** Format: int64 */
      endTimestamp?: number
      endTransition?: string
      eventData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      eventTimestamp?: number
      eventType?: string
      finalState?: string
      gameMode?: string
      initialState?: string
      /** Format: int32 */
      numOfToggles?: number
      partyId?: string
      platformId?: string
      playerId?: string
      /** Format: int64 */
      startTimestamp?: number
      startTransition?: string
    }
    'LolLobbyPartiesInvitationAnalytics': {
      eventData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      eventTimestamp?: number
      eventType?: string
      partyId?: string
      platformId?: string
      players?: LcuComponents['schemas']['LolLobbyPartiesInvitationPlayerAnalytics'][]
    }
    'LolLobbyPartiesInvitationPlayerAnalytics': {
      puuid?: string
      role?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyPartyChatDto': {
      jid?: string
      multiUserChatJWT?: string
    }
    'LolLobbyPartyDto': {
      activeRestrictions?: LcuComponents['schemas']['LolLobbyQueueRestrictionDto']
      activityLocked?: boolean
      /** Format: int64 */
      activityResumeUtcMillis?: number
      /** Format: int64 */
      activityStartedUtcMillis?: number
      botParticipants?: LcuComponents['schemas']['LolLobbyBotParticipantDto'][]
      chat?: LcuComponents['schemas']['LolLobbyPartyChatDto']
      /** Format: int64 */
      eligibilityHash?: number
      eligibilityRestrictions?: LcuComponents['schemas']['LolLobbyGatekeeperRestrictionDto'][]
      eligibilityWarnings?: LcuComponents['schemas']['LolLobbyGatekeeperRestrictionDto'][]
      gameMode?: LcuComponents['schemas']['LolLobbyGameModeDto']
      /** Format: int32 */
      maxPartySize?: number
      partyId?: string
      partyType?: string
      platformId?: string
      players?: LcuComponents['schemas']['LolLobbyPartyMemberDto'][]
      /** Format: int64 */
      version?: number
    }
    /** @enum {string} */
    'LolLobbyPartyEogStatusCategory': 'kLeft' | 'kPlayAgain' | 'kOnEog'
    'LolLobbyPartyInviteAnalytics': {
      eventData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      eventTimestamp?: number
      eventType?: string
      /** Format: int64 */
      fromSummonerId?: number
      gameMode?: string
      partyId?: string
      partyType?: string
      platformId?: string
      /** Format: int64 */
      toSummonerId?: number
    }
    'LolLobbyPartyMemberDto': {
      /** Format: int64 */
      accountId?: number
      canInvite?: boolean
      gameMode?: LcuComponents['schemas']['LolLobbyGameModeDto']
      /** Format: int64 */
      invitedBySummonerId?: number
      /** Format: int64 */
      inviteTimestamp?: number
      metadata?: LcuComponents['schemas']['LolLobbyPartyMemberMetadataDto']
      partyId?: string
      /** Format: int64 */
      partyVersion?: number
      platformId?: string
      puuid?: string
      ready?: boolean
      role?: LcuComponents['schemas']['LolLobbyPartyMemberRoleEnum']
      /** Format: int64 */
      summonerId?: number
      team?: string
    }
    'LolLobbyPartyMemberMetadataDto': {
      /** Format: int32 */
      championSelection?: number
      positionPref?: string[]
      properties?: {
        [key: string]: unknown | undefined
      }
      /** Format: int32 */
      skinSelection?: number
    }
    /** @enum {string} */
    'LolLobbyPartyMemberRoleEnum':
      | 'LEADER'
      | 'MEMBER'
      | 'INVITED'
      | 'HOLD'
      | 'KICKED'
      | 'DECLINED'
      | 'NONE'
    'LolLobbyPartyNotificationEnvelopeDto': {
      player?: LcuComponents['schemas']['LolLobbyPlayerDto']
      queueRestriction?: LcuComponents['schemas']['LolLobbyQueueRestrictionDto']
    }
    'LolLobbyPartyPresenceData': {
      /** Format: int32 */
      maxPlayers?: number
      partyId?: string
      /** Format: int32 */
      queueId?: number
      summoners?: number[]
    }
    'LolLobbyPartyQueueEligibilityDto': {
      availableQueueIds?: number[]
      partyRestrictions?: LcuComponents['schemas']['LolLobbyGatekeeperRestrictionDto'][]
    }
    'LolLobbyPartyReward': {
      /** Format: int32 */
      premadeSize?: number
      type?: LcuComponents['schemas']['LolLobbyLobbyPartyRewardType']
      value?: string
    }
    'LolLobbyPartyStatusDto': {
      eogPlayers?: string[]
      leftPlayers?: string[]
      /** Format: int32 */
      partySize?: number
      readyPlayers?: string[]
    }
    'LolLobbyPlayerCollectionDto': {
      players?: LcuComponents['schemas']['LolLobbyPlayerDto'][]
    }
    'LolLobbyPlayerDto': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      createdAt?: number
      currentParty?: LcuComponents['schemas']['LolLobbyPartyDto']
      /** Format: int64 */
      eligibilityHash?: number
      parties?: LcuComponents['schemas']['LolLobbyPartyMemberDto'][]
      platformId?: string
      puuid?: string
      registration?: LcuComponents['schemas']['LolLobbyRegistrationCredentials']
      /** Format: int64 */
      serverUtcMillis?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int64 */
      version?: number
    }
    'LolLobbyPlayerStatus': {
      canInviteOthersAtEog?: boolean
      currentLobbyStatus?: LcuComponents['schemas']['LolLobbyLobbyStatus']
      lastQueuedLobbyStatus?: LcuComponents['schemas']['LolLobbyLobbyStatus']
    }
    /** @enum {string} */
    'LolLobbyPlayerUpdateType': 'None' | 'Direct' | 'ServiceProxy' | 'RMS'
    'LolLobbyPremadeMemberDto': {
      displayName?: string
      partyId?: string
      puuid?: string
      role?: LcuComponents['schemas']['LolLobbyPartyMemberRoleEnum']
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyPremadePartyDto': {
      commsEnabled?: boolean
      partyId?: string
      players?: {
        [key: string]: LcuComponents['schemas']['LolLobbyPremadeMemberDto'] | undefined
      }
    }
    'LolLobbyPremadeRelationshipAnalytics': {
      eventData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      eventTimestamp?: number
      eventType?: string
      friendPlayers?: string[]
      platformId?: string
      premadePlayers?: string[]
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyQueue': {
      allowablePremadeSizes?: number[]
      areFreeChampionsAllowed?: boolean
      assetMutator?: string
      category?: LcuComponents['schemas']['LolLobbyQueueGameCategory']
      /** Format: int32 */
      championsRequiredToPlay?: number
      description?: string
      detailedDescription?: string
      gameMode?: string
      gameTypeConfig?: LcuComponents['schemas']['LolLobbyQueueGameTypeConfig']
      /** Format: int32 */
      id?: number
      isRanked?: boolean
      isTeamBuilderManaged?: boolean
      isTeamOnly?: boolean
      /** Format: int64 */
      lastToggledOffTime?: number
      /** Format: int64 */
      lastToggledOnTime?: number
      /** Format: int32 */
      mapId?: number
      maxDivisionForPremadeSize2?: string
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxSummonerLevelForFirstWinOfTheDay?: number
      maxTierForPremadeSize2?: string
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minLevel?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeam?: number
      queueAvailability?: LcuComponents['schemas']['LolLobbyQueueAvailability']
      queueRewards?: LcuComponents['schemas']['LolLobbyQueueReward']
      removalFromGameAllowed?: boolean
      /** Format: int32 */
      removalFromGameDelayMinutes?: number
      shortName?: string
      showPositionSelector?: boolean
      spectatorEnabled?: boolean
      type?: string
    }
    /** @enum {string} */
    'LolLobbyQueueAvailability': 'Available' | 'PlatformDisabled' | 'DoesntMeetRequirements'
    'LolLobbyQueueCustomGame': {
      queueAvailability?: LcuComponents['schemas']['LolLobbyQueueAvailability']
    }
    /** @enum {string} */
    'LolLobbyQueueCustomGameSpectatorPolicy':
      | 'NotAllowed'
      | 'LobbyAllowed'
      | 'FriendsAllowed'
      | 'AllAllowed'
    /** @enum {string} */
    'LolLobbyQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    'LolLobbyQueueGameTypeConfig': {
      advancedLearningQuests?: boolean
      allowTrades?: boolean
      banMode?: string
      /** Format: int32 */
      banTimerDuration?: number
      battleBoost?: boolean
      crossTeamChampionPool?: boolean
      deathMatch?: boolean
      doNotRemove?: boolean
      duplicatePick?: boolean
      exclusivePick?: boolean
      gameModeOverride?: string
      /** Format: int64 */
      id?: number
      learningQuests?: boolean
      /** Format: int32 */
      mainPickTimerDuration?: number
      /** Format: int32 */
      maxAllowableBans?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeamOverride?: number
      onboardCoopBeginner?: boolean
      pickMode?: string
      /** Format: int32 */
      postPickTimerDuration?: number
      reroll?: boolean
      teamChampionPool?: boolean
    }
    'LolLobbyQueueRestrictionDto': {
      gatekeeperRestrictions?: LcuComponents['schemas']['LolLobbyGatekeeperRestrictionDto'][]
    }
    'LolLobbyQueueReward': {
      isChampionPointsEnabled?: boolean
      isIpEnabled?: boolean
      isXpEnabled?: boolean
      partySizeIpRewards?: number[]
    }
    'LolLobbyRankedPositionInfoDTO': {
      queue?: string
      rank?: string
      tier?: string
    }
    'LolLobbyRankedStatsUnsignedDTO': {
      highestPreviousSeasonEndRank?: string
      highestPreviousSeasonEndTier?: string
      jwt?: string
      queues?: LcuComponents['schemas']['LolLobbyRankedPositionInfoDTO'][]
    }
    'LolLobbyReadyDto': {
      ready?: boolean
    }
    'LolLobbyReceivedInvitationDto': {
      canAcceptInvitation?: boolean
      /** Format: int64 */
      fromSummonerId?: number
      fromSummonerName?: string
      gameConfig?: LcuComponents['schemas']['LolLobbyReceivedInvitationGameConfigDto']
      invitationId?: string
      invitationType?: LcuComponents['schemas']['LolLobbyInvitationType']
      restrictions?: LcuComponents['schemas']['LolLobbyEligibilityRestriction'][]
      state?: LcuComponents['schemas']['LolLobbyLobbyInvitationState']
      timestamp?: string
    }
    'LolLobbyReceivedInvitationGameConfigDto': {
      gameMode?: string
      inviteGameType?: string
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      queueId?: number
    }
    'LolLobbyRegistrationCredentials': {
      gameClientVersion?: string
      inventoryToken?: string
      inventoryTokens?: string[]
      rankedOverviewToken?: string
      simpleInventoryToken?: string
      summonerToken?: string
      userInfoToken?: string
    }
    'LolLobbyRegistrationStatus': {
      complete?: boolean
      errorCodes?: string[]
    }
    'LolLobbyRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'LolLobbyServiceProxyPayload': {
      body?: string
      method?: string
      url?: string
    }
    'LolLobbySummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      internalName?: string
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolLobbyTeamBuilderActionV1': {
      /** Format: int32 */
      actionId?: number
      /** Format: int32 */
      actorCellId?: number
      /** Format: int32 */
      championId?: number
      completed?: boolean
      /** Format: int64 */
      duration?: number
      type?: string
    }
    'LolLobbyTeamBuilderAfkCheckStateV1': {
      additionalInventoryTypes?: string[]
      afkReady?: boolean
      compressAfkCheckPayload?: boolean
      inventoryDraft?: LcuComponents['schemas']['LolLobbyTeamBuilderTbdInventory']
      /** Format: int32 */
      maxAfkMillis?: number
      multiUserChatJWT?: string
      /** Format: int32 */
      remainingAfkMillis?: number
    }
    'LolLobbyTeamBuilderBackwardsTransitionInfoV1': {
      backwardsTransitionReason?: string
      initiatorSummonerIds?: number[]
    }
    'LolLobbyTeamBuilderCellsV1': {
      alliedTeam?: LcuComponents['schemas']['LolLobbyTeamBuilderCellV1'][]
      enemyTeam?: LcuComponents['schemas']['LolLobbyTeamBuilderCellV1'][]
    }
    'LolLobbyTeamBuilderCellV1': {
      assignedPosition?: string
      /** Format: int32 */
      cellId?: number
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championPickIntent?: number
      entitledFeatureType?: string
      /** Format: int32 */
      skinId?: number
      /** Format: int32 */
      spell1Id?: number
      /** Format: int32 */
      spell2Id?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      teamId?: number
    }
    'LolLobbyTeamBuilderCeremonyV1': {
      /** Format: int64 */
      duration?: number
      name?: string
    }
    'LolLobbyTeamBuilderChampionBenchStateV1': {
      benchEnabled?: boolean
      championIds?: number[]
    }
    'LolLobbyTeamBuilderChampionSelectPreferences': {
      skins?: {
        [key: string]: number | undefined
      }
      spells?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLobbyTeamBuilderChampionSelectStateV1': {
      actionSetList?: {
        [key: string]: unknown | undefined
      }[]
      allowDuplicatePicks?: boolean
      allowOptingOutOfBanning?: boolean
      allowSkinSelection?: boolean
      battleBoostState?: LcuComponents['schemas']['LolLobbyTeamBuilderTeamBuilderBoostInfo']
      cells?: LcuComponents['schemas']['LolLobbyTeamBuilderCellsV1']
      ceremoniesByActionSetIndex?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      championBenchState?: LcuComponents['schemas']['LolLobbyTeamBuilderChampionBenchStateV1']
      /** Format: int32 */
      currentActionSetIndex?: number
      /** Format: int64 */
      currentTimeRemainingMillis?: number
      /** Format: int64 */
      currentTotalTimeMillis?: number
      entitledFeatureState?: LcuComponents['schemas']['LolLobbyTeamBuilderEntitledFeatureStateV1']
      inventoryDraft?: LcuComponents['schemas']['LolLobbyTeamBuilderTbdInventory']
      isSpectating?: boolean
      lcuSkipsSendingLoadoutsGco?: boolean
      /** Format: int32 */
      localPlayerCellId?: number
      lockedEventsState?: LcuComponents['schemas']['LolLobbyTeamBuilderLockedEventsStateV1']
      pickIntentClearedReason?: string
      rerollState?: LcuComponents['schemas']['LolLobbyTeamBuilderRerollStateV1']
      skipChampionSelect?: boolean
      subphase?: string
      teamChatRoomId?: string
      teamId?: string
      trades?: LcuComponents['schemas']['LolLobbyTeamBuilderTradeV1'][]
    }
    'LolLobbyTeamBuilderChampSelectAction': {
      /** Format: int64 */
      actorCellId?: number
      /** Format: int32 */
      championId?: number
      completed?: boolean
      /** Format: int64 */
      id?: number
      isAllyAction?: boolean
      isInProgress?: boolean
      type?: string
    }
    'LolLobbyTeamBuilderChampSelectChatRoomDetails': {
      chatRoomName?: string
      chatRoomPassword?: string
    }
    'LolLobbyTeamBuilderChampSelectDevPanelData': {
      /** Format: int64 */
      counter?: number
      /** Format: int64 */
      dtoIndex?: number
      /** Format: int32 */
      queueId?: number
      /** Format: int64 */
      teamIdSuffix?: number
    }
    'LolLobbyTeamBuilderChampSelectMySelection': {
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolLobbyTeamBuilderChampSelectPlayerSelection': {
      assignedPosition?: string
      /** Format: int64 */
      cellId?: number
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championPickIntent?: number
      entitledFeatureType?: string
      playerType?: string
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      team?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolLobbyTeamBuilderChampSelectReport': {
      categories?: string[]
      comment?: string
      location?: string
      match_token?: string
      offender_puuid?: string
    }
    'LolLobbyTeamBuilderChampSelectReportV2': {
      categories?: string[]
      comment?: string
      location?: string
      offenderId?: string
      token?: string
      tokenType?: string
    }
    'LolLobbyTeamBuilderChampSelectSession': {
      actions?: {
        [key: string]: unknown | undefined
      }[]
      allowBattleBoost?: boolean
      allowDuplicatePicks?: boolean
      allowLockedEvents?: boolean
      allowRerolling?: boolean
      allowSkinSelection?: boolean
      benchChampionIds?: number[]
      benchEnabled?: boolean
      /** Format: int32 */
      boostableSkinCount?: number
      chatDetails?: LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectChatRoomDetails']
      /** Format: int64 */
      counter?: number
      entitledFeatureState?: LcuComponents['schemas']['LolLobbyTeamBuilderEntitledFeatureState']
      /** Format: int64 */
      gameId?: number
      hasSimultaneousBans?: boolean
      hasSimultaneousPicks?: boolean
      isSpectating?: boolean
      /** Format: int64 */
      localPlayerCellId?: number
      /** Format: int32 */
      lockedEventIndex?: number
      myTeam?: LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectPlayerSelection'][]
      /** Format: int64 */
      recoveryCounter?: number
      /** Format: int32 */
      rerollsRemaining?: number
      skipChampionSelect?: boolean
      theirTeam?: LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectPlayerSelection'][]
      timer?: LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTimer']
      trades?: LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTradeContract'][]
    }
    'LolLobbyTeamBuilderChampSelectTimer': {
      /** Format: int64 */
      adjustedTimeLeftInPhase?: number
      /** Format: int64 */
      internalNowInEpochMs?: number
      isInfinite?: boolean
      phase?: string
      /** Format: int64 */
      totalTimeInPhase?: number
    }
    'LolLobbyTeamBuilderChampSelectTradeContract': {
      /** Format: int64 */
      cellId?: number
      /** Format: int64 */
      id?: number
      state?: LcuComponents['schemas']['LolLobbyTeamBuilderChampSelectTradeState']
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderChampSelectTradeState':
      | 'AVAILABLE'
      | 'BUSY'
      | 'INVALID'
      | 'RECEIVED'
      | 'SENT'
    'LolLobbyTeamBuilderCountdownTimer': {
      /** Format: int32 */
      counter?: number
      phaseName?: string
      /** Format: int64 */
      timer?: number
    }
    'LolLobbyTeamBuilderEntitledFeatureState': {
      /** Format: int32 */
      additionalRerolls?: number
      unlockedSkinIds?: number[]
    }
    'LolLobbyTeamBuilderEntitledFeatureStateV1': {
      /** Format: int32 */
      additionalRerolls?: number
      unlockedSkinsState?: LcuComponents['schemas']['LolLobbyTeamBuilderUnlockedSkinsStateV1']
    }
    'LolLobbyTeamBuilderGameflowGameClient': {
      running?: boolean
    }
    'LolLobbyTeamBuilderGameflowGameMap': {
      perPositionDisallowedSummonerSpells?: {
        [key: string]: LcuComponents['schemas']['LolLobbyTeamBuilderGameModeSpellList'] | undefined
      }
      perPositionRequiredSummonerSpells?: {
        [key: string]: LcuComponents['schemas']['LolLobbyTeamBuilderGameModeSpellList'] | undefined
      }
    }
    'LolLobbyTeamBuilderGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolLobbyTeamBuilderGameflowGameClient']
      map?: LcuComponents['schemas']['LolLobbyTeamBuilderGameflowGameMap']
    }
    'LolLobbyTeamBuilderGameModeSpellList': {
      spells?: number[]
    }
    'LolLobbyTeamBuilderGatekeeperRestricted': {
      gatekeeperRestrictions?: LcuComponents['schemas']['LolLobbyTeamBuilderGatekeeperRestriction'][]
    }
    'LolLobbyTeamBuilderGatekeeperRestriction': {
      payload?: string
      /** Format: int32 */
      queueId?: number
      reason?: string
      /** Format: int32 */
      remainingMillis?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolLobbyTeamBuilderLeaverBusterAbandoned': {
      abandonerName?: string
    }
    'LolLobbyTeamBuilderLobby': {
      allowablePremadeSizes?: number[]
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForStreaking?: boolean
      canStartMatchmaking?: boolean
      chatRoomId?: string
      chatRoomKey?: string
      invitationId?: string
      invitations?: LcuComponents['schemas']['LolLobbyTeamBuilderLobbyInvitation'][]
      isTeamBuilderManaged?: boolean
      localMember?: LcuComponents['schemas']['LolLobbyTeamBuilderLobbyMember']
      members?: LcuComponents['schemas']['LolLobbyTeamBuilderLobbyMember'][]
      premadeSizeAllowed?: boolean
      /** Format: int32 */
      queueId?: number
      removalReason?: LcuComponents['schemas']['LolLobbyTeamBuilderLobbyRemovedFromGameReason']
      requiredPositionCoverageMet?: boolean
      showPositionExcluder?: boolean
      showPositionSelector?: boolean
      specifiablePositionPreferences?: string[]
      wasKicked?: boolean
    }
    'LolLobbyTeamBuilderLobbyCountdownTimer': {
      /** Format: int32 */
      counter?: number
      phaseName?: string
      /** Format: int64 */
      timer?: number
    }
    'LolLobbyTeamBuilderLobbyInvitation': {
      invitationMetaData?: {
        [key: string]: unknown | undefined
      }
    }
    'LolLobbyTeamBuilderLobbyMember': {
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForSoloing?: boolean
      autoFillProtectedForStreaking?: boolean
      canInviteOthers?: boolean
      excludedPositionPreference?: string
      /** Format: int64 */
      id?: number
      isOwner?: boolean
      positionPreferences?: LcuComponents['schemas']['LolLobbyTeamBuilderLobbyPositionPreferences']
      showPositionExcluder?: boolean
    }
    'LolLobbyTeamBuilderLobbyPositionPreferences': {
      firstPreference?: string
      secondPreference?: string
    }
    'LolLobbyTeamBuilderLobbyPositionPreferencesV2': {
      excludedPreference?: string
      firstPreference?: string
      secondPreference?: string
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderLobbyRemovedFromGameReason':
      | 'None'
      | 'Kicked'
      | 'Disbanded'
      | 'Left'
      | 'ServiceError'
      | 'Other'
      | 'Timeout'
      | 'GameStartError'
      | 'ServiceShutdown'
    'LolLobbyTeamBuilderLockedEventsStateV1': {
      allowLockedEvents?: boolean
      /** Format: int32 */
      lockedEventIndex?: number
    }
    'LolLobbyTeamBuilderLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      state?: LcuComponents['schemas']['LolLobbyTeamBuilderLoginSessionState']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolLobbyTeamBuilderMatchmakingDodgeData': {
      /** Format: int64 */
      dodgerId?: number
      state?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingDodgeState']
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderMatchmakingDodgeState':
      | 'Invalid'
      | 'PartyDodged'
      | 'StrangerDodged'
      | 'TournamentDodged'
    /** @enum {string} */
    'LolLobbyTeamBuilderMatchmakingDodgeWarning': 'None' | 'Warning' | 'Penalty'
    'LolLobbyTeamBuilderMatchmakingLowPriorityData': {
      bustedLeaverAccessToken?: string
      penalizedSummonerIds?: number[]
      /** Format: double */
      penaltyTime?: number
      /** Format: double */
      penaltyTimeRemaining?: number
    }
    'LolLobbyTeamBuilderMatchmakingReadyCheckResource': {
      declinerIds?: number[]
      dodgeWarning?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingDodgeWarning']
      playerResponse?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingReadyCheckResponse']
      state?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingReadyCheckState']
      /** Format: float */
      timer?: number
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderMatchmakingReadyCheckResponse': 'None' | 'Accepted' | 'Declined'
    /** @enum {string} */
    'LolLobbyTeamBuilderMatchmakingReadyCheckState':
      | 'Invalid'
      | 'InProgress'
      | 'EveryoneReady'
      | 'StrangerNotReady'
      | 'PartyNotReady'
      | 'Error'
    'LolLobbyTeamBuilderMatchmakingSearch': {
      searchState?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingSearchState']
    }
    'LolLobbyTeamBuilderMatchmakingSearchErrorResource': {
      errorType?: string
      /** Format: int32 */
      id?: number
      message?: string
      /** Format: int64 */
      penalizedSummonerId?: number
      /** Format: double */
      penaltyTimeRemaining?: number
    }
    'LolLobbyTeamBuilderMatchmakingSearchResource': {
      dodgeData?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingDodgeData']
      errors?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingSearchErrorResource'][]
      /** Format: float */
      estimatedQueueTime?: number
      isCurrentlyInQueue?: boolean
      lobbyId?: string
      lowPriorityData?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingLowPriorityData']
      /** Format: int32 */
      queueId?: number
      readyCheck?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingReadyCheckResource']
      searchState?: LcuComponents['schemas']['LolLobbyTeamBuilderMatchmakingSearchState']
      /** Format: float */
      timeInQueue?: number
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderMatchmakingSearchState':
      | 'Invalid'
      | 'AbandonedLowPriorityQueue'
      | 'Canceled'
      | 'Searching'
      | 'Found'
      | 'Error'
      | 'ServiceError'
      | 'ServiceShutdown'
    'LolLobbyTeamBuilderQueue': {
      allowablePremadeSizes?: number[]
      areFreeChampionsAllowed?: boolean
      assetMutator?: string
      category?: LcuComponents['schemas']['LolLobbyTeamBuilderQueueGameCategory']
      /** Format: int32 */
      championsRequiredToPlay?: number
      description?: string
      detailedDescription?: string
      gameMode?: string
      gameTypeConfig?: LcuComponents['schemas']['LolLobbyTeamBuilderQueueGameTypeConfig']
      /** Format: int32 */
      id?: number
      isRanked?: boolean
      isTeamBuilderManaged?: boolean
      isTeamOnly?: boolean
      /** Format: int64 */
      lastToggledOffTime?: number
      /** Format: int64 */
      lastToggledOnTime?: number
      /** Format: int32 */
      mapId?: number
      /** Format: int32 */
      maximumParticipantListSize?: number
      /** Format: int32 */
      maxLevel?: number
      /** Format: int32 */
      maxSummonerLevelForFirstWinOfTheDay?: number
      /** Format: int32 */
      minimumParticipantListSize?: number
      /** Format: int32 */
      minLevel?: number
      name?: string
      /** Format: int32 */
      numPlayersPerTeam?: number
      queueAvailability?: LcuComponents['schemas']['LolLobbyTeamBuilderQueueAvailability']
      queueRewards?: LcuComponents['schemas']['LolLobbyTeamBuilderQueueReward']
      removalFromGameAllowed?: boolean
      /** Format: int32 */
      removalFromGameDelayMinutes?: number
      shortName?: string
      showPositionSelector?: boolean
      spectatorEnabled?: boolean
      type?: string
    }
    /** @enum {string} */
    'LolLobbyTeamBuilderQueueAvailability':
      | 'Available'
      | 'PlatformDisabled'
      | 'DoesntMeetRequirements'
    /** @enum {string} */
    'LolLobbyTeamBuilderQueueGameCategory': 'None' | 'Custom' | 'PvP' | 'VersusAi' | 'Alpha'
    'LolLobbyTeamBuilderQueueGameTypeConfig': {
      advancedLearningQuests?: boolean
      allowTrades?: boolean
      banMode?: string
      /** Format: int32 */
      banTimerDuration?: number
      battleBoost?: boolean
      crossTeamChampionPool?: boolean
      deathMatch?: boolean
      doNotRemove?: boolean
      duplicatePick?: boolean
      exclusivePick?: boolean
      /** Format: int64 */
      id?: number
      learningQuests?: boolean
      /** Format: int32 */
      mainPickTimerDuration?: number
      /** Format: int32 */
      maxAllowableBans?: number
      name?: string
      onboardCoopBeginner?: boolean
      pickMode?: string
      /** Format: int32 */
      postPickTimerDuration?: number
      reroll?: boolean
      teamChampionPool?: boolean
    }
    'LolLobbyTeamBuilderQueueReward': {
      isChampionPointsEnabled?: boolean
      isIpEnabled?: boolean
      isXpEnabled?: boolean
      partySizeIpRewards?: number[]
    }
    'LolLobbyTeamBuilderRerollStateV1': {
      allowRerolling?: boolean
      /** Format: int32 */
      rerollsRemaining?: number
    }
    'LolLobbyTeamBuilderSettingCategoryResource': {
      data?: LcuComponents['schemas']['LolLobbyTeamBuilderChampionSelectPreferences']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolLobbyTeamBuilderTbdInventory': {
      allChampionIds?: number[]
      disabledChampionIds?: number[]
      initialSpellIds?: number[]
      lastSelectedSkinIdByChampionId?: {
        [key: string]: number | undefined
      }
      skinIds?: number[]
      spellIds?: number[]
    }
    'LolLobbyTeamBuilderTBDMatchmakingState': {
      backwardsTransitionReason?: string
      /** Format: int64 */
      estimatedMatchmakingTimeMillis?: number
      /** Format: int64 */
      timeInMatchmakingMillis?: number
    }
    'LolLobbyTeamBuilderTbLobbyStateResource': {
      afkCheckState?: LcuComponents['schemas']['LolLobbyTeamBuilderAfkCheckStateV1']
      championSelectState?: LcuComponents['schemas']['LolLobbyTeamBuilderChampionSelectStateV1']
      /** Format: int32 */
      counter?: number
      /** Format: int64 */
      gameId?: number
      matchmakingState?: LcuComponents['schemas']['LolLobbyTeamBuilderTBDMatchmakingState']
      phaseName?: string
      /** Format: int32 */
      queueId?: number
      /** Format: int32 */
      recoveryCounter?: number
    }
    'LolLobbyTeamBuilderTbRemovedFromServiceNotification': {
      backwardsTransitionInfo?: LcuComponents['schemas']['LolLobbyTeamBuilderBackwardsTransitionInfoV1']
      reason?: string
    }
    'LolLobbyTeamBuilderTeamBoost': {
      availableSkins?: number[]
      /** Format: int64 */
      ipReward?: number
      /** Format: int64 */
      ipRewardForPurchaser?: number
      /** Format: int64 */
      price?: number
      skinUnlockMode?: string
      /** Format: int64 */
      summonerId?: number
      unlocked?: boolean
    }
    'LolLobbyTeamBuilderTeamBuilderBoostInfo': {
      /** Format: int64 */
      activatorCellId?: number
      allowBattleBoost?: boolean
      battleBoostActivated?: boolean
      /** Format: int32 */
      boostableSkinCount?: number
      /** Format: int64 */
      cost?: number
      unlockedSkinIds?: number[]
    }
    'LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse': {
      payload?: LcuComponents['schemas']['LolLobbyTeamBuilderTbLobbyStateResource']
      status?: string
    }
    'LolLobbyTeamBuilderTradeV1': {
      /** Format: int32 */
      cellId?: number
      /** Format: int32 */
      id?: number
      state?: string
    }
    'LolLobbyTeamBuilderUnlockedSkinsStateV1': {
      unlockedSkinIds?: number[]
    }
    'LolLobbyUserInfoToken': {
      userInfo?: string
    }
    'LolLobbyUserResource': {
      lol?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      summonerId?: number
    }
    'LolLoginAccessToken': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    'LolLoginAccountStateResource': {
      state?: LcuComponents['schemas']['LolLoginAccountStateType']
    }
    /** @enum {string} */
    'LolLoginAccountStateType':
      | 'CREATING'
      | 'ENABLED'
      | 'TRANSFERRING_OUT'
      | 'TRANSFERRING_IN'
      | 'TRANSFERRED_OUT'
      | 'GENERATING'
    'LolLoginAuthorization': {
      /** Format: int64 */
      currentAccountId?: number
      currentPlatformId?: string
      subject?: string
    }
    /** @enum {string} */
    'LolLoginConfigReadinessEnum': 'NotReady' | 'Ready' | 'Disabled'
    'LolLoginConfigStatus': {
      readiness?: LcuComponents['schemas']['LolLoginConfigReadinessEnum']
    }
    /** @enum {string} */
    'LolLoginConfigType': 'public' | 'player'
    'LolLoginCrashReportingEnvironment': {
      environment?: string
      userId?: string
      userName?: string
    }
    'LolLoginIdToken': {
      /** Format: int64 */
      expiry?: number
      token?: string
    }
    'LolLoginLcdsResponse': {
      body?: {
        [key: string]: unknown | undefined
      }
      typeName?: string
    }
    'LolLoginLcdsServiceProxyResponse': {
      compressedPayload?: boolean
      messageId?: string
      methodName?: string
      payload?: string
      serviceName?: string
      status?: string
    }
    /** @enum {string} */
    'LolLoginLeagueSessionStatus':
      | 'UNINITIALIZED'
      | 'INITIALIZED'
      | 'EXPIRED'
      | 'DUPLICATED'
      | 'ANTI_ADDICTION_EXPIRED'
    'LolLoginLeagueSessionTokenEnvelope': {
      logoutOnFailure?: boolean
      token?: string
    }
    /** @enum {string} */
    'LolLoginLoginConnectionMode': 'Preparing' | 'Legacy' | 'Partner' | 'RiotClient'
    'LolLoginLoginConnectionState': {
      isPartnerRiotClient?: boolean
      isUsingDeveloperAuthToken?: boolean
      mode?: LcuComponents['schemas']['LolLoginLoginConnectionMode']
    }
    'LolLoginLoginError': {
      description?: string
      id?: string
      messageId?: string
    }
    'LolLoginLoginQueue': {
      /** Format: int64 */
      approximateWaitTimeSeconds?: number
      /** Format: int64 */
      estimatedPositionInQueue?: number
      isPositionCapped?: boolean
    }
    'LolLoginLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      error?: LcuComponents['schemas']['LolLoginLoginError']
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      isInLoginQueue?: boolean
      isNewPlayer?: boolean
      puuid?: string
      state?: LcuComponents['schemas']['LolLoginLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
      userAuthToken?: string
      username?: string
    }
    /** @enum {string} */
    'LolLoginLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolLoginLoginSessionWallet': {
      /** Format: int64 */
      ip?: number
      /** Format: int64 */
      rp?: number
    }
    'LolLoginPlatformGeneratedCredentials': {
      gasToken?: {
        [key: string]: unknown | undefined
      }
      password?: string
      username?: string
    }
    'LolLoginRSOConfigReadyState': {
      ready?: boolean
    }
    'LolLoginRSOPlayerCredentials': {
      password?: string
      platformId?: string
      username?: string
    }
    'LolLoginSummonerCreatedResource': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolLoginSummonerSessionResource': {
      displayName?: string
      isNewPlayer?: boolean
      /** Format: int64 */
      summonerId?: number
    }
    'LolLoginUsernameAndPassword': {
      password?: string
      username?: string
    }
    'LolLootAccountIdAndSummonerId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolLootCollectionsChampionMinimal': {
      /** Format: int32 */
      id?: number
      ownership?: LcuComponents['schemas']['LolLootCollectionsOwnership']
    }
    'LolLootCollectionsChampionSkinMinimal': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolLootCollectionsOwnership']
      splashPath?: string
      tilePath?: string
    }
    'LolLootCollectionsEmote': {
      /** Format: int64 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolLootInventoryOwnership']
    }
    'LolLootCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolLootCollectionsRental']
    }
    'LolLootCollectionsRental': {
      rented?: boolean
    }
    'LolLootCollectionsStatstone': {
      /** Format: int64 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolLootInventoryOwnership']
    }
    'LolLootCollectionsSummonerIcon': {
      /** Format: int32 */
      itemId?: number
    }
    'LolLootCollectionsWardSkin': {
      /** Format: int64 */
      id?: number
      name?: string
      ownership?: LcuComponents['schemas']['LolLootCollectionsOwnership']
      wardImagePath?: string
      wardShadowImagePath?: string
    }
    'LolLootContextMenu': {
      actionType?: string
      enabled?: boolean
      /** Format: int32 */
      essenceQuantity?: number
      essenceType?: string
      name?: string
      recipeContextMenuAction?: string
      recipeDescription?: string
      requiredOthers?: string
      /** Format: int32 */
      requiredOthersCount?: number
      requiredOthersName?: string
      requiredTokens?: string
    }
    'LolLootCounter': {
      direction?: string
      groupId?: string
      id?: string
      name?: string
      /** Format: int64 */
      startValue?: number
    }
    'LolLootCounterInstance': {
      counterId?: string
      /** Format: int64 */
      counterValue?: number
      groupId?: string
      ownerId?: string
      productId?: string
    }
    'LolLootCurrencyConfiguration': {
      currenciesUsingCapWallets?: string[]
    }
    'LolLootEntityInstance': {
      counters?: LcuComponents['schemas']['LolLootCounterInstance'][]
      groupId?: string
      milestones?: LcuComponents['schemas']['LolLootMilestoneInstance'][]
    }
    'LolLootGameDataSummonerEmote': {
      description?: string
      /** Format: int64 */
      id?: number
      inventoryIcon?: string
      name?: string
    }
    'LolLootGameDataSummonerIcon': {
      /** Format: int32 */
      id?: number
      imagePath?: string
    }
    /** @enum {string} */
    'LolLootGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolLootGameflowSession': {
      phase?: LcuComponents['schemas']['LolLootGameflowPhase']
    }
    'LolLootGrantorDescription': {
      appName?: string
      entityId?: string
    }
    /** @enum {string} */
    'LolLootGrantStatus': 'PENDING_FULFILLMENT' | 'PENDING_SELECTION' | 'FULFILLED' | 'FAILED'
    'LolLootGroup': {
      counters?: LcuComponents['schemas']['LolLootCounter'][]
      id?: string
      milestones?: LcuComponents['schemas']['LolLootMilestone'][]
      name?: string
      productId?: string
      repeat?: LcuComponents['schemas']['LolLootRepeat']
    }
    /** @enum {string} */
    'LolLootInventoryOwnership': 'OWNED' | 'RENTED' | 'F2P'
    /** @enum {string} */
    'LolLootItemOwnershipStatus': 'NONE' | 'FREE' | 'RENTAL' | 'OWNED'
    'LolLootLedgerConfigGdsResource': {
      counters?: LcuComponents['schemas']['LolLootMilestonesLedgerCounterGdsResource'][]
      id?: string
      milestones?: LcuComponents['schemas']['LolLootLedgerConfigMilestoneGdsResource'][]
      name?: string
      repeat?: LcuComponents['schemas']['LolLootMilestonesLedgerConfigRepeatGdsResource']
    }
    'LolLootLedgerConfigMilestoneGdsResource': {
      counter?: LcuComponents['schemas']['LolLootMilestonesLedgerCounterGdsResource']
      id?: string
      name?: string
      properties?: LcuComponents['schemas']['LolLootLedgerConfigMilestonePropertiesGdsResource'][]
      /** Format: int64 */
      triggerValue?: number
    }
    'LolLootLedgerConfigMilestonePropertiesGdsResource': {
      description?: string
      id?: string
      name?: string
      rewards?: LcuComponents['schemas']['LolLootLedgerConfigMilestoneRewardGdsResource'][]
      rewardStrategy?: string
    }
    'LolLootLedgerConfigMilestoneRewardGdsResource': {
      id?: string
      legacyLootItem?: string
      lootItemToGrant?: LcuComponents['schemas']['LolLootMilestoneLootItemRewardGdsResource']
      /** Format: int32 */
      quantity?: number
      rewardType?: string
    }
    'LolLootLoginDataPacket': {
      simpleMessages?: LcuComponents['schemas']['LolLootLoginSimpleMessage'][]
    }
    'LolLootLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolLootLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolLootLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolLootLoginSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LolLootLootBundleContentGdsResource': {
      localizedDescription?: string
    }
    'LolLootLootBundleGdsResource': {
      contents?: LcuComponents['schemas']['LolLootLootBundleContentGdsResource'][]
      description?: string
      descriptionLong?: string
      id?: string
      image?: string
    }
    'LolLootLootDataGdsResource': {
      LootBundles?: LcuComponents['schemas']['LolLootLootBundleGdsResource'][]
      LootItems?: LcuComponents['schemas']['LolLootLootItemGdsResource'][]
      LootRecipes?: LcuComponents['schemas']['LolLootLootRecipeGdsResource'][]
      LootTables?: LcuComponents['schemas']['LolLootLootTableGdsResource'][]
    }
    'LolLootLootDescription': {
      childLootTableNames?: string[]
      childrenDescriptions?: LcuComponents['schemas']['LolLootLootDescription'][]
      imagePath?: string
      localizedDescription?: string
      localizedDescriptionLong?: string
      lootName?: string
    }
    'LolLootLootDropTableEntryGdsResource': {
      localizedDescription?: string
      lootId?: string
    }
    'LolLootLootGrantNotification': {
      /** Format: int64 */
      accountId?: number
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      gameId?: number
      /** Format: int64 */
      id?: number
      lootName?: string
      messageKey?: string
      msgId?: string
      playerGrade?: string
      /** Format: int64 */
      playerId?: number
    }
    'LolLootLootItem': {
      asset?: string
      displayCategories?: string
      /** Format: int64 */
      expiryTime?: number
      lootName?: string
      rarity?: string
      /** Format: int32 */
      rentalGames?: number
      /** Format: int64 */
      rentalSeconds?: number
      /** Format: int32 */
      storeItemId?: number
      tags?: string
      type?: string
      upgradeLootName?: string
      /** Format: int32 */
      value?: number
    }
    'LolLootLootItemGdsResource': {
      autoRedeem?: boolean
      description?: string
      endDate?: string
      id?: string
      image?: string
      /** Format: int32 */
      lifetimeMax?: number
      /** Format: int32 */
      mappedStoreId?: number
      name?: string
      rarity?: LcuComponents['schemas']['LolLootLootRarity']
      recipeMenuActive?: boolean
      recipeMenuSubtitle?: string
      recipeMenuTitle?: string
      startDate?: string
      type?: LcuComponents['schemas']['LolLootLootType']
    }
    'LolLootLootMilestone': {
      id?: string
      rewards?: LcuComponents['schemas']['LolLootLootMilestoneReward'][]
      /** Format: int64 */
      threshold?: number
    }
    /** @enum {string} */
    'LolLootLootMilestoneClaimStatus': 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'
    'LolLootLootMilestoneRepeat': {
      /** Format: float */
      multiplier?: number
      /** Format: int32 */
      repeatCount?: number
      /** Format: int32 */
      repeatScope?: number
    }
    'LolLootLootMilestoneReward': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
      lootItem?: LcuComponents['schemas']['LolLootPlayerLoot']
      /** Format: int32 */
      quantity?: number
      rewardGroupId?: string
      rewardType?: string
    }
    'LolLootLootMilestones': {
      active?: boolean
      endDate?: string
      errorCachingMilestoneSet?: boolean
      id?: string
      ledgerConfigId?: string
      lootItems?: string[]
      milestones?: LcuComponents['schemas']['LolLootLootMilestone'][]
      recipes?: string[]
      repeat?: LcuComponents['schemas']['LolLootLootMilestoneRepeat']
      startDate?: string
      storeGroupTitle?: string
    }
    'LolLootLootMilestonesClaimResponse': {
      claimedMilestones?: string[]
      lootMilestoneSetId?: string
      status?: LcuComponents['schemas']['LolLootLootMilestoneClaimStatus']
    }
    'LolLootLootMilestonesCounter': {
      /** Format: int64 */
      completedLoops?: number
      /** Format: int64 */
      counterValue?: number
      lootMilestonesId?: string
      readyToClaimMilestones?: string[]
    }
    'LolLootLootMilestonesDataGdsResource': {
      endDate?: string
      id?: string
      ledgerConfig?: LcuComponents['schemas']['LolLootLedgerConfigGdsResource']
      recipes?: LcuComponents['schemas']['LolLootMilestonesRecipeGdsResource'][]
      startDate?: string
      storeGroupTitle?: string
    }
    'LolLootLootOddsResponse': {
      children?: LcuComponents['schemas']['LolLootLootOddsResponse'][]
      /** Format: double */
      dropRate?: number
      label?: string
      lootId?: string
      /** Format: int32 */
      lootOrder?: number
      parentId?: string
      /** Format: int32 */
      quantity?: number
    }
    'LolLootLootOutputGdsResource': {
      localizedDescription?: string
      lootId?: string
    }
    /** @enum {string} */
    'LolLootLootRarity': 'Default' | 'Epic' | 'Legendary' | 'Mythic' | 'Ultimate'
    'LolLootLootRecipeGdsResource': {
      contextMenuText?: string
      description?: string
      hasVisibleLootOdds?: boolean
      id?: string
      imagePath?: string
      introVideoPath?: string
      loopVideoPath?: string
      outputs?: LcuComponents['schemas']['LolLootLootOutputGdsResource'][]
      outroVideoPath?: string
      requirementText?: string
    }
    'LolLootLootTableGdsResource': {
      description?: string
      descriptionLong?: string
      dropChance?: LcuComponents['schemas']['LolLootLootDropTableEntryGdsResource'][]
      id?: string
      image?: string
    }
    /** @enum {string} */
    'LolLootLootType':
      | 'Chest'
      | 'Currency'
      | 'Material'
      | 'WardSkin'
      | 'Skin'
      | 'Skin_Rental'
      | 'SummonerIcon'
      | 'Companion'
      | 'Egg'
      | 'Egg_Color'
      | 'Statstone'
      | 'Statstone_Shard'
      | 'Boost'
      | 'SkinBorder'
      | 'TFT_Map_Skin'
      | 'TFT_Damage_Skin'
    'LolLootMilestone': {
      counterId?: string
      groupId?: string
      id?: string
      name?: string
      properties?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      triggerValue?: number
    }
    'LolLootMilestoneInstance': {
      counterId?: string
      groupId?: string
      milestoneId?: string
      ownerId?: string
      productId?: string
      /** Format: int32 */
      repeatSequence?: number
      triggered?: boolean
      /** Format: int64 */
      triggerValue?: number
    }
    'LolLootMilestoneLootItemRewardGdsResource': {
      internalName?: string
    }
    'LolLootMilestonesLedgerConfigRepeatGdsResource': {
      name?: LcuComponents['schemas']['LolLootMilestonesLedgerGroupRepeatGdsResource']
    }
    'LolLootMilestonesLedgerCounterGdsResource': {
      direction?: string
      id?: string
      name?: string
      /** Format: int32 */
      startValue?: number
    }
    'LolLootMilestonesLedgerGroupRepeatGdsResource': {
      /** Format: int32 */
      Count?: number
      /** Format: float */
      Multiplier?: number
      /** Format: int32 */
      Scope?: number
    }
    'LolLootMilestonesRecipeGdsResource': {
      name?: string
    }
    'LolLootPlayerLoot': {
      asset?: string
      /** Format: int32 */
      count?: number
      disenchantLootName?: string
      /** Format: int32 */
      disenchantValue?: number
      displayCategories?: string
      /** Format: int64 */
      expiryTime?: number
      isNew?: boolean
      isRental?: boolean
      itemDesc?: string
      itemStatus?: LcuComponents['schemas']['LolLootItemOwnershipStatus']
      localizedDescription?: string
      localizedName?: string
      localizedRecipeSubtitle?: string
      localizedRecipeTitle?: string
      lootId?: string
      lootName?: string
      parentItemStatus?: LcuComponents['schemas']['LolLootItemOwnershipStatus']
      /** Format: int32 */
      parentStoreItemId?: number
      rarity?: string
      redeemableStatus?: LcuComponents['schemas']['LolLootRedeemableStatus']
      refId?: string
      /** Format: int32 */
      rentalGames?: number
      /** Format: int64 */
      rentalSeconds?: number
      shadowPath?: string
      splashPath?: string
      /** Format: int32 */
      storeItemId?: number
      tags?: string
      tilePath?: string
      type?: string
      upgradeEssenceName?: string
      /** Format: int32 */
      upgradeEssenceValue?: number
      upgradeLootName?: string
      /** Format: int32 */
      value?: number
    }
    'LolLootPlayerLootDelta': {
      /** Format: int32 */
      deltaCount?: number
      playerLoot?: LcuComponents['schemas']['LolLootPlayerLoot']
    }
    'LolLootPlayerLootMap': {
      playerLoot?: {
        [key: string]: LcuComponents['schemas']['LolLootPlayerLoot'] | undefined
      }
      /** Format: int64 */
      version?: number
    }
    'LolLootPlayerLootNotification': {
      acknowledged?: boolean
      /** Format: int32 */
      count?: number
      id?: string
    }
    'LolLootPlayerLootUpdate': {
      added?: LcuComponents['schemas']['LolLootPlayerLootDelta'][]
      redeemed?: LcuComponents['schemas']['LolLootPlayerLootDelta'][]
      removed?: LcuComponents['schemas']['LolLootPlayerLootDelta'][]
    }
    'LolLootRecipeMenuConfig': {
      alwaysShowLootIds?: string[]
      enabled?: boolean
      lootItemsUsingBreakoutRecipeMenu?: string[]
    }
    'LolLootRecipeMetadata': {
      bonusDescriptions?: LcuComponents['schemas']['LolLootLootDescription'][]
      guaranteedDescriptions?: LcuComponents['schemas']['LolLootLootDescription'][]
      tooltipsDisabled?: boolean
    }
    'LolLootRecipeOutput': {
      lootName?: string
      /** Format: int32 */
      quantity?: number
    }
    'LolLootRecipeSlot': {
      lootIds?: string[]
      /** Format: int32 */
      quantity?: number
      /** Format: int32 */
      slotNumber?: number
      tags?: string
    }
    'LolLootRecipeWithMilestones': {
      contextMenuText?: string
      crafterName?: string
      description?: string
      displayCategories?: string
      imagePath?: string
      introVideoPath?: string
      loopVideoPath?: string
      lootMilestoneIds?: string[]
      metadata?: LcuComponents['schemas']['LolLootRecipeMetadata']
      outputs?: LcuComponents['schemas']['LolLootRecipeOutput'][]
      outroVideoPath?: string
      recipeName?: string
      requirementText?: string
      slots?: LcuComponents['schemas']['LolLootRecipeSlot'][]
      type?: string
    }
    /** @enum {string} */
    'LolLootRedeemableStatus':
      | 'UNKNOWN'
      | 'REDEEMABLE'
      | 'REDEEMABLE_RENTAL'
      | 'NOT_REDEEMABLE'
      | 'NOT_REDEEMABLE_RENTAL'
      | 'ALREADY_OWNED'
      | 'ALREADY_RENTED'
      | 'CHAMPION_NOT_OWNED'
      | 'SKIN_NOT_OWNED'
    'LolLootRegionLocale': {
      locale?: string
      region?: string
    }
    'LolLootRepeat': {
      /** Format: int32 */
      count?: number
      /** Format: float */
      multiplier?: number
      /** Format: int32 */
      scope?: number
    }
    'LolLootRequestDTO-SelectionRequestDTO': {
      data?: LcuComponents['schemas']['LolLootSelectionRequestDTO']
      metadata?: LcuComponents['schemas']['LolLootRequestMetadataDTO']
    }
    'LolLootRequestMetadataDTO': {
      transactionId?: string
    }
    'LolLootResponseDTO-SvcRewardGrant': {
      data?: LcuComponents['schemas']['LolLootSvcRewardGrant']
      metadata?: LcuComponents['schemas']['LolLootResponseMetadataDTO']
    }
    'LolLootResponseDTO-vector-SvcRewardGrant': {
      data?: LcuComponents['schemas']['LolLootSvcRewardGrant'][]
      metadata?: LcuComponents['schemas']['LolLootResponseMetadataDTO']
    }
    'LolLootResponseDTO-vector-SvcRewardGroup': {
      data?: LcuComponents['schemas']['LolLootSvcRewardGroup'][]
      metadata?: LcuComponents['schemas']['LolLootResponseMetadataDTO']
    }
    'LolLootResponseMetadataDTO': Record<string, never>
    'LolLootReward': {
      fulfillmentSource?: string
      id?: string
      itemId?: string
      itemType?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
    }
    'LolLootRewardGrant': {
      info?: LcuComponents['schemas']['LolLootSvcRewardGrant']
      rewardGroup?: LcuComponents['schemas']['LolLootSvcRewardGroup']
    }
    'LolLootRewardsConfig': {
      Enabled?: boolean
    }
    /** @enum {string} */
    'LolLootRewardStatus': 'PENDING' | 'FULFILLED' | 'FAILED'
    /** @enum {string} */
    'LolLootRewardStrategy': 'ALL' | 'RANDOM' | 'SELECTION'
    'LolLootRMSPayload': {
      affinities?: string[]
      productId?: string
    }
    'LolLootSelectionRequestDTO': {
      rewardGroupId?: string
      selections?: string[]
    }
    'LolLootSelectionStrategyConfig': {
      /** Format: int32 */
      maxSelectionsAllowed?: number
      /** Format: int32 */
      minSelectionsAllowed?: number
    }
    'LolLootSummoner': {
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolLootSvcRewardGrant': {
      granteeId?: string
      grantElements?: LcuComponents['schemas']['LolLootSvcRewardGrantElement'][]
      grantorDescription?: LcuComponents['schemas']['LolLootGrantorDescription']
      id?: string
      rewardGroupId?: string
      selectedIds?: string[]
      status?: LcuComponents['schemas']['LolLootGrantStatus']
      viewed?: boolean
    }
    'LolLootSvcRewardGrantElement': {
      elementId?: string
      fulfillmentSource?: string
      itemId?: string
      itemType?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
      status?: LcuComponents['schemas']['LolLootRewardStatus']
    }
    'LolLootSvcRewardGroup': {
      active?: boolean
      childRewardGroupIds?: string[]
      id?: string
      internalName?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      productId?: string
      rewards?: LcuComponents['schemas']['LolLootReward'][]
      rewardStrategy?: LcuComponents['schemas']['LolLootRewardStrategy']
      selectionStrategyConfig?: LcuComponents['schemas']['LolLootSelectionStrategyConfig']
      types?: string[]
    }
    'LolLootVerboseLootOddsResponse': {
      chanceToContain?: LcuComponents['schemas']['LolLootLootOddsResponse'][]
      checksOwnership?: boolean
      guaranteedToContain?: LcuComponents['schemas']['LolLootLootOddsResponse'][]
      hasPityRules?: boolean
      lootItem?: LcuComponents['schemas']['LolLootPlayerLoot']
      recipeName?: string
    }
    'LolLoyaltyAccessToken': {
      token?: string
    }
    'LolLoyaltyGlobalRewards': {
      allChampions?: boolean
    }
    'LolLoyaltyInventoryDTO': {
      items?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
    }
    'LolLoyaltyInventoryItemDTO': {
      inventoryType?: string
      loyalty?: boolean
    }
    'LolLoyaltyInventoryResponseDTO': {
      data?: LcuComponents['schemas']['LolLoyaltyInventoryDTO']
    }
    'LolLoyaltyLoginSession': {
      /** Format: int64 */
      accountId?: number
      puuid?: string
      state?: LcuComponents['schemas']['LolLoyaltyLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolLoyaltyLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolLoyaltyLoyaltyRewards': {
      championIds?: number[]
      /** Format: int32 */
      freeRewardedChampionsCount?: number
      /** Format: int32 */
      freeRewardedSkinsCount?: number
      global?: LcuComponents['schemas']['LolLoyaltyGlobalRewards']
      /** Format: int32 */
      ipBoost?: number
      /** Format: int32 */
      loyaltyTFTCompanionCount?: number
      /** Format: int32 */
      loyaltyTFTMapSkinCount?: number
      skinIds?: number[]
      /** Format: int32 */
      xpBoost?: number
    }
    /** @enum {string} */
    'LolLoyaltyLoyaltyStatus':
      | 'LEGACY'
      | 'REWARDS_GRANT'
      | 'EXPIRY'
      | 'CHANGE'
      | 'REVOKE'
      | 'DISABLED'
    'LolLoyaltyLoyaltyStatusNotification': {
      rewards?: LcuComponents['schemas']['LolLoyaltyLoyaltyRewards']
      status?: LcuComponents['schemas']['LolLoyaltyLoyaltyStatus']
    }
    'LolLoyaltyRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'LolLoyaltyRmsEntitlementPayload': {
      entitlementTypeId?: string
      itemId?: string
      itemTypeId?: string
      resourceOperation?: string
    }
    'LolMapsGameModeSpellList': {
      spells?: number[]
    }
    'LolMapsMaps': {
      assets?: {
        [key: string]: string | undefined
      }
      categorizedContentBundles?: {
        [key: string]: unknown | undefined
      }
      description?: string
      gameMode?: string
      gameModeDescription?: string
      gameModeName?: string
      gameModeShortName?: string
      gameMutator?: string
      /** Format: int64 */
      id?: number
      isDefault?: boolean
      isRGM?: boolean
      locStrings?: {
        [key: string]: string | undefined
      }
      mapStringId?: string
      name?: string
      perPositionDisallowedSummonerSpells?: {
        [key: string]: LcuComponents['schemas']['LolMapsGameModeSpellList'] | undefined
      }
      perPositionRequiredSummonerSpells?: {
        [key: string]: LcuComponents['schemas']['LolMapsGameModeSpellList'] | undefined
      }
      platformId?: string
      platformName?: string
      properties?: {
        [key: string]: unknown | undefined
      }
      tutorialCards?: LcuComponents['schemas']['LolMapsTutorialCard'][]
    }
    'LolMapsTutorialCard': {
      description?: string
      footer?: string
      header?: string
      imagePath?: string
    }
    'LolMatchHistoryAcsEndPoint': {
      url?: string
    }
    'LolMatchHistoryAcsPlayer': {
      /** Format: int64 */
      accountId?: number
      platformId?: string
    }
    'LolMatchHistoryGAMHSMatchHistoryData': {
      json?: {
        [key: string]: unknown | undefined
      }
      metadata?: LcuComponents['schemas']['LolMatchHistoryGAMHSMatchHistoryMetadata']
    }
    'LolMatchHistoryGAMHSMatchHistoryList': {
      active_puuid?: string
      games?: LcuComponents['schemas']['LolMatchHistoryGAMHSMatchHistoryData'][]
    }
    'LolMatchHistoryGAMHSMatchHistoryMetadata': {
      data_version?: number
      info_type?: string
      match_id?: string
      participants?: string[]
      private?: boolean
      product?: string
      tags?: string[]
      /** Format: int64 */
      timestamp?: number
    }
    'LolMatchHistoryLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      state?: LcuComponents['schemas']['LolMatchHistoryLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolMatchHistoryLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolMatchHistoryMatchHistoryEvent': {
      assistingParticipantIds?: number[]
      buildingType?: string
      itemId?: number
      killerId?: number
      laneType?: string
      monsterSubType?: string
      monsterType?: string
      participantId?: number
      position?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryPosition']
      skillSlot?: number
      teamId?: number
      /** Format: int64 */
      timestamp?: number
      towerType?: string
      type?: string
      victimId?: number
    }
    'LolMatchHistoryMatchHistoryGame': {
      /** Format: int64 */
      gameCreation?: number
      gameCreationDate?: string
      /** Format: int32 */
      gameDuration?: number
      /** Format: int64 */
      gameId?: number
      gameMode?: string
      gameType?: string
      gameVersion?: string
      mapId?: number
      participantIdentities?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryParticipantIdentities'][]
      participants?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryParticipant'][]
      platformId?: string
      /** Format: int32 */
      queueId?: number
      seasonId?: number
      teams?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryTeam'][]
    }
    'LolMatchHistoryMatchHistoryGameList': {
      gameBeginDate?: string
      /** Format: int64 */
      gameCount?: number
      gameEndDate?: string
      /** Format: int64 */
      gameIndexBegin?: number
      /** Format: int64 */
      gameIndexEnd?: number
      games?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryGame'][]
    }
    'LolMatchHistoryMatchHistoryList': {
      /** Format: int64 */
      accountId?: number
      games?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryGameList']
      platformId?: string
    }
    'LolMatchHistoryMatchHistoryParticipant': {
      /** Format: int32 */
      championId?: number
      highestAchievedSeasonTier?: string
      participantId?: number
      spell1Id?: number
      spell2Id?: number
      stats?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryParticipantStatistics']
      teamId?: number
      timeline?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryTimeline']
    }
    'LolMatchHistoryMatchHistoryParticipantFrame': {
      /** Format: int32 */
      currentGold?: number
      dominionScore?: number
      jungleMinionsKilled?: number
      level?: number
      minionsKilled?: number
      participantId?: number
      position?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryPosition']
      teamScore?: number
      /** Format: int32 */
      totalGold?: number
      /** Format: int32 */
      xp?: number
    }
    'LolMatchHistoryMatchHistoryParticipantIdentities': {
      participantId?: number
      player?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryParticipantIdentityPlayer']
    }
    'LolMatchHistoryMatchHistoryParticipantIdentityPlayer': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      currentAccountId?: number
      currentPlatformId?: string
      matchHistoryUri?: string
      platformId?: string
      /** Format: int32 */
      profileIcon?: number
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolMatchHistoryMatchHistoryParticipantStatistics': {
      /** Format: int64 */
      assists?: number
      causedEarlySurrender?: boolean
      /** Format: int64 */
      champLevel?: number
      /** Format: int64 */
      combatPlayerScore?: number
      /** Format: int64 */
      damageDealtToObjectives?: number
      /** Format: int64 */
      damageDealtToTurrets?: number
      /** Format: int64 */
      damageSelfMitigated?: number
      /** Format: int64 */
      deaths?: number
      /** Format: int64 */
      doubleKills?: number
      earlySurrenderAccomplice?: boolean
      firstBloodAssist?: boolean
      firstBloodKill?: boolean
      firstInhibitorAssist?: boolean
      firstInhibitorKill?: boolean
      firstTowerAssist?: boolean
      firstTowerKill?: boolean
      gameEndedInEarlySurrender?: boolean
      gameEndedInSurrender?: boolean
      /** Format: int64 */
      goldEarned?: number
      /** Format: int64 */
      goldSpent?: number
      /** Format: int64 */
      inhibitorKills?: number
      item0?: number
      item1?: number
      item2?: number
      item3?: number
      item4?: number
      item5?: number
      item6?: number
      /** Format: int64 */
      killingSprees?: number
      /** Format: int64 */
      kills?: number
      /** Format: int64 */
      largestCriticalStrike?: number
      /** Format: int64 */
      largestKillingSpree?: number
      /** Format: int64 */
      largestMultiKill?: number
      /** Format: int64 */
      longestTimeSpentLiving?: number
      /** Format: int64 */
      magicalDamageTaken?: number
      /** Format: int64 */
      magicDamageDealt?: number
      /** Format: int64 */
      magicDamageDealtToChampions?: number
      /** Format: int64 */
      neutralMinionsKilled?: number
      /** Format: int64 */
      neutralMinionsKilledEnemyJungle?: number
      /** Format: int64 */
      neutralMinionsKilledTeamJungle?: number
      /** Format: int64 */
      objectivePlayerScore?: number
      participantId?: number
      /** Format: int64 */
      pentaKills?: number
      /** Format: int64 */
      perk0?: number
      /** Format: int64 */
      perk0Var1?: number
      /** Format: int64 */
      perk0Var2?: number
      /** Format: int64 */
      perk0Var3?: number
      /** Format: int64 */
      perk1?: number
      /** Format: int64 */
      perk1Var1?: number
      /** Format: int64 */
      perk1Var2?: number
      /** Format: int64 */
      perk1Var3?: number
      /** Format: int64 */
      perk2?: number
      /** Format: int64 */
      perk2Var1?: number
      /** Format: int64 */
      perk2Var2?: number
      /** Format: int64 */
      perk2Var3?: number
      /** Format: int64 */
      perk3?: number
      /** Format: int64 */
      perk3Var1?: number
      /** Format: int64 */
      perk3Var2?: number
      /** Format: int64 */
      perk3Var3?: number
      /** Format: int64 */
      perk4?: number
      /** Format: int64 */
      perk4Var1?: number
      /** Format: int64 */
      perk4Var2?: number
      /** Format: int64 */
      perk4Var3?: number
      /** Format: int64 */
      perk5?: number
      /** Format: int64 */
      perk5Var1?: number
      /** Format: int64 */
      perk5Var2?: number
      /** Format: int64 */
      perk5Var3?: number
      /** Format: int64 */
      perkPrimaryStyle?: number
      /** Format: int64 */
      perkSubStyle?: number
      /** Format: int64 */
      physicalDamageDealt?: number
      /** Format: int64 */
      physicalDamageDealtToChampions?: number
      /** Format: int64 */
      physicalDamageTaken?: number
      /** Format: int64 */
      playerScore0?: number
      /** Format: int64 */
      playerScore1?: number
      /** Format: int64 */
      playerScore2?: number
      /** Format: int64 */
      playerScore3?: number
      /** Format: int64 */
      playerScore4?: number
      /** Format: int64 */
      playerScore5?: number
      /** Format: int64 */
      playerScore6?: number
      /** Format: int64 */
      playerScore7?: number
      /** Format: int64 */
      playerScore8?: number
      /** Format: int64 */
      playerScore9?: number
      /** Format: int64 */
      quadraKills?: number
      /** Format: int64 */
      sightWardsBoughtInGame?: number
      teamEarlySurrendered?: boolean
      /** Format: int64 */
      timeCCingOthers?: number
      /** Format: int64 */
      totalDamageDealt?: number
      /** Format: int64 */
      totalDamageDealtToChampions?: number
      /** Format: int64 */
      totalDamageTaken?: number
      /** Format: int64 */
      totalHeal?: number
      /** Format: int64 */
      totalMinionsKilled?: number
      /** Format: int64 */
      totalPlayerScore?: number
      /** Format: int64 */
      totalScoreRank?: number
      /** Format: int64 */
      totalTimeCrowdControlDealt?: number
      /** Format: int64 */
      totalUnitsHealed?: number
      /** Format: int64 */
      tripleKills?: number
      /** Format: int64 */
      trueDamageDealt?: number
      /** Format: int64 */
      trueDamageDealtToChampions?: number
      /** Format: int64 */
      trueDamageTaken?: number
      /** Format: int64 */
      turretKills?: number
      /** Format: int64 */
      unrealKills?: number
      /** Format: int64 */
      visionScore?: number
      /** Format: int64 */
      visionWardsBoughtInGame?: number
      /** Format: int64 */
      wardsKilled?: number
      /** Format: int64 */
      wardsPlaced?: number
      win?: boolean
    }
    'LolMatchHistoryMatchHistoryPlayerChampMasteryDelta': {
      grade?: string
    }
    'LolMatchHistoryMatchHistoryPlayerDelta': {
      deltas?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryPlayerGameDelta'][]
      /** Format: int64 */
      originalAccountId?: number
      originalPlatformId?: string
    }
    'LolMatchHistoryMatchHistoryPlayerGameDelta': {
      champMastery?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryPlayerChampMasteryDelta']
      /** Format: int64 */
      gameId?: number
      gamePlatformId?: string
      leagueDelta?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryPlayerLeagueDelta']
      platformDelta?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryPlayerPlatformDelta']
    }
    'LolMatchHistoryMatchHistoryPlayerLeagueDelta': {
      /** Format: int64 */
      leaguePointDelta?: number
      miniSeriesProgress?: string[]
      reason?: string
      /** Format: int64 */
      timestamp?: number
    }
    'LolMatchHistoryMatchHistoryPlayerPlatformDelta': {
      compensationModeEnabled?: boolean
      /** Format: int64 */
      ipDelta?: number
      /** Format: int64 */
      timestamp?: number
      /** Format: int64 */
      xpDelta?: number
    }
    'LolMatchHistoryMatchHistoryPosition': {
      x?: number
      y?: number
    }
    'LolMatchHistoryMatchHistoryTeam': {
      bans?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryTeamBan'][]
      /** Format: int32 */
      baronKills?: number
      /** Format: int32 */
      dominionVictoryScore?: number
      /** Format: int32 */
      dragonKills?: number
      firstBaron?: boolean
      firstBlood?: boolean
      firstDargon?: boolean
      firstInhibitor?: boolean
      firstTower?: boolean
      /** Format: int32 */
      inhibitorKills?: number
      /** Format: int32 */
      riftHeraldKills?: number
      teamId?: number
      /** Format: int32 */
      towerKills?: number
      /** Format: int32 */
      vilemawKills?: number
      win?: string
    }
    'LolMatchHistoryMatchHistoryTeamBan': {
      /** Format: int32 */
      championId?: number
      pickTurn?: number
    }
    'LolMatchHistoryMatchHistoryTimeline': {
      creepsPerMinDeltas?: {
        [key: string]: number | undefined
      }
      csDiffPerMinDeltas?: {
        [key: string]: number | undefined
      }
      damageTakenDiffPerMinDeltas?: {
        [key: string]: number | undefined
      }
      damageTakenPerMinDeltas?: {
        [key: string]: number | undefined
      }
      goldPerMinDeltas?: {
        [key: string]: number | undefined
      }
      lane?: string
      participantId?: number
      role?: string
      xpDiffPerMinDeltas?: {
        [key: string]: number | undefined
      }
      xpPerMinDeltas?: {
        [key: string]: number | undefined
      }
    }
    'LolMatchHistoryMatchHistoryTimelineFrame': {
      events?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryEvent'][]
      participantFrames?: {
        [key: string]:
          | LcuComponents['schemas']['LolMatchHistoryMatchHistoryParticipantFrame']
          | undefined
      }
      /** Format: int64 */
      timestamp?: number
    }
    'LolMatchHistoryMatchHistoryTimelineFrames': {
      frames?: LcuComponents['schemas']['LolMatchHistoryMatchHistoryTimelineFrame'][]
    }
    'LolMatchHistoryMHSummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolMatchHistoryRecentlyPlayedSummoner': {
      /** Format: int64 */
      championId?: number
      gameCreationDate?: string
      /** Format: int64 */
      gameId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int64 */
      teamId?: number
    }
    'LolMatchHistorySummoner': {
      displayName?: string
      puuid?: string
    }
    'LolMatchmakingGameflowGameData': {
      queue?: LcuComponents['schemas']['LolMatchmakingGameflowQueue']
    }
    'LolMatchmakingGameflowGameDodge': {
      dodgeIds?: number[]
      state?: LcuComponents['schemas']['LolMatchmakingMatchmakingDodgeState']
    }
    'LolMatchmakingGameflowGameTypeConfig': {
      reroll?: boolean
    }
    /** @enum {string} */
    'LolMatchmakingGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolMatchmakingGameflowQueue': {
      gameTypeConfig?: LcuComponents['schemas']['LolMatchmakingGameflowGameTypeConfig']
    }
    'LolMatchmakingGameflowSession': {
      gameData?: LcuComponents['schemas']['LolMatchmakingGameflowGameData']
      gameDodge?: LcuComponents['schemas']['LolMatchmakingGameflowGameDodge']
      phase?: LcuComponents['schemas']['LolMatchmakingGameflowPhase']
    }
    'LolMatchmakingLobbyStatus': {
      allowedPlayAgain?: boolean
      customSpectatorPolicy?: LcuComponents['schemas']['LolMatchmakingQueueCustomGameSpectatorPolicy']
      isCustom?: boolean
      isLeader?: boolean
      isSpectator?: boolean
      lobbyId?: string
      memberSummonerIds?: number[]
      /** Format: int32 */
      queueId?: number
    }
    'LolMatchmakingLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      state?: LcuComponents['schemas']['LolMatchmakingLoginSessionState']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolMatchmakingLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolMatchmakingMatchmakingDodgeData': {
      /** Format: int64 */
      dodgerId?: number
      state?: LcuComponents['schemas']['LolMatchmakingMatchmakingDodgeState']
    }
    /** @enum {string} */
    'LolMatchmakingMatchmakingDodgeState':
      | 'Invalid'
      | 'PartyDodged'
      | 'StrangerDodged'
      | 'TournamentDodged'
    /** @enum {string} */
    'LolMatchmakingMatchmakingDodgeWarning': 'None' | 'Warning' | 'Penalty'
    'LolMatchmakingMatchmakingLowPriorityData': {
      bustedLeaverAccessToken?: string
      penalizedSummonerIds?: number[]
      /** Format: double */
      penaltyTime?: number
      /** Format: double */
      penaltyTimeRemaining?: number
      reason?: string
    }
    'LolMatchmakingMatchmakingReadyCheckResource': {
      declinerIds?: number[]
      dodgeWarning?: LcuComponents['schemas']['LolMatchmakingMatchmakingDodgeWarning']
      playerResponse?: LcuComponents['schemas']['LolMatchmakingMatchmakingReadyCheckResponse']
      state?: LcuComponents['schemas']['LolMatchmakingMatchmakingReadyCheckState']
      suppressUx?: boolean
      /** Format: float */
      timer?: number
    }
    /** @enum {string} */
    'LolMatchmakingMatchmakingReadyCheckResponse': 'None' | 'Accepted' | 'Declined'
    /** @enum {string} */
    'LolMatchmakingMatchmakingReadyCheckState':
      | 'Invalid'
      | 'InProgress'
      | 'EveryoneReady'
      | 'StrangerNotReady'
      | 'PartyNotReady'
      | 'Error'
    'LolMatchmakingMatchmakingSearchErrorResource': {
      errorType?: string
      /** Format: int32 */
      id?: number
      message?: string
      /** Format: int64 */
      penalizedSummonerId?: number
      /** Format: double */
      penaltyTimeRemaining?: number
    }
    'LolMatchmakingMatchmakingSearchResource': {
      dodgeData?: LcuComponents['schemas']['LolMatchmakingMatchmakingDodgeData']
      errors?: LcuComponents['schemas']['LolMatchmakingMatchmakingSearchErrorResource'][]
      /** Format: float */
      estimatedQueueTime?: number
      isCurrentlyInQueue?: boolean
      lobbyId?: string
      lowPriorityData?: LcuComponents['schemas']['LolMatchmakingMatchmakingLowPriorityData']
      /** Format: int32 */
      queueId?: number
      readyCheck?: LcuComponents['schemas']['LolMatchmakingMatchmakingReadyCheckResource']
      searchState?: LcuComponents['schemas']['LolMatchmakingMatchmakingSearchState']
      /** Format: float */
      timeInQueue?: number
    }
    /** @enum {string} */
    'LolMatchmakingMatchmakingSearchState':
      | 'Invalid'
      | 'AbandonedLowPriorityQueue'
      | 'Canceled'
      | 'Searching'
      | 'Found'
      | 'Error'
      | 'ServiceError'
      | 'ServiceShutdown'
    'LolMatchmakingPlayerStatus': {
      currentLobbyStatus?: LcuComponents['schemas']['LolMatchmakingLobbyStatus']
      lastQueuedLobbyStatus?: LcuComponents['schemas']['LolMatchmakingLobbyStatus']
    }
    'LolMatchmakingQueue': {
      /** Format: int32 */
      id?: number
      isTeamBuilderManaged?: boolean
    }
    /** @enum {string} */
    'LolMatchmakingQueueCustomGameSpectatorPolicy':
      | 'NotAllowed'
      | 'LobbyAllowed'
      | 'FriendsAllowed'
      | 'AllAllowed'
    'LolMissionsCollectionsChampion': {
      freeToPlay?: boolean
      /** Format: int32 */
      id?: number
      ownership?: LcuComponents['schemas']['LolMissionsCollectionsOwnership']
      skins?: LcuComponents['schemas']['LolMissionsCollectionsChampionSkin'][]
    }
    'LolMissionsCollectionsChampionSkin': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      id?: number
      ownership?: LcuComponents['schemas']['LolMissionsCollectionsOwnership']
    }
    'LolMissionsCollectionsOwnership': {
      freeToPlayReward?: boolean
      owned?: boolean
      rental?: LcuComponents['schemas']['LolMissionsCollectionsRental']
    }
    'LolMissionsCollectionsRental': {
      rented?: boolean
    }
    'LolMissionsCollectionsSummoner': {
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolMissionsCollectionsSummonerIcons': {
      icons?: number[]
    }
    'LolMissionsCollectionsWardSkin': {
      /** Format: int64 */
      id?: number
      ownership?: LcuComponents['schemas']['LolMissionsCollectionsOwnership']
    }
    /** @enum {string} */
    'LolMissionsGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolMissionsGameflowSession': {
      phase?: LcuComponents['schemas']['LolMissionsGameflowPhase']
    }
    /** @enum {string} */
    'LolMissionsGrantStatus': 'PENDING_FULFILLMENT' | 'PENDING_SELECTION' | 'FULFILLED'
    'LolMissionsInventoryItemWithPayload': {
      /** Format: int32 */
      itemId?: number
    }
    'LolMissionsLoginSession': {
      /** Format: int64 */
      accountId?: number
      platformId?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolMissionsLoyaltyStatus':
      | 'LEGACY'
      | 'REWARDS_GRANT'
      | 'EXPIRY'
      | 'CHANGE'
      | 'REVOKE'
      | 'DISABLED'
    'LolMissionsLoyaltyStatusNotification': {
      status?: LcuComponents['schemas']['LolMissionsLoyaltyStatus']
    }
    'LolMissionsMissionAsset': {
      iconNeedsFrame?: boolean
      internalName?: string
      path?: string
    }
    'LolMissionsMissionsNotificationResource': {
      backgroundUrl?: string
      created?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolMissionsMissionsSettingsDataResource': {
      selected_series?: string
    }
    'LolMissionsPlayerUpdateResponse': {
      playerMissions?: LcuComponents['schemas']['PlayerMissionDTO'][]
      playerSeries?: LcuComponents['schemas']['SeriesDTO'][]
    }
    'LolMissionsPluginRegionLocaleChangedEvent': {
      locale?: string
    }
    'LolMissionsRewardGrant': {
      info?: LcuComponents['schemas']['LolMissionsRewardGrantInfo']
      rewardGroup?: LcuComponents['schemas']['LolMissionsRewardGroup']
    }
    'LolMissionsRewardGrantElement': {
      fulfillmentSource?: string
      id?: string
      itemId?: string
      itemType?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
      rewardStatus?: LcuComponents['schemas']['LolMissionsRewardStatus']
    }
    'LolMissionsRewardGrantInfo': {
      granteeId?: string
      grantElements?: LcuComponents['schemas']['LolMissionsRewardGrantElement'][]
      id?: string
      rewardGroupId?: string
      selectedIds?: string[]
      status?: LcuComponents['schemas']['LolMissionsGrantStatus']
      viewed?: boolean
    }
    'LolMissionsRewardGroup': {
      active?: boolean
      childRewardGroupIds?: string[]
      id?: string
      internalName?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      productId?: string
      rewards?: LcuComponents['schemas']['LolMissionsSvcReward'][]
      rewardStrategy?: LcuComponents['schemas']['LolMissionsRewardStrategy']
      selectionStrategyConfig?: LcuComponents['schemas']['LolMissionsSelectionStrategyConfig']
      types?: string[]
    }
    'LolMissionsRewardGroupsSelection': {
      rewardGroups?: string[]
    }
    'LolMissionsRewardsProductConfig': {
      enabled?: boolean
      serviceUrl?: string
    }
    /** @enum {string} */
    'LolMissionsRewardStatus': 'PENDING' | 'FULFILLED'
    /** @enum {string} */
    'LolMissionsRewardStrategy': 'ALL' | 'RANDOM' | 'SELECTION'
    'LolMissionsSelectionStrategyConfig': {
      /** Format: int32 */
      maxSelectionsAllowed?: number
      /** Format: int32 */
      minSelectionsAllowed?: number
    }
    'LolMissionsSeriesOpt': {
      option?: string
      seriesId?: string
    }
    'LolMissionsSvcReward': {
      fulfillmentSource?: string
      id?: string
      itemId?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
    }
    'LolMissionsTftBattlepass': {
      milestones?: LcuComponents['schemas']['LolMissionsTftBattlepassMilestone'][]
      /** Format: int32 */
      totalPointsEarned?: number
    }
    'LolMissionsTftBattlepassMilestone': {
      description?: string
      iconImageUrl?: string
      label?: string
      missionId?: string
      /** Format: int32 */
      percentComplete?: number
      /** Format: int32 */
      pointsForMilestone?: number
      rewards?: LcuComponents['schemas']['PlayerMissionRewardDTO'][]
      state?: string
    }
    'LolMissionsTftOrb': {
      missionId?: string
      rewardLevel?: number
      rewards?: LcuComponents['schemas']['PlayerMissionRewardDTO'][]
      status?: string
      /** Format: int64 */
      unlockTime?: number
    }
    'LolMissionsTftPaidBattlepass': {
      activeMilestone?: LcuComponents['schemas']['LolMissionsTftPaidBattlepassMilestone']
      bonuses?: LcuComponents['schemas']['LolMissionsTftPaidBattlepassMilestone'][]
      info?: LcuComponents['schemas']['LolMissionsTftPaidBattlepassInfo']
      lastViewedMilestone?: LcuComponents['schemas']['LolMissionsTftPaidBattlepassMilestone']
      /** Format: int32 */
      lastViewedProgress?: number
      milestones?: LcuComponents['schemas']['LolMissionsTftPaidBattlepassMilestone'][]
      progressMissionId?: string
      /** Format: int32 */
      totalPointsEarned?: number
    }
    'LolMissionsTftPaidBattlepassInfo': {
      backgroundImageUrl?: string
      description?: string
      /** Format: int64 */
      endDate?: number
      internalName?: string
      pcPurchaseRequirement?: string
      premium?: boolean
      /** Format: int64 */
      startDate?: number
      title?: string
    }
    'LolMissionsTftPaidBattlepassMilestone': {
      description?: string
      iconImageUrl?: string
      iconNeedsFrame?: boolean
      internalName?: string
      isBonus?: boolean
      isKeystone?: boolean
      isLocked?: boolean
      isPaid?: boolean
      /** Format: int32 */
      level?: number
      missionId?: string
      /** Format: int32 */
      pointsEarnedForMilestone?: number
      /** Format: int32 */
      pointsNeededForMilestone?: number
      rewards?: LcuComponents['schemas']['PlayerMissionRewardDTO'][]
      state?: string
      status?: string
      title?: string
      /** Format: int32 */
      totalPointsForMilestone?: number
    }
    'LolMissionsTftWeeklyMissions': {
      missions?: LcuComponents['schemas']['PlayerMissionDTO'][]
    }
    'LolMissionsUserInfo': {
      userInfo?: string
    }
    'LolModeProgressionInventoryRewardItem': {
      /** Format: int32 */
      itemId?: number
      uuid?: string
    }
    'LolModeProgressionLoadout': {
      id?: string
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolModeProgressionLoadoutsSlot'] | undefined
      }
      name?: string
      scope?: string
    }
    'LolModeProgressionLoadoutsSlot': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolNpeRewardsAccountSettingsData': {
      challenges?: LcuComponents['schemas']['LolNpeRewardsChallengesSettings']
      login?: LcuComponents['schemas']['LolNpeRewardsLoginSeriesSettings']
    }
    'LolNpeRewardsAccountSettingsPayload': {
      data?: LcuComponents['schemas']['LolNpeRewardsAccountSettingsData']
      /** Format: int64 */
      schemaVersion?: number
    }
    'LolNpeRewardsAllRewards': {
      level?: LcuComponents['schemas']['LolNpeRewardsRewardSeries']
      login?: LcuComponents['schemas']['LolNpeRewardsRewardSeries']
    }
    'LolNpeRewardsChallengesProgress': {
      progress?: LcuComponents['schemas']['LolNpeRewardsProgress']
    }
    'LolNpeRewardsChallengesSettings': {
      allMissionsCompleted?: boolean
      totalCount?: number
    }
    'LolNpeRewardsLoginSeriesSettings': {
      allRewardsClaimed?: boolean
      /** Format: int64 */
      lastCompletedMissionDate?: number
      lastCompletedMissionInternalName?: string
    }
    'LolNpeRewardsMission': {
      /** Format: int64 */
      completedDate?: number
      display?: LcuComponents['schemas']['LolNpeRewardsMissionDisplay']
      internalName?: string
      metadata?: LcuComponents['schemas']['LolNpeRewardsMissionsRewardPackMetaData']
      objectives?: LcuComponents['schemas']['LolNpeRewardsObjective'][]
      seriesName?: string
      status?: string
    }
    'LolNpeRewardsMissionDisplay': {
      locations?: string[]
    }
    'LolNpeRewardsMissionSeries': {
      id?: string
      internalName?: string
      status?: string
    }
    'LolNpeRewardsMissionSeriesOptIn': {
      option?: string
      seriesId?: string
    }
    'LolNpeRewardsMissionsRewardPackMetaData': {
      npeRewardPack?: LcuComponents['schemas']['LolNpeRewardsRewardPack']
    }
    'LolNpeRewardsObjective': {
      progress?: LcuComponents['schemas']['LolNpeRewardsProgress']
    }
    'LolNpeRewardsProgress': {
      /** Format: int32 */
      currentProgress?: number
      /** Format: int32 */
      lastViewedProgress?: number
      /** Format: int32 */
      totalCount?: number
    }
    'LolNpeRewardsRequirements': {
      /** Format: int32 */
      day?: number
      /** Format: int32 */
      level?: number
      missionInternalName?: string
    }
    'LolNpeRewardsReward': {
      data?: {
        [key: string]: unknown | undefined
      }
      renderer?: string
    }
    'LolNpeRewardsRewardPack': {
      /** Format: int64 */
      delay?: number
      /** Format: int32 */
      index?: number
      majorReward?: LcuComponents['schemas']['LolNpeRewardsReward']
      minorRewards?: LcuComponents['schemas']['LolNpeRewardsReward'][]
      premiumReward?: boolean
      requirements?: LcuComponents['schemas']['LolNpeRewardsRequirements']
      rewardKey?: string
      state?: string
      type?: string
      /** Format: int64 */
      unlockTime?: number
    }
    'LolNpeRewardsRewardSeries': {
      rewardPacks?: LcuComponents['schemas']['LolNpeRewardsRewardPack'][]
    }
    'LolNpeRewardsRewardSeriesState': {
      allRewardsClaimed?: boolean
    }
    'LolNpeRewardsSummoner': {
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolNpeTutorialPathAccountSettingsCategoryResource': {
      data?: LcuComponents['schemas']['LolNpeTutorialPathAccountSettingsTutorial']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolNpeTutorialPathAccountSettingsTutorial': {
      hasSeenTutorialPath?: boolean
      hasSkippedTutorialPath?: boolean
      shouldSeeNewPlayerExperience?: boolean
    }
    'LolNpeTutorialPathCollectionsChampion': {
      alias?: string
      banVoPath?: string
      chooseVoPath?: string
      /** Format: int32 */
      id?: number
      name?: string
      passive?: LcuComponents['schemas']['LolNpeTutorialPathCollectionsChampionSpell']
      roles?: string[]
      spells?: LcuComponents['schemas']['LolNpeTutorialPathCollectionsChampionSpell'][]
      squarePortraitPath?: string
      stingerSfxPath?: string
    }
    'LolNpeTutorialPathCollectionsChampionSpell': {
      description?: string
      name?: string
    }
    'LolNpeTutorialPathExpiringWarning': {
      /** Format: int64 */
      alertTime?: number
      message?: string
      type?: string
    }
    /** @enum {string} */
    'LolNpeTutorialPathGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolNpeTutorialPathGameflowSession': {
      phase?: LcuComponents['schemas']['LolNpeTutorialPathGameflowPhase']
    }
    'LolNpeTutorialPathIds': {
      missionIds?: string[]
      seriesIds?: string[]
    }
    'LolNpeTutorialPathLobbyChangeQueue': {
      isCustom?: boolean
      /** Format: int32 */
      queueId?: number
    }
    'LolNpeTutorialPathLobbyDto': {
      gameConfig?: LcuComponents['schemas']['LolNpeTutorialPathLobbyGameConfigDto']
      partyId?: string
    }
    'LolNpeTutorialPathLobbyGameConfigDto': {
      /** Format: int32 */
      queueId?: number
    }
    'LolNpeTutorialPathMission': {
      backgroundImageUrl?: string
      celebrationType?: string
      clientNotifyLevel?: string
      /** Format: int64 */
      completedDate?: number
      completionExpression?: string
      /** Format: int64 */
      cooldownTimeMillis?: number
      description?: string
      display?: LcuComponents['schemas']['LolNpeTutorialPathMissionDisplay']
      displayType?: string
      /** Format: int64 */
      endTime?: number
      expiringWarnings?: LcuComponents['schemas']['LolNpeTutorialPathExpiringWarning'][]
      helperText?: string
      iconImageUrl?: string
      id?: string
      internalName?: string
      isNew?: boolean
      /** Format: int64 */
      lastUpdatedTimestamp?: number
      locale?: string
      metadata?: LcuComponents['schemas']['LolNpeTutorialPathMissionMetadata']
      missionType?: string
      objectives?: LcuComponents['schemas']['LolNpeTutorialPathObjective'][]
      requirements?: string[]
      rewards?: LcuComponents['schemas']['LolNpeTutorialPathReward'][]
      rewardStrategy?: LcuComponents['schemas']['LolNpeTutorialPathRewardStrategy']
      seriesName?: string
      /** Format: int64 */
      startTime?: number
      status?: string
      title?: string
      viewed?: boolean
    }
    'LolNpeTutorialPathMissionDisplay': {
      attributes?: string[]
    }
    'LolNpeTutorialPathMissionMetadata': {
      tutorial?: LcuComponents['schemas']['LolNpeTutorialPathTutorialMetadata']
    }
    'LolNpeTutorialPathObjective': {
      description?: string
      progress?: LcuComponents['schemas']['LolNpeTutorialPathProgress']
      rewardGroups?: string[]
      /** Format: int32 */
      sequence?: number
      type?: string
    }
    'LolNpeTutorialPathProgress': {
      /** Format: int32 */
      currentProgress?: number
      /** Format: int32 */
      lastViewedProgress?: number
      /** Format: int32 */
      totalCount?: number
    }
    'LolNpeTutorialPathRequirement': {
      expression?: string
    }
    'LolNpeTutorialPathReward': {
      description?: string
      iconUrl?: string
      itemId?: string
      /** Format: int32 */
      quantity?: number
      rewardFulfilled?: boolean
      rewardGroup?: string
      rewardGroupSelected?: boolean
      rewardType?: string
      /** Format: int32 */
      sequence?: number
      uniqueName?: string
    }
    'LolNpeTutorialPathRewardStrategy': {
      groupStrategy?: string
      selectMaxGroupCount?: number
      selectMinGroupCount?: number
    }
    'LolNpeTutorialPathSeries': {
      id?: string
      internalName?: string
      status?: string
    }
    'LolNpeTutorialPathSeriesOpt': {
      option?: string
      seriesId?: string
    }
    'LolNpeTutorialPathSummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      nameChangeFlag?: boolean
      /** Format: int32 */
      percentCompleteForNextLevel?: number
      /** Format: int32 */
      profileIconId?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      unnamed?: boolean
      /** Format: int64 */
      xpSinceLastLevel?: number
      /** Format: int64 */
      xpUntilNextLevel?: number
    }
    'LolNpeTutorialPathSummonerIcon': {
      /** Format: int32 */
      profileIconId?: number
    }
    'LolNpeTutorialPathTutorial': {
      backgroundUrl?: string
      description?: string
      id?: string
      isViewed?: boolean
      queueId?: string
      rewards?: LcuComponents['schemas']['LolNpeTutorialPathTutorialReward'][]
      status?: LcuComponents['schemas']['LolNpeTutorialPathTutorialStatus']
      /** Format: int32 */
      stepNumber?: number
      title?: string
      type?: LcuComponents['schemas']['LolNpeTutorialPathTutorialType']
      useChosenChampion?: boolean
      useQuickSearchMatchmaking?: boolean
    }
    'LolNpeTutorialPathTutorialMetadata': {
      displayRewards?: {
        [key: string]: string | undefined
      }
      queueId?: string
      /** Format: int32 */
      stepNumber?: number
      useChosenChampion?: boolean
      useQuickSearchMatchmaking?: boolean
    }
    'LolNpeTutorialPathTutorialReward': {
      description?: string
      iconUrl?: string
      itemId?: string
      rewardFulfilled?: boolean
      rewardType?: string
      /** Format: int32 */
      sequence?: number
      uniqueName?: string
    }
    /** @enum {string} */
    'LolNpeTutorialPathTutorialStatus': 'LOCKED' | 'UNLOCKED' | 'COMPLETED'
    /** @enum {string} */
    'LolNpeTutorialPathTutorialType': 'CARD' | 'REWARD'
    'LolPatchChunkingPatcherEnvironment': {
      client_patcher_available?: boolean
      client_patcher_enabled?: boolean
      game_patcher_available?: boolean
      game_patcher_enabled?: boolean
    }
    'LolPatchComponentActionProgress': {
      currentItem?: string
      network?: LcuComponents['schemas']['LolPatchComponentStateProgress']
      primaryWork?: LcuComponents['schemas']['LolPatchComponentStateWorkType']
      total?: LcuComponents['schemas']['LolPatchComponentStateProgress']
    }
    'LolPatchComponentState': {
      action?: LcuComponents['schemas']['LolPatchComponentStateAction']
      id?: string
      isCorrupted?: boolean
      isUpdateAvailable?: boolean
      isUpToDate?: boolean
      progress?: LcuComponents['schemas']['LolPatchComponentActionProgress']
      timeOfLastUpToDateCheckISO8601?: string
    }
    /** @enum {string} */
    'LolPatchComponentStateAction':
      | 'Idle'
      | 'CheckingForUpdates'
      | 'Patching'
      | 'Repairing'
      | 'Migrating'
    'LolPatchComponentStateProgress': {
      /** Format: int64 */
      bytesComplete?: number
      /** Format: double */
      bytesPerSecond?: number
      /** Format: int64 */
      bytesRequired?: number
    }
    /** @enum {string} */
    'LolPatchComponentStateWorkType': 'Scanning' | 'Network' | 'Disk'
    'LolPatchEntitlementsTokenResource': {
      accessToken?: string
      entitlements?: string[]
      token?: string
    }
    'LolPatchInstallPaths': {
      gameExecutablePath?: string
      gameInstallRoot?: string
    }
    'LolPatchNotification': {
      data?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      id?: string
      notificationId?: LcuComponents['schemas']['LolPatchNotificationId']
    }
    /** @enum {string} */
    'LolPatchNotificationId':
      | 'UnspecifiedError'
      | 'ConnectionError'
      | 'MissingFilesError'
      | 'FailedToWriteError'
      | 'WillRestoreClientBackupOnRestart'
      | 'DidRestoreClientBackup'
      | 'NotEnoughDiskSpace'
      | 'BrokenPermissions'
    'LolPatchPatcherInstallSettings': {
      client_patch_url?: string
      client_patcher?: string
      client_patcher_available?: boolean
      game_patch_url?: string
      game_patcher?: string
      game_patcher_available?: boolean
      locales?: string[]
      /** Format: int32 */
      max_download_speed_mbps?: number
    }
    'LolPatchPatcherRegionSettings': {
      client_patcher?: string
      game_patcher?: string
      patchline?: string
    }
    'LolPatchPatcherSelfUpdateSettings': {
      /** Format: int32 */
      restart_delay?: number
    }
    'LolPatchPatcherSettings': {
      channel?: string
      headers?: {
        [key: string]: string | undefined
      }
      patchsieve_url?: string
      /** Format: double */
      product_refresh_period?: number
      self_update?: LcuComponents['schemas']['LolPatchPatcherSelfUpdateSettings']
    }
    'LolPatchPatchSieveCompatVersion': {
      id?: string
    }
    'LolPatchPatchSieveDownload': {
      scd_required?: boolean
      url?: string
    }
    'LolPatchPatchSieveLabelValue': {
      values?: string[]
    }
    'LolPatchPatchSieveQueryResponse': {
      releases?: LcuComponents['schemas']['LolPatchPatchSieveRelease'][]
    }
    'LolPatchPatchSieveRelease': {
      compat_version?: LcuComponents['schemas']['LolPatchPatchSieveCompatVersion']
      download?: LcuComponents['schemas']['LolPatchPatchSieveDownload']
      release?: LcuComponents['schemas']['LolPatchPatchSieveReleaseInfo']
    }
    'LolPatchPatchSieveReleaseInfo': {
      id?: string
      labels?: {
        [key: string]: LcuComponents['schemas']['LolPatchPatchSieveLabelValue'] | undefined
      }
      product?: string
    }
    'LolPatchProductState': {
      action?: LcuComponents['schemas']['LolPatchComponentStateAction']
      LcuComponents?: LcuComponents['schemas']['LolPatchComponentState'][]
      id?: string
      isCorrupted?: boolean
      isStopped?: boolean
      isUpdateAvailable?: boolean
      isUpToDate?: boolean
      /** Format: double */
      percentPatched?: number
    }
    'LolPatchPublishedReleaseResponse': {
      client_patch_url?: string
      game_patch_url?: string
      timestamp?: string
      toggles?: {
        [key: string]: number | undefined
      }
      /** Format: int32 */
      version?: number
    }
    'LolPatchRegionLocale': {
      locale?: string
      region?: string
    }
    'LolPatchScdCookie': {
      cookie?: string
      domain?: string
      path?: string
    }
    'LolPatchScdCookies': {
      cookies?: LcuComponents['schemas']['LolPatchScdCookie'][]
    }
    /** @enum {string} */
    'LolPatchScdEnabled': 'Off' | 'On'
    'LolPatchStatus': {
      connectedToPatchServer?: boolean
      hasUpdatesOnRestart?: boolean
      willRestartOnSelfUpdate?: boolean
    }
    'LolPatchSupportedGameRelease': {
      artifact_id?: string
      download?: LcuComponents['schemas']['LolPatchPatchSieveDownload']
      selected?: boolean
    }
    'LolPatchSupportedGameReleases': {
      supported_game_releases?: LcuComponents['schemas']['LolPatchSupportedGameRelease'][]
    }
    'LolPatchUxResource': {
      visible?: boolean
    }
    'LolPerksChampionPreferredStyle': {
      /** Format: int32 */
      championId?: number
      championName?: string
      /** Format: int32 */
      style?: number
    }
    'LolPerksChampSelectAction': {
      /** Format: int64 */
      actorCellId?: number
      /** Format: int32 */
      championId?: number
      completed?: boolean
      /** Format: int64 */
      id?: number
      type?: string
    }
    'LolPerksChampSelectBannedChampions': {
      myTeamBans?: number[]
      /** Format: int32 */
      numBans?: number
      theirTeamBans?: number[]
    }
    'LolPerksChampSelectChatRoomDetails': {
      chatRoomName?: string
      chatRoomPassword?: string
    }
    'LolPerksChampSelectMySelection': {
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolPerksChampSelectPlayerSelection': {
      assignedPosition?: string
      /** Format: int64 */
      cellId?: number
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      championPickIntent?: number
      /** Format: int32 */
      selectedSkinId?: number
      /** Format: int64 */
      spell1Id?: number
      /** Format: int64 */
      spell2Id?: number
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      team?: number
      /** Format: int64 */
      wardSkinId?: number
    }
    'LolPerksChampSelectSession': {
      actions?: {
        [key: string]: unknown | undefined
      }[]
      bans?: LcuComponents['schemas']['LolPerksChampSelectBannedChampions']
      chatDetails?: LcuComponents['schemas']['LolPerksChampSelectChatRoomDetails']
      isSpectating?: boolean
      /** Format: int64 */
      localPlayerCellId?: number
      myTeam?: LcuComponents['schemas']['LolPerksChampSelectPlayerSelection'][]
      theirTeam?: LcuComponents['schemas']['LolPerksChampSelectPlayerSelection'][]
      timer?: LcuComponents['schemas']['LolPerksChampSelectTimer']
      trades?: LcuComponents['schemas']['LolPerksChampSelectTradeContract'][]
    }
    'LolPerksChampSelectTimer': {
      /** Format: int64 */
      adjustedTimeLeftInPhase?: number
      /** Format: int64 */
      internalNowInEpochMs?: number
      isInfinite?: boolean
      phase?: string
      /** Format: int64 */
      totalTimeInPhase?: number
    }
    'LolPerksChampSelectTradeContract': {
      /** Format: int64 */
      cellId?: number
      /** Format: int64 */
      id?: number
      state?: LcuComponents['schemas']['LolPerksChampSelectTradeState']
    }
    /** @enum {string} */
    'LolPerksChampSelectTradeState': 'AVAILABLE' | 'BUSY' | 'INVALID' | 'RECEIVED' | 'SENT'
    /** @enum {string} */
    'LolPerksCustomizationLimits':
      | 'Locked'
      | 'CanSelectPages'
      | 'CanSelectKeystones'
      | 'CanSelectPrimaries'
      | 'CanSelectSplash'
      | 'CanUseAdvancedStyles'
    'LolPerksDefaultStatModsPerSubStyle': {
      /** Format: int32 */
      id?: number
      perks?: number[]
    }
    'LolPerksGameCustomizationDTO': {
      category?: string
      content?: string
      isTeambuilder?: boolean
      /** Format: int64 */
      queueType?: number
    }
    'LolPerksGameflowGameData': {
      /** Format: int64 */
      gameId?: number
      isCustomGame?: boolean
      queue?: LcuComponents['schemas']['LolPerksQueue']
    }
    /** @enum {string} */
    'LolPerksGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolPerksGameflowSession': {
      gameData?: LcuComponents['schemas']['LolPerksGameflowGameData']
      phase?: LcuComponents['schemas']['LolPerksGameflowPhase']
    }
    'LolPerksGetGameCustomizationDTO': {
      queueType?: string
    }
    'LolPerksGetResultFromServiceDTO': {
      error?: string
      result?: string
    }
    'LolPerksInventoryRunePageCount': {
      /** Format: int32 */
      quantity?: number
    }
    'LolPerksLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolPerksLoginSessionState']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolPerksLoginSessionState': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolPerksNameCheckPayload': {
      name?: string
      shard?: string
    }
    'LolPerksNameCheckReponse': {
      errors?: string[]
    }
    'LolPerksPerkBook': {
      /** Format: int32 */
      currentPageId?: number
      pages?: LcuComponents['schemas']['LolPerksPerkPageResource'][]
    }
    'LolPerksPerkGDSResource': {
      iconPath?: string
      /** Format: int32 */
      id?: number
      longDesc?: string
      majorChangePatchVersion?: string
      name?: string
      shortDesc?: string
      tooltip?: string
    }
    'LolPerksPerkIdListResource': {
      perkIds?: number[]
    }
    'LolPerksPerkPageResource': {
      autoModifiedSelections?: number[]
      current?: boolean
      /** Format: int32 */
      id?: number
      isActive?: boolean
      isDeletable?: boolean
      isEditable?: boolean
      isValid?: boolean
      /** Format: int64 */
      lastModified?: number
      name?: string
      /** Format: int32 */
      order?: number
      /** Format: int32 */
      primaryStyleId?: number
      selectedPerkIds?: number[]
      /** Format: int32 */
      subStyleId?: number
    }
    'LolPerksPerkSettingResource': {
      perkIds?: number[]
      /** Format: int32 */
      perkStyle?: number
      /** Format: int32 */
      perkSubStyle?: number
    }
    'LolPerksPerkSettings': {
      pages?: LcuComponents['schemas']['LolPerksPerkPageResource'][]
      perShardPerkBooks?: {
        [key: string]: LcuComponents['schemas']['LolPerksPerkBook'] | undefined
      }
      settings?: LcuComponents['schemas']['LolPerksUISettings']
    }
    'LolPerksPerkStyleResource': {
      allowedSubStyles?: number[]
      assetMap?: {
        [key: string]: string | undefined
      }
      defaultPageName?: string
      defaultPerks?: number[]
      defaultPerksWhenSplashed?: number[]
      defaultStatModsPerSubStyle?: LcuComponents['schemas']['LolPerksDefaultStatModsPerSubStyle'][]
      /** Format: int32 */
      defaultSubStyle?: number
      iconPath?: string
      /** Format: int32 */
      id?: number
      isAdvanced?: boolean
      name?: string
      slots?: LcuComponents['schemas']['LolPerksPerkStyleSlotResource'][]
      subStyleBonus?: LcuComponents['schemas']['LolPerksPerkSubStyleBonusResource'][]
      tooltip?: string
    }
    'LolPerksPerkStyleSlotResource': {
      perks?: number[]
      slotLabel?: string
      type?: string
    }
    'LolPerksPerkSubStyleBonusResource': {
      /** Format: int32 */
      perkId?: number
      /** Format: int32 */
      styleId?: number
    }
    'LolPerksPerkUIPerk': {
      iconPath?: string
      /** Format: int32 */
      id?: number
      longDesc?: string
      name?: string
      shortDesc?: string
      tooltip?: string
    }
    'LolPerksPerkUISlot': {
      perks?: number[]
      slotLabel?: string
      type?: string
    }
    'LolPerksPerkUIStyle': {
      allowedSubStyles?: number[]
      assetMap?: {
        [key: string]: string | undefined
      }
      defaultPageName?: string
      defaultPerks?: number[]
      /** Format: int32 */
      defaultSubStyle?: number
      iconPath?: string
      /** Format: int32 */
      id?: number
      name?: string
      slots?: LcuComponents['schemas']['LolPerksPerkUISlot'][]
      subStyleBonus?: LcuComponents['schemas']['LolPerksPerkSubStyleBonusResource'][]
      tooltip?: string
    }
    'LolPerksPlatformConfig': {
      AutoRepairPagesEnabled?: boolean
      PerksEnabled?: boolean
    }
    'LolPerksPlayerInventory': {
      /** Format: int32 */
      ownedPageCount?: number
    }
    'LolPerksQueue': {
      /** Format: int32 */
      id?: number
      isTeamBuilderManaged?: boolean
    }
    'LolPerksRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'LolPerksServiceSettings': {
      serverSideStorageAvailable?: boolean
    }
    'LolPerksSettingsStorageContainer': {
      data?: LcuComponents['schemas']['LolPerksPerkSettings']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolPerksSummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      internalName?: string
      /** Format: int32 */
      percentCompleteForNextLevel?: number
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      rerollPoints?: LcuComponents['schemas']['LolPerksSummonerRerollPoints']
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      /** Format: int64 */
      xpSinceLastLevel?: number
      /** Format: int64 */
      xpUntilNextLevel?: number
    }
    'LolPerksSummonerRerollPoints': {
      /** Format: int32 */
      currentPoints?: number
      /** Format: int32 */
      maxRolls?: number
      /** Format: int32 */
      numberOfRolls?: number
      /** Format: int32 */
      pointsCostToRoll?: number
      /** Format: int32 */
      pointsToReroll?: number
    }
    'LolPerksUISettings': {
      gameplayPatchVersionSeen?: string
      gameplayUpdatedPerksSeen?: number[]
      gridModeEnabled?: boolean
      showLongDescriptions?: boolean
      showPresetPages?: boolean
    }
    'LolPerksUpdatePageOrderRequest': {
      /** Format: int32 */
      destinationPageId?: number
      /** Format: int32 */
      offset?: number
      /** Format: int32 */
      targetPageId?: number
    }
    'LolPerksValidatePageNameData': {
      /** Format: int32 */
      id?: number
      name?: string
    }
    'LolPerksValidatePageNameResponse': {
      nameCheckResponse?: LcuComponents['schemas']['LolPerksNameCheckReponse']
      success?: boolean
    }
    'LolPersonalizedOffersAccessTokenResource': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    'LolPersonalizedOffersOffer': {
      /** Format: int64 */
      discountPrice?: number
      expirationDate?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      name?: string
      offerId?: string
      /** Format: int64 */
      originalPrice?: number
      owned?: boolean
      revealed?: boolean
      /** Format: int32 */
      spotIndex?: number
    }
    'LolPersonalizedOffersOfferData': {
      offers?: LcuComponents['schemas']['LolPersonalizedOffersOffer'][]
      promotion?: LcuComponents['schemas']['LolPersonalizedOffersPromotion']
    }
    'LolPersonalizedOffersOfferId': {
      offerId?: string
    }
    'LolPersonalizedOffersOfferIds': {
      offers?: LcuComponents['schemas']['LolPersonalizedOffersOfferId'][]
    }
    'LolPersonalizedOffersOfferRequest': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      offerId?: string
      /** Format: int64 */
      price?: number
    }
    'LolPersonalizedOffersOfferRequests': {
      offers?: LcuComponents['schemas']['LolPersonalizedOffersOfferRequest'][]
    }
    'LolPersonalizedOffersPromotion': {
      endTime?: string
      name?: string
      startTime?: string
    }
    'LolPersonalizedOffersPurchaseItem': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int64 */
      pricePaid?: number
    }
    'LolPersonalizedOffersPurchaseResponse': {
      items?: LcuComponents['schemas']['LolPersonalizedOffersPurchaseItem'][]
      wallet?: LcuComponents['schemas']['LolPersonalizedOffersWallet']
    }
    'LolPersonalizedOffersUIOffer': {
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      discountPrice?: number
      expirationDate?: string
      id?: string
      /** Format: int64 */
      originalPrice?: number
      owned?: boolean
      revealed?: boolean
      /** Format: int32 */
      skinId?: number
      skinName?: string
      type?: string
    }
    'LolPersonalizedOffersUIStatus': {
      endTime?: string
      hubEnabled?: boolean
      name?: string
      startTime?: string
    }
    'LolPersonalizedOffersWallet': {
      /** Format: int64 */
      rp?: number
    }
    'LolPftGameClientEndOfGameStats': {
      /** Format: int64 */
      gameId?: number
      gameMode?: string
      isRanked?: boolean
      /** Format: int32 */
      queueId?: number
      statsBlock?: {
        [key: string]: unknown | undefined
      }
    }
    'LolPftGameflowGameDodge': {
      dodgeIds?: number[]
      state?: LcuComponents['schemas']['LolPftGameflowGameDodgeState']
    }
    /** @enum {string} */
    'LolPftGameflowGameDodgeState':
      | 'Invalid'
      | 'PartyDodged'
      | 'StrangerDodged'
      | 'TournamentDodged'
    /** @enum {string} */
    'LolPftGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolPftGameflowSession': {
      gameDodge?: LcuComponents['schemas']['LolPftGameflowGameDodge']
      phase?: LcuComponents['schemas']['LolPftGameflowPhase']
    }
    'LolPftLoginSession': {
      idToken?: string
      state?: LcuComponents['schemas']['LolPftLoginSessionStates']
    }
    /** @enum {string} */
    'LolPftLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolPftPFTEndOfGamePlayer': {
      botPlayer?: boolean
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      elo?: number
      /** Format: int32 */
      eloChange?: number
      /** Format: int64 */
      gameId?: number
      isReportingDisabled?: boolean
      items?: number[]
      leaver?: boolean
      /** Format: int32 */
      leaves?: number
      /** Format: int32 */
      level?: number
      /** Format: int32 */
      losses?: number
      /** Format: int32 */
      profileIconId?: number
      skinName?: string
      /** Format: int32 */
      spell1Id?: number
      /** Format: int32 */
      spell2Id?: number
      stats?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      teamId?: number
      /** Format: int64 */
      userId?: number
      /** Format: int32 */
      wins?: number
    }
    'LolPftPFTEndOfGamePoints': {
      /** Format: int32 */
      pointChangeFromChampionsOwned?: number
      /** Format: int32 */
      pointChangeFromGameplay?: number
      /** Format: int32 */
      pointsUntilNextReroll?: number
      /** Format: int32 */
      pointsUsed?: number
      /** Format: int32 */
      previousPoints?: number
      /** Format: int32 */
      rerollCount?: number
      /** Format: int32 */
      totalPoints?: number
    }
    'LolPftPFTEndOfGameStats': {
      /** Format: int64 */
      accountId?: number
      /** Format: int32 */
      basePoints?: number
      /** Format: int32 */
      battleBoostIpEarned?: number
      /** Format: int32 */
      boostIpEarned?: number
      /** Format: int32 */
      boostXpEarned?: number
      causedEarlySurrender?: boolean
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      completionBonusPoints?: number
      /** Format: int32 */
      coOpVsAiMinutesLeftToday?: number
      /** Format: int32 */
      coOpVsAiMsecsUntilReset?: number
      /** Format: int32 */
      customMinutesLeftToday?: number
      /** Format: int32 */
      customMsecsUntilReset?: number
      difficulty?: string
      earlySurrenderAccomplice?: boolean
      /** Format: int32 */
      elo?: number
      /** Format: int32 */
      eloChange?: number
      /** Format: int32 */
      experienceEarned?: number
      /** Format: int32 */
      experienceTotal?: number
      /** Format: int32 */
      firstWinBonus?: number
      gameEndedInEarlySurrender?: boolean
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      gameLength?: number
      gameMode?: string
      gameMutators?: string[]
      gameType?: string
      imbalancedTeamsNoPoints?: boolean
      invalid?: boolean
      /** Format: int32 */
      ipEarned?: number
      /** Format: int32 */
      ipTotal?: number
      isAramGame?: boolean
      leveledUp?: boolean
      /** Format: int32 */
      loyaltyBoostIpEarned?: number
      /** Format: int32 */
      loyaltyBoostXpEarned?: number
      myTeamStatus?: string
      newSpells?: number[]
      /** Format: int32 */
      odinBonusIp?: number
      /** Format: int32 */
      partyRewardsBonusIpEarned?: number
      pointsPenalties?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      previousLevel?: number
      /** Format: int64 */
      previousXpTotal?: number
      /** Format: int32 */
      queueBonusEarned?: number
      queueType?: string
      ranked?: boolean
      /** Format: int64 */
      reportGameId?: number
      rerollData?: LcuComponents['schemas']['LolPftPFTEndOfGamePoints']
      roomName?: string
      roomPassword?: string
      /** Format: int32 */
      rpEarned?: number
      sendStatsToTournamentProvider?: boolean
      /** Format: int32 */
      skinId?: number
      /** Format: int32 */
      skinIndex?: number
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      talentPointsGained?: number
      teamEarlySurrendered?: boolean
      teams?: LcuComponents['schemas']['LolPftPFTEndOfGameTeam'][]
      /** Format: int32 */
      timeUntilNextFirstWinBonus?: number
      /** Format: int64 */
      userId?: number
    }
    'LolPftPFTEndOfGameTeam': {
      championBans?: number[]
      fullId?: string
      isBottomTeam?: boolean
      isPlayerTeam?: boolean
      isWinningTeam?: boolean
      memberStatusString?: string
      name?: string
      players?: LcuComponents['schemas']['LolPftPFTEndOfGamePlayer'][]
      stats?: {
        [key: string]: unknown | undefined
      }
      tag?: string
      /** Format: int32 */
      teamId?: number
    }
    'LolPftPFTEvent': {
      action?: string
      data?: {
        [key: string]: unknown | undefined
      }[]
      /** Format: int64 */
      playerSurveyId?: number
    }
    'LolPftPFTMetadata': {
      /** Format: int64 */
      accountId?: number
      appName?: string
      appVersion?: string
      env?: string
      /** Format: double */
      homepageTimer?: number
      locale?: string
      stats?: LcuComponents['schemas']['LolPftPFTEndOfGameStats']
      systemOs?: string
      webRegion?: string
    }
    'LolPftPFTQuestionResponse': {
      /** Format: int64 */
      questionId?: number
      responseData?: {
        [key: string]: unknown | undefined
      }
    }
    'LolPftPFTSurvey': {
      caption?: string
      data?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      display?: string
      /** Format: int64 */
      id?: number
      title?: string
      type?: string
    }
    'LolPftPFTSurveyResults': {
      actions?: LcuComponents['schemas']['LolPftPFTEvent'][]
      questionResponses?: LcuComponents['schemas']['LolPftPFTQuestionResponse'][]
    }
    'LolPftPFTSurveyV1': {
      caption?: string
      /** Format: int64 */
      id?: number
      title?: string
      type?: string
      url?: string
    }
    'LolPftSummoner': {
      /** Format: int64 */
      accountId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      unnamed?: boolean
    }
    'LolPlayerBehaviorBanNotification': {
      displayReformCard?: boolean
      /** Format: int64 */
      id?: number
      isPermaBan?: boolean
      reason?: string
      source?: LcuComponents['schemas']['LolPlayerBehaviorNotificationSource']
      /** Format: int64 */
      timeUntilBanExpires?: number
    }
    'LolPlayerBehaviorCodeOfConductNotification': {
      message?: string
    }
    /** @enum {string} */
    'LolPlayerBehaviorGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    /** @enum {string} */
    'LolPlayerBehaviorNotificationSource': 'Invalid' | 'Login' | 'ForcedShutdown' | 'Message'
    'LolPlayerBehaviorPlayerBehavior_GameflowSessionResource': {
      phase?: LcuComponents['schemas']['LolPlayerBehaviorGameflowPhase']
    }
    'LolPlayerBehaviorPlayerBehavior_SimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LolPlayerBehaviorPlayerBehaviorConfig': {
      CodeOfConductEnabled?: boolean
      IsLoaded?: boolean
    }
    'LolPlayerBehaviorPlayerNotificationResource': {
      backgroundUrl?: string
      created?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolPlayerBehaviorReformCard': {
      chatLogs?: string[]
      gameIds?: number[]
      /** Format: int64 */
      id?: number
      playerFacingMessage?: string
      /** Format: int64 */
      punishmentLengthGames?: number
      /** Format: int64 */
      punishmentLengthTime?: number
      punishmentType?: string
      reason?: string
      /** Format: int64 */
      restrictedChatGamesRemaining?: number
      /** Format: int64 */
      timeWhenPunishmentExpires?: number
    }
    'LolPlayerBehaviorReformCardChatLogs': {
      inGameChatLogs?: string[]
      postGameChatLogs?: string[]
      preGameChatLogs?: string[]
    }
    'LolPlayerBehaviorReformCardV2': {
      /** Format: int64 */
      id?: number
      playerFacingMessage?: string
      punishedForGameIds?: number[]
      punishedForReformCardChatLogs?: LcuComponents['schemas']['LolPlayerBehaviorReformCardChatLogs'][]
      /** Format: int64 */
      punishedUntilDateMillis?: number
      /** Format: int64 */
      punishmentLengthGames?: number
      /** Format: int64 */
      punishmentLengthMillis?: number
      punishmentReason?: string
      punishmentType?: string
    }
    'LolPlayerBehaviorReporterFeedback': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      id?: number
      messageId?: string
      type?: string
    }
    'LolPlayerBehaviorRestrictionNotification': {
      displayReformCard?: boolean
      /** Format: int64 */
      expirationMillis?: number
      /** Format: int64 */
      gamesRemaining?: number
      /** Format: int64 */
      id?: number
      source?: LcuComponents['schemas']['LolPlayerBehaviorNotificationSource']
    }
    'LolPlayerBehaviorSettingsResource': {
      data?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      schemaVersion?: number
    }
    'LolPlayerBehaviorUserInfo': {
      userInfo?: string
    }
    'LolPlayerBehaviorUserInfoBanData': {
      restrictions?: LcuComponents['schemas']['LolPlayerBehaviorUserInfoRestriction'][]
    }
    'LolPlayerBehaviorUserInfoRestriction': {
      dat?: LcuComponents['schemas']['LolPlayerBehaviorUserInfoRestrictionData']
      reason?: string
      scope?: string
      type?: string
    }
    'LolPlayerBehaviorUserInfoRestrictionData': {
      /** Format: int64 */
      expirationMillis?: number
      gameData?: LcuComponents['schemas']['LolPlayerBehaviorUserInfoRestrictionGameData']
      gameLocation?: string
    }
    'LolPlayerBehaviorUserInfoRestrictionGameData': {
      additionalGameIds?: string[]
      gameLocation?: string
      productName?: string
      triggerGameId?: string
    }
    'LolPlayerBehaviorUserInfoToken': {
      ban?: LcuComponents['schemas']['LolPlayerBehaviorUserInfoBanData']
    }
    'LolPlayerLevelUpEndOfGameStats': {
      gameMode?: string
      gameMutators?: string[]
      gameType?: string
      leveledUp?: boolean
      newSpells?: number[]
      /** Format: int32 */
      previousLevel?: number
      queueType?: string
      /** Format: int32 */
      rpEarned?: number
    }
    'LolPlayerLevelUpGameDataSummonerSpell': {
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolPlayerLevelUpLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolPlayerLevelUpLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolPlayerLevelUpLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolPlayerLevelUpPlayerLevelUpEvent': {
      leveledUp?: boolean
      newQueues?: number[]
      newRuneSlotUnlocked?: boolean
      newSpells?: number[]
      /** Format: int32 */
      newSummonerLevel?: number
      nowHasAccessToLoot?: boolean
      nowHasAccessToPublicChatRooms?: boolean
      /** Format: int32 */
      rpEarned?: number
      switchedToStandardFreeToPlayChampRotation?: boolean
    }
    'LolPlayerLevelUpPlayerLevelUpEventAck': {
      /** Format: int32 */
      newSummonerLevel?: number
      seenThisEvent?: boolean
    }
    'LolPlayerLevelUpQueue': {
      /** Format: int32 */
      id?: number
      /** Format: int32 */
      minLevel?: number
    }
    'LolPlayerMessagingDynamicCelebrationMessagingNotificationResource': {
      /** Format: int64 */
      accountId?: number
      celebrationBody?: string
      celebrationMessage?: string
      celebrationTitle?: string
      celebrationType?: string
      /** Format: int32 */
      id?: number
      inventoryType?: string
      itemId?: string
      itemQuantity?: string
      msgId?: string
      /** Format: int32 */
      status?: number
    }
    'LolPlayerMessagingLoginDataPacket': {
      simpleMessages?: LcuComponents['schemas']['LolPlayerMessagingSimpleMessage'][]
    }
    'LolPlayerMessagingPlayerMessagingNotificationResource': {
      /** Format: int64 */
      accountId?: number
      body?: string
      /** Format: int32 */
      id?: number
      msgId?: string
      /** Format: int32 */
      status?: number
      title?: string
    }
    'LolPlayerMessagingSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      bodyCode?: string
      msgId?: string
      params?: string[]
      titleCode?: string
      type?: string
    }
    'LolPlayerPreferencesLoginSession': {
      /** Format: int64 */
      accountId?: number
      idToken?: string
      state?: LcuComponents['schemas']['LolPlayerPreferencesLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolPlayerPreferencesLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolPlayerPreferencesPlayerPreferences': {
      data?: string
      hash?: string
      type?: string
      version?: string
    }
    'LolPlayerPreferencesPlayerPreferencesEndpoint': {
      Enabled?: boolean
      EnforceHttps?: boolean
      /** Format: int64 */
      Retries?: number
      ServiceEndpoint?: string
      Version?: string
    }
    'LolPlayerReportSenderChampSelectReport': {
      categories?: string[]
      comment?: string
      location?: string
      match_token?: string
      offender_puuid?: string
    }
    'LolPlayerReportSenderEndOfGamePlayerReport': {
      comment?: string
      /** Format: int64 */
      gameId?: number
      offense?: string
      reportedPuuid?: string
    }
    'LolPlayerReportSenderGameAgnosticReportPayload': {
      categories?: string[]
      comment?: string
      location?: string
      offenderId?: string
      token?: string
      tokenType?: string
    }
    /** @enum {string} */
    'LolPreEndOfGameGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolPreEndOfGameGameflowSessionResource': {
      phase?: LcuComponents['schemas']['LolPreEndOfGameGameflowPhase']
    }
    'LolPreEndOfGameSequenceEvent': {
      name?: string
      /** Format: int32 */
      priority?: number
    }
    'LolPremadeVoiceAccountSettingsCategoryDataResource': {
      autoJoin?: boolean
      inputMode?: LcuComponents['schemas']['LolPremadeVoiceInputMode']
      muteOnConnect?: boolean
      pushToTalkKey?: string
      showFirstExperienceInGame?: boolean
      showFirstExperienceInLCU?: boolean
    }
    'LolPremadeVoiceAccountSettingsCategoryResource': {
      data?: LcuComponents['schemas']['LolPremadeVoiceAccountSettingsCategoryDataResource']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolPremadeVoiceAudioPropertiesResource': {
      isLoopbackEnabled?: boolean
      /** Format: int32 */
      micEnergy?: number
    }
    /** @enum {string} */
    'LolPremadeVoiceConfigReadinessEnum': 'NotReady' | 'Ready' | 'Disabled'
    'LolPremadeVoiceConfigStatus': {
      readiness?: LcuComponents['schemas']['LolPremadeVoiceConfigReadinessEnum']
    }
    /** @enum {string} */
    'LolPremadeVoiceConfigType': 'public' | 'player'
    'LolPremadeVoiceDeviceResource': {
      handle?: string
      is_current_device?: boolean
      is_default?: boolean
      name?: string
      usable?: boolean
    }
    'LolPremadeVoiceDeviceResourceRiotClient': {
      handle?: string
      is_current_device?: boolean
      is_default?: boolean
      is_effective_device?: boolean
      name?: string
    }
    'LolPremadeVoiceEntitlementsToken': {
      entitlements?: string[]
    }
    'LolPremadeVoiceExternalSession': {
      patchlineFullName?: string
      patchlineId?: string
      productId?: string
    }
    'LolPremadeVoiceFirstExperience': {
      showFirstExperienceInGame?: boolean
      showFirstExperienceInLCU?: boolean
    }
    'LolPremadeVoiceGameEventHotkeys': {
      evtPushToTalk?: string
    }
    'LolPremadeVoiceGameflowGameClient': {
      running?: boolean
    }
    /** @enum {string} */
    'LolPremadeVoiceGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolPremadeVoiceGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolPremadeVoiceGameflowGameClient']
      phase?: LcuComponents['schemas']['LolPremadeVoiceGameflowPhase']
    }
    'LolPremadeVoiceGameInputSettings': {
      GameEvents?: LcuComponents['schemas']['LolPremadeVoiceGameEventHotkeys']
    }
    /** @enum {string} */
    'LolPremadeVoiceInputMode': 'voiceActivity' | 'pushToTalk'
    'LolPremadeVoiceKeycodePushToTalkResource': {
      enabled?: boolean
      keyCombos?: LcuComponents['schemas']['LolPremadeVoiceKeyCombo'][]
    }
    'LolPremadeVoiceKeyCombo': {
      keyBindings?: LcuComponents['schemas']['LolPremadeVoicePushToTalkKey'][]
    }
    'LolPremadeVoiceLocalSettingsCategoryDataResource': {
      currentCaptureDeviceHandle?: string
      /** Format: int32 */
      inputVolume?: number
      /** Format: int32 */
      vadSensitivity?: number
    }
    'LolPremadeVoiceLocalSettingsCategoryResource': {
      data?: LcuComponents['schemas']['LolPremadeVoiceLocalSettingsCategoryDataResource']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolPremadeVoiceLoginSession': {
      connected?: boolean
    }
    'LolPremadeVoiceParticipantResource': {
      /** Format: int32 */
      energy?: number
      id?: string
      isMuted?: boolean
      isSpeaking?: boolean
      name?: string
      /** Format: int32 */
      volume?: number
    }
    'LolPremadeVoicePartyDto': {
      commsEnabled?: boolean
      partyId?: string
      players?: {
        [key: string]: LcuComponents['schemas']['LolPremadeVoicePlayerDto'] | undefined
      }
    }
    /** @enum {string} */
    'LolPremadeVoicePartyMemberRoleEnum':
      | 'LEADER'
      | 'MEMBER'
      | 'INVITED'
      | 'HOLD'
      | 'KICKED'
      | 'DECLINED'
    'LolPremadeVoicePlayerDto': {
      displayName?: string
      partyId?: string
      puuid?: string
      role?: LcuComponents['schemas']['LolPremadeVoicePartyMemberRoleEnum']
      /** Format: int64 */
      summonerId?: number
    }
    'LolPremadeVoicePremadeVoiceParticipantDto': {
      displayName?: string
      /** Format: int32 */
      energy?: number
      isMuted?: boolean
      isSpeaking?: boolean
      participantId?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      volume?: number
    }
    'LolPremadeVoicePushToTalkKey': {
      /** Format: int32 */
      key?: number
    }
    'LolPremadeVoicePushToTalkResource': {
      pttEnabled?: boolean
      pttKeyBinding?: string
    }
    'LolPremadeVoiceSessionResource': {
      id?: string
      isMuted?: boolean
      isTransmitEnabled?: boolean
      participants?: LcuComponents['schemas']['LolPremadeVoiceParticipantResource'][]
      status?: LcuComponents['schemas']['LolPremadeVoiceSessionStatus']
      /** Format: int32 */
      volume?: number
    }
    /** @enum {string} */
    'LolPremadeVoiceSessionStatus': 'active' | 'onHold'
    'LolPremadeVoiceSettingsResource': {
      autoJoin?: boolean
      currentCaptureDeviceHandle?: string
      inputMode?: LcuComponents['schemas']['LolPremadeVoiceInputMode']
      localMicMuted?: boolean
      loopbackEnabled?: boolean
      /** Format: int32 */
      micLevel?: number
      muteOnConnect?: boolean
      pttActive?: boolean
      pttKey?: string
      vadActive?: boolean
      /** Format: int32 */
      vadHangoverTime?: number
      /** Format: int32 */
      vadSensitivity?: number
    }
    'LolPremadeVoiceStateResource': {
      connected?: boolean
    }
    'LolPremadeVoiceSummoner': {
      /** Format: int64 */
      accountId?: number
      puuid?: string
    }
    'LolPremadeVoiceVoiceAvailability': {
      connectedToVoiceServer?: boolean
      disabledAfterLogin?: boolean
      enabled?: boolean
      showDisconnectedState?: boolean
      showUI?: boolean
      voiceChannelAvailable?: boolean
    }
    'LolPublishingContentRegionLocale': {
      locale?: string
    }
    'LolPurchaseWidgetBalance': {
      /** Format: int32 */
      amount?: number
      currencyType?: string
    }
    'LolPurchaseWidgetBaseSkinLineDto': {
      collectionCardPath?: string
      collectionDescription?: string
      items?: LcuComponents['schemas']['LolPurchaseWidgetSkinLineItemDto'][]
      localizedName?: string
      pricingOptions?: LcuComponents['schemas']['LolPurchaseWidgetPriceOptionDto'][]
      skinLineDescriptions?: LcuComponents['schemas']['LolPurchaseWidgetSkinLineDescriptionDto'][]
      splashPath?: string
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolPurchaseWidgetBundledItemPricingInfo': {
      discountPrices?: LcuComponents['schemas']['LolPurchaseWidgetDiscountPricingInfo'][]
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      quantity?: number
    }
    'LolPurchaseWidgetCapOffer': {
      active?: boolean
      createdDate?: string
      id?: string
      label?: string
      merchantId?: string
      payload?: LcuComponents['schemas']['LolPurchaseWidgetCapOfferPayloadEntry'][]
      productId?: string
      startDate?: string
      typeId?: string
    }
    'LolPurchaseWidgetCapOfferPayloadEntry': {
      fulfillmentTypeId?: string
      inventoryTypeUUID?: string
      itemInstanceId?: string
      itemPriceMap?: {
        [key: string]: number | undefined
      }
    }
    'LolPurchaseWidgetCapOrdersDataDto': {
      id?: string
      location?: string
      purchaser?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersTypedIdentifierDto']
      source?: string
      subOrders?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersSubOrderDto'][]
    }
    'LolPurchaseWidgetCapOrdersMetaDto': {
      xid?: string
    }
    'LolPurchaseWidgetCapOrdersOfferContextDto': {
      paymentOption?: string
      /** Format: int32 */
      quantity?: number
    }
    'LolPurchaseWidgetCapOrdersOfferDto': {
      id?: string
      productId?: string
    }
    'LolPurchaseWidgetCapOrdersOrderDto': {
      data?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersDataDto']
      meta?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersMetaDto']
    }
    'LolPurchaseWidgetCapOrdersSubOrderDto': {
      offer?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersOfferDto']
      offerContext?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersOfferContextDto']
      recipientId?: string
    }
    'LolPurchaseWidgetCapOrdersTypedIdentifierDto': {
      id?: string
      typeId?: string
    }
    'LolPurchaseWidgetCatalogPluginItem': {
      active?: boolean
      description?: string
      imagePath?: string
      /** Format: int64 */
      inactiveDate?: number
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
      metadata?: LcuComponents['schemas']['LolPurchaseWidgetItemMetadataEntry'][]
      name?: string
      owned?: boolean
      prices?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginPrice'][]
      /** Format: int64 */
      purchaseDate?: number
      questSkinInfo?: LcuComponents['schemas']['LolPurchaseWidgetSkinLineInfo']
      /** Format: int64 */
      releaseDate?: number
      subInventoryType?: string
      subTitle?: string
      tags?: string[]
    }
    'LolPurchaseWidgetCatalogPluginItemAssets': {
      colors?: string[]
      emblems?: LcuComponents['schemas']['LolPurchaseWidgetChampionSkinEmblem'][]
      iconPath?: string
      splashPath?: string
      tilePath?: string
    }
    'LolPurchaseWidgetCatalogPluginItemWithDetails': {
      assets?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginItemAssets']
      bundledDiscountPrices?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginPrice'][]
      bundledItems?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginItemWithDetails'][]
      item?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginItem']
      minimumBundlePrices?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginPrice'][]
      /** Format: int32 */
      quantity?: number
      requiredItems?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginItemWithDetails'][]
    }
    'LolPurchaseWidgetCatalogPluginPrice': {
      /** Format: int64 */
      cost?: number
      costType?: string
      currency?: string
      sale?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginSale']
    }
    'LolPurchaseWidgetCatalogPluginSale': {
      /** Format: int64 */
      cost?: number
      /** Format: float */
      discount?: number
      endDate?: string
      startDate?: string
    }
    'LolPurchaseWidgetChampionSkinEmblem': {
      emblemPath?: LcuComponents['schemas']['LolPurchaseWidgetChampionSkinEmblemPath']
      emblemPosition?: LcuComponents['schemas']['LolPurchaseWidgetChampionSkinEmblemPosition']
      name?: string
    }
    'LolPurchaseWidgetChampionSkinEmblemPath': {
      large?: string
      small?: string
    }
    'LolPurchaseWidgetChampionSkinEmblemPosition': {
      horizontal?: string
      vertical?: string
    }
    'LolPurchaseWidgetDiscountPricingInfo': {
      /** Format: int32 */
      cost?: number
      costType?: string
      currency?: string
      /** Format: float */
      discount?: number
    }
    'LolPurchaseWidgetItemChoiceDetails': {
      backgroundImage?: string
      contents?: LcuComponents['schemas']['LolPurchaseWidgetItemDetails'][]
      discount?: string
      displayType?: string
      /** Format: int32 */
      fullPrice?: number
      item?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginItem']
      purchaseOptions?: LcuComponents['schemas']['LolPurchaseWidgetPurchaseOption'][]
    }
    'LolPurchaseWidgetItemChoices': {
      choices?: LcuComponents['schemas']['LolPurchaseWidgetItemChoiceDetails'][]
      validationErrors?: LcuComponents['schemas']['LolPurchaseWidgetValidationErrorEntry'][]
    }
    'LolPurchaseWidgetItemCost': {
      /** Format: int64 */
      cost?: number
      currency?: string
      /** Format: float */
      discount?: number
    }
    'LolPurchaseWidgetItemDefinition': {
      assets?: LcuComponents['schemas']['LolPurchaseWidgetCatalogPluginItemAssets']
      bundledItemPrice?: LcuComponents['schemas']['LolPurchaseWidgetBundledItemPricingInfo']
      description?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      metadata?: LcuComponents['schemas']['LolPurchaseWidgetItemMetadataEntry'][]
      name?: string
      owned?: boolean
      subInventoryType?: string
      subTitle?: string
      tags?: string[]
    }
    'LolPurchaseWidgetItemDetails': {
      description?: string
      iconUrl?: string
      subTitle?: string
      title?: string
    }
    'LolPurchaseWidgetItemKey': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolPurchaseWidgetItemMetadataEntry': {
      type?: string
      value?: string
    }
    'LolPurchaseWidgetItemOwnership': {
      itemKey?: LcuComponents['schemas']['LolPurchaseWidgetItemKey']
      /** Format: int32 */
      quantity?: number
    }
    'LolPurchaseWidgetItemPrice': {
      currencyType?: string
      /** Format: int64 */
      price?: number
      purchasable?: boolean
    }
    'LolPurchaseWidgetItemSale': {
      /** Format: float */
      discount?: number
      endDate?: string
      startDate?: string
    }
    'LolPurchaseWidgetLoginSession': {
      /** Format: int64 */
      accountId?: number
      idToken?: string
      puuid?: string
      state?: LcuComponents['schemas']['LolPurchaseWidgetLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolPurchaseWidgetLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolPurchaseWidgetOrderNotificationResource': {
      eventType?: string
      eventTypeId?: string
      status?: string
    }
    'LolPurchaseWidgetPriceDetail': {
      itemKey?: LcuComponents['schemas']['LolPurchaseWidgetItemKey']
      price?: LcuComponents['schemas']['LolPurchaseWidgetItemPrice']
    }
    'LolPurchaseWidgetPriceOptionDto': {
      currencyImagePath?: string
      currencyName?: string
      currencyPaymentOption?: string
      currencyType?: string
      /** Format: int64 */
      price?: number
    }
    'LolPurchaseWidgetPurchasableItem': {
      bundledItems?: LcuComponents['schemas']['LolPurchaseWidgetItemDefinition'][]
      dependencies?: LcuComponents['schemas']['LolPurchaseWidgetItemDefinition'][]
      item?: LcuComponents['schemas']['LolPurchaseWidgetItemDefinition']
      purchaseOptions?: LcuComponents['schemas']['LolPurchaseWidgetPurchaseOption'][]
      sale?: LcuComponents['schemas']['LolPurchaseWidgetItemSale']
      validationErrors?: LcuComponents['schemas']['LolPurchaseWidgetValidationErrorEntry'][]
    }
    'LolPurchaseWidgetPurchaseItem': {
      itemKey?: LcuComponents['schemas']['LolPurchaseWidgetItemKey']
      purchaseCurrencyInfo?: LcuComponents['schemas']['LolPurchaseWidgetItemPrice']
      /** Format: int32 */
      quantity?: number
      source?: string
    }
    /** @enum {string} */
    'LolPurchaseWidgetPurchaseOfferOrderStates': 'NOT_STARTED' | 'IN_PROGRESS' | 'FAIL' | 'SUCCESS'
    'LolPurchaseWidgetPurchaseOfferOrderStatus': {
      message?: string
      orderState?: LcuComponents['schemas']['LolPurchaseWidgetPurchaseOfferOrderStates']
    }
    'LolPurchaseWidgetPurchaseOfferOrderStatuses': {
      statuses?: {
        [key: string]:
          | LcuComponents['schemas']['LolPurchaseWidgetPurchaseOfferOrderStatus']
          | undefined
      }
    }
    'LolPurchaseWidgetPurchaseOfferRequestV3': {
      currencyType?: string
      offerId?: string
      /** Format: int32 */
      price?: number
      /** Format: int32 */
      quantity?: number
    }
    'LolPurchaseWidgetPurchaseOfferResponseV3': {
      legacy?: boolean
      orderDto?: LcuComponents['schemas']['LolPurchaseWidgetCapOrdersOrderDto']
    }
    'LolPurchaseWidgetPurchaseOption': {
      priceDetails?: LcuComponents['schemas']['LolPurchaseWidgetPriceDetail'][]
    }
    'LolPurchaseWidgetPurchaseRequest': {
      items?: LcuComponents['schemas']['LolPurchaseWidgetPurchaseItem'][]
    }
    'LolPurchaseWidgetPurchaseResponse': {
      items?: LcuComponents['schemas']['LolPurchaseWidgetPurchaseItem'][]
      transactions?: LcuComponents['schemas']['LolPurchaseWidgetTransaction'][]
      useRMSConfirmation?: boolean
    }
    'LolPurchaseWidgetPurchaseWidgetConfig': {
      alwaysShowPurchaseDisclaimer?: boolean
      enabled?: boolean
      nonRefundableDisclaimerEnabled?: boolean
    }
    'LolPurchaseWidgetRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'LolPurchaseWidgetSale': {
      endDate?: string
      prices?: LcuComponents['schemas']['LolPurchaseWidgetItemCost'][]
      startDate?: string
    }
    'LolPurchaseWidgetSkinLineDescriptionDto': {
      description?: string
      iconImagePath?: string
      title?: string
    }
    'LolPurchaseWidgetSkinLineDescriptionInfo': {
      description?: string
      iconPath?: string
      title?: string
    }
    'LolPurchaseWidgetSkinLineInfo': {
      collectionCardPath?: string
      collectionDescription?: string
      descriptionInfo?: LcuComponents['schemas']['LolPurchaseWidgetSkinLineDescriptionInfo'][]
      name?: string
      splashPath?: string
      tiers?: LcuComponents['schemas']['LolPurchaseWidgetSkinLineTier'][]
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolPurchaseWidgetSkinLineItemDto': {
      largeImagePath?: string
      largeVideoPath?: string
      localizedLongName?: string
      localizedShortName?: string
      thumbnailImagePath?: string
    }
    'LolPurchaseWidgetSkinLineTier': {
      collectionSplashVideoPath?: string
      description?: string
      /** Format: int64 */
      id?: number
      loadScreenPath?: string
      name?: string
      shortName?: string
      splashPath?: string
      splashVideoPath?: string
      /** Format: int64 */
      stage?: number
      tilePath?: string
      uncenteredSplashPath?: string
    }
    'LolPurchaseWidgetTransaction': {
      iconUrl?: string
      itemKey?: LcuComponents['schemas']['LolPurchaseWidgetItemKey']
      itemName?: string
      transactionId?: string
    }
    'LolPurchaseWidgetValidateOfferError': {
      errorKey?: string
      meta?: string
    }
    'LolPurchaseWidgetValidateOfferRequestV3': {
      offerId?: string
    }
    'LolPurchaseWidgetValidateOfferResponseV3': {
      validationErrors?: LcuComponents['schemas']['LolPurchaseWidgetValidateOfferError'][]
    }
    'LolPurchaseWidgetValidationError': {
      errorCode?: string
      errorDetails?: {
        [key: string]: string | undefined
      }
      message?: string
      responseItems?: string[]
    }
    'LolPurchaseWidgetValidationErrorEntry': {
      id?: string
    }
    'LolPurchaseWidgetValidationRequest': {
      items?: LcuComponents['schemas']['LolPurchaseWidgetValidationRequestItem'][]
      ownedItems?: LcuComponents['schemas']['LolPurchaseWidgetItemOwnership'][]
    }
    'LolPurchaseWidgetValidationRequestItem': {
      itemKey?: LcuComponents['schemas']['LolPurchaseWidgetItemKey']
      /** Format: int32 */
      quantity?: number
    }
    'LolPurchaseWidgetValidationResponse': {
      items?: LcuComponents['schemas']['LolPurchaseWidgetValidationResponseItem'][]
      valid?: boolean
    }
    'LolPurchaseWidgetValidationResponseItem': {
      description?: string
      itemKey?: LcuComponents['schemas']['LolPurchaseWidgetItemKey']
      name?: string
      /** Format: int32 */
      quantity?: number
      sale?: LcuComponents['schemas']['LolPurchaseWidgetSale']
      validationCurrencyInfo?: LcuComponents['schemas']['LolPurchaseWidgetItemPrice'][]
    }
    'LolPurchaseWidgetWallet': {
      /** Format: int64 */
      accountId?: number
      balances?: LcuComponents['schemas']['LolPurchaseWidgetBalance'][]
      /** Format: int32 */
      version?: number
    }
    'LolRankedAchievedTier': {
      /** Format: int64 */
      division?: number
      queueType?: LcuComponents['schemas']['LolRankedLeagueQueueType']
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
    }
    'LolRankedEndOfGameStatsBlock': {
      /** Format: int64 */
      gameId?: number
    }
    'LolRankedEosNotificationResource': {
      division?: string
      notificationName?: string
      notificationType?: string
      queue?: string
      /** Format: int64 */
      seasonEndTime?: number
      tier?: string
    }
    'LolRankedEosNotificationsConfig': {
      config?: LcuComponents['schemas']['LolRankedEosNotificationsConfigEntry'][]
    }
    'LolRankedEosNotificationsConfigEntry': {
      name?: string
      /** Format: int64 */
      offsetTime1?: number
      /** Format: int64 */
      offsetTime2?: number
      /** Format: int64 */
      offsetTime3?: number
    }
    /** @enum {string} */
    'LolRankedEosNotificationType': 'FIRST_WARNING' | 'SECOND_WARNING' | 'SEASON_ENDED'
    'LolRankedEosRewardsConfig': {
      config?: LcuComponents['schemas']['LolRankedEosRewardsConfigEntry'][]
    }
    'LolRankedEosRewardsConfigEntry': {
      rewards?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      season?: number
    }
    'LolRankedEosSettingsData': {
      notificationShown?: boolean
    }
    'LolRankedEosSettingsResource': {
      data?: LcuComponents['schemas']['LolRankedEosSettingsData']
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolRankedGameflowGameData': {
      queue?: LcuComponents['schemas']['LolRankedQueue']
    }
    /** @enum {string} */
    'LolRankedGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolRankedGameflowSession': {
      gameData?: LcuComponents['schemas']['LolRankedGameflowGameData']
      phase?: LcuComponents['schemas']['LolRankedGameflowPhase']
    }
    'LolRankedGlobalNotification': {
      notifyReason?: string
      participantId?: string
      /** Format: int32 */
      position?: number
      queueType?: string
      tier?: string
    }
    'LolRankedLcuLeagueNotification': {
      /** Format: int32 */
      afkLpPenaltyAmount?: number
      /** Format: int32 */
      afkLpPenaltyLevel?: number
      canDemoteFromTier?: boolean
      changeReason?: string
      /** Format: int32 */
      consolationLpUsed?: number
      displayType?: LcuComponents['schemas']['LolRankedNotificationDisplayType']
      division?: LcuComponents['schemas']['LolRankedLeagueDivision']
      eligibleForPromoHelper?: boolean
      /** Format: int64 */
      gameId?: number
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      leaguePointsDelta?: number
      miniseriesProgress?: string
      /** Format: int32 */
      miniseriesWins?: number
      msgId?: string
      notifyReason?: string
      /** Format: int32 */
      numberOfPromotions?: number
      promoSeriesForRanksEnabled?: boolean
      /** Format: int32 */
      provisionalGamesRemaining?: number
      queueType?: LcuComponents['schemas']['LolRankedLeagueQueueType']
      /** Format: int32 */
      ratedRating?: number
      /** Format: int32 */
      ratedRatingDelta?: number
      ratedTier?: LcuComponents['schemas']['LolRankedRatedTier']
      rewardEarnedId?: string
      rewardEarnedType?: string
      splitPointsNotification?: LcuComponents['schemas']['LolRankedSplitPointsNotification']
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
      /** Format: int64 */
      timeUntilInactivityStatusChanges?: number
      wasAfkOrLeaver?: boolean
    }
    /** @enum {string} */
    'LolRankedLeagueDivision': 'I' | 'II' | 'III' | 'IV' | 'V' | 'NA'
    'LolRankedLeagueDivisionInfo': {
      /** Format: int64 */
      apexUnlockTimeMillis?: number
      division?: LcuComponents['schemas']['LolRankedLeagueDivision']
      /** Format: int32 */
      maxLeagueSize?: number
      /** Format: int32 */
      minLpForApexTier?: number
      standings?: LcuComponents['schemas']['LolRankedLeagueStanding'][]
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
      /** Format: int64 */
      topNumberOfPlayers?: number
    }
    'LolRankedLeagueLadderDTO': {
      /** Format: int64 */
      apexUnlockTimeMillis?: number
      entries?: LcuComponents['schemas']['LolRankedLeagueLadderEntryDTO'][]
      /** Format: int32 */
      maxLeagueSize?: number
      /** Format: int32 */
      minLpForTier?: number
      /** Format: int64 */
      nextApexUpdate?: number
      /** Format: int32 */
      provisionalGameThreshold?: number
      queueType?: string
      tier?: string
      /** Format: int32 */
      topNumberOfPlayers?: number
    }
    'LolRankedLeagueLadderEntryDTO': {
      earnedRegaliaRewardIds?: string[]
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      losses?: number
      miniSeriesProgress?: string
      /** Format: int32 */
      previousDayLeaguePosition?: number
      previousSeasonAchievedRank?: string
      previousSeasonAchievedTier?: string
      /** Format: int32 */
      provisionalGamesRemaining?: number
      puuid?: string
      rank?: string
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      tier?: string
      /** Format: int32 */
      wins?: number
    }
    'LolRankedLeagueLadderInfo': {
      divisions?: LcuComponents['schemas']['LolRankedLeagueDivisionInfo'][]
      /** Format: int64 */
      nextApexUpdateMillis?: number
      /** Format: int32 */
      provisionalGameThreshold?: number
      queueType?: LcuComponents['schemas']['LolRankedLeagueQueueType']
      requestedRankedEntry?: LcuComponents['schemas']['LolRankedLeagueStanding']
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
    }
    'LolRankedLeagueNotification': {
      /** Format: int32 */
      afkLpPenaltyAmount?: number
      /** Format: int32 */
      afkLpPenaltyLevel?: number
      canDemoteFromTier?: boolean
      changeReason?: string
      /** Format: int32 */
      consolationLpUsed?: number
      eligibleForPromoHelper?: boolean
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      leaguePointsDelta?: number
      miniseriesProgress?: string
      notifyReason?: string
      promoSeriesForRanksEnabled?: boolean
      /** Format: int32 */
      provisionalGamesRemaining?: number
      queueType?: string
      rank?: string
      /** Format: int32 */
      ratedRating?: number
      /** Format: int32 */
      ratedRatingDelta?: number
      ratedTier?: string
      /** Format: int32 */
      splitPoints?: number
      splitPointsBreakdown?: {
        [key: string]: number | undefined
      }
      tier?: string
      wasAfkOrLeaver?: boolean
    }
    'LolRankedLeagueNotifications': {
      globalNotifications?: LcuComponents['schemas']['LolRankedGlobalNotification'][]
      notifications?: LcuComponents['schemas']['LolRankedLeagueNotification'][]
    }
    /** @enum {string} */
    'LolRankedLeagueQueueType':
      | 'NONE'
      | 'RANKED_SOLO_5x5'
      | 'RANKED_FLEX_SR'
      | 'RANKED_FLEX_TT'
      | 'RANKED_TFT'
      | 'RANKED_TFT_TURBO'
      | 'RANKED_TFT_PAIRS'
    'LolRankedLeaguesSeasonRewardConfig': {
      QualificationWarningEnabled?: boolean
    }
    'LolRankedLeagueStanding': {
      division?: LcuComponents['schemas']['LolRankedLeagueDivision']
      earnedRegaliaRewardIds?: string[]
      isProvisional?: boolean
      /** Format: int64 */
      leaguePoints?: number
      /** Format: int64 */
      losses?: number
      miniseriesResults?: LcuComponents['schemas']['LolRankedMiniseries'][]
      pendingDemotion?: boolean
      pendingPromotion?: boolean
      /** Format: int32 */
      position?: number
      /** Format: int32 */
      positionDelta?: number
      /** Format: int32 */
      previousPosition?: number
      previousSeasonAchievedDivision?: LcuComponents['schemas']['LolRankedLeagueDivision']
      previousSeasonAchievedTier?: LcuComponents['schemas']['LolRankedLeagueTier']
      /** Format: int32 */
      provisionalGamesRemaining?: number
      puuid?: string
      /** Format: int32 */
      rankedRegaliaLevel?: number
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
      /** Format: int64 */
      wins?: number
    }
    /** @enum {string} */
    'LolRankedLeagueTier':
      | 'NONE'
      | 'IRON'
      | 'BRONZE'
      | 'SILVER'
      | 'GOLD'
      | 'PLATINUM'
      | 'DIAMOND'
      | 'MASTER'
      | 'GRANDMASTER'
      | 'CHALLENGER'
    'LolRankedLeagueTierAndRankDTO': {
      playerOrTeamId?: string
      playerOrTeamName?: string
      queueType?: string
      rank?: string
      tier?: string
    }
    'LolRankedLoginSession': {
      /** Format: int64 */
      accountId?: number
      state?: LcuComponents['schemas']['LolRankedLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolRankedLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    /** @enum {string} */
    'LolRankedMiniseries': 'W' | 'L' | 'N'
    /** @enum {string} */
    'LolRankedNotificationDisplayType': 'NONE' | 'TOAST' | 'MODAL' | 'VIGNETTE'
    'LolRankedParticipantTiers': {
      achievedTiers?: LcuComponents['schemas']['LolRankedAchievedTier'][]
      /** Format: int64 */
      summonerId?: number
    }
    'LolRankedQueue': {
      type?: {
        [key: string]: unknown | undefined
      }
    }
    'LolRankedQueuesAndPuuidsPayload': {
      queueTypes?: LcuComponents['schemas']['LolRankedLeagueQueueType'][]
      summonerIds?: number[]
    }
    'LolRankedRankedQueueStats': {
      division?: LcuComponents['schemas']['LolRankedLeagueDivision']
      isProvisional?: boolean
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      losses?: number
      miniSeriesProgress?: string
      previousSeasonAchievedDivision?: LcuComponents['schemas']['LolRankedLeagueDivision']
      previousSeasonAchievedTier?: LcuComponents['schemas']['LolRankedLeagueTier']
      previousSeasonEndDivision?: LcuComponents['schemas']['LolRankedLeagueDivision']
      previousSeasonEndTier?: LcuComponents['schemas']['LolRankedLeagueTier']
      /** Format: int32 */
      provisionalGamesRemaining?: number
      /** Format: int32 */
      provisionalGameThreshold?: number
      queueType?: LcuComponents['schemas']['LolRankedLeagueQueueType']
      /** Format: int32 */
      ratedRating?: number
      ratedTier?: LcuComponents['schemas']['LolRankedRatedTier']
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
      warnings?: LcuComponents['schemas']['LolRankedRankedQueueWarnings']
      /** Format: int32 */
      wins?: number
    }
    'LolRankedRankedQueueStatsDTO': {
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      losses?: number
      miniSeriesProgress?: string
      previousSeasonAchievedRank?: string
      previousSeasonAchievedTier?: string
      previousSeasonEndRank?: string
      previousSeasonEndTier?: string
      /** Format: int32 */
      provisionalGamesRemaining?: number
      /** Format: int32 */
      provisionalGameThreshold?: number
      queueType?: string
      rank?: string
      /** Format: int32 */
      ratedRating?: number
      ratedTier?: string
      tier?: string
      warnings?: LcuComponents['schemas']['LolRankedRankedQueueWarningsDTO']
      /** Format: int32 */
      wins?: number
    }
    'LolRankedRankedQueueWarnings': {
      /** Format: int32 */
      daysUntilDecay?: number
      /** Format: int32 */
      demotionWarning?: number
      displayDecayWarning?: boolean
      /** Format: int64 */
      timeUntilInactivityStatusChanges?: number
    }
    'LolRankedRankedQueueWarningsDTO': {
      /** Format: int32 */
      apexDaysUntilDecay?: number
      /** Format: int32 */
      daysUntilDecay?: number
      /** Format: int32 */
      demotionWarning?: number
      displayDecayWarning?: boolean
      /** Format: int64 */
      timeUntilInactivityStatusChanges?: number
    }
    'LolRankedRankedStats': {
      earnedRegaliaRewardIds?: string[]
      highestPreviousSeasonAchievedDivision?: LcuComponents['schemas']['LolRankedLeagueDivision']
      highestPreviousSeasonAchievedTier?: LcuComponents['schemas']['LolRankedLeagueTier']
      highestPreviousSeasonEndDivision?: LcuComponents['schemas']['LolRankedLeagueDivision']
      highestPreviousSeasonEndTier?: LcuComponents['schemas']['LolRankedLeagueTier']
      highestRankedEntry?: LcuComponents['schemas']['LolRankedRankedQueueStats']
      highestRankedEntrySR?: LcuComponents['schemas']['LolRankedRankedQueueStats']
      queueMap?: {
        [key: string]: LcuComponents['schemas']['LolRankedRankedQueueStats'] | undefined
      }
      queues?: LcuComponents['schemas']['LolRankedRankedQueueStats'][]
      /** Format: int32 */
      rankedRegaliaLevel?: number
      seasons?: {
        [key: string]: LcuComponents['schemas']['LolRankedSeasonDTO'] | undefined
      }
      splitsProgress?: {
        [key: string]: number | undefined
      }
    }
    'LolRankedRankedStatsDTO': {
      earnedRegaliaRewardIds?: string[]
      highestPreviousSeasonAchievedRank?: string
      highestPreviousSeasonAchievedTier?: string
      highestPreviousSeasonEndRank?: string
      highestPreviousSeasonEndTier?: string
      queues?: LcuComponents['schemas']['LolRankedRankedQueueStatsDTO'][]
      seasons?: {
        [key: string]: LcuComponents['schemas']['LolRankedSeasonDTO'] | undefined
      }
      splitsProgress?: {
        [key: string]: number | undefined
      }
    }
    'LolRankedRatedLadderEntryDTO': {
      /** Format: int32 */
      previousUpdateLadderPosition?: number
      puuid?: string
      /** Format: int32 */
      ratedRating?: number
      ratedTier?: string
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      wins?: number
    }
    'LolRankedRatedLadderInfo': {
      queueType?: LcuComponents['schemas']['LolRankedLeagueQueueType']
      standings?: LcuComponents['schemas']['LolRankedRatedLadderStanding'][]
    }
    'LolRankedRatedLadderStanding': {
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      position?: number
      /** Format: int32 */
      positionDelta?: number
      /** Format: int32 */
      previousPosition?: number
      puuid?: string
      ratedTier?: LcuComponents['schemas']['LolRankedRatedTier']
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
      /** Format: int32 */
      wins?: number
    }
    /** @enum {string} */
    'LolRankedRatedTier': 'NONE' | 'GRAY' | 'GREEN' | 'BLUE' | 'PURPLE' | 'ORANGE'
    'LolRankedRewardsInfo': {
      /** Format: int32 */
      currentSeasonId?: number
      currentSplit?: LcuComponents['schemas']['LolRankedSeasonSplit']
      /** Format: int32 */
      currentSplitId?: number
      rewardInfoByRewardId?: {
        [key: string]: LcuComponents['schemas']['LolRankedSplitReward'] | undefined
      }
      splits?: LcuComponents['schemas']['LolRankedSeasonSplit'][]
    }
    'LolRankedSeasonDTO': {
      /** Format: int64 */
      currentSeasonEnd?: number
      /** Format: int32 */
      currentSeasonId?: number
      /** Format: int64 */
      nextSeasonStart?: number
    }
    'LolRankedSeasonSplit': {
      /** Format: int64 */
      endTimeMillis?: number
      rewardTrack?: LcuComponents['schemas']['LolRankedSplitRewardGroup'][]
      /** Format: int32 */
      seasonId?: number
      /** Format: int32 */
      splitId?: number
      /** Format: int64 */
      startTimeMillis?: number
    }
    'LolRankedSeasonSplitDTO': {
      /** Format: int64 */
      endTime?: number
      rewardTrack?: LcuComponents['schemas']['LolRankedSplitRewardGroupDTO'][]
      /** Format: int32 */
      seasonId?: number
      /** Format: int32 */
      splitId?: number
      /** Format: int64 */
      startTime?: number
    }
    'LolRankedSequenceEvent': {
      name?: string
      /** Format: int32 */
      priority?: number
    }
    /** @enum {string} */
    'LolRankedSeverity': 'WARNING' | 'ALERT'
    'LolRankedSignedRankedStatsDTO': {
      earnedRegaliaRewardIds?: string[]
      highestPreviousSeasonAchievedRank?: string
      highestPreviousSeasonAchievedTier?: string
      highestPreviousSeasonEndRank?: string
      highestPreviousSeasonEndTier?: string
      jwt?: string
      queues?: LcuComponents['schemas']['LolRankedRankedQueueStatsDTO'][]
      seasons?: {
        [key: string]: LcuComponents['schemas']['LolRankedSeasonDTO'] | undefined
      }
      splitsProgress?: {
        [key: string]: number | undefined
      }
    }
    'LolRankedSocialLeaderboardRankedQueueStats': {
      division?: LcuComponents['schemas']['LolRankedLeagueDivision']
      isProvisional?: boolean
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      losses?: number
      miniSeriesProgress?: string
      /** Format: int32 */
      provisionalGamesRemaining?: number
      /** Format: int32 */
      provisionalGameThreshold?: number
      queueType?: LcuComponents['schemas']['LolRankedLeagueQueueType']
      /** Format: int32 */
      ratedRating?: number
      ratedTier?: LcuComponents['schemas']['LolRankedRatedTier']
      tier?: LcuComponents['schemas']['LolRankedLeagueTier']
      /** Format: int32 */
      wins?: number
    }
    'LolRankedSocialLeaderboardRankedQueueStatsDTO': {
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      losses?: number
      miniSeriesProgress?: string
      /** Format: int32 */
      provisionalGamesRemaining?: number
      /** Format: int32 */
      provisionalGameThreshold?: number
      queueType?: string
      rank?: string
      /** Format: int32 */
      ratedRating?: number
      ratedTier?: string
      tier?: string
      /** Format: int32 */
      wins?: number
    }
    'LolRankedSplitPointsNotification': {
      nextRewardId?: string
      nextRewardType?: string
      /** Format: int32 */
      previousSplitPointsRequired?: number
      /** Format: int32 */
      splitPointsAfterGame?: number
      /** Format: int32 */
      splitPointsBeforeGame?: number
      splitPointsBreakdown?: {
        [key: string]: number | undefined
      }
      /** Format: int32 */
      splitPointsDelta?: number
      /** Format: int32 */
      splitPointsRequired?: number
    }
    'LolRankedSplitReward': {
      description?: string
      id?: string
      /** Format: int32 */
      pointsRequired?: number
      /** Format: int32 */
      quantity?: number
      /** Format: int32 */
      regaliaLevel?: number
      rewardType?: string
      /** Format: int32 */
      splitId?: number
    }
    'LolRankedSplitRewardDTO': {
      defaultRewardId?: string
      metadata?: LcuComponents['schemas']['LolRankedSplitRewardsMetaData']
      rewardType?: string
      tieredRewardIds?: {
        [key: string]: string | undefined
      }
    }
    'LolRankedSplitRewardGroup': {
      rewards?: LcuComponents['schemas']['LolRankedSplitReward'][]
      /** Format: int32 */
      splitPoints?: number
    }
    'LolRankedSplitRewardGroupDTO': {
      rewards?: LcuComponents['schemas']['LolRankedSplitRewardDTO'][]
      /** Format: int32 */
      splitPoints?: number
    }
    'LolRankedSplitRewardsMetaData': {
      description?: string
      /** Format: int32 */
      quantity?: number
    }
    'LolRankedSummoner': {
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolRegaliaAccountIdAndSummonerId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolRegaliaChatPresence': {
      /** Format: int32 */
      icon?: number
      lol?: LcuComponents['schemas']['LolRegaliaChatPresenceLolData']
      /** Format: int64 */
      summonerId?: number
    }
    'LolRegaliaChatPresenceExternal': {
      /** Format: int32 */
      icon?: number
      id?: string
      lol?: {
        [key: string]: string | undefined
      }
      /** Format: int64 */
      summonerId?: number
    }
    'LolRegaliaChatPresenceLolData': {
      /** Format: int32 */
      level?: number
      rankedLeagueDivision?: LcuComponents['schemas']['LolRegaliaLeagueDivision']
      rankedLeagueQueue?: LcuComponents['schemas']['LolRegaliaLeagueQueueType']
      rankedLeagueTier?: LcuComponents['schemas']['LolRegaliaLeagueTier']
      rankedPrevSeasonDivision?: LcuComponents['schemas']['LolRegaliaLeagueDivision']
      rankedPrevSeasonTier?: LcuComponents['schemas']['LolRegaliaLeagueTier']
      /** Format: int32 */
      rankedSplitRewardLevel?: number
      regalia?: LcuComponents['schemas']['LolRegaliaRegaliaSettings']
    }
    'LolRegaliaItemKey': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    /** @enum {string} */
    'LolRegaliaLeagueDivision': 'I' | 'II' | 'III' | 'IV' | 'V' | 'NA'
    /** @enum {string} */
    'LolRegaliaLeagueQueueType':
      | 'NONE'
      | 'RANKED_SOLO_5x5'
      | 'RANKED_FLEX_SR'
      | 'RANKED_FLEX_TT'
      | 'RANKED_TFT'
      | 'RANKED_TFT_TURBO'
      | 'RANKED_TFT_PAIRS'
    /** @enum {string} */
    'LolRegaliaLeagueTier':
      | 'NONE'
      | 'IRON'
      | 'BRONZE'
      | 'SILVER'
      | 'GOLD'
      | 'PLATINUM'
      | 'DIAMOND'
      | 'MASTER'
      | 'GRANDMASTER'
      | 'CHALLENGER'
    'LolRegaliaLoadout': {
      id?: string
      loadout?: LcuComponents['schemas']['LolRegaliaRegaliaLoadout']
      name?: string
      scope?: string
    }
    'LolRegaliaRankedQueueStats': {
      division?: LcuComponents['schemas']['LolRegaliaLeagueDivision']
      isProvisional?: boolean
      queueType?: LcuComponents['schemas']['LolRegaliaLeagueQueueType']
      tier?: LcuComponents['schemas']['LolRegaliaLeagueTier']
    }
    'LolRegaliaRankedStats': {
      highestPreviousSeasonAchievedTier?: LcuComponents['schemas']['LolRegaliaLeagueTier']
      highestRankedEntry?: LcuComponents['schemas']['LolRegaliaRankedQueueStats']
      queues?: LcuComponents['schemas']['LolRegaliaRankedQueueStats'][]
      /** Format: int32 */
      rankedRegaliaLevel?: number
    }
    'LolRegaliaRegalia': {
      bannerType?: string
      crestType?: string
      highestRankedEntry?: LcuComponents['schemas']['LolRegaliaRegaliaRankedEntry']
      lastSeasonHighestRank?: LcuComponents['schemas']['LolRegaliaLeagueTier']
      /** Format: int32 */
      profileIconId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolRegaliaRegaliaAsync': {
      md5?: string
    }
    /** @enum {string} */
    'LolRegaliaRegaliaBannerType': 'blank' | 'lastSeasonHighestRank'
    /** @enum {string} */
    'LolRegaliaRegaliaCrestType': 'none' | 'prestige' | 'ranked'
    'LolRegaliaRegaliaFrontendConfig': {
      hovercardEnabled?: boolean
      selectionsEnabled?: boolean
    }
    'LolRegaliaRegaliaLoadout': {
      REGALIA_BANNER_SLOT?: LcuComponents['schemas']['LolRegaliaItemKey']
      REGALIA_CREST_SLOT?: LcuComponents['schemas']['LolRegaliaItemKey']
    }
    'LolRegaliaRegaliaPlatformConfig': {
      HovercardEnabled?: boolean
      SelectionsEnabled?: boolean
    }
    'LolRegaliaRegaliaPreferences': {
      preferredBannerType?: string
      preferredCrestType?: string
    }
    'LolRegaliaRegaliaRankedEntry': {
      division?: LcuComponents['schemas']['LolRegaliaLeagueDivision']
      queueType?: LcuComponents['schemas']['LolRegaliaLeagueQueueType']
      /** Format: int32 */
      splitRewardLevel?: number
      tier?: LcuComponents['schemas']['LolRegaliaLeagueTier']
    }
    'LolRegaliaRegaliaSettings': {
      bannerType?: LcuComponents['schemas']['LolRegaliaRegaliaBannerType']
      crestType?: LcuComponents['schemas']['LolRegaliaRegaliaCrestType']
    }
    'LolRegaliaRegaliaSettingsExternal': {
      /** Format: int32 */
      bannerType?: number
      /** Format: int32 */
      crestType?: number
    }
    'LolRegaliaRegaliaWithPreferences': {
      bannerType?: string
      crestType?: string
      highestRankedEntry?: LcuComponents['schemas']['LolRegaliaRegaliaRankedEntry']
      lastSeasonHighestRank?: LcuComponents['schemas']['LolRegaliaLeagueTier']
      preferredBannerType?: string
      preferredCrestType?: string
      /** Format: int32 */
      profileIconId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolRegaliaSummoner': {
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolRegaliaSummonerProfile': {
      regalia?: string
    }
    'LolRegaliaSummonerProfileUpdate': {
      key?: string
      value?: string
    }
    'LolReplaysClashPlaymodeRestrictedInfo': {
      isRestricted?: boolean
    }
    'LolReplaysGameflowAvailability': {
      state?: string
    }
    'LolReplaysGameflowGameClient': {
      running?: boolean
    }
    /** @enum {string} */
    'LolReplaysGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolReplaysGameflowSession': {
      gameClient?: LcuComponents['schemas']['LolReplaysGameflowGameClient']
      phase?: LcuComponents['schemas']['LolReplaysGameflowPhase']
    }
    /** @enum {string} */
    'LolReplaysGameflowWatchPhase':
      | 'None'
      | 'WatchStarted'
      | 'WatchInProgress'
      | 'WatchFailedToLaunch'
    'LolReplaysInstallPaths': {
      gameExecutablePath?: string
      gameInstallRoot?: string
    }
    /** @enum {string} */
    'LolReplaysMetadataState':
      | 'checking'
      | 'found'
      | 'watch'
      | 'download'
      | 'downloading'
      | 'incompatible'
      | 'missingOrExpired'
      | 'retryDownload'
      | 'lost'
      | 'unsupported'
      | 'error'
    'LolReplaysReplayContextData': {
      componentType?: string
    }
    'LolReplaysReplayCreateMetadata': {
      /** Format: int64 */
      gameEnd?: number
      gameType?: string
      gameVersion?: string
      /** Format: int32 */
      queueId?: number
    }
    'LolReplaysReplayMetadata': {
      /** Format: int32 */
      downloadProgress?: number
      /** Format: int64 */
      gameId?: number
      state?: LcuComponents['schemas']['LolReplaysMetadataState']
    }
    'LolReplaysReplaysConfiguration': {
      gameVersion?: string
      isInTournament?: boolean
      isLoggedIn?: boolean
      isPatching?: boolean
      isPlayingGame?: boolean
      isPlayingReplay?: boolean
      isReplaysEnabled?: boolean
      isReplaysForEndOfGameEnabled?: boolean
      isReplaysForMatchHistoryEnabled?: boolean
      minServerVersion?: string
      /** Format: double */
      minutesUntilReplayConsideredLost?: number
    }
    'LolReplaysReplaysDynamicConfig': {
      MinSupportedGameServerVersion?: string
      /** Format: double */
      MinutesUntilReplayConsideredLost?: number
    }
    'LolReplaysReplaysSettingsData': {
      'highlights-folder-path'?: string
      'replays-folder-path'?: string
    }
    'LolReplaysReplaysSettingsResource': {
      data?: LcuComponents['schemas']['LolReplaysReplaysSettingsData']
    }
    'LolReplaysRoflFileMetadata': {
      /** Format: int32 */
      gameLength?: number
      gameVersion?: string
      /** Format: int32 */
      lastGameChunkId?: number
      /** Format: int32 */
      lastKeyFrameId?: number
    }
    'LolRewardsGrantorDescription': {
      appName?: string
      entityId?: string
    }
    /** @enum {string} */
    'LolRewardsGrantStatus': 'PENDING_FULFILLMENT' | 'PENDING_SELECTION' | 'FULFILLED' | 'FAILED'
    'LolRewardsRegionLocale': {
      locale?: string
      region?: string
    }
    'LolRewardsRequestDTO-SelectionRequestDTO': {
      data?: LcuComponents['schemas']['LolRewardsSelectionRequestDTO']
      metadata?: LcuComponents['schemas']['LolRewardsRequestMetadataDTO']
    }
    'LolRewardsRequestMetadataDTO': {
      transactionId?: string
    }
    'LolRewardsResponseDTO-SvcRewardGrant': {
      data?: LcuComponents['schemas']['LolRewardsSvcRewardGrant']
      metadata?: LcuComponents['schemas']['LolRewardsResponseMetadataDTO']
    }
    'LolRewardsResponseDTO-vector-SvcRewardGrant': {
      data?: LcuComponents['schemas']['LolRewardsSvcRewardGrant'][]
      metadata?: LcuComponents['schemas']['LolRewardsResponseMetadataDTO']
    }
    'LolRewardsResponseDTO-vector-SvcRewardGroup': {
      data?: LcuComponents['schemas']['LolRewardsSvcRewardGroup'][]
      metadata?: LcuComponents['schemas']['LolRewardsResponseMetadataDTO']
    }
    'LolRewardsResponseMetadataDTO': Record<string, never>
    'LolRewardsReward': {
      fulfillmentSource?: string
      id?: string
      itemId?: string
      itemType?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
    }
    'LolRewardsRewardGrant': {
      info?: LcuComponents['schemas']['LolRewardsSvcRewardGrant']
      rewardGroup?: LcuComponents['schemas']['LolRewardsSvcRewardGroup']
    }
    'LolRewardsRewardsConfig': {
      Enabled?: boolean
    }
    /** @enum {string} */
    'LolRewardsRewardStatus': 'PENDING' | 'FULFILLED' | 'FAILED'
    /** @enum {string} */
    'LolRewardsRewardStrategy': 'ALL' | 'RANDOM' | 'SELECTION'
    'LolRewardsRMSPayload': {
      affinities?: string[]
      productId?: string
    }
    'LolRewardsSelectionRequestDTO': {
      rewardGroupId?: string
      selections?: string[]
    }
    'LolRewardsSelectionStrategyConfig': {
      /** Format: int32 */
      maxSelectionsAllowed?: number
      /** Format: int32 */
      minSelectionsAllowed?: number
    }
    'LolRewardsSvcRewardGrant': {
      granteeId?: string
      grantElements?: LcuComponents['schemas']['LolRewardsSvcRewardGrantElement'][]
      grantorDescription?: LcuComponents['schemas']['LolRewardsGrantorDescription']
      id?: string
      rewardGroupId?: string
      selectedIds?: string[]
      status?: LcuComponents['schemas']['LolRewardsGrantStatus']
      viewed?: boolean
    }
    'LolRewardsSvcRewardGrantElement': {
      elementId?: string
      fulfillmentSource?: string
      itemId?: string
      itemType?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
      status?: LcuComponents['schemas']['LolRewardsRewardStatus']
    }
    'LolRewardsSvcRewardGroup': {
      active?: boolean
      childRewardGroupIds?: string[]
      id?: string
      internalName?: string
      localizations?: {
        [key: string]: string | undefined
      }
      media?: {
        [key: string]: string | undefined
      }
      productId?: string
      rewards?: LcuComponents['schemas']['LolRewardsReward'][]
      rewardStrategy?: LcuComponents['schemas']['LolRewardsRewardStrategy']
      selectionStrategyConfig?: LcuComponents['schemas']['LolRewardsSelectionStrategyConfig']
      types?: string[]
    }
    'LolRiotclientUpgraderGameflowAvailability': {
      isAvailable?: boolean
      state?: string
    }
    'LolRiotMessagingServiceChampionMasteryLevelUp': {
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      championLevel?: number
      hasLeveledUp?: boolean
      /** Format: int64 */
      id?: number
      /** Format: int64 */
      playerId?: number
    }
    /** @enum {string} */
    'LolRiotMessagingServiceGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolRiotMessagingServiceGameflowSession': {
      phase?: LcuComponents['schemas']['LolRiotMessagingServiceGameflowPhase']
    }
    'LolRsoAuthAccessToken': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    'LolRsoAuthAuthError': {
      error?: string
      errorDescription?: string
    }
    'LolRsoAuthAuthHint': {
      context?: {
        [key: string]: unknown | undefined
      }
      required?: boolean
      type?: LcuComponents['schemas']['LolRsoAuthAuthHintType']
    }
    /** @enum {string} */
    'LolRsoAuthAuthHintType':
      | 'email_verification'
      | 'password_reset'
      | 'parental_consent'
      | 'ambiguous_username'
    'LolRsoAuthAuthorization': {
      /** Format: int64 */
      currentAccountId?: number
      currentPlatformId?: string
      subject?: string
    }
    'LolRsoAuthAuthorizationRequest': {
      claims?: string[]
      clientId?: string
      scope?: string[]
      trustLevels?: LcuComponents['schemas']['LolRsoAuthRSOAuthorizationTrustLevel'][]
    }
    'LolRsoAuthAuthorizationResponse': {
      authorization?: LcuComponents['schemas']['LolRsoAuthImplicitAuthorization']
      type?: string
    }
    /** @enum {string} */
    'LolRsoAuthConfigReadinessEnum': 'NotReady' | 'Ready' | 'Disabled'
    'LolRsoAuthConfigStatus': {
      readiness?: LcuComponents['schemas']['LolRsoAuthConfigReadinessEnum']
    }
    /** @enum {string} */
    'LolRsoAuthConfigType': 'public' | 'player'
    'LolRsoAuthDeviceId': {
      collectorServerName?: string
      frameUrl?: string
      installId?: string
      merchantId?: string
      sessionId?: string
    }
    'LolRsoAuthEntitlementsToken': {
      entitlements?: string[]
      /** Format: int64 */
      expiry?: number
      token?: string
    }
    'LolRsoAuthIdToken': {
      /** Format: int64 */
      expiry?: number
      token?: string
    }
    'LolRsoAuthImplicitAuthorization': {
      accessToken?: LcuComponents['schemas']['LolRsoAuthAccessToken']
      idToken?: LcuComponents['schemas']['LolRsoAuthIdToken']
    }
    'LolRsoAuthPublicClientConfig': {
      clientId?: string
      url?: string
    }
    'LolRsoAuthRegionStatus': {
      enabled?: boolean
      isLQFallbackAllowed?: boolean
      isUserInfoEnabled?: boolean
      platformId?: string
    }
    /** @enum {string} */
    'LolRsoAuthRSOAuthorizationTrustLevel': 'always_trusted' | 'trusted_device' | 'always_verify'
    'LolRsoAuthRSOConfigReadyState': {
      ready?: boolean
    }
    'LolRsoAuthRSOJWTConfig': {
      token?: string
    }
    'LolRsoAuthRSOPlayerCredentials': {
      password?: string
      platformId?: string
      username?: string
    }
    'LolRsoAuthSessionResponse': {
      error?: string
      type?: string
    }
    'LolRsoAuthUserInfo': {
      userInfo?: string
    }
    'LolServiceStatusBroadcastMessage': {
      content?: string
      messageKey?: string
      severity?: string
    }
    'LolServiceStatusBroadcastNotification': {
      broadcastMessages?: LcuComponents['schemas']['LolServiceStatusBroadcastMessage'][]
    }
    'LolServiceStatusLegacyServiceStatusMessage': {
      content?: string
      created_at?: string
      heading?: string
      severity?: string
      translations?: LcuComponents['schemas']['LolServiceStatusLegacyServiceStatusTranslation'][]
      updated_at?: string
    }
    'LolServiceStatusLegacyServiceStatusResponse': {
      messages?: LcuComponents['schemas']['LolServiceStatusLegacyServiceStatusMessage'][]
      status?: string
    }
    'LolServiceStatusLegacyServiceStatusTranslation': {
      content?: string
      heading?: string
      locale?: string
    }
    'LolServiceStatusLoginDataPacket': {
      broadcastNotification?: LcuComponents['schemas']['LolServiceStatusBroadcastNotification']
    }
    'LolServiceStatusRegionLocaleResource': {
      locale?: string
      region?: string
    }
    'LolServiceStatusRiotStatusIncident': {
      archive_at?: string
      created_at?: string
      /** Format: int64 */
      id?: number
      incident_severity?: string
      platforms?: string[]
      titles?: LcuComponents['schemas']['LolServiceStatusRiotStatusTitle'][]
      updated_at?: string
      updates?: LcuComponents['schemas']['LolServiceStatusRiotStatusUpdate'][]
    }
    'LolServiceStatusRiotStatusMaintenance': {
      archive_at?: string
      created_at?: string
      /** Format: int64 */
      id?: number
      maintenance_status?: string
      platforms?: string[]
      titles?: LcuComponents['schemas']['LolServiceStatusRiotStatusTitle'][]
      updated_at?: string
      updates?: LcuComponents['schemas']['LolServiceStatusRiotStatusUpdate'][]
    }
    'LolServiceStatusRiotStatusResource': {
      id?: string
      incidents?: LcuComponents['schemas']['LolServiceStatusRiotStatusIncident'][]
      locales?: string[]
      maintenances?: LcuComponents['schemas']['LolServiceStatusRiotStatusMaintenance'][]
      name?: string
    }
    'LolServiceStatusRiotStatusTitle': {
      content?: string
      locale?: string
    }
    'LolServiceStatusRiotStatusTranslation': {
      content?: string
      locale?: string
    }
    'LolServiceStatusRiotStatusUpdate': {
      author?: string
      created_at?: string
      /** Format: int64 */
      id?: number
      publish?: boolean
      publish_locations?: string[]
      translations?: LcuComponents['schemas']['LolServiceStatusRiotStatusTranslation'][]
      updated_at?: string
    }
    'LolServiceStatusServiceStatusResource': {
      humanReadableUrl?: string
      status?: string
    }
    'LolServiceStatusTickerMessage': {
      createdAt?: string
      heading?: string
      message?: string
      severity?: string
      updatedAt?: string
    }
    'LolSettingsLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      state?: LcuComponents['schemas']['LolSettingsLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolSettingsLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolSettingsSettingCategory': {
      data?: {
        [key: string]: unknown | undefined
      }
      /** Format: int32 */
      schemaVersion?: number
    }
    'LolShutdownShutdownNotification': {
      additionalInfo?: string
      /** Format: float */
      countdown?: number
      reason?: LcuComponents['schemas']['LolShutdownShutdownReason']
    }
    /** @enum {string} */
    'LolShutdownShutdownReason':
      | 'Invalid'
      | 'PlatformMaintenance'
      | 'LcuAlphaDisabled'
      | 'PlayerBanned'
    /** @enum {string} */
    'LolSimpleDialogMessagesGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolSimpleDialogMessagesGameflowSession': {
      phase?: LcuComponents['schemas']['LolSimpleDialogMessagesGameflowPhase']
    }
    'LolSimpleDialogMessagesLocalMessageRequest': {
      msgBody?: string[]
      msgType?: string
    }
    'LolSimpleDialogMessagesLoginDataPacket': {
      simpleMessages?: LcuComponents['schemas']['LolSimpleDialogMessagesSimpleMessage'][]
    }
    'LolSimpleDialogMessagesMessage': {
      body?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      id?: number
      type?: string
    }
    'LolSimpleDialogMessagesSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LolSocialLeaderboardFriendResource': {
      availability?: string
      /** Format: int32 */
      icon?: number
      name?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolSocialLeaderboardGiftingFriend': {
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolSocialLeaderboardLeagueDivision': 'I' | 'II' | 'III' | 'IV' | 'V' | 'NA'
    /** @enum {string} */
    'LolSocialLeaderboardLeagueQueueType':
      | 'NONE'
      | 'RANKED_SOLO_5x5'
      | 'RANKED_FLEX_SR'
      | 'RANKED_FLEX_TT'
      | 'RANKED_TFT'
      | 'RANKED_TFT_TURBO'
      | 'RANKED_TFT_PAIRS'
    /** @enum {string} */
    'LolSocialLeaderboardLeagueTier':
      | 'NONE'
      | 'IRON'
      | 'BRONZE'
      | 'SILVER'
      | 'GOLD'
      | 'PLATINUM'
      | 'DIAMOND'
      | 'MASTER'
      | 'GRANDMASTER'
      | 'CHALLENGER'
    'LolSocialLeaderboardRankedQueueStats': {
      division?: LcuComponents['schemas']['LolSocialLeaderboardLeagueDivision']
      isProvisional?: boolean
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      provisionalGamesRemaining?: number
      queueType?: LcuComponents['schemas']['LolSocialLeaderboardLeagueQueueType']
      tier?: LcuComponents['schemas']['LolSocialLeaderboardLeagueTier']
      /** Format: int32 */
      wins?: number
    }
    'LolSocialLeaderboardRankedStats': {
      queueMap?: {
        [key: string]: LcuComponents['schemas']['LolSocialLeaderboardRankedQueueStats'] | undefined
      }
    }
    'LolSocialLeaderboardSocialLeaderboardData': {
      /** Format: int64 */
      nextUpdateTime?: number
      rowData?: LcuComponents['schemas']['LolSocialLeaderboardSocialLeaderboardRowData'][]
    }
    'LolSocialLeaderboardSocialLeaderboardRowData': {
      availability?: string
      division?: LcuComponents['schemas']['LolSocialLeaderboardLeagueDivision']
      isGiftable?: boolean
      isProvisional?: boolean
      /** Format: int32 */
      leaderboardPosition?: number
      /** Format: int32 */
      leaguePoints?: number
      /** Format: int32 */
      profileIconId?: number
      /** Format: int32 */
      provisionalGamesRemaining?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      summonerName?: string
      tier?: LcuComponents['schemas']['LolSocialLeaderboardLeagueTier']
      /** Format: int32 */
      wins?: number
    }
    'LolSocialLeaderboardSummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      internalName?: string
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolSpectatorSpectateGameInfo': {
      allowObserveMode?: string
      dropInSpectateGameId?: string
      gameQueueType?: string
      puuid?: string
    }
    'LolSpectatorSummonerOrTeamAvailabilty': {
      availableForWatching?: string[]
    }
    'LolStatstonesCatalogBundle': {
      item?: LcuComponents['schemas']['LolStatstonesCatalogItemDetails']
    }
    'LolStatstonesCatalogBundlePrice': {
      /** Format: int32 */
      cost?: number
      currency?: string
    }
    'LolStatstonesCatalogItemDetails': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
      prices?: LcuComponents['schemas']['LolStatstonesCatalogBundlePrice'][]
      releaseDate?: string
      subInventoryType?: string
    }
    'LolStatstonesChampionStatstoneSetSummary': {
      /** Format: int32 */
      milestonesPassed?: number
      name?: string
      /** Format: int32 */
      stonesAvailable?: number
      /** Format: int32 */
      stonesIlluminated?: number
      /** Format: int32 */
      stonesOwned?: number
    }
    'LolStatstonesChampionStatstoneSummary': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      milestonesPassed?: number
      sets?: LcuComponents['schemas']['LolStatstonesChampionStatstoneSetSummary'][]
      /** Format: int32 */
      stonesAvailable?: number
      /** Format: int32 */
      stonesIlluminated?: number
      /** Format: int32 */
      stonesOwned?: number
    }
    'LolStatstonesCollectionsChampion': {
      /** Format: int32 */
      id?: number
      name?: string
      squarePortraitPath?: string
    }
    'LolStatstonesEogNotificationEnvelope': {
      othersPersonalBests?: LcuComponents['schemas']['LolStatstonesPersonalBestNotification'][]
      selfMilestoneProgress?: LcuComponents['schemas']['LolStatstonesMilestoneProgressNotification'][]
      selfPersonalBests?: LcuComponents['schemas']['LolStatstonesPersonalBestNotification'][]
      selfStatstoneProgress?: LcuComponents['schemas']['LolStatstonesStatstoneProgress'][]
    }
    'LolStatstonesGameDataItemReference': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolStatstonesGameDataStatstone': {
      boundChampion?: LcuComponents['schemas']['LolStatstonesGameDataItemReference']
      category?: string
      contentId?: string
      description?: string
      iconFull?: string
      iconLit?: string
      iconUnlit?: string
      iconUnowned?: string
      isEpic?: boolean
      isRetired?: boolean
      /** Format: int32 */
      itemId?: number
      milestones?: number[]
      name?: string
      /** Format: int32 */
      trackingType?: number
    }
    'LolStatstonesGameDataStatstonePack': {
      contentId?: string
      description?: string
      /** Format: int32 */
      itemId?: number
      name?: string
    }
    'LolStatstonesGameDataStatstoneSet': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      name?: string
      /** Format: int32 */
      price?: number
      statstones?: LcuComponents['schemas']['LolStatstonesGameDataStatstone'][]
    }
    'LolStatstonesGameDataStatstonesInfo': {
      champIdToPackIds?: {
        [key: string]: unknown | undefined
      }
      collectionIdToStatStoneIds?: {
        [key: string]: unknown | undefined
      }
      packData?: LcuComponents['schemas']['LolStatstonesGameDataStatstonePack'][]
      packIdToChampIds?: {
        [key: string]: unknown | undefined
      }
      packIdToStatStonesIds?: {
        [key: string]: unknown | undefined
      }
      packIdToSubPackIds?: {
        [key: string]: unknown | undefined
      }
      seriesIdToStatStoneIds?: {
        [key: string]: unknown | undefined
      }
      statstoneData?: LcuComponents['schemas']['LolStatstonesGameDataStatstoneSet'][]
    }
    'LolStatstonesLoadout': {
      id?: string
      /** Format: int32 */
      itemId?: number
      loadout?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      name?: string
      scope?: string
    }
    'LolStatstonesLoadoutItem': {
      contentId?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolStatstonesMilestoneNotificationDto': {
      isCompleted?: boolean
      /** Format: int32 */
      level?: number
      statstoneId?: string
      /** Format: int32 */
      threshold?: number
    }
    'LolStatstonesMilestoneProgressNotification': {
      imageUrl?: string
      level?: string
      statstoneId?: string
      statstoneName?: string
      /** Format: int32 */
      threshold?: number
    }
    'LolStatstonesNumberFormattingBehavior': {
      /** Format: int32 */
      digitsForThousandsSeperator?: number
      trimTrailingZerosAfterDecimal?: boolean
      westernNumberGrouping?: boolean
    }
    'LolStatstonesNumberFormattingData': {
      billionAbbreviation?: string
      decimalSeperator?: string
      hourAbbreviation?: string
      kilometersAbbreviation?: string
      metersAbbreviation?: string
      millionAbbreviation?: string
      minuteAbbreviation?: string
      numberFormattingBehavior?: LcuComponents['schemas']['LolStatstonesNumberFormattingBehavior']
      oneHundredMillionAbbreviation?: string
      percentageFormat?: string
      secondAbbreviation?: string
      tenThousandAbbreviation?: string
      thousandAbbreviation?: string
      thousandSeperator?: string
      trillionAbbreviation?: string
    }
    'LolStatstonesPersonalBestNotification': {
      imageUrl?: string
      personalBest?: string
      statstoneId?: string
      statstoneName?: string
      summoner?: LcuComponents['schemas']['LolStatstonesSummoner']
    }
    'LolStatstonesPriceInfo': {
      currency?: string
      /** Format: int32 */
      price?: number
    }
    'LolStatstonesProfileStatstoneSummary': {
      category?: string
      /** Format: int32 */
      championId?: number
      imageUrl?: string
      name?: string
      value?: string
    }
    'LolStatstonesStatstone': {
      /** Format: int32 */
      boundChampionItemId?: number
      category?: string
      /** Format: float */
      completionValue?: number
      description?: string
      formattedMilestoneLevel?: string
      formattedPersonalBest?: string
      formattedValue?: string
      imageUrl?: string
      isComplete?: boolean
      isEpic?: boolean
      isFeatured?: boolean
      isRetired?: boolean
      name?: string
      nextMilestone?: string
      playerRecord?: LcuComponents['schemas']['LolStatstonesStatstonePlayerRecord']
      statstoneId?: string
    }
    'LolStatstonesStatstoneCompletion': {
      category?: string
      isEpic?: boolean
      statstoneName?: string
    }
    'LolStatstonesStatstoneFeaturedRequest': {
      existingFeatured?: LcuComponents['schemas']['LolStatstonesStatstone'][]
      /** Format: int32 */
      index?: number
    }
    'LolStatstonesStatstoneMasteryVignette': {
      completedSetUuids?: string[]
      /** Format: int32 */
      masteryLevel?: number
      /** Format: int32 */
      numSetsCompleted?: number
      puuid?: string
    }
    'LolStatstonesStatstoneNotificationDto': {
      /** Format: int32 */
      best?: number
      /** Format: int32 */
      delta?: number
      isNewBest?: boolean
      /** Format: int32 */
      level?: number
      puuid?: string
      statstoneId?: string
      /** Format: int32 */
      value?: number
    }
    'LolStatstonesStatstoneNotificationEnvelopeDto': {
      /** Format: int64 */
      gameId?: number
      milestones?: LcuComponents['schemas']['LolStatstonesMilestoneNotificationDto'][]
      updates?: LcuComponents['schemas']['LolStatstonesStatstoneNotificationDto'][]
    }
    'LolStatstonesStatstonePlayerRecord': {
      dateAcquired?: string
      dateArchived?: string
      dateCompleted?: string
      dateModified?: string
      entitled?: boolean
      /** Format: int32 */
      milestoneLevel?: number
      /** Format: int32 */
      personalBest?: number
      puuid?: string
      statstoneId?: string
      /** Format: int32 */
      value?: number
    }
    'LolStatstonesStatstoneProgress': {
      /** Format: int32 */
      best?: number
      category?: string
      delta?: string
      description?: string
      existingProgressPercent?: string
      imageUrl?: string
      isNewBest?: boolean
      /** Format: int32 */
      level?: number
      newMilestoneDifference?: string
      newProgressPercent?: string
      nextMilestone?: string
      statstoneId?: string
      statstoneName?: string
      value?: string
    }
    'LolStatstonesStatstoneRekindledVignette': {
      portraitPath?: string
      statstone?: LcuComponents['schemas']['LolStatstonesStatstoneCompletion']
    }
    'LolStatstonesStatstoneSet': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceID?: string
      /** Format: int32 */
      milestonesPassed?: number
      name?: string
      ownedFromPacks?: LcuComponents['schemas']['LolStatstonesGameDataStatstonePack'][]
      prices?: LcuComponents['schemas']['LolStatstonesPriceInfo'][]
      statstones?: LcuComponents['schemas']['LolStatstonesStatstone'][]
      /** Format: int32 */
      stonesOwned?: number
      subInventoryType?: string
    }
    'LolStatstonesStatstoneSetCompleteVignette': {
      statstones?: LcuComponents['schemas']['LolStatstonesStatstoneCompletion'][]
    }
    'LolStatstonesStatstoneVignetteNotificationEnvelopeDto': {
      /** Format: int32 */
      champId?: number
      champName?: string
      masteryVignetteNotifications?: LcuComponents['schemas']['LolStatstonesStatstoneMasteryVignette'][]
      rekindledVignetteNotifications?: LcuComponents['schemas']['LolStatstonesStatstoneRekindledVignette'][]
      setCompleteVignetteNotifications?: LcuComponents['schemas']['LolStatstonesStatstoneSetCompleteVignette'][]
    }
    'LolStatstonesSummoner': {
      displayName?: string
      puuid?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolStoreAccessTokenResource': {
      /** Format: int64 */
      expiry?: number
      scopes?: string[]
      token?: string
    }
    'LolStoreAllSummonerData': {
      summoner?: LcuComponents['schemas']['LolStoreSummoner']
      summonerLevelAndPoints?: LcuComponents['schemas']['LolStoreSummonerLevelAndPoints']
    }
    'LolStoreBundled': {
      flexible?: boolean
      items?: LcuComponents['schemas']['LolStoreBundledItem'][]
      minimumPrices?: LcuComponents['schemas']['LolStoreBundledItemCost'][]
    }
    'LolStoreBundledItem': {
      discountPrices?: LcuComponents['schemas']['LolStoreBundledItemCost'][]
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      /** Format: int32 */
      quantity?: number
    }
    'LolStoreBundledItemCost': {
      /** Format: int64 */
      cost?: number
      costType?: string
      currency?: string
      /** Format: float */
      discount?: number
    }
    'LolStoreBundleItemDTO': {
      description?: string
      /** Format: int64 */
      discountedRp?: number
      iconUrl?: string
      inventoryType?: string
      /** Format: int64 */
      ip?: number
      /** Format: int32 */
      itemId?: number
      name?: string
      owned?: boolean
      /** Format: int32 */
      quantity?: number
      /** Format: int64 */
      rp?: number
    }
    'LolStoreCapOffer': {
      active?: boolean
      createdDate?: string
      id?: string
      label?: string
      merchantId?: string
      payload?: LcuComponents['schemas']['LolStoreCapOfferPayloadEntry'][]
      productId?: string
      startDate?: string
      typeId?: string
    }
    'LolStoreCapOfferPayloadEntry': {
      fulfillmentTypeId?: string
      inventoryTypeUUID?: string
      itemInstanceId?: string
      itemPriceMap?: {
        [key: string]: number | undefined
      }
    }
    'LolStoreCatalogInstanceToItemKeyMap': {
      platformIds?: {
        [key: string]: LcuComponents['schemas']['LolStoreItemKey'] | undefined
      }
    }
    'LolStoreCatalogItem': {
      active?: boolean
      bundled?: LcuComponents['schemas']['LolStoreBundled']
      iconUrl?: string
      inactiveDate?: string
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      itemInstanceId?: string
      itemRequirements?: LcuComponents['schemas']['LolStoreItemKey'][]
      localizations?: {
        [key: string]: LcuComponents['schemas']['LolStoreItemLocalization'] | undefined
      }
      /** Format: int32 */
      maxQuantity?: number
      metadata?: LcuComponents['schemas']['LolStoreItemMetadataEntry'][]
      offerId?: string
      prices?: LcuComponents['schemas']['LolStoreItemCost'][]
      releaseDate?: string
      sale?: LcuComponents['schemas']['LolStoreSale']
      subInventoryType?: string
      tags?: string[]
    }
    'LolStoreFeaturedPageDTO': {
      Player?: LcuComponents['schemas']['LolStorePlayer']
    }
    'LolStoreGetPlatformIdsFromInstanceIdsRequest': {
      instanceIds?: string[]
    }
    'LolStoreGiftableResult': {
      config?: LcuComponents['schemas']['LolStoreGiftingConfig']
      friends?: LcuComponents['schemas']['LolStoreGiftingFriend'][]
    }
    'LolStoreGiftingConfig': {
      /** Format: int32 */
      giftingHextechMaxDailyGiftsSend?: number
      /** Format: int32 */
      giftingHextecMaxDailyGiftsReceive?: number
      /** Format: int32 */
      giftingItemMaxDailyGiftsReceive?: number
      /** Format: int32 */
      giftingItemMaxDailyGiftsSend?: number
      /** Format: int32 */
      giftingItemMinLevelSend?: number
      /** Format: int32 */
      giftingRestrictionFlagRioter?: number
      /** Format: int32 */
      giftingRpMaxDailyGiftsReceive?: number
      /** Format: int32 */
      giftingRpMaxDailyGiftsSend?: number
      /** Format: int32 */
      giftingRpMinLevelSend?: number
      /** Format: int32 */
      recipientLevelLimitItem?: number
      /** Format: int32 */
      recipientLevelLimitRp?: number
      requiresIdentityVerification?: boolean
    }
    'LolStoreGiftingFriend': {
      friendsSince?: string
      nick?: string
      oldFriends?: boolean
      /** Format: int64 */
      summonerId?: number
    }
    'LolStoreItemCost': {
      /** Format: int64 */
      cost?: number
      currency?: string
      /** Format: float */
      discount?: number
    }
    'LolStoreItemKey': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolStoreItemLocalization': {
      description?: string
      language?: string
      name?: string
    }
    'LolStoreItemMetadataEntry': {
      type?: string
      value?: string
    }
    'LolStoreItemSale': {
      active?: boolean
      /** Format: int64 */
      id?: number
      item?: LcuComponents['schemas']['LolStoreItemKey']
      sale?: LcuComponents['schemas']['LolStoreSale']
    }
    'LolStoreLoginDataPacket': {
      allSummonerData?: LcuComponents['schemas']['LolStoreAllSummonerData']
      simpleMessages?: LcuComponents['schemas']['LolStoreSimpleDialogMessage'][]
    }
    'LolStoreLoginSession': {
      /** Format: int64 */
      accountId?: number
      gasToken?: {
        [key: string]: unknown | undefined
      }
      idToken?: string
      state?: LcuComponents['schemas']['LolStoreLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolStoreLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolStoreNotification': {
      backgroundUrl?: string
      created?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      dismissible?: boolean
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'LolStoreOrderNotificationResource': {
      eventType?: string
      eventTypeId?: string
      /** Format: int64 */
      id?: number
      status?: string
    }
    'LolStorePageDTO': {
      catalog?: LcuComponents['schemas']['LolStoreCatalogItem'][]
      groupOrder?: string[]
      itemGroups?: {
        [key: string]: LcuComponents['schemas']['LolStorePageGroupingDTO'] | undefined
      }
      Player?: LcuComponents['schemas']['LolStorePlayer']
    }
    'LolStorePageGroupingDTO': {
      grouped?: boolean
      hidden?: boolean
      items?: LcuComponents['schemas']['LolStoreItemKey'][]
    }
    'LolStorePlayer': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      ip?: number
      /** Format: int64 */
      rp?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolStoreRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'LolStoreSale': {
      endDate?: string
      prices?: LcuComponents['schemas']['LolStoreItemCost'][]
      startDate?: string
    }
    'LolStoreServiceBalance': {
      /** Format: int64 */
      amount?: number
      currency?: string
    }
    'LolStoreServiceWallet': {
      /** Format: int64 */
      accountId?: number
      balances?: LcuComponents['schemas']['LolStoreServiceBalance'][]
    }
    'LolStoreSimpleDialogMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'LolStoreStoreStatus': {
      storefrontIsRunning?: boolean
    }
    'LolStoreSummoner': {
      /** Format: int64 */
      acctId?: number
      /** Format: int64 */
      sumId?: number
    }
    'LolStoreSummonerLevelAndPoints': {
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolStoreWallet': {
      /** Format: int64 */
      ip?: number
      /** Format: int64 */
      rp?: number
    }
    'LolSuggestedPlayersEndOfGamePlayer': {
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolSuggestedPlayersEndOfGameStats': {
      teams?: LcuComponents['schemas']['LolSuggestedPlayersEndOfGameTeam'][]
    }
    'LolSuggestedPlayersEndOfGameTeam': {
      isWinningTeam?: boolean
      players?: LcuComponents['schemas']['LolSuggestedPlayersEndOfGamePlayer'][]
    }
    'LolSuggestedPlayersSuggestedPlayersConfig': {
      Enabled?: boolean
      FriendsOfFriendsEnabled?: boolean
      /** Format: int32 */
      FriendsOfFriendsLimit?: number
      /** Format: int32 */
      MaxNumReplacements?: number
      /** Format: int32 */
      MaxNumSuggestedPlayers?: number
      /** Format: int32 */
      OnlineFriendsLimit?: number
      /** Format: int32 */
      PreviousPremadesLimit?: number
      /** Format: int32 */
      VicoriousComradesLimit?: number
    }
    'LolSuggestedPlayersSuggestedPlayersDynamicClientConfig': {
      SuggestedPlayers?: LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersConfig']
    }
    'LolSuggestedPlayersSuggestedPlayersFriend': {
      availability?: string
      name?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolSuggestedPlayersSuggestedPlayersKudoedPlayer': {
      /** Format: int64 */
      kudoedSummonerId?: number
      kudoedSummonerName?: string
    }
    'LolSuggestedPlayersSuggestedPlayersLobbyStatus': {
      invitedSummonerIds?: number[]
      memberSummonerIds?: number[]
      /** Format: int32 */
      queueId?: number
    }
    'LolSuggestedPlayersSuggestedPlayersPlayerStatus': {
      currentLobbyStatus?: LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersLobbyStatus']
      lastQueuedLobbyStatus?: LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersLobbyStatus']
    }
    'LolSuggestedPlayersSuggestedPlayersQueue': {
      /** Format: int32 */
      id?: number
      /** Format: int32 */
      minLevel?: number
    }
    /** @enum {string} */
    'LolSuggestedPlayersSuggestedPlayersReason':
      | 'PreviousPremade'
      | 'OnlineFriend'
      | 'FriendOfFriend'
      | 'VictoriousComrade'
      | 'LegacyPlayAgain'
    'LolSuggestedPlayersSuggestedPlayersReportedPlayer': {
      /** Format: int64 */
      reportedSummonerId?: number
    }
    'LolSuggestedPlayersSuggestedPlayersSuggestedPlayer': {
      /** Format: int64 */
      commonFriendId?: number
      commonFriendName?: string
      reason?: LcuComponents['schemas']['LolSuggestedPlayersSuggestedPlayersReason']
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolSuggestedPlayersSuggestedPlayersSummoner': {
      displayName?: string
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
    }
    'LolSuggestedPlayersSuggestedPlayersVictoriousComrade': {
      /** Format: int64 */
      summonerId?: number
      summonerName?: string
    }
    'LolSummonerAccountIdAndSummonerId': {
      /** Format: int64 */
      accountId?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolSummonerAutoFillQueueDto': {
      autoFillEligible?: boolean
      autoFillProtectedForPromos?: boolean
      autoFillProtectedForStreaking?: boolean
      /** Format: int32 */
      queueId?: number
    }
    'LolSummonerGameloopPlayerInfoV2': {
      autoFillDataBags?: LcuComponents['schemas']['LolSummonerAutoFillQueueDto'][]
      rerollDataBags?: LcuComponents['schemas']['LolSummonerRerollDataBagForClientV1'][]
    }
    'LolSummonerLevelField': {
      /** Format: int32 */
      finalLevel?: number
      /** Format: int32 */
      initialLevel?: number
      progress?: LcuComponents['schemas']['LolSummonerLevelProgression']
    }
    'LolSummonerLevelProgression': {
      /** Format: int64 */
      finalLevelBoundary?: number
      /** Format: int64 */
      finalXp?: number
      /** Format: int64 */
      initialLevelBoundary?: number
      /** Format: int64 */
      initialXp?: number
    }
    'LolSummonerLoginSession': {
      /** Format: int64 */
      accountId?: number
      connected?: boolean
      puuid?: string
      state?: LcuComponents['schemas']['LolSummonerLoginSessionStates']
      /** Format: int64 */
      summonerId?: number
    }
    /** @enum {string} */
    'LolSummonerLoginSessionStates': 'IN_PROGRESS' | 'SUCCEEDED' | 'LOGGING_OUT' | 'ERROR'
    'LolSummonerProfilePrivacy': {
      enabledState?: LcuComponents['schemas']['LolSummonerProfilePrivacyEnabledState']
      setting?: LcuComponents['schemas']['LolSummonerProfilePrivacySetting']
    }
    /** @enum {string} */
    'LolSummonerProfilePrivacyEnabledState': 'UNKNOWN' | 'ENABLED' | 'DISABLED'
    /** @enum {string} */
    'LolSummonerProfilePrivacySetting': 'PRIVATE' | 'PUBLIC'
    'LolSummonerRerollDataBagForClientV1': {
      /** Format: int32 */
      maximumRerolls?: number
      /** Format: int32 */
      pointCostOfReroll?: number
      /** Format: int32 */
      pointsUntilNextReroll?: number
      /** Format: int32 */
      queueId?: number
      /** Format: int32 */
      rerollCount?: number
      /** Format: int32 */
      totalPoints?: number
    }
    'LolSummonerStatus': {
      ready?: boolean
    }
    'LolSummonerSummoner': {
      /** Format: int64 */
      accountId?: number
      displayName?: string
      internalName?: string
      nameChangeFlag?: boolean
      /** Format: int32 */
      percentCompleteForNextLevel?: number
      privacy?: LcuComponents['schemas']['LolSummonerProfilePrivacySetting']
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      rerollPoints?: LcuComponents['schemas']['LolSummonerSummonerRerollPoints']
      /** Format: int64 */
      summonerId?: number
      /** Format: int32 */
      summonerLevel?: number
      unnamed?: boolean
      /** Format: int64 */
      xpSinceLastLevel?: number
      /** Format: int64 */
      xpUntilNextLevel?: number
    }
    'LolSummonerSummonerCacheData': {
      privacy?: LcuComponents['schemas']['LolSummonerProfilePrivacySetting']
      summoner?: LcuComponents['schemas']['LolSummonerSummoner']
      /** Format: int32 */
      summonerIcon?: number
      summonerName?: string
    }
    'LolSummonerSummonerCreatedId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolSummonerSummonerCreateRequest': {
      summonerName?: string
    }
    'LolSummonerSummonerDTO': {
      /** Format: int64 */
      accountId?: number
      /** Format: int32 */
      expPoints?: number
      /** Format: int32 */
      expToNextLevel?: number
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      level?: number
      name?: string
      nameChangeFlag?: boolean
      partnerId?: string
      privacy?: LcuComponents['schemas']['LolSummonerProfilePrivacySetting']
      /** Format: int32 */
      profileIconId?: number
      puuid?: string
      unnamed?: boolean
    }
    'LolSummonerSummonerIcon': {
      inventoryToken?: string
      /** Format: int32 */
      profileIconId?: number
    }
    'LolSummonerSummonerIdAndIcon': {
      /** Format: int32 */
      profileIconId?: number
      /** Format: int64 */
      summonerId?: number
    }
    'LolSummonerSummonerIdAndName': {
      displayName?: string
      /** Format: int64 */
      summonerId?: number
    }
    'LolSummonerSummonerProfileUpdate': {
      inventory?: string
      key?: string
      value?: {
        [key: string]: unknown | undefined
      }
    }
    'LolSummonerSummonerRequestedName': {
      name?: string
    }
    'LolSummonerSummonerRerollPoints': {
      /** Format: int32 */
      currentPoints?: number
      /** Format: int32 */
      maxRolls?: number
      /** Format: int32 */
      numberOfRolls?: number
      /** Format: int32 */
      pointsCostToRoll?: number
      /** Format: int32 */
      pointsToReroll?: number
    }
    'LolSummonerSummonerSession': {
      displayName?: string
      isNewPlayer?: boolean
      /** Format: int64 */
      summonerId?: number
    }
    'LolSummonerXpAndLevelMessage': {
      level?: LcuComponents['schemas']['LolSummonerLevelField']
      xp?: {
        [key: string]: unknown | undefined
      }
    }
    'LolTastesDataModelResponse': {
      modelData?: {
        [key: string]: unknown | undefined
      }
      /** Format: int64 */
      responseCode?: number
    }
    'LolTftLolTftHubFooterColors': {
      bottomColor?: string
      lineColor?: string
      topColor?: string
    }
    'LolTftLolTftStorePromos': {
      battlePassOfferIds?: string[]
      storePromoOfferIds?: string[]
      tacticianPromoOfferIds?: string[]
    }
    'LolTrophiesCapClashTrophyEntitlementPayload': {
      rewardSpec?: LcuComponents['schemas']['LolTrophiesClashV2TrophyRewardSpec']
      rewardType?: string
    }
    'LolTrophiesClashV2TrophyRewardSpec': {
      bracket?: string
      cup?: string
      gem?: string
      pedestal?: string
      seasonId?: string
      theme?: string
      tier?: string
    }
    'LolTrophiesInventoryItemsByType': {
      TOURNAMENT_TROPHY?: LcuComponents['schemas']['LolTrophiesTournamentTrophyInventoryItem'][]
    }
    'LolTrophiesInventoryResponse': {
      items?: LcuComponents['schemas']['LolTrophiesInventoryItemsByType']
    }
    'LolTrophiesLoadout': {
      id?: string
      loadout?: {
        [key: string]: LcuComponents['schemas']['LolTrophiesLoadoutItem'] | undefined
      }
      name?: string
      scope?: string
    }
    'LolTrophiesLoadoutItem': {
      data?: {
        [key: string]: string | undefined
      }
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
    }
    'LolTrophiesOtherPlayerTrophyInventoryItem': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      payload?: LcuComponents['schemas']['LolTrophiesCapClashTrophyEntitlementPayload']
      purchaseDate?: string
      uuid?: string
    }
    'LolTrophiesTournamentTrophyInventoryItem': {
      payload?: LcuComponents['schemas']['LolTrophiesCapClashTrophyEntitlementPayload']
      purchaseDate?: string
    }
    'LolTrophiesTrophyProfileData': {
      /** Format: int64 */
      bracket?: number
      cup?: string
      gem?: string
      pedestal?: string
      /** Format: int64 */
      seasonId?: number
      theme?: string
      /** Format: int64 */
      tier?: number
    }
    /** @enum {string} */
    'LolUserExperienceGameflowPhase':
      | 'None'
      | 'Lobby'
      | 'Matchmaking'
      | 'CheckedIntoTournament'
      | 'ReadyCheck'
      | 'ChampSelect'
      | 'GameStart'
      | 'FailedToLaunch'
      | 'InProgress'
      | 'Reconnect'
      | 'WaitingForStats'
      | 'PreEndOfGame'
      | 'EndOfGame'
      | 'TerminatedInError'
    'LolUserExperienceGameflowSession': {
      phase?: LcuComponents['schemas']['LolUserExperienceGameflowPhase']
    }
    'LolWorldsTokenCardAccountIdAndSummonerId': {
      /** Format: int64 */
      summonerId?: number
    }
    'LolWorldsTokenCardInventoryItem': {
      inventoryType?: string
      /** Format: int32 */
      itemId?: number
      ownershipType?: LcuComponents['schemas']['LolWorldsTokenCardItemOwnershipType']
      purchaseDate?: string
      /** Format: int64 */
      quantity?: number
      uuid?: string
    }
    /** @enum {string} */
    'LolWorldsTokenCardItemOwnershipType': 'OWNED' | 'RENTED' | 'LOYALTY' | 'F2P'
    'LolWorldsTokenCardLootDataGdsResource': {
      LootTokenBankCards?: LcuComponents['schemas']['LolWorldsTokenCardLootTokenBankCardGdsResource'][]
    }
    'LolWorldsTokenCardLootTokenBankCardGdsResource': {
      activationDate?: string
      backsplashImagePath?: string
      buttonText?: string
      deactivationDate?: string
      lootItemName?: string
      nonPremiumCapCurrencyId?: string
      premiumCapCurrencyId?: string
      storeLinkItem?: string
      storeLinkType?: string
      titleText?: string
      tokenIconPath?: string
      tooltipDescriptionText?: string
      tooltipSplashPath?: string
      tooltipTitleText?: string
      unlockItemId?: string
      unlockItemType?: string
    }
    'LolWorldsTokenCardTokenUpsell': {
      backgroundUrl?: string
      buttonText?: string
      currencyUrl?: string
      currentlyLocked?: LcuComponents['schemas']['LolWorldsTokenCardTokenUpsellLockedType']
      /** Format: int32 */
      dependentInventoryId?: number
      dependentInventoryType?: string
      endDate?: string
      id?: string
      internalName?: string
      /** Format: int32 */
      lockedCount?: number
      premiumCurrencyName?: string
      purchaseUrl?: string
      startDate?: string
      title?: string
      tooltipBackgroundUrl?: string
      tooltipDescription?: string
      tooltipTitle?: string
    }
    /** @enum {string} */
    'LolWorldsTokenCardTokenUpsellLockedType': 'UNASSIGNED' | 'UNLOCKED' | 'LOCKED'
    'LootItemClientDTO': {
      asset?: string
      displayCategories?: string
      /** Format: int64 */
      expiryTime?: number
      lootName?: string
      rarity?: string
      /** Format: int32 */
      rentalGames?: number
      /** Format: int64 */
      rentalSeconds?: number
      /** Format: int32 */
      storeItemId?: number
      tags?: string
      type?: string
      upgradeLootName?: string
      /** Format: int32 */
      value?: number
    }
    'LootItemListClientDTO': {
      /** Format: int64 */
      lastUpdate?: number
      lootItems?: LcuComponents['schemas']['LootItemClientDTO'][]
    }
    'LootLcdsClientConfigurationDTO': {
      currenciesUsingCapWallets?: string[]
      disabledRedemptions?: string[]
      lootItemsUsingBreakoutRecipeMenu?: string[]
      lootMaterialsToAlwaysRender?: string[]
    }
    'LootLcdsLootDescriptionDTO': {
      childLootTableNames?: string[]
      localizationLongDescriptionMap?: {
        [key: string]: string | undefined
      }
      localizationMap?: {
        [key: string]: string | undefined
      }
      lootName?: string
    }
    'LootLcdsRecipeClientDTO': {
      crafterName?: string
      displayCategories?: string
      metadata?: LcuComponents['schemas']['LootLcdsRecipeMetadata']
      outputs?: LcuComponents['schemas']['LootLcdsRecipeOutputDTO'][]
      recipeName?: string
      slots?: LcuComponents['schemas']['LootLcdsRecipeSlotClientDTO'][]
      type?: string
    }
    'LootLcdsRecipeListClientDTO': {
      /** Format: int64 */
      lastUpdate?: number
      recipes?: LcuComponents['schemas']['LootLcdsRecipeClientDTO'][]
    }
    'LootLcdsRecipeMetadata': {
      bonusDescriptions?: LcuComponents['schemas']['LootLcdsLootDescriptionDTO'][]
      guaranteedDescriptions?: LcuComponents['schemas']['LootLcdsLootDescriptionDTO'][]
      tooltipsDisabled?: boolean
    }
    'LootLcdsRecipeOutputDTO': {
      allowDuplicates?: boolean
      lootName?: string
      /** Format: double */
      probability?: number
      quantityExpression?: string
    }
    'LootLcdsRecipeSlotClientDTO': {
      quantityExpression?: string
      query?: string
      /** Format: int32 */
      slotNumber?: number
    }
    'LootLedgerRecipeConfigMap': {
      /** Format: int64 */
      lastUpdate?: number
      lootLedgerRecipeDTOMap?: {
        [key: string]: LcuComponents['schemas']['LootLedgerRecipeConfiguration'] | undefined
      }
    }
    'LootLedgerRecipeConfiguration': {
      activationTime?: string
      active?: boolean
      counterUuids?: string[]
      deactivationTime?: string
      ledgerUuid?: string
      recipeName?: string
    }
    'LootNameRefId': {
      lootName?: string
      refId?: string
    }
    'LootOddsDTO': {
      children?: LcuComponents['schemas']['LootOddsDTO'][]
      /** Format: double */
      dropRate?: number
      label?: string
      lootId?: string
      /** Format: int32 */
      lootOrder?: number
      parentId?: string
      /** Format: int32 */
      quantity?: number
    }
    'LootSimpleDialogMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'MatchedPlayerDTO': {
      captain?: LcuComponents['schemas']['PlayerInfoDTO']
      players?: LcuComponents['schemas']['PlayerInfoDTO'][]
      rosterId?: string
    }
    'MatchmakingLcdsBustedLeaver': {
      accessToken?: string
      /** Format: int64 */
      leaverPenaltyMillisRemaining?: number
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['MatchmakingLcdsSummoner']
    }
    'MatchmakingLcdsFailedJoinPlayer': {
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['MatchmakingLcdsSummoner']
    }
    'MatchmakingLcdsGameDTO': {
      gameState?: string
      statusOfParticipants?: string
      teamOne?: LcuComponents['schemas']['MatchmakingLcdsPlayerParticipant'][]
      teamTwo?: LcuComponents['schemas']['MatchmakingLcdsPlayerParticipant'][]
      terminatedCondition?: string
    }
    'MatchmakingLcdsGameNotification': {
      messageArgument?: string
      messageCode?: string
      type?: string
    }
    'MatchmakingLcdsMatchMakerParams': {
      botDifficulty?: string
      invitationId?: string
      languages?: string
      lastMaestroMessage?: string
      queueIds?: number[]
      team?: number[]
      /** Format: int64 */
      teamId?: number
    }
    'MatchmakingLcdsMatchMakerPayload': {
      LEAVER_BUSTER_ACCESS_TOKEN?: string
    }
    'MatchmakingLcdsPlayerParticipant': {
      /** Format: int64 */
      summonerId?: number
    }
    'MatchmakingLcdsQueueDisabled': {
      message?: string
      /** Format: int32 */
      queueId?: number
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['MatchmakingLcdsSummoner']
    }
    'MatchmakingLcdsQueueDodger': {
      /** Format: int64 */
      dodgePenaltyRemainingTime?: number
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['MatchmakingLcdsSummoner']
    }
    'MatchmakingLcdsQueueInfo': {
      /** Format: int32 */
      queueId?: number
      /** Format: int64 */
      waitTime?: number
    }
    'MatchmakingLcdsQueueRestricted': {
      message?: string
      /** Format: int32 */
      queueId?: number
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['MatchmakingLcdsSummoner']
    }
    'MatchmakingLcdsQueueThrottled': {
      message?: string
      /** Format: int32 */
      queueId?: number
      reasonFailed?: string
      summoner?: LcuComponents['schemas']['MatchmakingLcdsSummoner']
    }
    'MatchmakingLcdsSearchingForMatchNotification': {
      joinedQueues?: LcuComponents['schemas']['MatchmakingLcdsQueueInfo'][]
      playerJoinFailures?: {
        [key: string]: unknown | undefined
      }[]
    }
    'MatchmakingLcdsSummoner': {
      name?: string
      /** Format: int64 */
      sumId?: number
    }
    'MemberBanUnbanTournament': {
      /** Format: int64 */
      tournamentId?: number
      tournamentnameLocKey?: string
      tournamentnameLocKeySecondary?: string
      /** Format: int64 */
      tournamentPhaseLockInTime?: number
    }
    /** @enum {string} */
    'MetricDataType': 'unknown' | 'int' | 'uint' | 'float' | 'bool' | 'string'
    'MetricMetadata': {
      alerts?: LcuComponents['schemas']['MetricMetadataAlert'][]
      category?: string
      data_type?: LcuComponents['schemas']['MetricDataType']
      description?: string
      destination?: string
      info?: string
      notify?: LcuComponents['schemas']['MetricMetadataNotify']
      /** Format: int32 */
      period?: number
      pretty_name?: string
      priority?: LcuComponents['schemas']['MetricPriority']
      /** Format: int32 */
      sample_window_ms?: number
      transientAggregation?: LcuComponents['schemas']['AggregationType']
      type?: LcuComponents['schemas']['MetricType']
      units?: string
    }
    'MetricMetadataAlert': {
      description?: string
      info?: string
      level?: string
      /** Format: double */
      max?: number
      /** Format: double */
      min?: number
      notify?: LcuComponents['schemas']['MetricMetadataNotify']
      pretty_name?: string
    }
    'MetricMetadataHipchatNotification': {
      roomid?: string
      tags?: string
    }
    'MetricMetadataNotify': {
      email?: string[]
      hipchat?: LcuComponents['schemas']['MetricMetadataHipchatNotification'][]
      pagerduty?: LcuComponents['schemas']['MetricMetadataPagerDutyNotification'][]
    }
    'MetricMetadataPagerDutyNotification': {
      apikey?: string
    }
    /** @enum {string} */
    'MetricPriority': 'low' | 'medium' | 'high'
    /** @enum {string} */
    'MetricType': 'unknown' | 'percentage' | 'count' | 'duration' | 'rate'
    'MissionAlertDTO': {
      /** Format: int64 */
      alertTime?: number
      message?: string
      type?: string
    }
    'MissionDisplay': {
      attributes?: string[]
      locations?: string[]
    }
    'MissionMetadata': {
      /** Format: int32 */
      level?: number
      npeRewardPack?: LcuComponents['schemas']['NpeRewardPackMetadata']
      tutorial?: LcuComponents['schemas']['TutorialMetadata']
    }
    'MissionProgressDTO': {
      /** Format: int32 */
      currentProgress?: number
      /** Format: int32 */
      lastViewedProgress?: number
      /** Format: int32 */
      totalCount?: number
    }
    'MissionRequirementDTO': {
      expression?: string
    }
    'MissionsCompressedPayloadDTO': {
      missionsCompressed?: string
    }
    'MultipleReplayMetadataRequestV2': {
      gameIds?: number[]
      platformId?: string
    }
    'MultipleReplayMetadataResponseItemV2': {
      /** Format: int64 */
      gameId?: number
      metadata?: LcuComponents['schemas']['ReplayMetadataV2']
      status?: LcuComponents['schemas']['ReplayResponseStatus']
    }
    'MultipleReplayMetadataResponseV2': {
      metadataResponses?: LcuComponents['schemas']['MultipleReplayMetadataResponseItemV2'][]
    }
    'NonTimingEventV1': {
      /** @description event name */
      eventName?: string
      /** @description unit of measurement */
      unit?: string
      /** @description event value */
      value?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the event occurred
       */
      when?: number
    }
    'NpeReward': {
      data?: {
        [key: string]: unknown | undefined
      }
      renderer?: string
    }
    'NpeRewardPackMetadata': {
      /** Format: int32 */
      index?: number
      majorReward?: LcuComponents['schemas']['NpeReward']
      minorRewards?: LcuComponents['schemas']['NpeReward'][]
      premiumReward?: boolean
      rewardKey?: string
    }
    'OpenedTeamDTO': {
      /** Format: int64 */
      captainId?: number
      invitationId?: string
      invitees?: LcuComponents['schemas']['PendingRosterInviteeDTO'][]
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      members?: LcuComponents['schemas']['OpenedTeamMemberDTO'][]
      name?: string
      openPositions?: LcuComponents['schemas']['Position'][]
      shortName?: string
      /** Format: int32 */
      tier?: number
    }
    'OpenedTeamMemberDTO': {
      /** Format: int32 */
      friendship?: number
      /** Format: int64 */
      playerId?: number
      position?: LcuComponents['schemas']['Position']
      /** Format: int32 */
      tier?: number
    }
    'PartiesVoiceDTO': {
      jwt?: string
    }
    'PatcherChunkingPatcherEnvironment': {
      client_patcher_available?: boolean
      client_patcher_enabled?: boolean
      game_patcher_available?: boolean
      game_patcher_enabled?: boolean
    }
    'PatcherComponentActionProgress': {
      currentItem?: string
      network?: LcuComponents['schemas']['PatcherComponentStateProgress']
      primaryWork?: LcuComponents['schemas']['PatcherComponentStateWorkType']
      total?: LcuComponents['schemas']['PatcherComponentStateProgress']
    }
    'PatcherComponentState': {
      action?: LcuComponents['schemas']['PatcherComponentStateAction']
      id?: string
      isCorrupted?: boolean
      isUpdateAvailable?: boolean
      isUpToDate?: boolean
      progress?: LcuComponents['schemas']['PatcherComponentActionProgress']
      timeOfLastUpToDateCheckISO8601?: string
    }
    /** @enum {string} */
    'PatcherComponentStateAction':
      | 'Idle'
      | 'CheckingForUpdates'
      | 'Patching'
      | 'Repairing'
      | 'Migrating'
    'PatcherComponentStateProgress': {
      /** Format: int64 */
      bytesComplete?: number
      /** Format: double */
      bytesPerSecond?: number
      /** Format: int64 */
      bytesRequired?: number
    }
    /** @enum {string} */
    'PatcherComponentStateWorkType': 'Scanning' | 'Network' | 'Disk'
    'PatcherNotification': {
      data?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      id?: string
      notificationId?: LcuComponents['schemas']['PatcherNotificationId']
    }
    /** @enum {string} */
    'PatcherNotificationId':
      | 'UnspecifiedError'
      | 'ConnectionError'
      | 'MissingFilesError'
      | 'FailedToWriteError'
      | 'WillRestoreClientBackupOnRestart'
      | 'DidRestoreClientBackup'
      | 'NotEnoughDiskSpace'
      | 'BrokenPermissions'
    'PatcherP2PStatus': {
      isAllowedByUser?: boolean
      isEnabledForPatchline?: boolean
      requiresRestart?: boolean
    }
    'PatcherP2PStatusUpdate': {
      isAllowedByUser?: boolean
    }
    'PatcherProductResource': {
      id?: string
    }
    'PatcherProductState': {
      action?: LcuComponents['schemas']['PatcherComponentStateAction']
      LcuComponents?: LcuComponents['schemas']['PatcherComponentState'][]
      id?: string
      isCorrupted?: boolean
      isStopped?: boolean
      isUpdateAvailable?: boolean
      isUpToDate?: boolean
      /** Format: double */
      percentPatched?: number
    }
    'PatcherStatus': {
      connectedToPatchServer?: boolean
      hasUpdatesOnRestart?: boolean
      /** Format: int32 */
      successfullyInstalledVersion?: number
      willRestartOnSelfUpdate?: boolean
    }
    'PatcherUxResource': {
      visible?: boolean
    }
    'PaymentsFrontEndRequest': {
      game?: string
      gifteeAccountId?: string
      gifteeMessage?: string
      isPrepaid?: boolean
      localeId?: string
      rsoToken?: string
      summonerLevel?: number
      usePmcSessions?: boolean
    }
    'PaymentsFrontEndResult': {
      url?: string
    }
    'PaymentsPMCStartUrlRequest': {
      game?: string
      gifteeAccountId?: string
      gifteeMessage?: string
      isPrepaid?: boolean
      localeId?: string
      summonerLevel?: number
    }
    'PaymentsPMCStartUrlResult': {
      createdAt?: string
      id?: string
      localeId?: string
      playerFacingId?: string
      pmcStartUrl?: string
      summonerLevel?: number
      userId?: string
    }
    'PendingOpenedTeamDTO': {
      invitationId?: string
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      name?: string
      shortName?: string
      /** Format: int32 */
      tier?: number
    }
    'PendingRosterDTO': {
      /** Format: int64 */
      captainId?: number
      highTierVariance?: boolean
      invitationId?: string
      invitees?: LcuComponents['schemas']['PendingRosterInviteeDTO'][]
      inviteFaileds?: LcuComponents['schemas']['FailedInvite'][]
      lft?: boolean
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      members?: LcuComponents['schemas']['PendingRosterMemberDTO'][]
      multiUserChatJWT?: string
      name?: string
      rewardLogos?: LcuComponents['schemas']['RewardLogo'][]
      shortName?: string
      ticketOffers?: LcuComponents['schemas']['TicketOfferDTO'][]
      /** Format: int32 */
      tier?: number
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      version?: number
    }
    'PendingRosterInviteeDTO': {
      /** Format: int64 */
      inviteeId?: number
      inviteeState?: LcuComponents['schemas']['PendingRosterInviteeState']
      /** Format: int64 */
      inviter?: number
      /** Format: int64 */
      inviteTime?: number
      inviteType?: LcuComponents['schemas']['InviteType']
    }
    /** @enum {string} */
    'PendingRosterInviteeState':
      | 'SUGGESTED'
      | 'PENDING'
      | 'DECLINED'
      | 'REVOKED'
      | 'SUGGEST_DECLINED'
      | 'SUGGEST_REVOKED'
      | 'ACCEPTED'
      | 'SELFJOIN'
      | 'SELFJOIN_DECLINED'
      | 'SELFJOIN_REVOKED'
    'PendingRosterMemberDTO': {
      /** Format: int32 */
      bet?: number
      betType?: LcuComponents['schemas']['TicketType']
      /** Format: int64 */
      joinTime?: number
      memberState?: LcuComponents['schemas']['PendingRosterMemberState']
      /** Format: int32 */
      pendingPay?: number
      /** Format: int32 */
      pendingPremiumPay?: number
      /** Format: int64 */
      playerId?: number
      position?: LcuComponents['schemas']['Position']
      /** Format: int32 */
      selfBet?: number
      /** Format: int32 */
      tier?: number
    }
    /** @enum {string} */
    'PendingRosterMemberState': 'NOT_READY' | 'FORCED_NOT_READY' | 'READY' | 'LEFT' | 'KICK'
    'PersonalizedOffersLcdsChampionDTO': {
      /** Format: int32 */
      championId?: number
      owned?: boolean
    }
    'PersonalizedOffersLcdsChampionSkinDTO': {
      /** Format: int32 */
      championId?: number
      owned?: boolean
      /** Format: int32 */
      skinId?: number
    }
    'PersonalizedOffersLcdsClientDynamicConfigurationNotification': {
      configs?: string
      delta?: boolean
    }
    'PersonalizedOffersStoreFulfillmentNotification': {
      data?: {
        [key: string]: unknown | undefined
      }
      inventoryType?: string
    }
    'PhaseInMember': {
      /** Format: int32 */
      bet?: number
      /** Format: int32 */
      pendingPay?: number
      /** Format: int64 */
      playerId?: number
      /** Format: int32 */
      selfBet?: number
    }
    'PhaseRosterDTO': {
      bracketDTO?: LcuComponents['schemas']['Bracket']
      /** Format: int64 */
      bracketId?: number
      /** Format: int64 */
      checkinTime?: number
      /** Format: int32 */
      period?: number
      /** Format: int64 */
      phaseId?: number
      phaseRosterSubs?: LcuComponents['schemas']['PhaseRosterSubDTO'][]
    }
    'PhaseRosterSubDTO': {
      /** Format: int32 */
      bet?: number
      betType?: LcuComponents['schemas']['TicketType']
      /** Format: int32 */
      pay?: number
      /** Format: int64 */
      playerId?: number
      position?: LcuComponents['schemas']['Position']
      /** Format: int32 */
      premiumPay?: number
      /** Format: int64 */
      replacedPlayerId?: number
      subState?: LcuComponents['schemas']['SubState']
      /** Format: int32 */
      tier?: number
    }
    /** @enum {string} */
    'PickModes': 'NOT_PICKING' | 'IN_PROGRESS' | 'DONE'
    'PlayerBehaviorLcdsForcedClientShutdown': {
      additionalInfo?: string
      reason?: string
    }
    'PlayerBehaviorLcdsSimpleMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'PlayerBehaviorSimpleMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'PlayerDTO': {
      banned?: boolean
      lft?: boolean
      notifications?: LcuComponents['schemas']['ClashOfflineNotification'][]
      primaryPos?: string
      secondaryPos?: string
      /** Format: int32 */
      tmntLosses?: number
      /** Format: int32 */
      tmntWins?: number
    }
    'PlayerFinderDTO': {
      /** Format: int64 */
      friendId?: number
      /** Format: int64 */
      playerId?: number
      primaryPos?: LcuComponents['schemas']['Position']
      secondaryPos?: LcuComponents['schemas']['Position']
      /** Format: int32 */
      tier?: number
      type?: LcuComponents['schemas']['PlayerFinderEnum']
    }
    /** @enum {string} */
    'PlayerFinderEnum': 'FREEAGENT' | 'FRIEND'
    'PlayerInfoDTO': {
      /** Format: int64 */
      playerId?: number
      position?: string
      role?: LcuComponents['schemas']['Role']
      teamId?: string
    }
    'PlayerInventory': {
      champions?: number[]
      icons?: number[]
      inventoryJwts?: string[]
      skins?: number[]
      wardSkins?: number[]
    }
    'PlayerLootDefinitionsDTO': {
      lootItemList?: LcuComponents['schemas']['LootItemListClientDTO']
      playerLoot?: LcuComponents['schemas']['PlayerLootDTO'][]
      queryResult?: LcuComponents['schemas']['QueryResultDTO']
      recipeList?: LcuComponents['schemas']['LootLcdsRecipeListClientDTO']
    }
    'PlayerLootDTO': {
      /** Format: int32 */
      count?: number
      /** Format: int64 */
      expiryTime?: number
      lootName?: string
      refId?: string
    }
    'PlayerLootResultDTO': {
      added?: LcuComponents['schemas']['PlayerLootDTO'][]
      details?: string
      redeemed?: string[]
      removed?: LcuComponents['schemas']['PlayerLootDTO'][]
      status?: string
    }
    'PlayerMissionDTO': {
      backgroundImageUrl?: string
      celebrationType?: string
      clientNotifyLevel?: string
      /** Format: int64 */
      completedDate?: number
      completionExpression?: string
      /** Format: int64 */
      cooldownTimeMillis?: number
      description?: string
      display?: LcuComponents['schemas']['MissionDisplay']
      displayType?: string
      /** Format: int64 */
      earnedDate?: number
      /** Format: int64 */
      endTime?: number
      expiringWarnings?: LcuComponents['schemas']['MissionAlertDTO'][]
      helperText?: string
      iconImageUrl?: string
      id?: string
      internalName?: string
      isNew?: boolean
      /** Format: int64 */
      lastUpdatedTimestamp?: number
      locale?: string
      media?: {
        [key: string]: string | undefined
      }
      metadata?: LcuComponents['schemas']['MissionMetadata']
      missionType?: string
      objectives?: LcuComponents['schemas']['PlayerMissionObjectiveDTO'][]
      requirements?: string[]
      rewards?: LcuComponents['schemas']['PlayerMissionRewardDTO'][]
      rewardStrategy?: LcuComponents['schemas']['RewardStrategy']
      /** Format: int32 */
      sequence?: number
      seriesName?: string
      /** Format: int64 */
      startTime?: number
      status?: string
      title?: string
      viewed?: boolean
    }
    'PlayerMissionEligibilityData': {
      /** Format: int32 */
      level?: number
      loyaltyEnabled?: boolean
      playerInventory?: LcuComponents['schemas']['PlayerInventory']
      userInfoToken?: string
    }
    'PlayerMissionObjectiveDTO': {
      description?: string
      hasObjectiveBasedReward?: boolean
      progress?: LcuComponents['schemas']['MissionProgressDTO']
      requirements?: string[]
      rewardGroups?: string[]
      /** Format: int32 */
      sequence?: number
      status?: string
      type?: string
    }
    'PlayerMissionRewardDTO': {
      description?: string
      iconNeedsFrame?: boolean
      iconUrl?: string
      isObjectiveBasedReward?: boolean
      itemId?: string
      media?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      quantity?: number
      rewardFulfilled?: boolean
      rewardGroup?: string
      rewardGroupSelected?: boolean
      rewardType?: string
      /** Format: int32 */
      sequence?: number
      smallIconUrl?: string
      uniqueName?: string
    }
    'PlayerNotificationsPlayerNotificationConfigResource': {
      /** Format: int64 */
      ExpirationCheckFrequency?: number
    }
    'PlayerNotificationsPlayerNotificationResource': {
      backgroundUrl?: string
      created?: string
      critical?: boolean
      data?: {
        [key: string]: string | undefined
      }
      detailKey?: string
      dismissible?: boolean
      expires?: string
      iconUrl?: string
      /** Format: int64 */
      id?: number
      source?: string
      state?: string
      titleKey?: string
      type?: string
    }
    'PlayerNotificationsRiotMessagingServiceMessage': {
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    'PlayerParticipant': {
      /** Format: int64 */
      summonerId?: number
    }
    'PlayerRosterHistoryDTO': {
      rosters?: LcuComponents['schemas']['RosterMemberDTO'][]
    }
    'PlayerTierDTO': {
      /** Format: int64 */
      playerId?: number
      primaryPos?: LcuComponents['schemas']['Position']
      secondPos?: LcuComponents['schemas']['Position']
      /** Format: int32 */
      tier?: number
    }
    'PluginDescriptionResource': {
      name?: string
      pluginDependencies?: {
        [key: string]: string | undefined
      }
      riotMeta?: LcuComponents['schemas']['PluginMetadataResource']
      version?: string
    }
    'PluginLcdsEvent': {
      body?: {
        [key: string]: unknown | undefined
      }
      clientId?: string
      subtopic?: string
      typeName?: string
    }
    'PluginLcdsResponse': {
      body?: {
        [key: string]: unknown | undefined
      }
      typeName?: string
    }
    'PluginManagerResource': {
      state?: LcuComponents['schemas']['PluginManagerState']
    }
    /** @enum {string} */
    'PluginManagerState': 'NotReady' | 'PluginsInitialized'
    'PluginMetadataResource': {
      app?: string
      feature?: string
      globalAssetBundles?: string[]
      hasBundledAssets?: boolean
      implements?: {
        [key: string]: string | undefined
      }
      mock?: string
      perLocaleAssetBundles?: {
        [key: string]:
          | {
              [key: string]: unknown | undefined
            }
          | undefined
      }
      subtype?: string
      threading?: LcuComponents['schemas']['PluginThreadingModel']
      type?: string
    }
    'PluginRegionLocaleChangedEvent': {
      locale?: string
      region?: string
    }
    'PluginResource': {
      app?: string
      assetBundleNames?: string[]
      dependencies?: LcuComponents['schemas']['PluginResourceContract'][]
      feature?: string
      fullName?: string
      implementedContracts?: LcuComponents['schemas']['PluginResourceContract'][]
      mountedAssetBundles?: {
        [key: string]: string | undefined
      }
      /** Format: int32 */
      orderWADFileMounted?: number
      shortName?: string
      subtype?: string
      supertype?: string
      threadingModel?: string
      version?: string
    }
    'PluginResourceContract': {
      fullName?: string
      version?: string
    }
    'PluginResourceEvent': {
      data?: {
        [key: string]: unknown | undefined
      }
      eventType?: LcuComponents['schemas']['PluginResourceEventType']
      uri?: string
    }
    /** @enum {string} */
    'PluginResourceEventType': 'Create' | 'Update' | 'Delete'
    'PluginServiceProxyResponse': {
      error?: string
      methodName?: string
      payload?: string
      serviceName?: string
      status?: string
      uuid?: string
    }
    /** @enum {string} */
    'PluginThreadingModel': 'dedicated' | 'sequential' | 'concurrent' | 'parallel'
    /** @enum {string} */
    'Position': 'TOP' | 'MIDDLE' | 'BOTTOM' | 'JUNGLE' | 'UTILITY' | 'FILL' | 'UNSELECTED'
    'ProcessControlProcess': {
      /** Format: float */
      'restart-countdown-seconds'?: number
      'status'?: string
    }
    'PublicPhaseSubDTO': {
      /** Format: int64 */
      playerId?: number
      /** Format: int64 */
      replacedPlayerId?: number
    }
    'PublicPhaseSubsDTO': {
      /** Format: int64 */
      phaseId?: number
      phaseSubs?: LcuComponents['schemas']['PublicPhaseSubDTO'][]
    }
    'PublicRosterDTO': {
      /** Format: int64 */
      id?: number
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      memberIds?: number[]
      name?: string
      phasesSubs?: LcuComponents['schemas']['PublicPhaseSubsDTO'][]
      shortName?: string
      /** Format: int64 */
      tournamentId?: number
    }
    'Punishment': {
      permaBan?: boolean
      playerFacingMessage?: string
      punishedForChatLogs?: string[]
      punishedForGameIds?: number[]
      /** Format: int64 */
      punishedUntilDateMillis?: number
      /** Format: int64 */
      punishmentLengthGames?: number
      /** Format: int64 */
      punishmentLengthMillis?: number
      punishmentReason?: string
      punishmentType?: string
    }
    'QueryResultDTO': {
      /** Format: int64 */
      lastUpdate?: number
      queryToLootNames?: {
        [key: string]: unknown | undefined
      }
    }
    'RankedScoutingDTO': {
      /** Format: int64 */
      playerId?: number
      topMasteries?: LcuComponents['schemas']['ChampionMasteryPublicDTO'][]
      topSeasonChampions?: LcuComponents['schemas']['ChampionScoutingDTO'][]
      /** Format: int64 */
      totalMasteryScore?: number
    }
    'RankedScoutingMemberDTO': {
      championScoutingData?: LcuComponents['schemas']['RankedScoutingTopChampionDTO'][]
      /** Format: int64 */
      playerId?: number
    }
    'RankedScoutingTopChampionDTO': {
      /** Format: int32 */
      championId?: number
      /** Format: int32 */
      gameCount?: number
      /** Format: float */
      kda?: number
      /** Format: int32 */
      rank?: number
      /** Format: int32 */
      winCount?: number
    }
    'RedeemLootTransactionDTO': {
      /** Format: int64 */
      accountId?: number
      clientId?: string
      lootName?: string
      /** Format: int64 */
      playerId?: number
      puuid?: string
    }
    'RegionLocale': {
      locale?: string
      region?: string
      webLanguage?: string
      webRegion?: string
    }
    /**
     * @description Help format for remoting functions and types.
     * @enum {string}
     */
    'RemotingHelpFormat': 'Full' | 'Epytext' | 'Brief' | 'Console'
    /**
     * @description Well-known privilege levels for bindable functions.
     * @enum {string}
     */
    'RemotingPrivilege': 'None' | 'User' | 'Admin' | 'Local'
    /**
     * @description Serialization format for remoting requests and results.
     * @enum {string}
     */
    'RemotingSerializedFormat': 'JSON' | 'YAML' | 'MsgPack'
    'ReplayMetadataV2': {
      /** Format: int32 */
      fileSize?: number
      gameVersion?: string
    }
    /** @enum {string} */
    'ReplayResponseStatus': 'OK' | 'NOT_FOUND' | 'EXPIRED' | 'BAD_REQUEST' | 'INTERNAL_SERVER_ERROR'
    'RewardDetails': {
      /** Format: int64 */
      rosterId?: number
      teamMemberIds?: number[]
      /** Format: int64 */
      tournamentId?: number
    }
    'RewardLogo': {
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      memberOwnedCount?: number
    }
    'RewardStrategy': {
      groupStrategy?: string
      selectMaxGroupCount?: number
      selectMinGroupCount?: number
    }
    'RiotMessagingServiceAcknowledgeBody': {
      id?: string
    }
    'RiotMessagingServiceEntitlementsToken': {
      accessToken?: string
      entitlements?: string[]
      issuer?: string
      subject?: string
      token?: string
    }
    'RiotMessagingServicePluginRegionLocaleChangedEvent': {
      locale?: string
      region?: string
    }
    'RiotMessagingServiceSession': {
      state?: LcuComponents['schemas']['RiotMessagingServiceState']
      token?: string
      tokenType?: LcuComponents['schemas']['RiotMessagingServiceTokenType']
    }
    /** @enum {string} */
    'RiotMessagingServiceState': 'Disconnecting' | 'Disconnected' | 'Connecting' | 'Connected'
    /** @enum {string} */
    'RiotMessagingServiceTokenType': 'Unavailable' | 'Access' | 'Identity'
    'RmsMessage': {
      ackRequired?: boolean
      id?: string
      payload?: string
      resource?: string
      service?: string
      /** Format: int64 */
      timestamp?: number
      version?: string
    }
    /** @enum {string} */
    'Role': 'CAPTAIN' | 'MEMBER' | 'NONE'
    'RosterAggregatedStatsDTO': {
      periodStats?: LcuComponents['schemas']['RosterPeriodAggregatedStatsDTO'][]
      playerStats?: {
        [key: string]: LcuComponents['schemas']['RosterPlayerAggregatedStatsDTO'] | undefined
      }
    }
    'RosterDTO': {
      banned?: boolean
      /** Format: int64 */
      captainId?: number
      dynamicState?: LcuComponents['schemas']['RosterDynamicStateDTO']
      eliminated?: boolean
      /** Format: int64 */
      id?: number
      invitationId?: string
      /** Format: int32 */
      logo?: number
      /** Format: int32 */
      logoColor?: number
      /** Format: int32 */
      losses?: number
      members?: LcuComponents['schemas']['RosterMemberDTO'][]
      multiUserChatJWT?: string
      name?: string
      phases?: LcuComponents['schemas']['PhaseRosterDTO'][]
      /** Format: int32 */
      points?: number
      shortName?: string
      /** Format: int32 */
      tier?: number
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      version?: number
      /** Format: int32 */
      wins?: number
    }
    'RosterDynamicStateDTO': {
      members?: LcuComponents['schemas']['PhaseInMember'][]
      phaseCheckinStates?: number[]
      phaseRosterSubs?: LcuComponents['schemas']['PhaseRosterSubDTO'][]
      /** Format: int64 */
      rosterId?: number
      subbedMemberIds?: number[]
      ticketOffers?: LcuComponents['schemas']['TicketOfferDTO'][]
      /** Format: int64 */
      tournamentId?: number
      /** Format: int32 */
      version?: number
      withdraw?: LcuComponents['schemas']['RosterWithdraw']
    }
    'RosterMatchAggregatedStatsDTO': {
      /** Format: int64 */
      duration?: number
      /** Format: int64 */
      gameId?: number
      /** Format: int32 */
      kills?: number
      loserBracket?: boolean
      /** Format: int32 */
      opponentKills?: number
      /** Format: int32 */
      opponentLogo?: number
      /** Format: int32 */
      opponentLogoColor?: number
      opponentShortName?: string
      playerChampionIds?: {
        [key: string]: number | undefined
      }
      /** Format: int32 */
      round?: number
      win?: boolean
    }
    'RosterMemberDTO': {
      bidType?: LcuComponents['schemas']['TicketType']
      /** Format: int32 */
      currentBid?: number
      /** Format: int64 */
      joinTime?: number
      /** Format: int32 */
      pendingPremiumSpend?: number
      /** Format: int32 */
      pendingSpend?: number
      /** Format: int64 */
      playerId?: number
      position?: LcuComponents['schemas']['Position']
      /** Format: int64 */
      rosterId?: number
      /** Format: int32 */
      tier?: number
      /** Format: int64 */
      tournamentId?: number
    }
    'RosterPeriodAggregatedStatsDTO': {
      /** Format: int32 */
      bracketSize?: number
      matchStats?: LcuComponents['schemas']['RosterMatchAggregatedStatsDTO'][]
      /** Format: int32 */
      period?: number
      playerBids?: {
        [key: string]: number | undefined
      }
      /** Format: int64 */
      time?: number
    }
    'RosterPlayerAggregatedStatsDTO': {
      rawStatsMax?: {
        [key: string]: number | undefined
      }
      rawStatsSum?: {
        [key: string]: number | undefined
      }
      sub?: boolean
    }
    'RosterStatsDTO': {
      /** Format: int64 */
      rosterId?: number
      /** Format: int32 */
      rosterLogo?: number
      /** Format: int32 */
      rosterLogoColor?: number
      rosterName?: string
      rosterShortName?: string
      /** Format: int64 */
      scheduleEndTime?: number
      /** Format: int64 */
      scheduleTime?: number
      stats?: LcuComponents['schemas']['RosterAggregatedStatsDTO']
      /** Format: int32 */
      tier?: number
      tournamentNameLocKey?: string
      tournamentNameLocKeySecondary?: string
      /** Format: int32 */
      tournamentPeriods?: number
      /** Format: int32 */
      tournamentThemeId?: number
    }
    'RosterWithdraw': {
      declineWithdrawMembers?: number[]
      /** Format: int64 */
      gameStartBufferMs?: number
      /** Format: int64 */
      initVoteMember?: number
      /** Format: int64 */
      initVoteTime?: number
      /** Format: int64 */
      lockoutTimeMs?: number
      /** Format: int64 */
      voteTimeoutMs?: number
      voteWithdrawMembers?: number[]
    }
    'SanitizerContainsSanitizedRequest': {
      aggressiveScan?: boolean
      /** Format: int32 */
      level?: number
      text?: string
    }
    'SanitizerContainsSanitizedResponse': {
      contains?: boolean
    }
    'SanitizerSanitizeRequest': {
      aggressiveScan?: boolean
      /** Format: int32 */
      level?: number
      text?: string
      texts?: string[]
    }
    'SanitizerSanitizeResponse': {
      modified?: boolean
      text?: string
      texts?: string[]
    }
    'SanitizerSanitizerStatus': {
      /** Format: int32 */
      breakingCharsCount?: number
      filteredWordCountsByLevel?: {
        [key: string]: number | undefined
      }
      locale?: string
      /** Format: int32 */
      projectedCharsCount?: number
      ready?: boolean
      region?: string
      whitelistedWordCountsByLevel?: {
        [key: string]: number | undefined
      }
    }
    'SeriesDTO': {
      /** Format: int64 */
      createdDate?: number
      description?: string
      displayType?: string
      eligibilityType?: string
      /** Format: int64 */
      endDate?: number
      id?: string
      internalName?: string
      /** Format: int64 */
      lastUpdatedTimestamp?: number
      media?: LcuComponents['schemas']['SeriesMediaDTO']
      optInButtonText?: string
      optOutButtonText?: string
      parentInternalName?: string
      /** Format: int64 */
      startDate?: number
      status?: string
      tags?: string[]
      title?: string
      type?: string
      viewed?: boolean
      warnings?: LcuComponents['schemas']['AlertDTO'][]
    }
    'SeriesMediaDTO': {
      accentColor?: string
      backgroundImageLargeUrl?: string
      backgroundImageSmallUrl?: string
      backgroundUrl?: string
      trackerIconUrl?: string
    }
    'ShutdownLcdsForcedClientShutdown': {
      additionalInfo?: string
      reason?: string
    }
    'SimpleDialogMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'SimpleDialogMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'SpectatorLcdsSpectateAvailabilityDto': {
      teamOrSummonerIds?: string[]
    }
    'SpectatorLcdsSpectateAvailabilityResponseDto': {
      availableForWatching?: string[]
    }
    'StoreLcdsChampionDTO': {
      active?: boolean
      botEnabled?: boolean
      /** Format: int32 */
      championId?: number
      championSkins?: LcuComponents['schemas']['StoreLcdsChampionSkinDTO'][]
      /** Format: int64 */
      endDate?: number
      freeToPlay?: boolean
      freeToPlayReward?: boolean
      owned?: boolean
      /** Format: int64 */
      purchaseDate?: number
      rankedPlayEnabled?: boolean
      sources?: string[]
      /** Format: int32 */
      winCountRemaining?: number
    }
    'StoreLcdsChampionSkinDTO': {
      /** Format: int32 */
      championId?: number
      /** Format: int64 */
      endDate?: number
      freeToPlayReward?: boolean
      lastSelected?: boolean
      owned?: boolean
      /** Format: int64 */
      purchaseDate?: number
      /** Format: int32 */
      skinId?: number
      sources?: string[]
      stillObtainable?: boolean
      /** Format: int32 */
      winCountRemaining?: number
    }
    'StoreLcdsSimpleDialogMessage': {
      /** Format: int64 */
      accountId?: number
      msgId?: string
      params?: string[]
      type?: string
    }
    'StoreLcdsSimpleDialogMessageResponse': {
      /** Format: int64 */
      accountId?: number
      command?: string
      msgId?: string
    }
    'StoreLcdsStoreAccountBalanceNotification': {
      /** Format: int64 */
      ip?: number
      /** Format: int64 */
      rp?: number
    }
    'StoreLcdsStoreFulfillmentNotification': {
      data?: {
        [key: string]: unknown | undefined
      }
      inventoryType?: string
      /** Format: int64 */
      ip?: number
      /** Format: int64 */
      rp?: number
    }
    /** @enum {string} */
    'SubState':
      | 'SUGGESTED'
      | 'PENDING'
      | 'DECLINED'
      | 'REVOKED'
      | 'NOT_READY'
      | 'FORCED_NOT_READY'
      | 'READY'
    'ThemeVp': {
      /** Format: int32 */
      themeId?: number
      /** Format: int32 */
      themeVp?: number
    }
    'TicketOfferDTO': {
      /** Format: int32 */
      count?: number
      /** Format: int64 */
      offerPlayerId?: number
      /** Format: int64 */
      receivePlayerId?: number
      ticketOfferState?: LcuComponents['schemas']['TicketOfferState']
      type?: LcuComponents['schemas']['TicketType']
    }
    /** @enum {string} */
    'TicketOfferState': 'ACTIVE' | 'ACCEPTED' | 'REJECTED' | 'REVOKED'
    /** @enum {string} */
    'TicketType': 'BASIC' | 'PREMIUM'
    'TierConfig': {
      /** Format: int64 */
      delayTime?: number
      /** Format: int64 */
      estimateTime?: number
      /** Format: int32 */
      tier?: number
    }
    'TimeSeriesEventBeginV1': {
      /** @description event name */
      eventName?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the event occurred
       */
      when?: number
    }
    'TimeSeriesEventEndV1': {
      /** @description event name */
      eventName?: string
      /** @description optional event name suffix */
      suffix?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the event occurred
       */
      when?: number
    }
    'TimeSeriesEventMarkerV1': {
      /** @description event name */
      eventName?: string
      /** @description event marker name */
      markerName?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the event occurred
       */
      when?: number
    }
    'TournamentDTO': {
      /** Format: int64 */
      bracketFormationInitDelayMs?: number
      /** Format: int64 */
      bracketFormationIntervalMs?: number
      bracketSize?: string
      buyInOptions?: number[]
      buyInOptionsPremium?: number[]
      /** Format: int32 */
      entryFee?: number
      honorRestriction?: boolean
      /** Format: int64 */
      id?: number
      lastThemeOfSeason?: boolean
      lft?: boolean
      /** Format: int32 */
      maxInvites?: number
      /** Format: int32 */
      maxSub?: number
      /** Format: int32 */
      maxSuggestionsPerPlayer?: number
      /** Format: int32 */
      minGames?: number
      nameLocKey?: string
      nameLocKeySecondary?: string
      phases?: LcuComponents['schemas']['TournamentPhaseDTO'][]
      /** Format: int32 */
      queueId?: number
      rankRestriction?: boolean
      /** Format: int64 */
      resumeTime?: number
      rewardConfig?: LcuComponents['schemas']['ClashRewardConfigClient'][]
      /** Format: int64 */
      rosterCreateDeadline?: number
      /** Format: int32 */
      rosterSize?: number
      /** Format: int64 */
      scheduleEndTime?: number
      /** Format: int64 */
      scheduleTime?: number
      /** Format: int64 */
      scoutingTimeMs?: number
      smsRestriction?: boolean
      status?: LcuComponents['schemas']['TournamentStatusEnum']
      /** Format: int32 */
      themeId?: number
      tierConfigs?: LcuComponents['schemas']['TierConfig'][]
      voiceEnabled?: boolean
    }
    'TournamentHistoryAndWinnersDTO': {
      tournamentHistory?: LcuComponents['schemas']['TournamentDTO'][]
      tournamentWinnersCompressed?: string
    }
    'TournamentInfoDTO': {
      inviteePendingRosters?: LcuComponents['schemas']['PendingRosterDTO'][]
      pendingRoster?: LcuComponents['schemas']['PendingRosterDTO']
      roster?: LcuComponents['schemas']['RosterDTO']
      subRosters?: LcuComponents['schemas']['RosterDTO'][]
      /** Format: int32 */
      themeVp?: number
      tournament?: LcuComponents['schemas']['TournamentDTO']
    }
    'TournamentInfoMinimalDTO': {
      /** Format: int64 */
      time?: number
      tournamentInfo?: LcuComponents['schemas']['TournamentInfoDTO'][]
    }
    'TournamentPhaseDTO': {
      cancelled?: boolean
      capacityStatus?: LcuComponents['schemas']['CapacityEnum']
      /** Format: int64 */
      id?: number
      limitTiers?: number[]
      /** Format: int32 */
      period?: number
      /** Format: int64 */
      registrationTime?: number
      /** Format: int64 */
      startTime?: number
      /** Format: int64 */
      tournamentId?: number
    }
    'TournamentPlayerInfoDTO': {
      player?: LcuComponents['schemas']['PlayerDTO']
      rosterStats?: LcuComponents['schemas']['RosterStatsDTO'][]
      /** Format: int32 */
      seasonVp?: number
      themeVps?: LcuComponents['schemas']['ThemeVp'][]
      /** Format: int32 */
      tier?: number
      /** Format: int64 */
      time?: number
      tournamentInfo?: LcuComponents['schemas']['TournamentInfoDTO'][]
    }
    /** @enum {string} */
    'TournamentStatusEnum': 'DEFAULT' | 'CANCELLED' | 'PAUSED' | 'PRERESUME'
    'TracingEventV1': {
      /** @description destination module name */
      dest?: string
      /** @description event specific details */
      details?: string
      /** @description event name */
      name?: string
      /** @description source module name */
      src?: string
      /** @description a list of tags associated with this event */
      tags?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the event occurred
       */
      when?: number
    }
    /** @enum {string} */
    'TracingModuleThreadingModelV1':
      | 'kNone'
      | 'kMainThread'
      | 'kDedicated'
      | 'kSequential'
      | 'kConcurrent'
      | 'kParallel'
    /** @enum {string} */
    'TracingModuleTypeV1':
      | 'kUnknown'
      | 'kRemoteAppModule'
      | 'kBackEndPlugin'
      | 'kBackendOther'
      | 'kFrontEndPlugin'
      | 'kRemotingSource'
    'TracingModuleV1': {
      /** Format: int32 */
      moduleId?: number
      name?: string
      threadingModel?: LcuComponents['schemas']['TracingModuleThreadingModelV1']
      type?: LcuComponents['schemas']['TracingModuleTypeV1']
    }
    'TracingPhaseBeginV1': {
      /** @description relative importance of this phase */
      importance?: LcuComponents['schemas']['TracingPhaseImportanceV1']
      /** @description phase name */
      name?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the phase began
       */
      when?: number
    }
    'TracingPhaseEndV1': {
      /** @description phase name */
      name?: string
      /**
       * Format: int64
       * @description timestamp in microseconds of when the phase ended
       */
      when?: number
    }
    /** @enum {string} */
    'TracingPhaseImportanceV1': 'trivial' | 'minor' | 'major'
    'TutorialMetadata': {
      displayRewards?: {
        [key: string]: string | undefined
      }
      queueId?: string
      /** Format: int32 */
      stepNumber?: number
      useChosenChampion?: boolean
      useQuickSearchMatchmaking?: boolean
    }
    'VerboseLootOddsDTO': {
      chanceToContain?: LcuComponents['schemas']['LootOddsDTO'][]
      checksOwnership?: boolean
      guaranteedToContain?: LcuComponents['schemas']['LootOddsDTO'][]
      hasPityRules?: boolean
      lastUpdated?: string
      recipeName?: string
    }
    'VoiceChatAudioPropertiesResource': {
      /** Format: double */
      fastEnergyMeter?: number
      isLoopbackEnabled?: boolean
      isMicActive?: boolean
      isSpeakerActive?: boolean
      /** Format: int32 */
      micEnergy?: number
      /** Format: int32 */
      micVolume?: number
      /** Format: double */
      noiseFloorMeter?: number
      /** Format: int32 */
      speakerEnergy?: number
      /** Format: int32 */
      speakerVolume?: number
      /** Format: double */
      speechThresholdMeter?: number
    }
    'VoiceChatCallStatsResource': {
      callId?: string
      captureDeviceConsecutivelyReadCount?: number[]
      codecName?: string
      /** Format: int64 */
      currentBars?: number
      /** Format: int64 */
      currentOpusBandwidth?: number
      /** Format: int64 */
      currentOpusBitRate?: number
      /** Format: int64 */
      currentOpusComplexity?: number
      /** Format: int64 */
      currentOpusMaxPacketSize?: number
      /** Format: int64 */
      currentOpusVbrMode?: number
      /** Format: int64 */
      incomingDiscarded?: number
      /** Format: int64 */
      incomingOutOfTime?: number
      /** Format: int64 */
      incomingPacketloss?: number
      /** Format: int64 */
      incomingReceived?: number
      /** Format: double */
      lastLatencyMeasured?: number
      /** Format: int64 */
      latencyMeasurementCount?: number
      /** Format: int64 */
      latencyPacketsDropped?: number
      /** Format: int64 */
      latencyPacketsLost?: number
      /** Format: int64 */
      latencyPacketsMalformed?: number
      /** Format: int64 */
      latencyPacketsNegativeLatency?: number
      /** Format: int64 */
      latencyPacketsSent?: number
      /** Format: double */
      latencySum?: number
      /** Format: double */
      maxLatency?: number
      /** Format: double */
      minLatency?: number
      /** Format: int64 */
      outgoingSent?: number
      /** Format: int64 */
      plcOn?: number
      /** Format: int64 */
      plcSyntheticFrames?: number
      /** Format: int64 */
      renderDeviceErrors?: number
      /** Format: int64 */
      renderDeviceOverruns?: number
      /** Format: int64 */
      renderDeviceUnderruns?: number
      /** Format: double */
      rFactor?: number
      /** Format: double */
      sampleIntervalBegin?: number
      /** Format: double */
      sampleIntervalEnd?: number
    }
    /** @enum {string} */
    'VoiceChatCaptureDevicePermissionStatus':
      | 'promptForPermission'
      | 'permissionDenied'
      | 'permissionGranted'
    'VoiceChatCodecSettingsResource': {
      /** Format: int32 */
      codecBandwidth?: number
      /** Format: int32 */
      codecBitrate?: number
      /** Format: int32 */
      codecComplexity?: number
      /** Format: int32 */
      codecVbrMode?: number
    }
    /** @enum {string} */
    'VoiceChatConfigReadinessEnum': 'NotReady' | 'Ready' | 'Disabled'
    'VoiceChatConfigResource': {
      accessTokenUri?: string
      authTokenUri?: string
      jwt2gvtUrl?: string
      /** Format: int32 */
      logLevel?: number
      logLevelName?: string
      logsPath?: string
      provider?: string
      useExternalAuth?: boolean
      voiceDomain?: string
      voiceServerUri?: string
    }
    'VoiceChatConfigStatus': {
      readiness?: LcuComponents['schemas']['VoiceChatConfigReadinessEnum']
    }
    /** @enum {string} */
    'VoiceChatConfigType': 'public' | 'player'
    'VoiceChatDeviceResource': {
      handle?: string
      is_current_device?: boolean
      is_default?: boolean
      is_effective_device?: boolean
      name?: string
    }
    'VoiceChatParticipantResource': {
      /** Format: int32 */
      energy?: number
      id?: string
      isMuted?: boolean
      isSpeaking?: boolean
      name?: string
      /** Format: int32 */
      speakingTimestamp?: number
      uri?: string
      /** Format: int32 */
      volume?: number
    }
    'VoiceChatPushToTalkResource': {
      pttEnabled?: boolean
      pttKeyBinding?: string
    }
    'VoiceChatRsoAuthorizationResource': {
      /** Format: int64 */
      currentAccountId?: number
      currentPlatformId?: string
      subject?: string
    }
    'VoiceChatSessionResource': {
      id?: string
      isMuted?: boolean
      isTransmitEnabled?: boolean
      participants?: LcuComponents['schemas']['VoiceChatParticipantResource'][]
      status?: LcuComponents['schemas']['VoiceChatSessionStatus']
      /** Format: int32 */
      volume?: number
    }
    /** @enum {string} */
    'VoiceChatSessionStatus': 'active' | 'onHold'
    'VoiceChatSettingsResource': {
      currentCaptureDeviceHandle?: string
      currentRenderDeviceHandle?: string
      localMicMuted?: boolean
      loopbackEnabled?: boolean
      /** Format: int32 */
      micLevel?: number
      /** Format: int32 */
      speakerLevel?: number
      /** Format: int32 */
      vadHangoverTime?: number
      /** Format: int32 */
      vadSensitivity?: number
    }
    'VoiceChatStateResource': {
      connected?: boolean
    }
    /** @enum {string} */
    'VoiceChatStateType':
      | 'disconnected'
      | 'connecting'
      | 'connected'
      | 'disconnecting'
      | 'initialized'
      | 'shuttingdown'
    'VoiceChatUpdateCodecSettingsResource': {
      /** Format: int32 */
      codecBandwidth?: number
      /** Format: int32 */
      codecBitrate?: number
      /** Format: int32 */
      codecComplexity?: number
      /** Format: int32 */
      codecVbrMode?: number
    }
    'VoiceChatUpdateParticipantResource': {
      isMuted?: boolean
      /** Format: int32 */
      volume?: number
    }
    'VoiceChatUpdateSettingsResource': {
      currentCaptureDeviceHandle?: string
      currentRenderDeviceHandle?: string
      localMicMuted?: boolean
      loopbackEnabled?: boolean
      /** Format: int32 */
      micLevel?: number
      /** Format: int32 */
      speakerLevel?: number
      /** Format: int32 */
      vadHangoverTime?: number
      /** Format: int32 */
      vadSensitivity?: number
    }
    'VoiceChatVoiceErrorCounterResource': {
      /** Format: int64 */
      count?: number
      error?: LcuComponents['schemas']['VoiceChatVoiceErrorResource']
      /** Format: int64 */
      timeOfLastError?: number
    }
    'VoiceChatVoiceErrorResource': {
      errorString?: string
      /** Format: int64 */
      responseType?: number
      responseTypeString?: string
      /** Format: int64 */
      returnCode?: number
      /** Format: int64 */
      statusCode?: number
      statusString?: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}>

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
            [key: string]: LcuComponents['schemas']['LolChallengesUIPlayerSummary'] | undefined
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
            [key: string]: LcuComponents['schemas']['ClashEventData'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolGameflowGameModeSpellList'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolGameflowGameModeSpellList'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolInventoryInventoryCacheEntry'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolLootPlayerLoot'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolRankedRankedStats'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolStoreItemKey'] | undefined
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
            [key: string]: LcuComponents['schemas']['LolStoreItemKey'] | undefined
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

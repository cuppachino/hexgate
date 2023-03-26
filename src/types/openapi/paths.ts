import type { LcuOperations } from './operations.js'

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

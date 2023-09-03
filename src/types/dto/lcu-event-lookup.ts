import type { LcuComponents } from '../openapi/components.js'
import type { LobbyEvent } from './lobby.js'

export interface LcuEventLookup {
  /**
   * Fired when a callback is invoked.
   */
  'OnCallback': Record<string, unknown>
  /**
   * Fired when a resource is changed.
   */
  'OnJsonApiEvent': Record<string, unknown>
  'OnJsonApiEvent_chat_v1_session': Record<string, unknown>
  'OnJsonApiEvent_chat_v1_settings': Record<string, unknown>
  'OnJsonApiEvent_chat_v3_blocked': Record<string, unknown>
  'OnJsonApiEvent_chat_v3_errors': Record<string, unknown>
  'OnJsonApiEvent_chat_v3_friends': Record<string, unknown>
  'OnJsonApiEvent_chat_v3_groups': Record<string, unknown>
  'OnJsonApiEvent_chat_v4_friendrequests': Record<string, unknown>
  'OnJsonApiEvent_chat_v4_presences': Record<string, unknown>
  'OnJsonApiEvent_chat_v5_messages': Record<string, unknown>
  'OnJsonApiEvent_chat_v5_participants': Record<string, unknown>
  'OnJsonApiEvent_chat_v6_conversations': Record<string, unknown>
  'OnJsonApiEvent_client-config_v1_status': Record<string, unknown>
  'OnJsonApiEvent_client-config_v2_config': Record<string, unknown>
  'OnJsonApiEvent_client-config_v2_namespace': Record<string, unknown>
  'OnJsonApiEvent_config_v1_config': Record<string, unknown>
  'OnJsonApiEvent_data-store_v1_install-settings': Record<string, unknown>
  'OnJsonApiEvent_data-store_v1_system-settings': Record<string, unknown>
  'OnJsonApiEvent_entitlements_v1_token': Record<string, unknown>
  'OnJsonApiEvent_ga-restriction_v1_penalty-notifications': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-account-verification_v1_is-verified': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-active-boosts_v1_active-boosts': Record<string, unknown>
  'OnJsonApiEvent_lol-anti-addiction_v1_anti-addiction-token': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-catalog_v1_items': Record<string, unknown>
  'OnJsonApiEvent_lol-challenges_v1_client-state': Record<string, unknown>
  'OnJsonApiEvent_lol-challenges_v1_seasons': Record<string, unknown>
  'OnJsonApiEvent_lol-champ-select-legacy_v1_bannable-champion-ids': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select-legacy_v1_current-champion': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select-legacy_v1_disabled-champion-ids': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select-legacy_v1_implementation-active': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select-legacy_v1_pickable-champion-ids': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select-legacy_v1_pickable-skin-ids': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select-legacy_v1_session': Record<string, unknown>
  'OnJsonApiEvent_lol-champ-select-legacy_v1_team-boost': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select_v1_all-grid-champions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-champ-select_v1_current-champion': Record<string, unknown>
  /**
   * The current summoner's selected champion in champ select.
   */
  'OnJsonApiEvent_lol-champ-select_v1_grid-champions': LcuComponents['schemas']['LolChampSelectChampGridChampion']
  'OnJsonApiEvent_lol-champ-select_v1_muted-players': LcuComponents['schemas']['LolChampSelectMutedPlayerInfo'][]
  'OnJsonApiEvent_lol-champ-select_v1_session': LcuComponents['schemas']['LolChampSelectChampSelectSession']
  'OnJsonApiEvent_lol-champ-select_v1_team-boost': LcuComponents['schemas']['LolChampSelectTeamBoost']
  'OnJsonApiEvent_lol-champions_v1_inventories':
    | LcuComponents['schemas']['LolChampionsCollectionsChampion']
    | LcuComponents['schemas']['LolChampionsCollectionsChampion'][]
  'OnJsonApiEvent_lol-champions_v1_owned-champions-minimal':
    | LcuComponents['schemas']['LolChampionsCollectionsChampionMinimal']
    | LcuComponents['schemas']['LolChampionsCollectionsChampionMinimal'][]
  'OnJsonApiEvent_lol-chat_v1_blocked-players': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_config': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_conversations': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_friend-counts': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_friend-groups': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_friend-requests': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_friends': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_me': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_resources': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_session': Record<string, unknown>
  'OnJsonApiEvent_lol-chat_v1_settings': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_checkin-allowed': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_disabled-config': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_enabled': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_iconconfig': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_invited-roster-ids': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_player': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_playmode-restricted': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_simple-state-flags': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_time': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_visible': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v1_voice-enabled': Record<string, unknown>
  'OnJsonApiEvent_lol-clash_v2_playmode-restricted': Record<string, unknown>
  'OnJsonApiEvent_lol-client-config_v3_client-config': Record<string, unknown>
  'OnJsonApiEvent_lol-collections_v1_inventories': Record<string, unknown>
  'OnJsonApiEvent_lol-content-targeting_v1_filters': Record<string, unknown>
  'OnJsonApiEvent_lol-cosmetics_v1_inventories': Record<string, unknown>
  'OnJsonApiEvent_lol-drops_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-end-of-game_v1_eog-stats-block': Record<string, unknown>
  'OnJsonApiEvent_lol-end-of-game_v1_gameclient-eog-stats-block': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-end-of-game_v1_tft-eog-stats': Record<string, unknown>
  'OnJsonApiEvent_lol-event-shop_v1_info': Record<string, unknown>
  'OnJsonApiEvent_lol-event-shop_v1_navigation-button-data': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-event-shop_v1_token-upsell': Record<string, unknown>
  'OnJsonApiEvent_lol-game-client-chat_v1_aas-messages': Record<string, unknown>
  'OnJsonApiEvent_lol-game-client-chat_v1_buddies': Record<string, unknown>
  'OnJsonApiEvent_lol-game-client-chat_v1_instant-messages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-game-client-chat_v1_party-messages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-game-queues_v1_custom': Record<string, unknown>
  'OnJsonApiEvent_lol-game-queues_v1_custom-non-default': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-game-queues_v1_queues': Record<string, unknown>
  'OnJsonApiEvent_lol-game-settings_v1_game-settings': Record<string, unknown>
  'OnJsonApiEvent_lol-game-settings_v1_input-settings': Record<string, unknown>
  'OnJsonApiEvent_lol-game-settings_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_availability': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_battle-training': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_early-exit-notifications': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-gameflow_v1_gameflow-metadata': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_gameflow-phase': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_session': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_spectate': Record<string, unknown>
  'OnJsonApiEvent_lol-gameflow_v1_watch': Record<string, unknown>
  'OnJsonApiEvent_lol-highlights_v1_config': Record<string, unknown>
  'OnJsonApiEvent_lol-highlights_v1_highlights-folder-path': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-honeyfruit_v1_account-claim': Record<string, unknown>
  'OnJsonApiEvent_lol-honeyfruit_v1_linking-settings-button-available': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-honeyfruit_v1_vng-publisher-settings': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-honor-v2_v1_ballot': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_config': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_level-change': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_profile': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_recipients': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_recognition': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_recognition-history': Record<string, unknown>
  'OnJsonApiEvent_lol-honor-v2_v1_team-choices': Record<string, unknown>
  'OnJsonApiEvent_lol-hovercard_v1_friend-info': Record<string, unknown>
  'OnJsonApiEvent_lol-hovercard_v1_friend-info-by-summoner': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-inventory_v1_initial-configuration-complete': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-inventory_v1_inventory': Record<string, unknown>
  'OnJsonApiEvent_lol-inventory_v1_signedInventory': Record<string, unknown>
  'OnJsonApiEvent_lol-inventory_v1_wallet': Record<string, unknown>
  'OnJsonApiEvent_lol-inventory_v2_inventory': Record<string, unknown>
  'OnJsonApiEvent_lol-kr-playtime-reminder_v1_message': Record<string, unknown>
  'OnJsonApiEvent_lol-league-session_v1_league-session-token': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-license-agreement_v1_agreements': Record<string, unknown>
  'OnJsonApiEvent_lol-license-agreement_v1_all-agreements': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-license-agreement_v1_serve-location': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-loadouts_v1_enabled': Record<string, unknown>
  'OnJsonApiEvent_lol-loadouts_v1_loadouts-ready': Record<string, unknown>
  'OnJsonApiEvent_lol-loadouts_v4_loadout': Record<string, unknown>
  'OnJsonApiEvent_lol-loadouts_v4_loadouts': Record<string, unknown>
  'OnJsonApiEvent_lol-lobby-team-builder_champ-select_v1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-lobby-team-builder_v1_matchmaking': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-lobby_v1_lobby': Record<string, unknown>
  'OnJsonApiEvent_lol-lobby_v2_comms': Record<string, unknown>
  'OnJsonApiEvent_lol-lobby_v2_eligibility': Record<string, unknown>
  'OnJsonApiEvent_lol-lobby_v2_lobby': LobbyEvent
  'OnJsonApiEvent_lol-lobby_v2_party-active': Record<string, unknown>
  'OnJsonApiEvent_lol-login_v1_login-connection-state': Record<string, unknown>
  'OnJsonApiEvent_lol-login_v1_login-data-packet': Record<string, unknown>
  'OnJsonApiEvent_lol-login_v1_login-in-game-creds': Record<string, unknown>
  'OnJsonApiEvent_lol-login_v1_login-platform-credentials': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-login_v1_session': Record<string, unknown>
  'OnJsonApiEvent_lol-login_v1_wallet': Record<string, unknown>
  'OnJsonApiEvent_lol-login_v2_league-session-init-token': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-loot_v1_currency-configuration': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v1_enabled': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v1_milestones': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v1_player-display-categories': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-loot_v1_player-loot': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v1_player-loot-map': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v1_recipes': Record<string, unknown>
  'OnJsonApiEvent_lol-loot_v2_player-loot-map': Record<string, unknown>
  'OnJsonApiEvent_lol-loyalty_v1_status-notification': Record<string, unknown>
  'OnJsonApiEvent_lol-maps_v1_maps': Record<string, unknown>
  'OnJsonApiEvent_lol-maps_v2_maps': Record<string, unknown>
  'OnJsonApiEvent_lol-marketing-preferences_v1_partition': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-marketing-preferences_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-matchmaking_v1_ready-check':
    | LcuComponents['schemas']['LolMatchmakingMatchmakingReadyCheckResource']
    | null
  'OnJsonApiEvent_lol-matchmaking_v1_search': LcuComponents['schemas']['LolMatchmakingMatchmakingSearchResource']
  'OnJsonApiEvent_lol-missions_v1_missions': Record<string, unknown>
  'OnJsonApiEvent_lol-missions_v1_series': Record<string, unknown>
  'OnJsonApiEvent_lol-npe-rewards_v1_login-rewards': Record<string, unknown>
  'OnJsonApiEvent_lol-npe-tutorial-path_v1_rewards': Record<string, unknown>
  'OnJsonApiEvent_lol-npe-tutorial-path_v1_settings': Record<string, unknown>
  'OnJsonApiEvent_lol-npe-tutorial-path_v1_tutorials': Record<string, unknown>
  'OnJsonApiEvent_lol-patch_v1_checking-enabled': Record<string, unknown>
  'OnJsonApiEvent_lol-patch_v1_environment': Record<string, unknown>
  'OnJsonApiEvent_lol-patch_v1_game-version': Record<string, unknown>
  'OnJsonApiEvent_lol-patch_v1_notifications': Record<string, unknown>
  'OnJsonApiEvent_lol-patch_v1_products': Record<string, unknown>
  'OnJsonApiEvent_lol-patch_v1_status': Record<string, unknown>
  'OnJsonApiEvent_lol-perks_v1_inventory': Record<string, unknown>
  'OnJsonApiEvent_lol-perks_v1_pages': Record<string, unknown>
  'OnJsonApiEvent_lol-perks_v1_perks': Record<string, unknown>
  'OnJsonApiEvent_lol-perks_v1_settings': Record<string, unknown>
  'OnJsonApiEvent_lol-perks_v1_styles': Record<string, unknown>
  'OnJsonApiEvent_lol-platform-config_v1_initial-configuration-complete': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespace_Parties_PublishPresenceDelay': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces': Record<string, unknown>
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_IsNewAvsServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_KrPhoneDisplayEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_PasswordEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_PhoneValidationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_SettingsEnable': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_SettingsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_SettingsVerifyEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_AccountVerification_ShouldUseNewAvs': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners_IsEnabledOnProfile': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners_IsEquipEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Banners_IsOtherSummonersProfileEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards_DayOneModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards_GetPostgameXpFromRms': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BetterRewards_VisualUpdateEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BotConfigurations': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BotConfigurations_IntermediateInCustoms': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_BotConfigurations_RiotscriptInCustoms': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_CareerStats': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_CareerStats_StatsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_ChallengeUpdateDelaySeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_ClientState': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_CollectionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_CustomizeIdentityEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_DarkModeAllowlistOnly': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_EnabledInventoryTypes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_FeatureIntroEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_LobbyChallengesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_MaxNotificationSubscriptionDelaySeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_MaxWaitTimeBeforeNotificationSubscriptionSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_NumberOfSuggestedChallenges': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_PartiesV2Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_PostgameOverride': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_RankIdentityOverride': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_WaitTimeBeforeCallChallengeUpdateSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Challenges_WaitTimeBeforeDarkModeAdditionalCallsSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_CapUnlockChampionLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_ChampionPointQueueTypes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_EndOfGameEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_GradeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_LegsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_LootChestsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_MaxChampionLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_MinSummonerLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_ShowGradeAvailablePopup': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionMasteryConfig_SupportedQueueTypes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_AllChampsAvailableInAram': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_AlwaysShowRewardIcon': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_AutoReconnectEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_CollatorChampionFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseActionPatchV2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseOptimizedBotChampionSelectProcessor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseOptimizedChampSelectProcessor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionSelect_UseOptimizedSpellSelectProcessor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionTradeService': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChampionTradeService_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChatDomain': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChatDomain_ChampSelectDomainName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ChatDomain_PostGameDomainName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_ChatHistoryEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_ChatHistoryThreshold': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_Default_public_chat_rooms': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_MaximumRosterSize': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_MobileEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chat_Rename_general_group_throttle': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chroma': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Chroma_IsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_AwardsTabEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_BracketSpectateEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_CapacityIndicatorEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ClashStartModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_DarkModeEntitlement': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_EnabledState': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_EndOfGameFlowEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_FindTeamViewEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_HonorCheckEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_HonorLevelRequired': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IconConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_InviteModalTiersEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IsOtherSummonersProfileEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IsPlaymodeRestrictionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_IsRewardsModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_LftEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_LoginModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_PremiumTicketsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ScoutingDisableHistory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ScoutingDisableMastery': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ScoutingDisableRanked': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ScoutingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ScoutingUseDeprecated': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_SmsVerificationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_StorePageLink': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_String': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_SubstitutionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_ThirdPartyInvitesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_TutorialEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_Visibility': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_VoiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClashConfig_Worlds2020LootModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_MaxNumPlayersForPracticeToolGame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_advancedTutorialEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_archivedStatsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_buddyNotesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_championTradeThroughLCDS': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_clientHeartBeatRateSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_currentSeason': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_displayPromoGamesPlayedEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_enabledQueueIdsList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_freeToPlayChampionForNewPlayersIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_freeToPlayChampionIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_freeToPlayChampionsForNewPlayersMaxLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_gameMapEnabledDTOList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_gameModeToInactiveSpellIds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveAramSpellIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveChampionIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveClassicSpellIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveOdinSpellIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveSpellIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_inactiveTutorialSpellIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_knownGeographicGameServerRegions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_leagueServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_leaguesDecayMessagingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_localeSpecificChatRoomsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_masteryPageOnServer': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_maxMasteryPagesOnServer': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_minNumPlayersForPracticeGame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_modularGameModeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_observableCustomGameModes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_observableGameModes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_observerModeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_practiceGameEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_practiceGameTypeConfigIdList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_queueThrottleDTO': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_replayServiceAddress': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_replaySystemStates': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_riotDataServiceDataSendProbability': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_runeUniquePerSpellBook': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_sendFeedbackEventsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_spectatorSlotLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_storeCustomerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_teamServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_tournamentSendStatsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_tournamentShortCodesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_tribunalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ClientSystemStates_unobtainableChampionSkinIDList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubPresenceDecryptionKey': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubServiceUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsActiveIcon': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsLCUEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_ClubsMemberIcon': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Clubs_InviteToClubLobbyEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Companions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Companions_SelectorInChampSelectEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducationURLs': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducationURLs_LAST_HIT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation_MaxTargetSummonerLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ContextualEducation_TargetMinionsPerWave': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_CustomGame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_CustomGame_BotsAvailableInAram': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_CustomGame_MinorRestrictionsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampionSkins': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampionSkins_DisabledChampionSkins': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampionSkins_DisabledChromas': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM_BOT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM_CLASH': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARAM_UNRANKED_5x5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ARSR': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ASCENSION': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_BILGEWATER': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_BOT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_BOT_3x3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_CLASH': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_CLASSIC': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_COUNTER_PICK': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_FIRSTBLOOD': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_FIRSTBLOOD_1x1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_FIRSTBLOOD_2x2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_GAMEMODEX': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_HEXAKILL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_KINGPORO': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_KING_PORO': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_LNY23_TFT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NEXUSBLITZ': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NIGHTMARE_BOT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NORMAL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NORMAL_3x3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_NORMAL_TFT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ODIN': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ODIN_UNRANKED': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ODYSSEY': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ONEFORALL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ONEFORALL_5x5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_PRACTICETOOL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_FLEX_SR': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_FLEX_TT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_SOLO_5x5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TEAM_3x3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TEAM_5x5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT_DOUBLE_UP': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT_PAIRS': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_RANKED_TFT_TURBO': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_SIEGE': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_SNOWURF': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_SR_6x6': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TFT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_MODULE_1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_MODULE_2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_MODULE_3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_TUTORIAL_TFT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_ULTBOOK': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_URF': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DisabledChampions_URF_BOT': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DiscordRP_IsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DockedPrompt': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_DockedPrompt_EnabledNewDockedPromptRenderer': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_CS_CZ_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_DE_DE_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EL_GR_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_AU_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_GB_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_PH_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_PL_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_SG_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EN_US_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ES_AR_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ES_ES_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ES_MX_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubDataURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubInitialized': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubLongPollMinutes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_EsportsHubShortPollMinutes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_FR_FR_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_HU_HU_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ID_ID_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_IT_IT_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_JA_JP_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_KO_KR_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_KillHub': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_Landing_Embed_URL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_MS_MY_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_PL_PL_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_PT_BR_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_RO_RO_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_RU_RU_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_Staging': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_TH_TH_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_TR_TR_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_VN_VN_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ZH_CN_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ZH_MY_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ESports_ZH_TW_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Emotes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Emotes_IsEmotePanelEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Emotes_IsEmoteTutorialModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndOfGameGifting': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndOfGameGifting_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_GiftRecipientLevelMin': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_GiftSenderLevelMin': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_GiftSenderRPMax': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_RecipientGiftDailyMax': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EndofGameGiftSettings_SenderGiftDailyMax': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EoGReporting': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_EoGReporting_GameAgnosticReportingTrinary': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsAssetMagickURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsServiceEndpoint': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsStreamGroupSlug': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Esports_NotificationsStreamURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Eternals': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Eternals_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Eternals_ServiceUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedGame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedGame_MetadataEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_DisabledRgmButtonEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_GoldenSpatulaClubDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_MaxNotificationSaveDelayMinutes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_NotificationsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_QueueToggleNotificationMinutesThreshold': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_QueuesDelayedRefreshMaxTimeout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FeaturedModes_QueuesDelayedRefreshMinTimeout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_AssociationUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_ContactDetailsUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_ContactsUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnableAddFriendButton': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnableSocial': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnableViewAllPanel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnabledPercent': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_EnabledSocialNetworks': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_FacebookAssociationUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_FacebookUnlinkUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_FaqLink': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_HideFriends': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_PlayerLevelForNewNotification': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_RegistrationPollDurationMillis': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_RegistrationPollRateMillis': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_ShowToolTip': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_StatusExpiryMillis': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_UnlinkUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_FriendRecommendations_UseNativeFacebookPop': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseDX11': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseMetal': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseNewX3D': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameClientCmdLineToggles_UseNewX3DFramebuffers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_GameInviteServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_InviteBulkMaxSize': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_LobbyCreationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameInvites_ServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameTimerSync': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameTimerSync_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GameTimerSync_PercentOfTotalTimerToSyncAt': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Gameflow_ForceGameLocaleAsEnglish': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Gameflow_ShouldSendRiotClientHeartBeat': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GeoInfo': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GeoInfo_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GuestSlots': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_GuestSlots_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Highlights': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Highlights_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_DayOneModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_Honor2018Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Honor_SecondsToVote': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Inventory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Inventory_BaseServiceUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Inventory_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets_EditorEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets_MaxItemSets': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ItemSets_SendItemSetsToGame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Karma': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Karma_Worlds2017VotingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Kickout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_KrPlaytimeReminder': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCU': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUACS': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUACS_Endpoint': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUACS_UseIdTokens': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUAlphaShutdown': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUAlphaShutdown_Countdown': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUAugmentsVisible': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUCollectiblesChromasEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUCollectiblesWardSkinsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUMasteriesVisible': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUPerksVisible': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCURunesVisible': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUCollections_LCUSkinsViewerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUMatchHistory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUMatchHistory_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUMatchHistory_MatchHistoryWebURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_CanQueryInactiveItems': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_DisableCapRMS': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_EnableDropRatesInPurchaseModal': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_EnableFetchOffers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_LookupMissingCatalogItemKeys': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_PlayerGiftingNotificationsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_RecommendationsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_SinglePageApplicationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_StoreUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_UseGameDataAssets': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_UseRMS': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCUStore_UseRsoAccessToken': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCU_AirClientAlphaInviteEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LCU_AirClientAlphaInviteURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAlphaShutdown': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAlphaShutdown_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAutoLogout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAutoLogout_IdleExitAfterWarningMinutes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuAutoLogout_IdleWarningMinutes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuBuddySpectate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuBuddySpectate_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_AbilitiesSectionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_PawEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionDetails_SkinsSectionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_AlliedSkinDisplayEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectChangeTooltipDurationMillis': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectChangeTooltipKey': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectMutingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampSelectReportV2Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ChampTradingTooltipEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_DisableAutoSmiteAssignment': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_EnableFavorites': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_EnablePositionFilters': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_IsDisconnectNotificationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_PickOrderSwappingTooltipEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_PositionAssignmentAnimationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_RandomChampionEnabledGameQueues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_RandomChampionRateLimitInterval': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_RandomChampionRateLimitMaxActions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ReportingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ShowChampSelectChangeTooltip': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_ShowEmoteButton': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_SkinPurchaseEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_SkinPurchaseNotificationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuChampionSelect_SkinPurchaseTime': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_ABTestFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_ABTestFilterGroups': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_ABTestFilterSalt': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_EntitlementsFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_LaneFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_LevelFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_LocationFiltersEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_Mapping': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterChampionLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterDaysSinceLastPlayed': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MasteryFilterLevelThreshold': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_MissionsFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RankFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RankedFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RevivalFilterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_RevivalFilterThreshold': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageBaseUri': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageRolloutPct': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuContentTargeting_TargetingAttributeStorageUri': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuDisambiguation': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuDisambiguation_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuDisambiguation_Required': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_IsOptional': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_MandatoryAt': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_MaxOptionalLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_MinimumSummonerLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuEmailVerification_RequiredLogins': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_GameplayEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_HotkeysEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_InterfaceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuGameSettings_SoundEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_LandingPagesTimeout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_ReloadEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_ReloadPollerInterval': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_ReloadStaleInterval': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHome_RequireItemLoaded': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHovercard': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHovercard_Disabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuHovercard_RoleInfoEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLeagueSpectate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLeagueSpectate_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLevelUp': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLevelUp_EventEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLevelUp_ModalNotificationDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_AutoGrantInviteEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_GameInvitesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_ObserverModeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_PracticeGameEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_PracticeGameListEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_QueueEligibilityGateKeeperEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_QueueEligibilityV2Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_SendInventoryTokenMetricsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLobby_UseInventoryToken': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLoyalty': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLoyalty_LeagueUnlockedEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuLoyalty_LolcafeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_HardMaxSummonerLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_MaxSummonerLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_RewardsChallengesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_RewardsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuNpe_RewardsLoginEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_BypassAccountIds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_Host': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_PmcEdgeHost': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_PmcSessionsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_RiotPayEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPayments_RiotPayThrottle': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuProfiles': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuProfiles_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuProfiles_ForceLayout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_BaseUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_CapOrdersUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_NonRefundableDisclaimerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuPurchaseWidget_PurchaseDisclaimerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuReadyCheckUpdate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuReadyCheckUpdate_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuRevivals': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuRevivals_FoundationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors_SampleRate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSentryJSErrors_SentryDSN': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSettings': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSettings_FullRepairEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_AutoLinkEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_ChatWindowPopoutEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_ChatWindowResizeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_ClearChatHistoryEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_DefaultGameQueues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_DetachedChatWindowResizeDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_EnabledGameQueues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_FriendRequestToastsDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_FriendsListGiftingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_LcuSupportedGameQueues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_MoreUnreadsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_NewChatButtonEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_RecentlyPlayedDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_SlashMeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_SortConversationsByTimeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_StatusesDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_VirtualizedMessagesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSocial_VirtualizedRosterEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSummonerIconPicker': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuSummonerIconPicker_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_BattlepassHubEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_EligibilityInventoryTypes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_HubEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_MatchHistoryEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_OrbEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_PatchNotesUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_PlayButtonEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_SeriesInternalName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTft_TftHomeEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_CarouselChampIds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_GameModeSelectEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_IntroABTestPercentage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_NewPlayerExperienceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_PracticeToolEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_SkipTutorialPathAfterLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_StatsTimeout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuTutorial_TutorialSummonerIcon': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuUiKit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LcuUiKit_CelebrationModalsDisabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_ApexDemotionNotificationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_ChallengerLaddersEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_ConfigRefreshIntervalSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_CurrentSplit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_CurrentYear': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_DefaultJwtTimeToLiveSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationEndTime': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationSettingsName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationSettingsSchemaVer': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationStartTime1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationStartTime2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationStartTime3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationsConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosNotificationsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosRewardGroupsConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_EosRewardsConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_FlexRestrictionModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsGlobalNotificationsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsPreseason': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsSeasonMemorialModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_IsSplitStartModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_JWTEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_MasterTierEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_PreseasonName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_PromoHelperEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_PromotionVignetteV2Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_Ranked2017Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_Ranked2019Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_RankedReferenceModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_RankedRewardConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_SeasonModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_SeasonName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_SendSignedRankedOverview': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueConfig_TftSeasonNameLocKey': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClient': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_GSMv2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_GameAgnosticMatchHistory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Leagues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_MarketingPreferences': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Missions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Parties': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_PlayerBehavior': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_PublishingContent': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Summoner': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Tastes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientEnabledServices_Teambuilder': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientLeagueSessionServicesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientLeagueSessionServicesEnabled_Leagues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientServiceTrafficBalanceRate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClientServiceTrafficBalanceRate_Parties': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClient_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueEdgeClient_LeagueSessionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueSession_FailureRefreshTimeoutSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueSession_RefreshTokenOverride': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeagueSession_UseSessionRefreshV2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeaverBuster': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeaverBuster_IsLbsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LeaverBuster_IsLockoutModalEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_EnableStarShardsServices': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_EnableStarShardsUpgradeFlow': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_InventoryServiceUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_LoadoutsServiceUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_NewLoadoutPickerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_UseV4LoadoutFlow': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Loadouts_ValidInventoryTypes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_bannedUntilDateMillis': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_broadcastNotification': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_coOpVsAiMinutesLeftToday': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_coOpVsAiMsecsUntilReset': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_competitiveRegion': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_customMinutesLeftToday': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_customMsecsUntilReset': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_displayPrimeReformCard': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_emailStatus': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_gameTypeConfigs': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_inGhostGame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_languages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_matchMakingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_maxPracticeGameSize': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minorShutdownEnforced': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minutesUntilMidnight': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minutesUntilShutdown': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_minutesUntilShutdownEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_platformGameLifecycle': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_platformId': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_playerStatSummaries': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_restrictedChatGamesRemaining': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_restrictedGamesRemainingForRanked': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_showEmailVerificationPopup': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LoginDataPacket_simpleMessages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestBundleDiscount5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestsBundleId1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestsBundleId2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestsBundleId3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestsBundleId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_ChestsBundleId5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EnableMythicEssenceDisplay': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestBundleId5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_EventChestsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_InitializationGoalFlags': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LEdgeAccessEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LEdgeAccessPercentage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LcuEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LootMilestonesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_LootOddsQueryEvaluationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_MATERIAL_112LearnMoreURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_MinSummonerLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_NewPlayerChestEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_NoRefundConfirmationEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_PurchaseChestsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_Visible': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootConfig_WorldsTokensEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootService': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootService_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootService_NewPlayerChestEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootService_PurchaseChestsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_LootService_Visible': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Masteries': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Masteries_ShowPointsResetMessage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_EligibilityInventoryTypes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsCompressed': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsCooldownPollingTime': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsFrontEndEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsPollingTime': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsTabTrackerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_MissionsUseV4Api': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Missions_SendSimpleInventoryTokens': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_BasicTutorialMutators': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_BattleTrainingMutators': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_CustomGameMutators': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledAssetMutators': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledCustomModes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledModes': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Mutators_EnabledMutators': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation_NavBarDisplayMode': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation_UseEnhancedMenu': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Navigation_UseTextLabels': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_MatchHistoryWebURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_PostIPXPToLegSEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_RecentlyPlayedNumGames': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_SharingEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewMatchHistory_TftMatchHistoryEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerIntro': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerIntro_IntroUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerIntro_NewSummonerIconIds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerLandingPage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerLandingPage_ChampDisplayList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerLandingPage_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerLandingPage_LikeUsURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerLandingPage_MaxLevel': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerLandingPage_SubscribeURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerRouter': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerRouter_ABDisablingOfTutorial': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_NewPlayerRouter_QueueID': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_CustomsInPartiesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_EnableLobbyCreation': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_EnabledForTeamBuilderQueues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_GameflowRegistrationStatusRequired': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_GameflowSamplingProbability': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_LoginRegistrationTimeout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_NotificationDelaySamplingPercentage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_OpenPartyEnable': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_PremadeEligibilityFromPartiesEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_PremadeEligibilityQueuesDelayedRefreshTimeoutSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_RegistrationConfigurationChangedTimeout': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_RegistrationCredentialsRequired': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_RegistrationRetryInterval': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Parties_ServiceProxySamplingPercentage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PartyRewards': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PartyRewards_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PartyRewards_GameFlowVisualUpdate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Perks': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Perks_MinSummonerLevelUnlockCustomPages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Perks_PerksEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_BaseServiceURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_HubEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_Port': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_PromotionEndTime': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_PromotionName': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_PromotionStartTime': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_Protocol': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ServiceConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ServicePath': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ShowNavButton': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonalizedOffers_ThemedBackground': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_BaseServiceURL': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_HubEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_Port': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_Protocol': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_ServiceConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PersonlizedOffers_ServicePath': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlatformShutdown': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlatformShutdown_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerBehavior': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerBehavior_CodeOfConductEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerBehavior_ReformCardV2Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerFeedbackTool': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerFeedbackTool_BackendUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerFeedbackTool_EnableHomeTrigger': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerNotification': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerNotification_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_EnforceHttps': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_ServiceEndpoint': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PlayerPreferences_Version': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Postgame': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Postgame_ShowPositionDetectionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_ACSLookup': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_ChampionMasteryLookup': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForBuddyPanelView': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForChatFriendsList': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForChatGroupChatParticipants': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForClubChatParticipants': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForCustomGameLobby': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForGameLobbySuggestedPlayers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForGroupFinderCapViewSuggestedPlayers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForSummonerQuickView': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_IsEnabledForTeamBuilderSuggestedPlayers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ProfileHoverCard_LeagueLookup': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_EosIconEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_EosTooltipShowOnce': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_RankQueueOnCount': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Profiles_SkinsPickerEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_LocalePreferenceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_LocalePreferenceOptions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_TftGdsTest': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_PublishingContent_TftHubCardsUrl': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueImages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueImages_OverrideQueueImage': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_AllowablePremadeSizesForQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_KarmaEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndDivisionForPremadeSize2QueueId1100': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndDivisionForPremadeSize2QueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize1QueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize2QueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize3QueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize4QueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_MaxTierAndRankForPremadeSize5QueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_QueuesRequiringTwentyChampions': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTier': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueDefaultUnseededTierQueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueRestrictionMaxDelta': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedDuoQueueRestrictionMode': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeMaxSize': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeRank': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeRestrictionEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighMmrPremadeTier': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTier': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillLowestTierQueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDelta': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMaxDeltaQueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionMode': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedHighSkillRestrictionModeQueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDelta': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMaxDeltaQueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionMode': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId4': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId410': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId420': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId440': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId470': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_RankedLowSkillRestrictionModeQueueId9': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_QueueRestriction_ServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Regalia': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Replays': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Replays_MinSupportedGameServerVersion': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Replays_ThirdPersonAccessibleGameQueues': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Rewards': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Rewards_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Sanitizer': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Sanitizer_Level1Unfilter': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Maximum_team_reward_level': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_points_per_reward_level': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_win_team_reward_level_1': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_win_team_reward_level_2': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_Minimum_win_team_reward_level_3': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_QualificationWarningEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SeasonReward_ServiceCallEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Sentry': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Sentry_SampleRate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ServiceStatusAPI': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ServiceStatusAPI_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_AdvancedGameDetailsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_AdvancedGameDetailsUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_MatchDetailsUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_MatchHistoryEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_MatchHistoryUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_ShareEndOfGameEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_ShareGameUrlTemplate': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ShareMatchHistory_ShareMatchHistory': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinRentals': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinRentals_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinsViewer': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SkinsViewer_VintageSkinSummonerIconConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_IsSocialLeaderboardEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_LeaguesPuuidPageSize': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_MinsTillCacheExpiry': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_SecsTillAvailabilityCacheExpiry': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SocialLeaderboard_UseSocialLeaderboardLeaguesEndpoint': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Spectator': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Spectator_SaveReconnectInfoEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_String': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_String_String': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_FriendsOfFriendsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_FriendsOfFriendsLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_HonoredPlayersLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_MaxNumReplacements': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_MaxNumSuggestedPlayers': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_OnlineFriendsLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_PreviousPremadesLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_SuggestedPlayers_VictoriousComradesLimit': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_ConfigRefreshIntervalSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_JWTMaxTimeoutSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_JWTMinTimeoutSeconds': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Summoner_SummonerProfileCacheEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBoost': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBoost_AllSkinEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBoost_RandomSkinEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_ActionTimeoutRecoveryEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_EnableChampionSelectPreferences': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_EstimatedWaitAdjustmentEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_FillPrimaryWaitFactor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_FillSecondaryWaitFactor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_LogAllLCDSMessages': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_MidPrimaryWaitFactor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SendAfkCheckMetricsEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_ServiceCallTimeoutMillis': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SkinPurchaseEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SupportPrimaryWaitFactor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_SupportSecondaryWaitFactor': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_TBRerollServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_TakeoverEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TeamBuilderDraft_UnlockLockInButtonTimeoutEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_TencentAntiAddiction_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Testing': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Testing_Rcarter': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ThirdPartyVerification': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_ThirdPartyVerification_CAHServiceEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Trophies': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Trophies_IsEnabledOnProfile': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Trophies_IsOtherSummonersProfileEnabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Voice': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_Voice_Enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_WardSkinConfig': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_WardSkinConfig_UseLoadouts': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-platform-config_v1_namespaces_WardSkinConfig_WardSkinSelection': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-player-behavior_v1_config': Record<string, unknown>
  'OnJsonApiEvent_lol-player-behavior_v2_reporter-feedback': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-player-behavior_v3_reform-cards': Record<string, unknown>
  'OnJsonApiEvent_lol-player-preferences_v1_player-preferences-ready': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-pre-end-of-game_v1_currentSequenceEvent': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-premade-voice_v1_availability': Record<string, unknown>
  'OnJsonApiEvent_lol-premade-voice_v1_capturedevices': Record<string, unknown>
  'OnJsonApiEvent_lol-premade-voice_v1_first-experience': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-premade-voice_v1_participant-records': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-premade-voice_v1_settings': Record<string, unknown>
  'OnJsonApiEvent_lol-progression_v1_groups': Record<string, unknown>
  'OnJsonApiEvent_lol-progression_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-publishing-content_v1_listeners': Record<string, unknown>
  'OnJsonApiEvent_lol-publishing-content_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-publishing-content_v1_settings': Record<string, unknown>
  'OnJsonApiEvent_lol-purchase-widget_v1_configuration': Record<string, unknown>
  'OnJsonApiEvent_lol-purchase-widget_v3_purchase-offer-order-statuses': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-ranked_v1_challenger-ladders-enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-ranked_v1_current-ranked-stats': LcuComponents['schemas']['LolRankedRankedStats']
  'OnJsonApiEvent_lol-ranked_v1_eos-rewards': Record<string, unknown>
  'OnJsonApiEvent_lol-ranked_v1_global-notifications': Record<string, unknown>
  'OnJsonApiEvent_lol-ranked_v1_notifications': Record<string, unknown>
  'OnJsonApiEvent_lol-ranked_v1_ranked-stats': Record<string, unknown>
  'OnJsonApiEvent_lol-ranked_v1_signed-ranked-stats': Record<string, unknown>
  'OnJsonApiEvent_lol-ranked_v1_splits-config': Record<string, unknown>
  'OnJsonApiEvent_lol-ranked_v1_top-rated-ladders-enabled': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-regalia_v2_config': Record<string, unknown>
  'OnJsonApiEvent_lol-regalia_v2_summoners': Record<string, unknown>
  'OnJsonApiEvent_lol-replays_v1_configuration': Record<string, unknown>
  'OnJsonApiEvent_lol-replays_v1_metadata': Record<string, unknown>
  'OnJsonApiEvent_lol-replays_v1_rofls': Record<string, unknown>
  'OnJsonApiEvent_lol-rewards_v1_grants': Record<string, unknown>
  'OnJsonApiEvent_lol-rewards_v1_groups': Record<string, unknown>
  'OnJsonApiEvent_lol-rso-auth_configuration_v3': Record<string, unknown>
  'OnJsonApiEvent_lol-rso-auth_v1_authorization': Record<string, unknown>
  'OnJsonApiEvent_lol-settings_v1_account': Record<string, unknown>
  'OnJsonApiEvent_lol-settings_v1_local': Record<string, unknown>
  'OnJsonApiEvent_lol-settings_v2_account': Record<string, unknown>
  'OnJsonApiEvent_lol-settings_v2_config': Record<string, unknown>
  'OnJsonApiEvent_lol-settings_v2_local': Record<string, unknown>
  'OnJsonApiEvent_lol-settings_v2_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-shutdown_v1_notification': Record<string, unknown>
  'OnJsonApiEvent_lol-spectator_v1_spectate': Record<string, unknown>
  'OnJsonApiEvent_lol-statstones_v2_player-summary-self': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-store_v1_getStoreUrl': Record<string, unknown>
  'OnJsonApiEvent_lol-store_v1_store-ready': Record<string, unknown>
  'OnJsonApiEvent_lol-suggested-players_v1_suggested-players': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-summoner_v1_current-alias-state': Record<string, unknown>
  'OnJsonApiEvent_lol-summoner_v1_current-summoner': Record<string, unknown>
  'OnJsonApiEvent_lol-summoner_v1_status': Record<string, unknown>
  'OnJsonApiEvent_lol-summoner_v1_summoner-requests-ready': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_lol-tastes_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-tft-pass_v1_enabled': Record<string, unknown>
  'OnJsonApiEvent_lol-tft-team-planner_v1_config': Record<string, unknown>
  'OnJsonApiEvent_lol-tft-team-planner_v1_team': Record<string, unknown>
  'OnJsonApiEvent_lol-tft-troves_v1_config': Record<string, unknown>
  'OnJsonApiEvent_lol-tft_v1_tft': Record<string, unknown>
  'OnJsonApiEvent_lol-tft_v2_tft': Record<string, unknown>
  'OnJsonApiEvent_lol-yourshop_v1_modal': Record<string, unknown>
  'OnJsonApiEvent_lol-yourshop_v1_ready': Record<string, unknown>
  'OnJsonApiEvent_lol-yourshop_v1_status': Record<string, unknown>
  'OnJsonApiEvent_memory_v1_fe-processes-ready': Record<string, unknown>
  'OnJsonApiEvent_patcher_v1_notifications': Record<string, unknown>
  'OnJsonApiEvent_patcher_v1_products': Record<string, unknown>
  'OnJsonApiEvent_patcher_v1_status': Record<string, unknown>
  'OnJsonApiEvent_player-notifications_v1_notifications': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_player-reporting_v1_reporter-feedback': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_plugin-manager_v1_external-plugins': Record<string, unknown>
  'OnJsonApiEvent_plugin-manager_v1_status': Record<string, unknown>
  'OnJsonApiEvent_process-control_v1_process': Record<string, unknown>
  'OnJsonApiEvent_product-metadata_v2_products': Record<string, unknown>
  'OnJsonApiEvent_product-session_v1_external-sessions': Record<string, unknown>
  'OnJsonApiEvent_riot-messaging-service_v1_message': Record<string, unknown>
  'OnJsonApiEvent_riot-messaging-service_v1_out-of-sync': Record<
    string,
    unknown
  >
  'OnJsonApiEvent_riot-messaging-service_v1_session': Record<string, unknown>
  'OnJsonApiEvent_riot-messaging-service_v1_state': Record<string, unknown>
  'OnJsonApiEvent_riotclient_affinity': Record<string, unknown>
  'OnJsonApiEvent_riotclient_app-port': Record<string, unknown>
  'OnJsonApiEvent_riotclient_get_region_locale': Record<string, unknown>
  'OnJsonApiEvent_riotclient_new-args': Record<string, unknown>
  'OnJsonApiEvent_riotclient_pre-shutdown_begin': Record<string, unknown>
  'OnJsonApiEvent_riotclient_region-locale': Record<string, unknown>
  'OnJsonApiEvent_riotclient_system-info_v1': Record<string, unknown>
  'OnJsonApiEvent_riotclient_ux-crash-count': Record<string, unknown>
  'OnJsonApiEvent_riotclient_ux-state_request': Record<string, unknown>
  'OnJsonApiEvent_riotclient_v1_crash-reporting': Record<string, unknown>
  'OnJsonApiEvent_riotclient_zoom-scale': Record<string, unknown>
  'OnJsonApiEvent_rso-auth_configuration_v3': Record<string, unknown>
  'OnJsonApiEvent_rso-auth_v1_auth-hints': Record<string, unknown>
  'OnJsonApiEvent_rso-auth_v1_session': Record<string, unknown>
  'OnJsonApiEvent_rso-auth_v2_authorizations': Record<string, unknown>
  'OnJsonApiEvent_sanitizer_v1_status': Record<string, unknown>
  'OnJsonApiEvent_scd_v1_cookies': Record<string, unknown>
  'OnJsonApiEvent_system_v1_builds': Record<string, unknown>
  'OnJsonApiEvent_voice-chat_v1_audio-properties': Record<string, unknown>
  'OnJsonApiEvent_voice-chat_v2_devices': Record<string, unknown>
  'OnJsonApiEvent_voice-chat_v2_state': Record<string, unknown>
  'OnJsonApiEvent_voice-chat_v3_sessions': Record<string, unknown>
  'OnJsonApiEvent_voice-chat_v3_settings': Record<string, unknown>
  /**
   * Fired when a message is received over the LCDS connection.
   */
  'OnLcdsEvent': Record<string, unknown>
  'OnLcdsEvent_com_riotgames_platform_broadcast_BroadcastNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_client_dynamic_configuration_ClientDynamicConfigurationNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_game_GameDTO': Record<string, unknown>
  'OnLcdsEvent_com_riotgames_platform_game_PlayerCredentialsDto': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_game_TeamSkinRentalDTO': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_game_message_GameNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_gameinvite_contract_InvitationRequest': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_gameinvite_contract_InvitePrivileges': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_gameinvite_contract_LobbyStatus': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_gameinvite_contract_RemovedFromLobbyNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_leaverbuster_event_messaging_LeaverBusterLowPriorityQueueAbandoned': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_loyalty_message_LoyaltyStateChangeNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_matchmaking_SearchingForMatchNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_messaging_ForcedClientShutdown': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_messaging_RentalUpdateNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_messaging_StoreFulfillmentNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_messaging_persistence_SimpleDialogMessage': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_systemstate_ClientSystemStatesNotification': Record<
    string,
    unknown
  >
  'OnLcdsEvent_com_riotgames_platform_trade_api_contract_TradeContractDTO': Record<
    string,
    unknown
  >
  /**
   * Fired when a entry of sufficient severity is logged.
   */
  'OnLog': Record<string, unknown>
  'OnRegionLocaleChanged': Record<string, unknown>
  /**
   * Fired when an async service proxy message is received.
   */
  'OnServiceProxyAsyncEvent': Record<string, unknown>
  'OnServiceProxyMethodEvent': Record<string, unknown>
  /**
   * Fired when a uuid-based service proxy message is received.
   */
  'OnServiceProxyUuidEvent': Record<string, unknown>
}

export type LcuEvent = keyof LcuEventLookup

export type LcuEventType = 'Create' | 'Update' | 'Delete'

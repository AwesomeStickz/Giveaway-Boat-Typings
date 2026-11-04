export enum APIErrorCodes {
    // Giveaways
    missingChannelId = 50000,
    missingDuration = 50001,
    missingPrize = 50002,
    missingWinnersCount = 50003,
    missingPermissionsInGiveawayChannel = 50004,

    giveawayChannelNotFound = 50100,
    giveawayNotFound = 50101,

    durationIsLess = 50200,
    durationIsMore = 50201,
    durationIsMoreThanAllowedInNonPremiumServer = 50202,

    winnersCountIsNotNumber = 50300,
    winnersCountIsLess = 50301,
    winnersCountIsMore = 50302,
    winnersCountIsMoreThanAllowedInNonPremiumServer = 50303,

    prizeIsLong = 50400,

    hostIsLong = 50500,
    hostIsNotInOneLine = 50501,

    requiredAccountAgeIsLess = 50600,
    requiredAccountAgeIsMore = 50601,

    requiredLevelIsNotNumber = 50700,
    requiredLevelIsLess = 50701,
    requiredLevelIsMore = 50702,

    requiredDailyMessagesIsNotNumber = 50800,
    requiredDailyMessagesIsLess = 50801,
    requiredDailyMessagesIsMore = 50802,

    requiredWeeklyMessagesIsNotNumber = 50900,
    requiredWeeklyMessagesIsLess = 50901,
    requiredWeeklyMessagesIsMore = 50902,

    requiredMonthlyMessagesIsNotNumber = 51000,
    requiredMonthlyMessagesIsLess = 51001,
    requiredMonthlyMessagesIsMore = 51002,

    requiredTotalMessagesIsNotNumber = 51100,
    requiredTotalMessagesIsLess = 51101,
    requiredTotalMessagesIsMore = 51102,

    requiredServerBoostsIsNotNumber = 51200,
    requiredServerBoostsIsLess = 51201,
    requiredServerBoostsIsMore = 51202,
    boosterBotIsNotInServer = 51203,

    requiredTimeInServerIsLess = 51300,
    requiredTimeInServerIsMore = 51301,

    requireServerTagIsInvalid = 51400,

    requiredRoleIsNotFound = 51500,
    requiredRolesIsMoreThanAllowedInNonPremiumServer = 51502,
    requiredRoleTypeIsInvalid = 51501,

    requirementBypassRoleIsNotFound = 51600,
    requirementBypassRolesIsMoreThanAllowedInNonPremiumServer = 51601,

    blacklistedRoleIsNotFound = 51700,
    blacklistedRolesIsMoreThanAllowedInNonPremiumServer = 51702,

    entriesRoleIsNotFound = 51800,
    entriesIsNotNumber = 51801,
    entriesIsLess = 51802,
    entriesIsMore = 51803,
    entriesIsMoreThanAllowedInNonPremiumServer = 51804,

    invalidImageLink = 51900,
    invalidThumbnailLink = 51901,

    invalidColorCode = 52000,
    invalidEndColorCode = 52001,

    entryConfirmationMessageIsLong = 52100,
    entryConfirmationMessageIsNotInOneLine = 52101,
    entryConfirmationMessageIsLongerThanAllowedInNonPremiumServer = 52102,

    entryDenyMessageIsLong = 52200,
    entryDenyMessageIsNotInOneLine = 52201,
    entryDenyMessageIsLongerThanAllowedInNonPremiumServer = 52202,

    entryRemoveMessageIsLong = 52300,
    entryRemoveMessageIsNotInOneLine = 52301,
    entryRemoveMessageIsLongerThanAllowedInNonPremiumServer = 52302,

    giveawayCreateMessageIsLong = 52400,

    giveawayWinnersDMMessageIsLong = 52500,
    giveawayWinnersDMMessageIsNotInOneLine = 52501,
    giveawayWinnersDMMessageIsLongerThanAllowedInNonPremiumServer = 52502,

    stackEntriesIsInvalid = 52600,
    persistEntriesIsInvalid = 52601,

    giveawayWinnersRoleIsNotFound = 52700,
    giveawayWinnersRoleTypeIsNotAllowed = 52701,
    giveawayWinnersRoleIsAboveBotsHighestRole = 52702,
    giveawayWinnersRoleIsAboveUsersHighestRole = 52703,

    giveawayWinnersRoleRemoveDurationIsLess = 52800,
    giveawayWinnersRoleRemoveDurationIsMore = 52801,
    giveawayWinnersRoleRemoveDurationIsMoreThanAllowedInNonPremiumServer = 52802,

    giveawayShowEntryCaptchaIsInvalid = 52900,

    giveawayDropIsInvalid = 53000,

    createGiveawayWinnersThreadIsInvalid = 53100,
    giveawayWinnersThreadTypeIsInvalid = 53101,

    giveawayWinnersThreadCloseDurationIsLess = 53200,
    giveawayWinnersThreadCloseDurationIsMore = 53201,

    giveawayWinnersThreadMessageIsLong = 53300,

    claimDurationIsLess = 53400,
    claimDurationIsMore = 53401,
    claimDurationCannotBeUsedWithDrop = 53402,

    claimRerollLimitIsInvalid = 53500,

    requiredVotesIsNotNumber = 53700,
    requiredVotesIsLess = 53701,
    requiredVotesIsMore = 53702,
    requiredVotesPeriodIsLess = 53703,
    requiredVotesPeriodIsMore = 53704,
    voteTrackerIsNotSetUp = 53705,

    giveawayEntryFormNotFound = 53800,
    giveawayWinnerFormNotFound = 53801,
    invalidGiveawayEntryForm = 53802,
    invalidGiveawayWinnerForm = 53803,

    requiredVoiceTimeIsNotNumber = 53900,
    requiredVoiceTimeIsLess = 53901,
    requiredVoiceTimeIsMore = 53902,
    invalidRequiredVoiceTimePeriod = 53903,

    // Scheduling
    scheduledGiveawayNotFound = 60000,

    missingStartDuration = 60001,
    startDurationIsLess = 60002,
    startDurationIsMore = 60003,

    repeatDurationIsLess = 60100,
    repeatDurationIsMore = 60101,

    // Templates
    templateNotFound = 70000,
    templateIsLocked = 70001,

    invalidTemplateName = 70100,
    templateNameAlreadyExists = 70101,

    // Premium
    lacksPremiumForAPIAccess = 80000,
    reachedMaxRepeatedGiveawaysLimit = 80001,
    reachedMaxTemplatesLimitWithoutPremium = 80002,
    reachedMaxTemplatesLimit = 80003,
    lacksPremiumForRepeatDuration = 80004,
    lacksPremiumForRepeatTimes = 80005,
    lacksPremiumForGiveawayWinnersThreadCloseDuration = 80006,
    lacksPremiumForCustomGiveawayMessage = 80007,
    lacksPremiumForRequiredAccountAge = 80008,
    lacksPremiumForRequiredTimeInServer = 80009,
    lacksPremiumForRequireServerTag = 80010,
    lacksPremiumForClaimDuration = 80011,
    lacksPremiumForRequiredVotes = 80012,
    lacksPremiumForGiveawayEntryForm = 80013,
    lacksPremiumForGiveawayWinnerForm = 80014,

    // Leveling Premium
    lacksPremiumForCustomLevelUpMessage = 80100,
    lacksPremiumForMoreLevelRolesPerLevel = 80101,
    lacksPremiumForCustomXP = 80102,
    lacksPremiumForLevelingCooldown = 80103,
    lacksPremiumForXPMultipliers = 80104,
    lacksPremiumForMoreLevelingBlacklistedRoles = 80105,
    lacksPremiumForLevelingMinimumCharacters = 80106,
    lacksPremiumForLevelingMinimumWords = 80107,
    lacksPremiumForLevelRoleSync = 80108,

    // Message Counter Premium
    lacksPremiumForMoreMessageRoles = 80200,
    lacksPremiumForMoreMessageRolesPerMessageCount = 80201,
    lacksPremiumForMessageCounterCooldown = 80202,
    lacksPremiumForMoreMessageCounterBlacklistedRoles = 80203,
    lacksPremiumForMessageCounterMinimumCharacters = 80204,
    lacksPremiumForMessageCounterMinimumWords = 80205,
    lacksPremiumForMessageRoleSync = 80206,

    // Vote Tracker Premium
    lacksPremiumForCustomVoteMessage = 80400,
    lacksPremiumForMoreVoterRoles = 80401,
    lacksPremiumForVoterRoleDuration = 80402,
    lacksPremiumForVoteRoles = 80403,
    lacksPremiumForVoteRoleSync = 80404,
    lacksPremiumForVoteStreakGracePeriod = 80405,
    lacksPremiumForVoteStreakRoles = 80406,
    lacksPremiumForVoteReminders = 80407,
    lacksPremiumForVoteStreakRoleSync = 80408,

    // Forms Premium
    lacksPremiumForMoreForms = 80600,
    lacksPremiumForMoreFormQuestions = 80601,
    lacksPremiumForFormResponseValidation = 80602,
    lacksPremiumForMoreFormRequiredRoles = 80603,
    lacksPremiumForMoreFormBlockedRoles = 80604,
    lacksPremiumForFormRequiredAccountAge = 80605,
    lacksPremiumForFormRequiredTimeInServer = 80606,
    lacksPremiumForFormServerTagRequirement = 80607,
    lacksPremiumForFormRequiredLevel = 80608,
    lacksPremiumForFormRequiredMessages = 80609,
    lacksPremiumForFormMultipleResponses = 80610,
    lacksPremiumForFormResponseCooldown = 80612,
    lacksPremiumForFormSubmitRoles = 80613,
    lacksPremiumForMoreFormAcceptRoles = 80614,
    lacksPremiumForMoreFormAcceptRemoveRoles = 80615,
    lacksPremiumForMoreFormDenyRoles = 80616,
    lacksPremiumForMoreFormDenyRemoveRoles = 80617,
    lacksPremiumForFormPingRoles = 80618,
    lacksPremiumForFormReviewerRoles = 80619,
    lacksPremiumForAnonymousForms = 80620,
    lacksPremiumForCustomFormConfirmationMessage = 80621,
    lacksPremiumForCustomFormAcceptMessage = 80622,
    lacksPremiumForCustomFormDenyMessage = 80623,
    lacksPremiumForMoreFormPanels = 80624,
    lacksPremiumForCustomFormPanelMessage = 80625,
    lacksPremiumForMoreFormTemplates = 80626,
    lacksPremiumForFormResponseHistory = 80627,
    lacksPremiumForFormDenyResponsesOnLeave = 80628,
    lacksPremiumForFormOpenTime = 80629,
    lacksPremiumForFormCloseTime = 80630,
    lacksPremiumForFormExportColumns = 80631,
    lacksPremiumForFormExportTimezone = 80632,

    // Voice Tracker Premium
    lacksPremiumForMoreVoiceRoles = 80700,
    lacksPremiumForMoreVoiceRolesPerVoiceTime = 80701,
    lacksPremiumForMoreVoiceTrackerBlacklistedRoles = 80702,
    lacksPremiumForVoiceRoleSync = 80703,
    lacksPremiumForCountingMutedVoiceMembers = 80704,
    lacksPremiumForCountingDeafenedVoiceMembers = 80705,
    lacksPremiumForVoiceTrackerMinimumMembers = 80706,

    // Guild Settings
    invalidNumberOfGiveawayCreatorRoles = 90000,
    giveawayCreatorRoleNotFound = 90001,
    currentGiveawayCreatorRoleIsAboveUsersHighestRole = 90002,
    giveawayCreatorRoleIsAboveUsersHighestRole = 90003,

    invalidNumberOfGiveawayManagerRoles = 90100,
    giveawayManagerRoleNotFound = 90101,
    currentGiveawayManagerRoleIsAboveUsersHighestRole = 90102,
    giveawayManagerRoleIsAboveUsersHighestRole = 90103,

    invalidLanguage = 90200,

    loggerChannelNotFound = 90300,

    invalidPrefix = 90400,

    publicGiveawaysPreferredChannelNotFound = 90500,
    publicGiveawaysGuildMaxInvitesReached = 90501,

    // Premium Settings
    premiumIsNotActive = 100000,
    premiumIsAlreadyInDesiredState = 100001,
    customBotIsAlreadyInDesiredState = 100002,
    userLacksPremiumToActivateInServer = 100003,
    userLacksFreePremiumSlotToActivateInServer = 100004,
    guildLacksPremiumToActivateCustomBot = 100005,

    customBotIsNotInServer = 100100,

    invalidCustomBotAvatar = 100200,
    customBotAvatarIsTooLarge = 100201,
    customBotAvatarChangeIsRatelimited = 100202,
    botAvatarChangeIsRatelimited = 100203,

    invalidCustomBotBanner = 100300,
    customBotBannerIsTooLarge = 100301,
    customBotBannerChangeIsRatelimited = 100302,
    botBannerChangeIsRatelimited = 100303,

    invalidCustomBotUsername = 100400,
    customBotUsernameAlreadyExists = 100401,
    customBotUsernameChangeIsRatelimited = 100402,
    botLacksChangeNicknamePermission = 100403,

    invalidCustomBotPresenceStatus = 100500,
    invalidCustomBotActivityName = 100501,
    invalidCustomBotActivityType = 100502,
    invalidCustomBotActivityUrl = 100503,

    botProfileChangeIsRatelimited = 100600,

    invalidGiveawayEmoji = 100700,

    // Premium Subscription Errors
    subscriptionIsBeingCombined = 110000,
    subscriptionIsScheduledToCancel = 110001,
    subscriptionIsNotScheduledToCancel = 110002,
    subscriptionCannotCoverMorePremiumServers = 110003,
    subscriptionHasScheduledTierChange = 110004,

    // Leveling Settings
    levelingIsNotEnabled = 120000,

    levelUpMessageChannelNotFound = 120100,

    invalidNumberOfLevelRoles = 120200,
    levelRoleNotFound = 120201,
    levelRoleIsAboveBotsHighestRole = 120202,
    levelRoleIsAboveUsersHighestRole = 120203,
    invalidLevelRoleLevel = 120204,
    duplicateLevelRole = 120205,
    duplicateLevelRoleLevel = 120206,
    tooManyLevelRolesPerLevel = 120207,
    levelRoleSyncIsOnCooldown = 120208,
    levelRoleSyncIsAlreadyRunning = 120209,

    invalidXPAmount = 120300,
    minXPIsMoreThanMaxXP = 120301,

    invalidRoleXPMultiplier = 120400,
    xpMultiplierRoleNotFound = 120401,
    tooManyRoleXPMultipliers = 120402,
    invalidChannelXPMultiplier = 120403,
    xpMultiplierChannelNotFound = 120404,
    tooManyChannelXPMultipliers = 120405,
    invalidServerXPMultiplier = 120406,

    invalidLevelingCooldown = 120500,

    invalidNumberOfLevelingBlacklistedChannelIds = 120600,
    levelingBlacklistedChannelNotFound = 120601,
    levelingBlacklistedRoleNotFound = 120602,

    invalidLevelingMinimumCharacters = 120700,
    invalidLevelingMinimumWords = 120701,

    // Message Counter Settings
    messageCounterIsNotEnabled = 130000,

    invalidNumberOfMessageRoles = 130100,
    messageRoleNotFound = 130101,
    messageRoleIsAboveBotsHighestRole = 130102,
    messageRoleIsAboveUsersHighestRole = 130103,
    invalidMessageRoleMessageCount = 130104,
    duplicateMessageRole = 130105,
    duplicateMessageRoleMessageCount = 130106,
    tooManyMessageRolesPerMessageCount = 130107,
    tooManyMessageRoleMessageCounts = 130108,
    messageRoleSyncIsOnCooldown = 130109,
    messageRoleSyncIsAlreadyRunning = 130110,

    invalidMessageCounterCooldown = 130200,

    invalidNumberOfMessageCounterBlacklistedChannelIds = 130300,
    messageCounterBlacklistedChannelNotFound = 130301,
    messageCounterBlacklistedRoleNotFound = 130302,

    invalidMessageCounterMinimumCharacters = 130400,
    invalidMessageCounterMinimumWords = 130401,

    // Vote Tracker Settings
    invalidVoteTrackerWebhookSecret = 150000,
    voteTrackerIntegrationIsConnected = 150001,

    invalidVoteMessage = 150100,
    voteMessageChannelNotFound = 150101,

    invalidNumberOfVoterRoles = 150200,
    voterRoleNotFound = 150201,
    voterRoleIsAboveBotsHighestRole = 150202,
    voterRoleIsAboveUsersHighestRole = 150203,
    invalidVoterRoleDuration = 150204,

    invalidNumberOfVoteRoles = 150300,
    voteRoleNotFound = 150301,
    voteRoleIsAboveBotsHighestRole = 150302,
    voteRoleIsAboveUsersHighestRole = 150303,
    invalidVoteRoleVoteCount = 150304,
    duplicateVoteRole = 150305,
    duplicateVoteRoleVoteCount = 150306,
    tooManyVoteRolesPerVoteCount = 150307,
    tooManyVoteRoleVoteCounts = 150308,
    voteRoleSyncIsOnCooldown = 150309,
    voteRoleSyncIsAlreadyRunning = 150310,

    invalidVoteStreakGracePeriod = 150400,

    invalidNumberOfVoteStreakRoles = 150500,
    voteStreakRoleNotFound = 150501,
    voteStreakRoleIsAboveBotsHighestRole = 150502,
    voteStreakRoleIsAboveUsersHighestRole = 150503,
    invalidVoteStreakRoleStreak = 150504,
    duplicateVoteStreakRole = 150505,
    duplicateVoteStreakRoleStreak = 150506,
    tooManyVoteStreakRolesPerStreak = 150507,
    tooManyVoteStreakRoleStreaks = 150508,
    voteStreakRoleSyncIsOnCooldown = 150509,
    voteStreakRoleSyncIsAlreadyRunning = 150510,

    // Forms
    invalidFormName = 170000,
    invalidFormDescription = 170001,
    formNotFound = 170002,

    invalidNumberOfFormQuestions = 170100,
    invalidFormQuestion = 170101,
    duplicateFormQuestionId = 170102,
    invalidFormResponseValidation = 170103,

    formReviewChannelNotFound = 170200,

    formRequiredRoleNotFound = 170300,
    formBlockedRoleNotFound = 170301,
    invalidFormRequiredAccountAge = 170302,
    invalidFormRequiredTimeInServer = 170303,
    invalidFormRequiredLevel = 170304,
    invalidFormRequiredMessages = 170305,

    invalidNumberOfFormRoles = 170400,
    formRoleNotFound = 170401,
    formRoleIsAboveBotsHighestRole = 170402,
    formRoleIsAboveUsersHighestRole = 170403,

    invalidFormResponseCooldown = 170500,

    invalidFormMessage = 170600,

    invalidNumberOfFormPanelForms = 170700,
    formPanelChannelNotFound = 170701,
    invalidFormPanelTitle = 170702,
    invalidFormPanelDescription = 170703,
    invalidFormPanelMessage = 170704,
    formPanelNotFound = 170705,
    missingPermissionsInFormPanelChannel = 170706,

    invalidFormTemplateName = 170800,
    duplicateFormTemplateName = 170801,
    tooManyFormTemplates = 170802,
    formTemplateNotFound = 170803,

    formIsNotAcceptingResponses = 170900,
    formRequirementsNotMet = 170901,
    formResponseIsOnCooldown = 170902,
    formAlreadyResponded = 170903,
    invalidFormAnswers = 170904,
    notAMemberOfFormServer = 170905,
    formResponseNotFound = 170906,
    formResponseIsAlreadyReviewed = 170907,
    invalidFormReviewReason = 170908,
    formDoesntReviewResponses = 170909,
    formResponseIsNotLatest = 170910,
    formCantBeAnsweredOnWebsite = 170911,

    invalidFormOpenTime = 171000,
    invalidFormCloseTime = 171001,

    invalidFormExportTimezone = 171100,
    invalidFormExportColumns = 171101,
    formExportIsOnCooldown = 171102,

    // Voice Tracker Settings
    voiceTrackerIsNotEnabled = 180000,

    invalidNumberOfVoiceRoles = 180100,
    voiceRoleNotFound = 180101,
    voiceRoleIsAboveBotsHighestRole = 180102,
    voiceRoleIsAboveUsersHighestRole = 180103,
    invalidVoiceRoleVoiceTime = 180104,
    duplicateVoiceRole = 180105,
    duplicateVoiceRoleVoiceTime = 180106,
    tooManyVoiceRolesPerVoiceTime = 180107,
    tooManyVoiceRoleVoiceTimes = 180108,
    voiceRoleSyncIsOnCooldown = 180109,
    voiceRoleSyncIsAlreadyRunning = 180110,

    invalidNumberOfVoiceTrackerBlacklistedChannelIds = 180200,
    voiceTrackerBlacklistedChannelNotFound = 180201,
    voiceTrackerBlacklistedRoleNotFound = 180202,

    invalidVoiceTrackerMinimumMembers = 180300,

    // Misc
    youLackPermissionToPerformThisAction = 900000,
    invalidRequestUrl = 900001,
    invalidRequestParams = 900002,
    invalidRequestPayload = 900003,

    unknownError = 999999,
}

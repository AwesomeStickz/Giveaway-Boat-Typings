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

    // Misc
    youLackPermissionToPerformThisAction = 900000,
    invalidRequestUrl = 900001,
    invalidRequestParams = 900002,
    invalidRequestPayload = 900003,

    unknownError = 999999,
}

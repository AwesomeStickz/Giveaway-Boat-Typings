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
    lacksPremiumForRepeatDuration = 80000,
    reachedMaxRepeatedGiveawaysLimit = 80001,
    reachedMaxTemplatesLimitWithoutPremium = 80002,
    reachedMaxTemplatesLimit = 80003,
    lacksPremiumForRepeatTimes = 80004,
    lacksPremiumForGiveawayWinnersThreadCloseDuration = 80005,
    lacksPremiumForCustomGiveawayMessage = 80006,
    lacksPremiumForRequiredAccountAge = 80007,
    lacksPremiumForRequiredTimeInServer = 80008,
    lacksPremiumForRequireServerTag = 80009,

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

    invalidNumberOfLevelingBlacklistedChannelIds = 90300,
    levelingBlacklistedChannelNotFound = 90301,

    invalidNumberOfLevelRoles = 90400,
    levelRoleNotFound = 90401,
    levelRoleIsAboveBotsHighestRole = 90402,
    levelRoleIsAboveUsersHighestRole = 90403,
    duplicateLevelRoleLevel = 90404,

    levelingMessageChannelNotFound = 90500,

    loggerChannelNotFound = 90600,

    invalidNumberOfMessageCounterChannelIds = 90700,
    messageCounterChannelNotFound = 90701,

    invalidPrefix = 90800,

    publicGiveawaysPreferredChannelNotFound = 90900,
    publicGiveawaysGuildMaxInvitesReached = 90901,

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

    // Misc
    youLackPermissionToPerformThisAction = 900000,
    invalidRequestUrl = 900001,
    invalidRequestParams = 900002,
    invalidRequestPayload = 900003,

    unknownError = 999999,
}

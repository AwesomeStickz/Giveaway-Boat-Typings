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

    requiredLevelIsNotNumber = 50600,
    requiredLevelIsLess = 50601,
    requiredLevelIsMore = 50602,

    requiredDailyMessagesIsNotNumber = 50700,
    requiredDailyMessagesIsLess = 50701,
    requiredDailyMessagesIsMore = 50702,

    requiredWeeklyMessagesIsNotNumber = 50800,
    requiredWeeklyMessagesIsLess = 50801,
    requiredWeeklyMessagesIsMore = 50802,

    requiredMonthlyMessagesIsNotNumber = 50900,
    requiredMonthlyMessagesIsLess = 50901,
    requiredMonthlyMessagesIsMore = 50902,

    requiredTotalMessagesIsNotNumber = 51000,
    requiredTotalMessagesIsLess = 51001,
    requiredTotalMessagesIsMore = 51002,

    requiredRoleIsNotFound = 51100,
    requiredRolesIsMoreThanAllowedInNonPremiumServer = 51102,
    requiredRoleTypeIsInvalid = 51101,

    requirementBypassRoleIsNotFound = 51200,
    requirementBypassRolesIsMoreThanAllowedInNonPremiumServer = 51201,

    blacklistedRoleIsNotFound = 51300,
    blacklistedRolesIsMoreThanAllowedInNonPremiumServer = 51302,

    entriesRoleIsNotFound = 51400,
    entriesIsNotNumber = 51401,
    entriesIsLess = 51402,
    entriesIsMore = 51403,
    entriesIsMoreThanAllowedInNonPremiumServer = 51404,

    invalidImageLink = 51500,
    invalidThumbnailLink = 51501,

    invalidColorCode = 51600,
    invalidEndColorCode = 51601,

    entryConfirmationMessageIsLong = 51700,
    entryConfirmationMessageIsNotInOneLine = 51701,
    entryConfirmationMessageIsLongerThanAllowedInNonPremiumServer = 51702,

    entryDenyMessageIsLong = 51800,
    entryDenyMessageIsNotInOneLine = 51801,
    entryDenyMessageIsLongerThanAllowedInNonPremiumServer = 51802,

    entryRemoveMessageIsLong = 51900,
    entryRemoveMessageIsNotInOneLine = 51901,
    entryRemoveMessageIsLongerThanAllowedInNonPremiumServer = 51902,

    giveawayCreateMessageIsLong = 52000,

    giveawayWinnersDMMessageIsLong = 52100,
    giveawayWinnersDMMessageIsNotInOneLine = 52101,
    giveawayWinnersDMMessageIsLongerThanAllowedInNonPremiumServer = 52102,

    stackEntriesIsInvalid = 52200,
    persistEntriesIsInvalid = 52201,
    ignoreDefaultValuesIsInvalid = 52202,

    giveawayWinnersRoleIsNotFound = 52300,
    giveawayWinnersRoleTypeIsNotAllowed = 52301,
    giveawayWinnersRoleIsAboveBotsHighestRole = 52302,
    giveawayWinnersRoleIsAboveUsersHighestRole = 52303,

    giveawayWinnersRoleRemoveDurationIsLess = 52400,
    giveawayWinnersRoleRemoveDurationIsMore = 52401,
    giveawayWinnersRoleRemoveDurationIsMoreThanAllowedInNonPremiumServer = 52402,

    giveawayShowEntryCaptchaIsInvalid = 52500,

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

    // Misc
    lacksPermissionToPerformThisAction = 90000,

    unknownError = 99999,
}

export enum APIErrorCodes {
    // Giveaways
    missingChannelId = 5000,
    missingDuration = 5001,
    missingPrize = 5002,
    missingWinnersCount = 5003,
    missingPermissionsInGiveawayChannel = 5004,

    giveawayChannelNotFound = 5005,
    giveawayNotFound = 5006,

    durationIsLess = 5007,
    durationIsMore = 5008,
    durationIsMoreThanAllowedInNonPremiumServer = 5009,

    winnersCountIsNotNumber = 5010,
    winnersCountIsLess = 5011,
    winnersCountIsMore = 5012,
    winnersCountIsMoreThanAllowedInNonPremiumServer = 5013,

    prizeIsLong = 5014,

    hostIsLong = 5015,
    hostIsNotInOneLine = 5016,

    requiredLevelIsNotNumber = 5017,
    requiredLevelIsLess = 5018,
    requiredLevelIsMore = 5019,

    requiredDailyMessagesIsNotNumber = 5020,
    requiredDailyMessagesIsLess = 5021,
    requiredDailyMessagesIsMore = 5022,

    requiredWeeklyMessagesIsNotNumber = 5023,
    requiredWeeklyMessagesIsLess = 5024,
    requiredWeeklyMessagesIsMore = 5025,

    requiredMonthlyMessagesIsNotNumber = 5026,
    requiredMonthlyMessagesIsLess = 5027,
    requiredMonthlyMessagesIsMore = 5028,

    requiredTotalMessagesIsNotNumber = 5029,
    requiredTotalMessagesIsLess = 5030,
    requiredTotalMessagesIsMore = 5031,

    requiredRoleIsNotFound = 5032,
    requiredRolesIsMoreThanAllowedInNonPremiumServer = 5033,
    requiredRoleTypeIsInvalid = 5034,

    requirementBypassRoleNotFound = 5035,

    blacklistedRoleIsNotFound = 5036,
    blacklistedRolesIsMoreThanAllowedInNonPremiumServer = 5037,

    entriesRoleIsNotFound = 5038,
    entriesIsNotNumber = 5039,
    entriesIsLess = 5040,
    entriesIsMore = 5041,
    entriesIsMoreThanAllowedInNonPremiumServer = 5042,

    invalidImageLink = 5043,
    invalidThumbnailLink = 5044,

    invalidColorCode = 5045,
    invalidEndColorCode = 5046,

    entryConfirmationMessageIsLong = 5047,
    entryConfirmationMessageIsNotInOneLine = 5048,
    entryConfirmationMessageIsLongerThanAllowedInNonPremiumServer = 5049,

    entryDenyMessageIsLong = 5050,
    entryDenyMessageIsNotInOneLine = 5051,
    entryDenyMessageIsLongerThanAllowedInNonPremiumServer = 5052,

    entryRemoveMessageIsLong = 5053,
    entryRemoveMessageIsNotInOneLine = 5054,
    entryRemoveMessageIsLongerThanAllowedInNonPremiumServer = 5055,

    giveawayCreateMessageIsLong = 5056,

    giveawayWinnersDMMessageIsLong = 5057,
    giveawayWinnersDMMessageIsNotInOneLine = 5058,
    giveawayWinnersDMMessageIsLongerThanAllowedInNonPremiumServer = 5059,

    stackEntriesIsInvalid = 5060,
    persistEntriesIsInvalid = 5061,
    ignoreDefaultValuesIsInvalid = 5062,

    giveawayWinnersRoleIsNotFound = 5063,
    giveawayWinnersRoleTypeIsNotAllowed = 5064,
    giveawayWinnersRoleIsAboveBotsHighestRole = 5065,
    giveawayWinnersRoleIsAboveUsersHighestRole = 5066,

    giveawayWinnersRoleRemoveDurationIsLess = 5067,
    giveawayWinnersRoleRemoveDurationIsMore = 5068,
    giveawayWinnersRoleRemoveDurationIsMoreThanAllowedInNonPremiumServer = 5069,

    // Scheduling
    scheduledGiveawayNotFound = 5070,

    missingStartDuration = 5071,
    startDurationIsLess = 5072,
    startDurationIsMore = 5073,

    repeatDurationIsLess = 5074,
    repeatDurationIsMore = 5075,

    // Templates
    templateNotFound = 5076,
    templateIsLocked = 5077,

    invalidTemplateName = 5078,
    templateNameAlreadyExists = 5079,

    // Premium
    lacksPremiumForRepeatDuration = 5080,
    reachedMaxRepeatedGiveawaysLimit = 5081,
    reachedMaxTemplatesLimitWithoutPremium = 5082,
    reachedMaxTemplatesLimit = 5083,
    lacksPremiumForRepeatTimes = 5084,

    unknownError = 9999,
}

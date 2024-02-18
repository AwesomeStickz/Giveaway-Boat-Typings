export interface GiveawayData {
    creatorID: string;
    channelID: string;
    guildID: string;
    duration: number;
    endTime: number;
    numberOfWinners: number;
    item: string;
    hostID: string | null;
    requiredLevel: number | null;
    requiredDailyMessages: number | null;
    requiredWeeklyMessages: number | null;
    requiredMonthlyMessages: number | null;
    requiredTotalMessages: number | null;
    requiredRoleIDs: string[] | null;
    requiredRoleType: 'all' | 'any' | null;
    requirementBypassRoleIDs: string | null;
    blacklistedRoleIDs: string[] | null;
    entries: { roleID: string; entries: number }[] | null;
    imageLink: string | null;
    thumbnailLink: string | null;
    color: string | null;
    endColor: string | null;
    entryConfirmationMessage: string | null;
    entryDenyMessage: string | null;
    entryRemoveMessage: string | null;
    giveawayCreateMessage: string | null;
    giveawayWinnersDMMessage: string | null;
    stackEntries: boolean | null;
    persistEntries: boolean | null;
    ignoreDefaultValues: boolean | null;
    giveawayWinnersRoleID: string | null;
    giveawayWinnersRoleRemoveDuration: number | null;
    repeatDuration: number | null;
    repeatTimes: number | null;
    showGiveawayEntryCaptcha: boolean | null;
    isDrop: boolean | null;
}

export interface GiveawayEditData extends GiveawayData {
    messageID: string;
    editorID: string;
    removeEntries: boolean;
}

export interface FullGiveawayData extends GiveawayData {
    messageID: string;
    reactedUsers: string[];
    giveawayReactionEmojiID: string | null;
    giveawayReactionEmojiName: string | null;
    isGiveawayReactionEmojiAnimated: boolean | null;
    botID: string;
    useButtons: boolean | null;
    previousWinners: string[] | null;
}

export interface ScheduledGiveawayData extends GiveawayData {
    giveawayID: number;
    startDuration: number;
    startTime: number;
}

export interface ScheduledGiveawayEditData extends ScheduledGiveawayData {
    editorID: string;
}

export interface TemplateData extends Omit<GiveawayData, 'channelID' | 'duration' | 'endTime' | 'numberOfWinners' | 'item'> {
    id: string;
    templateName: string;
    channelID: string | null;
    duration: number | null;
    endTime: number | null;
    numberOfWinners: number | null;
    item: string | null;
    locked?: boolean | null;
}

export interface TemplateEditData extends Omit<TemplateData, 'id'> {
    id?: number;
    editorID: string;
}

export interface CustomBotData {
    avatarURL: string;
    username: string;
    activity: {
        status?: 'online' | 'idle' | 'dnd' | 'offline';
        game: {
            name?: string;
            type?: 0 | 1 | 2 | 3 | 4;
            url?: string;
        };
    };
}

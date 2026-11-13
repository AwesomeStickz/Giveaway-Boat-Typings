import type { FormReference, FormSettings } from './formTypings.js';
import type { VoiceTimePeriod } from './voiceTrackerTypings.js';

export interface GiveawayData {
    creatorID: string;
    channelID: string;
    guildID: string;
    duration: number;
    endTime: number;
    numberOfWinners: number;
    minParticipants: number | null;
    maxParticipants: number | null;
    item: string;
    hostID: string | null;
    requiredAccountAge: number | null;
    requiredLevel: number | null;
    requiredDailyMessages: number | null;
    requiredWeeklyMessages: number | null;
    requiredMonthlyMessages: number | null;
    requiredTotalMessages: number | null;
    requiredRoleIDs: string[] | null;
    requiredRoleType: 'all' | 'any' | null;
    requiredServerBoosts: number | null;
    requiredTimeInServer: number | null;
    requireServerTag: boolean | null;
    requiredVoiceTime: number | null;
    requiredVoiceTimePeriod: VoiceTimePeriod | null;
    requiredVotes: number | null;
    requiredVotesPeriod: number | null;
    requirementBypassRoleIDs: string[] | null;
    blacklistedRoleIDs: string[] | null;
    entries: { roleID: string; entries: number }[] | null;
    imageLink: string | null;
    thumbnailLink: string | null;
    color: string | null;
    endColor: string | null;
    emoji: string | null;
    /** The code members must type to enter, never shown to them */
    entryCode: string | null;
    entryConfirmationMessage: string | null;
    entryDenyMessage: string | null;
    entryRemoveMessage: string | null;
    giveawayCreateMessage: string | null;
    giveawayWinnersDMMessage: string | null;
    stackEntries: boolean | null;
    persistEntries: boolean | null;
    giveawayWinnerRoleIds: string[] | null;
    giveawayWinnerRolesRemoveDuration: number | null;
    repeatDuration: number | null;
    repeatTimes: number | null;
    showGiveawayEntryCaptcha: boolean | null;
    isDrop: boolean | null;
    createGiveawayWinnersThread: boolean | null;
    isGiveawayWinnersThreadTypePublic: boolean | null;
    giveawayWinnersThreadCloseDuration: number | null;
    giveawayWinnersThreadMessage: string | null;
    claimDuration: number | null;
    claimRerollLimit: number | null;
    entryFormId: string | null;
    winnerFormId: string | null;
    /** The form template or form to make the entry form from, or settings edited just for this giveaway */
    entryForm: FormReference | FormSettings | null;
    /** The form template or form to make the winner form from when the giveaway ends, or settings edited just for this giveaway */
    winnerForm: FormReference | FormSettings | null;
    customDiscordMessageObjects: {
        giveawayMessage: DiscordMessageData | null;
    } | null;
}

export type DiscordMessageData = {
    content?: string;
    embeds?: {
        title?: string;
        description?: string;
        timestamp?: string;
        color?: number;
        footer?: { text: string; icon_url?: string };
        image?: { url: string };
        thumbnail?: { url: string };
        author?: { name: string; url?: string; icon_url?: string };
        fields?: { name: string; value: string; inline?: boolean }[];
        url?: string;
    }[];
};

export interface GiveawayEditData extends GiveawayData {
    messageID: string;
    editorID: string;
    removeEntries: boolean;
}

export interface FullGiveawayData extends GiveawayData {
    messageID: string;
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
    id: number;
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

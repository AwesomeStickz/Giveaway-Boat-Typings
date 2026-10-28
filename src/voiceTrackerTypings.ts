/** The calendar period a voice time requirement counts over: since 00:00 UTC, since Sunday or since the 1st. Null in the data counts all time */
export type VoiceTimePeriod = 'daily' | 'weekly' | 'monthly';

/** Which members in voice have their voice time counted. Changing these from the defaults is premium */
export type VoiceTrackerEligibility = {
    countMutedMembers: boolean;
    countDeafenedMembers: boolean;
    minimumMembers: number;
};

export const defaultVoiceTrackerEligibility: VoiceTrackerEligibility = {
    countMutedMembers: false,
    countDeafenedMembers: false,
    minimumMembers: 2,
};

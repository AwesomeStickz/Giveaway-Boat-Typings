import type { DiscordMessageData } from './giveawayTypings.js';

export const defaultVoteMessageObject: DiscordMessageData = {
    embeds: [
        {
            author: {
                icon_url: '{user avatar}',
                name: '{user global name}',
            },
            title: 'Thanks for voting! 💖',
            description: [
                // Dummy comment to prevent prettier from making this into a single line
                '{user} just voted for **{server name}** on [top.gg]({vote link})!',
                '',
                'They now have **{votes | count "vote"}**{{if streak > 1 then " and a **{streak} vote streak**"}}',
            ].join('\n'),
            thumbnail: { url: '{server icon}' },
        },
    ],
};

export type VoteMessageVariables = {
    /** User variables */
    user: {
        /** The Discord user ID of the member who voted. */
        id: string;
        /** The member's username. */
        name: string;
        /** The member's display name, or their username if they have none. */
        globalName: string;
        /** URL of the member's avatar. */
        avatar: string;
    };

    /** Server variables */
    server: {
        /** The server's Discord ID. */
        id: string;
        /** The server's name. */
        name: string;
        /** URL of the server's icon, or null if none is set. */
        icon: string | null;
    };

    /** The member's total votes for the server, with weekend votes counting twice. */
    votes: number;
    /** The number of votes the member cast in a row without missing one. */
    streak: number;
    /** The member's longest streak so far. */
    bestStreak: number;
    /** Unix timestamp in seconds of when the member can vote again. */
    nextVoteTimestamp: number;
    /** The link to the server's vote page on top.gg. */
    voteLink: string;
};

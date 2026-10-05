export type LevelUpMessageVariables = {
    /** User variables */
    user: {
        /** The Discord user ID of the member who leveled up. */
        id: string;
        /** The member's username. */
        name: string;
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

    /** The level the member just reached. */
    level: number;
    /** The level the member was at before. */
    previousLevel: number;
};

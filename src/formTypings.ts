/** The kinds of questions a form can ask, named after Google Forms' question types. A text block only shows text and takes no answer */
export type FormQuestionType = 'shortAnswer' | 'paragraph' | 'multipleChoice' | 'checkboxes' | 'dropdown' | 'user' | 'role' | 'channel' | 'text';

export interface FormQuestionOption {
    label: string;
    description?: string;
}

export interface FormQuestion {
    /** Stays the same when the question is edited, so responses keep pointing at it */
    id: string;
    type: FormQuestionType;
    /** The question itself, or a text block's heading */
    title: string;
    description?: string;
    placeholder?: string;
    required?: boolean;
    /** Short answer and paragraph only */
    minLength?: number;
    maxLength?: number;
    /** Short answer and paragraph only, a premium feature */
    responseValidation?: {
        pattern: string;
        errorMessage?: string;
    };
    /** Multiple choice, checkboxes and dropdown only */
    options?: FormQuestionOption[];
    /** Checkboxes, dropdown and the user, role and channel pickers only */
    minSelections?: number;
    maxSelections?: number;
}

/** A question's title is saved with its answer, so a response still reads right after the form is edited */
export interface FormAnswer {
    questionId: string;
    title: string;
    /** The text for a short answer or paragraph, otherwise the chosen option labels or user, role or channel IDs */
    value: string | string[];
}

export interface FormRequirements {
    /** Members need every one of these roles */
    requiredRoleIds?: string[];
    /** Members with any of these roles can't respond */
    blockedRoleIds?: string[];
    /** In milliseconds */
    requiredAccountAge?: number;
    /** In milliseconds */
    requiredTimeInServer?: number;
    requireServerTag?: boolean;
    requiredLevel?: number;
    /** All-time messages counted by the message counter */
    requiredMessages?: number;
}

/** The choices an export of a form's responses starts with on the dashboard */
export interface FormExportSettings {
    /** CSV when left out */
    format?: 'csv' | 'json';
    /** An IANA timezone, like America/New_York, for the times. The timezone of whoever exports when left out. Premium */
    timezone?: string;
    /** The columns in the order they're exported, each on or off. Columns added since, like new questions, come after them. Premium */
    columns?: { key: string; isIncluded: boolean }[];
}

/** A form's name, questions and settings without the form itself, as a giveaway template saves it. A giveaway or schedule made with one gets a new form made from it when it's saved */
export interface FormCopy {
    name: string;
    description?: string | null;
    questions: FormQuestion[];
    reviewChannelId?: string | null;
    /** Off (false) for a plain form: responses are collected without being accepted or denied */
    shouldReviewResponses?: boolean | null;
    requirements?: FormRequirements | null;
    /** The ways members can answer it. Null for every way */
    responseSources?: FormResponseSources[] | null;
    /** Off (null) for 1 response per member */
    allowMultipleResponses?: boolean | null;
    /** With 1 response, answering again replaces it */
    allowResponseEditing?: boolean | null;
    /** In milliseconds */
    responseCooldown?: number | null;
    isAnonymous?: boolean | null;
    denyResponsesOnLeave?: boolean | null;
    submitRoleIds?: string[] | null;
    acceptRoleIds?: string[] | null;
    acceptRemoveRoleIds?: string[] | null;
    denyRoleIds?: string[] | null;
    denyRemoveRoleIds?: string[] | null;
    pingRoleIds?: string[] | null;
    reviewerRoleIds?: string[] | null;
    confirmationMessage?: string | null;
    acceptMessage?: string | null;
    denyMessage?: string | null;
    exportSettings?: FormExportSettings | null;
}

/** Starting points offered when a form is made. Applications have their responses accepted or denied, plain forms just collect them */
export const formStarterTemplates = {
    staffApplication: {
        name: 'Staff Application',
        description: 'Apply to join the staff team.',
        questions: [
            {
                id: 'age',
                type: 'shortAnswer',
                title: 'How old are you?',
                required: true,
                maxLength: 3,
            },
            {
                id: 'timezone',
                type: 'shortAnswer',
                title: 'What timezone are you in?',
                placeholder: 'e.g. UTC+1',
                required: true,
                maxLength: 50,
            },
            {
                id: 'reason',
                type: 'paragraph',
                title: 'Why do you want to join the staff team?',
                required: true,
            },
            {
                id: 'experience',
                type: 'paragraph',
                title: 'Do you have any moderation experience?',
                required: true,
            },
            {
                id: 'hours',
                type: 'multipleChoice',
                title: 'How many hours a week can you help?',
                required: true,
                options: [{ label: 'Under 5' }, { label: '5 to 10' }, { label: '10 to 20' }, { label: 'Over 20' }],
            },
        ],
    },
    partnershipRequest: {
        name: 'Partnership Request',
        description: 'Ask to partner your server with ours.',
        questions: [
            {
                id: 'server',
                type: 'shortAnswer',
                title: "What is your server's name?",
                required: true,
                maxLength: 100,
            },
            {
                id: 'invite',
                type: 'shortAnswer',
                title: 'Invite link to your server',
                placeholder: 'https://discord.gg/...',
                required: true,
                maxLength: 100,
            },
            {
                id: 'members',
                type: 'shortAnswer',
                title: 'How many members does it have?',
                required: true,
                maxLength: 20,
            },
            {
                id: 'about',
                type: 'paragraph',
                title: 'What is your server about?',
                required: true,
            },
        ],
    },
    prizeClaim: {
        name: 'Prize Claim',
        description: 'Tell us where to send your prize.',
        shouldReviewResponses: false,
        questions: [
            {
                id: 'sendTo',
                type: 'shortAnswer',
                title: 'Where should we send your prize?',
                placeholder: 'e.g. your in-game name, username or email',
                required: true,
                maxLength: 200,
            },
            {
                id: 'region',
                type: 'shortAnswer',
                title: 'What region or platform are you on?',
                placeholder: 'e.g. EU, PC',
                maxLength: 100,
            },
            { id: 'notes', type: 'paragraph', title: 'Anything else we should know?' },
        ],
    },
    feedback: {
        name: 'Feedback',
        description: 'Tell us what you think of the server.',
        shouldReviewResponses: false,
        questions: [
            {
                id: 'rating',
                type: 'multipleChoice',
                title: 'How would you rate the server?',
                required: true,
                options: [{ label: '5 - Great' }, { label: '4 - Good' }, { label: '3 - Okay' }, { label: '2 - Bad' }, { label: '1 - Awful' }],
            },
            { id: 'liked', type: 'paragraph', title: 'What do you like most?' },
            { id: 'improve', type: 'paragraph', title: 'What should we improve?' },
        ],
    },
} satisfies Record<string, FormCopy>;

export type FormStarterTemplate = keyof typeof formStarterTemplates;

/** A pending response has no status */
export enum FormResponseStatuses {
    Accepted = 1,
    Denied = 2,
    /** The member responded again before this one was reviewed */
    Replaced = 3,
}

/** How a response was filled in */
export enum FormResponseSources {
    PopUp = 1,
    Website = 2,
    DM = 3,
}

/** A form ID: 16 random letters and digits, so links can't be guessed */
export const formIdRegex = /^[A-Za-z0-9]{16}$/;

/** Forms and panels are unlimited with premium */
export const formLimits = {
    forms: { free: 2 },
    questions: { free: 10, premium: 100 },
    templates: { free: 1, premium: 100 },
    panels: { free: 1 },
    /** One row of buttons */
    formsPerPanel: 5,
    requiredRoles: { free: 1 },
    blockedRoles: { free: 1 },
    /** Roles given or removed on submit, accept and deny */
    actionRoles: { free: 1, premium: 20 },
    pingRoles: 20,
    reviewerRoles: 20,
    /** The form's name is the pop-up's title, which Discord caps at 45 */
    nameLength: 45,
    descriptionLength: 1000,
    /** A pop-up question's label is capped at 45, its description and placeholder at 100 */
    questionTitleLength: 45,
    questionDescriptionLength: 100,
    textBlockLength: 1000,
    placeholderLength: 100,
    answerLength: 4000,
    optionLabelLength: 100,
    optionDescriptionLength: 100,
    dropdownOptions: 25,
    /** Discord's radio buttons and checkboxes take 2 to 10 and 1 to 10 options */
    multipleChoiceOptions: { min: 2, max: 10 },
    checkboxOptions: { min: 1, max: 10 },
    pickerSelections: 25,
    responseValidationPatternLength: 200,
    responseValidationErrorLength: 100,
    messageLength: 1000,
    reviewReasonLength: 1000,
    panelTitleLength: 256,
    panelDescriptionLength: 2000,
    templateNameLength: 45,
    /** From 1 minute to 1 year */
    responseCooldown: { min: 60000, max: 31536000000 },
    /** How far ahead a form can be set to open or close: 1 year */
    openCloseTime: 31536000000,
    /** Up to 10 years */
    requiredAccountAge: 315360000000,
    requiredTimeInServer: 315360000000,
    requiredLevel: 1000,
    requiredMessages: 10000000,
    /** Older responses are kept, just not shown */
    visibleResponseDays: { free: 31, premium: 365 },
    /** How long a deleted form can be restored before it's deleted for good, with its responses */
    deletedFormDays: { free: 3, premium: 30 },
} as const;

/** Whether every question fits one Discord pop-up, which holds 5 components */
export const canFormBeAnsweredInPopUp = (questions: FormQuestion[]) => questions.length > 0 && questions.length <= 5;

/** Whether every question can be asked in DMs, where the server's members, roles and channels can't be picked */
export const canFormBeAnsweredInDMs = (questions: FormQuestion[]) => questions.length > 0 && questions.every((question) => !['user', 'role', 'channel'].includes(question.type));

/** The ways members can answer a form: the ones it's set to (every way by default) that work for its questions. The website works for every form, so it's used when none of the others do */
export const getFormResponseSources = (questions: FormQuestion[], responseSources: FormResponseSources[] | null | undefined, isPremiumGuild: boolean) => {
    // Over 5 questions, a form takes several pop-ups in a row, up to the server's question limit
    const workingResponseSources = (responseSources || [FormResponseSources.PopUp, FormResponseSources.Website, FormResponseSources.DM]).filter((responseSource) => (responseSource === FormResponseSources.PopUp ? questions.length > 0 && questions.length <= (isPremiumGuild ? formLimits.questions.premium : formLimits.questions.free) : responseSource === FormResponseSources.DM ? canFormBeAnsweredInDMs(questions) : true));

    return workingResponseSources.length ? workingResponseSources : [FormResponseSources.Website];
};

export const formQuestionTypes: FormQuestionType[] = ['shortAnswer', 'paragraph', 'multipleChoice', 'checkboxes', 'dropdown', 'user', 'role', 'channel', 'text'];

/** Finds the first part of a question that breaks the limits, or null when it's fine. Premium is checked by the callers */
export const getFormQuestionError = (question: FormQuestion): 'id' | 'type' | 'title' | 'description' | 'placeholder' | 'length' | 'responseValidation' | 'options' | 'selections' | null => {
    const isTextQuestion = question.type === 'shortAnswer' || question.type === 'paragraph';
    const isChoiceQuestion = question.type === 'multipleChoice' || question.type === 'checkboxes' || question.type === 'dropdown';
    const isPickerQuestion = question.type === 'user' || question.type === 'role' || question.type === 'channel';
    const isWholeNumber = (value: unknown, min: number, max: number) => Number.isInteger(value) && (value as number) >= min && (value as number) <= max;

    if (typeof question.id !== 'string' || !/^[a-zA-Z0-9]{1,16}$/.test(question.id)) return 'id';
    if (!formQuestionTypes.includes(question.type)) return 'type';
    if (typeof question.title !== 'string' || !question.title.trim() || question.title.length > formLimits.questionTitleLength) return 'title';
    if (question.description !== undefined && (typeof question.description !== 'string' || question.description.length > (question.type === 'text' ? formLimits.textBlockLength : formLimits.questionDescriptionLength))) return 'description';
    if (question.placeholder !== undefined && (typeof question.placeholder !== 'string' || question.placeholder.length > formLimits.placeholderLength || !(isTextQuestion || question.type === 'dropdown' || isPickerQuestion))) return 'placeholder';

    if (question.minLength !== undefined || question.maxLength !== undefined) {
        if (!isTextQuestion) return 'length';
        if (question.minLength !== undefined && !isWholeNumber(question.minLength, 0, formLimits.answerLength)) return 'length';
        if (question.maxLength !== undefined && !isWholeNumber(question.maxLength, 1, formLimits.answerLength)) return 'length';
        if ((question.minLength || 0) > (question.maxLength || formLimits.answerLength)) return 'length';
    }

    if (question.responseValidation !== undefined) {
        const { pattern, errorMessage } = question.responseValidation || {};

        if (!isTextQuestion || typeof pattern !== 'string' || !pattern || pattern.length > formLimits.responseValidationPatternLength) return 'responseValidation';
        if (errorMessage !== undefined && (typeof errorMessage !== 'string' || errorMessage.length > formLimits.responseValidationErrorLength)) return 'responseValidation';

        try {
            new RegExp(pattern);
        } catch {
            return 'responseValidation';
        }
    }

    if (isChoiceQuestion) {
        const options = question.options;
        const [minOptions, maxOptions] = question.type === 'multipleChoice' ? [formLimits.multipleChoiceOptions.min, formLimits.multipleChoiceOptions.max] : question.type === 'checkboxes' ? [formLimits.checkboxOptions.min, formLimits.checkboxOptions.max] : [1, formLimits.dropdownOptions];

        if (!Array.isArray(options) || options.length < minOptions || options.length > maxOptions) return 'options';
        if (options.some((option) => typeof option?.label !== 'string' || !option.label.trim() || option.label.length > formLimits.optionLabelLength || (option.description !== undefined && (typeof option.description !== 'string' || option.description.length > formLimits.optionDescriptionLength)))) return 'options';
        // Answers are sent and saved as the chosen labels, so each label is used once
        if (new Set(options.map((option) => option.label)).size !== options.length) return 'options';
    } else if (question.options !== undefined) return 'options';

    if (question.minSelections !== undefined || question.maxSelections !== undefined) {
        if (!(question.type === 'checkboxes' || question.type === 'dropdown' || isPickerQuestion)) return 'selections';

        const maxAllowed = isPickerQuestion ? formLimits.pickerSelections : question.options?.length || 1;

        if (question.minSelections !== undefined && !isWholeNumber(question.minSelections, 1, maxAllowed)) return 'selections';
        if (question.maxSelections !== undefined && !isWholeNumber(question.maxSelections, 1, maxAllowed)) return 'selections';
        if ((question.minSelections || 1) > (question.maxSelections || maxAllowed)) return 'selections';
    }

    return null;
};

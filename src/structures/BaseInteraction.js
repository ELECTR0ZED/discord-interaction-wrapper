const InteractionType = require('../constants/InteractionTypes');
const Channel = require('./Channel');
const Member = require('./Member');
const User = require('./User');
const Guild = require('./Guild');
const { REST } = require('@discordjs/rest');

/**
 * Create a new Interaction instance.
 * @param {any} data - The raw interaction data received from Discord.
 * @abstract
 */
class BaseInteraction {
    constructor(data) {
        /**
         * The interaction's type
         * @type {InteractionType}
         */
        this.type = data.type;

        /**
         * The interaction's id
         * @type {int}
         */
        this.id = data.id;

        /**
         * The interaction's token
         * @type {int}
         * @readonly
         */
        this.token = data.token;

        /**
         * The application's id
         * @type {int}
         */
        this.applicationId = data.application_id;

        /**
         * The id of the channel this interaction was sent in
         * @type {?int}
         */
        this.channelId = data.channel?.id ?? null;

        /**
         * The id of the guild this interaction was sent in
         * @type {?int}
         */
        this.guildId = data.guild_id ?? null;

        /**
         * The user who created this interaction
         * @type {User}
         */
        this.user = data.member?.user ? new User(data.member.user) : null;

        /**
         * If this interaction was sent in a guild, the member which sent it
         * @type {?Member}
         */
        this.member = data.member ? new Member(data.member) : null;

        /**
         * The version
         * @type {number}
         */
        this.version = data.version;

        this.options = {};
        this.resolved = data.data?.resolved;

        this.rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

        if (data.data?.options) {
            this.transformOptions(data.data.options);
        }
    }

    /**
     * The channel this interaction was sent in
     * @type {?Channel}
     * @readonly
     */
    get channel() {
        return new Channel(this.channelId) ?? null;
    }

    /**
     * The guild this interaction was sent in
     * @type {?Guild}
     * @readonly
     */
    get guild() {
        return new Guild(this.guildId) ?? null;
    }

    transformOptions(options) {
        if (!options) return;
        for (const option of options) {
            const result = {
                name: option.name,
                type: option.type,
            }
    
            if ('value' in option) result.value = option.value;

            if (this.resolved) {
                const user = this.resolved.users?.[option.value];
                if (user) result.user = new User(user);

                const member = this.resolved.members?.[option.value];
                if (member) result.member = new Member(member);

                const channel = this.resolved.channels?.[option.value];
                if (channel) result.channel = new Channel(channel);

                // const role = resolved.roles?.[option.value];
                // const attachment = resolved.attachments?.[option.value];
            }

            this.options[option.name] = result;
        }
    }

    /**
     * Convert the interaction data to a JSON object.
     * @returns {object} The interaction data.
     */
    toJSON() {
        return this.body;
    }

    /**
     * Convert the interaction data to a string.
     * @returns {string} The interaction data.
     */
    toString() {
        return this.rawBody;
    }
}

module.exports = BaseInteraction;
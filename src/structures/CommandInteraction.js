const BaseInteraction = require('./BaseInteraction');
const InteractionResponses = require('./interfaces/InteractionResponses');

/**
 * Create a new Interaction instance.
 * @param {any} data - The raw interaction data received from Discord.
 * @returns {Interaction} - The new Interaction instance. 
 */
class CommandInteraction extends BaseInteraction {
    constructor(data) {
        super(data);

        /**
         * The invoked application command's id
         * @type {int}
         */
        this.commandId = data.data.id;

        /**
         * The invoked application command's name
         * @type {string}
         */
        this.commandName = data.data.name;

        /**
         * The invoked application command's type
         * @type {int}
         */
        this.commandType = data.data.type;

        /**
         * The id of the guild the invoked application command is registered to
         * @type {?int}
         */
        this.commandGuildId = data.data.guild_id ?? null;
    }
}

Object.assign(CommandInteraction.prototype, InteractionResponses.prototype);

module.exports = CommandInteraction;
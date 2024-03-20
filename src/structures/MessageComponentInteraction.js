const BaseInteraction = require('./BaseInteraction');
const InteractionResponses = require('./interfaces/InteractionResponses');

/**
 * Create a new Interaction instance.
 * @param {any} data - The raw interaction data received from Discord.
 * @returns {MessageComponentInteraction} - The new Interaction instance. 
 */

class MessageComponentInteraction extends BaseInteraction {
    constructor(data) {
        super(data);

        /**
         * The message component's custom id
         * @type {string}
         */
        this.customId = data.data.custom_id;

        /**
         * The message component's type
         * @type {int}
         */
        this.componentType = data.data.component_type;

        this.message = data.message;
    }

    /**
     * The component which was interacted with
     * @type {Object}
     * @readonly
     */
    get component() {
        return this.message.components
            .flatMap(row => row.components)
            .find(component => (component.customId ?? component.custom_id) === this.customId);
    }
}

InteractionResponses.applyToClass(MessageComponentInteraction);

module.exports = MessageComponentInteraction;
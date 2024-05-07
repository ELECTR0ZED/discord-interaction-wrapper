const BaseInteraction = require('./BaseInteraction');

/**
 * Create a new Interaction instance.
 * @param {any} data - The raw interaction data received from Discord.
 * @returns {Interaction} - The new Interaction instance. 
 */
class PingInteraction extends BaseInteraction {
    constructor(data) {
        super(data);
    }
}

module.exports = PingInteraction;
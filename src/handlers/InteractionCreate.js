const CommandInteraction = require('../structures/CommandInteraction');
const MessageComponentInteraction = require('../structures/MessageComponentInteraction');
const AutoComplete = require('../structures/AutoComplete');
const InteractionTypes = require('../constants/InteractionTypes');


module.exports = (interaction) => {
    switch (interaction.type) {
        case InteractionTypes.APPLICATION_COMMAND:
            return new CommandInteraction(interaction);
        case InteractionTypes.MESSAGE_COMPONENT:
            return new MessageComponentInteraction(interaction);
        case InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE:
            return new AutoComplete(interaction);
    }
}
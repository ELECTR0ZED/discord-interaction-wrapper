const CommandInteraction = require('../structures/CommandInteraction');
const MessageComponentInteraction = require('../structures/MessageComponentInteraction');


module.exports = (interaction) => {
    switch (interaction.type) {
        case 2:
            return new CommandInteraction(interaction);
        case 3:
            return new MessageComponentInteraction(interaction);
    }
}
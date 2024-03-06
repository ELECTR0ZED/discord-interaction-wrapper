const InteractionTypes = require('../constants/InteractionTypes');

class CommandInvocation {

    /**
     * Create a new CommandInvocation instance.
     * @param {any} data - The raw interaction data received from Discord.
     * @returns {CommandInvocation} - The new CommandInvocation instance. 
     */
    constructor(data) {
        
        if (data.type !== InteractionTypes.APPLICATION_COMMAND) {
            throw new Error('Invalid interaction type');
        }
        
        this.command = data.data.name;


        this.channel = data.channel;
        this.guild = data.guild;
        this.member = data.member;

        this.options = {};
        if (this.obj.data.options) {
            this.resolveOptions();
        }
    }

    resolveOptions() {
        for (const option of this.obj.data.options) {
            if (option.type === 6) { // user
                this.options[option.name] = {
                    id: option.value,
                    member: this.obj.data.resolved.members[option.value],
                    user: this.obj.data.resolved.users[option.value]
                }
            } else {
                this.options[option.name] = option.value;
            }
        }
    }
}
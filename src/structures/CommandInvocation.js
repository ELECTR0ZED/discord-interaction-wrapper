const interactionTypes = require('../constants/interactionTypes');
const Channel = require('./Channel');
const Member = require('./Member');
const Guild = require('./Guild');

class CommandInvocation {

    /**
     * Create a new CommandInvocation instance.
     * @param {any} data - The raw interaction data received from Discord.
     * @returns {CommandInvocation} - The new CommandInvocation instance. 
     */
    constructor(data) {
        this.obj = data;
        
        if (data.type !== interactionTypes.APPLICATION_COMMAND) {
            throw new Error('Invalid interaction type');
        }

        this.command = data.data.name;

        this.channel = new Channel(data.channel);
        this.guild = new Guild(data.guild);
        this.member = new Member(data.member);

        this.options = {};
        if (data.options) {
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

module.exports = CommandInvocation;
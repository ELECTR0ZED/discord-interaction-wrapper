const interactionTypes = require('../constants/interactionTypes');
const Channel = require('./Channel');
const Member = require('./Member');
const Guild = require('./Guild');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

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
        this.user = this.member.user;

        this.rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

        this.options = {};
        if (data.data.options) {
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

    async reply(content, options = {}) {
        const payload = { ...options };

        if (typeof content === 'string') {
            payload.content = content;
        } else if (typeof content === 'object' && content !== null) {
            Object.assign(payload, content);
        } else {
            throw new TypeError('Content must be a string or an object.');
        }

        await this.rest.patch(
            Routes.webhookMessage(this.obj.application_id, this.obj.token, '@original'),
            { body: payload },
        );
    }
}

module.exports = CommandInvocation;
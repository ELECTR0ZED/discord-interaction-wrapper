const { InteractionResponseType, MessageFlags, Routes } = require('discord-api-types/v10');

class InteractionResponses {

    async deferReply(options = {}) {
        this.ephemeral = options.ephemeral ?? false;
        return {
            type: InteractionResponseType.DeferredChannelMessageWithSource,
            data: {
                flags: options.ephemeral ? MessageFlags.Ephemeral : undefined,
            },
        };
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

        return payload;
    }

    async editReply(content, options = {}) {
        const payload = { ...options };

        if (typeof content === 'string') {
            payload.content = content;
        } else if (typeof content === 'object' && content !== null) {
            Object.assign(payload, content);
        } else {
            throw new TypeError('Content must be a string or an object.');
        }

        await this.rest.patch(
            Routes.webhookMessage(this.body.application_id, this.body.token, '@original'),
            { body: payload },
        );
    }

    async deleteReply() {
        await this.rest.delete(
            Routes.webhookMessage(this.body.application_id, this.body.token, '@original'),
        );
    }

    async followUp(content, options = {}) {
        const payload = { ...options };

        if (typeof content === 'string') {
            payload.content = content;
        } else if (typeof content === 'object' && content !== null) {
            Object.assign(payload, content);
        } else {
            throw new TypeError('Content must be a string or an object.');
        }

        await this.rest.post(
            Routes.webhookMessage(this.body.application_id, this.body.token),
            { body: payload },
        );
    }

    async deferUpdate() {
        return {
            type: InteractionResponseType.DeferredMessageUpdate,
        };
    }

    async update(content, options = {}) {
        const payload = { ...options };

        if (typeof content === 'string') {
            payload.content = content;
        } else if (typeof content === 'object' && content !== null) {
            Object.assign(payload, content);
        } else {
            throw new TypeError('Content must be a string or an object.');
        }

        await this.rest.patch(
            Routes.webhookMessage(this.body.application_id, this.body.token, '@original'),
            { body: payload },
        );
    }
}

module.exports = InteractionResponses;
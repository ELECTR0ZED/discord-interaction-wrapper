class Channel {
    /**
     * Create a new Channel instance.
     * @param {any} data - The raw channel data received from Discord.
     * @returns {Channel} - The new Channel instance.
     */
    constructor(data) {
        this.data = data
        this.id = data.id;
        this.type = data.type;
        this.guild_id = data.guild_id;
        this.name = data.name;
        this.nsfw = data.nsfw;
        this.parent_id = data.parent_id;
        this.permissions = data.permissions;
        this.position = data.position;
        this.topic = data.topic;
        this.last_message_id = data.last_message_id;
        this.rate_limit_per_user = data.rate_limit_per_user;
    }

    toJSON() {
        return this.data;
    }
}

module.exports = Channel;
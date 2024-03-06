const User = require('./User');

class Member {
    /**
     * Create a new Member instance.
     * @param {any} data - The raw member data received from Discord.
     * @returns {Member} - The new Member instance.
     */
    constructor(data) {
        this.data = data;
        this.nick = data.nick;
        this.joined_at = data.joined_at;
        this.premium_since = data.premium_since;
        this.deaf = data.deaf;
        this.mute = data.mute;
        this.pending = data.pending;
        this.permissions = data.permissions;
        this.roles = data.roles;
        this.avatar = data.avatar;
        this.communication_disabled_until = data.communication_disabled_until;
        this.flags = data.flags;

        this.user = new User(data.user);
    }

    toJSON() {
        return this.data;
    }
}

module.exports = Member;
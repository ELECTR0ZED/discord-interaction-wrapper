class User {
    /**
     * Create a new User instance.
     * @param {any} data - The raw user data received from Discord.
     * @returns {User} - The new User instance.
     */
    constructor(data) {
        this.data = data;
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.avatar = data.avatar;
        this.avatar_decoration_data = data.avatar_decoration_data;
        this.global_name = data.global_name;
        this.public_flags = data.public_flags;
    }

    toJSON() {
        return this.data;
    }
}
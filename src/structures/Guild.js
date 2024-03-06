class Guild {
    /**
     * Create a new Guild instance.
     * @param {any} data - The raw guild data received from Discord.
     * @returns {Guild} - The new Guild instance.
     */
    constructor(data) {
        this.data = data;
        this.id = data.id;
        this.locale = data.locale;
    }

    toJSON() {
        return this.data;
    }
}

module.exports = Guild;
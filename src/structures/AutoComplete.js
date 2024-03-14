class AutoComplete {
    constructor(data) {
        this.obj = data;
        this.guild_id = data.guild_id;
        this.channel = data.channel;
        this.member = data.member;
        this.user = data.member.user;
        this.command = data.data.name;

        this.options = {};
        if (this.obj.data.options) {
            this.resolveOptions();
        }
    }

    resolveOptions() {
        for (const option of this.obj.data.options) {
            this.options[option.name] = option.value;
        }
    }
}

module.exports = AutoComplete;
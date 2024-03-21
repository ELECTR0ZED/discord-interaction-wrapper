const BaseInteraction = require("./BaseInteraction");

class AutoComplete extends BaseInteraction {
    constructor(data) {
        super(data);

        this.command = data.data.name;
    }
}

module.exports = AutoComplete;
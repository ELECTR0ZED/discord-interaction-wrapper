class ActionRow {
    constructor() {
        this.components = [];
    }

    addButton(button) {
        if (this.components.length < 5) {
            this.components.push(button.toJSON());
        } else {
            throw new Error('Cannot add more than 5 components to an ActionRow.');
        }
        return this;
    }

    toJSON() {
        return {
            type: 1,
            components: this.components
        };
    }
}

module.exports = ActionRow;
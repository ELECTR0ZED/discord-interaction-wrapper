class ActionRow {
    constructor() {
        this.components = [];
    }

    addComponent(component) {
        if (this.components.length < 5) {
            this.components.push(component.toJSON());
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
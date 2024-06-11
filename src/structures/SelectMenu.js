const SelectMenuOption = require('./SelectMenuOption');

class SelectMenu {
    constructor() {
        this.menu = {
            type: 3, // Type 3 is for String Select Menu
            customId: undefined,
            options: [],
            placeholder: undefined,
            minValues: 1,
            maxValues: 1,
            disabled: false,
        };
    }

    setCustomId(customId) {
        this.menu.custom_id = customId;
        return this;
    }

    addOption(option) {
        if (option instanceof SelectMenuOption) {
            this.menu.options.push(option.toJSON());
        } else {
            throw new Error('Parameter must be an instance of SelectMenuOption');
        }
        return this;
    }

    setPlaceholder(placeholder) {
        this.menu.placeholder = placeholder;
        return this;
    }

    setMinValues(minValues) {
        this.menu.minValues = minValues;
        return this;
    }

    setMaxValues(maxValues) {
        this.menu.maxValues = maxValues;
        return this;
    }

    setDisabled(disabled = true) {
        this.menu.disabled = disabled;
        return this;
    }

    toJSON() {
        return this.menu;
    }
}

module.exports = SelectMenu;

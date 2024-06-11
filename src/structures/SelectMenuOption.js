class SelectMenuOption {
    constructor(label, value, description = undefined, emoji = undefined, defaultOption = false) {
        this.option = {
            label: label,
            value: value,
            description: description,
            emoji: emoji,
            default: defaultOption,
        };
    }

    setLabel(label) {
        this.option.label = label;
        return this;
    }

    setValue(value) {
        this.option.value = value;
        return this;
    }

    setDescription(description) {
        this.option.description = description;
        return this;
    }

    setEmoji(emoji) {
        this.option.emoji = emoji;
        return this;
    }

    setDefault(defaultOption = true) {
        this.option.default = defaultOption;
        return this;
    }

    toJSON() {
        return this.option;
    }
}

module.exports = SelectMenuOption;
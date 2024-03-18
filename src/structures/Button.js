class Button {
    constructor() {
        this.button = {
            type: 2, // Type 2 is for Button
            label: undefined,
            style: undefined,
            customId: undefined,
            url: undefined,
            disabled: false,
        };
    }

    setLabel(label) {
        this.button.label = label;
        return this;
    }

    setStyle(style) {
        this.button.style = style;
        return this;
    }

    setCustomId(customId) {
        this.button.custom_id = customId;
        return this;
    }

    setURL(url) {
        this.button.url = url;
        return this;
    }

    setDisabled(disabled = true) {
        this.button.disabled = disabled;
        return this;
    }

    toJSON() {
        return this.button;
    }
}

module.exports = Button;

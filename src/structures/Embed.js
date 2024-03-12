class Embed {
    constructor() {
        this.embed = {
            title: undefined,
            description: undefined,
            url: undefined,
            color: 0xffff00,
            fields: [],
            footer: {},
            thumbnail: {},
            image: {},
            author: {},
            timestamp: undefined,
        };
    }

    setTitle(title) {
        this.embed.title = title;
        return this;
    }

    setDescription(description) {
        this.embed.description = description;
        return this;
    }

    setURL(url) {
        this.embed.url = url;
        return this;
    }

    setColor(color) {
        this.embed.color = color;
        return this;
    }

    addField(name, value, inline = false) {
        this.embed.fields.push({ name, value, inline });
        return this;
    }

    setFooter(text, iconURL) {
        this.embed.footer = { text, icon_url: iconURL };
        return this;
    }

    setThumbnail(url) {
        this.embed.thumbnail.url = url;
        return this;
    }

    setImage(url) {
        this.embed.image.url = url;
        return this;
    }

    setAuthor(name, iconURL, url) {
        this.embed.author = { name, icon_url: iconURL, url };
        return this;
    }

    setTimestamp(timestamp = new Date()) {
        this.embed.timestamp = timestamp.toISOString();
        return this;
    }

    toJSON() {
        const filterUndefinedProps = (obj) => {
            Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : {});
            return obj;
        };

        return filterUndefinedProps(this.embed);
    }
}

module.exports = Embed;

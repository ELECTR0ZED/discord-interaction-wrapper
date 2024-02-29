// Interaction.js
const crypto = require('crypto');


class Interaction {
    /**
     * Create a new Interaction instance.
     * @param {string} requestBody - The raw request body received from Discord.
     * @returns {Interaction} The new Interaction instance.
     */
    constructor(request) {
        this.body = request.body
        this.headers = request.headers;
        this.data = this.body.data;
        this.type = this.data.type;
    }

    
    /**
     * Validate the interaction received from Discord.
     * @param {string} publicKey - The public key to verify the signature with.
     * @returns {boolean} Whether the interaction is valid.
     */
    isValid(publicKey) {
        const signature = this.headers['x-signature-ed25519'];
        const timestamp = this.headers['x-signature-timestamp'];
        const body = this.body;

        // Construct the message from the timestamp and body
        const message = timestamp + body;
        // Verify the signature
        const isVerified = crypto.verify(
            "sha256",
            Buffer.from(message),
            {
                key: publicKey,
                format: 'hex'
            },
            Buffer.from(signature, 'hex')
        );

        return isVerified;
    }

    /**
     * Convert the interaction data to a JSON object.
     * @returns {object} The interaction data.
     */
    toJSON() {
        return this.interactionData;
    }
}

module.exports = Interaction;

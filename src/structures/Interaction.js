// Interaction.js
const nacl = require('tweetnacl');


class Interaction {
    /**
     * Create a new Interaction instance.
     * @param {string} requestBody - The raw request body received from Discord.
     * @returns {Interaction} The new Interaction instance.
     */
    constructor(request) {
        this.body = request.body
        this.rawBody = request.rawBody;
        this.headers = request.headers;
        this.type = this.body.type;
        this.data = this.body.data;
    }

    
    /**
     * Validate the interaction received from Discord.
     * @param {string} publicKey - The public key to verify the signature with.
     * @returns {boolean} Whether the interaction is valid.
     */
    isValid(publicKey) {
        const signature = this.headers['x-signature-ed25519'];
        const timestamp = this.headers['x-signature-timestamp'];

        const message = timestamp + this.rawBody;
        
        const isVerified = nacl.sign.detached.verify(
            Buffer.from(message),
            Buffer.from(signature, 'hex'),
            Buffer.from(publicKey, 'hex')
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

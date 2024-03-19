const nacl = require('tweetnacl');
/**
 * Validate the interaction received from Discord.
 * @param {string} publicKey - The public key to verify the signature with.
 * @param {string} signature - The signature to verify.
 * @param {string} timestamp - The timestamp of the interaction.
 * @param {string} body - The body of the interaction.
 * @returns {boolean} Whether the interaction is valid.
 */
function isValid(publicKey, signature, timestamp, body) {
    
    const message = timestamp + body;
    
    const isVerified = nacl.sign.detached.verify(
        Buffer.from(message),
        Buffer.from(signature, 'hex'),
        Buffer.from(publicKey, 'hex')
    );

    return isVerified;
}

module.exports = { isValid };
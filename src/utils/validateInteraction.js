const nacl = require('tweetnacl');
/**
 * Validate the interaction received from Discord.
 * @param {string} publicKey - The public key to verify the signature with.
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
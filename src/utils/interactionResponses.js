// Utility functions for generating Discord interaction responses

// Respond to a Ping interaction
function pingResponse() {
    return { type: 1 };
}

// Defer the reply to an Application Command
function deferResponse(ephemeral = false) {
    return {
        type: 5,
        data: {
            flags: ephemeral ? 64 : 0
        }
    };
}

// Defer the reply to a Message Component interaction
function deferComponentResponse() {
    return { type: 6 };
}

// Export utility functions
module.exports = {
    pingResponse,
    deferResponse,
    deferComponentResponse
};

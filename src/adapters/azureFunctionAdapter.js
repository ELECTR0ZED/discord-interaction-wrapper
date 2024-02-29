// AzureAdapter.js

/**
 * Converts an Azure Function request to a generic HttpRequest format.
 * @param {object} req - The Azure Function HTTP request object.
 * @returns {object} A generic HttpRequest object.
 */
async function toHttpRequest(req) {
    return {
        method: req.method,
        headers: {
            'x-signature-ed25519': req.headers.get('x-signature-ed25519') || req.headers.get('X-Signature-Ed25519'),
            'x-signature-timestamp': req.headers.get('x-signature-timestamp') || req.headers.get('X-Signature-Timestamp')
        },
        body: JSON.parse(await req.text())
    };
}

/**
 * Converts a generic HttpResponse object to the format expected by Azure Functions.
 * @param {object} response - The generic HttpResponse object.
 * @returns {object} The Azure Functions HTTP response format.
 */
function fromHttpResponse(response) {
    return {
        status: response.statusCode,
        headers: response.headers,
        body: response.body
    };
}

module.exports = { toHttpRequest, fromHttpResponse };

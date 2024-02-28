// LambdaAdapter.js

/**
 * Converts an AWS Lambda event to a generic HttpRequest format.
 * @param {object} event - The AWS Lambda event.
 * @returns {object} A generic HttpRequest object.
 */
function toHttpRequest(event) {
    return {
        method: event.httpMethod,
        headers: event.headers,
        body: event.body,
        queryStringParameters: event.queryStringParameters,
        pathParameters: event.pathParameters
    };
}

/**
 * Converts a generic HttpResponse object to the format expected by AWS Lambda.
 * @param {object} response - The generic HttpResponse object.
 * @returns {object} The AWS Lambda HTTP response format.
 */
function fromHttpResponse(response) {
    return {
        statusCode: response.statusCode,
        headers: response.headers,
        body: response.body,
        isBase64Encoded: false // Update this as necessary based on your response content
    };
}

module.exports = { toHttpRequest, fromHttpResponse };

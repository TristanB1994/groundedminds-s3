// CloudFront Function: Redirect /angieblandford to /about/angieblandford on the correct domain
// TODO: make the request.uri a variable and switch case it for all redirects
function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    if (request.uri === "/angieblandford" || request.uri === "/angieblandford/") {
        return {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: {
                "location": { "value": "https://" + host + "/about/angieblandford" }
            }
        };
    }
    return request;
}

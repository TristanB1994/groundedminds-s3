// CloudFront Function: Redirect specific root paths to /about/NAME on the correct domain
function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    var redirects = {
        // Profile redirections
        "/angieblandford": "/about/angieblandford",
        "/angieblandford/": "/about/angieblandford",
        "/ankakrivokuca": "/about/ankakrivokuca",
        "/ankakrivokuca/": "/about/ankakrivokuca",
        "/daniellekirshenbaum": "/about/daniellekirshenbaum",
        "/daniellekirshenbaum/": "/about/daniellekirshenbaum",
        "/liannesaxon": "/about/liannesaxon",
        "/liannesaxon/": "/about/liannesaxon",
        "/moonsunjang": "/about/moonsunjang",
        "/moonsunjang/": "/about/moonsunjang",
        "/rafeyashami": "/about/rafeyashami",
        "/rafeyashami/": "/about/rafeyashami",
        // Service redirections
        "/anxiety": "/services/anxiety",
        "/anxiety/": "/services/anxiety",
        "/consultation": "/services/consultation",
        "/consultation/": "/services/consultation",
        "/individualtherapy": "/services/individual-therapy",
        "/individualtherapy/": "/services/individual-therapy",
        "/ocd": "/services/ocd",
        "/ocd/": "/services/ocd",
        "/trauma": "/services/trauma",
        "/trauma/": "/services/trauma",
    };
    if (redirects[request.uri]) {
        return {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: {
                "location": { "value": "https://" + host + redirects[request.uri] }
            }
        };
    }
    return request;
}
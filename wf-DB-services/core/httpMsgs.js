var settings = require("../settings");

exports.show500 = function (req, resp, err) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(500, "Internal Error occurred", { "Content-Type": "text/html" });
        resp.write("<html><head><title>500</title></head><body>500: Internal Error. Details: " + err + "</body></html>");
    }
    else {
        resp.writeHead(500, "Internal Error occurred", { "Content-Type": "Application/JSON" });
        resp.write(JSON.stringify({ data: "ERROR occurred:" + err }));
    }
    resp.end();
};

exports.sendJson = function (req, resp, data) {
    resp.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    if (data) {
        resp.write(JSON.stringify(data));
    }
    resp.end();
}
exports.send200 = function (req, resp) {
    resp.writeHead(200, { "Access-Control-Allow-Origin": "*" });
}
var http = require("http");
var food = require("../controllers/foodwinematch");
var settings = require("../settings");
var httpMsgs = require("./httpMsgs")

http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                resp.end();
            }
            else if (req.url === "/food") {
                food.getFoodList(req, resp);
                
            }
            break;
    }
}).listen(settings.webPort, function () {
    console.log("Started listening on: " + settings.webPort);
});
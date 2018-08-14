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
            else {
                var foodID = '[0-9]+';
                var patt = new RegExp("/foods/winelist/" + foodID);
                if (patt.test(req.url)) {
                    patt = new RegExp(foodID)
                    var ID = patt.exec(req.url);
                    food.getWineList(req, resp, ID);
                }
            }
            break;
        case "POST":
            break;
    }
}).listen(settings.webPort, function () {
    console.log("Started listening on: " + settings.webPort);
});
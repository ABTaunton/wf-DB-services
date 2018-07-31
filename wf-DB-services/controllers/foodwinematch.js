var db = require("../core/db");

exports.getFoodList = function (req, resp) {
    db.executeSql("SELECT * FROM Food", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error occurred", { "Content-Type": "text/html" });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error. Details: " + err + "</body></html>");
        }
        else {
            resp.writeHead(200, {"Content-Type": "application/json" });
            resp.writeHead(200, { 'Access-Control-Allow-Origin': "*" });
            resp.writeHead(200, { "Access-Control-Allow-Method": "GET,PUT,POST,DELETE" });
            resp.writeHead(200, {"Access-Control-Allow-Headers": "Content-Type"});
            resp.write(JSON.stringify(data));
            
            
            }
        resp.end();
    });
};

exports.getWineList = function (req, resp, foodID) {

};
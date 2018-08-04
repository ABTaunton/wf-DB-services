var db = require("../core/db");
var cors = require("cors");
var httpMsgs = require("../core/httpMsgs");

exports.getFoodList = function (req, resp) {
    db.executeSql("SELECT * FROM Food", function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        }
        else {
            httpMsgs.sendJson(req, resp, data);
        }
    });
};

exports.getWineList = function (req, resp, foodID) {

};
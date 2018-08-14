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

exports.getWineList = function (req, resp, ID) {
    db.executeSql("SELECT Food.ID, Food.Food, Sum(FoodAttributeWineAttributeScoreJT.Score) AS SumOfScore, Wine.Label, Wine.Vintage, Wine.Vineyard FROM Wine INNER JOIN((WineAttributes INNER JOIN(Food INNER JOIN((FoodAttribute INNER JOIN FoodAttributeFoodJT ON FoodAttribute.ID = FoodAttributeFoodJT.FoodAttribute) INNER JOIN FoodAttributeWineAttributeScoreJT ON FoodAttribute.ID = FoodAttributeWineAttributeScoreJT.FoodAttribute) ON Food.ID = FoodAttributeFoodJT.Food) ON WineAttributes.ID = FoodAttributeWineAttributeScoreJT.WineAttribute) INNER JOIN WineAttributesJT ON WineAttributes.ID = WineAttributesJT.WineAttribute) ON Wine.ID = WineAttributesJT.Wine GROUP BY Food.ID, Food.Food, Wine.Label, Wine.Vintage, Wine.Vineyard HAVING(((Food.ID) =" + ID + ")) ORDER BY Sum(FoodAttributeWineAttributeScoreJT.Score) DESC;", function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        }
        else {
            httpMsgs.sendJson(req, resp, data);
        }
    });
};
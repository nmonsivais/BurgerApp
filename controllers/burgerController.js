var express = require("express");
var router = express.Router();
var orm = require("../db/config/orm.js");
//CRUD

// CREATE


//READ
router.get("/", function (req, res) {
    orm.selectAll(function (data) {
        res.json(data);
        //     var hbsObject = {
        //         cats: data
        //     };
        //     console.log(hbsObject);
        //     res.render("index", hbsObject);
    });
});
//UPDATE

//DELETE

//Export routes for server.js to use.
module.exports = router;
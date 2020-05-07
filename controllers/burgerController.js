var express = require("express");
var router = express.Router();
var orm = require("../db/config/orm.js");
//CRUD

// CREATE
router.post("/api/burger", function (req, res) {
    const burger_name = req.body.burger_name;

    orm.insertOne(burger_name, function (data) {

        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger successfully added.",
            });
        }
    });
});

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
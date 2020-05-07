var connection = require("./connection.js");
var orm = {
    //selectAll
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //insertOne
    insertOne: function (value, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
        connection.query(queryString, value, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //updateOne
    updateOne: function () { },
};


module.exports = orm;
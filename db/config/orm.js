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
    insertOne: function () { },
    // insertOne: function (tableInput) {
    //     var queryString = "INSERT INTO ?";
    //     connection.query(queryString, [tableInput], function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     })
    // }
    //updateOne
    updateOne: function () { },
};


module.exports = orm;
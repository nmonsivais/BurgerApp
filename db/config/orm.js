var connection = require("./connection.js");
var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
    // insertOne: function (tableInput) {
    //     var queryString = "INSERT INTO ?";
    //     connection.query(queryString, [tableInput], function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     })
    // }
}








module.exports = orm;
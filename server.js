var orm = require("./db/config/orm");
var express = require("express");
var exphbs = require("express-handlebars");
require("dotenv").config();

var PORT = process.env.PORT || 3000;

var app = express();

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});


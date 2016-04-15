var express = require("express");
var hbs     = require("express-handlebars");
var db      = require("./db/connection");


var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:      ".hbs",
  partialsDir:  "views/",
  LayoutDir:    "views/",
  defaultDir:   "layout-main"
}));

app.use("/assets", express.static("public"));

app.get("/", function(req, res){
res.render("recipes-index", {
  recipes: db.recipes
});
});

app.get("/recipes/:name")

app.listen(3001, function(){
  console.log("we're in business");
});

// var require  = ("mongoose")
var seedData = require("./seeds.json")

var recipeSchema = {
  name: String,
  recipe: String,
  image: String
};

module.exports = {
  recipes: seedData
};

const mongoose = require("mongoose");
//define shape of the document
const restaurantSchema = new mongoose.Schema({
  restaurantName:{type: String}, // String is shorthand for {type: String}
  restaurantDescription: {type: String},
  restaurantAddress :{type: String}, 
  role: {type: String},
  email: {type: String},
  password: {type: String},
  confirmPassword: {type: String},
});
const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;

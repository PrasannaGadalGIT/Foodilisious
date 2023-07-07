const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    RestaurantName : {type: String},
    Address : {type:String},
    foodMenue:{type:String},
});
const Food = mongoose.model("food", foodSchema);

module.exports = Food;

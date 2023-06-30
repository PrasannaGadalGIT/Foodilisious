const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    
    foodMenue:{type:String}
});
const Food = mongoose.model("food", foodSchema);

module.exports = Food;

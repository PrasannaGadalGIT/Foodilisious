const mongoose= require('mongoose')

const restaurantSchema =  new mongoose.Schema({
  restaurantName: {type: String} ,
  restaurantDescription : {type: String},
  address: {type: String}, 
  status: {type : String, default : 'pending'}
  
  });
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);

  
module.exports = Restaurant
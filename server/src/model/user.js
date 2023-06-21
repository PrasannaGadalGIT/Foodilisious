const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  firstName: {type: String} ,
  lastName : {type: String},
  email: {type: String}, 
  role : {type : String},
  password:  {type: String}, 
  confirmPassword : {type: String},
  status: {type : String, 
    default : 'pending'}
  
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User
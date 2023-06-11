const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()





const saltRounds = 10;
 const registerNewUser=  async (req,res)=>{
  //encryption of password in hascode
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
  req.body.password = hashPassword
  
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

  
 const loginUser=  async (req,res)=>{
 console.log(req.body)
 //checking if email exists or not
  const data = await User.findOne({email: req.body.email})
  //check if password matches or not
  const passMatched = await bcrypt.compare(req.body.password, data.password)
  //generate token for uesr expiry login
  
 
  if(data && passMatched){
    const token = jwt.sign({email: req.body.email}, process.env.SECRET_KEY);
    
    res.json({
    isLoggedIn: true,
    msg:  "success",
    id: data._id,
    token : token
    })
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  }

}


const getAllUser =  async (req,res)=>{
   const data = await User.find()
   if(data){
     res.json({
     userList: data
     })
   }
 }

 const getUserDetailsById = async (req,res)=>{
   const data = await User.findById(req.params.id)
   if(data){
     res.json({
     userList: data
     })
   }
 }
 
  module.exports = {registerNewUser,loginUser,getAllUser,getUserDetailsById}
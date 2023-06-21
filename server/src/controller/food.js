const Restaurant = require('../model/food')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getAllRestaurants = async (req,res)=>{
    const data = await Restaurant.find()
    res.json({productList:data})
  }


  const saltRounds = 10;
 const addNewRestaurants=  async (req,res)=>{

  const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
  
  req.body.password = hashPassword
  req.body.confirmPassword = hashPassword
  

   
    const data = await Restaurant.create(req.body)
    if(data) {
      res.json({
        msg: "product add success"
      })
    }
  }
  
  module.exports = {getAllRestaurants, addNewRestaurants}
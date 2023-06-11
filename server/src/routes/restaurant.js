const express=require('express')
const restaurant=express.Router()
const UserController = require('../controller/restaurant')
restaurant.post('/registerAsRestaurant', UserController.registerNewRestaurant)
restaurant.post('/login', UserController.loginRestaurant)



module.exports=restaurant;
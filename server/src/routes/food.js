const express=require('express')
const app=express.Router()
const UserController = require('../controller/food')
app.post('/restaurant', UserController.addNewRestaurants)

app.get('/restaurant', UserController.getAllRestaurants)

/*
-> Usehook
-> useCallBack
-> useRef
*/ 


module.exports=app;
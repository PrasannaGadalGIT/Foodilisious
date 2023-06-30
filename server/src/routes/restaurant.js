const express=require('express')
const app=express.Router()
const multer  = require('multer')
const UserController = require('../controller/restaurant')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/vehicle')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
app.post('/restaurant', UserController.addNewRestaurants)

app.get('/restaurant', UserController.getAllRestaurants)

/*
-> Usehook
-> useCallBack
-> useRef
*/ 


module.exports=app;
const express=require('express')
const app=express.Router()

const multer  = require('multer')

const FoodController = require('../controller/food')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/menue')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
 const upload = multer({ storage: storage })

  

app.post('/restaurantImage', upload.single('foodMenue'), FoodController.addMenueImage)
app.get('/restaurantImage/:id', FoodController.getMenueFile)
app.get('/getAllMenue', FoodController.getAllMenue)

module.exports = app
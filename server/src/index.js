const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())
const connectDb = require('./dbConnect/connection')

const userRoute=require('./routes/user')
const restaurantRoute=require('./routes/restaurant')


connectDb()

app.use("/", userRoute)
app.use("/", restaurantRoute)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())
const connectDb = require('./dbConnect/connection')

const userRoute=require('./routes/user')


connectDb()

app.use("/", userRoute)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


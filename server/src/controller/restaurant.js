const Restaurant = require('../model/restaurant')


//registering new restaurant
 const registerNewRestaurant=  async (req,res)=>{
  console.log(req.body)
    const data = await Restaurant.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

    //loggin in as restaurant
 const loginRestaurant=  async (req,res)=>{
    console.log(req.body)
     const data = await Restaurant.findOne({restaurantName: req.body.restaurantName})
     if(data){
       res.json({
       isLoggedIn: true,
       msg:  "success",
       id: data._id
       })
     }else{
       res.json({
         isLoggedIn: false,
         msg: "user doesnnot exist"
       })
     }
   
   }
   

module.exports = {registerNewRestaurant, loginRestaurant}
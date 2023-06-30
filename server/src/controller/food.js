const Food = require("../model/food");


const addMenueImage = async(req, res) => {
  
  const data = await Food.create(req.body);
  if (data) {
    res.json({
      msg: "product add success",
    });
  }
};

const getMenueFile = (req,res) => {
    console.log(req.file)
}

module.exports = {addMenueImage, getMenueFile};

const Food = require("../model/food");
const path = require('path');
const fs = require('fs');

const addMenueImage = async (req, res) => {
  
  req.body.foodMenue = req.file.filename; //created a new key for food Menue Image
  const data = await Food.create(req.body);
  if (data) {
    res.json({
      msg: "product add success",
    });
  }
};

const getAllMenue = async (req, res) => {
  const data = await Food.find();
  if (data) {
    res.json({
      foodMenueList: data,
      msg: "product add success",
    });
  }
};

const getMenueFile = async (req, res) => {
  try {
    const data = await Food.findById(req.params.id); //getting vehicles by id
    const imagePath = path.join(
      __dirname,
      "../../uploads/menue",
      data.foodMenue
    ); //acessing the imagePath
    const defaultPath = path.join(
      __dirname,
      "../../uploads/food",
      "download.jpg"
    ); //giving the default image if not uploaded

    if (fs.existsSync(imagePath) && data.foodMenue) {
      res.sendFile(imagePath);
    } else {
      res.sendFile(defaultPath);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addMenueImage, getMenueFile, getAllMenue };

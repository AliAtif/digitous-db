const mongoose = require("mongoose");
const studentModel = require("./models/student");
const  addressModel = require("./models/address");

mongoose.connect("mongodb://localhost:27017/morning_populate", () => {
  console.log("DB connected");
});

addressModel.deleteMany({}).then(() =>{
 addressModel.create({
     _id:  mongoose.Types.ObjectId,
    streetName:   "rue la reunion",
    streetNumber: "15",
    postCode:    "75020",
    city:         "Paris"
 })

});
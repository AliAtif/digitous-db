const mongoose = require("mongoose");
const studentModel = require("./models/student");
const addressModel = require("./models/address");

mongoose.connect("mongodb://localhost:27017/morning_populate", () => {
  console.log("DB connected");
});

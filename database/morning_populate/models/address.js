const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    _id:          mongoose.Types.ObjectId,
    streetName:   String,
    streetNumber: String,
    postCode:     String,
    city:         String
  });
  
  const addressModel = mongoose.model("address", addressSchema);
  
  module.exports = addressModel;
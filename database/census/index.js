const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/census", 
 { useNewUrlParser: true, useUnifiedTopology: true }, 
 () => {
    console.log("DB connected");
  });

  const citySchema = new mongoose.Schema({

    _id: Number,
    department: Number,
    city: String,
    population: Number,
    created: {
        type: Date,
        default: new Date()
    },

  });

  const cityModel = mongoose.model("cities", citySchema);
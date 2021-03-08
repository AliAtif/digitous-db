const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

  const charactersSchema = new mongoose.Schema({
    marque: String,
    model: String,
    year: Number,
  });

  const characterModel = mongoose.model("cars", charactersSchema);
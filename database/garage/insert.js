const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

  const charactersSchema = new mongoose.Schema({
    mark: String,
    model: String,
    year: Number,
  });

  const characterModel = mongoose.model("cars", charactersSchema);

  characterModel.insertMany(
    [{
        mark: "Aston Martin",
        model: "DB9",
        year: 2010
    },
    {
        mark: "Range Rover",
        model: "Discovery Sport",
        year: 2017
    }]
).then(response => {
    console.log(response)
})
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

  characterModel.updateOne(
    {
        mark: "Renault",
        model: "Espace",

    },

    {
        year: 2000
    }
).then((response) => {
    console.log(response);
})
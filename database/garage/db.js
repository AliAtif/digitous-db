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

  characterModel.deleteMany({}).then(() =>{
    characterModel.create([
        {
            mark: "Renault",
            model: "Espace",
            year:  1999 
        },

        {
            mark: "Renault",
            model: "Scenic",
            year: 2004
        },

        {
            mark: "Peugeot",
            model: "308",
            year:  2017
        }
    ])
});




    
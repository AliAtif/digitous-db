const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/mongoose_populate",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

  const StudentSchema = new mongoose.Schema({

    ID: ObjectId,
    firstName: String,
    surname: String,
    address: ObjectId 
  });
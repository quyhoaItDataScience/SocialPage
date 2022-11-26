const mongoose = require("mongoose");

const HobbySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const Hobby = mongoose.model("Hobby", HobbySchema);

module.exports = Hobby;

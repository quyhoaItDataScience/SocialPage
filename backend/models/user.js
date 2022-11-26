const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  hobbies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Hobby",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

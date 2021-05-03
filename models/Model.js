const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  menu: [
    {
      dishName: {
        type: String,
        required: true,
      },
      dishPrice: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Rests", PostSchema);

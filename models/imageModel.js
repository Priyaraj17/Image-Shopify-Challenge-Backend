const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "An Image must have a name"],
    unique: [true, "The name already exists"],
  },
  description: {
    type: String,
    required: [true, "You have to provide a description"],
  },
  link: {
    type: String,
    required: [true, "You have to provide a link of the image"],
  },
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;

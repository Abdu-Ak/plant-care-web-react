const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
  title: {
    type: String,
  },
  caption: {
    type: String,
  },
  tags: [
    
      userId = {
        type: mongoose.Schema.Types.ObjectId,
      },
    
  ],
});

const posts = mongoose.model("posts", postSchema);
module.exports = posts;

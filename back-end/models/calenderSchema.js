const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const calenderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    wateringTime: {
      type: String,
    },
    fertiliseDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const calender = mongoose.model("calender", calenderSchema);
module.exports = calender;

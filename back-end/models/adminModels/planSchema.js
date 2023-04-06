const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema(
  {
    
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    plan: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    features: [
      (feature = {
        type: String,
        require: true,
      }),
    ],
  },
  { timestamps: true }
);

const plans = mongoose.model("plans", planSchema);
module.exports = plans;

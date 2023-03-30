const mongoose = require("mongoose");

const { Schema } = mongoose;

const notificatonSchema = new Schema(
  {
    userId: {
        
        type: mongoose.Schema.Types.ObjectId, 
        required: true
     },
  

    message:
     [
      {
        title: { 
            type: String
            , 
         },
        body: { 
            type: String,
            
            
            },
       
      },
    ],
  },
  {
    timestamps: true,
  }
);

const notification = mongoose.model("notification", notificatonSchema);

module.exports = notification;

const mongoose = require("mongoose");

const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    users: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          
        },
      },
    ],
    messages : [
       { 
        sender  : {
          type: mongoose.Schema.Types.ObjectId,
        },
        content : {
            type : String
        }, 
        time: {
          type: Date,
          default: Date.now
        }
  
       
       }
    ]
  },
);

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;

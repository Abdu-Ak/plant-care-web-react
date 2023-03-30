const mongoose = require("mongoose");

const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    user: {
        
        type: mongoose.Schema.Types.ObjectId, 
        required: true
     },
  

    unreadMessages: 
    {
         type: Number,
          required: true
         },
    message:
     [
      {
        content: { 
            type: String
            , required: true
         },
        read: { 
            type: String,
             required: true, 
             default: false 
            },
        date: {
             type: Date,
              required: true,
               default: Date.now 
            },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;

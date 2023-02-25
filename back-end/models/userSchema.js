const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
       
    },
    email:{
        type:String,
       require : true,
       unique :true

    },
    password:{
        type:String,
      
    },
    phone:{
        type:Number,
        
    },
    image: 
    {
      type:String
      
    }
});

const userdetails = mongoose.model('userdetails',UserSchema);
module.exports = userdetails;
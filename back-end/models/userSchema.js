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
    image: 
    {
      type:String
      
    },
    status:
    {
        type:String
     },
     isBlock :
     {
        type:Boolean,
        default:false
     },
     phone :{
        type:Number,

     },
     bio :{
        type:String
     },
      subscribed :{
         type:Boolean,
         default:false
     }
     
});

const userdetails = mongoose.model('userdetails',UserSchema);
module.exports = userdetails;
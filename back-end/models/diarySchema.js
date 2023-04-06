const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diarySchema = new Schema({
   
    userId :{
     type:mongoose.Schema.Types.ObjectId,
     require:true
    },

    commonName:{
        type:String,
    },
    otherName : { 
        type:String
    },
    scientificName :{
        type:String
    },
    watering : {
        type:String   
    },
    sunlight : {
        type:String
    },
    image: 
    {
      type:String
      
    },
    Date : {
        type:String,
        require:true
    },
    Notification : {
         type : Boolean,
         default : false
    }


});

const diary = mongoose.model('diary',diarySchema);
module.exports = diary;
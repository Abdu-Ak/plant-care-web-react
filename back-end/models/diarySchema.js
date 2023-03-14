const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diarySchema = new Schema({
   
    userId :{
     type:String,
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
        type:Date,
       default:Date.now()
    }


});

const diary = mongoose.model('diary',diarySchema);
module.exports = diary;
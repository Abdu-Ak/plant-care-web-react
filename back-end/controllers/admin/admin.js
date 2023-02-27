
require("dotenv").config();
const jwt = require('jsonwebtoken');
const userdetails = require("../../models/userSchema");


module.exports={


adminLogin :(req,res)=>{
  
    const {username , password }= req.body
 
    if (username === process.env.ADMIN_NAME && password === process.env.ADMIN_PASS ) {
        
        let payload = {
            admin : username, 
        }
        jwt.sign (
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn : 3600
            },
            (err,token)=>{
                if (err) {
                    console.log(err);
                } else {
                   res.send({logged:true,token : `Bearer ${token}`,})  
                }
            }
        )

    } else {
        res.send({err:"Wrong Details...!"})
    }

},

getUsers : (req,res)=>{
    
    userdetails.find().then((userdata)=>{
        res.send({userdata})
    })
   
 
},
blockUser :(req,res)=>{
   try {
    const id = req.params.id
    let value ;
    userdetails.findById(id).then((data)=>{
      if (data.isBlock === true) {
        value = false
      }else{
        value = true
      }
           userdetails.findByIdAndUpdate(id,{isBlock: value}).then((user)=>{
        if(user){
            res.send({succes:true})
        }
     })
    })

     
   } catch (error) {
    console.error()
   }
}

}
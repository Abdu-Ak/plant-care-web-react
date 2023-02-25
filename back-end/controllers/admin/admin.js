
require("dotenv").config();
const jwt = require('jsonwebtoken');


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

}
 


}
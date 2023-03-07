const userdetails = require("../../models/userSchema")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports={

    userSignup :(req,res)=>{
        
        let data = req.body
 
    userdetails.findOne({email : data.email}).then((userdata)=>{
        if (userdata){
            res.send({existed:true})
        }else{
            bcrypt.hash(data.password,10).then((password)=>{
                userdetails.create({
                    email : data.email,
                    password : password
                  }).then((user)=>{
                    res.send({signed:true})
                  })
            })
        }
    })
    
   
       
    
         
    },

    userLogin :(req,res)=>{
     
        const {email ,password}= req.body
       
        userdetails.findOne({email : email}).then((user)=>{
            if (user) {
                 if (user.isBlock) {
                    res.send({err:"You were Blocked by Admin..!"})
                 } else {
                   
                    bcrypt.compare(password , user.password).then((match)=>{
                        if (match) {
                           userdetails.findByIdAndUpdate({_id : user.id},{status : "online" }).then((result)=>{
                            if (result) {
                                
                                let payload = {
                                    id : user._id,
                                    email : user.email
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
                                           
                                           res.send({logged:true,token:`Bearer ${token}`})  
                                           
                                        }
                                    }
                                )
                            }
                           })
                        } else {
                            res.send({err:"Invalid password ...!"}) 
                        }
                       }) 
                 }
            } else {
                res.send({err:"Invalid email ...!"}) 
            }
        })
      
    },
    googleSign :(req,res)=>{
        const {username,email,image}=req.body
        userdetails.findOne({email:email}).then((user)=>{
            if (user) {
                if (user.isBlock) {
                    res.send({err:"You were Blocked by Admin..!"}) 
                } else {
                    userdetails.findByIdAndUpdate({_id : user.id},{status : "online"}).then((result)=>{
                        if (result) {
                            let payload = {
                                id : user._id,
                                email : user.email
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
                        }
                    })
                }
        
            } else {
                userdetails.create({
                    username : username,
                    email:email,
                    image:image,
                    status: "online"
                }).then((user)=>{
                    if (user) {
                        let payload = {
                            id : user._id,
                            email : user.email
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
                    }
                })
            }
        })
    },
   
    getProfile :(req,res)=>{
          try {
            const id = req.id 

          userdetails.findOne({_id:id}).then((user)=>{
           
          if (user) {
            res.send({user})
          }

          })
          } catch (error) {
            console.error()
          }
    },

    editProfile :(req,res)=>{
         console.log(req.body);

    },







    logOut : (req,res)=>{
        const id = req.id
        
        userdetails.updateOne({_id: id},{$set :{status:"offline"}}).then((user)=>{
           if(user){
             res.send({logout:true})
           }
        })
    }





    
}
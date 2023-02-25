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
               bcrypt.compare(password , user.password).then((match)=>{
                if (match) {
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

                } else {
                    res.send({err:"Invalid password ...!"}) 
                }
               }) 
            } else {
                res.send({err:"Invalid email ...!"}) 
            }
        })
      
    },
    googleSign :(req,res)=>{
        const {username,email,image}=req.body
        userdetails.findOne({email:email}).then((user)=>{
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
            } else {
                userdetails.create({
                    username : username,
                    email:email,
                    image:image
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
    }





    
}
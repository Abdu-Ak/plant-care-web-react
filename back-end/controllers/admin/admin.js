
require("dotenv").config();
const jwt = require('jsonwebtoken');
const userdetails = require("../../models/userSchema");
const diary = require("../../models/diarySchema");
const posts = require("../../models/postSchema");


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
                expiresIn :  86400
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
},

getDiaries : (req,res)=>{
   
    diary.aggregate([
        {
            $match : {
                
            }
        },
        {
            $lookup : {
                from : "userdetails",
                localField:"userId",
                foreignField:"_id",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            username: 1,
                            email:1
                        }
                    }
                ],
                as: "userdata"
            }
        },
        {
            $unwind : "$userdata"
        }
    ]).then((data)=>{
      res.send({data})
    })
},

deleteDiary : (req,res)=>{
     
    const {id} = req.body
 
     diary.deleteOne({_id : id}).then((data)=>{
        if (data) {
            res.send({success : true})
        }
     })
     
},


userView : async (req,res)=>{
   try {
    

    const  id  = req.params.id

     
    const data = await diary.find({userId : id})
    const user = await userdetails.findOne({_id  : id})
     
    const  diaryCount = data.length
    
     res.send( {success : true ,  user,diaryCount})


   } catch (error) {
    console.log(error);
   }


},
diaryView: async (req,res)=>{
    

    const id = req.params.id
    const data = await diary.findOne({_id: id})
    const user = await userdetails.findOne({_id:data.userId})
    console.log(data);
    console.log(user);
   
    res.send( {success : true ,  user, data})



   

},

getPosts :(req,res)=>{
    posts.aggregate([
        {
          $unwind: "$tags",
        },
        {
          $lookup: {
            from: "userdetails",
            let: { userId: "$userId" },   
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
              { $project: { _id: 0, username: 1, email: 1 , image:1 } }
            ],
            as: "user",
          },
        },
        {
          $lookup: {
            from: "userdetails",
            let: { tagId: "$tags" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$tagId"] } } },
              { $project: { _id: 0, username: 1, email: 1 } }
            ],
            as: "tagged",
          },
        },
        {
          $unwind: "$tagged",
        },
        {
          $group: {
            _id: "$_id",
            title: { $first: "$title" },
            caption: { $first: "$caption" },
            Date: { $first: "$Date" },
            image: { $first: "$image" },
            userId: { $first: "$userId" },
            tags: { $push: "$tags" },
            taggedUsers: { $push: "$tagged" },
            user: { $first: "$user" },
          }
        },
        
      ])
        .then((posts) => {
        
          res.send({
            success : true ,
            posts
          });
        });
},

deletePosts : (req,res)=>{
   const id = req.params.id 
   console.log(id);
   posts.deleteOne({_id : id }).then((data)=>{
    
    if (data ) {
       res.send({success:true})
    }
  
   })

},

}
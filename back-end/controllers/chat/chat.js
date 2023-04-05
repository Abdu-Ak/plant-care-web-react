const { default: mongoose } = require("mongoose");
const Chat = require("../../models/chatSchema");

exports.joinChat =async (id) => {
  try {
    const user = {
      userId: mongoose.Types.ObjectId(id),
    };
     Chat.find().then(async (chat) => {
      if (chat.length) {
        await Chat.updateOne(
          { _id: chat[0]._id, "users.userId": { $ne: id } },
          { $addToSet: { users: user } }
        )
      } else {
       await Chat.create({
          users: [
            {
              userId: id,
            },
          ],
        })
      }
    });
  } catch (error) {}
};

exports.leaveChat = async(id) => {
      try {
        const userid = mongoose.Types.ObjectId(id)
            Chat.find().then(async(chat)=>{
            if (chat.length) {
             await  Chat.updateOne({_id : chat[0].id ,"users.userId": userid},
               { $pull: { users: { userId: userid } } }
               )
            }
        })
        
      
      } catch (error) {
        
      }
}

exports.getUsers = async () => {
 
    try {
    return  result =  await   Chat.aggregate([
            {
              $unwind: "$users"
            },
            {
              $lookup: {
                from: "userdetails",
                localField: "users.userId",
                foreignField: "_id",
                as: "userdetails"
              }
            },
            {
              $project: {
                _id: "$users._id",
                name: "$users.name",
                email: "$users.email",
                userDetails: {
                  $arrayElemAt: ["$userdetails", 0]
                }
              }
            },
            {
                $project: {
                 email : "$userDetails.email",
                  username: "$userDetails.username",
                  image: "$userDetails.image"
                }
              },
           
          ])

    } catch (error) {
        
    }

    
     
 }     
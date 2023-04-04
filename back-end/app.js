// required modules //

const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/connection");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const chatRouter = require ('./routes/chat')
const cors = require("cors");
const http = require('http')
const socketio = require('socket.io');
const {   joinChat, leaveChat, getUsers } = require("./controllers/chat/chat");



// cors setting
app.use(cors());

// parsing the incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router setting
app.use("/admin", adminRouter);
app.use("/", userRouter);
app.use("/chat", chatRouter);
//  db
db.dbConnect();



// socket server


const server = http.createServer(app)


const io = socketio(server,{
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  },

})

io.on('connection',(Socket)=>{
    const { userId } = Socket.handshake.query;
      joinChat(userId)
    console.log(`connected to ${userId}`);
     
  
      Socket.on('getUserList',async ()=>{
        const users = await getUsers()
        Socket.emit('userList', users);
      })

   

    
    Socket.on("disconectUser",(userId)=>{
         leaveChat(userId)
          

     })
    Socket.on('disconnect',()=>{
          console.log("diconnected ");
    })
})






//server creating//

server.listen(process.env.PORT, () => {
  console.log("server started ");
});

module.exports = app;

// required modules //

const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/connection");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const cors = require("cors");
const http = require('http')
const socketio = require('socket.io');


// socket server


const server = http.createServer(app)


const io = socketio(server,{
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  },

})

io.on('connection',(Socket)=>{
    console.log("we have connection..!")


    Socket.on('join',(token)=>{
     console.log("joined");
    })

    Socket.on('disconnect', ()=>{
        console.log("user had left..!");
    })
})



// cors setting
app.use(cors());

// parsing the incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router setting
app.use("/admin", adminRouter);
app.use("/", userRouter);

//  db
db.dbConnect();

//server creating//

server.listen(process.env.PORT, () => {
  console.log("server started ");
});

module.exports = app;

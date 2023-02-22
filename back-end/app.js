// required modules //

const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/connection");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const cors = require("cors");

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

app.listen(process.env.PORT, () => {
  console.log("server started ");
});

module.exports = app;

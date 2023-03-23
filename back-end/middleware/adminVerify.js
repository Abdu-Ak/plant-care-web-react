const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  adminVerify: (req, res, next) => {
  
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).send({
        token: false,
        message: "No taken provided",
      });
    }
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

      if (decoded) {
 
        req.id = decoded
  
        next();
     
      } else {
        console.log("invalid token");
        return res.status(400).send({
          token: false,
          message: "invalid token",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        token: false,
        message: "invalid token",
      });
    }
  },
};

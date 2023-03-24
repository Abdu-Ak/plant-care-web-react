const userdetails = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  verify: (req, res, next) => {
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
        userdetails.findOne({ _id: decoded.id }).then((user) => {
          if (user.isBlock) {
            return res.status(400).send({
              blocked: true,
              message: "blocked by admin..!",
            });
          } else {
            req.id = decoded.id;
            next();
          }
        });
      } else {
        return res.status(400).send({
          token: false,
          message: "invalid token",
        });
      }
    } catch (error) {
      return res.status(400).send({
        token: false,
        message: "invalid token",
      });
    }
  },
};

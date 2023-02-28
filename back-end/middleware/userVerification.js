
const jwt = require('jsonwebtoken');

module.exports = {
  verify: (req, res, next) => {
   
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).send({
        token: false,
        message: 'No taken provided',
      });
    }
    try {
      const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
      
      if (decoded){
       console.log(decoded);
        req.id =decoded.id
        next();
      }
      else {
        return res.status(400).send({
          token: false,
          message: 'invalid token',
        });
      }
    } catch (error) {
      return res.status(400).send({
        token: false,
        message: 'invalid token',
      });
    }
  },
};
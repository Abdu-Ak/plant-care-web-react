const express = require("express");
const { getUsers } = require("../controllers/chat/chat");
const { verify } = require("../middleware/verification");
const router = express.Router();


router.get('/getUsers',verify, getUsers)





module.exports = router;
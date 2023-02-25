const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user/user")

router.post("/signup",userControllers.userSignup)
router.post("/login",userControllers.userLogin)
router.post("/googleSign",userControllers.googleSign)





module.exports = router;
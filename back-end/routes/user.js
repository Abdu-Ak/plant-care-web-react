const express = require("express");
const { verify } = require("../middleware/userVerification");
const router = express.Router();
const userControllers = require("../controllers/user/user")

router.post("/signup",userControllers.userSignup)
router.post("/login",userControllers.userLogin)
router.post("/googleSign",userControllers.googleSign)
router.get("/logout",verify,userControllers.logOut)




module.exports = router;
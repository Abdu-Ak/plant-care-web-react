const express = require("express");
const { verify } = require("../middleware/verification");
const router = express.Router();
const userControllers = require("../controllers/user/user")
const multer = require("multer");
const { storage , cloudinary } = require('../middleware/cloudinary');
const upload = multer({storage});


router.post("/signup",userControllers.userSignup)
router.post("/login",userControllers.userLogin)
router.post("/googleSign",userControllers.googleSign)
router.get("/getProfile",verify,userControllers.getProfile)
router.post('/editprofile',verify,upload.single('image'),userControllers.editProfile)
router.post('/changepass',verify,userControllers.changePass)



router.get("/logout",verify,userControllers.logOut)




module.exports = router;
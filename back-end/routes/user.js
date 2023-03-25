const express = require("express");
const { verify } = require("../middleware/verification");
const router = express.Router();
const userControllers = require("../controllers/user/user")
const uploadImage = require('../middleware/cloudinary');


router.post("/signup",userControllers.userSignup)
router.post("/login",userControllers.userLogin)
router.post("/googleSign",userControllers.googleSign)
router.get("/getProfile",verify, userControllers.getProfile)
router.post('/editprofile',verify,uploadImage,userControllers.editProfile)
router.post('/changepass',verify,userControllers.changePass)
router.post('/addDiary',verify,uploadImage,userControllers.addDiary )
router.get('/getdiary',verify,userControllers.getDiary)
router.post('/deleteDiary',verify,userControllers.deleteDiary)
router.get('/getUsers', verify ,userControllers.getUsers )
router.post('/addPost',verify,uploadImage,userControllers.addPost)

router.get("/chat",userControllers.getChat)


router.get("/logout",verify,userControllers.logOut)




module.exports = router;
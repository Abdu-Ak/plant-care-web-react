const express = require("express");
const { verify } = require("../middleware/verification");
const router = express.Router();
const userControllers = require("../controllers/user/user")
const uploadImage = require('../middleware/cloudinary');


router.post("/signup",userControllers.userSignup)
router.post("/login",userControllers.userLogin)
router.post("/googleSign",userControllers.googleSign)
router.get('/posts',userControllers.getPost)
router.get("/getProfile",verify, userControllers.getProfile)
router.post('/editprofile',verify,uploadImage,userControllers.editProfile)
router.post('/changepass',verify,userControllers.changePass)
router.post('/addDiary',verify,uploadImage,userControllers.addDiary )
router.get('/getdiary',verify,userControllers.getDiary)
router.post('/deleteDiary',verify,userControllers.deleteDiary)
router.get('/getUsers', verify ,userControllers.getUsers )
router.post('/addPost',verify,uploadImage,userControllers.addPost)
router.get('/userPosts',verify,userControllers.userPosts)
router.get('/deletePost/:id',verify,userControllers.postDelete)
router.get('/getPlans',verify,userControllers.getPlans)
router.get('/subscribe/:id',verify,userControllers.getSubscribe)
router.post('/verifyPayment',verify, userControllers.verifyPayment )
router.get('/checkSubsciption',verify,userControllers.checkSubscribe)
router.post('/postCalender',verify , userControllers.postCalender)
router.get('/getSchedule/:id',verify,userControllers.getSchedule)
router.get('/getNotification',verify,userControllers.getNotification)
router.get('/deleteMessage/:id',verify,userControllers.deleteMessage)
router.get('/getcount',verify,userControllers.getMesgCount)

router.get("/chat",userControllers.getChat)


router.get("/logout",verify,userControllers.logOut)




module.exports = router;
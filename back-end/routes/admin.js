const express = require("express");
const router = express.Router();
const adminControllers =require("../controllers/admin/admin");
const { adminVerify } = require("../middleware/adminVerify");

  
router.post("/login",adminControllers.adminLogin)
router.get("/getusers",adminVerify,adminControllers.getUsers)
router.get("/blockuser/:id",adminVerify,adminControllers.blockUser)
router.get("/diaries",adminVerify,adminControllers.getDiaries)
router.post('/deleteDiary',adminVerify,adminControllers.deleteDiary)
router.get('/userview/:id',adminVerify,adminControllers.userView)
router.get('/diaryview/:id',adminVerify,adminControllers.diaryView)
router.get('/posts' , adminVerify,adminControllers.getPosts )
router.get('/deletePost/:id',adminVerify,adminControllers.deletePosts)
router.post('/addPost',adminVerify,adminControllers.addPlan)
router.get('/getPlans' , adminVerify,adminControllers.getPlans )
router.get('/getPlan/:id' , adminVerify,adminControllers.getSinglePlan )
router.post('/editPost',adminVerify,adminControllers.editPlan)
router.get('/deletePlan/:id',adminVerify,adminControllers.deletePlan)

router.get('/getDashboard',adminVerify,adminControllers.getDashboard)


module.exports = router; 

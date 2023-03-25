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

module.exports = router; 
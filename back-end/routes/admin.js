const express = require("express");
const router = express.Router();
const adminControllers =require("../controllers/admin/admin");
const { verify } = require("../middleware/verification");


router.post("/login",adminControllers.adminLogin)
router.get("/getusers",verify,adminControllers.getUsers)
router.get("/blockuser/:id",verify,adminControllers.blockUser)
router.get("/diaries",verify,adminControllers.getDiaries)
router.post('/deleteDiary',verify,adminControllers.deleteDiary)

module.exports = router;
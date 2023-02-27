const express = require("express");
const router = express.Router();
const adminControllers =require("../controllers/admin/admin");
const { verify } = require("../middleware/userVerification");


router.post("/login",adminControllers.adminLogin)
router.get("/getusers",verify,adminControllers.getUsers)
router.get("/blockuser/:id",verify,adminControllers.blockUser)



module.exports = router;
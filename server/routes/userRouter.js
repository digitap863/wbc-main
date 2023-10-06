const express = require("express");
const { loginController, addMember, fetchInvestors } = require("../controllers/Controller");
const router = express.Router();
const multer = require('multer');
const upload = require("../middlewares/multer");


//login
router.post('/login',loginController)
router.post("/add-member", upload.fields([{ name: 'idImage' }, { name: 'profileImage' }]),addMember);
router.get('/get-investors',fetchInvestors);
module.exports = router;
    
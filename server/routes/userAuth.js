const express = require("express");
/*
const requireAuth = require("")
*/
const {
    loginUser,
    registerUser
} = require("../controllers/authController");

const router = express.Router();

// router.use(requrieAuth);

// Registration paths
router.post("/register", registerUser);

// Login paths
router.post("/login", loginUser);

module.exports = router;
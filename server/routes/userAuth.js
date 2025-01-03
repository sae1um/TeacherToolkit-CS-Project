const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");

const router = express.Router();

// Registration paths
router.post("/register", registerUser);

// Login paths
router.post("/login", loginUser);

module.exports = router;
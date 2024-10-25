const express = require("express");
const {
    loginUser,
    registerUser
} = require("../controllers/authController");

const router = express.Router();

// Registration pahts
router.post("/resgiter/:role", registerUser);

// Login paths
router.get("/login/:role", loginUser);

module.exports = router;
const express = require("express");
const {
    loginUser,
    registerUser
} = require("../controllers/authController");

const router = express.Router();

// Registration pahts
router.post("/register", registerUser);
// router.post("/resgiter/:role", registerUser);

// Login paths
router.get("/login/:role", loginUser);

router.get("/test:role:code", (req, res) => {
    const {role, code} = req.params;
    res.json("test working")
})

module.exports = router;
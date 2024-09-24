const express = require("express");
const {
    loginTeacher,
    loginStudent,
    registerTeacher,
    registerStudent
} = require("../controllers/authController");

const router = express.router();

// Registration pahts
router.post("/resgiter/teacher", registerTeacher);
router.post("/resgister/student", registerStudent);

// Login paths
router.get("/login/teacher", loginTeacher)
router.get("/login/student", loginStudent)

module.exports = router;
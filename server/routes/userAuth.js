const express = require("express");
const {
    loginTeacher,
    loginStudent,
    registerTeacher,
    registerStudent
} = require("../controllers/onboarding");

const router = express.router();

router.post("/resgiter/teacher", registerTeacher);
router.post("/resgister/student", registerStudent);

router.get("/login/teacher", loginTeacher)
router.get("/login/student", loginStudent)

module.exports = router;
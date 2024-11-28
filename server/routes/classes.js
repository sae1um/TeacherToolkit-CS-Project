const express = require("express");
const router = express();
const { getClasses, createNewClass, updateClass, getClassDetails, deleteClass } = require("../controllers/classControllers");
// ADD PROTECT MIDDLEWARE

// All routes handling classes functions
router.post("/create", createNewClass);

router.get("/get-all", getClasses);

router.get("/get/:id", getClassDetails)

router.put("/change/:id", updateClass);

router.delete("/delete/:id", deleteClass);

module.exports = router;
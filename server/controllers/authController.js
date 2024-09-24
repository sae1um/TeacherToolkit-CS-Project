const mongoose = require("mongoose");
const Teacher = require("../models/teacherSchema");
const Student = require("../models/studentSchema");

// All the handlers for authentication (login and registration)
// Either creating a user in Database or checking

//Login Teacher handler
const loginTeacher = async(req, res) => {

}
//Login Student handler
const loginStudent = async(req, res) => {

}

//Resgiter Teacher handler
const registerTeacher = async(req, res) => {

}
//Register Student handler
const registerStudent = async(req, res) => {

}

module.exports = {
    loginTeacher,
    loginStudent,
    registerTeacher,
    registerStudent
}
const mongoose = require("mongoose");
const Class = require("../models/classSchema")

const getClasses = async (req, res) => {

    try{
        
    }catch(err){}
}

const getClassDetails = async (req, res) => {
    const { teacherId } = req.query;
    try{
        const classes = await Class.find({
            teacher: teacherId
        })
    }catch(err){}
}

const createNewClass = async (req, res) => {
    try{
        // gets the data from the body of the request
        const {className, yearGroup, students} = req.body;

        // Check if req is from a teacher account
        if(req.user.role !== "teacher"){
            return res.status(403).json({error: "Access Denied. Only teachers can create classes"});
        }

        // Create the new class in the database
        const newClass = await Class.create({
            className,
            teacherId: req.user.uid,
            yearGroup,
            students
        })

        res.status(201).json({mssg: "New class created", newClass});
    }catch(err){
        res.status(400).json({err: err.message});
    }
}

const updateClass = async (req, res) => {

}

const deleteClass = async (req, res) => {

}

module.exports = {
    getClasses,
    createNewClass,
    getClassDetails,
    updateClass,
    deleteClass
}
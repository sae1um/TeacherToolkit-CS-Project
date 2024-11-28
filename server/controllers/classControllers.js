const mongoose = require("mongoose");
const Class = require("../models/classSchema")

const getClasses = async (req, res) => {

    try{
        
    }catch(err){}
}

const getClassDetails = async (req, res) => {

}

const createNewClass = async (req, res) => {
    try{
        // gets the data from the body of the request
        const {name, yearGroup, students} = req.body;

        // Check if req is from a teacher account
        if(req.user.role !== "teacher"){
            return res.status(403).json({error: "Access Denied. Only teachers can create classes"});
        }

        // Create the new class in the database
        const newClass = await Class.create({
            name,
            teacherId: req.user.uid,
            yearGroup,
            students
        })

        res.status(201).json(newClass);
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
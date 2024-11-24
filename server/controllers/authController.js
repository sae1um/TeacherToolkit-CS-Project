const mongoose = require("mongoose");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: "3d"});
}

//Login specified user handler
const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password);
        const { firstname, lastname } = user;
        const token = createToken(user._id);
        res.status(200).json({status: "User found", email, token, firstname, lastname});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

//Resgiter Teacher handler
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password, role, verificationCode } = req.body;
    try{
        const user = await User.register(email, password, role, verificationCode, firstname, lastname);
        
        //create an auth token
        const token = createToken(user._id);
        // Response
        res.status(200).json({mssg: "User created successfully", email, token, firstname, lastname, role});

    }catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = {
    loginUser,
    registerUser
}
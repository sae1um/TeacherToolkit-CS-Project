const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

// Schema for a User to be added to Database
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Only allow teacher or student
    role: {
        type: String,
        enum: ["teacher", "student"],
        required: true
    }
})

// Register method
userSchema.statics.register = async function(email, password, role, verificationCode, firstname, lastname ){
    
    // Extra server side validation
    if(!email || !password || !role || !verificationCode || !firstname || !lastname){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough")
    }
    
    const exists = await this.findOne({ email });

    // Check if email already in db
    if(exists){
        throw Error("Email already in use");
    }
    
    const codesList = await mongoose.connection.collection("verification_codes").findOne({});

    if(!codesList){
        throw Error("No codes found in db");
    }
    
    // If teacher then set true else set false
    const isTeacher = role === "teacher";
    // Check teacher codes if true, check students if false
    const validCodes = isTeacher ? codesList.teacher_codes : codesList.student_codes;

    if(!validCodes.includes(verificationCode)){
        throw Error("Invalid Verification code");
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    // Create new user
    const user = await this.create({ firstname, lastname, email, password: hash, role});

    // Sends user obj back to API
    return user;
}

// Login method
userSchema.statics.login = async function(email, password, role, verificationCode, firstname, lastname){
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    // Check if email in db
    const user = await this.findOne({email});
    if(!user){
        throw Error("Incorrect email");
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Incorrect password");
    }

    return user;
}
module.exports = mongoose.model("User", userSchema);
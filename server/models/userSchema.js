const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

// Schema for a User to be added to Database
const userSchema = new Schema({
    name: {
        type: String,
        // required: true
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
    profileImage: {
        type: String
    },
    classes: {
        type: Object
    },
    // Teachers would have true
    teacher: {
        type: Boolean,
        // required: true
    }
})

// Register method
userSchema.statics.register = async function(email, password){
    const exists = await this.findOne({ email });
    
    // Extra server side validation
    if(!email || !password){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough")
    }

    // Check if email already in db
    if(exists){
        throw Error("Email already is use");
    }
    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    // Create new user
    const user = await this.create({ email, password: hash});

    // Sends user obj back to API
    return user;
}

// Login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error("All fields must be filled")
    }
}
module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for a User to be added to Database
const userhchema = new Schema({
    name: {
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
    profileImage: {
        type: String,
        required: true
    },
    classes: {
        type: Object
    },
    // Teachers would have true
    teacher: {
        type: Boolean,
        required: true
    }
})

// Static register method
userScema.statics.register = async (email, password) => {
    const exists = await User.find
}

module.exports = mongoose.model("User", userhchema);
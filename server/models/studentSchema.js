const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentShchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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
    // Students would have this false
    role: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Student", studentShchema);
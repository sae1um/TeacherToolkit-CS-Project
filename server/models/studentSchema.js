const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Schema for setting the database types and data names for students document (similar to SQL table)
const studentSchema = new Schema({
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

module.exports = mongoose.model("Student", studentSchema);
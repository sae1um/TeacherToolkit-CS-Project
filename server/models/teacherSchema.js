const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherShchema = new Schema({
    title: {
        type: String,
        required: true
    },
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
    // Teachers would have true
    role: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Teacher", teacherShchema);
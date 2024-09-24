const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classShchema = new Schema({
    class: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    students: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Class", classShchema);
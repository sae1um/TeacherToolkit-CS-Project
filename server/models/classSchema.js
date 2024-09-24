const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for setting the database types and data names
const classSchema = new Schema({
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

module.exports = mongoose.model("Class", classSchema);
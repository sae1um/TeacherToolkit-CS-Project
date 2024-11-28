const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for setting the database types and data names
const classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    yearGroup:{
        type: String,
        enum: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 10", "Year 11", "Year 12", "Year 13", "Other"],
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Class", classSchema);
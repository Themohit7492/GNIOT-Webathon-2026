const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
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

    // 🎓 Teaching Info
    branch: {
        type: String,   // CSE, IT, etc.
        required: true
    },

    course: {
        type: String,   // e.g. "Web Dev", "DSA"
        required: true
    },

    // 📝 Assignments Created by Instructor
    assignments: [
        {
            title: {
                type: String,
                required: true
            },

            description: String,

            dueDate: {
                type: Date,
                required: true
            },

            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model("Instructor", instructorSchema);
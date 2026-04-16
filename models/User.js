const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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

    // 🎓 Academic Fields
    branch: {
        type: String,   // e.g. CSE, IT, ECE
        required: true
    },

    course: {
        type: String    // e.g. DSA, Web Dev
    },

    // 🏆 Gamification
    points: {
        type: Number,
        default: 0
    },

    streak: {
        type: Number,
        default: 0
    },

    badges: [
        {
            type: String   // e.g. "Beginner", "Top Performer"
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
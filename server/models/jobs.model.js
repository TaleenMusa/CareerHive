const mongoose = require("mongoose");


const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be 2 characters or longer"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be 2 characters or longer"]
    },
    deadline: {
        type: Date,
        required: [true, "Date is required"],
    },
    requirements: {
        type: String,
        required: [true, "Requirements is required"],
        minlength: [2, "Requirements must be 2 characters or longer"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Locations',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

}, { timestamps: true });

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
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
    // location: {
    //     type: String,
    //     required: [true, "Location is required"],
    //     minlength: [2, "Location must be 2 characters or longer"]
    // },
    // contact: {
    //     type: String,
    //     required: [true, "Contact is required"],
    //     minlength: [2, "Contact must be 2 characters or longer"]
    // },
    category: {
        type: String,
        required: [true, "Category is required"],
        minlength: [2, "Category must be 2 characters or longer"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        minlength: [2, "Image must be 2 characters or longer"]
    },
    deadline: {
        type: Date,
        required: [true, "Date is required"],
    },
    company: {
        type: String,
        required: [true, "Company is required"],
        minlength: [2, "Company must be 2 characters or longer"]
    },
    requirements: {
        type: String,
        required: [true, "Requirements is required"],
        minlength: [2, "Requirements must be 2 characters or longer"]
    },
}, { timestamps: true });

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;






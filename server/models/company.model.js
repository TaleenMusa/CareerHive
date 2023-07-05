const mongoose = require("mongoose");


const CompanySchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be 2 characters or longer"]
    },
    logo: {
        type: String,
        minlength: [2, "Logo must be 2 characters or longer"]
    },
    social: {
        type: [String],
    },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { timestamps: true });

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;






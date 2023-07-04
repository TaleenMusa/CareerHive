const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    Category: {
        type: String,
        required: [true, "Category is required"],
        minlength: [2, "Category must be 2 characters or longer"]
    },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
    
}, { timestamps: true });

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;






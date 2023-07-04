const mongoose = require("mongoose");


const LocationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [2, "Location must be 2 characters or longer"]
    },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
    
}, { timestamps: true });

const Location = mongoose.model("Locations", LocationSchema);

module.exports = Location;






const mongoose = require("mongoose")

// User Schema Declaration
const teamSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    github : {
        type: String,
        required: true,
        unique: true
    },
    linkedin : {
        type: String,
        required: true,
        unique: true
    },
})

//creating new collection in db
const Team = new mongoose.model("Team", teamSchema);
module.exports = Team;
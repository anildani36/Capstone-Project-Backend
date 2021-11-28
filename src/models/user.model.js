const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

// User Schema Declaration
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
})

//bcrypt algorithm for hashing password while registration
userSchema.pre("save", async function(next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

//creating new collection in db
const User = new mongoose.model("User", userSchema)
module.exports = User
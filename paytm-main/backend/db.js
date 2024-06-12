const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://Paytm:paytm123@sudhanshu-ranjan.imrttev.mongodb.net/");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User", userSchema);
module.exports =(
    User
);



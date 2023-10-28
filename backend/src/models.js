const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: String,phone:String, name: String, passout:String, gender:String, collegename: String,degree: String,department:String, location: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

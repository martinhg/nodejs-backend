const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    password: { type: String, select: false },
    email: { type: String, unique: true, lowercase: true },
    signupDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('User', userSchema);
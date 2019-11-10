const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymSchema = Schema({
    name: { type: String },
    owner: { type: String },
    email: { type: String, lowercase: true },
    phoneNumber: { type: Number },
    address: { type: String },
    status: { type: String },
    customers: { type: Number },
    signupDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Gym', gymSchema);
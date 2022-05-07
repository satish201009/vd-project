const mongoose = require('mongoose');

const { Schema } = mongoose;
const userModel = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    mobile: { type: String, default: '' }


})

const userDb = mongoose.model('user', userModel);
module.exports = userDb;
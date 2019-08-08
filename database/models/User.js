const randomString = require('randomstring');

const mongoose = require('mongoose');

const token = randomString.generate();

const UsersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    confirmed: {
        type: Boolean,
        default:false
    },
    userToken:{
        type: String,
        default: token
    }
});



const User = mongoose.model('User', UsersSchema);
module.exports = User;
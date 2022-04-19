const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique:true
    },
    Phone:{
        type: String,
        required: true,
        unique:true
    },
    Address:{
        type: String,
        required:true   
    },
    Zip_Code: {
        type: String,
        required: true
    },
    Password:{
        type: String,
        required:true
    }
});


const Users = mongoose.model('User', UserSchema);

module.exports = Users;
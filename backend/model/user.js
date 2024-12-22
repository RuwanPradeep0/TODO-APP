import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName :{
        type : String,
        require :true
    },

    lastName :{
        type : String,
        require :true
    },

    email :{
        type : String,
        require :true,
        unique : true
    },

    password :{
        type : String,
        require :true
    },

    isVerified:{
        type : Boolean,
        default: false
    },

    resetPasswordToken : String,
    resetPasswordExpiresAt : Date,
    verificationToken : String,
    verificationTokenExpiresAt : Date,
})

export const User = mongoose.model('User' , userSchema);
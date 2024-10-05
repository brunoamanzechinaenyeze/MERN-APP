import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPassWordToken: String,
    resetPassWordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date
}, {timestamps: true})

export const User = mongoose.model('user', userSchema); //We are exporting the the DB to where ever we want it

//If you are a beginner let me explain the code for you
//If you are familiar with Class in Javascript OOP
//you now if we want to use the class we can say new Class, that's what we did here

//So now let's pass the credentials for the users to fill in

//In the above code we have the, email, password, name, lastLogin, isVerified and the rest of them that is not contained in an Object

//Now why is that some credentials are represented in an object and some are not???
//It is because the one with the object contains more than property in it
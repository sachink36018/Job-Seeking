import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please Provide Your Name!"],
        minLength: [3, "Name must contain at least 3 character!"],
        maxLenght: [30, "Name cannot exceed 30 character"],
    },
    email: {
        type: String,
        reruire: [true, "Please provide your email!"],
        validate: [validator.isEmail, "Please provide a valid email!"],
    },
    phone: {
        type: Number,
        required: [true, "please provide your phone number"],
    },
    password: {
        type: String,
        require:[true, "Please provide your password"],
        minLength: [8, "Name must contain at least 8 character!"],
        maxLenght: [30, "Name cannot exceed 30 character"],
        select: true,
    },
    role: {
        type: String,
        required:[true, "please provide your role"],
        enum: ["Job Seeker", "Employer"],
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

//Hashing the Password
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//compairing password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//generating jwt token for authorization
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("User", userSchema);
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job title must contain at least 3 characters!"],
        maxLength: [50, "Job title cannot exceed 50 character"],
    },
    description:{
        type: String,
        required: [true, "Please provide job description"],
        minLength: [50, "Job description must contain at least 50 chatacter!"],
        maxLength: [1000, "Job description cannot exceed 1000 character!"],
    },
    category:{
        type: String,
        required: [true, "Job category is required!"],
    },
    country:{
        type: String,
        required: [true, "Job Country is required!"],
    },
    city:{
        type: String,
        required: [true, "Job City is required!"],
    },
    location:{
        type: String,
        required: [true, "Please provide exact location!"],
        minLength: [10, "Job location must contain at least 10 chatacter!"],
    },
    salaryFrom:{
        type: Number,
    },
    salaryTo:{
        type: Number,
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);
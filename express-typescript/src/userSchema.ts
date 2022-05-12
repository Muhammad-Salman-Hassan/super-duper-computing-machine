import mongoose, { Schema } from "mongoose";

export const userSchema:Object= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})
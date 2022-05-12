import mongoose, { Schema } from "mongoose";

interface IUser{
    name:string;
    username:string;
}

export const userSchema= new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})
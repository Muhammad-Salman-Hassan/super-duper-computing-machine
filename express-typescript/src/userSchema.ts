import mongoose, { Schema } from "mongoose";

interface IUser{
    name:string;
    username:string;
}

export const userSchema= new mongoose.Schema<IUser>({
    name:{
        type:String,
        
    },
    username:{
        type:String,
        
    }
})

export const User=mongoose.model("USER",userSchema)
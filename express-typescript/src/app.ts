import express,{Application,Request,Response} from 'express';
import mongoose from 'mongoose';
const app:Application=express()
const port:Number=8000
const url:string="sa"

mongoose.connect(url,(err:any)=>{
    if(err){
        return err
    }else{
        console.log("Successfull")
    }
})
app.get('/',(req:Request,res:Response)=>{
    res.send("hello")
    
})

app.listen(port)
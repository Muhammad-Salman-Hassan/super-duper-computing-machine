import bodyParser from 'body-parser';
import express,{Application,Request,Response} from 'express';
import mongoose from 'mongoose';
import * as ApiMethods from './ApiMethod'
const app:Application=express()
const port:Number=8000
const url:string="mongodb+srv://root:salman@cluster0.rvau9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(bodyParser.json())
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
app.get('/users',ApiMethods.getUser)
app.get('/users/:id',ApiMethods.getUserbyid)
app.post('/user',ApiMethods.addUser)
app.put('/user/:id',ApiMethods.updateUser)
app.delete('/user/:id',ApiMethods.deleteUser)

app.listen(port)
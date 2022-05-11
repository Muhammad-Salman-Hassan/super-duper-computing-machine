const express=require('express')
const app=express()
const port=4000
const path=require('path')

app.get('/',(req,res)=>{
    res.send("Helloworld")
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/pages/about.html'))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'/pages/contact.html'))
})
app.get('/User',(req,res)=>{
    res.sendFile(path.join(__dirname,'/pages/about.html'))
})
app.get('/Dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'/pages/dashboard.html'))
})
app.listen(port)
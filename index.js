const https = require("http");
const fs=require('fs')

const server = https.createServer((req, res) => {
  
  res.setHeader("Content-Type","text/html")

  fs.readFile('./index.html',(err,data)=>{
    if(err){
      console.log(err)
      res.end()
    }else{
      res.write(data)
      res.end()
    }
  })
});
server.listen(4000);

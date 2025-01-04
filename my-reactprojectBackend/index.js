var express = require ('express')
var app = express()
var path = require('path')
var mdb = require('mongoose')
const PORT = 3001

mdb.connect("mongodb://localhost:27017/").then(()=>{
    console.log("MongoDb Connection Successfull")
}).catch(()=>{
    console.log("Check your Connection String")
})

app.listen(PORT,()=>{
    console.log(`Backend server Started\n Url: http://localhost:${PORT}`)
})
app.get('/',(req,res)=>{
    console.log(__dirname)
    res.send("Welcom to Backend Server")
})


app.get('/json',(req,res)=>{
    res.json({server:"Welcome to backend",url:"localhost",port:PORT})
})

app.get('/static',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'index.html'))
})
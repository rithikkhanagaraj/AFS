var express = require('express');
var path = require('path')
var app = express()
var mdb =require('mongoose')
var cors =require('cors')
var User =require('./models/users')
var env =require('dotenv')
env.config()


const PORT = 3001;

app.use(express.json())
app.use(cors())
mdb.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongodb Connection Successful")
}).catch(()=>{
    console.log("check your connection string")
})
app.get('/',(req,res)=>{
    res.json("Welcome to Backend server")
})
  
app.get('/json',(req,res)=>{
    res.json({server:"welcome to Backend",url:"localhost",port:PORT})
})

app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/signup',(req,res)=>{
    var {firstName,lastName,email,password}= req.body
    console.log(firstName,lastName,email,password);
    try{
        var newUser= new User(req.body)
        newUser.save()
        console.log("User Added Successfully")
        res.send("User Added Successfully")
    }
    catch(err){
        console.log(err) 
    }
    
})
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignupRecords=await User.find()
        res.json(allSignupRecords)
        console.log("All data are Feteched")
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

app.post('/login',async(req,res)=>{
    var{email,password}=req.body
    try{
        var existingUser = await User.findOne({email:email})
        console.log(existingUser)
        if(existingUser){
            if(existingUser.password!==password){
                res.json({message:"Invalid Credentials",isLoggedIn:false})
            }
            else{
                res.json({message:"Login Successfull",isLoggedIn:true})
            }
            res.json({message:"Login Successfull",isLoggedIn:true})
            
        }
        else{
        res.json({message:"Login failed",isLoggedIn:false})
        }
    }
    catch(err){
        console.log(err)
    }
})
app.listen(PORT,()=>{
    console.log("Backend Server Started")
    console.log(`Server is running in ${PORT}`)
})
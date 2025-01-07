var mdb = require('mongoose')
var userSchema = mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})

var user_schema = mdb.model("users",userSchema)
module.exports = user_schema
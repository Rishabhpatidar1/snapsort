
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb+srv://Rishi123:Rishi123@cluster0.yzifpqz.mongodb.net/snapsort?retryWrites=true&w=majority").then(function(){
  console.log("connected")
})

const userSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
})

userSchema.plugin(plm);

module.exports = mongoose.model("user" , userSchema);
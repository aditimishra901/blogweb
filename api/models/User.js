const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   profilepic:{
      type:String,
      default:"",
   },
   username:{
    type:String,
    required:true,
    unique:true,
 },
 email:{
  type:String,
  required:true,
  unique:true,

 },
 password:{
  type:String,
  required:true,
  
 }
 

},
{timestamps:true}
);


module.exports=mongoose.model("User", UserSchema);
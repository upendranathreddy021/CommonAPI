let mongoose=require('mongoose')

let Userdet=new mongoose.Schema({
    "_id":String,"uid":String,"name":String,"phno":Number,"dob":String,"password":String,
    "role":{"type":String,default:"user"}
})
module.exports=mongoose.model("userdetails",Userdet)
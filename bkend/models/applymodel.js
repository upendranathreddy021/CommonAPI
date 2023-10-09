let mongoose=require('mongoose')
let applysch=new mongoose.Schema(
    {
       "_id":String,"name":String,"contact":Number,"skills":String,
       "role":String,"uid":String,"email":String,"exp":Number, 
    }
)
module.exports=mongoose.model("apply",applysch);
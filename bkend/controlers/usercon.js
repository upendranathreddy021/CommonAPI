let Userdet=require('../models/usermodel')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
let {v4:uuidv4}=require('uuid')

let Register= async(req,res)=>{
let check=await Userdet.findById({"_id":req.body._id});
if(check){
    res.send("email already exists")

}
else{
    let Hashcode=await bcrypt.hash(req.body.password,10)
    let data={...req.body, "password":Hashcode,"uid":uuidv4()}
    let DetailsSave=new Userdet(data)
    try{
    DetailsSave.save().then(()=>{
        res.send("Registration successfull")
    })
}
catch(err){
console.log(err)
}

}
}
//login code for backend

let Login=async(req,res)=>{

let Checkl=await Userdet.findById({"_id":req.body._id})

if(Checkl){
    let Checkpassword= await bcrypt.compare(req.body.password,Checkl.password)
console.log(Checkpassword)
    if(Checkpassword){
        
        let token=jwt.sign({"_id":req.body._id},"abcd")
        res.json({"token":token,"_id":Checkl._id,"uid":Checkl.uid,"name":Checkl.name,
    "phno":Checkl.phno,"dob":Checkl.dob,"role":Checkl.role})
    }
    else{
        res.send("invalid password")
    }
}
else{
    res.send("email doesnt exist")

    }}

    //islogin = to make all routes as secure
let Islogin=(req,res,next)=>{

    try{
        jwt.verify(req.headers.authorization,"abcd")
        next()

    }
    catch(err){
        res.send("invalid token")
    }
}
module.exports={Register,Login,Islogin}
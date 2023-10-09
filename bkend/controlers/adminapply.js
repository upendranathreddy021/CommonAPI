let applymodel=require('../models/applymodel')
let usermodel=require('../models/usermodel')
let adminapply= async(req,res)=>{
let data=await applymodel.find()
if(data.length==0){
    res.send("no one applied")
}
else{
    res.json(data)
}
}
let regdet=async(req,res)=>{

let regdata=await usermodel.find()
if(regdata.length==0){
    res.send("empty")
}
else{
    res.json(regdata)
}

}

module.exports={adminapply,regdet}
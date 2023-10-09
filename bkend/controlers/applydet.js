let mongoose=require('mongoose')
let {v4:uuidv4}=require('uuid')

//exports the apply model from models
let applymodel=require('../models/applymodel')

let applydetail= async(req,res)=>{
    //saving apply details into applymodel
    let applydata={...req.body,"_id":uuidv4()}
    let det=new applymodel(applydata)
    //saving the data
    try{
    await det.save()
        res.send("details saved")
    
}
    catch(err){
        console.log(err)
    }

}
let getapply= async(req,res)=>{
    let data=await applymodel.find({"uid":req.params.uid})
    if(data.length!=0){
res.json(data)
    }
    else{
        res.send("empty")
    }
}


module.exports={applydetail,getapply}
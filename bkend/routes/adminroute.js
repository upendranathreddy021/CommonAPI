let {adminapply,regdet}=require("../controlers/adminapply")
let express=require('express')
const {Islogin}=require('../controlers/usercon')

let adminr=express.Router()
adminr.get("/apply",Islogin,adminapply)
adminr.get("/regdet",Islogin,regdet)
module.exports=adminr

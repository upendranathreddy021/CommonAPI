const {applydetail,getapply}=require('../controlers/applydet')
const {Islogin}=require('../controlers/usercon')
const express=require('express');
let applyr=new express.Router()
applyr.post("/apply",Islogin,applydetail)
applyr.get("/getapply/:uid",Islogin,getapply)
module.exports=applyr
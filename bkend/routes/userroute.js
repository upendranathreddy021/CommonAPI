let {Register,Login}=require('../controlers/usercon')
let express=require('express')
let route=new express.Router()
route.post("/register",Register)
route.post("/login",Login)

module.exports=route
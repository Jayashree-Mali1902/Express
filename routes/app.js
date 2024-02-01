const express=require('express')
const router=express.Router()
const about=require('../services/app')
//console.log(about)
router.get('/',about)
module.exports=router

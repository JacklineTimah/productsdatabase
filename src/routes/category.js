const express= require('express')
const router= express.Router()
const {newCategory}= require('../controllers/category.controllers')


router.post('/create', newCategory)

module.exports=router
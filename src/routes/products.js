const express=require('express');
const {newProduct, retrieveAllProducts}=require('../controllers/products.controller');
const {verifyToken}=require('../middlewares/auth.middleware');
const {fetchProducts}=require('../services/products.service')



const router= express.Router()


router.post('/newProduct',verifyToken, newProduct);
router.get('/products', retrieveAllProducts);


module.exports=router

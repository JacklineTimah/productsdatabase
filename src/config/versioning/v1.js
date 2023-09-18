const express = require('express');
const api = express.Router()
const users = require('../../routes/user');
const  newCategory  = require('../../routes/category');
const newProduct= require('../../routes/products')
const retrieveAllProducts = require('../../routes/products');
const { fetchProducts } = require('../../services/products.service');

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to My Books App API'
}))

api.use("/user", users);
api.use("/category",newCategory);
api.use("/product",newProduct);
api.use("/all", retrieveAllProducts)


module.exports = api
"use strict";

var express = require('express');

var api = express.Router();

var users = require('../../routes/user');

var newCategory = require('../../routes/category');

var newProduct = require('../../routes/products');

var retrieveAllProducts = require('../../routes/products');

var _require = require('../../services/products.service'),
    fetchProducts = _require.fetchProducts;

api.get("/", function (req, res) {
  return res.status(200).json({
    status: 'success',
    message: 'Welcome to My Books App API'
  });
});
api.use("/user", users);
api.use("/category", newCategory);
api.use("/product", newProduct);
api.use("/all", retrieveAllProducts);
module.exports = api;
//# sourceMappingURL=v1.dev.js.map

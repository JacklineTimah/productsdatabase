"use strict";

var express = require('express');

var _require = require('../controllers/products.controller'),
    newProduct = _require.newProduct,
    retrieveAllProducts = _require.retrieveAllProducts;

var _require2 = require('../middlewares/auth.middleware'),
    verifyToken = _require2.verifyToken;

var _require3 = require('../services/products.service'),
    fetchProducts = _require3.fetchProducts;

var router = express.Router();
router.post('/newProduct', verifyToken, newProduct);
router.get('/products', retrieveAllProducts);
module.exports = router;
//# sourceMappingURL=products.dev.js.map

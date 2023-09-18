"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/category.controllers'),
    newCategory = _require.newCategory;

router.post('/create', newCategory);
module.exports = router;
//# sourceMappingURL=category.dev.js.map

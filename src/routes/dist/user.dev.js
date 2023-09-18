"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/user.controller'),
    createUser = _require.createUser,
    signInUser = _require.signInUser;

router.post('/signup', createUser);
router.post('/login', signInUser);
module.exports = router;
//# sourceMappingURL=user.dev.js.map

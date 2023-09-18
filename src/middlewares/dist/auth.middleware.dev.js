"use strict";

var jwt = require('jsonwebtoken');

var config = require('../config/env/index');

var _require = require('../config/database.config'),
    runQuery = _require.runQuery;

var _require2 = require('../queries/user'),
    findUserByEmail = _require2.findUserByEmail;

var verifyToken = function verifyToken(req, res, next) {
  var token, user;
  return regeneratorRuntime.async(function verifyToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.headers['authorization'];
          _context.prev = 1;

          if (token) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: 'error',
            code: 400,
            message: 'Please supply token',
            data: null
          }));

        case 4:
          user = jwt.verify(token, config.JWT_SECRET_KEY);

          if (user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: 'error',
            code: 401,
            message: 'You are not authorized to make this request!',
            data: null
          }));

        case 7:
          req.user = user;
          return _context.abrupt("return", next());

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", next(_context.t0));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

module.exports = {
  verifyToken: verifyToken
};
//# sourceMappingURL=auth.middleware.dev.js.map

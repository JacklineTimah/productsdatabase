"use strict";

var UserService = require('../services/user.service');
/**
 * Controller creating a new user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns JSON object as response data
 */


var createUser = function createUser(req, res, next) {
  var response;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(UserService.createUser(req.body));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", res.status(response.code).json(response));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};
/**
 * Controller for login user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */


var signInUser = function signInUser(req, res, next) {
  var result;
  return regeneratorRuntime.async(function signInUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(UserService.loginUser(req.body));

        case 3:
          result = _context2.sent;
          return _context2.abrupt("return", res.status(result.code).json(result));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = {
  createUser: createUser,
  signInUser: signInUser
};
//# sourceMappingURL=user.controller.dev.js.map

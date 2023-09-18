"use strict";

var _require = require('../queries/user'),
    addUser = _require.addUser,
    findUserByEmail = _require.findUserByEmail;

var _require2 = require('../config/database.config'),
    runQuery = _require2.runQuery;

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var config = require('../config/env/index');

var createUser = function createUser(body) {
  var username, email, password, userExist, saltRounds, hash, response;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = body.username, email = body.email, password = body.password; // Debug: Check the value of 'password'

          console.log('Password:', password); // Check if user already exists in the database

          _context.next = 4;
          return regeneratorRuntime.awrap(runQuery(findUserByEmail, [email]));

        case 4:
          userExist = _context.sent;

          if (!(userExist.length > 0)) {
            _context.next = 7;
            break;
          }

          throw {
            code: 409,
            message: 'User already exists',
            data: null,
            status: 'error'
          };

        case 7:
          // Encrypt password
          saltRounds = 12; // Debug: Check the value of 'saltRounds'

          console.log('Salt Rounds:', saltRounds);
          hash = bcrypt.hashSync(password, saltRounds); // Debug: Check the generated hash

          console.log('Generated Hash:', hash);
          _context.next = 13;
          return regeneratorRuntime.awrap(runQuery(addUser, [username, email, hash]));

        case 13:
          response = _context.sent;
          return _context.abrupt("return", {
            code: 201,
            status: 'success',
            message: 'New user added successfully',
            data: response[0]
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};

var loginUser = function loginUser(body) {
  var email, password, user, _user$, dbPassword, id, userPassword, options, token;

  return regeneratorRuntime.async(function loginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = body.email, password = body.password; // Check if that user exists inside the db

          _context2.next = 3;
          return regeneratorRuntime.awrap(runQuery(findUserByEmail, [email]));

        case 3:
          user = _context2.sent;

          if (!(user.length === 0)) {
            _context2.next = 6;
            break;
          }

          throw {
            code: 404,
            status: 'error',
            message: 'User not found',
            data: null
          };

        case 6:
          // Compare user passwords
          _user$ = user[0], dbPassword = _user$.password, id = _user$.id;
          console.log(user[0]);
          userPassword = bcrypt.compareSync(password, dbPassword); // Boolean true/false

          if (userPassword) {
            _context2.next = 11;
            break;
          }

          throw {
            code: 400,
            status: 'error',
            message: 'Wrong email and password combination',
            data: null
          };

        case 11:
          options = {
            'expiresIn': '1d'
          }; // Generate token for authentication purposes

          token = jwt.sign({
            id: id,
            email: email
          }, config.JWT_SECRET_KEY, options);
          return _context2.abrupt("return", {
            status: 'success',
            message: 'User login successfully',
            code: 200,
            data: {
              id: id,
              email: email,
              token: token
            }
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  createUser: createUser,
  loginUser: loginUser
};
//# sourceMappingURL=user.service.dev.js.map

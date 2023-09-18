"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../config/database.config'),
    runQuery = _require.runQuery;

var _require2 = require('../queries/user'),
    fetchUserById = _require2.fetchUserById;

var checkIfIdExists = function checkIfIdExists(req, res, next) {
  var id, _ref, _ref2, _ref2$, user;

  return regeneratorRuntime.async(function checkIfIdExists$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = req.params.id;
          _context.next = 4;
          return regeneratorRuntime.awrap(runQuery(fetchUserById, [id]));

        case 4:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          _ref2$ = _ref2[0];
          user = _ref2$ === void 0 ? null : _ref2$;

          if (user) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: 'error',
            code: 400,
            message: 'User does not exist',
            data: null
          }));

        case 10:
          console.log({
            user: user
          });
          req.user = user;
          return _context.abrupt("return", next());

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(_context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

module.exports = {
  checkIfIdExists: checkIfIdExists
};
//# sourceMappingURL=user.middleware.dev.js.map

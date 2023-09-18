"use strict";

var _require = require('../services/category.service'),
    addedCategory = _require.addedCategory;

var newCategory = function newCategory(req, res, next) {
  var response;
  return regeneratorRuntime.async(function newCategory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(addedCategory(req.body));

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

module.exports = {
  newCategory: newCategory
};
//# sourceMappingURL=category.controllers.dev.js.map

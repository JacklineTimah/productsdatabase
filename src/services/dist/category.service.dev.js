"use strict";

var _require = require('../queries/category'),
    addCategory = _require.addCategory,
    findCategorybyName = _require.findCategorybyName;

var _require2 = require('../config/database.config'),
    runQuery = _require2.runQuery;

var addedCategory = function addedCategory(body) {
  var name, categoryExist, response;
  return regeneratorRuntime.async(function addedCategory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = body.name;
          _context.next = 3;
          return regeneratorRuntime.awrap(runQuery(findCategorybyName, [name]));

        case 3:
          categoryExist = _context.sent;

          if (!(categoryExist.length > 0)) {
            _context.next = 6;
            break;
          }

          throw {
            code: 409,
            message: 'category already exist',
            data: null,
            status: 'error'
          };

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(runQuery(addCategory, [name]));

        case 8:
          response = _context.sent;
          return _context.abrupt("return", {
            code: 201,
            status: 'success',
            message: 'New category added successfully',
            data: response
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  addedCategory: addedCategory
};
//# sourceMappingURL=category.service.dev.js.map

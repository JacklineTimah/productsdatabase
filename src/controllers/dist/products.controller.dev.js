"use strict";

var _require = require('../services/products.service'),
    createProducts = _require.createProducts,
    getAllProducts = _require.getAllProducts;

var newProduct = function newProduct(req, res, next) {
  var result;
  return regeneratorRuntime.async(function newProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(createProducts(req.body));

        case 3:
          result = _context.sent;
          return _context.abrupt("return", res.status(result.code).json(result));

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

var retrieveAllProducts = function retrieveAllProducts(req, res, next) {
  var result;
  return regeneratorRuntime.async(function retrieveAllProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getAllProducts());

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
  newProduct: newProduct,
  retrieveAllProducts: retrieveAllProducts
};
//# sourceMappingURL=products.controller.dev.js.map

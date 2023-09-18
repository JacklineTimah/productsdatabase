"use strict";

var _require = require('../queries/products'),
    addProduct = _require.addProduct,
    fetchAllProducts = _require.fetchAllProducts,
    findProductbyName = _require.findProductbyName;

var _require2 = require('../config/database.config'),
    runQuery = _require2.runQuery;

var createProducts = function createProducts(body) {
  var name, price, quantity, productExist, response;
  return regeneratorRuntime.async(function createProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = body.name, price = body.price, quantity = body.quantity;
          _context.next = 3;
          return regeneratorRuntime.awrap(runQuery(findProductbyName, [name]));

        case 3:
          productExist = _context.sent;

          if (!(productExist.length > 0)) {
            _context.next = 7;
            break;
          }

          console.log(productExist);
          throw {
            code: 409,
            message: 'Product already exist',
            data: null,
            status: 'error'
          };

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(runQuery(addProduct, [name, price, quantity]));

        case 9:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", {
            code: 201,
            status: 'success',
            message: 'New product added successfully',
            data: response
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};
/*const fetchAllProducts=`
SELECT 
name, price,quantity_sold,quantity FROM products
`*/


var getAllProducts = function getAllProducts() {
  var fetchProducts;
  return regeneratorRuntime.async(function getAllProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(runQuery(fetchAllProducts));

        case 3:
          fetchProducts = _context2.sent;
          console.log(fetchProducts);
          return _context2.abrupt("return", {
            code: 200,
            status: 'success',
            message: 'All Products fetched successfully',
            data: fetchProducts
          });

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching products:', _context2.t0);
          throw {
            code: 500,
            status: 'error',
            message: 'Failed to fetch products',
            data: null
          };

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = {
  createProducts: createProducts,
  getAllProducts: getAllProducts
};
//# sourceMappingURL=products.service.dev.js.map

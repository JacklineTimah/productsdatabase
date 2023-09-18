"use strict";

var addProduct = "\nINSERT INTO products(\n    name,\n    price,\n    quantity\n)VALUES($1,$2,$3) RETURNING product_id, name, price,quantity\n";
var findProductbyName = "\n SELECT product_id, name,price, quantity FROM products WHERE name = $1\n";
var fetchAllProducts = "\n SELECT\n  p.product_id,\n  p.name AS product_name,\n  p.price,\n  p.quantity_sold,\n  p.quantity,\n  c.name AS category_name\nFROM\n  products p\nINNER JOIN\n  category c ON p.category_id = c.category_id\n\n  \n  ";
module.exports = {
  addProduct: addProduct,
  findProductbyName: findProductbyName,
  fetchAllProducts: fetchAllProducts
};
//# sourceMappingURL=products.dev.js.map

"use strict";

var addCategory = "\nINSERT INTO category(\n   name\n)\nVALUES ($1) RETURNING id, name \n";
var findCategorybyName = "\nSELECT id, name FROM category WHERE name = $1\n";
module.exports = {
  addCategory: addCategory,
  findCategorybyName: findCategorybyName
};
//# sourceMappingURL=category.dev.js.map

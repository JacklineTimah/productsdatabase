"use strict";

var dotenv = require('dotenv');

dotenv.config();
var production = {
  DATABASE_URL: process.env.PROD_DATABASE_URL,
  APP_PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
};
module.exports = production;
//# sourceMappingURL=production.dev.js.map

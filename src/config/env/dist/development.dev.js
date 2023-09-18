"use strict";

var dotenv = require('dotenv');

dotenv.config();
var development = {
  DATABASE_URL: process.env.DEV_DATABASE_URL,
  APP_PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
};
module.exports = development;
//# sourceMappingURL=development.dev.js.map

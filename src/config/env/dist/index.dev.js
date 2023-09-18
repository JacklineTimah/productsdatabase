"use strict";

var development = require('./development');

var test = require('./test');

var production = require('./production');

var environment = {
  development: development,
  test: test,
  production: production
};
module.exports = environment[process.env.NODE_ENV || 'development'];
//# sourceMappingURL=index.dev.js.map

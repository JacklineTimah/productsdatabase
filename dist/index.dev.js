"use strict";

// Imports database config
require('./src/config/database.config');

var express = require('express');

var apiVersion1 = require('./src/config/versioning/v1');

var envConfig = require('./src/config/env/index');

var _require = require('./src/middlewares/error.middleware'),
    notFound = _require.notFound,
    appErrorHandler = _require.appErrorHandler,
    genericErrorHandler = _require.genericErrorHandler;

var app = express();
app.use(express.json());
var PORT = envConfig.APP_PORT || 2001;
app.listen(PORT, function () {
  console.log("Applicaion running on port ".concat(PORT));
});
app.use('/api/v1', apiVersion1);
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound);
module.exports = app;
//# sourceMappingURL=index.dev.js.map

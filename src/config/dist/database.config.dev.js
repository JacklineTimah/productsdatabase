"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var config = require('./env/index');

var connectionString = config.DATABASE_URL;
var pool = new Pool({
  connectionString: connectionString
}); // This is to check for a successful connection

(function () {
  pool.query('SELECT NOW()', function (err, res) {
    if (err) {
      console.error('Database Connection Failed!', err);
    } else {
      console.log('Connected to PostgreSQL Database');
    }
  });
})();

var runQuery = function runQuery(query) {
  var values,
      _ref,
      rows,
      _args = arguments;

  return regeneratorRuntime.async(function runQuery$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          values = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          _context.next = 3;
          return regeneratorRuntime.awrap(pool.query(query, values));

        case 3:
          _ref = _context.sent;
          rows = _ref.rows;
          return _context.abrupt("return", rows);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  runQuery: runQuery
};
//# sourceMappingURL=database.config.dev.js.map

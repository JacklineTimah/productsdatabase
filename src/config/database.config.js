const { Pool } = require('pg');
const config = require('./env/index');

const connectionString = config.DATABASE_URL;
const pool = new Pool({ connectionString });

// This is to check for a successful connection
(() => {
    pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('Database Connection Failed!', err);
        } else {
            console.log('Connected to PostgreSQL Database');
        }
    });
})();

const runQuery = async (query, values = []) => {
    const {rows} = await pool.query(query, values);
    return rows;
}

module.exports = { runQuery };

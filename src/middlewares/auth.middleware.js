const jwt = require('jsonwebtoken');
const config = require('../config/env/index');
const { runQuery } = require('../config/database.config')
const { findUserByEmail } = require('../queries/user');

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    try {
        if (!token) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'Please supply token',
                data: null
            });
        }

        const user = jwt.verify(token, config.JWT_SECRET_KEY);
        if (!user) {
            return res.status(400).json({
              status: 'error',
              code: 401,
              message: 'You are not authorized to make this request!',
              data: null,
            });
          }
          req.user = user;
          return next();
        } catch (error) {
          return next(error);
        }
      };
      

module.exports =  {
    verifyToken
}
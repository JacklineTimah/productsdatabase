/**
 * Add New User
 */
const addUser = `
  INSERT INTO users(
    username,
    email,
    password 
  )
  VALUES ($1,$2,$3) RETURNING id, username, email, created_at
`;

const findUserByEmail = `
 SELECT id, username, email, password FROM users WHERE email=$1
`;
const fetchAllUsers = `SELECT id, email, username FROM users`;

const fetchUserById = `SELECT id, email, password, username FROM users WHERE id=$1`;


module.exports = {
    addUser,
    findUserByEmail,fetchAllUsers,
    fetchUserById
}
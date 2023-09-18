"use strict";

/**
 * Add New User
 */
var addUser = "\n  INSERT INTO users(\n    username,\n    email,\n    password \n  )\n  VALUES ($1,$2,$3) RETURNING id, username, email, created_at\n";
var findUserByEmail = "\n SELECT id, username, email, password FROM users WHERE email=$1\n";
var fetchAllUsers = "SELECT id, email, username FROM users";
var fetchUserById = "SELECT id, email, password, username FROM users WHERE id=$1";
module.exports = {
  addUser: addUser,
  findUserByEmail: findUserByEmail,
  fetchAllUsers: fetchAllUsers,
  fetchUserById: fetchUserById
};
//# sourceMappingURL=user.dev.js.map

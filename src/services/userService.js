// // userService.js

// const User = require('../models/userModel');

// async function createUser(name, email, password) {
//   // Perform any necessary validation or additional business logic

//   const newUser = new User({
//     name,
//     email,
//     password,
//   });

//   const createdUser = await newUser.save();

//   return createdUser;
// }

// async function getUserById(userId) {
//   const user = await User.findById(userId);

//   return user;
// }

// module.exports = {
//   createUser,
//   getUserById,
// };

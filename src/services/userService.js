const User = require('../models/userModel');

exports.getAllUsers = async () => {
  const users = await User.find();
  return users;
};

exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

exports.updateUser = async (userId, userData) => {
  const user = await User.findByIdAndUpdate(userId, userData, { new: true });
  return user;
};

exports.deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  return user;
};

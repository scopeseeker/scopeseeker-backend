// import { userService } from '../services';

// export const getAllUsers = async (req, res, next) => {
//   try {
//     const users = await userService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     next(error);
//   }
// };

// export const createUser = async (req, res, next) => {
//   try {
//     const newUser = await userService.createUser(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const user = await userService.getUserById(id);
//     res.json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await userService.updateUserById(id, req.body);
//     res.json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await userService.deleteUserById(id);
//     res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };

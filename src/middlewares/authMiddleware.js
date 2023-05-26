// const tokenService = require('../services/token-service');

// module.exports = async function (req, res, next) {
//     try {
//         const { accessToken } = req.cookies;
//         if (!accessToken) {
//             throw new Error();
//         }
//         const userData = await tokenService.verifyAccessToken(accessToken);
//         if (!userData) {
//             throw new Error();
//         }
//         req.user = userData;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: 'Invalid token' });
//     }
// };

// import jwt from 'jsonwebtoken';
// import { User } from '../models';

// const authMiddleware = async (req, res, next) => {
//   try {
//     // Retrieve the token from the request header
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//       // If token is not provided, return an error response
//       return res.status(401).json({ message: 'Authorization token not found' });
//     }

//     // Verify and decode the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Check if the decoded token contains the user ID
//     if (!decoded.userId) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }

//     // Fetch the user from the database based on the user ID in the token
//     const user = await User.findById(decoded.userId);

//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     // Attach the user object to the request for further use in the route handlers
//     req.user = user;

//     // Call the next middleware or route handler
//     next();
//   } catch (error) {
//     // Handle token verification errors
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// export default authMiddleware;

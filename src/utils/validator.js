// const { check, validationResult } = require('express-validator')

// // This validator function uses the express-validator library to validate the request body for creating a new company. It checks that the name is at least 3 characters long and that the email is a valid email address. If there are any validation errors, it sends a 400 Bad Request response with an array of error messages. If there are no errors, it calls the next middleware function in the chain.
// exports.validateCompany = [
//   check('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long.'),
//   check('email').isEmail().withMessage('Email must be a valid email address.'),
//   (req, res, next) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() })
//     }
//     next()
//   }
// ]

// // This validator function checks if the id parameter in the request URL is a valid MongoDB ObjectID. If it's not valid, it throws an error with the message "Invalid company ID." If it's valid, it returns true.
// exports.validateCompanyID = [
//   check('id').custom((value) => {
//     if (!mongoose.Types.ObjectId.isValid(value)) {
//       throw new Error('Invalid company ID.')
//     }
//     return true
//   }),
//   (req, res, next) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() })
//     }
//     next()
//   }
// ]

// // This validator function uses the express-validator library to validate the request body for creating a new job. It checks that the title is at least 3 characters long and that there isn't already a job with the same title for the given company ID. If there are any validation errors, it sends a 400 Bad Request response with an array of error messages. If there are no errors, it calls the next middleware function in the chain.
// exports.validateJob = [
//   check('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long.'),
//   check('companyId').custom(async (companyId, { req }) => {
//     const job = await Job.findOne({ title: req.body.title, companyId })
//     if (job) {
//       throw new Error('Job title must be unique for a company.')
//     }
//     return true
//   }),
//   (req, res, next) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() })
//     }
//     next()
//   }
// ]

// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   company: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'Company', 
//     required: true 
//   },
//   skillsRequired: { 
//     type: [String], 
//     required: true, 
//     enum: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'MongoDB', 'SQL', 'AWS'] // Limit skills to a predefined list
//   },
//   experienceRequired: { type: Number, required: true, min: 0 },
//   location: { type: String, required: true },
//   salary: { type: Number, required: true },
//   tags:[ { type: String, required: true }],
// });

// module.exports = mongoose.model('Job', jobSchema);

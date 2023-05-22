// // jobService.js

// const Job = require('../models/jobModel');

// async function createJob(title, description, salary) {
//   // Perform any necessary validation or additional business logic
  
//   const newJob = new Job({
//     title,
//     description,
//     salary,
//   });
  
//   const createdJob = await newJob.save();
  
//   return createdJob;
// }

// async function getAllJobs() {
//   const jobs = await Job.find();
  
//   return jobs;
// }

// module.exports = {
//   createJob,
//   getAllJobs,
// };

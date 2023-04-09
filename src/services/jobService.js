// jobService.js

const Job = require('../models/jobModel');

exports.getAllJobs = async () => {
    const jobs = await Job.find();
    return jobs;
};

exports.createJob = async (jobData) => {
    const job = new Job(jobData);
    await job.save();
    return job;
};

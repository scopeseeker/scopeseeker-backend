// jobController.js

const jobService = require('../services/jobService');

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await jobService.getAllJobs();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createJob = async (req, res) => {
    try {
        const job = await jobService.createJob(req.body);
        res.json(job);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

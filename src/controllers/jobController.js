// import { jobService } from '../services';

// export const getAllJobs = async (req, res, next) => {
//   try {
//     const jobs = await jobService.getAllJobs();
//     res.json(jobs);
//   } catch (error) {
//     next(error);
//   }
// };

// export const createJob = async (req, res, next) => {
//   try {
//     const newJob = await jobService.createJob(req.body);
//     res.status(201).json(newJob);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getJobById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const job = await jobService.getJobById(id);
//     res.json(job);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateJobById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updatedJob = await jobService.updateJobById(id, req.body);
//     res.json(updatedJob);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteJobById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await jobService.deleteJobById(id);
//     res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };

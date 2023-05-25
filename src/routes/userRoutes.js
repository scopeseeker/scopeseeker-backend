import express from 'express'

const router = express.Router();

// Routes for the job entity
// router.get('/', jobController.getAllJobs);
// router.post('/', jobController.createJob);
// router.get('/:id', jobController.getJobById);
// router.put('/:id', jobController.updateJobById);
// router.delete('/:id', jobController.deleteJobById);

router.get('/', (req, res)=>{
    res.send('hello jdkafjk')
    })
    export default router;



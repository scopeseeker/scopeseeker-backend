// routes/jobRoutes.js

const express = require('express');
// const jobController = require('../controllers/jobController');

const router = express.Router();

// router.get('/', jobController.getAllJobs);
// router.get('/:id', jobController.getJobById);
// router.post('/', jobController.createJob);
// router.put('/:id', jobController.updateJob);
// router.delete('/:id', jobController.deleteJob);

router.get('/', (req,  res)=>{
    res.send('hello from job routes')
})

module.exports = router;

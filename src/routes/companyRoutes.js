// routes/companyRoutes.js

const express = require('express');
// const companyController = require('../controllers/companyController');

const router = express.Router();

// router.get('/', companyController.getAllCompanies);
// router.get('/:id', companyController.getCompanyById);
// router.post('/', companyController.createCompany);
// router.put('/:id', companyController.updateCompany);
// router.delete('/:id', companyController.deleteCompany);

router.get('/', (req,  res)=>{
    res.send('hello from company routes')
})

module.exports = router;

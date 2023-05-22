import express from 'express';
import { companyController } from '../controllers';

const router = express.Router();

// Routes for the company entity
// router.get('/', companyController.getAllCompanies);
// router.post('/', companyController.createCompany);
// router.get('/:id', companyController.getCompanyById);
// router.put('/:id', companyController.updateCompanyById);
// router.delete('/:id', companyController.deleteCompanyById);
router.get('/', (req, res)=>{
res.send('hello')
})
export default companyRoutes;

// import { companyService } from '../services';

// export const getAllCompanies = async (req, res, next) => {
//   try {
//     const companies = await companyService.getAllCompanies();
//     res.json(companies);
//   } catch (error) {
//     next(error);
//   }
// };

// export const createCompany = async (req, res, next) => {
//   try {
//     const newCompany = await companyService.createCompany(req.body);
//     res.status(201).json(newCompany);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getCompanyById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const company = await companyService.getCompanyById(id);
//     res.json(company);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateCompanyById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updatedCompany = await companyService.updateCompanyById(id, req.body);
//     res.json(updatedCompany);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteCompanyById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await companyService.deleteCompanyById(id);
//     res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };

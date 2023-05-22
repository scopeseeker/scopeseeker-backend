// // companyService.js

// const Company = require('../models/companyModel');

// async function createCompany(name, location, industry) {
//   // Perform any necessary validation or additional business logic
  
//   const newCompany = new Company({
//     name,
//     location,
//     industry,
//   });
  
//   const createdCompany = await newCompany.save();
  
//   return createdCompany;
// }

// async function getCompanyById(companyId) {
//   const company = await Company.findById(companyId);
  
//   return company;
// }

// module.exports = {
//   createCompany,
//   getCompanyById,
// };

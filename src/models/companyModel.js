// models/company.js

const mongoose = require('mongoose');


const company_jobs_social_accounts = new mongoose.Schema({
    size : {
      type: String,
      required: true
    },
    revenue: {
      type: String,
      required: true
    },
    industry: {
      type: Date,
      required: true
    }
  });
const companySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        unique_id: { type: String, required: true , unique:true },
        location: { type: String, required: true },
        website: { type: String ,required:true },
        summary: { type: String, required: true,maxlength: 100 ,minlength: 20  },
        logo: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          },
        back_photo: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          },
          tags: {
            type: [String],
           
            default: [],
            array1:{
              validate: {
                validator: function(v) {
                  return v.length >= 3 && v.length <= 10;
                },
                message: 'tags must be between 3 and 10 characters long.'
              },
              type:String,
              required:true
            }
          },
          type: { type: String ,required:true },
          followers: { type: Number ,required:true },
          follow: { type: Number ,required:true },
          founded_year: { type: Number ,required:true },
          Headquaters: { type: String ,required:true },
          company_jobs_social_accounts: {company_jobs_social_accounts}



    },
    { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

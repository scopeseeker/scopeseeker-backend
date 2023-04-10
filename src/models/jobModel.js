// models/job.js

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

const jobSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
        location: { type: String, required: true },
        salary: { type: Number, required: true },
        vacancy: { type: String, required: true },
        tags: { type: String, required: true },
        experience: { type: Number, required: true },
        salary: { type: Number, required: true },
        salary: { type: String, required: true },
        location: { type: String, required: true },
        job_type : { type: String, required: true },
        work_detail: { type: String,maxlength: 100 ,minlength: 20 , required: true },
        Company_overview:[Company_Overview],
        logo: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          },
        job_type : { type: Number, required: true },
        job_deadline : { type: Number, required: true },
        job_Applicants: { type: Number, required: true },
        job_description: { type: String, required: true,maxlength: 100 ,minlength: 20  },
        company_jobs_social_accounts: {company_jobs_social_accounts}
        
        

    },
    { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

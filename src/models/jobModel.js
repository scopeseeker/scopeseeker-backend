// models/job.js

const mongoose = require('mongoose');

const Company_overview = new mongoose.Schema({
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
        title: { type: String, required: true ,
          minlength: [2, 'Full name should be at least 2 characters'],
          maxlength: [50, 'Full name should not exceed 50 characters'],
          validate: {
            validator: function (value) {
              return /^[a-zA-Z ]*$/.test(value);
            }, message: 'Full name should contain only letters and spaces',
          },},

        description: { type: String, required: true ,
          type: String,
          required: true,
          trim: true,
          minlength: [50, 'Job description should have at least 50 characters'],
          maxlength: [500, 'Job description should have at most 500 characters']
        },

        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true , 
        trim: true,
        minlength: [3, 'Company name should have at least 3 characters'],
        maxlength: [50, 'Company name should have at most 50 characters']},

        location: { 
          city: {
            type: String,
            required: true,
            trim: true,
            minlength: [3, 'City name should have at least 3 characters'],
            maxlength: [50, 'City name should have at most 50 characters']
          },
          state: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, 'State or province name should have at least 2 characters'],
            maxlength: [50, 'State or province name should have at most 50 characters']
          },
          country: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, 'Country name should have at least 2 characters'],
            maxlength: [50, 'Country name should have at most 50 characters']
          },
          coordinates: {
            type: [Number],
            index: '2dsphere'
          }
        },


        vacancy: { 
          type: {
            total: {
              type: Number,
              required: true,
              min: [1, 'Total vacancy should be greater than or equal to 1']
            },
            remaining: {
              type: Number,
              required: true,
              min: [0, 'Remaining vacancy should be greater than or equal to 0'],
              validate: {
                validator: function (v) {
                  return v <= this.total;
                },
                message: 'Remaining vacancy should be less than or equal to total vacancy'
              }
            }
          }
      
        },
        tags: { 
          type: [{
            type: String,
            trim: true,
            minlength: [2, 'Tag should have at least 2 characters'],
            maxlength: [20, 'Tag should have at most 20 characters']
          }],
          validate: {
            validator: function (v) {
              return v.length <= 5;
            },
            message: 'No more than 5 tags allowed'
          }
         },
        experience: { 
          minExperience: {
            type: Number,
            required: true,
            min: [0, 'Minimum experience should be greater than or equal to 0'],
            max: [50, 'Minimum experience should be less than or equal to 50']
          },
          maxExperience: {
            type: Number,
            required: true,
            min: [0, 'Maximum experience should be greater than or equal to 0'],
            max: [50, 'Maximum experience should be less than or equal to 50']
          },
          required: true,
          trim: true
         },
        salary: {
          type: {
            amount: {
              type: Number,
              required: true,
              min: [1, 'Salary should be greater than or equal to 1']
            },
            currency: {
              type: String,
              required: true,
              trim: true,
              enum: ['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY'],
              uppercase: true
            },
            paymentCycle: {
              type: String,
              required: true,
              enum: ['hourly', 'daily', 'weekly', 'biweekly', 'monthly', 'yearly']
            }
          }
        },
    
       
        job_type : { 
          type: String,
          required: true,
          enum: ['full-time', 'part-time', 'contract', 'internship', 'temporary']
      
        },
        work_detail: { 
          type: String,
          required: true,
          trim: true,
          minlength: [50, 'Work details must be at least 50 characters'],
          maxlength: [500, 'Work details cannot exceed 500 characters']
         },
        Company_overview:[Company_Overview],
        logo: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          },
        
        job_deadline : { 
          type: Date,
          required: true,
          validate: {
            validator: function (deadline) {
              return deadline > Date.now();
            },
            message: 'Job deadline must be in the future'
          }
         },

        job_Applicants: { 
          type: [{
            applicant_name: {
              type: String,
              required: true
            },
            applicant_email: {
              type: String,
              required: true,
              lowercase: true,
              trim: true,
              match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format']
            },
            application_status: {
              type: String,
              enum: ['pending', 'accepted', 'rejected'],
              default: 'pending'
            }
          }]
         },
        job_description: { 
          type: String,
          required: true,
          minlength: 50,
          maxlength: 2000
      
          },
        company_jobs_social_accounts: {
          twitter: { type: String, trim: true, validate: validateSocialMediaURL },
          linkedIn: { type: String, trim: true, validate: validateSocialMediaURL },
          facebook: { type: String, trim: true, validate: validateSocialMediaURL },
          instagram: { type: String, trim: true, validate: validateSocialMediaURL },
        }
        
        

    },
    { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, // Validate email format
    trim: true // Remove leading/trailing spaces
  },
  password: { type: String, required: true, minlength: 8 },
  skills: { 
    type: [String], 
    required: true, 
  },
  savedJobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
  targetedCompanies: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
  resume: { type: String },
  skills: [{ type: String }],
  education: [{
    institution: { type: String },
    degree: { type: String },
    fieldOfStudy: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String }
  }],
  designation: { type: String },
  experience: [{
    company: { type: String },
    position: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String }
  }],
  location: { type: String },
  phone: { type: String },
  website: { type: String },
  socialMedia: {
    twitter: { type: String },
    linkedIn: { type: String },
    facebook: { type: String },
    instagram: { type: String }
  },
  languages: [{
    name: { type: String },
    proficiency: { type: String }
  }],
  interests: [{ type: String }],
  summary: { type: String },
  preferredIndustry: { type: String },
  expectedSalary: { type: Number },
});

module.exports = mongoose.model('User', userSchema);
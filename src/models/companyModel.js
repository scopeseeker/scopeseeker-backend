const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, // Validate email format
    trim: true // Remove leading/trailing spaces
  },
  password: { type: String, required: true, minlength: 8 },
  location: { type: String, required: true },
  website: { type: String },
  description: { type: String },
  logo: { type: String },
});

module.exports = mongoose.model('Company', companySchema);

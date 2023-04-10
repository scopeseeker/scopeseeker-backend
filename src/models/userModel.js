// models/user.js

const mongoose = require('mongoose');



const certificationSchema = new mongoose.Schema({
  certificationTitle: {
    type: String,
    required: true
  },
  certificationDescription: {
    type: String,
    required: true
  },
  certificationExpiryDate: {
    type: Date,
    required: true
  }
});
const PastInternship = new mongoose.Schema({
  headline: {
    type: String,
    maxlength: 20
  },
  years: {
    type: String, 
    maxlength: 20
  },
  description: {
    type: Date,
    maxlength: 20
  },
  online_link: {
    type: Date,
    maxlength: 20
  }
});
const Personal_Details = new mongoose.Schema({
  Married_Status: {
    type: String,
    maxlength: 10
  },
  address: {
    type: String, 
    maxlength: 20
  },
  description: {
    type: Date,
    maxlength: 20
  },
  online_link: {
    type: Date,
    maxlength: 20
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
});

const userSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true , maxlength: 20 },
        lastname: { type: String, required: true,maxlength: 20 },
        username: { type: String,unique:true, required: true,maxlength: 50,minlength: 50 },
        email: { type: email, required: true,maxlength: 50 ,minlength: 50 ,unique: true },
        summary: { type: String, required: true,maxlength: 100 ,minlength: 20  },
        interest: { type: String, required: true,maxlength: 100 ,minlength: 20  },
        Mobilenumber: { type: Number, required: true,maxlength: 10 ,minlength: 10 ,unique: true },
        location: { type: String, required: true,maxlength: 10 ,minlength: 50 ,unique: true },
        password: { type: password, required: true },

        // skills array
        skills: {
            type: [String],
           
            default: [],
            array1:{
              validate: {
                validator: function(v) {
                  return v.length >= 3 && v.length <= 10;
                },
                message: 'Skills must be between 3 and 10 characters long.'
              },
              type:String,
              required:true
            }
          },
        resume: {
            data: Buffer,
            contentType: String
          },

          
          school: {
            type: String,
            required: function() {
              return this.employmentStatus === 'Student';
            }
          },
          college: {
            type: String,
            required: function() {
              return this.employmentStatus === 'College';
            }
          },
          
          certifications: [certificationSchema],
          PastInternship: [PastInternship],
          Personal_Details:[Personal_Details],



      


        
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

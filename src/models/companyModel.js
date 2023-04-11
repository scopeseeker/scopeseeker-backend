// models/company.js

const mongoose = require('mongoose');


const companyinfo = new mongoose.Schema({
  size: {
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


// follower stored username id 
const followerSchema = new mongoose.Schema({
  followerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a follower ID']
  },
  followingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a following ID']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, 'Please provide a creation date']
  },
  createdAt: { type: Date, default: Date.now }
});


const companySchema = new mongoose.Schema(
  {
    name: {
      type: String, required: true,
      trim: true,
      minlength: [2, 'Full name should be at least 2 characters'],
      maxlength: [50, 'Full name should not exceed 50 characters'],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z ]*$/.test(value);
        }, message: 'Full name should contain only letters and spaces',
      },
    },
    unique_id: {
      type: String, required: true, unique: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9]+$/.test(v);
        },
        message: 'Username must contain only letters and numbers.'
      },

    },
    location: {
      type: String, required: true,
      trim: true,
      minlength: [2, 'Location should be at least 2 characters'],
      maxlength: [100, 'Location should not exceed 50 characters'],

    },
    website: { type: String, required: true },
    summary: { type: String, required: true, maxlength: 100, minlength: 20 },
    logo: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      validate: {
        validator: function (v) {
          return /\.(png|jpg|jpeg|gif)$/i.test(v);
        },
        message: props => `${props.value} is not a valid image file!`
      }
    },

    back_photo: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      validate: {
        validator: function (v) {
          return /\.(png|jpg|jpeg|gif)$/i.test(v);
        },
        message: props => `${props.value} is not a valid image file!`
      }
    },

    tags: {
      type: [String],

      default: [],
      array1: {
        validate: {
          validator: function (v) {
            return v.length >= 3 && v.length <= 10;
          },
          message: 'tags must be between 3 and 10 characters long.'
        },
        type: String,
        required: true
      }
    },
    type: {
      type: String, required: true,
      trim: true,
      minlength: [2, 'Location should be at least 2 characters'],
      maxlength: [20, 'Location should not exceed 50 characters']
    },
    followers: { followerSchema },

    founded_year: {
      type: Number, required: true,
      required: [true, 'Please provide a founded year'],
      validate: {
        validator: function (v) {
          return Number.isInteger(v) && v >= 1800 && v <= new Date().getFullYear();
        },
        message: props => `${props.value} is not a valid year`
      }
    },
    Headquaters: {
      type: String, required: true,

      minlength: [2, 'Location should be at least 2 characters'],
      maxlength: [100, 'Location should not exceed 50 characters'],
    },

    socialMedia: {
      twitter: { type: String, trim: true, validate: validateSocialMediaURL },
      linkedIn: { type: String, trim: true, validate: validateSocialMediaURL },
      facebook: { type: String, trim: true, validate: validateSocialMediaURL },
      instagram: { type: String, trim: true, validate: validateSocialMediaURL },
  },



  },


  { timestamps: true },


);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

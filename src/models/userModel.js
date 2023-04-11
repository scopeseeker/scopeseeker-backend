const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: isValidDate,
            message: 'Invalid start date format',
        },
    },
    endDate: {
        type: Date,
        required: true,
        validate: {
            validator: isValidDate,
            message: 'Invalid end date format',
        },
    },
    description: { type: String },
});

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: isValidDate,
            message: 'Invalid start date format',
        },
    },
    endDate: {
        type: Date,
        required: true,
        validate: {
            validator: isValidDate,
            message: 'Invalid end date format',
        },
    },
    description: { type: String },
});

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        minlength: [2, 'Full name should be at least 2 characters'],
        maxlength: [50, 'Full name should not exceed 50 characters'],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z ]*$/.test(value);
            },
            message: 'Full name should contain only letters and spaces',
        },
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format',
        },
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        validate: {
            validator: function (value) {
                return /^\d{10}$/.test(value);
            },
            message: 'Invalid phone number format, should contain 10 digits',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password should be at least 8 characters'],
        validate: {
            validator: function (value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
            },
            message:
                'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        },
    },
    location: {
        type: String,
        trim: true,
        minlength: [2, 'Location should be at least 2 characters'],
        maxlength: [100, 'Location should not exceed 50 characters'],
    },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: {
        type: [
            {
                type: String,
                minlength: 2,
                maxlength: 50,
                trim: true,
            },
        ],
        required: true,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Skills field cannot be empty',
        },
    },
    language: {
        type: {
            name: {
                type: String,
                required: true,
                enum: ['Hindi', 'English'],
            },
            proficiency: {
                type: String,
                enum: ['Basic', 'Intermediate', 'Advanced'],
                default: 'Intermediate',
            },
        },
        required: true,
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 300,
        minlength: 50,
        required: true,
    },
    website: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: validateURL,
            message: 'Invalid website URL.',
        },
    },
    profilePicPath: {
        type: String,
        validate: {
            validator: validateImage,
            message: 'Invalid file type for profile picture',
        },
    },
    resumePath: {
        type: String,
        validate: {
            validator: function (value) {
                return /\.pdf$/.test(value);
            },
            message: 'Invalid file type for resume',
        },
    },
    savedJobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
    targetedCompanies: [{ type: Schema.Types.ObjectId, ref: 'Company' }],

    expectedSalary: {
        type: Number,
        required: true,
        validate: {
            validator: function (salary) {
                return salary >= 0 && salary <= 100; // Assuming the range is 0 to 100 lakhs per annum
            },
            message: 'Expected salary should be between 0 and 100 lakhs per annum',
        },
    },
    socialMedia: {
        twitter: { type: String, trim: true, validate: validateSocialMediaURL },
        linkedIn: { type: String, trim: true, validate: validateSocialMediaURL },
        facebook: { type: String, trim: true, validate: validateSocialMediaURL },
        instagram: { type: String, trim: true, validate: validateSocialMediaURL },
    },
});

module.exports = mongoose.model('User', userSchema);


const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const logger = require('./utils/logger')
const bodyParser = require('body-parser');


// Import our routes
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

// Create an instance of Express
const app = express();

// Apply middleware for security and performance optimizations
app.use(helmet());
app.use(compression());

// Use Morgan for logging incoming requests
app.use(morgan('combined', {
  stream: {
    write: (message) => {
      logger.info(message.trim());
    },
  },
}));


// Add middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// Configure middleware
app.use(cors());

// Apply middleware for rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Configure Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
import express from "express";
import createError from "http-errors";
import { APP_PORT } from "./config";
import authRoutes from "./routes/authRoutes";
import { companyRoutes, jobRoutes, userRoutes } from "./routes";
// const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
// app.use(morgan('dev'));

// Routes
app.use("/api/", authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

// Start the server
const port = APP_PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

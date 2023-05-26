import express from 'express'
import createError from 'http-errors'
import morgan from 'morgan'
import helmat from 'helmet'
import cors from 'cors'
import { APP_PORT } from './config'
import authRoutes from './routes/authRoutes'
import { companyRoutes, jobRoutes, userRoutes } from './routes'
import errorHandler from './middlewares/errorHandler'

const app = express()

const allowedOrigins = ['http://scopeseeker.com']

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

// Middleware
app.use(express.json())
app.use(morgan('tiny'))
app.use(helmat())
app.use(cors(corsOptions))

// Routes
app.use('/api/', authRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)

// Error handling middleware
app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

app.use(errorHandler)
// Start the server
const port = APP_PORT || 3000
app.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`Server is running on port ${port}`)
})

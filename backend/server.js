/**
 * backend/server.js
 * Entry point for the Express server.
 * - Loads environment variables
 * - Connects to the database
 * - Sets up middleware and routes
 * - Starts the HTTP server
 */

const express = require('express'); // Express web framework
const colors = require('colors'); // Optional: colorize console output for readability in dev
const dotenv = require('dotenv').config(); // Load .env into process.env

const {mongooseConnectDB} = require('./config/db'); // DB connection helper (Mongoose)
const {ErrorHandler} = require('./middleware/ErrorHandlerMiddleware'); // Centralized error middleware

// Use the PORT from environment (e.g., deployed env) or default to 5000 for local dev
const port = process.env.PORT || 5000;

// Quick debug: log the configured PORT (helps when a hosting provider sets the PORT env var)
console.log('Configured PORT:', process.env.PORT)

// Connect to MongoDB before accepting requests
mongooseConnectDB();

// Create Express application
const app = express();

// Parse JSON bodies (Content-Type: application/json)
app.use(express.json());
// Parse URL-encoded bodies (HTML form submissions)
app.use(express.urlencoded({ extended: false }))

// Mount API route handlers. All requests to /api/goals are handled by this router
app.use('/api/goals', require('./routes/goalRoutes'))

// IMPORTANT: Error handler must be registered after routes so it can catch errors from controllers
app.use(ErrorHandler)

// Start listening for incoming requests
app.listen(port, () => console.log(`Server started on ${port}`))

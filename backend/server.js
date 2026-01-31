const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {mongooseConnectDB} = require('./config/db');
const {ErrorHandler} = require('./middleware/ErrorHandlerMiddleware');

const port = process.env.PORT || 5000;

console.log(process.env.PORT)

mongooseConnectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

// Error handler should be registered after routes
app.use(ErrorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))

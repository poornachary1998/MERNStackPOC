const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {ErrorHandler} = require('./middleware/ErrorHandlerMiddleware');
console.log(process.env.PORT)
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

// Error handler should be registered after routes
app.use(ErrorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))

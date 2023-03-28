const express = require('express')
const app = express();

const setupRoutes = require('./routes')
const {boomErrorHandler, errorHandler} = require('./middlewares/error.handler')

app.use(express.json());

// INIT ROUTES
setupRoutes(app);

// HANDLING ERRORS
app.use(boomErrorHandler);
// app.use(errorHandler);


module.exports = app
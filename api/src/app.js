const express = require('express')
const app = express();

const setupRoutes = require('./routes')

app.use(express.json());

// INIT ROUTES
setupRoutes(app);

module.exports = app
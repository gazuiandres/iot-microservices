const agentsRouter = require('./agents.router')
const metricsRouter = require('./metrics.router')


const setupRoutes = (app) => {
  app.use('/agents', agentsRouter)
  app.use('/metrics', metricsRouter)
}


module.exports = setupRoutes

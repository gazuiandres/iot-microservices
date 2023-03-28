const metricRouter = require('./metric.router')
const agentRouter = require('./agent.router')

const setupRoutes = (app) => {
    app.use('/api/v1/agents', agentRouter)
    app.use('/api/v1/metrics', metricRouter)
}


module.exports = setupRoutes
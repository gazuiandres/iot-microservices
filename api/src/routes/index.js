const agentRouter = require('./agent.router')

const setupRoutes = (app) => {
    app.use('/api/v1/agents', agentRouter)
}


module.exports = setupRoutes
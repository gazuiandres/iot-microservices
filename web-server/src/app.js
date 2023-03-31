const express = require('express')
const { Server } = require('socket.io')
const { createServer } = require('node:http')
const app = express()

const { boomErrorHandler } = require('./middlewares/error.handler')
const setupRoutes = require('./routes')

const agentSocket = require('./socket/agent.socket')
const metricSocket = require('./socket/metric.socket')
const setupMqtt = require('./mqtt')

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

app.get('/', (req, res) => {
  res.send('web server')
})

setupRoutes(app);

// Init Error Middlewares
app.use(boomErrorHandler)

// Socket IO setup
const agentNameSpace = io.of("/agents")
const metricNameSpace = io.of("/metrics")

agentSocket(agentNameSpace)
metricSocket(metricNameSpace)

// SETUP MQTT CONNECTION
setupMqtt({ agentSocket: agentNameSpace, metricSocket: metricNameSpace })

module.exports = httpServer

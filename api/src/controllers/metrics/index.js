const metricModel = require('../../models/metric.model')
const metricsService = require('../../services/metrics.service')
const metricController = require('./metric.controller')

const service = metricsService(metricModel)

module.exports = metricController(service)
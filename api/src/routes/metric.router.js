const express = require('express')
const router = express.Router()

const metricsController = require('../controllers/metrics')
const validatorHandler = require('../middlewares/validation.handler')
const { getTypesSchema, getFullMetricsSchema, createMetricSchema } = require('../schemas/metric.schema')

router.get('/:id', validatorHandler(getTypesSchema, 'params'), metricsController.getTypes)
router.get('/:type/:id', validatorHandler(getFullMetricsSchema, 'params'), metricsController.getMetric)
router.post('/', validatorHandler(createMetricSchema, 'body'), metricsController.create)


module.exports = router

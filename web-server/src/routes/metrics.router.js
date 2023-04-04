const express = require('express')
const axios = require('axios')

const router = express.Router()
const { PROXY_API } = require('../config')

const validatorHandler = require('../middlewares/validation.handler')
const { getTypesSchema, getFullMetricsSchema } = require('../schemas/metrics.schema')

router.get('/:uuid', validatorHandler(getTypesSchema, 'params'), async (req, res, next) => {
  try {
    const { uuid } = req.params
    const { data } = await axios.get(`${PROXY_API}/metrics/${uuid}`)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.get('/:type/:uuid', validatorHandler(getFullMetricsSchema, 'params'), async (req, res, next) => {
  try {
    const { uuid, type } = req.params
    const { data } = await axios.get(`${PROXY_API}/metrics/${type}/${uuid}`)
    res.json(data)
  } catch (error) {
    next(error)
  }
})



module.exports = router

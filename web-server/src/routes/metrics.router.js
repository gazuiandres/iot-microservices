const express = require('express')
const axios = require('axios')

const router = express.Router()
const { PROXY_API } = require('../config')

const validatorHandler = require('../middlewares/validation.handler')
const { getTypesSchema, getFullMetricsSchema } = require('../schemas/metrics.schema')

router.get('/:uuid', validatorHandler(getTypesSchema, 'params'), async (req, res) => {
  const { uuid } = req.params
  const { data } = await axios.get(`${PROXY_API}/metrics/${uuid}`)
  res.json(data)
})

router.get('/:type/:uuid', validatorHandler(getFullMetricsSchema, 'params'), async (req, res) => {
  const { uuid, type } = req.params
  const { data } = await axios.get(`${PROXY_API}/metrics/${type}/${uuid}`)
  console.log(data.length)
  res.json(data)
})



module.exports = router

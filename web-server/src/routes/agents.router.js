const express = require('express')
const axios = require('axios')

const router = express.Router()
const { PROXY_API } = require('../config')


router.get('/', async (req, res) => {
  const { data } = await axios.get(`${PROXY_API}/agents`)
  res.json(data)
})

module.exports = router

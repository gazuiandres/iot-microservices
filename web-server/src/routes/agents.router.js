const express = require('express')
const axios = require('axios')

const router = express.Router()
const { PROXY_API } = require('../config')


router.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get(`${PROXY_API}/agents`)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

module.exports = router

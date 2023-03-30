require('dotenv').config()


module.exports = {
  PORT: process.env.PORT || 3001,
  PROXY_API: process.env.PROXY_API
}

require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    mongoDb: {
        URI: process.env.MONGO_URI
    }
}
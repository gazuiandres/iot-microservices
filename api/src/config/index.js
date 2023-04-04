require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    mqttHost: process.env.MQTT_URL,
    mongoDb: {
        URI: process.env.MONGO_URI
    }
}

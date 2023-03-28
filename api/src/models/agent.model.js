const { Schema, model } = require('mongoose')

const agentSchema = new Schema(
    {
        uuid: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        connected: {
            type: Boolean
        },
    },
    {
        timestamps: true
    }
)

module.exports = model('Agent', agentSchema)
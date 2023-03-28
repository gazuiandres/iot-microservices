const { Schema, model } = require('mongoose')

const metricSchema = new Schema(
    {
        value: {
            required: true,
            type: "Number"
        },
        type: {
            required: true,
            type: String
        },
        agent: {
            required: true,
            type: String
        },
    },
    {
        timestamps: true
    }
)

module.exports = model('Metric', metricSchema)
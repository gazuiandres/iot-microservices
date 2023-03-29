const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const uuid = Joi.string().min(4)
const value = Joi.number();
const type = Joi.string()
const agent = Joi.string().min(4)

const getTypesSchema = Joi.object({
    uuid: uuid.required(),

})

const getFullMetricsSchema = Joi.object({
    uuid: uuid.required(),
    type: type.required()
})

const createMetricSchema = Joi.object({
    value: value.required(),
    type: type.required(),
    agent: agent.required(),
})



module.exports = {
    getTypesSchema,
    getFullMetricsSchema,
    createMetricSchema,
}

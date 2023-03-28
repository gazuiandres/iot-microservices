const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const id = Joi.objectId()
const value = Joi.number();
const type = Joi.string()
const agent = Joi.objectId()

const getTypesSchema = Joi.object({
    id: id.required(),

})

const getFullMetricsSchema = Joi.object({
    id: id.required(),
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
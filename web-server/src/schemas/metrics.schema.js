const Joi = require("joi");

const uuid = Joi.string().min(4)
const type = Joi.string().min(2)

const getTypesSchema = Joi.object({
  uuid: uuid.required(),
})

const getFullMetricsSchema = Joi.object({
  uuid: uuid.required(),
  type: type.required()
})

module.exports = {
  getTypesSchema,
  getFullMetricsSchema,
}

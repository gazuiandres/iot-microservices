const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

// const id = Joi.string().min(6);
const uuid = Joi.string().min(6);
const name = Joi.string().min(4);
const connected = Joi.boolean()

const getAgentSchema = Joi.object({
    uuid: uuid.required()
})

const creatOrUpdateAgentSchema = Joi.object({
    uuid: uuid.alter({
        post: (schema) => schema.required(),
        put: (schema) => schema.required()
    }),
    name: name.alter({
        post: (schema) => schema.required(),
        put: (schema) => schema.allow()
    }),
    connected: connected.alter({
        post: (schema) => schema.required(),
        put: (schema) => schema.allow()
    }),
    method: Joi.string().required()
})



module.exports = {
    getAgentSchema,
    creatOrUpdateAgentSchema,
}
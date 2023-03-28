const boom = require("@hapi/boom");

const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property];
        const { method } = req['body']
        let errorMessage;

        if (!method) {
            const { error } = schema.validate(data, { abortEarly: false });
            errorMessage = error
        }

        if (method) {
            const { error } = schema.tailor(method).validate(data, { abortEarly: false });
            errorMessage = error
        }

        if (errorMessage) {
            next(boom.badRequest(errorMessage));
        }
        
        next();
    };
};

module.exports = validatorHandler
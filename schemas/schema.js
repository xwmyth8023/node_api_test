const Joi = require('joi')

/**
 * example response body
 * @response data structure
 */

const schema = Joi.object().keys({
    events: Joi.array().items(
        Joi.object().keys({
            name: Joi.string().optional(),
            variants: Joi.array().items(
                Joi.object().keys({
                    id: Joi.number(),
                    name: Joi.string().optional().allow('',null),
                    assigned_visitors: Joi.number(),
                    converted_visitors: Joi.number(),
                    conversion_rate: Joi.number()
                })
            )
        })
    )
})

module.exports = schema
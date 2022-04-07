const Joi = require('joi')

/**
 * example response body
 * @response data structure
 */

const schema = Joi.object().keys({
  args: Joi.object().keys({
    test: Joi.string().optional()
  }),
  headers: Joi.object().keys()
})

module.exports = schema
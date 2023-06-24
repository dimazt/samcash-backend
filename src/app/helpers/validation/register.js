const Joi = require("joi");

const registation = Joi.object({
    name: Joi.string().required().messages({
      'string.base': 'Nama harus berupa string',
      'any.required': 'Nama wajib diisi',
    }),
    email: Joi.string().email().required().messages({
      'string.base': 'Email harus berupa string',
      'string.email': 'Email tidak valid',
      'any.required': 'Email wajib diisi',
    }),
    password: Joi.string().min(8).required().messages({
      'string.base': 'Password tidak valid',
      'any.required': 'Password wajib diisi',
    }),
    confirm_password: Joi.string().min(8).required().messages({
      'string.base': 'Confirm Password tidak valid',
      'any.required': 'Confirm Password wajib diisi',
    }),
    nik : Joi.number().min(16)
  });

  module.exports = registation
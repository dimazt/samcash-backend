const InvariantError = require("../response/InvariantError");
const options = { abortEarly: false };
const validateRequest = (data, schema) =>{
    const { error } = schema.validate(data, options);
    if (error) {
      const errorMessage = error.details.map((detail) => detail.message);
      throw new InvariantError(errorMessage,422)
    }
}


module.exports = validateRequest;

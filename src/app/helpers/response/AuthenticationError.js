const ClientError = require("./ClientError");

class AuthenticationError extends ClientError {
  constructor(message, customCode = 401) {
    super(message);
    this.customCode = customCode;
    this.name = "AuthenticationError";
  }
}
module.exports = AuthenticationError;

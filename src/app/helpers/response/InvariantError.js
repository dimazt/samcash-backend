const ClientError = require("./ClientError");

class InvariantError extends ClientError {
    constructor(message,customCode){
        super(message)
        this.customCode = customCode
        this.name = 'Invariant Error'
    }
}

module.exports = InvariantError
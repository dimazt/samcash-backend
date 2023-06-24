class ClientError extends Error {
    constructor(message, statusCode = 400, customCode){
        super(message)
        this.statusCode = statusCode
        this.customCode = customCode
        this.name = 'Client Error'
    }
}

module.exports = ClientError
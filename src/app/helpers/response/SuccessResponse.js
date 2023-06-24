class SuccessResponse {
    constructor(data, statusCode = 200) {
      this.data = data;
      this.statusCode = statusCode;
    }
  }
  
  const successResponseMiddleware = (req, res, next) => {
    res.success = (data, statusCode = 200) => {
      const response = new SuccessResponse(data, statusCode);
      return res.status(response.statusCode).json({
        status: 'success',
        data: response.data,
      });
    };
    next();
  };
  
  module.exports = successResponseMiddleware;
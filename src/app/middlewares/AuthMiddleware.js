const jwt = require("jsonwebtoken");
const AuthenticationError = require("../helpers/response/AuthenticationError");
const InvariantError = require("../helpers/response/InvariantError");
const db = require("../models");
class AuthMiddleware {
  static checkToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      throw new AuthenticationError("Authorization token not found", 401);
    }

    try {
      // Verify token and extract payload
      const decoded = jwt.verify(
        token,
        process.env.ACCESS_SECRET_KEY || "Secret"
      );
      const { id, email, role } = decoded;
      req.role = role;
      req.userId = id;
      req.email = email;

      next();
    } catch (err) {
      throw new AuthenticationError("Invalid Token");
    }
  }

  static async checkEmailExist(req, res, next) {
    try {
      const email = await db.Users.findOne({
        where: { email: req.body.email },
      });
      if (email) {
        throw new InvariantError("Email is already exist", 422);
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthMiddleware;

const argon2 = require("argon2");
const InvariantError = require("../helpers/response/InvariantError");
const validateRequest = require("../helpers/validation");
const registration = require("../helpers/validation/register");
const db = require("../models");
const AuthenticationError = require("../helpers/response/AuthenticationError");
const { generateToken } = require("../helpers/utils/GenerateToken");
const { sendVerificationEmail } = require("../helpers/utils/EmailUtils");
class AuthController {
  async register(req, res, next) {
    try {
      validateRequest(req.body, registration);
      const { email, password, confirm_password } = req.body;

      if (confirm_password !== password) {
        throw new InvariantError("Confirm password tidak sesuai", 422);
      }
      // Create a new user

      const hashedPassword = await argon2.hash(password);
      const user = await db.Users.create({
        email,
        password: hashedPassword,
        user_type: req.params.type,
        is_activated : 1
      });

      // Send verification email
      const token = generateToken(user);
      // const sendEmail = await sendVerificationEmail(email, {otp : token});

      res.success(token, 201);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await db.Users.findOne({ where: { email } });
      if (!user) {
        throw new InvariantError("Email atau password salah!", 422);
      }
      const passwordMatch = await argon2.verify(user.password, password);
      if (!passwordMatch) {
        throw new InvariantError("Email atau password salah!", 422);
      }
      
      if (!user.is_activated) {
        throw new AuthenticationError("Harap verifikasi akun terlebih dahulu");
      }
      // Generate and return the JWT token
      const token = generateToken(user);
      res.success(token);
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  }
}

module.exports = new AuthController();

const jwt = require('jsonwebtoken')

exports.generateToken = (user) => {
    return jwt.sign({ id : user.id, email: user.email , role : user.user_type}, process.env.ACCESS_SECRET_KEY || "Secret", { expiresIn: '7h' });
};

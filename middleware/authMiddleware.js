const jwt = require('jsonwebtoken');

// Protect routes
const protect = async (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token contains the admin email
    if (decoded.email !== 'maidasyed@gmail.com' || decoded.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      });
    }

    // Add user info to req object
    req.user = { email: decoded.email, role: decoded.role };

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
};

module.exports = { protect };
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST /api/auth/login
// @desc    Login user with hardcoded admin credentials
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'Please provide an email and password'
    });
  }

  // Hardcoded admin credentials
  const adminEmail = "maidasyed@gmail.com";
  const adminPassword = "maida@123";

  // Check if credentials match hardcoded admin values
  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  try {
    // Generate JWT token
    const jwt = require('jsonwebtoken');
    const token = jwt.sign(
      { email, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    
    // Return token and success message
    res.status(200).json({
      success: true,
      token,
      message: 'Login successful',
      user: {
        email,
        role: 'admin'
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @route   GET /api/auth/check
// @desc    Check if email exists (for admin verification)
// @access  Public
router.post('/check', async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({
      success: false,
      error: 'Please provide an email'
    });
  }

  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        exists: false
      });
    }

    res.status(200).json({
      success: true,
      exists: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// @route   POST /api/auth/register
// @desc    Register a user (for seeding admin user)
// @access  Public (should be restricted in production)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({
      email,
      password
    });

    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;
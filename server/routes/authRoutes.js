import express from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// Generate JWT token helper
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'digimarket_super_secret_jwt_key_2026';
  return jwt.sign({ id }, secret, {
    expiresIn: '7d',
  });
};

// @route   POST /api/auth/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password',
      });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials',
      });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials',
      });
    }

    const token = generateToken(admin._id);

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login authentication',
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get currently authenticated admin
// @access  Protected
router.get('/me', protectAdmin, async (req, res) => {
  res.json({
    success: true,
    admin: {
      id: req.admin._id,
      name: req.admin.name,
      email: req.admin.email,
      role: req.admin.role,
    },
  });
});

// @route   POST /api/auth/logout
// @desc    Admin logout
// @access  Protected
router.post('/logout', protectAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'Successfully logged out',
  });
});

export default router;

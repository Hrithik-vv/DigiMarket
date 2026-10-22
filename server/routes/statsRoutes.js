import express from 'express';
import Enquiry from '../models/Enquiry.js';
import Service from '../models/Service.js';
import Blog from '../models/Blog.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// GET /api/stats (Admin: dashboard statistics from real database records)
router.get('/', protectAdmin, async (req, res) => {
  try {
    const [
      totalEnquiries,
      unreadEnquiries,
      totalServices,
      activeServices,
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      recentEnquiries,
      recentBlogs,
    ] = await Promise.all([
      Enquiry.countDocuments(),
      Enquiry.countDocuments({ isRead: false }),
      Service.countDocuments(),
      Service.countDocuments({ isActive: true }),
      Blog.countDocuments(),
      Blog.countDocuments({ status: 'published' }),
      Blog.countDocuments({ status: 'draft' }),
      Enquiry.find().sort({ createdAt: -1 }).limit(6),
      Blog.find().sort({ createdAt: -1 }).limit(5),
    ]);

    res.json({
      success: true,
      data: {
        totalEnquiries,
        unreadEnquiries,
        totalServices,
        activeServices,
        totalBlogs,
        publishedBlogs,
        draftBlogs,
        recentEnquiries,
        recentBlogs,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve dashboard statistics' });
  }
});

export default router;

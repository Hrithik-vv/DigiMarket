import express from 'express';
import Enquiry from '../models/Enquiry.js';
import { protectAdmin } from '../middleware/auth.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for public enquiry submissions (prevent spam: 10 per 15 minutes per IP)
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    success: false,
    message: 'Too many enquiry submissions from this IP. Please try again after 15 minutes or contact us directly on WhatsApp.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ==========================================
// Public Endpoints
// ==========================================

// POST /api/enquiries (Public: submit contact form)
router.post('/', enquiryLimiter, async (req, res) => {
  try {
    const { name, company, email, phone, service, budget, timeline, message, honeypot } = req.body;

    // Silent reject if honeypot was filled
    if (honeypot) {
      return res.status(200).json({ success: true, message: 'Enquiry received successfully' });
    }

    // Server-side validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return res.status(400).json({ success: false, message: 'A valid email address is required' });
    }
    if (!phone || phone.replace(/[^0-9+]/g, '').length < 8) {
      return res.status(400).json({ success: false, message: 'A valid phone number is required' });
    }
    if (!service || !service.trim()) {
      return res.status(400).json({ success: false, message: 'Please select a service' });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Project description must be at least 10 characters' });
    }

    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    const newEnquiry = new Enquiry({
      name: name.trim(),
      company: (company || '').trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: service.trim(),
      budget: (budget || '').trim(),
      timeline: (timeline || '').trim(),
      message: message.trim(),
      ipAddress,
      isRead: false,
    });

    const saved = await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Thank you! Your project enquiry has been successfully received.',
      data: {
        id: saved._id,
        name: saved.name,
      },
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please try again or reach out on WhatsApp.',
    });
  }
});

// ==========================================
// Protected Admin Endpoints
// ==========================================

// GET /api/enquiries (Admin: list enquiries with search & filter)
router.get('/', protectAdmin, async (req, res) => {
  try {
    const { search, status, service, page = 1, limit = 50 } = req.query;

    const query = {};

    if (status === 'unread') {
      query.isRead = false;
    } else if (status === 'read') {
      query.isRead = true;
    }

    if (service && service !== 'all') {
      query.service = service;
    }

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: regex },
        { email: regex },
        { phone: regex },
        { company: regex },
        { message: regex },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Enquiry.countDocuments(query);
    const unreadCount = await Enquiry.countDocuments({ isRead: false });

    const enquiries = await Enquiry.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({
      success: true,
      count: enquiries.length,
      total,
      unreadCount,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: enquiries,
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve enquiries' });
  }
});

// GET /api/enquiries/:id (Admin: get single enquiry detail)
router.get('/:id', protectAdmin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    res.json({ success: true, data: enquiry });
  } catch (error) {
    console.error('Error fetching enquiry details:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve enquiry' });
  }
});

// PATCH /api/enquiries/:id/read (Admin: toggle read status)
router.patch('/:id/read', protectAdmin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    if (typeof req.body.isRead === 'boolean') {
      enquiry.isRead = req.body.isRead;
    } else {
      enquiry.isRead = !enquiry.isRead;
    }

    await enquiry.save();
    res.json({
      success: true,
      data: enquiry,
      message: `Enquiry marked as ${enquiry.isRead ? 'read' : 'unread'}`,
    });
  } catch (error) {
    console.error('Error updating enquiry status:', error);
    res.status(500).json({ success: false, message: 'Failed to update enquiry status' });
  }
});

// DELETE /api/enquiries/:id (Admin: delete enquiry)
router.delete('/:id', protectAdmin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    res.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to delete enquiry' });
  }
});

export default router;

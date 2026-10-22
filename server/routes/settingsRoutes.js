import express from 'express';
import Settings from '../models/Settings.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// GET /api/settings (Public: load site branding & contact details)
router.get('/', async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }
    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve website settings' });
  }
});

// PUT /api/settings (Admin: update website settings)
router.put('/', protectAdmin, async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings(req.body);
    } else {
      Object.assign(settings, req.body);
    }

    const saved = await settings.save();
    res.json({
      success: true,
      data: saved,
      message: 'Website settings successfully updated',
    });
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to update website settings' });
  }
});

export default router;

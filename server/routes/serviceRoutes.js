import express from 'express';
import Service from '../models/Service.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// ==========================================
// Public Endpoints
// ==========================================

// GET /api/services (Public: list active services)
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    res.json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve services' });
  }
});

// GET /api/services/:slug (Public: get service by slug)
router.get('/slug/:slug', async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug, isActive: true });
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found or disabled' });
    }
    res.json({ success: true, data: service });
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve service' });
  }
});

// ==========================================
// Protected Admin Endpoints
// ==========================================

// GET /api/services/admin/all (Admin: get all services including inactive)
router.get('/admin/all', protectAdmin, async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1, createdAt: -1 });
    res.json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    console.error('Error fetching admin services:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve services' });
  }
});

// POST /api/services (Admin: create new service)
router.post('/', protectAdmin, async (req, res) => {
  try {
    const { title, slug, category, categoryName, subtitle, h1, intro, explanation, heroImage } = req.body;

    if (!title || !category) {
      return res.status(400).json({ success: false, message: 'Title and category are required' });
    }

    const calculatedSlug = (slug || title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const existing = await Service.findOne({ slug: calculatedSlug });
    if (existing) {
      return res.status(400).json({ success: false, message: 'A service with this slug already exists' });
    }

    const newService = new Service({
      ...req.body,
      slug: calculatedSlug,
      url: `/${calculatedSlug}/`,
      categoryName: categoryName || category,
    });

    const saved = await newService.save();
    res.status(201).json({ success: true, data: saved, message: 'Service created successfully' });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to create service' });
  }
});

// PUT /api/services/:id (Admin: update existing service)
router.put('/:id', protectAdmin, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    if (req.body.slug && req.body.slug !== service.slug) {
      const cleanSlug = req.body.slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
      const conflict = await Service.findOne({ slug: cleanSlug, _id: { $ne: req.params.id } });
      if (conflict) {
        return res.status(400).json({ success: false, message: 'Slug is already used by another service' });
      }
      req.body.slug = cleanSlug;
      req.body.url = `/${cleanSlug}/`;
    }

    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json({ success: true, data: updated, message: 'Service updated successfully' });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to update service' });
  }
});

// PATCH /api/services/:id/toggle (Admin: toggle active status)
router.patch('/:id/toggle', protectAdmin, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    service.isActive = !service.isActive;
    await service.save();

    res.json({
      success: true,
      data: service,
      message: `Service has been ${service.isActive ? 'enabled' : 'disabled'}`,
    });
  } catch (error) {
    console.error('Error toggling service status:', error);
    res.status(500).json({ success: false, message: 'Failed to update service status' });
  }
});

// DELETE /api/services/:id (Admin: delete service)
router.delete('/:id', protectAdmin, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ success: false, message: 'Failed to delete service' });
  }
});

export default router;

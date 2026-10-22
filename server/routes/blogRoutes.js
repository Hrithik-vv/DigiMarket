import express from 'express';
import Blog from '../models/Blog.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

// ==========================================
// Public Endpoints
// ==========================================

// GET /api/blogs (Public: list published posts only)
router.get('/', async (req, res) => {
  try {
    const posts = await Blog.find({ status: 'published' }).sort({ publishedAt: -1, createdAt: -1 });
    res.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve blog posts' });
  }
});

// GET /api/blogs/:slug (Public: get single published post)
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug, status: 'published' });
    if (!post) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.json({ success: true, data: post });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve article' });
  }
});

// ==========================================
// Protected Admin Endpoints
// ==========================================

// GET /api/blogs/admin/all (Admin: get all posts including drafts)
router.get('/admin/all', protectAdmin, async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error('Error fetching admin blogs:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve blog posts' });
  }
});

// POST /api/blogs (Admin: create new post)
router.post('/', protectAdmin, async (req, res) => {
  try {
    const { title, slug, category, excerpt, content, status, author, readTime, image, isFeatured, metaTitle, metaDesc } = req.body;

    if (!title || !content || !excerpt) {
      return res.status(400).json({ success: false, message: 'Title, excerpt, and content are required' });
    }

    const calculatedSlug = (slug || title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const existing = await Blog.findOne({ slug: calculatedSlug });
    if (existing) {
      return res.status(400).json({ success: false, message: 'An article with this slug already exists' });
    }

    const newBlog = new Blog({
      title,
      slug: calculatedSlug,
      category: category || 'Digital Engineering',
      excerpt,
      content,
      status: status || 'published',
      author: author || 'DigiMarket Editorial Team',
      readTime: readTime || '5 min read',
      image: image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      isFeatured: Boolean(isFeatured),
      metaTitle: metaTitle || `${title} | DigiMarket`,
      metaDesc: metaDesc || excerpt,
    });

    const saved = await newBlog.save();
    res.status(201).json({ success: true, data: saved, message: 'Article created successfully' });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to create article' });
  }
});

// PUT /api/blogs/:id (Admin: update post)
router.put('/:id', protectAdmin, async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }

    if (req.body.slug && req.body.slug !== post.slug) {
      const cleanSlug = req.body.slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
      const conflict = await Blog.findOne({ slug: cleanSlug, _id: { $ne: req.params.id } });
      if (conflict) {
        return res.status(400).json({ success: false, message: 'Slug is already used by another article' });
      }
      req.body.slug = cleanSlug;
    }

    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json({ success: true, data: updated, message: 'Article updated successfully' });
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ success: false, message: error.message || 'Failed to update article' });
  }
});

// PATCH /api/blogs/:id/publish (Admin: toggle publish/draft status)
router.patch('/:id/publish', protectAdmin, async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }

    post.status = post.status === 'published' ? 'draft' : 'published';
    if (post.status === 'published' && !post.publishedAt) {
      post.publishedAt = new Date();
    }
    await post.save();

    res.json({
      success: true,
      data: post,
      message: `Article is now ${post.status}`,
    });
  } catch (error) {
    console.error('Error changing article status:', error);
    res.status(500).json({ success: false, message: 'Failed to update article status' });
  }
});

// DELETE /api/blogs/:id (Admin: delete post)
router.delete('/:id', protectAdmin, async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.json({ success: true, message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ success: false, message: 'Failed to delete article' });
  }
});

export default router;

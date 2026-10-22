import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import Settings from '../models/Settings.js';
import Service from '../models/Service.js';
import Blog from '../models/Blog.js';

let mongodInstance = null;

export const connectDB = async () => {
  const primaryUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/digimarket';

  try {
    console.log(`Connecting to MongoDB at: ${primaryUri}...`);
    // Set a short serverSelectionTimeoutMS so we fall back quickly if local daemon isn't running
    await mongoose.connect(primaryUri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log('Successfully connected to primary MongoDB database.');
  } catch (err) {
    console.warn('Primary MongoDB connection failed:', err.message);
    console.log('Starting resilient embedded MongoMemoryServer instance...');
    try {
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      mongodInstance = await MongoMemoryServer.create();
      const memoryUri = mongodInstance.getUri();
      await mongoose.connect(memoryUri);
      console.log(`Connected to resilient MongoMemoryServer at: ${memoryUri}`);
    } catch (memErr) {
      console.error('Fatal error connecting to database:', memErr);
      throw memErr;
    }
  }

  // Auto-seed initial data
  await autoSeed();
};

export const autoSeed = async () => {
  try {
    // 1. Seed Admin
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const email = process.env.ADMIN_EMAIL || 'admin@digimarket.in';
      const password = process.env.ADMIN_PASSWORD || 'Admin@DigiMarket2026!';
      const defaultAdmin = new Admin({
        name: 'DigiMarket Administrator',
        email,
        password,
        role: 'superadmin',
      });
      await defaultAdmin.save();
      console.log(`[SEED] Initialized default administrator: ${email}`);
    }

    // 2. Seed Settings
    const settingsCount = await Settings.countDocuments();
    if (settingsCount === 0) {
      const defaultSettings = new Settings({
        siteName: 'DigiMarket',
        legalName: 'DigiMarket Digital Agency',
        tagline: 'Digital Engineering for Businesses That Want to Grow',
        businessDescription:
          'DigiMarket is a premier digital engineering and growth agency, helping businesses across India and the GCC with web development, digital marketing, cloud infrastructure, and branding.',
        contactEmail: 'hello@digimarket.in',
        contactPhone: '+91 98765 43210',
        contactPhoneRaw: '+919876543210',
        whatsappNumber: '+919876543210',
        whatsappMessage: 'Hi DigiMarket, I would like to discuss a project.',
        address: 'Kuthuparamba, Kannur, Kerala, India',
        location: 'Kuthuparamba, Kannur, Kerala',
        businessHours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
        socialInstagram: 'https://instagram.com',
        socialLinkedin: 'https://linkedin.com',
        socialFacebook: 'https://facebook.com',
        footerCopyright: '© 2026 DigiMarket Digital Agency. All rights reserved.',
      });
      await defaultSettings.save();
      console.log('[SEED] Initialized default website settings.');
    }

    // 3. Seed Services from servicesData if empty
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      const { ALL_SERVICES } = await import('../../src/data/servicesData.js');
      if (ALL_SERVICES && ALL_SERVICES.length > 0) {
        const servicesToInsert = ALL_SERVICES.map((srv, idx) => {
          const categorySlug = typeof srv.category === 'object' ? srv.category.id : (srv.category || 'web-engineering');
          const categoryName = typeof srv.category === 'object' ? srv.category.name : (srv.categoryName || 'Web Engineering');

          return {
            title: srv.title,
            slug: srv.slug,
            url: srv.url,
            category: categorySlug,
            categoryName: categoryName,
            h1: srv.h1,
            subtitle: srv.subtitle,
            metaTitle: srv.metaTitle?.replace(/loreD/gi, 'DigiMarket') || `${srv.title} | DigiMarket`,
            metaDesc: srv.metaDesc?.replace(/loreD/gi, 'DigiMarket'),
            heroImage: srv.heroImage,
            intro: srv.intro?.replace(/loreD/gi, 'DigiMarket'),
            explanation: srv.explanation?.replace(/loreD/gi, 'DigiMarket'),
            problemTitle: srv.problemTitle,
            problemDesc: srv.problemDesc,
            features: srv.features || [],
            benefits: srv.benefits || [],
            included: srv.included || [],
            techStack: srv.techStack || [],
            faqs: srv.faqs || [],
            isActive: true,
            order: idx,
          };
        });
        await Service.insertMany(servicesToInsert);
        console.log(`[SEED] Initialized ${servicesToInsert.length} services from repository.`);
      }
    }

    // 4. Seed Blogs from blogData if empty
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      const { BLOG_POSTS } = await import('../../src/data/blogData.js');
      if (BLOG_POSTS && BLOG_POSTS.length > 0) {
        const blogsToInsert = BLOG_POSTS.map((p, idx) => ({
          title: p.title,
          slug: p.slug,
          category: p.category,
          readTime: p.readTime,
          date: p.date,
          author: p.author?.replace(/loreD/gi, 'DigiMarket') || 'DigiMarket Editorial Team',
          image: p.image,
          excerpt: p.excerpt?.replace(/loreD/gi, 'DigiMarket'),
          content: p.content?.replace(/loreD/gi, 'DigiMarket'),
          status: 'published',
          isFeatured: idx === 0,
          metaTitle: `${p.title} | DigiMarket`,
          metaDesc: p.excerpt?.replace(/loreD/gi, 'DigiMarket'),
        }));
        await Blog.insertMany(blogsToInsert);
        console.log(`[SEED] Initialized ${blogsToInsert.length} blog posts from repository.`);
      }
    }
  } catch (seedErr) {
    console.error('Error during automatic seed:', seedErr);
  }
};

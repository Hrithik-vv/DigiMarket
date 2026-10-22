import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      default: 'Digital Engineering',
    },
    readTime: {
      type: String,
      default: '5 min read',
      trim: true,
    },
    date: {
      type: String,
      default: () =>
        new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      default: 'DigiMarket Editorial Team',
      trim: true,
    },
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    status: {
      type: String,
      enum: ['published', 'draft'],
      default: 'published',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDesc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Auto slug generation if missing
blogSchema.pre('validate', function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;

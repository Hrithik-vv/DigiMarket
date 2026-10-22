import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Service title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    url: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    categoryName: {
      type: String,
      trim: true,
    },
    h1: {
      type: String,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDesc: {
      type: String,
      trim: true,
    },
    heroImage: {
      type: String,
      trim: true,
    },
    intro: {
      type: String,
      trim: true,
    },
    explanation: {
      type: String,
      trim: true,
    },
    problemTitle: {
      type: String,
      trim: true,
    },
    problemDesc: {
      type: String,
      trim: true,
    },
    features: [
      {
        title: { type: String, trim: true },
        desc: { type: String, trim: true },
      },
    ],
    benefits: [{ type: String, trim: true }],
    included: [{ type: String, trim: true }],
    techStack: [{ type: String, trim: true }],
    faqs: [
      {
        q: { type: String, trim: true },
        a: { type: String, trim: true },
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save to ensure url is formatted
serviceSchema.pre('save', function (next) {
  if (this.slug && !this.url) {
    this.url = `/${this.slug.replace(/^\/+|\/+$/g, '')}/`;
  }
  next();
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;

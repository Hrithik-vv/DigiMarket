import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Selected service is required'],
      trim: true,
    },
    budget: {
      type: String,
      trim: true,
      default: '',
    },
    timeline: {
      type: String,
      trim: true,
      default: '',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    ipAddress: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;

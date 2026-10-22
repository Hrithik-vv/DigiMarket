import dotenv from 'dotenv';
import { connectDB, autoSeed } from '../config/db.js';
import mongoose from 'mongoose';

dotenv.config();

const runSeed = async () => {
  try {
    console.log('--- Starting Manual Database Seeding ---');
    await connectDB();
    await autoSeed();
    console.log('--- Database Seeding Completed Successfully ---');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

runSeed();

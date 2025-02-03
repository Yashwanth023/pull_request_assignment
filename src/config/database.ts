// Note: Replace MONGODB_URI with your actual MongoDB connection string
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pr-management';

export const DB_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
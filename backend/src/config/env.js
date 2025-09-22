import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
  CLERK_API_KEY: process.env.CLERK_API_KEY || "",
  CLERK_API_URL: process.env.CLERK_API_URL || "",
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
  ARCJET_KEY: process.env.ARCJET_KEY || "",
};

export default ENV;

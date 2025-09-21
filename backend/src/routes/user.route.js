import express from 'express';
import { get } from 'mongoose';
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from '../controller/user.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

//public route
router.get("/profile/:username",getUserProfile);

//protected route
router.post("/sync",protectRoute, syncUser);
router.post("/me",protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser)


export default router;
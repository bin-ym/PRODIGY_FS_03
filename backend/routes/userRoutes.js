// backend/routes/userRoutes.js

import express from 'express';
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to authenticate a user
router.post('/login', authUser);

// Route to get the profile of the logged-in user
router.get('/profile', protect, getUserProfile);

// Route to update the profile of the logged-in user
router.put('/profile', protect, updateUserProfile);

// Route to get all users (admin only)
router.get('/', protect, admin, getUsers);

// Route to delete a user (admin only)
router.delete('/:id', protect, admin, deleteUser);

export default router;

// authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin.models'; 
import { validationResult } from 'express-validator';

// Admin registration
export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    // Validate email
    if (!email) {
      res.status(400).json({ error: "Email is required" });
      return;
    }

    // Validate password
    if (!password) {
      res.status(400).json({ error: "Password is required" });
      return;
    }

    // Check if user already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      res.status(409).json({ error: "Email already registered" });
      return;
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Admin.create({ email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Admin login
export async function login(req: Request, res: Response): Promise<void> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;

    // Validate email
    if (!email) {
      res.status(400).json({ error: "Email is required" });
      return;
    }

    // Validate password
    if (!password) {
      res.status(400).json({ error: "Password is required" });
      return;
    }

    // Find user by email
    const user = await Admin.findOne({ email });

    // Check if user exists
    if (!user) {
      res.status(404).json({ error: "Email not found" });
      return;
    }

    // Check password
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      res.status(400).json({ error: "Password does not match" });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.REFRESH_JWT_SECRET || '',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: "User login successful",
      email: user.email,
      token,
    });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

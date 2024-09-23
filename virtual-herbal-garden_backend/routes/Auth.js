const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid'); // For generating unique email tokens



// Email configuration using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Your App Password or Gmail password
  },
   debug: true, // Enable debug mode
  logger: true // Log everything to console
});

const sendVerificationEmail = async (userEmail, token) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: userEmail,
    subject: 'Email Verification',
    html: `<p>Please verify your email by clicking the following link:</p>
           <a href="http://localhost:5000/api/auth/verify-email/${token}">Verify Email</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Signup Route
// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const newUser = new User({ username, email, password,  emailToken: uuidv4(), });
     
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/verify-email/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ emailToken: token });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.emailToken = null; // Clear the token
    user.isVerified = true; // Mark email as verified
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Login Route

// auth.js
// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    console.log('Received login request for:', email); // Debugging email

    const user = await User.findOne({ email });
    if (!user) {
      console.log('No user found with that email'); // Debugging
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log('User found:', user); // Debugging user details

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Password does not match'); // Debugging
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log('Login successful for:', user.email); // Debugging success
    res.status(200).json({ user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;

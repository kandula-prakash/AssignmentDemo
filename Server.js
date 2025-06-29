const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error('MongoDB error:', err));

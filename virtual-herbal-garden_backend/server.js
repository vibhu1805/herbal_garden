/*const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
console.log(`Loaded MONGO_URI: ${process.env.MONGO_URI}`);
const connectDB = require('./config/db');
const plantsRouter = require('./routes/plants'); // Path to your route file
const userRoutes = require('./routes/userRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
connectDB();
const app = express();
app.use(express.json());
app.use('/api/plants', plantsRouter)
app.use('/api/users', userRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

app.use(notFound);
app.use(errorHandler);
app.get('/plants', (req, res) => {
    res.send('List of plants');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/
/*
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/Auth');
dotenv.config();
const connectDB = require('./config/db');
const plantRoutes = require('./routes/plantRoutes'); // Path to your route file
const userRoutes = require('./routes/userRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

// Register the /api/plants route
app.use('/api/plants', plantRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

app.use(notFound);
app.use(errorHandler);
app.use('/api/auth', require(authRoutes));
// 404 handler (after all routes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const plantRoutes = require('./routes/plantRoutes'); // Path to your route file
const userRoutes = require('./routes/userRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/Auth'); // Correctly import the router

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/plants', plantRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookmarks', bookmarkRoutes)
app.use(notFound);
app.use(errorHandler);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use auth routes for /api/auth
app.use('/api/auth/login', authRoutes); // Make sure this line is correct

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: `hNot Found - ${req.originalUrl}` });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const plantRoutes = require('./routes/plantRoutes');
const userRoutes = require('./routes/userRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv');
const authRoutes = require('./routes/Auth');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.options('*', cors()); // Allow preflight requests

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookmarks', bookmarkRoutes);
app.use(notFound);
app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

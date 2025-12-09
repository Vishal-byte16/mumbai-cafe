const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Use CORS for all routes
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON bodies

// Import routes
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Use the routes
app.use('/api', menuRoutes);
app.use('/api', orderRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Mumbai Cafe Backend');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

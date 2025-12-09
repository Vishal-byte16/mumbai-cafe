const express = require('express');
const router = express.Router();

// Placeholder for orders (in-memory storage)
let orders = [];

// Route to create an order
router.post('/order', (req, res) => {
  const { customerName, items } = req.body;  // Assume that order includes customer name and items array
  const orderId = orders.length + 1;
  const newOrder = { orderId, customerName, items, status: 'Pending' };
  orders.push(newOrder);
  res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
});

// Route to get orders
router.get('/orders', (req, res) => {
  res.json(orders);
});

module.exports = router;

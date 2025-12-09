const express = require('express');
const router = express.Router();

// Updated menu data with 20 items (food and drinks)
const menuItems = [
  { id: 1, name: 'Vada Pav', price: 25, image: '/images/vada-pav.jpg', description: 'A spicy potato fritter in a bun served with chutney.' },
  { id: 2, name: 'Pav Bhaji', price: 50, image: '/images/pav-bhaji.jpg', description: 'A flavorful vegetable curry served with buttered bread.' },
  { id: 3, name: 'Misal Pav', price: 45, image: '/images/misal-pav.jpg', description: 'A spicy curry with sprouts served with bread rolls.' },
  { id: 4, name: 'Batata Vada', price: 40, image: '/images/batata-vada.jpg', description: 'Fried potato dumplings served with chutney.' },
  { id: 5, name: 'Dosa (Plain)', price: 60, image: '/images/dosa.jpg', description: 'Crispy rice pancake served with chutney.' },
  { id: 6, name: 'Masala Dosa', price: 80, image: '/images/masala-dosa.jpg', description: 'Crispy dosa with spiced potato filling.' },
  { id: 7, name: 'Cheese Dosa', price: 90, image: '/images/cheese-dosa.jpg', description: 'Crispy dosa with melted cheese filling.' },
  { id: 8, name: 'Sabudana Khichdi', price: 60, image: '/images/sabudana-khichdi.jpg', description: 'Tapioca pearls cooked with peanuts and spices.' },
  { id: 9, name: 'Aloo Tikki', price: 40, image: '/images/aloo-tikki.jpg', description: 'Crispy potato patties served with chutney.' },
  { id: 10, name: 'Chole Bhature', price: 100, image: '/images/chole-bhature.jpg', description: 'Fried bread served with spicy chickpeas curry.' },
  { id: 11, name: 'Ragda Pattice', price: 70, image: '/images/ragda-pattice.jpg', description: 'Fried potato patties served with a spicy chickpea curry.' },
  { id: 12, name: 'Dhokla', price: 30, image: '/images/dhokla.jpg', description: 'Steamed rice cake served with chutney.' },
  { id: 13, name: 'Pani Puri', price: 40, image: '/images/pani-puri.jpg', description: 'Puffed puris filled with spicy water and potatoes.' },
  { id: 14, name: 'Bhel Puri', price: 50, image: '/images/bhel-puri.jpg', description: 'Puffed rice mixed with chutney, sev, and vegetables.' },
  { id: 15, name: 'Samosa', price: 20, image: '/images/samosa.jpg', description: 'Crispy pastry filled with spiced potatoes.' },
  { id: 16, name: 'Keema Pav', price: 100, image: '/images/keema-pav.jpg', description: 'Minced meat curry served with bread rolls.' },
  { id: 17, name: 'Bombay Sandwich', price: 60, image: '/images/bombay-sandwich.jpg', description: 'Grilled sandwich with vegetables, chutney, and cheese.' },
  { id: 18, name: 'Frankies (Rolls)', price: 80, image: '/images/frankie.jpg', description: 'Stuffed paratha with fillings like paneer, chicken, or veggies.' },
  { id: 19, name: 'Masala Chai', price: 30, image: '/images/masala-chai.jpg', description: 'A spiced tea with ginger, cardamom, and other spices.' },
  { id: 20, name: 'Cutting Chai', price: 20, image: '/images/cutting-chai.jpg', description: 'Small but strong cup of tea, a Mumbai favorite.' },
  { id: 21, name: 'Coffee', description: 'A strong, freshly brewed cup of coffee.', price: 50, image: '/images/coffee.jpg' }  // Missing comma added here
];

// Route to get menu items
router.get('/menu', (req, res) => {
  res.json(menuItems); // Return JSON formatted response
});

module.exports = router;

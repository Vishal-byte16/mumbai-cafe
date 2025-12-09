import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  // For animations
import './App.css';
import axios from 'axios'; // Import axios to fetch data

function App() {
  const [data, setData] = useState(''); // For server response
  const [menu, setMenu] = useState([]); // For menu items

  useEffect(() => {
    // Fetch data from the backend server (Node.js)
    fetch('http://localhost:5000')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => setData(data)) // Store response in state
      .catch(error => {
        console.error('Error fetching data:', error);
        setData('Sorry, we are having trouble fetching the data.');
      });

    // Fetch menu items from backend API
    axios.get('http://localhost:5000/api/menu')
      .then(response => setMenu(response.data))
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home" aria-label="Go to home section">Home</a></li>
          <li><a href="#menu" aria-label="View our menu">Menu</a></li>
          <li><a href="#about" aria-label="Learn more about us">About Us</a></li>
          <li><a href="#contact" aria-label="Contact us">Contact</a></li>
          <li><a href="#reviews" aria-label="Read customer reviews">Reviews</a></li>
          <li><a href="#offers" aria-label="Check out our special offers">Special Offers</a></li>
          <li><a href="#social" aria-label="Follow us on social media">Follow Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="App-header" id="home">
        <div className="hero-strip">
          <motion.h1 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Welcome to Mumbai Cafe
          </motion.h1>

          {/* Updated tagline */}
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            A taste of Mumbai, A Taste of Greatness
          </motion.p>
        </div>
      </header>

      {/* Menu Section */}
      <motion.section 
        className="menu" 
        id="menu" 
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }} 
        transition={{ duration: 1 }}
      >
        <h2>Our Menu</h2>
        <div className="menu-cards">
          {/* Dynamically render menu items */}
          {menu.length > 0 ? (
            menu.map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
              </div>
            ))
          ) : (
            <p>Loading menu...</p>
          )}
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section 
        className="about" 
        id="about" 
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }} 
        transition={{ duration: 1 }}
      >
        <h2>About Us</h2>
        <p>We serve authentic Mumbai street food with love and care. Our mission is to bring the vibrant flavors of Mumbai to your plate.</p>
      </motion.section>

      {/* Customer Reviews Section */}
      <motion.section 
        className="reviews" 
        id="reviews" 
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }} 
        transition={{ duration: 1 }}
      >
        <h2>What Our Customers Say</h2>
        <div className="review-card">
          <p>"The Vada Pav is the best I've ever had! Will definitely come back again."</p>
          <span>- Sarah D.</span>
        </div>
        <div className="review-card">
          <p>"Amazing chai and great ambiance. Highly recommend Mumbai Cafe!"</p>
          <span>- Ravi P.</span>
        </div>
      </motion.section>

      {/* Special Offers Section */}
      <motion.section 
        className="special-offers" 
        id="offers" 
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }} 
        transition={{ duration: 1 }}
      >
        <h2>Special Offers</h2>
        <div className="offer">
          <h3>20% Off on All Meals!</h3>
          <p>Enjoy 20% off on your total bill when you visit us. Offer valid this week only.</p>
        </div>
        <div className="offer">
          <h3>Buy 1 Get 1 Free on Chai</h3>
          <p>Order one cup of chai and get another one free. Hurry up before the offer ends!</p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="contact" 
        id="contact" 
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }} 
        transition={{ duration: 1 }}
      >
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:contact@mumbaicafe.com">contact@mumbaicafe.com</a></p>
        <p>Phone: <a href="tel:+91999888777">+91 999 888 777</a></p>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>&copy; 2025 Mumbai Cafe. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;

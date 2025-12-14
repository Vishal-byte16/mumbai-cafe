import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./App.css";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.error(err));

    axios
      .get("http://localhost:5000/api/menu")
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="App-header" id="home">
        <div className="hero-strip">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Mumbai Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A Taste of Mumbai, A Taste of Greatness
          </motion.p>
        </div>
      </header>

      {/* MENU */}
      <motion.section className="menu" id="menu">
        <h2>Our Menu</h2>
        <div className="menu-cards">
          {menu.length > 0 ? (
            menu.map((item, index) => (
              <div className="menu-card" key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>₹ {item.price}</strong></p>
              </div>
            ))
          ) : (
            <p>Loading menu...</p>
          )}
        </div>
      </motion.section>

      {/* ABOUT US */}
      <motion.section className="about-us" id="about">
        <h2 className="about-title">About Us</h2>

        <p className="about-intro">
          🍽️ <strong>Authentic Mumbai Street Food, Made with Heart.</strong><br />
          At Mumbai Cafe, we celebrate the true essence of Mumbai’s street food culture.
          Every dish we serve carries the flavors, memories, and emotions of the city.
          Our mission is to bring people together through food that feels familiar,
          comforting, and deeply rooted in local tradition.
        </p>

        <div className="about-section">
          <h3>📍 Our Story</h3>
          <p>
            Our journey began with a simple dream — to create a place where people
            could experience the soul of Mumbai under one roof.
            In a fast-moving city, we wanted to offer a space where time slows down,
            conversations feel warmer, and every visit feels special.
            What started as an idea soon became a café loved by locals and visitors alike.
          </p>
        </div>

        <div className="about-section">
          <h3>🌆 Inspired by Mumbai</h3>
          <p>
            Mumbai is not just our location — it is our identity.
            From early morning chai breaks to late-night food cravings,
            the city inspires everything we do.
            Our café reflects Mumbai’s diversity, resilience, and energy,
            welcoming people from all walks of life with open arms.
          </p>
        </div>

        <div className="about-section">
          <h3>🤝 More Than a Café</h3>
          <p>
            We believe a café should be more than just a place to eat.
            It should be a space where friendships grow, ideas are shared,
            and moments are created.
            Whether you’re working, studying, meeting friends, or simply relaxing,
            Mumbai Cafe is designed to feel like your second home.
          </p>
        </div>

        <div className="about-section">
          <h3>☕ Quality You Can Taste</h3>
          <p>
            Quality is at the heart of everything we serve.
            From sourcing fresh ingredients to maintaining authentic flavors,
            we ensure consistency in every bite and sip.
            Our food and beverages are prepared with care, passion,
            and attention to detail so that every visit is worth remembering.
          </p>
        </div>

        <div className="about-section">
          <h3>❤️ Community & Hospitality</h3>
          <p>
            What truly sets us apart is our commitment to people.
            Our team believes in warm smiles, friendly conversations,
            and genuine hospitality.
            We strive to make every guest feel welcome, valued,
            and eager to return for another memorable experience.
          </p>
        </div>

        <p className="about-ending">
          🌟 <em>Welcome in. Sit back. Sip slowly. You belong here.</em>
        </p>
      </motion.section>

      {/* REVIEWS */}
      <motion.section className="reviews" id="reviews">
        <h2>What Our Customers Say</h2>
        <div className="review-card">
          <p>"Best Vada Pav in town with authentic Mumbai taste!"</p>
          <span>- Sarah D.</span>
        </div>
        <div className="review-card">
          <p>"Amazing chai, friendly staff, and a cozy vibe."</p>
          <span>- Ravi P.</span>
        </div>
      </motion.section>

      {/* OFFERS */}
      <motion.section className="special-offers" id="offers">
        <h2>🌟Special Offers</h2>
        <div className="offer">
          <h3>20% Off on All Meals</h3>
          <p>Enjoy delicious meals at discounted prices this week.</p>
        </div>
        <div className="offer">
          <h3>Buy 1 Get 1 Free Chai</h3>
          <p>Perfect excuse to bring a friend along.</p>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@mumbaicafe.com</p>
        <p>Phone: +91 999 888 777</p>
      </motion.section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Mumbai Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

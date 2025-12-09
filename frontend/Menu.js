// Menu.js (React component)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch the menu from the backend
    axios.get('http://localhost:5000/api/menu')
      .then((response) => {
        setMenu(response.data); // Set menu data from response
      })
      .catch((error) => {
        console.error('Error fetching menu:', error); // Log errors if any
      });
  }, []);

  return (
    <div className="menu-container">
      <h1>Mumbai Cafe Menu</h1>
      <div className="menu-items">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

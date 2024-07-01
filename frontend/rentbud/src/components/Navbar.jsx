import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.scss'; // import the new SCSS file

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="Navbar">
      <h1 className="Navbar-title">Rent Bud</h1>
      <div className="Navbar-links">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/listings')}>Listings</button>
        <div className="Navbar-item">
          <button onClick={() => setShowRegister(!showRegister)}>Register</button>
          {showRegister && (
            <div className="Navbar-dropdown">
              {/* register form goes here */}
            </div>
          )}
        </div>
        <div className="Navbar-item">
          <button onClick={() => setShowLogin(!showLogin)}>Login</button>
          {showLogin && (
            <div className="Navbar-dropdown">
              {/* login form goes here */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
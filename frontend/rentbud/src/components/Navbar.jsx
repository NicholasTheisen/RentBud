import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.scss'; // import the new SCSS file

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <h1 className="Navbar-title">Rent Bud</h1>
      <div className="Navbar-links">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/listings')}>Listings</button>
        <button>Register</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
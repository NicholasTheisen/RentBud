import React from 'react';
import '../styles/Navbar.scss'; // import the new SCSS file

function Navbar() {
  return (
    <nav className="Navbar">
      <h1 className="Navbar-title">Rent Bud</h1>
      <div className="Navbar-links">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Listings</button>
        <button>Register</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
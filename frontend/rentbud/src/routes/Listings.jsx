import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path according to your file structure
import '../styles/Listings.scss'; // import the new SCSS file

function Listings() {
  return (
    <div className="Listings">
      <Navbar />
      <header className="Listings-header">
        <div className="Listings-header-content">
          <h1>Coming Soon</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc et convallis.</p>
        </div>
      </header>
    </div>
  );
}

export default Listings;
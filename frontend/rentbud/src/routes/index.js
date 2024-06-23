import React from 'react';
import '../styles/HomePage.scss'; // import the new CSS file
import Navbar from '../components/Navbar'; // import the Navbar component

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar /> {/* Add the Navbar component */}
      <header className="HomePage-header">
        <h1>Rent Bud</h1>
        <div className="HomePage-about">
          <p className='HomePage-about-tile-1'>Rent Bud is an all in one solution for tenant and landlord related issues. We connect landlords to potential tenants and vice versa, providing security for both parties. Not only are we a rental website, what sets us apart, is our Rental Management platform, which allows landlords and tenants to manage all aspects of their rental agreements.
          </p>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
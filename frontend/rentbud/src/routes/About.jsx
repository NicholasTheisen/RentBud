import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path according to your file structure
import '../styles/About.scss'; // import the new SCSS file

function About() {
  return (
    <div className="About">
      <Navbar />
      <header className="About-header">
        <h1>Our Mission</h1>
      </header>
      <div className="About-content">
        <p>We are looking to bring a seamless, and secure way for landlords and tenants to connect every step of the way. From finding rentals as a tenant, or maintaining existing rentals as a landlord, our goal is to support both parties during their rental terms. </p>
        <div className="About-content-tile">
          <img src="/tile1.jpg" alt="Tile 1" />
          <div>
            <h2>Securely Find Listings</h2>
            <p>Our goal is security, each tenant and landlord that wishes to use our platform must verify their ID. This allows trust between tenants and landlords. Most websites or groups designed for rentals have lots of scams in place, potentially scamming people out of thousands of dollars on deposits without viewing the rental property. Our system will allow tenants to know that the listings they aere viewing on our website are from verified landlords, minimilizing risks of scams. </p>
          </div>
        </div>
        <div className="About-content-tile">
          <img src="/tile2.jpg" alt="Tile 2" />
          <div>
            <h2>Our Rental Management Platform</h2>
            <p>We have a free-to-use, simple management platform that allows tenants and landlords to manage every aspect of their tenancy. This includes direct payment of rent through our secure payment platform, directly to your landlord, with documented receipts sent to both parties. The management platform also includes helpful tips, and documentation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
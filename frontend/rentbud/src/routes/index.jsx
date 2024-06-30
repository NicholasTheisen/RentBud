import React from 'react';
import '../styles/HomePage.scss'; // import the new CSS file
import Navbar from '../components/Navbar'; // import the Navbar component
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <Navbar />
      <header className="HomePage-header">
        <div className="HomePage-header-content">
          <h1>Let's revolutionize the way we approach rentals with RentBud.</h1>
          <p>Adding security to the rental market, and strengthening tenant-landlord bonds! We securely connect tenants to approved landlords, and allow you to manage your rental agreements with ease.</p>
          <button onClick={() => navigate('/about')}>Learn More</button>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
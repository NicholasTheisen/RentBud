import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path according to your file structure
import '../styles/Contact.scss'; // import the new SCSS file

function Contact() {
  return (
    <div className="Contact">
      <Navbar />
      <header className="Contact-header">
        <div className="Contact-header-content">
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc et convallis.</p>
        </div>
      </header>
    </div>
  );
}

export default Contact;
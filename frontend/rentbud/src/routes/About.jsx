import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path according to your file structure
import '../styles/About.scss'; // import the new SCSS file

function About() {
  return (
    <div className="About">
      <Navbar />
      <header className="About-header">
        <h1>About Page</h1>
        <div className="About-content">
          <div className="About-content-tile-1">
            <p>This is the about page.</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;
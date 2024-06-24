import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/index'; 
import About from './routes/About'; 
import Contact from './routes/Contact';
import Listings from './routes/Listings';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listings" element={<Listings />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
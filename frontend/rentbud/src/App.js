import React from 'react';
import HomePage from './routes/index.js'; // import the new component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage /> {/* use the new component */}
      </header>
    </div>
  );
}

export default App;
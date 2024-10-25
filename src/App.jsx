import React from 'react';
import Carousel from './Carousel';
import Navbar from './components/navbar.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* Navbar fijo en la parte superior */}
      <Carousel />
    </div>
  );
};

export default App;

import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

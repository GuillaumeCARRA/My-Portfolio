import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Contact from './components/Contact';


import resumeData from '../src/data/resume'; 


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Resume 
        educations={resumeData.education}
        experiences={resumeData.experiences}
      />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

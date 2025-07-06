import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Badge from './components/Badge';
import Apply from './components/Apply';
import Manifesto from './components/Manifesto';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Badge />
      <Apply />
      <Manifesto />
      <Contact />
    </div>
  );
}

export default App;

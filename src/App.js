import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Stars from './components/Stars/stars';
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Stars />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

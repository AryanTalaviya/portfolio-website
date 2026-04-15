import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import PortfolioPage from './pages/PortfolioPage';
import CVPage from './pages/CVPage';
import { profile, socials } from './data/config';
import './App.css';

// Home page = Hero + Portfolio preview + About + Contact
const HomePage = () => (
  <main>
    <Hero />
    <Portfolio preview={true} />
    <About />
    <Contact />
  </main>
);

function App() {
  return (
    <BrowserRouter basename="/portfolio-website">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <div className="footer-socials">
              <a href={socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>

            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

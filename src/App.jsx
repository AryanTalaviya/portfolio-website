import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import PortfolioPage from './pages/PortfolioPage';
import CVPage from './pages/CVPage';
import { profile, socials } from './data/config';
import './App.css';

// --- Scroll Progress Bar Component ---
const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scroll}%` }} />
    </div>
  );
};

// --- Side Navigation Component ---
const SideNav = () => {
  const [active, setActive] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['home', 'portfolio', 'about', 'contact'];
    const handleScroll = () => {
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  if (location.pathname !== '/') return null;

  const points = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="side-nav">
      {points.map(p => (
        <div 
          key={p.id}
          className={`side-nav-dot ${active === p.id ? 'active' : ''}`}
          onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="side-nav-tooltip">{p.label}</span>
        </div>
      ))}
    </div>
  );
};

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
        <ScrollProgress />
        <SideNav />
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

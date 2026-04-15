import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { socials, profile } from '../data/config';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="logo">
          {profile.displayName}<span className="text-gradient">.</span>
        </Link>

        <div className="nav-links desktop-only">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Work</Link>
          <Link to="/cv" className={`nav-link ${isActive('/cv') ? 'active' : ''}`}>CV</Link>
          <div className="nav-socials">
            <a href={socials.instagram} target="_blank" rel="noreferrer" className="nav-social-icon" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="nav-social-icon" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
          <Link to="/portfolio" className="btn btn-primary btn-sm">View Work</Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Work</Link>
        <Link to="/cv" className="nav-link" onClick={() => setMobileMenuOpen(false)}>CV</Link>
        <div className="mobile-socials">
          <a href={socials.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={20} /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={20} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

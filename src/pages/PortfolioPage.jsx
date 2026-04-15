import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons';
import { profile, socials, projects } from '../data/config';
import Portfolio from '../components/Portfolio';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <div className="container">
        <Link to="/" className="page-back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="portfolio-page-hero">
        <div className="blob-bg" style={{ top: '0%', left: '30%', opacity: 0.08 }}></div>
        <div className="container">
          <p className="portfolio-page-eyebrow">Selected Work</p>
          <h1 className="portfolio-page-title">
            The <span className="text-gradient">Archive.</span>
          </h1>
          <p className="portfolio-page-subtitle">
            {projects.length} projects across branding, editorial, motion, and digital design.
          </p>
        </div>
      </div>

      {/* Full Portfolio Grid */}
      <Portfolio preview={false} />

      {/* Contact CTA */}
      <div className="portfolio-page-cta">
        <div className="container">
          <div className="page-cta-inner glass-orange">
            <div>
              <h2>Let's Work <span className="text-gradient">Together.</span></h2>
              <p>Have a project in mind? I'd love to hear about it.</p>
            </div>
            <div className="page-cta-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={16} /> Get in Touch
              </a>
              <div className="page-cta-socials">
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="cta-social-btn">
                  <InstagramIcon size={18} />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="cta-social-btn">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

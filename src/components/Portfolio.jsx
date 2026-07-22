import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/config';
import './Portfolio.css';

// Six7 Studio Campaign — images served from public/six7/ folder
const SIX7_BASE = `${import.meta.env.BASE_URL}six7/`;
const six7Cover  = SIX7_BASE + 'six7_cover_grid.png';

// Map imageKey strings (from config.js) to the actual imported images
const imageMap = {
  six7Cover,
};

const Portfolio = ({ preview = false }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const displayProjects = projects; // Only Six7 card — no slicing needed

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
          <div className="section-line"></div>
          {!preview && (
            <p className="section-subtitle">A professional showcase of my graphic design expertise and IT hardware solutions.</p>
          )}
        </div>

        <div className="portfolio-grid">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-item ${project.span}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="portfolio-image-wrapper">
                <img
                  src={imageMap[project.imageKey]}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className={`portfolio-overlay ${hoveredId === project.id ? 'visible' : ''}`}>
                  <div className="portfolio-info">
                    <div className="portfolio-tags">
                      {project.tags?.map(tag => (
                        <span key={tag} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                    <span className="portfolio-category">{project.category}</span>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-desc">{project.description}</p>
                    <div className="portfolio-meta">
                      <span className="portfolio-year">{project.year}</span>
                      <button className="portfolio-view-btn">
                        Explore <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="portfolio-cta">
            <Link to="/portfolio" className="btn btn-outline">
              Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/config';
import './Portfolio.css';

// --- IMAGE IMPORTS ---
// Real Graphic Design Work
import ecoCover from '../assets/work_eco_cover.jpg';
import ecoStep1 from '../assets/work_eco_step1.jpg';
import ecoStep3 from '../assets/work_eco_step3.jpg';
import ecoStep4 from '../assets/work_eco_step4.jpg';
import ecoStep5 from '../assets/work_eco_step5.jpg';

// Case Studies
import iotGateway from '../assets/project_iot_gateway.png';
import marketingCampaign from '../assets/project_marketing_campaign.png';
import gdscBranding from '../assets/project_gdsc_branding.png';
import esp32Prototype from '../assets/project_esp32_prototype.png';

// Six7 Studio Campaign — images served from public/six7/ folder
const SIX7_BASE = `${import.meta.env.BASE_URL}six7/`;
const six7Post01 = SIX7_BASE + 'six7_post_01.png';
const six7Post02 = SIX7_BASE + 'six7_post_02.png';
const six7Post03 = SIX7_BASE + 'six7_post_03.png';
const six7Post04 = SIX7_BASE + 'six7_post_04.png';
const six7Cover  = SIX7_BASE + 'six7_cover_grid.png';

// Map imageKey strings (from config.js) to the actual imported images
const imageMap = {
  ecoCover,
  ecoStep1,
  ecoStep3,
  ecoStep4,
  ecoStep5,
  iotGateway,
  marketingCampaign,
  gdscBranding,
  esp32Prototype,
  six7Post01,
  six7Post02,
  six7Post03,
  six7Post04,
  six7Cover,
};

const Portfolio = ({ preview = false }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const displayProjects = preview ? projects.slice(0, 3) : projects;

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

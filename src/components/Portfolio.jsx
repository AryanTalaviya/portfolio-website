import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/config';
import './Portfolio.css';

// Six7 Studio Campaign — images served from public/six7/ folder
const SIX7_BASE = `${import.meta.env.BASE_URL}six7/`;
const six7Cover  = SIX7_BASE + 'six7_cover_grid.png';
const six7Post01 = SIX7_BASE + 'six7_post_01.png';
const six7Post02 = SIX7_BASE + 'six7_post_02.png';
const six7Post03 = SIX7_BASE + 'six7_post_03.png';
const six7Post04 = SIX7_BASE + 'six7_post_04.png';

const POSTRD_BASE = `${import.meta.env.BASE_URL}postrd/`;
const postrdCover = POSTRD_BASE + 'postrd_cover.png';
const postrd01 = POSTRD_BASE + 'postrd_01.png';
const postrd02 = POSTRD_BASE + 'postrd_02.png';
const postrd03 = POSTRD_BASE + 'postrd_03.png';

const PINK_BASE = `${import.meta.env.BASE_URL}pinkcomfort/`;
const pcCover = PINK_BASE + 'pc_cover.jpg';
const pc01 = PINK_BASE + 'pc_01.jpg';
const pc02 = PINK_BASE + 'pc_02.jpg';

// Map imageKey strings (from config.js) to the actual imported images
export const imageMap = {
  six7Cover,
  six7Post01,
  six7Post02,
  six7Post03,
  six7Post04,
  postrdCover,
  postrd01,
  postrd02,
  postrd03,
  pcCover,
  pc01,
  pc02,
};

const Portfolio = ({ preview = false }) => {
  const displayProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {preview ? (
              <>Selected <span className="text-gradient">Projects.</span></>
            ) : (
              <>All <span className="text-gradient">Projects.</span></>
            )}
          </h2>
          <div className="section-line"></div>
          {!preview && (
            <p className="section-subtitle">A professional showcase of my graphic design expertise and IT hardware solutions.</p>
          )}
        </motion.div>

        <div className="portfolio-grid">
          {displayProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`portfolio-item ${project.span || 'col-span-1'}`}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={`/project/${project.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                <div className="portfolio-image-wrapper" style={project.wrapperStyle || {}}>
                  <img
                    src={imageMap[project.imageKey]}
                    alt={project.title}
                    className="portfolio-image"
                    style={project.imageStyle || {}}
                  />
                  <div className="portfolio-overlay">
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
                        <div className="portfolio-view-btn">
                          Explore <ExternalLink size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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

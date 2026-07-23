import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/config';
import { imageMap } from '../components/Portfolio';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id || p.id.toString() === id);

  useEffect(() => {
    if (!project) {
      navigate('/portfolio', { replace: true });
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="project-detail-page">
      <div className="container">
        <Link to="/portfolio" className="page-back-link" style={{ position: 'relative', top: '20px' }}>
          <ArrowLeft size={16} /> Back to Archive
        </Link>
      </div>

      <div className="project-hero">
        <div className="container">
          <h1 className="project-hero-title">
            <span className="text-gradient">{project.title.split('—')[0]?.trim() || project.title}</span>
            {project.title.includes('—') && ` — ${project.title.split('—')[1]?.trim()}`}
          </h1>
          
          <p className="project-hero-desc">{project.description}</p>
          
          <div className="project-hero-meta">
            <div className="project-meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">{project.category}</span>
            </div>
            <div className="project-meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-gallery">
        <div className="container">
          <div className="gallery-grid">
            {project.gallery?.map((imgKey, index) => (
              <div key={index} className="gallery-item animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={imageMap[imgKey]} alt={`${project.title} image ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

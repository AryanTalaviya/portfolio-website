import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, Briefcase, GraduationCap, Wrench, ArrowLeft, 
  Mail, Phone, MapPin, Globe, Award, UserCheck, Sparkles 
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons';
import { profile, cvData, socials } from '../data/config';
import './CVPage.css';

const CVPage = () => {
  return (
    <div className="cv-page">
      <div className="container">

        {/* Back Nav */}
        <Link to="/" className="cv-back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* CV Header */}
        <div className="cv-header glass-orange">
          <div className="cv-header-left">
            <p className="cv-eyebrow">Curriculum Vitae</p>
            <h1 className="cv-name">{profile.name}</h1>
            <p className="cv-title text-gradient">{profile.title}</p>
            <p className="cv-headline">{cvData.headline}</p>
          </div>
          <div className="cv-header-right">
            <div className="cv-contact-item">
              <Mail size={15} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="cv-contact-item">
              <Phone size={15} />
              <span>{profile.phone}</span>
            </div>
            <div className="cv-contact-item">
              <MapPin size={15} />
              <span>{profile.location}</span>
            </div>
            <div className="cv-header-socials">
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="social-icon-btn">
                <InstagramIcon size={15} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn">
                <LinkedinIcon size={15} />
              </a>
            </div>
            <a href="/CV.pdf" download className="btn btn-primary cv-download-btn">
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>

        <div className="cv-body">

          {/* Experience */}
          <div className="cv-section">
            <div className="cv-section-header">
              <Briefcase size={20} className="cv-section-icon" />
              <h2 className="cv-section-title">Experience</h2>
            </div>
            <div className="cv-timeline">
              {cvData.experience.map((exp, i) => (
                <div key={i} className="cv-timeline-item glass">
                  <div className="cv-timeline-dot"></div>
                  <div className="cv-timeline-content">
                    <div className="cv-timeline-header">
                      <h3 className="cv-item-title">{exp.title}</h3>
                      <span className="cv-item-period">{exp.period}</span>
                    </div>
                    <p className="cv-item-company text-gradient">{exp.company}</p>
                    {Array.isArray(exp.description) ? (
                      <ul className="cv-item-list">
                        {exp.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="cv-item-desc">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="cv-section">
            <div className="cv-section-header">
              <GraduationCap size={20} className="cv-section-icon" />
              <h2 className="cv-section-title">Education</h2>
            </div>
            <div className="cv-timeline">
              {cvData.education.map((edu, i) => (
                <div key={i} className="cv-timeline-item glass">
                  <div className="cv-timeline-dot"></div>
                  <div className="cv-timeline-content">
                    <div className="cv-timeline-header">
                      <h3 className="cv-item-title">{edu.degree}</h3>
                      <span className="cv-item-period">{edu.period}</span>
                    </div>
                    <p className="cv-item-company text-gradient">{edu.school}</p>
                    {edu.status && <p className="cv-item-status"><span>◆</span> {edu.status}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="cv-skills-row">
            <div className="cv-section cv-skills-section">
              <div className="cv-section-header">
                <Wrench size={20} className="cv-section-icon" />
                <h2 className="cv-section-title">Technical Skills</h2>
              </div>
              <div className="cv-skills-grid">
                {cvData.technicalSkills.map((skill) => (
                  <span key={skill} className="cv-skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="cv-section cv-skills-section">
              <div className="cv-section-header">
                <Sparkles size={20} className="cv-section-icon" />
                <h2 className="cv-section-title">Soft Skills</h2>
              </div>
              <div className="cv-skills-grid">
                {cvData.softSkills.map((skill) => (
                  <span key={skill} className="cv-skill-badge cv-skill-soft">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages & Activities */}
          <div className="cv-skills-row secondary">
            <div className="cv-section">
              <div className="cv-section-header">
                <Globe size={20} className="cv-section-icon" />
                <h2 className="cv-section-title">Languages</h2>
              </div>
              <div className="cv-skills-grid">
                {cvData.languages.map((lang) => (
                  <span key={lang} className="lang-badge glass">
                    <span className="lang-indicator"></span>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-header">
                <Award size={20} className="cv-section-icon" />
                <h2 className="cv-section-title">Activities & Experience</h2>
              </div>
              <div className="cv-activities-list">
                {cvData.activities.map((act, i) => (
                  <div key={i} className="cv-activity-item glass">
                    <div className="cv-activity-header">
                      <span className="cv-activity-role">{act.role}</span>
                      <span className="cv-activity-date">{act.date || act.duration}</span>
                    </div>
                    <p className="cv-activity-loc">{act.location || act.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* References */}
          <div className="cv-section">
            <div className="cv-section-header">
              <UserCheck size={20} className="cv-section-icon" />
              <h2 className="cv-section-title">References</h2>
            </div>
            <div className="cv-references-grid">
              {cvData.references.map((ref, i) => (
                <div key={i} className="cv-reference-card glass-orange">
                  <div className="ref-header">
                    <h3 className="ref-name">{ref.name}</h3>
                    <span className="ref-pos">{ref.position}</span>
                  </div>
                  <p className="ref-company text-gradient">{ref.company}</p>
                  <div className="ref-contact">
                    <span><Phone size={12} /> {ref.phone}</span>
                    <span><Mail size={12} /> {ref.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Portfolio CTA */}
        <div className="cv-footer-cta glass">
          <p>Interested in my work or looking to discuss an opportunity?</p>
          <div className="cv-cta-actions">
             <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
             <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;

import React from 'react';
import { Download, MapPin, Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { profile, stats, skills, socials } from '../data/config';
import profileAvatar from '../assets/profile_photo.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">

          {/* Profile Card */}
          <div className="about-visual glass">
            <div className="designer-avatar">
              <img src={profileAvatar} alt={`${profile.name} - Graphic Designer`} className="designer-avatar-img" />
              <div className="avatar-glow"></div>
            </div>

            {/* Profile quick info */}
            <div className="profile-card-info">
              <h3 className="profile-card-name">{profile.name}</h3>
              <p className="profile-card-role text-gradient">{profile.title}</p>
              <div className="profile-card-meta">
                <span><MapPin size={13} />{profile.location}</span>
                <span><Mail size={13} />{profile.email}</span>
              </div>
              <div className="profile-card-socials">
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="profile-social-btn">
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="profile-social-btn">
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="skills-marquee">
              <div className="marquee-track">
                <div className="marquee-content">
                  {[...skills, ...skills].map((skill, i) => (
                    <span key={i}>{skill} <span className="marquee-dot">◆</span></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="profile-header">
              <h2 className="section-title">Behind The <span className="text-gradient">Screen.</span></h2>
              <div className="section-line"></div>
            </div>

            {profile.bio.map((paragraph, i) => (
              <p key={i} className="about-desc">{paragraph}</p>
            ))}

            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item glass-orange">
                  <h4 className="stat-number text-gradient">{stat.number}</h4>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="profile-actions">
              <a href="/CV.pdf" download className="btn btn-primary">
                <Download size={18} /> Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

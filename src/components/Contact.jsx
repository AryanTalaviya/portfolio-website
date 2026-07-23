import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { profile, socials } from '../data/config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry: ${formData.type || 'Portfolio'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div 
          className="contact-wrapper glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-info">
            <p className="contact-eyebrow">Get In Touch</p>
            <h2 className="contact-title">Let's Create<br />Something <span className="text-gradient">Epic.</span></h2>
            <p className="contact-desc">
              Open for freelance opportunities, brand collaborations, and creative partnerships.
            </p>

            <div className="contact-email">
              <span className="label">Mail me at</span>
              <a href={`mailto:${profile.email}`} className="email-link">{profile.email}</a>
            </div>

            <div className="social-links">
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="social-link">
                <InstagramIcon size={18} /> Instagram
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-link">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input id="contact-name" type="text" placeholder="Your Name" required className="form-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="form-group">
              <input id="contact-email" type="email" placeholder="Your Email" required className="form-input" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="form-group">
              <select id="contact-type" className="form-input" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} required>
                <option value="" disabled>Project Type</option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Poster / Print">Poster / Print</option>
                <option value="Motion Graphics">Motion Graphics</option>
                <option value="Web Design">Web Design</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea id="contact-message" placeholder="Tell me about your project..." required className="form-input" rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <Mail size={16} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

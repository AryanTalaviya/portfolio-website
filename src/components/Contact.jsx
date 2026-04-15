import React from 'react';
import { Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { profile, socials } from '../data/config';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper glass">
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

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input id="contact-name" type="text" placeholder="Your Name" required className="form-input" />
            </div>
            <div className="form-group">
              <input id="contact-email" type="email" placeholder="Your Email" required className="form-input" />
            </div>
            <div className="form-group">
              <select id="contact-type" className="form-input" defaultValue="">
                <option value="" disabled>Project Type</option>
                <option>Brand Identity</option>
                <option>Poster / Print</option>
                <option>Motion Graphics</option>
                <option>Web Design</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea id="contact-message" placeholder="Tell me about your project..." required className="form-input" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <Mail size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

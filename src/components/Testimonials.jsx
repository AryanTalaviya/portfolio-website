import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/config';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client <span className="highlight">Feedback</span></h2>
          <p className="section-subtitle">What people say about my work</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div 
              key={test.id} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="testimonial-icon">
                <Quote size={28} />
              </div>
              <p className="testimonial-quote">"{test.quote}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{test.name}</h4>
                <p className="author-title">{test.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

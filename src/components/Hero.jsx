import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { profile, stats } from '../data/config';
import './Hero.css';

/* ─── Particle Canvas Background ─── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.7
          ? `rgba(255, 107, 26, ${this.opacity})`
          : `rgba(255, 255, 255, ${this.opacity * 0.4})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        /* subtle mouse repulsion */
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            this.x += dx / dist * 1.2;
            this.y += dy / dist * 1.2;
          }
        }
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const count = Math.min(Math.floor((canvas.width * canvas.height) / 6000), 200);
    for (let i = 0; i < count; i++) particles.push(new Particle());

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(255, 107, 26, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particle-canvas" />;
};

/* ─── Animated Counter ─── */
const AnimatedNumber = ({ value }) => {
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isNaN(num)) return;
    let start = 0;
    const duration = 2000;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(timer);
  }, [num]);

  return <>{isNaN(num) ? value : count}{suffix}</>;
};

/* ─── Rotating Text Ring ─── */
const TextRing = () => {
  const text = '  GRAPHIC DESIGNER • VISUAL ARTIST • CREATIVE THINKER • ';
  return (
    <div className="text-ring-wrapper" aria-hidden="true">
      <svg className="text-ring" viewBox="0 0 300 300">
        <defs>
          <path id="circlePath" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
        </defs>
        <text>
          <textPath href="#circlePath" className="ring-text">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="ring-center-icon">
        <Sparkles size={28} />
      </div>
    </div>
  );
};

/* ─── Main Hero ─── */
const Hero = () => {
  const words = profile.tagline.split(' ');
  const firstWord = words[0];
  const rest = words.slice(1).join(' ');

  return (
    <section id="home" className="hero section">
      <ParticleCanvas />

      {/* Decorative grid lines */}
      <div className="hero-grid-lines" aria-hidden="true">
        <div className="grid-line vertical" style={{ left: '25%' }} />
        <div className="grid-line vertical" style={{ left: '50%' }} />
        <div className="grid-line vertical" style={{ left: '75%' }} />
        <div className="grid-line horizontal" style={{ top: '33%' }} />
        <div className="grid-line horizontal" style={{ top: '66%' }} />
      </div>

      {/* Glowing orb */}
      <div className="hero-orb" aria-hidden="true" />

      <div className="container hero-container">

        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="pulse" />
            {profile.availability}
          </div>

          <h2 className="hero-subtitle animate-fade-up delay-1">{profile.subtitle}</h2>

          <h1 className="hero-title animate-fade-up delay-1">
            <span className="hero-title-line">
              <span className="text-gradient glitch" data-text={firstWord}>{firstWord}</span>
            </span>
            <span className="hero-title-line">{rest}</span>
          </h1>

          <p className="hero-description animate-fade-up delay-2">
            {profile.bio[0]}
          </p>

          <div className="hero-actions animate-fade-up delay-3">
            <Link to="/portfolio" className="btn btn-primary btn-glow">
              View Work <ArrowRight size={18} />
            </Link>
            <Link to="/cv" className="btn btn-outline">
              My CV <Download size={18} />
            </Link>
          </div>

          {/* Stats Row */}
          <div className="hero-stats animate-fade-up delay-4">
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <span className="hero-stat-number">
                  <AnimatedNumber value={s.number} />
                </span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual animate-fade-up delay-4">
          <TextRing />

          {/* Floating orbit dots */}
          <div className="orbit-ring" aria-hidden="true">
            <div className="orbit-dot" />
            <div className="orbit-dot delay" />
            <div className="orbit-dot delay-2x" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-fade-up delay-4">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;

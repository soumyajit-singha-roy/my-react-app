import React, { useState, useEffect } from 'react';
import './landing.css';

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Animation Effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: "🚪",
      title: "Rolling Shutters",
      description: "High-quality manual and motorized rolling shutters for commercial and residential spaces with advanced security features"
    },
    {
      icon: "🔒",
      title: "M.S. Doors & Windows",
      description: "Durable mild steel doors and windows with superior craftsmanship and modern design aesthetics"
    },
    {
      icon: "⚡",
      title: "Collapsible Gates",
      description: "Space-saving collapsible gates perfect for shops and commercial establishments with smooth operation"
    },
    {
      icon: "🛡️",
      title: "Security Grills",
      description: "Custom-designed security grills for enhanced safety, protection and aesthetic appeal"
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <h1>MD.SAMSUDDIN</h1>
            <span>Shutter & Engg. Works</span>
          </div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="particles"></div>
        <div className="hero-content">
          <div className="hero-badge">Est. in Kolkata</div>
          <h1 className="hero-title">
            MD.SAMSUDDIN
            <span className="subtitle">SHUTTER & ENGG. WORKS</span>
          </h1>
          <p className="hero-description">
            Your Trusted Partner for Premium Rolling Shutters, MS Doors, Windows & Security Solutions in Kolkata
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/919007735583" target="_blank" rel="noopener noreferrer" className="btn-primary">
              GET A QUOTE
            </a>
            <button className="btn-secondary" onClick={() => scrollToSection('services')}>
              OUR SERVICES
            </button>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>GST Registered</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Quality Assured</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Expert Installation</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-container">
          <div className="section-header scroll-animate">
            <span className="section-tag">What We Offer</span>
            <h2>Our Premium Services</h2>
            <p>Manufacturing excellence in every product we deliver</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="features-content">
            <div className="features-text scroll-animate">
              <span className="section-tag">Why Choose Us</span>
              <h2>Quality Craftsmanship Since Years</h2>
              <div className="feature-list">
                <div className="feature-point">
                  <div className="point-icon">🏆</div>
                  <div>
                    <h4>Premium Quality Materials</h4>
                    <p>We use only the finest mild steel and components for maximum durability and longevity</p>
                  </div>
                </div>
                <div className="feature-point">
                  <div className="point-icon">⚙️</div>
                  <div>
                    <h4>Expert Manufacturing</h4>
                    <p>Skilled craftsmen with years of experience in precision shutter fabrication</p>
                  </div>
                </div>
                <div className="feature-point">
                  <div className="point-icon">🛠️</div>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>Tailored designs to match your specific requirements and aesthetic preferences</p>
                  </div>
                </div>
                <div className="feature-point">
                  <div className="point-icon">📞</div>
                  <div>
                    <h4>After-Sales Support</h4>
                    <p>Comprehensive maintenance and dedicated support services for peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image scroll-animate">
              <div className="image-card">
                <div className="floating-element el-1"></div>
                <div className="floating-element el-2"></div>
                <div className="floating-element el-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-image scroll-animate">
              <div className="about-card">
                <div className="about-badge">
                  <span className="badge-number">15+</span>
                  <span className="badge-text">Years Experience</span>
                </div>
                <div className="about-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
            </div>
            <div className="about-text scroll-animate">
              <span className="section-tag">About Us</span>
              <h2>Serving Kolkata with Excellence</h2>
              <p className="about-description">
                MD.Samsuddin Shutter & Engg. Works is a trusted name in Kolkata for manufacturing 
                high-quality rolling shutters, MS doors, windows, collapsible gates, and security grills. 
                We pride ourselves on delivering superior craftsmanship and reliable solutions that stand 
                the test of time.
              </p>
              <p className="about-description">
                Our commitment to quality, combined with competitive pricing and excellent customer service, 
                has made us the preferred choice for both residential and commercial clients across Kolkata.
              </p>
              <div className="company-info">
                <div className="info-item">
                  <strong>GST No:</strong> 19CZTPS0567G1ZM
                </div>
                <div className="info-item">
                  <strong>Location:</strong> 22, Pemantle Street, Kolkata - 700 016
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header light scroll-animate">
            <span className="section-tag light">Get In Touch</span>
            <h2>Contact Us Today</h2>
            <p>Let's discuss your shutter and security needs</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card scroll-animate">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>22, Pemantle Street</p>
              <p>Kolkata - 700 016</p>
            </div>
            <div className="contact-card scroll-animate">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p><a href="tel:9007735583">90077 35583</a></p>
              <p><a href="tel:7003252661">70032 52661</a></p>
              <p><a href="tel:8482014246">8482014246</a></p>
            </div>
            <div className="contact-card scroll-animate">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p><a href="mailto:mdsamsu848@gmail.com">mdsamsu848@gmail.com</a></p>
            </div>
          </div>
          
          <div className="whatsapp-cta scroll-animate">
            <div className="cta-content">
              <h3>Quick Response via WhatsApp</h3>
              <p>Get instant quotes and answers to your questions</p>
              <a href="https://wa.me/919007735583" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <span className="whatsapp-icon">💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MD.SAMSUDDIN</h3>
            <p>Shutter & Engg. Works</p>
            <p className="footer-tagline">Quality You Can Trust, Service You Can Rely On</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Rolling Shutters</li>
              <li>MS Doors & Windows</li>
              <li>Collapsible Gates</li>
              <li>Security Grills</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 22, Pemantle Street, Kolkata - 700 016</p>
            <p>📞 90077 35583 / 70032 52661</p>
            <p>✉️ mdsamsu848@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MD.Samsuddin Shutter & Engg. Works. All rights reserved.</p>
          <p>GST No: 19CZTPS0567G1ZM</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919007735583" className="whatsapp-float" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
        <span className="whatsapp-icon">💬</span>
      </a>
    </div>
  );
};

export default Landing;
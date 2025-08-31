import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form submission is now replaced with WhatsApp link

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Have a project in mind or want to learn more about our services?
              Reach out to us using the contact form or through our social media channels.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <p>info@companyname.com</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>123 Business Avenue, Tech City, TC 12345</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">fb</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">tw</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">ig</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">in</span>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <a href="https://wa.me/923348581422?text=Can%20I%20learn%20more%20about%20your%20services?" target="_blank">
                <button class="whatsapp-btn">Contact Us on WhatsApp</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
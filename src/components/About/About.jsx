import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      id: 1,
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge technologies to deliver innovative solutions that drive business growth.'
    },
    {
      id: 2,
      title: 'Expert Team',
      description: 'Our team of experienced professionals is dedicated to delivering exceptional results for every project.'
    },
    {
      id: 3,
      title: 'Client-Focused Approach',
      description: 'We prioritize understanding your unique needs to create tailored solutions that exceed expectations.'
    },
    {
      id: 4,
      title: 'Timely Delivery',
      description: 'We are committed to delivering high-quality projects on time and within budget.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              We are a forward-thinking digital agency specializing in creating stunning websites 
              and captivating graphic designs. With a passion for innovation and creativity, 
              we transform ideas into digital masterpieces that leave lasting impressions.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower businesses with cutting-edge digital solutions that 
              drive growth, enhance brand visibility, and create meaningful connections with 
              their audience. We are committed to excellence, innovation, and delivering 
              exceptional value to our clients.
            </p>
          </div>
        </div>
        
        <div className="features">
          <h3 className="features-title">Why Choose Us</h3>
          <div className="features-grid">
            {features.map(feature => (
              <div className="feature-card card" key={feature.id}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
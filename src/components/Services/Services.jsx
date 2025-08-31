import React from 'react';
import './Services.css';

const Services = () => {
  const webServices = [
    {
      id: 1,
      title: 'Website Design',
      description: 'Custom website designs that are visually stunning, user-friendly, and optimized for conversions.'
    },
    {
      id: 2,
      title: 'E-Commerce Development',
      description: 'Powerful online stores with secure payment gateways, inventory management, and seamless user experience.'
    },
    {
      id: 3,
      title: 'Web Application',
      description: 'Custom web applications that streamline business processes and enhance productivity.'
    },
    {
      id: 4,
      title: 'Website Maintenance',
      description: 'Regular updates, security patches, and performance optimization to keep your website running smoothly.'
    }
  ];

  const graphicServices = [
    {
      id: 1,
      title: 'Logo Design',
      description: 'Memorable and distinctive logos that capture your brand essence and leave a lasting impression.'
    },
    {
      id: 2,
      title: 'Brand Identity',
      description: 'Comprehensive brand identity packages including logos, color schemes, typography, and brand guidelines.'
    },
    {
      id: 3,
      title: 'Print Design',
      description: 'Eye-catching designs for business cards, brochures, flyers, posters, and other print materials.'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that enhance user experience and drive engagement.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        
        <div className="services-category">
          <h3 className="category-title">Website Development</h3>
          <div className="services-grid">
            {webServices.map(service => (
              <div className="service-card card" key={service.id}>
                <div className="service-icon">
                  <div className="icon-circle"></div>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="services-category">
          <h3 className="category-title">Graphic Designing</h3>
          <div className="services-grid">
            {graphicServices.map(service => (
              <div className="service-card card" key={service.id}>
                <div className="service-icon">
                  <div className="icon-circle"></div>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
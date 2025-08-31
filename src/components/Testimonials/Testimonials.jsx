import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Innovations',
      rating: 5,
      text: 'Working with this team was an absolute pleasure. They delivered a stunning website that perfectly captures our brand identity. Their attention to detail and commitment to excellence is unmatched.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Creative Solutions',
      rating: 5,
      text: 'The graphic design work exceeded our expectations. The team was responsive, creative, and delivered on time. Our new brand identity has received countless compliments from clients.'
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'Founder, Startup Ventures',
      rating: 4,
      text: 'From concept to completion, the team demonstrated exceptional professionalism and technical expertise. Our e-commerce platform is not only beautiful but also performs exceptionally well.'
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>★</span>
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card card" key={testimonial.id}>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="client-info">
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
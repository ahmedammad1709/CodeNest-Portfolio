import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      price: 499,
      description: 'Perfect for small businesses just getting started',
      features: [
        'Basic Website Design',
        'Mobile Responsive',
        '3 Pages',
        'Contact Form',
        '1 Month Support',
        'Basic SEO'
      ]
    },
    {
      id: 2,
      name: 'Standard',
      price: 999,
      description: 'Ideal for growing businesses with specific needs',
      features: [
        'Premium Website Design',
        'Mobile Responsive',
        '7 Pages',
        'Contact Form',
        'Basic E-commerce (up to 10 products)',
        '3 Months Support',
        'Standard SEO',
        'Social Media Integration'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      price: 1999,
      description: 'Advanced solutions for established businesses',
      features: [
        'Custom Website Design',
        'Mobile Responsive',
        'Unlimited Pages',
        'Advanced E-commerce',
        'Custom Functionality',
        '6 Months Support',
        'Advanced SEO',
        'Social Media Integration',
        'Analytics Dashboard',
        'Content Management System'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Pricing Plans</h2>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={plan.id}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn pricing-btn">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
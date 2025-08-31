import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Work</h2>
        </div>
        
        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : projects.length === 0 ? (
          <div className="no-projects">No Work Uploaded Yet</div>
        ) : (
          <div className="portfolio-grid">
            {projects.map(project => (
              <div className="portfolio-item" key={project._id}>
                <div className="portfolio-img">
                  <img 
                    src={`${project.image.startsWith('http') ? '' : window.location.origin}${project.image}`} 
                    alt={project.title} 
                  />
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p className="category">{project.category}</p>
                  <p className="description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
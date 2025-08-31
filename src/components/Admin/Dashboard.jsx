import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Website Development',
    description: '',
    image: null
  });
  

  const [previewUrl, setPreviewUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    
    if (!user || !token) {
      navigate('/admin');
      return;
    }
    
    fetchProjects();
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
      
      // If unauthorized, redirect to login
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/admin');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setFormData({ ...formData, image: selectedImage });
      setPreviewUrl(URL.createObjectURL(selectedImage));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate form
    if (!formData.title || !formData.category || !formData.description || !formData.image) {
      setError('Please fill in all fields and upload an image');
      return;
    }
    
    setLoading(true);
    
    // Get token from localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('You must be logged in to add projects');
      setLoading(false);
      navigate('/admin');
      return;
    }
    
    // Create form data
    const projectData = new FormData();
    projectData.append('title', formData.title);
    projectData.append('category', formData.category);
    projectData.append('description', formData.description);
    projectData.append('image', formData.image);
    
    try {
      await axios.post('/api/projects', projectData, {
        headers: {
          'Content-Type': 'multipart/form-data'
          // Token will be added by axios interceptor
        }
      });

      // Reset form
      setFormData({
        title: '',
        category: 'Website Development',
        description: '',
        image: null
      });
      setPreviewUrl('');
      setSuccess('Project added successfully!');
      fetchProjects(); // Refresh projects list
    } catch (err) {
      setError(err.response?.data?.error || 'Error adding project');
    } finally {
      setLoading(false);
    }
  };
  



  const handleDeleteProject = async (projectId) => {
    // Implementation for deleting a project
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="dashboard-content">
        <div className="upload-section">
          <h2>Upload New Project</h2>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="form-group">
              <label htmlFor="title">Project Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter project title"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Website Development">Website Development</option>
                <option value="Graphic Designing">Graphic Designing</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Enter project description"
                rows="4"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="image">Project Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
              {previewUrl && (
                <div className="image-preview">
                  <img src={previewUrl} alt="Preview" />
                </div>
              )}
            </div>
            
            <button type="submit" className="admin-btn" disabled={loading}>
              {loading ? 'Uploading...' : 'Upload Project'}
            </button>
          </form>
        </div>
        

        
        <div className="projects-section">
          <h2>Uploaded Projects</h2>
          {projects.length === 0 ? (
            <p>No projects uploaded yet.</p>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project._id} className="project-card">
                  <img 
                    src={`${project.image.startsWith('http') ? '' : window.location.origin}${project.image}`} 
                    alt={project.title} 
                  />
                  <h3>{project.title}</h3>
                  <div className="category">{project.category}</div>
                  <p className="description">{project.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
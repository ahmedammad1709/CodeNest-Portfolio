import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.css'

// Import components
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

// Admin components - will create these next
import AdminLogin from './components/Admin/AdminLogin'
import Dashboard from './components/Admin/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

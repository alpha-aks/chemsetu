import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import BrandSection from './components/BrandSection';
import ServicesGrid from './components/ServicesGrid';
import InfrastructureTimeline from './components/InfrastructureTimeline';
import Compounds from './components/Compounds';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import './App.css';

const HomePage = () => (
  <>
    <HeroSection />
    <BrandSection />
    <ServicesGrid />
    <InfrastructureTimeline />
    <TrustSection />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compounds" element={<Compounds />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import BrandSection from './components/BrandSection';
import ServicesGrid from './components/ServicesGrid';
import InfrastructureTimeline from './components/InfrastructureTimeline';
import Compounds from './components/Compounds';
import CompoundDetails from './components/CompoundDetails';
import ContactSection from './components/ContactSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import Admin from './components/Admin';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import SEO from './components/SEO';
import './App.css';

const HomePage = () => (
  <>
    <SEO 
      title="Home" 
      description="ChemSetu - Bridging Science and Synthesis. Your trusted partner for high-purity API Impurities, advanced Intermediates, and complex Custom Synthesis solutions."
    />
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
      <BackgroundElements />
      <div className="App relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compounds" element={<Compounds />} />
            <Route path="/compounds/:id" element={<CompoundDetails />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

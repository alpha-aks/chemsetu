import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import BrandSection from './components/BrandSection';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
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
import Preloader from './components/Preloader';
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
    <WhyChooseUs />
    <InfrastructureTimeline />
    <TrustSection />
  </>
);

function AppShell() {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [routePreloaderKey, setRoutePreloaderKey] = useState(0);
  const isFirstRoute = useRef(true);

  useEffect(() => {
    const start = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const minVisibleMs = 700;

    const finish = () => {
      const end = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const elapsed = end - start;
      const delay = Math.max(0, minVisibleMs - elapsed);
      window.setTimeout(() => setInitialLoading(false), delay);
    };

    if (document.readyState === 'complete') {
      finish();
      return;
    }

    window.addEventListener('load', finish, { once: true });
    return () => window.removeEventListener('load', finish);
  }, []);

  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }

    setRoutePreloaderKey((k) => k + 1);
    setRouteLoading(true);
    const t = window.setTimeout(() => setRouteLoading(false), 650);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  const showPreloader = initialLoading || routeLoading;

  return (
    <>
      <ScrollToTop />
      <BackgroundElements />
      <AnimatePresence mode="wait">
        {showPreloader ? (
          <Preloader key={initialLoading ? 'initial' : `route-${routePreloaderKey}`} />
        ) : null}
      </AnimatePresence>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;

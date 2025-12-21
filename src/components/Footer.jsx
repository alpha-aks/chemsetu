import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#1a1c50] text-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {/* Company Info with Logo */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg border-4 border-[#e0e7ef]">
              <img src="/chemsetu-logo.png" alt="ChemSetu Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Bridging the gap between academic research and industrial application with precision and confidentiality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A651] transition-colors">
                {/* LinkedIn Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/compounds" className="text-gray-300 hover:text-[#00A651] transition-colors">Research Papers</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-[#00A651] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-[#00A651] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 whitespace-nowrap overflow-x-auto">
                <span className="text-[#00A651]">📍</span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=S.+No.+80%2F8+Akshay+Industries%2C+Mahadev+Nagar%2C+Nanded+Phata%2C+Pune+-+411041" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00A651] transition-colors"
                  style={{whiteSpace: 'nowrap'}}
                >
                  S. No. 80/8 Akshay Industries, Mahadev Nagar, Nanded Phata, Pune.
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[#00A651]">📞</span>
                <a href="tel:+918805245811" className="text-gray-300 hover:text-[#00A651] transition-colors">
                  +91 8805245811
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[#00A651]">✉️</span>
                <a href="mailto:info.chemsetu@gmail.com" className="text-gray-300 hover:text-[#00A651] transition-colors">
                  info.chemsetu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ChemSetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

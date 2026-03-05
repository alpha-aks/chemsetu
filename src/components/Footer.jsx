import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-slate-200">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-left">
          {/* Col 1: Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center ring-1 ring-white/30">
                <img src="/chemsetu-logo.png" alt="ChemSetu Logo" className="h-9 w-auto" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">ChemSetu</p>
                <p className="text-slate-400 text-sm">Bridging Science and Synthesis</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-left">
              Bridging the gap between academic research and industrial application with precision and confidentiality.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-start">
            <div>
              <h4 className="text-green-400 font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms" className="text-slate-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="text-left">
            <h4 className="text-green-400 font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=S.+No.+80%2F8+Akshay+Industries%2C+Mahadev+Nagar%2C+Nanded+Phata%2C+Pune+-+411041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-[20px_1fr] gap-3 items-start hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="leading-relaxed">
                    S. No. 80/8 Akshay Industries, Mahadev Nagar, Nanded Phata, Pune - 411041.
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+918805245811"
                  className="grid grid-cols-[20px_1fr] gap-3 items-start hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 8805245811</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info.chemsetu@gmail.com"
                  className="grid grid-cols-[20px_1fr] gap-3 items-start hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info.chemsetu@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center sm:justify-between text-left">
          <p className="w-full sm:w-auto">&copy; {new Date().getFullYear()} ChemSetu. All rights reserved.</p>
          <p className="text-slate-500 w-full sm:w-auto">Precision • Confidentiality • Scale</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

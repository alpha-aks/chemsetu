import React from 'react';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import SEO from './SEO';

const ContactSection = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ChemicalIndustry",
    "name": "ChemSetu",
    "image": "https://chemsetu.com/chemsetu-logo.png",
    "url": "https://chemsetu.com",
    "telephone": "+919822404444",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 101, 1st Floor, ChemSetu House",
      "addressLocality": "Pune",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5204",
      "longitude": "73.8567"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <section className="relative py-12 md:py-20 px-4 min-h-screen flex items-center overflow-hidden bg-slate-50">
      <SEO 
        title="Contact Us" 
        description="Get in touch with ChemSetu for inquiries about our chemical synthesis services, product availability, or partnership opportunities."
        url="/contact"
        schema={localBusinessSchema}
      />
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full relative z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 md:mb-12">
             <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">
                Get in Touch
             </span>
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Let's Synthesize <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                   New Possibilities.
                </span>
             </h1>
             <p className="text-slate-600 text-lg max-w-md">
                Reach out to us for custom synthesis, API intermediates, or any scientific collaboration.
             </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* Address Card - Clickable */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=S.+No.+80%2F8+Akshay+Industries%2C+Mahadev+Nagar%2C+Nanded+Phata%2C+Pune+-+411041"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md p-5 flex items-start gap-4 border border-slate-100 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="bg-blue-50 p-3 rounded-xl shrink-0 group-hover:bg-blue-100 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    Visit Us 
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  S. No. 80/8 Akshay Industries, Mahadev Nagar, Nanded Phata, Pune - 411041, Maharashtra.
                </p>
              </div>
            </a>

            {/* Phone Card - Clickable */}
            <a 
              href="tel:+918805245811"
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md p-5 flex items-center gap-4 border border-slate-100 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="bg-green-50 p-3 rounded-xl shrink-0 group-hover:bg-green-100 transition-colors">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    Call Us
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-green-500" />
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  +91 8805245811
                </p>
              </div>
            </a>

            {/* Mail Card - Clickable */}
            <a 
              href="mailto:info.chemsetu@gmail.com"
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md p-5 flex items-center gap-4 border border-slate-100 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="bg-indigo-50 p-3 rounded-xl shrink-0 group-hover:bg-indigo-100 transition-colors">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    Email Us
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-500" />
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  info.chemsetu@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Interest</label>
                <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option>Custom Synthesis</option>
                    <option>API Intermediates</option>
                    <option>Process Development</option>
                    <option>Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

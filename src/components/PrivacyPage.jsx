import React from 'react';
import { Lock, Eye, Server, UserCheck } from 'lucide-react';
import SEO from './SEO';

const PrivacyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Privacy Policy" 
        description="ChemSetu's Privacy Policy outlines how we collect, use, and protect your personal information."
        url="/privacy"
      />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-emerald-900 px-8 py-10 text-center relative overflow-hidden">
             {/* Abstract Background Decoration */}
             <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4 relative z-10" />
            <h1 className="text-3xl font-bold text-white relative z-10">Privacy Policy</h1>
            <p className="text-emerald-200 mt-2 relative z-10">Your Trust is Our Formula.</p>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-8 text-slate-600">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Our Commitment</h2>
            <p>
              At Chemsetu Lifesciences, we deal with sensitive scientific data. We strictly follow guidelines about confidentiality and are committed to protecting the privacy of our clients, partners, and website visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-600" /> Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Personal Information</h3>
                    <p className="text-sm">Name, email address, phone number, and company details provided voluntarily via our contact forms.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Project Data</h3>
                    <p className="text-sm">Specific chemical structures, CAS numbers, or project requirements shared for quotation purposes.</p>
                </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-emerald-600" /> How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To provide accurate quotations for custom synthesis projects.</li>
              <li>To communicate regarding order status, shipping, and technical queries.</li>
              <li>To improve our website functionality and service offerings.</li>
              <li><strong>We never sell your data</strong> to third-party marketing agencies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-600" /> Data Security & Confidentiality
            </h2>
            <p>
              We implement industry-standard security measures to protect your data. For sensitive custom synthesis projects, we are happy to sign a <strong>Non-Disclosure Agreement (NDA)</strong> prior to receiving detailed technical specifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cookies</h2>
            <p>
              Our website may use basic cookies to enhance user experience (e.g., remembering your language preference). You can choose to disable cookies through your browser settings, though this may affect some site features.
            </p>
          </section>

          <div className="bg-emerald-50 rounded-xl p-6 mt-8 border border-emerald-100">
            <h3 className="font-bold text-emerald-900 mb-2">Contact Us About Privacy</h3>
            <p className="text-sm text-emerald-800">
              If you have any concerns about how your data is handled, please reach out to our compliance officer at:
              <br/>
              <strong>Email:</strong> info.chemsetu@gmail.com
              <br/>
              <strong>Address:</strong> S. No. 80/8 Akshay Industries, Mahadev Nagar, Nanded Phata, Pune - 411041.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

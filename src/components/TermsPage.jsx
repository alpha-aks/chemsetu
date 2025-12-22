import React from 'react';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import SEO from './SEO';

const TermsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Terms & Conditions" 
        description="Read the Terms and Conditions for using ChemSetu's website and services."
        url="/terms"
      />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-slate-900 px-8 py-10 text-center relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            </div>
            
            <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-4 relative z-10" />
            <h1 className="text-3xl font-bold text-white relative z-10">Terms & Conditions</h1>
            <p className="text-slate-400 mt-2 relative z-10">Last Updated: December 2025</p>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-8 text-slate-600">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" /> 1. Introduction
            </h2>
            <p>
              Welcome to Chemsetu Lifesciences Pvt Ltd. These Terms and Conditions govern your use of our website and the purchase of our specialized chemical synthesis services and products. By engaging with us, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Intellectual Property (IP)</h2>
            <p>
              We understand the critical nature of IP in the pharmaceutical industry. 
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Client IP:</strong> Any proprietary processes or data shared with us for Custom Synthesis projects remain the sole property of the Client. We adhere to strict Non-Disclosure Agreements (NDAs).</li>
              <li><strong>Chemsetu IP:</strong> Any novel processes for API intermediates or impurities developed internally by Chemsetu remain our intellectual property unless explicitly transferred via a separate agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Use of Products</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <p className="text-sm text-amber-900">
                        <strong>Research Use Only:</strong> Unless otherwise stated, our products (Impurities, Working Standards, Intermediates) are intended for Research & Development (R&D) use only. They are not strictly intended for direct human consumption or clinical trials without further regulatory validation by the client.
                    </p>
                </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Orders & Deliverables</h2>
            <p>
              Timelines for custom synthesis projects are estimates based on scientific assessment. While we strive for timely delivery, the unpredictable nature of chemical research means timelines may occasionally shift. We commit to transparent communication regarding any delays.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
            <p>
              Chemsetu Lifesciences shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products. Our maximum liability is limited to the replacement of the product or refund of the purchase price.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </section>

          <div className="border-t border-slate-200 pt-6 mt-8">
            <p className="text-sm text-slate-500">
              Questions about these terms? Contact us at <a href="mailto:info.chemsetu@gmail.com" className="text-blue-600 hover:underline">info.chemsetu@gmail.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical, Calendar, CheckCircle } from 'lucide-react';
import { usePrismicDocumentByUID } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import SEO from './SEO';

const CompoundDetails = () => {
  const { id } = useParams(); // This is actually the UID from the URL
  const [document, { state }] = usePrismicDocumentByUID('compound', id);
  const loading = state === 'loading';
  const product = document?.data;

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": `Detailed technical specifications for ${product.name}`,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "ChemSetu"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://chemsetu.com/compounds/${id}`,
      "priceCurrency": "USD",
      "price": "0", 
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "ChemSetu"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <SEO 
        title={product.name} 
        description={`Detailed technical specifications and information for ${product.name}. Available for research and development from ChemSetu.`}
        url={`/compounds/${id}`}
        schema={productSchema}
      />
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/compounds" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Library
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Section */}
          <div>
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <PrismicRichText field={product.description} />
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Technical Specifications
              </h3>
              <div className="text-slate-600 whitespace-pre-line">
                {product.detailed_description ? (
                   <PrismicRichText field={product.detailed_description} />
                ) : (
                  "No detailed technical specifications available."
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Production Scale</div>
                <div className="text-lg font-bold text-slate-900">{product.scale}</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-slate-50 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
            {product.image && product.image.url ? (
              <img src={product.image.url} alt={product.name} className="max-w-full max-h-[500px] object-contain rounded-xl shadow-sm" />
            ) : (
              <FlaskConical className="w-32 h-32 text-slate-300" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundDetails;

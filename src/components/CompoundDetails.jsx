import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical, CheckCircle } from 'lucide-react';
import { usePrismicDocumentByUID } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import SEO from './SEO';

const CompoundDetails = () => {
  const { id } = useParams(); // This is actually the UID from the URL
  const [document, { state }] = usePrismicDocumentByUID('compound', id);
  const loading = state === 'loading';
  const product = document?.data;

  const richTextToPlainText = (field) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    if (!Array.isArray(field)) return '';
    return field
      .map((block) => (typeof block?.text === 'string' ? block.text : ''))
      .filter(Boolean)
      .join('\n')
      .trim();
  };

  const productCode = product?.product_code || product?.cas_id || document?.uid || id;
  const intermediateName = product?.name || product?.product_name || '';

  const highlightItems = Array.isArray(product?.highlights)
    ? product.highlights
        .map((h) => (typeof h?.item === 'string' ? h.item : ''))
        .filter(Boolean)
    : [];

  const detailedListItems = Array.isArray(product?.detailed_description)
    ? product.detailed_description
        .filter((block) => block?.type === 'list-item' || block?.type === 'o-list-item')
        .map((block) => (typeof block?.text === 'string' ? block.text : ''))
        .filter(Boolean)
    : [];

  const descriptionBullets = highlightItems.length > 0 ? highlightItems : detailedListItems;

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  const seoTitle = product.meta_title || productCode || product.name;
  const seoDescription =
    product.meta_description ||
    richTextToPlainText(product.description) ||
    `Detailed technical specifications and information for ${product.name}. Available for research and development from ChemSetu.`;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": intermediateName || productCode || product.name,
    "description": seoDescription,
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
        title={seoTitle} 
        description={seoDescription}
        url={`/compounds/${id}`}
        schema={productSchema}
      />
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/compounds" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Library
        </Link>

        {/* Centered Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product Code</div>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold font-serif text-blue-700 tracking-tight">
            {productCode}
          </h1>
          {intermediateName ? (
            <div className="mt-3 text-base md:text-lg font-bold text-slate-900">
              {intermediateName}
            </div>
          ) : null}
        </div>

        {/* Two-Column Spec Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Core Metadata */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
            <h2 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Specifications
            </h2>

            <ul className="space-y-4">
              {[
                { label: 'Intermediate Name', value: intermediateName },
                { label: 'CAS', value: product.cas_id },
                { label: 'Formula', value: product.formula },
                { label: 'Molecular Weight', value: product.weight },
                { label: 'Solubility', value: product.solubility },
                { label: 'Category', value: product.category },
                { label: 'Scale / Capacity', value: product.scale },
                { label: 'Description', value: richTextToPlainText(product.description) }
              ]
                .filter((row) => typeof row.value === 'string' && row.value.trim().length > 0)
                .map((row) => (
                  <li key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <div className="sm:w-44 shrink-0 font-bold text-slate-900">{row.label}:</div>
                    <div className="text-slate-600 break-words whitespace-pre-line">{row.value}</div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Right Column: Chemical Structure */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 md:p-8">
            <div className="text-sm font-bold text-slate-700 mb-4">
              Chemical Structure:{' '}
              <span className="text-slate-500">
                {product.category ? product.category : 'Compound'}
              </span>
            </div>
            <div className="flex items-center justify-center min-h-[360px]">
              {product.image && product.image.url ? (
                <img
                  src={product.image.url}
                  alt={product.name}
                  className="max-w-full max-h-[520px] object-contain rounded-xl bg-white p-4 shadow-sm"
                />
              ) : (
                <FlaskConical className="w-32 h-32 text-slate-300" />
              )}
            </div>
          </div>
        </div>

        {/* Extended Description */}
        <div className="mt-12 pt-10 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">DESCRIPTION :-</h3>

          {descriptionBullets.length > 0 ? (
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {descriptionBullets.map((text, idx) => (
                <li key={`${idx}-${text}`}>{text}</li>
              ))}
            </ul>
          ) : product.detailed_description ? (
            <div className="prose prose-lg text-slate-600">
              <PrismicRichText field={product.detailed_description} />
            </div>
          ) : (
            <div className="text-slate-500">No additional description available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompoundDetails;

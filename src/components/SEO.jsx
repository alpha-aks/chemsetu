import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image,
  type = 'website'
}) => {
  const siteTitle = 'ChemSetu';
  const defaultDescription = 'Your trusted partner for high-purity API Impurities, advanced Intermediates, and complex Custom Synthesis solutions.';
  const defaultKeywords = 'API Impurities, Custom Synthesis, Pharmaceutical Intermediates, ChemSetu, Chemical Synthesis, Drug Development';
  const siteUrl = 'https://chemsetu.com';
  const defaultImage = `${siteUrl}/chemsetu-logo.png`;

  const metaTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Bridging Science and Synthesis`;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;

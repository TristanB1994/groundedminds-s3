import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * SEO component for consistent metadata handling
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.image - OG image URL
 * @param {string} props.imageAlt - OG image alt text
 * @param {string} props.type - OG type, defaults to 'website'
 */
const SEO = ({ 
  title, 
  description, 
  image, 
  imageAlt,
  type = 'website'
}) => {
  const router = useRouter();
  const fullPath = router.asPath;
  const canonicalUrl = `https://www.groundedminds.ca${fullPath}`;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SEO;

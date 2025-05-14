import React, { useEffect } from 'react';
import { SEO } from '../../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOProps> = ({ 
  title = SEO.defaultTitle,
  description = SEO.description,
  canonical
}) => {
  useEffect(() => {
    // Actualizar el título y la descripción dinámicamente
    document.title = title;
    
    // Actualizar la descripción
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Actualizar los meta tags de Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Actualizar el enlace canónico si se proporciona
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  return null; // Este componente no renderiza nada visible
};

export default SEOHead;
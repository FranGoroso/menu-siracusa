import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Componente que permite a los usuarios de teclado saltar al contenido principal
 * Este es un patrón común de accesibilidad para evitar tener que navegar por todos
 * los elementos de navegación antes de llegar al contenido principal.
 */
const SkipToContent: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Manejamos la visibilidad según la interacción con el teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Mostrar el enlace al presionar Tab al inicio de la página
      if (e.key === 'Tab' && window.scrollY === 0) {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      // Ocultar después de hacer clic (después de usarlo)
      setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Encontrar el elemento del contenido principal
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // Dar foco al contenido principal
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      
      // Ocultar el enlace de salto
      setIsVisible(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-amber-600 text-white px-4 py-2 focus:outline-none rounded-md shadow-lg text-sm font-medium dark:bg-amber-700"
      style={{
        // Solo aparece visualmente cuando tiene foco
        clip: isVisible ? 'auto' : 'rect(0 0 0 0)',
        clipPath: isVisible ? 'none' : 'inset(50%)',
      }}
    >
      {t('accessibility.skip', 'Saltar al contenido principal')}
    </a>
  );
};

export default SkipToContent;

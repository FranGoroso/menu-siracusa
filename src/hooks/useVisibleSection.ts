import { useEffect, useState, useRef } from 'react';
import { CategoryType } from '../types/types';

/**
 * Hook personalizado para detectar qué sección está visible en la pantalla
 * @param sectionIds Array de IDs de las secciones a observar
 * @param options Opciones para el IntersectionObserver
 * @returns ID de la sección actualmente visible
 */
export const useVisibleSection = (
  sectionIds: CategoryType[], 
  options = {
    rootMargin: '-120px 0px 0px 0px',
    threshold: 0.1
  }
) => {
  const [activeSection, setActiveSection] = useState<CategoryType>(sectionIds[0] || 'sandwiches');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Limpiar cualquier observador anterior
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Crear un nuevo observador de intersección
    observerRef.current = new IntersectionObserver((entries) => {
      // Ordenar entradas por su posición en la página (de arriba a abajo)
      const sortedEntries = [...entries].sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
      );
      
      // Encontrar la primera entrada que esté visible
      const visibleEntry = sortedEntries.find(entry => entry.isIntersecting);
      
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id as CategoryType);
      }
    }, options);

    // Observar todas las secciones
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observerRef.current?.observe(element);
    });

    // Limpiar al desmontar
    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, options.rootMargin, options.threshold]);

  return activeSection;
};

import { useState, useEffect, useCallback } from 'react';

type ScrollDirection = 'up' | 'down';

/**
 * Hook personalizado para detectar la dirección del desplazamiento
 * @param threshold Número de píxeles antes de considerar un cambio de dirección
 * @returns Objeto con la dirección del desplazamiento y la posición actual
 */
export const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [scrollY, setScrollY] = useState(0);

  const updateScrollDirection = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (Math.abs(currentScrollY - scrollY) < threshold) {
      return;
    }
    
    // Determinar dirección del desplazamiento
    const newScrollDirection = currentScrollY > scrollY ? 'down' : 'up';
    
    setScrollDirection(newScrollDirection);
    setScrollY(currentScrollY);
  }, [scrollY, threshold]);

  useEffect(() => {
    // Aplicar throttling para mejorar el rendimiento
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollDirection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateScrollDirection]);

  return { scrollDirection, scrollY };
};

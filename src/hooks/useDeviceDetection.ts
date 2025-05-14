import { useState, useEffect, useMemo } from 'react';
import { isLowPerformanceDevice } from '../utils/performance';

/**
 * Detecta el tipo de dispositivo y sus capacidades para adaptar la experiencia
 */
export const useDeviceDetection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determinar tipo de dispositivo
  const deviceType = useMemo(() => {
    if (windowWidth === 0) return 'unknown';
    if (windowWidth < 640) return 'mobile';
    if (windowWidth < 1024) return 'tablet';
    return 'desktop';
  }, [windowWidth]);
  
  // Determinar si es un dispositivo de bajo rendimiento
  const isLowPerformance = useMemo(() => {
    return isLowPerformanceDevice();
  }, []);
  
  // Determinar si se deben usar animaciones complejas
  const shouldUseReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReducedMotion || isLowPerformance;
  }, [isLowPerformance]);
  
  // Determinar si se debe usar lazy loading más agresivo
  const shouldUseAggressiveLazyLoading = useMemo(() => {
    return isLowPerformance || deviceType === 'mobile';
  }, [isLowPerformance, deviceType]);
  
  return {
    deviceType,
    isLowPerformance,
    shouldUseReducedMotion,
    shouldUseAggressiveLazyLoading,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    windowWidth
  };
};

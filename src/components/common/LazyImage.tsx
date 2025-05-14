import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

// Placeholders diferentes según el tema
const defaultLightPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+';
const defaultDarkPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PC9zdmc+';

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width = 64,
  height = 64,
  placeholder,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Usar placeholder basado en tema si no se proporciona uno específico
  const defaultPlaceholder = isDark ? defaultDarkPlaceholder : defaultLightPlaceholder;
  const currentPlaceholder = placeholder || defaultPlaceholder;
  
  const [currentSrc, setCurrentSrc] = useState(currentPlaceholder);

  useEffect(() => {
    // Crear una nueva imagen para precargarla
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setError(true);
      // Mantener el placeholder en caso de error
    };
    
    return () => {
      // Limpiar los event listeners
      img.onload = null;
      img.onerror = null;
    };
  }, [src, currentPlaceholder]);

  return (
    <motion.img
      src={currentSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'filter blur-[2px]' : ''} ${
        error ? isDark ? 'bg-stone-700' : 'bg-gray-200' : ''
      }`}
      loading="lazy"
      width={width}
      height={height}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: isLoaded ? 1 : 0.6 }}
      transition={{ duration: 0.3 }}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default memo(LazyImage);

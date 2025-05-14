import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'dark';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingProps> = ({
  size = 'md',
  color = 'primary',
  message
}) => {
  // Configuración de tamaños
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };
  
  // Configuración de colores
  const colors = {
    primary: 'border-amber-500 border-t-transparent',
    white: 'border-white border-t-transparent',
    dark: 'border-stone-700 border-t-transparent'
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-4" role="status" aria-live="polite">
      <motion.div
        className={`rounded-full animate-spin ${sizes[size]} ${colors[color]}`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        aria-hidden="true"
      />
      {message && (
        <p className="mt-2 text-sm text-stone-600">{message}</p>
      )}
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default LoadingSpinner;

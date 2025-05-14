import React, { ButtonHTMLAttributes, memo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isActive = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...rest
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Configuraciones base para variantes (considerando tema oscuro)
  const variantStyles = {
    primary: `bg-amber-500 text-white hover:bg-amber-600 ${isDark ? 'dark:bg-amber-600 dark:hover:bg-amber-700' : ''}`,
    secondary: `bg-gray-100 text-gray-700 hover:bg-gray-200 ${isDark ? 'dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600' : ''}`,
    outline: `border text-amber-500 hover:bg-amber-50 ${isDark ? 'dark:border-amber-500 dark:text-amber-400 dark:hover:bg-stone-700' : 'border-amber-500'}`,
    text: `text-amber-600 hover:text-amber-700 hover:underline ${isDark ? 'dark:text-amber-400 dark:hover:text-amber-300' : ''}`
  };

  // Configuraciones para tamaños
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  };
  
  // Aplicar estado activo con consideraciones para tema oscuro
  const activeStyles = isActive ? 
    (variant === 'primary' 
      ? 'shadow-md' 
      : `bg-amber-500 text-white shadow-md ${isDark ? 'dark:bg-amber-600' : ''}`) 
    : '';

  // Estilo base para todos los botones
  const baseStyle = 'rounded-full transition-colors duration-200 font-medium focus-outline flex items-center justify-center';
  
  // Combinar todos los estilos
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${activeStyles} ${className}`;

  return (
    <motion.button
      className={buttonStyle}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-1">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-1">{icon}</span>
      )}
    </motion.button>
  );
};

export default memo(Button);

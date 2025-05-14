import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useFontSize } from '../../context/FontSizeContext';

interface FontSizeAdjusterProps {
  className?: string;
}

const FontSizeAdjuster: React.FC<FontSizeAdjusterProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();
  
  const buttonBaseClass = "p-1.5 rounded focus:outline-none transition-colors";
  const buttonActiveClass = "bg-amber-500 text-white dark:bg-amber-600";
  const buttonInactiveClass = "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600";
  
  return (
    <div 
      className={`flex items-center bg-white dark:bg-stone-800 p-1 rounded-md shadow-sm border border-gray-200 dark:border-stone-700 ${className}`}
      role="group"
      aria-label={t('accessibility.fontSize', 'Ajustar tamaño de texto')}
    >
      <motion.button
        onClick={decreaseFontSize}
        className={`${buttonBaseClass} ${fontSize === 'small' ? buttonActiveClass : buttonInactiveClass} rounded-l-md`}
        whileTap={{ scale: 0.9 }}
        aria-label={t('accessibility.decreaseFont', 'Disminuir tamaño de texto')}
        disabled={fontSize === 'small'}
      >
        <span aria-hidden="true">A-</span>
      </motion.button>
      
      <motion.button
        onClick={resetFontSize}
        className={`${buttonBaseClass} ${fontSize === 'medium' ? buttonActiveClass : buttonInactiveClass} border-l border-r border-gray-200 dark:border-stone-700`}
        whileTap={{ scale: 0.9 }}
        aria-label={t('accessibility.resetFont', 'Restablecer tamaño de texto')}
      >
        <span aria-hidden="true">A</span>
      </motion.button>
      
      <motion.button
        onClick={increaseFontSize}
        className={`${buttonBaseClass} ${fontSize === 'x-large' ? buttonActiveClass : buttonInactiveClass} rounded-r-md`}
        whileTap={{ scale: 0.9 }}
        aria-label={t('accessibility.increaseFont', 'Aumentar tamaño de texto')}
        disabled={fontSize === 'x-large'}
      >
        <span aria-hidden="true">A+</span>
      </motion.button>
    </div>
  );
};

export default memo(FontSizeAdjuster);

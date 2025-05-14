import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronUp } from '../../utils/icons';
import { useTheme } from '../../context/ThemeContext';

export const ScrollToTopButton: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`p-2 rounded-full font-bold shadow-sm flex items-center justify-center ${
        isDark 
          ? 'bg-stone-700 text-amber-400 hover:bg-stone-600' 
          : 'bg-white text-amber-500 hover:bg-gray-100'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={t('footer.backToTop')}
    >
      <ChevronUp size={14} className="mr-1" aria-hidden="true" />
      <span className="text-xs">{t('footer.backToTop')}</span>
    </motion.button>
  );
};

export default memo(ScrollToTopButton);

import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import ThemeToggle from '../ui/ThemeToggle';
import FontSizeAdjuster from '../accessibility/FontSizeAdjuster';
import { motion } from 'framer-motion';
import { Coffee } from '../../utils/icons';

interface HeaderProps {
  isScrollingDown: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrollingDown }) => {
  const { t } = useTranslation();
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <>
      <motion.header 
        className={`sticky top-0 bg-amber-500 text-white shadow-md z-20 py-3 px-3 transition-transform duration-300 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'} dark:bg-stone-800 dark:text-amber-400`}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        role="banner"
      >
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="flex items-center justify-center w-full sm:w-auto mb-2 sm:mb-0">
            <Coffee className="text-white dark:text-amber-400" size={28} aria-hidden="true" />
            <h1 className="text-xl font-bold ml-2">{t('appTitle')}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAccessibility(!showAccessibility)}
              className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white bg-amber-600 text-white dark:bg-stone-700"
              aria-label={t('accessibility.settings', 'Ajustes de accesibilidad')}
              aria-pressed={showAccessibility}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </motion.header>

      {/* Panel de accesibilidad */}
      {showAccessibility && (
        <div className="accessibility-controls">
          <div className="p-2">
            <h3 className="text-sm font-medium mb-2 dark:text-amber-400">{t('accessibility.fontSize', 'Tamaño de texto')}</h3>
            <FontSizeAdjuster />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Header);

import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';
import { Coffee } from '../utils/icons';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.header 
      className="sticky top-0 bg-amber-500 text-white shadow-md z-20 py-3 px-3"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      role="banner"
    >
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="flex items-center justify-center w-full sm:w-auto mb-2 sm:mb-0">
          <Coffee className="text-white" size={28} aria-hidden="true" />
          <h1 className="text-xl font-bold ml-2">{t('appTitle')}</h1>
        </div>
        <LanguageSwitcher />
      </div>
    </motion.header>
  );
};

export default Header;
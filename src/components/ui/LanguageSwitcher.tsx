import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface LanguageSwitcherProps {
  className?: string;
}

// Definimos las opciones de idioma fuera del componente para evitar recreaciones
const languages = [
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'pt', flag: '🇵🇹', name: 'Português' },
  { code: 'ca', flag: '🏳️', name: 'Català' }
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Optimizamos el cambio de idioma con useCallback
  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className={`flex items-center justify-center ${className || ''}`} role="region" aria-label={t('language.selector')}>
      <div className={`${isDark ? 'bg-stone-700' : 'bg-amber-600'} text-white px-2 py-1 rounded-full flex items-center space-x-2 transition-colors duration-300`} aria-labelledby="language-label">
        <span className="text-xs font-medium" id="language-label">{t('language')}:</span>
        <div className="flex space-x-1">
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`text-sm p-1 focus:outline-none rounded-full transition-colors duration-200 ${
                i18n.language === language.code 
                ? isDark
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-white text-amber-600 shadow' 
                : 'text-white hover:bg-opacity-20 hover:bg-white'
              }`}
              whileTap={{ scale: 0.9 }}
              title={language.name}
              aria-label={t('language.change', { language: language.name })}
              aria-pressed={i18n.language === language.code}
            >
              <span role="img" aria-hidden="true">
                {language.flag}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(LanguageSwitcher);

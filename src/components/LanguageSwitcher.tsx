import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();
  
  const languages = [
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'pt', flag: '🇵🇹', name: 'Português' },
    { code: 'ca', flag: '🏳️', name: 'Català' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="region" aria-label={t('language.selector')}>
      <div className="bg-amber-600 text-white px-2 py-1 rounded-full flex items-center space-x-2" aria-labelledby="language-label">
        <span className="text-xs font-medium" id="language-label">{t('language')}:</span>
        <div className="flex space-x-1">
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`text-sm p-1 focus:outline-none rounded-full ${
                i18n.language === language.code 
                ? 'bg-white text-amber-600 shadow' 
                : 'text-white hover:bg-amber-400'
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

export default LanguageSwitcher;
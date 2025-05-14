import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem as MenuItemType } from '../types/types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from '../utils/icons';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentLanguage = i18n.language as keyof typeof item.name;
  const detailsId = `details-${item.id}`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.article
      className="bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-300 p-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start">
        <img 
          src={item.image} 
          alt={item.name[currentLanguage]} 
          className="w-16 h-16 object-cover rounded-lg shadow-sm mr-3 flex-shrink-0"
          loading="lazy"
        />
        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-semibold text-stone-900 mb-0.5 truncate pr-2">
              {item.name[currentLanguage]}
            </h3>
            <div className="font-bold text-amber-600 text-sm bg-amber-50 px-2 py-0.5 rounded-full whitespace-nowrap">
              {t('menuItem.price', { price: item.price.toFixed(2) })}
            </div>
          </div>
          
          <button 
            onClick={toggleExpand}
            className="text-xs text-amber-700 hover:text-amber-600 transition-colors flex items-center mt-1"
            aria-expanded={isExpanded}
            aria-controls={detailsId}
          >
            <span className="truncate">{isExpanded ? t('menuItem.hideDetails') : t('menuItem.showDetails')}</span>
            {isExpanded ? <ChevronUp size={14} className="ml-1" aria-hidden="true" /> : <ChevronDown size={14} className="ml-1" aria-hidden="true" />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={detailsId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 pt-2 border-t border-gray-100">
              <p className="text-xs text-stone-700 leading-normal">
                <span className="font-medium text-stone-800">{t('menuItem.ingredients')}:</span> {item.description[currentLanguage]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default MenuItem;
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMenu } from '../../context/MenuContext';
import { menuItems } from '../../data/menuData';
import MenuItem from './MenuItem';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from '../../utils/icons';

const FavoriteItems: React.FC = () => {
  const { t } = useTranslation();
  const { favorites } = useMenu();
  
  // Filtramos los elementos favoritos
  const favoriteItems = useMemo(() => {
    if (favorites.size === 0) return [];
    return menuItems.filter(item => favorites.has(item.id));
  }, [favorites]);
  
  // Si no hay favoritos, no mostramos nada
  if (favoriteItems.length === 0) {
    return null;
  }
  
  return (
    <section className="bg-amber-50 dark:bg-stone-800 dark:border dark:border-amber-800/30 py-4 px-3 rounded-lg mb-4 transition-colors duration-300">
      <h2 className="text-xl font-bold text-stone-900 dark:text-amber-300 mb-3 flex items-center">
        <Heart 
          size={20} 
          className="mr-2 text-amber-600 dark:text-amber-400" 
          fill="currentColor" 
          aria-hidden="true" 
        />
        {t('favorites.title', 'Tus favoritos')}
      </h2>
      
      <AnimatePresence>
        <motion.div 
          className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {favoriteItems.map(item => (
            <div key={item.id}>
              <MenuItem item={item} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default memo(FavoriteItems);

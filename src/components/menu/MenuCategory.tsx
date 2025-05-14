import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem as MenuItemType, Category as CategoryType } from '../../types/types';
import MenuItem from './MenuItem';
import { motion } from 'framer-motion';

interface MenuCategoryProps {
  category: CategoryType;
  items: MenuItemType[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, items }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as keyof typeof category.name;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 // Reducido para una animación más rápida
      }
    }
  };

  // No renderizar categorías vacías
  if (items.length === 0) {
    return null;
  }

  return (
    <section 
      id={category.id} 
      className="py-4"
      aria-labelledby={`heading-${category.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${category.id}`}
    >
      <h2 
        id={`heading-${category.id}`} 
        className="text-xl font-bold text-stone-900 dark:text-amber-300 mb-3 bg-amber-100 dark:bg-stone-800/80 dark:border dark:border-amber-800/30 py-1.5 px-3 rounded-md transition-colors duration-300"
      >
        {category.name[currentLanguage]}
      </h2>
      
      <motion.div 
        className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        role="list"
        aria-label={t('menuCategory.items', { category: category.name[currentLanguage] })}
      >
        {items.map(item => (
          <div key={item.id} role="listitem">
            <MenuItem item={item} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default memo(MenuCategory);

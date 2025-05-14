import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Category } from '../../types/types';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  isScrollingDown: boolean;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategory,
  onCategoryChange,
  isScrollingDown
}) => {
  const { i18n, t } = useTranslation();
  // Definimos un tipo para las claves de idioma
  type LangKey = 'es' | 'en' | 'fr' | 'de' | 'pt' | 'ca';
  const currentLanguage = i18n.language as LangKey;
  
  return (
    <motion.nav 
      className={`sticky bg-white z-10 shadow-md scrollbar-hide transition-all duration-300 ${isScrollingDown ? 'top-0' : 'top-14'} dark:bg-stone-900 dark:border-b dark:border-stone-700`} 
      aria-label={t('categories.nav')}
    >
      <div className="overflow-x-auto py-2">
        <ul 
          className="flex whitespace-nowrap px-2 md:justify-center w-full"
          role="tablist"
        >
          {categories.map((category) => (
            <li key={category.id} className="px-1">
              <Button
                onClick={() => onCategoryChange(category.id)}
                variant={activeCategory === category.id ? 'primary' : 'secondary'}
                size="md"
                isActive={activeCategory === category.id}
                role="tab"
                id={`tab-${category.id}`}
                aria-controls={category.id}
                aria-selected={activeCategory === category.id}
              >
                {category.name[currentLanguage]}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default memo(CategoryNav);

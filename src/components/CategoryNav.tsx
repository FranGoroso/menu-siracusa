import React from 'react';
import { useTranslation } from 'react-i18next';
import { Category } from '../types/types';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategory,
  onCategoryChange 
}) => {
  const { i18n, t } = useTranslation();
  // Simplificando la línea problemática
  type LangKey = 'es' | 'en' | 'fr' | 'de' | 'pt' | 'ca';
  const currentLanguage = i18n.language as LangKey;

  return (
    <nav className="sticky top-14 bg-white z-10 shadow-md scrollbar-hide" aria-label={t('categories.nav')}>
      <div className="overflow-x-auto py-2">
        <ul className="flex whitespace-nowrap px-2 md:justify-center w-full">
          {categories.map((category) => (
            <li key={category.id} className="px-1">
              <motion.button
                onClick={() => onCategoryChange(category.id)}
                className={`px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-amber-500 text-white rounded-full shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full'
                }`}
                whileTap={{ scale: 0.95 }}
                aria-current={activeCategory === category.id ? 'page' : undefined}
              >
                {category.name[currentLanguage]}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
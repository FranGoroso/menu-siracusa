import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import Header from './components/layout/Header';
import CategoryNav from './components/navigation/CategoryNav';
import SEOHead from './components/common/SEOHead';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/error/ErrorBoundary';
import ErrorFallback from './components/error/ErrorFallback';
import SkipToContent from './components/accessibility/SkipToContent';
import { categories, menuItems } from './data/menuData';
import { CategoryType } from './types/types';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { useScrollDirection } from './hooks/useScrollDirection';
import { useVisibleSection } from './hooks/useVisibleSection';
import { useMenu } from './context/MenuContext';
import { useDeviceDetection } from './hooks/useDeviceDetection';
import { useTheme } from './context/ThemeContext';

// Carga perezosa de componentes pesados
const MenuCategory = lazy(() => import('./components/menu/MenuCategory'));
const FavoriteItems = lazy(() => import('./components/menu/FavoriteItems'));

function App() {
  const { t, i18n } = useTranslation();
  const { favorites } = useMenu();
  const { theme } = useTheme();
  const hasFavorites = favorites.size > 0;
  const currentLanguage = i18n.language;
  const { isLowPerformance, shouldUseReducedMotion } = useDeviceDetection();
  const isDark = theme === 'dark';

  // Título dinámico basado en idioma
  const dynamicTitle = React.useMemo(() => {
    return currentLanguage === 'es' ? 
      'El Rincón Gourmet - Menú Digital' : 
      'El Rincón Gourmet - Digital Menu';
  }, [currentLanguage]);

  // Filtrar categorías que tienen productos - memoizado para evitar recálculos
  const categoriesWithItems = React.useMemo(() => (
    categories.filter(category => 
      menuItems.some(item => item.category === category.id)
    )
  ), []);

  // IDs de categorías para el hook de sección visible
  const categoryIds = React.useMemo(() => 
    categoriesWithItems.map(category => category.id), 
    [categoriesWithItems]
  );

  // Usar nuestros hooks personalizados
  const { scrollDirection } = useScrollDirection(isLowPerformance ? 50 : 30);
  const activeCategory = useVisibleSection(categoryIds);
  const isScrollingDown = scrollDirection === 'down';

  // Optimizar la función de cambio de categoría con useCallback
  const handleCategoryChange = React.useCallback((categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: shouldUseReducedMotion ? 'auto' : 'smooth'
      });
    }
  }, [shouldUseReducedMotion]);

  // Memoizar los menúItems por categoría para evitar filtrado repetitivo
  const menuItemsByCategory = React.useMemo(() => {
    const itemMap = {} as Record<CategoryType, typeof menuItems>;
    
    categoriesWithItems.forEach(category => {
      itemMap[category.id] = menuItems.filter(item => item.category === category.id);
    });
    
    return itemMap;
  }, [categoriesWithItems]);

  return (
    <div className="min-h-screen bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 transition-colors duration-300">
      <SEOHead title={dynamicTitle} />
      <SkipToContent />
      <Header isScrollingDown={isScrollingDown} />
      
      <main 
        className="pb-14 pt-1 px-0 md:container md:mx-auto md:px-4" 
        id="main-content"
        tabIndex={-1} // Permite recibir el foco para accesibilidad
      >
        <CategoryNav 
          categories={categoriesWithItems} 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          isScrollingDown={isScrollingDown}
        />
        
        <div className="space-y-3 px-3 pt-3">
          {/* Mostrar sección de favoritos si existen */}
          <ErrorBoundary 
            fallback={<ErrorFallback message="No se pudieron cargar tus favoritos" />}
          >
            <Suspense fallback={hasFavorites ? <LoadingSpinner size="sm" message="Cargando favoritos..." /> : null}>
              <FavoriteItems />
            </Suspense>
          </ErrorBoundary>

          {categoriesWithItems.map((category) => (
            <ErrorBoundary 
              key={category.id}
              fallback={
                <ErrorFallback 
                  message={`No se pudieron cargar los elementos de ${category.name[currentLanguage as keyof typeof category.name]}`} 
                />
              }
            >
              <Suspense fallback={<LoadingSpinner size="sm" />}>
                <MenuCategory 
                  category={category} 
                  items={menuItemsByCategory[category.id]}
                />
              </Suspense>
            </ErrorBoundary>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-amber-500 text-white py-2 text-center text-xs z-10 shadow-md dark:bg-stone-800 dark:text-amber-300 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>{t('footer.rights')}</p>
          <ScrollToTopButton />
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from '../../utils/icons';
import { useMenu } from '../../context/MenuContext';
import { useTranslation } from 'react-i18next';
import { useToast } from '../ui/Toast';
import { useTheme } from '../../context/ThemeContext';

interface FavoriteButtonProps {
  itemId: string;
  itemName?: string;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  itemId, 
  itemName = 'Este plato',
  className = '' 
}) => {
  const { isFavorite, toggleFavorite } = useMenu();
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { theme } = useTheme();
  const isFav = isFavorite(itemId);
  const isDark = theme === 'dark';
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Guardar el estado anterior para la notificación
    const wasFavorite = isFav;
    
    // Actualizar el estado
    toggleFavorite(itemId);
    
    // Mostrar notificación según la acción realizada
    if (wasFavorite) {
      showToast(
        t('favorites.removed', { itemName }) || `${itemName} eliminado de favoritos`,
        'info',
        3000
      );
    } else {
      showToast(
        t('favorites.added', { itemName }) || `${itemName} añadido a favoritos`,
        'success',
        3000
      );
    }
  };
  
  return (
    <motion.button
      onClick={handleToggleFavorite}
      className={`rounded-full p-1 transition-colors ${
        isFav 
          ? isDark 
            ? 'text-red-400 bg-stone-700' 
            : 'text-red-500 bg-red-50'
          : isDark
            ? 'text-gray-400 hover:text-red-400 bg-stone-700 hover:bg-stone-600' 
            : 'text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50'
      } ${className}`}
      whileTap={{ scale: 0.9 }}
      aria-label={isFav ? t('favorites.remove', 'Eliminar de favoritos') : t('favorites.add', 'Agregar a favoritos')}
      aria-pressed={isFav}
    >
      <Heart 
        size={18} 
        fill={isFav ? 'currentColor' : 'none'} 
        strokeWidth={2}
        aria-hidden="true"
      />
    </motion.button>
  );
};

export default memo(FavoriteButton);

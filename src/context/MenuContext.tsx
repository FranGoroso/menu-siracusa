import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, CategoryType } from '../types/types';

interface MenuContextType {
  favorites: Set<string>;
  addFavorite: (itemId: string) => void;
  removeFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
  toggleFavorite: (itemId: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Clave para localStorage
const FAVORITES_STORAGE_KEY = 'elRinconGourmet_favorites';

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  // Inicializar favoritos desde localStorage si existen
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedFavorites ? new Set(JSON.parse(storedFavorites)) : new Set();
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      return new Set();
    }
  });

  // Persistir favoritos en localStorage cuando cambien
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(Array.from(favorites)));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  const addFavorite = (itemId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.add(itemId);
      return newFavorites;
    });
  };

  const removeFavorite = (itemId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.delete(itemId);
      return newFavorites;
    });
  };

  const isFavorite = (itemId: string) => {
    return favorites.has(itemId);
  };

  const toggleFavorite = (itemId: string) => {
    if (isFavorite(itemId)) {
      removeFavorite(itemId);
    } else {
      addFavorite(itemId);
    }
  };

  return (
    <MenuContext.Provider value={{ 
      favorites, 
      addFavorite, 
      removeFavorite, 
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

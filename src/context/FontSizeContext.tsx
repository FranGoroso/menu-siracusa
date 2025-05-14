import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'small' | 'medium' | 'large' | 'x-large';

interface FontSizeContextType {
  fontSize: FontSize;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

// Clave para localStorage
const FONT_SIZE_STORAGE_KEY = 'elRinconGourmet_fontSize';

// Valores reales de tamaño en píxeles
const fontSizes = {
  'small': '14px',
  'medium': '16px',
  'large': '18px',
  'x-large': '20px'
};

interface FontSizeProviderProps {
  children: ReactNode;
}

export const FontSizeProvider: React.FC<FontSizeProviderProps> = ({ children }) => {
  // Inicializar tamaño de fuente desde localStorage
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    try {
      const storedSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY) as FontSize | null;
      return storedSize || 'medium';
    } catch (error) {
      console.error('Error loading font size from localStorage:', error);
      return 'medium';
    }
  });

  // Actualizar el DOM con el tamaño de fuente actual
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', fontSizes[fontSize]);
    
    // Guardar el tamaño de fuente en localStorage
    try {
      localStorage.setItem(FONT_SIZE_STORAGE_KEY, fontSize);
    } catch (error) {
      console.error('Error saving font size to localStorage:', error);
    }
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prev => {
      switch (prev) {
        case 'small': return 'medium';
        case 'medium': return 'large';
        case 'large': return 'x-large';
        default: return 'x-large';
      }
    });
  };
  
  const decreaseFontSize = () => {
    setFontSize(prev => {
      switch (prev) {
        case 'x-large': return 'large';
        case 'large': return 'medium';
        case 'medium': return 'small';
        default: return 'small';
      }
    });
  };
  
  const resetFontSize = () => {
    setFontSize('medium');
  };

  return (
    <FontSizeContext.Provider value={{ 
      fontSize, 
      increaseFontSize, 
      decreaseFontSize,
      resetFontSize
    }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};

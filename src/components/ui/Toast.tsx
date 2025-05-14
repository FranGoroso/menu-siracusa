import React, { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Tipos
type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  hideToast: (id: string) => void;
}

// Contexto para los toasts
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook para usar el sistema de toasts
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Componente individual de Toast
const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {
  const { id, message, type, duration = 5000 } = toast;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Referencia para el timeout
  const timeoutRef = useRef<number | null>(null);
  
  // Configurar el auto-cierre
  useEffect(() => {
    if (duration > 0) {
      timeoutRef.current = window.setTimeout(() => {
        onClose();
      }, duration);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [duration, onClose]);
  
  // Estilos basados en el tipo y el tema
  const getTypeStyles = () => {
    if (isDark) {
      switch (type) {
        case 'success':
          return 'bg-green-900 border-green-600 text-green-200';
        case 'error':
          return 'bg-red-900 border-red-600 text-red-200';
        case 'warning':
          return 'bg-amber-900 border-amber-600 text-amber-200';
        case 'info':
        default:
          return 'bg-blue-900 border-blue-600 text-blue-200';
      }
    } else {
      switch (type) {
        case 'success':
          return 'bg-green-100 border-green-500 text-green-800';
        case 'error':
          return 'bg-red-100 border-red-500 text-red-800';
        case 'warning':
          return 'bg-yellow-100 border-amber-500 text-amber-800';
        case 'info':
        default:
          return 'bg-blue-100 border-blue-500 text-blue-800';
      }
    }
  };
  
  // Iconos basados en el tipo
  const getTypeIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
      default:
        return 'ℹ️';
    }
  };
  
  return (
    <motion.div
      className={`border-l-4 p-3 shadow-md rounded-r-lg min-w-72 max-w-md ${getTypeStyles()}`}
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-2">
          <span aria-hidden="true">{getTypeIcon()}</span>
        </div>
        <div className="flex-1">
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`ml-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'} focus:outline-none`}
          aria-label="Cerrar notificación"
        >
          &times;
        </button>
      </div>
    </motion.div>
  );
};

// Proveedor principal de Toasts
interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  // Función para mostrar un nuevo toast
  const showToast = (message: string, type: ToastType = 'info', duration = 5000) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type, duration }]);
  };
  
  // Función para ocultar un toast específico
  const hideToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  
  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      
      {/* Contenedor de toasts */}
      <div className="fixed bottom-16 right-4 z-50 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map(toast => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onClose={() => hideToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

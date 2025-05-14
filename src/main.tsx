import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n/i18n';
import { MenuProvider } from './context/MenuContext';
import { ToastProvider } from './components/ui/Toast';
import { ThemeProvider } from './context/ThemeContext';
import { FontSizeProvider } from './context/FontSizeContext';
import ErrorBoundary from './components/error/ErrorBoundary';
import { registerServiceWorker } from './utils/serviceWorker';

// Registrar el Service Worker para PWA y soporte offline
registerServiceWorker();

// Utilizamos un elemento que sabemos que existe o mostramos un error más descriptivo
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Función para manejar errores a nivel global
const handleGlobalError = (error: Error, errorInfo: React.ErrorInfo) => {
  // Aquí podríamos enviar el error a un servicio de monitoreo como Sentry
  console.error('Global application error:', error);
  console.error('Component stack:', errorInfo.componentStack);
};

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary onError={handleGlobalError}>
      <ThemeProvider>
        <FontSizeProvider>
          <ToastProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </ToastProvider>
        </FontSizeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
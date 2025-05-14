// Función para registrar el service worker
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log('Service Worker registration starting...');
      // Registrar el service worker solo en producción
      if (process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registrado con éxito:', registration.scope);
          })
          .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
          });
      } else {
        console.log('Service Worker disabled in development mode');
      }
    });
  }
}

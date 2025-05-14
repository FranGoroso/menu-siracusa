/**
 * Utilidad para medir y optimizar el rendimiento de la aplicación
 */

/**
 * Mide el tiempo de ejecución de una función y devuelve el resultado
 * @param fn Función a medir
 * @param label Etiqueta para identificar la medición en la consola
 * @returns Resultado de la función
 */
export function measurePerformance<T>(fn: () => T, label: string): T {
  if (process.env.NODE_ENV !== 'production') {
    console.time(`⏱️ ${label}`);
    const result = fn();
    console.timeEnd(`⏱️ ${label}`);
    return result;
  }
  return fn();
}

/**
 * Crea una versión memoizada de una función con un tamaño de caché limitado
 * @param fn Función a memoizar
 * @param getKey Función para obtener la clave de caché
 * @param maxSize Tamaño máximo de la caché
 * @returns Función memoizada
 */
export function memoize<T, R>(
  fn: (arg: T) => R,
  getKey: (arg: T) => string = JSON.stringify,
  maxSize = 100
): (arg: T) => R {
  const cache = new Map<string, R>();
  const keys: string[] = [];

  return (arg: T): R => {
    const key = getKey(arg);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = fn(arg);
    
    // Limitar tamaño de caché
    if (keys.length >= maxSize) {
      const oldestKey = keys.shift();
      if (oldestKey) cache.delete(oldestKey);
    }
    
    keys.push(key);
    cache.set(key, result);
    
    return result;
  };
}

/**
 * Aplica throttling a una función para limitar su frecuencia de ejecución
 * @param fn Función a aplicar throttling
 * @param delay Tiempo mínimo entre ejecuciones en milisegundos
 * @returns Función con throttling aplicado
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeout: number | null = null;
  let lastArgs: Parameters<T> | null = null;

  return (...args: Parameters<T>): void => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      fn(...args);
    } else {
      lastArgs = args;
      if (timeout === null) {
        timeout = window.setTimeout(() => {
          if (lastArgs) {
            lastCall = Date.now();
            fn(...lastArgs);
          }
          timeout = null;
          lastArgs = null;
        }, delay - timeSinceLastCall);
      }
    }
  };
}

/**
 * Detecta si el usuario está en un dispositivo de bajo rendimiento
 * @returns true si es un dispositivo de bajo rendimiento
 */
export function isLowPerformanceDevice(): boolean {
  // Comprobaciones básicas para determinar dispositivos de bajo rendimiento
  const memory = (navigator as any).deviceMemory;
  const cores = navigator.hardwareConcurrency;
  
  return (
    (memory !== undefined && memory <= 2) || // 2GB o menos de memoria
    (cores !== undefined && cores <= 2) || // 2 o menos núcleos
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) // Dispositivo móvil
  );
}

import React from 'react';
import Button from '../ui/Button';
import { Coffee, ChevronUp } from '../../utils/icons';

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
  message?: string;
  title?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  message = 'Ha ocurrido un error inesperado al cargar esta sección',
  title = '¡Oops! Algo salió mal'
}) => {
  return (
    <div className="p-4 bg-white border border-amber-200 rounded-lg shadow-sm m-2">
      <div className="flex items-center justify-center mb-3">
        <Coffee className="text-amber-500 mr-2" size={24} />
        <h2 className="text-lg font-bold text-amber-600">{title}</h2>
      </div>
      
      <p className="text-sm text-stone-600 mb-4 text-center">
        {message}
      </p>
      
      {error && process.env.NODE_ENV !== 'production' && (
        <pre className="bg-stone-100 p-2 rounded text-xs text-stone-800 overflow-auto max-h-32 mb-3">
          {error.message}
        </pre>
      )}
      
      {resetErrorBoundary && (
        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={resetErrorBoundary}
            icon={<ChevronUp size={14} />}
          >
            Reintentar
          </Button>
        </div>
      )}
    </div>
  );
};

export default ErrorFallback;

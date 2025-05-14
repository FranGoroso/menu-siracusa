import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Actualizar el estado para mostrar el fallback en el siguiente render
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Registrar el error
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Llamar al callback onError si existe
    this.props.onError?.(error, errorInfo);
  }
  
  // Método para reintentar
  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Fallback personalizado o predeterminado
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Fallback predeterminado con botón de reintento
      return (
        <div className="p-4 max-w-md mx-auto text-center bg-amber-50 rounded-lg shadow-md mt-10">
          <h2 className="text-xl font-bold text-amber-600 mb-2">¡Oops! Algo salió mal</h2>
          <p className="text-sm text-stone-600 mb-4">
            Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
          </p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
          >
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

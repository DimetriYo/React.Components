import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { FallbackForErrorBoundary } from './components/FallbackForErrorBoundary';
import './index.css';
import { AppRouter } from './components/AppRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<FallbackForErrorBoundary />}>
      <AppRouter />
    </ErrorBoundary>
  </React.StrictMode>
);

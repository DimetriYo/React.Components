import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globalStyle/index.scss';
import ErrorBoundary from './components/ErrorBoundary';
import { FallbackForErrorBoundary } from './components/FallbackForErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<FallbackForErrorBoundary />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

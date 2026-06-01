import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

async function bootstrap() {
  // In mock mode, start the service worker before rendering
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    const { startMockServer } = await import('./mocks/server');
    await startMockServer();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootstrap();

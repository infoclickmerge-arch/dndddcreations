import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Netlify Identity - redirect to admin after login
if ((window as any).netlifyIdentity) {
  (window as any).netlifyIdentity.on('init', (user: any) => {
    if (!user) {
      (window as any).netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

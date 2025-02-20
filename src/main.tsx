import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('Application starting...');

const root = document.getElementById('root');
if (!root) {
  console.error('Root element not found');
} else {
  console.log('Root element found, mounting app...');
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

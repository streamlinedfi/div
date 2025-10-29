import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { uiSystem } from './uiSystem.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={uiSystem.theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

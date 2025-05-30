import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="index.html" element={<App />} />
          <Route path="feature/GH-115-upgrade-to-react/index.html" element={<App />} />
          <Route path="*" element={<App />} />
          <Route element={<App />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

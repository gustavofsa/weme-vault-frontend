import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { Login } from './pages/Login.tsx'
import { GlobalCSS } from './global/styles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)

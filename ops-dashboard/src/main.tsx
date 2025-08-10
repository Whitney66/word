import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Overview from './pages/Overview';
import Channels from './pages/Channels';
import Customers from './pages/Customers';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'channels', element: <Channels /> },
      { path: 'customers', element: <Customers /> },
      { path: 'products', element: <Products /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

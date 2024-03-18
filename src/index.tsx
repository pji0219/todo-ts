import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import TodoContextProvider from './context/TodoContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/',
    index: true,
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <RouterProvider router={router} />
    </TodoContextProvider>
  </React.StrictMode>
);

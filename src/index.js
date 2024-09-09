import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./views/Home/Home";
// import Show from "./views/Show/Show";
import Add from "./views/Add/Add";
import Show from './views/Show/show';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/show",
      element: <Show />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    }
  ]);

  root.render(
    <div>
        <RouterProvider router={router} />
        <Toaster/>
  </div>
  );


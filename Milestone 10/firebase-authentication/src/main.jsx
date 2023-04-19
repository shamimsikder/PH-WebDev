import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Provider from './components/Provider';
import Orders from './components/Orders';
import PrivateRouters from './PrivateRouters/PrivateRouters';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'orders',
        element: <PrivateRouters><Orders></Orders></PrivateRouters>
      },
      {
        path: 'profile',
        element: <PrivateRouters><Profile></Profile></PrivateRouters>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)

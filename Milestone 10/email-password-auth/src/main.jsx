import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import RegisterRBS from './components/RegisterRBS/RegisterRBS';
import RegisterBS from './components/RegisterBS/RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/registerrbs',
        element: <RegisterRBS></RegisterRBS>
      },
      {
        path: '/registerbs',
        element: <RegisterBS></RegisterBS>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

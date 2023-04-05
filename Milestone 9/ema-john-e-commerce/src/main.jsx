import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children: [

      {
        path: "/shop",
        element: <Shop></Shop>
      }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './components/Phones';
import Phone from './components/Phone';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App></App>,
    children: [

     {
      path: 'phones',
      element: <Phones></Phones>,
      loader: () => fetch('http://localhost:5000/phones')
     },
     {
      path: '/phone/:id',
      element: <Phone></Phone>,
      loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
     }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)

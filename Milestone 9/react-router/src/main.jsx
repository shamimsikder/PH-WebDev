import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>
  }

])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/Contact",
//     element: <Contact></Contact>,
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header></Header>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)

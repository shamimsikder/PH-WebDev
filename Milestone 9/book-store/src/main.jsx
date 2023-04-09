import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Books from './components/Books/Books'

const router = createBrowserRouter([

  {
    path: "/",
    element:  <App />,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch()
      },
      {
        path: 'about',
        element: <About></About>
      }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/addCoffee.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "add-coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "update-coffee",
    element: <UpdateCoffe></UpdateCoffe>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

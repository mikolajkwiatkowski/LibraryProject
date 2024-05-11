import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Katalog from './pages/Katalog.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Konto from './pages/Konto.jsx'
import Koszyk from './pages/Koszyk.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },{
    path: "katalog",
    element: <Katalog/>
  },
  {
    path: "konto",
    element: <Konto/>
  },
  {
    path: "kontakt",
    element: <Kontakt/>
  },
  {
    path: "koszyk",
    element: <Koszyk/>
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

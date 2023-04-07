import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'orders',
        element: <OrderReview />
      },
      {
        path: 'about',
        element: <h2>This is About Page</h2>
      },
      {
        path: 'contact',
        element: <h2>This is Contact page</h2>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

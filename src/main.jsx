import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Errorpage from './components/ErrorPage/Errorpage';
import Home from './components/Home/Home';
import SearchCountry from './components/SearchCountry/SearchCountry';
import Region from './components/Navbar/Region';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Errorpage/>,
    children : [
      {
        path : '/',
        element : <Home/>,
        loader : () => fetch("https://restcountries.com/v3.1/all")
      },
      {
        path : '/:region',
        element : <Region/>,
        loader : ({params}) => fetch(`https://restcountries.com/v3.1/region/${params.region}`)
      },
      {
        path : '/country/:name',
        element : <SearchCountry/>,
        loader : ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)

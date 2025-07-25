import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Clubs from './pages/Clubs.jsx'
import Player from './pages/Player.jsx'
import Favorites from './pages/Favorites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'clubs', element: <Clubs/>},
      {path: 'players', element: <Player/>},
      {path: 'favorites', element: <Favorites/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
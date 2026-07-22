import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './pages/home'
import { routes } from './routes'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...routes
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import QRCode from './pages/qr-code'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className="text-center text-gray-400">welcome</h1>
  },
  {
    path: '/qr-code',
    element: <QRCode />
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

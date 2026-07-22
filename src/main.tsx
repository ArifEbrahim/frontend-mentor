import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './pages/home'
import QRCode from './pages/qr-code'
import BlogPreview from './pages/blog-preview'
import ProductPreview from './pages/product-preview'
import NFTPreview from './pages/nft-preview'
import OrderSummary from './pages/order-summary'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/qr-code',
    element: <QRCode />
  },
  {
    path: '/blog-preview',
    element: <BlogPreview />
  },
  {
    path: '/product-preview',
    element: <ProductPreview />
  },
  {
    path: '/nft-preview',
    element: <NFTPreview />
  },
  {
    path: '/order-summary',
    element: <OrderSummary />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

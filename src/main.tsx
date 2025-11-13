import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import ProductPreview from './pages/product-preview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>welcome</div>
  },
  {
    path: '/product-preview',
    element: <ProductPreview />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)

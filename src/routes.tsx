import type { ReactNode } from 'react'
import QRCode from './pages/qr-code'
import BlogPreview from './pages/blog-preview'
import ProductPreview from './pages/product-preview'
import NFTPreview from './pages/nft-preview'
import OrderSummary from './pages/order-summary'

export interface Routes {
  path: string
  name: string
  element: ReactNode
}

export const routes: Routes[] = [
  { path: '/qr-code', name: 'QR Code Component', element: <QRCode /> },
  { path: '/blog-preview', name: 'Blog Preview Card', element: <BlogPreview /> },
  { path: '/product-preview', name: 'Product Preview Card', element: <ProductPreview /> },
  { path: '/nft-preview', name: 'NFT Preview Card', element: <NFTPreview /> },
  { path: '/order-summary', name: 'Order Summary Card', element: <OrderSummary /> }
]
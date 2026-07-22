import { Link } from 'react-router'

const challenges = [
  { path: '/qr-code', name: 'QR Code Component' },
  { path: '/blog-preview', name: 'Blog Preview Card' },
  { path: '/product-preview', name: 'Product Preview Card' },
  { path: '/nft-preview', name: 'NFT Preview Card' },
  { path: '/order-summary', name: 'Order Summary Card' }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <h1 className="mb-8 text-center font-outfit text-3xl font-bold text-gray-800">Frontend Mentor Solutions</h1>
      <nav aria-label="Challenge solutions">
        <ul className="flex w-full max-w-sm flex-col gap-4">
          {challenges.map(challenge => (
            <li key={challenge.path}>
              <Link
                to={challenge.path}
                className="block rounded-lg bg-white px-6 py-4 text-center font-outfit font-medium text-gray-700 shadow-md transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                {challenge.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

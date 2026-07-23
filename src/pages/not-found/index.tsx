import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Page not found</h1>
      <p className="mb-8">Sorry, we couldn’t find that page.</p>
      <Link className="rounded-xl border bg-gray-800 p-4 font-bold text-white" to="/">
        Back to home page
      </Link>
    </main>
  )
}

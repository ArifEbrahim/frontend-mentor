import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Page not found</h1>
      <p className='mb-8'>Sorry...something went wrong</p>
      <Link className='border p-4 rounded-xl bg-gray-800 text-white font-bold' to='/'>Back to home page</Link>
    </main>
  )
}

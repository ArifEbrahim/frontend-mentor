import { Link } from 'react-router'
import { routes } from '../../routes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Frontend Mentor Solutions</h1>
      <nav aria-label="Challenge solutions">
        <ul className="flex w-full max-w-sm flex-col gap-4">
          {routes.map(challenge => (
            <li key={challenge.path}>
              <Link
                to={challenge.path}
                className="block rounded-lg bg-white px-6 py-4 text-center font-medium text-gray-700 shadow-md transition-colors hover:bg-gray-50 hover:text-gray-900"
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

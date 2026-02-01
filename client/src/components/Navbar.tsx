import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight"
        >
          One Dish, One City
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link
              to="/"
              className="text-neutral-600 hover:text-neutral-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-neutral-600 hover:text-neutral-900"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

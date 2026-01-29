import { NavLink } from 'react-router-dom'

const linkClass = ({
  isActive,
}: {
  isActive: boolean
}) =>
  isActive
    ? 'underline font-semibold'
    : 'hover:underline'

export default function NavBar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <NavLink to="/" className="font-bold">
        One Dish, One City
      </NavLink>
      <div className="flex gap-4 text-sm">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={linkClass}
        >
          Favorites
        </NavLink>
        <NavLink
          to="/about"
          className={linkClass}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={linkClass}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

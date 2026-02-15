import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="border-b border-neutral-800 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-sans text-neutral-300">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/cities">Cities</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
        {/* Right Search Placeholder */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search dishes..."
            className="bg-neutral-900 text-neutral-300 placeholder-neutral-500 text-sm px-4 py-2 rounded-full border border-neutral-700 focus:outline-none focus:border-neutral-500 transition-all w-52"
          />
        </div>
      </div>
    </header>
  )
}

function NavItem({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className="relative group hover:text-white transition-colors duration-200"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

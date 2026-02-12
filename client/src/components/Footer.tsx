export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif text-neutral-200">
              One Dish, One City
            </h3>
            <p className="mt-3 text-sm text-neutral-500 max-w-sm">
              Exploring iconic dishes from cities
              around the world. A curated culinary
              journey.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-12 text-sm text-neutral-400">
            <div className="flex flex-col gap-2">
              <span className="text-neutral-300 font-medium">
                Explore
              </span>
              <a
                href="/"
                className="hover:text-white transition"
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-white transition"
              >
                About
              </a>
              <a
                href="/contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-neutral-300 font-medium">
                Legal
              </span>
              <a
                href="#"
                className="hover:text-white transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-white transition"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-neutral-800 pt-6 text-xs text-neutral-500 flex justify-between items-center">
          <span>
            © {new Date().getFullYear()} One Dish,
            One City
          </span>
          <span>Made by NAQ</span>
        </div>
      </div>
    </footer>
  )
}

import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

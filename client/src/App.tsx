import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CityPage from './pages/CityPage'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/city/:id"
            element={<CityPage />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

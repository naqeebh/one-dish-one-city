import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CityDetail from './pages/CityDetail'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Contact from './pages/Contact'
import Cities from './pages/Cities'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cities"
            element={<Cities />}
          />
          <Route
            path="/city/:id"
            element={<CityDetail />}
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

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import CityDetail from './pages/CityDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/city/:slug"
          element={<CityDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import LeadersPage from './pages/Leaders'
import Events from './pages/Events'
import ClubDetail from './pages/ClubDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaders" element={<LeadersPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:clubId" element={<ClubDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

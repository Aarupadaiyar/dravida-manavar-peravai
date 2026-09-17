import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import LeadersPage from './pages/Leaders'
import Forums from './pages/Forums'
import ForumDetail from './pages/ForumDetail'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Join from './pages/Join'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaders" element={<LeadersPage />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/:forumId" element={<ForumDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  )
}

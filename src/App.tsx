import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const LeadersPage = lazy(() => import('./pages/Leaders'))
const Forums = lazy(() => import('./pages/Forums'))
const ForumDetail = lazy(() => import('./pages/ForumDetail'))
const Events = lazy(() => import('./pages/Events'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const Join = lazy(() => import('./pages/Join'))

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  )
}

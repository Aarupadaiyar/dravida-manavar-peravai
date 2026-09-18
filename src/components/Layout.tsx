import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FounderPopup from './FounderPopup'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash])

  return (
    <div className="site">
      <Navbar />
      <Suspense fallback={<div className="route-loading" />}>
        <Outlet />
      </Suspense>
      <Footer />
      <FounderPopup />
    </div>
  )
}

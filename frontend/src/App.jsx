import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import CaseStudies from './pages/CaseStudies'
import Pricing from './pages/Pricing'
import Team from './pages/Team'
import Contact from './pages/Contact'
import UnifiedPortal from './pages/UnifiedPortal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const hideFooter = pathname === '/portal'

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<UnifiedPortal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

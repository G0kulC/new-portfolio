import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ProcessPage from './pages/ProcessPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <LoadingScreen onDone={() => { setLoaded(true); window.dispatchEvent(new Event('appReady')) }} />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease', transitionDelay: '0.15s' }}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

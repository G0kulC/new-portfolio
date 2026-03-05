import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import LogoSVG from './LogoSVG'
import heroPhoto from '../assets/images/hero-photo-CviJdGG2.webp'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const overlayRef = useRef(null)
  const tileRef = useRef(null)
  const linksRef = useRef([])
  const floatingNavRef = useRef(null)

  // Floating nav scroll show/hide
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.85
      if (show !== scrolled) setScrolled(show)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Floating nav GSAP slide
  useEffect(() => {
    if (floatingNavRef.current) {
      gsap.to(floatingNavRef.current, {
        y: scrolled ? 0 : '-100%',
        duration: 0.5,
        ease: 'power3.inOut'
      })
    }
  }, [scrolled])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // GSAP overlay animation
  useEffect(() => {
    if (!tileRef.current) return
    const links = linksRef.current.filter(Boolean)
    if (menuOpen) {
      // Open: clip-path wipe + stagger links
      gsap.to(tileRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.7,
        ease: 'power4.inOut'
      })
      gsap.fromTo(links,
        { y: '110%', rotate: 5, opacity: 0 },
        { y: '0%', rotate: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.07, delay: 0.25 }
      )
    } else {
      gsap.to(tileRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 0.6,
        ease: 'power4.inOut'
      })
      gsap.to(links, { y: '110%', rotate: 5, duration: 0.4, ease: 'power2.in', stagger: 0.04 })
    }
  }, [menuOpen])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/process', label: 'My process' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* ── Static navbar (hero) ── */}
      <nav className="nav-component">
        <div className="nav-container">
          <Link to="/" className="nav-brand" aria-label="Go to homepage">
            <LogoSVG />
          </Link>
          <div className="nav-menu hide-tablet">
            {links.slice(1, 4).map(l => (
              <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>
            ))}
          </div>
          <Link to="/contact" className="btn-cta hide-tablet">
            <img src={heroPhoto} alt="" style={{ width: '2rem', height: '2rem', borderRadius: '50%', objectFit: 'cover', objectPosition: '50% 8%', flexShrink: 0 }} />
            <span>Let&apos;s talk</span>
          </Link>
          <button
            className="hamburger-btn show-tablet"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="hamburger-label">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="hamburger-icon">
              <span className="hamburger-bar" style={menuOpen ? { transform: 'translateY(0.45em) rotate(45deg)' } : {}}/>
              <span className="hamburger-bar" style={menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}}/>
              <span className="hamburger-bar" style={menuOpen ? { transform: 'translateY(-0.45em) rotate(-45deg)' } : {}}/>
            </span>
          </button>
        </div>
      </nav>

      {/* ── Floating navbar (after scroll) ── */}
      <aside
        ref={floatingNavRef}
        className="floating-nav"
        style={{ transform: 'translateY(-100%)' }}
      >
        <div className="floating-nav-inner">
          <Link to="/" className="floating-logo-wrap" aria-label="Go to homepage">
            <LogoSVG className="logo-white" />
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {links.slice(1, 4).map(l => (
              <Link key={l.to} to={l.to} className="nav-link hide-tablet" style={{ color: 'white' }}>{l.label}</Link>
            ))}
            <button onClick={() => setMenuOpen(o => !o)} className="floating-menu-btn">
              <span>Menu</span>
              <span className="hamburger-icon">
                <span className="hamburger-bar"/>
                <span className="hamburger-bar"/>
                <span className="hamburger-bar"/>
              </span>
            </button>
            <Link to="/contact" className="btn-cta hide-tablet" style={{ height: '3rem' }}>
              <span>Let&apos;s talk</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* ── Full screen nav overlay ── */}
      <div className="nav-overlay" style={{ pointerEvents: menuOpen ? 'all' : 'none', zIndex: 998 }}>
        <div
          ref={tileRef}
          className="nav-overlay-tile"
          style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
        >
          <ul className="nav-overlay-list">
            {links.map((l, i) => (
              <li key={l.to} className="nav-overlay-item">
                <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                  <Link
                    to={l.to}
                    className="nav-overlay-link"
                    ref={el => linksRef.current[i] = el}
                    style={{ display: 'inline-block', transform: 'translateY(110%) rotate(5deg)', opacity: 0 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="nav-overlay-bottom">
            <a
              href="mailto:gggokul865@gmail.com?subject=Hey Gokul! I have a project idea"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              gggokul865@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

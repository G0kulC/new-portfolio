import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import useScrollReveal from '../hooks/useScrollReveal'

// Image imports
// import heroPhoto from '../assets/images/hero-photo-CviJdGG2.webp'
import aboutPolaroid from '../assets/images/home-about-polaroid-ChENQmkw.webp'
import estelle1 from '../assets/images/selected-projects-estelle-1-qHU2XBNn.avif'
import estelle2 from '../assets/images/selected-projects-estelle-2-Dx3Lb3Sy.avif'
import estelle3 from '../assets/images/selected-projects-estelle-3-Dyi6fvtt.avif'
import kivra1 from '../assets/images/selected-projects-kirva-1-CxeyEISW.avif'
import kivra2 from '../assets/images/selected-projects-kirva-2-hDo_u4HR.avif'
import kivra3 from '../assets/images/selected-projects-kirva-3-Dvld_7Yg.avif'
import shovk1 from '../assets/images/selected-projects-shovk-1-Wr0thKhM.avif'
import shovk2 from '../assets/images/selected-projects-shovk-2-BMyoIZnQ.avif'
import shovk3 from '../assets/images/selected-projects-shovk-3-DPzcCciA.avif'
import videoFile from '../assets/images/test-video_mp4-BoLQAW7V.mp4'

const PROJECTS = [
  {
    id: 'estelle',
    num: '01',
    title: 'DTS Dream Team',
    desc: 'AI-powered workforce management platform with meeting intelligence, RBAC, and real-time team analytics.',
    to: '/portfolio/estelle',
    images: [
      { src: estelle1, alt: 'DTS dashboard', span: '1/4', offset: '-0.6' },
      { src: estelle2, alt: 'DTS meeting intelligence', span: '5/9', offset: '0.3', is16x9: true },
      { src: estelle3, alt: 'DTS mobile', span: '9/12', offset: '0.2' },
    ]
  },
  {
    id: 'kivra',
    num: '02',
    title: 'Quickpath AI',
    desc: 'Real-time AI navigation platform powered by RAG pipeline and FAISS vector database for context-aware route guidance.',
    to: '/portfolio/kivra',
    images: [
      { src: kivra2, alt: 'Quickpath map view', span: '1/5', offset: '-0.6', is16x9: true },
      { src: kivra1, alt: 'Quickpath mobile', span: '5/9', offset: '0.5' },
      { src: kivra3, alt: 'Quickpath API', span: '9/12', offset: '0' },
    ]
  },
  {
    id: 'shovk',
    num: '03',
    title: 'MOM — Agentic AI',
    desc: 'Fully autonomous meeting agent: transcription → summarisation → task extraction → assignment → email dispatch.',
    to: '/portfolio/shovk',
    images: [
      { src: shovk1, alt: 'MOM pipeline', span: '1/4', offset: '-0.6' },
      { src: shovk2, alt: 'MOM summary output', span: '4/9', offset: '0.3', is16x9: true },
      { src: shovk3, alt: 'MOM task board', span: '9/12', offset: '0.2' },
    ]
  }
]

const FAQS = [
  { q: 'What do you specialise in?', a: "I specialise in backend systems and AI-powered automation — FastAPI, Flask, Django, RAG pipelines, FAISS vector databases, and Agentic AI. I build things that run reliably in production, not just demos." },
  { q: 'What kind of projects do you take on?', a: "Agentic AI pipelines, REST API backends, automation systems, RAG-powered assistants, and anything that eliminates repetitive manual work. If it involves Python + AI + real business impact, I'm interested." },
  { q: 'Do you do frontend work too?', a: "My core is backend and AI systems. I can handle full-stack when needed, but my biggest value is in the backend architecture, AI integration, and automation logic that makes the product actually work." },
  { q: 'What\'s your tech stack?', a: "Python (FastAPI, Flask, Django), AI/ML (RAG, FAISS, OpenAI, scikit-learn, TensorFlow), DevOps (Docker, GitHub Actions, CI/CD), Cloud (AWS S3), Databases (PostgreSQL, MySQL, Redis), Auth (JWT, bcrypt, RBAC)." },
  { q: 'How long does a project typically take?', a: "Depends on scope. A focused API or automation system can be done in 2–4 weeks. A full AI pipeline with RAG, agents, and integrations is typically 4–8 weeks. I'll always give you a clear estimate upfront." },
  { q: 'Do you work remotely?', a: "Yes, fully remote. I'm based in Coimbatore, India and have worked across projects for clients internationally. Communication is clear, async-friendly, and I deliver on time." },
  { q: 'How do we start?', a: "Fill up the contact form or email me directly at gggokul865@gmail.com. I'll reply within 24 hours and we'll set up a quick call to understand your project.\n\nIf it's a good fit — we move fast. If not, I'll tell you honestly." },
]

const TESTIMONIALS = [
  { quote: '"Best Employee of the Year — 2025"', text: "Honored for exceptional dedication, innovation, and impactful contributions across backend systems and AI automation domains. Delivered solutions that directly reduced client manual effort by 80%.", name: 'DotWorld Technologies', role: 'Annual Award — 2025' },
  { quote: '"Reduced our manual effort by 80%"', text: "The WordPress automation system Gokul built transformed our content workflow completely. What used to take hours of manual publishing now runs automatically. Clean, reliable, and exactly what we needed.", name: 'Content Team Client', role: 'Automation Project' },
  { quote: '"Best Employee of the Quarter"', text: "Recognised for excellence in backend development, consistent on-time delivery, and outstanding quality across automation and AI integration projects.", name: 'DotWorld Technologies', role: 'Q1 2025 Award' },
  { quote: '"The AI assistant actually understands our docs"', text: "The RAG-powered internal assistant Gokul built genuinely understands our company documents. Employees can query knowledge bases in natural language and get accurate, grounded answers instantly.", name: 'Internal Product Client', role: 'AI Assistant Project' },
]

function AccordionItem({ no, q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <li className={`accordion-item ${open ? 'open' : ''}`}>
      <button className="accordion-toggle" onClick={() => setOpen(o => !o)}>
        <div className="accordion-title-wrap">
          <span className="accordion-no">({no})</span>
          <h3 className="accordion-q">{q}</h3>
        </div>
        <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
          <path d="M28.5 22.5L18 12L7.5 22.5" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10"/>
        </svg>
      </button>
      <div className="accordion-body">
        <div className="accordion-body-inner">
          <p style={{ lineHeight: 'var(--lh-body)', whiteSpace: 'pre-line' }}>{a}</p>
        </div>
      </div>
    </li>
  )
}

function ParallaxImage({ src, alt, offset, className }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const factor = parseFloat(offset) || 0
    if (!factor) return

    const handleScroll = () => {
      if (!imgRef.current) return
      const rect = imgRef.current.closest('.falling-image-wrap')?.getBoundingClientRect()
      if (!rect) return
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      imgRef.current.style.transform = `translateY(${center * factor * 0.08}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return (
    <img ref={imgRef} src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  )
}

export default function HomePage() {
  useScrollReveal()
  const [activeProject, setActiveProject] = useState(0)
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const [heroScale, setHeroScale] = useState(1)

  // Sticky project tracking via scroll
  useEffect(() => {
    const sections = document.querySelectorAll('[data-project-section]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.projectSection
            const idx = PROJECTS.findIndex(p => p.id === id)
            if (idx !== -1) setActiveProject(idx)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Hero title entrance animation — fires after loading screen completes
  useEffect(() => {
    const animate = () => {
      gsap.from('.hero-word', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
        delay: 0.3,
      })
    }
    window.addEventListener('appReady', animate, { once: true })
    return () => window.removeEventListener('appReady', animate)
  }, [])

  // Hero parallax
  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const progress = window.scrollY / window.innerHeight
      hero.style.transform = `scale(${1 + progress * 0.05})`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const proj = PROJECTS[activeProject]

  return (
    <div className="page-wrapper">
      {/* ── HERO ── */}
      <div className="hero-sticky-wrapper">
        <div className="spacer-nav" />
        <section className="section-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero-content">
                <div className="hero-title-wrapper" style={{ overflow: 'clip' }}>
                  <h1 className="hero-title">
                    <span className="hero-title-line1">
                      <span className="hero-word-wrap"><span className="hero-word">AI</span></span>
                      <span className="hero-word-wrap"><span className="hero-word">Agents</span></span>
                      <span className="hero-word-wrap"><span className="hero-word">That</span></span>
                    </span>
                    <span className="hero-title-line2">
                      <span className="hero-word-wrap"><span className="hero-word">Actually</span></span>
                      <span className="hero-word-wrap" style={{ whiteSpace: 'nowrap' }}>
                        <span className="hero-word text-accent">&ldquo;Ship&rdquo;</span>
                      </span>
                    </span>
                  </h1>
                </div>
                <div className="hero-description-wrapper grid-12">
                  <p className="hero-description" style={{ gridColumn: 'span 3' }}>
                    I design and build AI agents that automate workflows, save time, and work around the clock — so you don&apos;t have to.
                  </p>
                  <div className="scroll-instruction" style={{ gridColumn: '10 / 13', placeSelf: 'end', textAlign: 'right' }}>
                    (SCROLL TO SEE HOW)
                  </div>
                </div>
                {/* <img ref={heroRef} className="hero-image" src={heroPhoto} width="800" height="955"
                  alt="A man wearing a black sweater and a white collar." loading="eager" /> */}
                <div className="hero-gradient" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── INTRO ── */}
      <section className="section-intro">
        <div className="padding-global">
          <div className="container-large">
            <div className="intro-content">
              <div className="intro-title-wrapper reveal">
                <span className="section-subtitle">What I do</span>
                <h2 className="heading-h1 allcaps text-center">
                  I build <em>AI agents</em> and backend systems that automate workflows, eliminate manual work, and make your operations <span className="text-accent">&ldquo;scale&rdquo;</span>.
                </h2>
              </div>
              <div className="intro-video-wrapper reveal reveal-delay-2">
                <div className="intro-video-note">
                  <span>Watch this to see how I can help</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 36" fill="none" style={{ width: '3rem' }}>
                    <path d="M1 0.999889C7.40028 7.00632 22.5182 20.1881 27.8462 22.5774C29.1888 23.0085 30.4352 23.282 34.8153 24.8632C39.1954 26.4443 53.5563 24.8704 62.8187 26.9744M62.8187 26.9744C62.7852 27.7219 61.915 28.5968 60.2964 29.5075C52.8642 33.6892 47.1995 34.7166 46.2324 34.7258M62.8187 26.9744C61.937 25.4952 59.4141 24.7413 56.4519 22.746C55.0697 20.7506 53.9329 16.7598 52.7617 12.6481" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="intro-video-box">
                  <video autoPlay loop muted playsInline>
                    <source src={videoFile} type="video/mp4" />
                  </video>
                  <div className="coming-soon-badge">COMING SOON</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <div style={{ backgroundColor: 'var(--neutral-darker)', color: 'white', position: 'relative' }}>
        {/* Sticky header */}
        <div style={{ position: 'sticky', top: 0, zIndex: 5, padding: 'var(--sp-lg) 0', backgroundColor: 'var(--neutral-darker)' }}>
          <div className="padding-global">
            <div className="container-large">
              <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 'var(--sp-md)' }}>
                What saying <span className="text-accent">&ldquo;YES!&rdquo;</span> looks like
              </span>
              <div style={{ textAlign: 'center', marginBottom: 'var(--sp-sm)' }}>
                <h2 className="heading-h2 allcaps" style={{ fontSize: 'var(--fs-h2)', transition: 'all 0.4s', display: 'inline-flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  {proj.title}
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-text)', opacity: 0.4 }}>({proj.num})</span>
                </h2>
                <p style={{ opacity: 0.6, maxWidth: '30rem', margin: '0.75rem auto 0', transition: 'opacity 0.4s' }}>
                  {proj.desc}
                </p>
                <div style={{ marginTop: 'var(--sp-md)' }}>
                  <Link to={proj.to} className="btn-cta" style={{ display: 'inline-flex' }}>
                    See project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project photo sections */}
        {PROJECTS.map((p) => (
          <div key={p.id} data-project-section={p.id} style={{ padding: 'var(--sp-xl) 0' }}>
            <div className="padding-global">
              <div className="container-large">
                <div className="project-photos-grid">
                  {p.images.map((img, i) => (
                    <div key={i} className="falling-image-wrap" style={{ gridColumn: img.span }}>
                      <div className={img.is16x9 ? 'photo-16x9' : 'photo-3x4'}>
                        <ParallaxImage src={img.src} alt={img.alt} offset={img.offset} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SEE ALL ── */}
      <div className="section-see-all">
        <div className="padding-global">
          <div className="container-large">
            <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--sp-lg) 0' }}>
              <Link to="/portfolio" className="btn-huge">
                <span className="btn-huge-title">See all</span>
                <span className="btn-huge-accent">(05)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section-about">
        <div className="padding-global">
          <div className="container-large">
            <div className="about-content">
              <div className="about-text-col reveal">
                <p>Hi, I'm Gokul. I build backend systems and AI agents that automate real workflows — saving time, cutting costs, and running around the clock without manual intervention.</p>
              </div>
              <div className="about-polaroid-wrapper reveal reveal-delay-2">
                <div className="perspective-wrap">
                  <div className="perspective-item">
                    <img src={aboutPolaroid} alt="Bogdan with dog" className="perspective-img" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="about-cta-col reveal reveal-delay-3">
                <p>2+ years at DotWorld Technologies shipping production-grade systems — Agentic AI pipelines, RAG assistants, REST APIs, and Docker CI/CD. Best Employee of the Year 2025, because I care about outcomes, not just output.</p>
                <Link to="/about" className="btn-cta" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                  Learn about me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-testimonials">
        <div className="padding-global">
          <div className="container-large">
            <h2 className="heading-h1 text-center testimonials-title reveal">
              What they <span className="text-accent">&ldquo;say&rdquo;</span>
            </h2>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`testimonial-card reveal reveal-delay-${(i % 2) + 1}`}>
                  <h3 className="testimonial-quote">{t.quote}</h3>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-client">
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-faq">
        <div className="padding-global">
          <div className="container-large">
            <h2 className="heading-h1 faq-title reveal">Got questions?</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {FAQS.map((item, i) => (
                <AccordionItem key={i} no={`Q${i + 1}`} q={item.q} a={item.a} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="cta-content">
              <span className="section-subtitle text-alternate" style={{ opacity: 0.6 }}>WORK WITH ME</span>
              <h2 className="heading-h1 allcaps text-center text-alternate reveal">
                Ready to<br />automate <span className="text-accent">&ldquo;it&rdquo;</span>?
              </h2>
              <Link to="/contact" className="btn-big reveal reveal-delay-2">
                <span className="btn-big-text">Let&apos;s <span className="text-accent">build!</span></span>
              </Link>
              <a href="mailto:gggokul865@gmail.com?subject=Hey Gokul! I have a project idea" className="cta-email reveal reveal-delay-3">
                gggokul865@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

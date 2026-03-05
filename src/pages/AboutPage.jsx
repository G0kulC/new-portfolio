import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import about1 from '../assets/images/about-image-1-CWJe_4wW.avif'
import about2 from '../assets/images/about-image-2-DIdQZHbE.avif'
import about4 from '../assets/images/about-image-4-BrNV9S_x.avif'
import heroPolaroid from '../assets/images/home-about-polaroid-ChENQmkw.webp'

const THINK_ITEMS = [
  {
    title: 'Automation without reliability is just noise.',
    desc: 'An agent that breaks in production is worse than no agent at all. Every system I build is designed for uptime, edge cases, and long-term maintainability — not just happy-path demos.'
  },
  {
    title: 'AI should reduce work, not create new kinds of it.',
    desc: 'The goal is zero manual intervention. If a human still needs to babysit the pipeline, it\'s not done yet. I build until the system truly runs itself.'
  },
  {
    title: 'Good architecture compounds over time.',
    desc: 'A well-designed backend makes every future feature easier. A poorly designed one makes every change painful. I default to clarity, modularity, and systems that scale.'
  },
  {
    title: 'Shipping beats perfecting.',
    desc: "Production feedback is worth more than hypothetical planning. I move fast, ship reliably, and iterate based on real data — not assumptions."
  },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <div className="page-wrapper">
      {/* ── HERO ── */}
      <div className="about-page-hero padding-global" style={{ display: 'block' }}>
        <div className="container-large">
          <div style={{ paddingTop: 'calc(var(--navbar-h) + var(--sp-lg))', paddingBottom: 'var(--sp-xl)', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1 className="about-hero-title reveal">About</h1>
            <p className="reveal reveal-delay-1" style={{ maxWidth: '30rem', marginTop: 'var(--sp-lg)', marginBottom: 'var(--sp-xl)', fontSize: '1.1rem', lineHeight: '1.5' }}>
              2+ years building AI agents and backend systems that automate real work — at DotWorld Technologies, Coimbatore.
            </p>
            <div className="about-polaroids reveal reveal-delay-2">
              <div className="polaroid-photo">
                <img className="polaroid-img" src={about1} alt="Bogdan working" loading="lazy" />
              </div>
              <div className="polaroid-photo">
                <img className="polaroid-img" src={heroPolaroid} alt="Bogdan with dog" loading="lazy" />
              </div>
              <div className="polaroid-photo">
                <img className="polaroid-img" src={about4} alt="Bogdan portrait" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHO I SERVE ── */}
      <div className="section-who-i-serve">
        <div className="padding-global">
          <div className="container-large" style={{ textAlign: 'center', padding: 'var(--sp-xl) 0' }}>
            <h2 className="who-i-serve-title reveal">
              I work with <span className="text-accent">teams</span> who<br />
              <span className="text-accent">want to automate</span><br />
              and need it done right
            </h2>
          </div>
        </div>
      </div>

      {/* ── MORE ABOUT ── */}
      <div className="padding-global" style={{ padding: 'var(--sp-xl) var(--sp-md)' }}>
        <div className="container-large">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-xl)', alignItems: 'start' }}>
            <div className="reveal">
              <img src={about2} alt="Bogdan working" loading="lazy" style={{ width: '100%', borderRadius: '0.5rem', aspectRatio: '3/4', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)', paddingTop: 'var(--sp-xl)' }}>
              <div className="reveal">
                <span className="section-subtitle" style={{ opacity: 0.5, display: 'block', marginBottom: 'var(--sp-sm)' }}>What I do</span>
                <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
                  I design and ship production-grade backend systems and AI agents — FastAPI REST APIs, RAG pipelines with FAISS, Agentic AI workflows, Docker CI/CD, and cloud integrations. Systems that handle real load and run without babysitting.
                </p>
              </div>
              <div className="reveal reveal-delay-1">
                <p style={{ lineHeight: '1.7' }}>
                  I'm Gokul Chandrasekaran — Software Developer and Backend & Automation Specialist at DotWorld Technologies. Best Employee of the Year 2025. I answer messages fast, own my work end-to-end, and I don't disappear after handoff.
                </p>
              </div>
              <div className="reveal reveal-delay-2">
                <Link to="/contact" className="btn-cta" style={{ display: 'inline-flex' }}>
                  Work with me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW I THINK ── */}
      <div className="how-i-think padding-global" style={{ backgroundColor: 'var(--neutral-darker)', color: 'white' }}>
        <div className="container-large">
          <div style={{ padding: 'var(--sp-xl) 0' }}>
            <h2 className="heading-h1 reveal" style={{ marginBottom: 'var(--sp-xl)' }}>
              How I think<br /><span className="text-accent">about systems</span>
            </h2>
            <div className="think-cards">
              {THINK_ITEMS.map((item, i) => (
                <div key={i} className={`think-card reveal reveal-delay-${(i % 2) + 1}`} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 className="think-card-title" style={{ color: 'white' }}>{item.title}</h3>
                  <p style={{ opacity: 0.7, lineHeight: '1.6', color: 'white' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="cta-content">
              <span className="section-subtitle text-alternate" style={{ opacity: 0.6 }}>WORK WITH ME</span>
              <h2 className="heading-h1 allcaps text-center text-alternate reveal">
                Ready to<br />automate <span className="text-accent">&ldquo;it&rdquo;</span>?
              </h2>
              <Link to="/contact" className="btn-big reveal reveal-delay-1">
                <span className="btn-big-text">Let&apos;s <span className="text-accent">build!</span></span>
              </Link>
              <a href="mailto:gggokul865@gmail.com?subject=Hey Gokul! I have a project idea" className="cta-email reveal reveal-delay-2">
                gggokul865@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

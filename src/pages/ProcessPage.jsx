import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import processHero from '../assets/images/process-hero-image-E0dTJZ3m.webp'
import processMeme from '../assets/images/process-meme-img-uBYVJv55.jpg'

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: "We start with a deep-dive conversation about your business, goals, and ideal clients. I ask the questions most designers skip — because the strategy behind the design is what makes it work. This is where we figure out what your website actually needs to do."
  },
  {
    num: '02',
    title: 'Positioning & Messaging',
    desc: "Before a single pixel is placed, we figure out what to say and how to say it. I help you clarify your positioning so the copy on your site does real work — not just filling space. Most websites fail here. Yours won't."
  },
  {
    num: '03',
    title: 'Design',
    desc: "I design in Figma, building a complete visual system tailored to your brand. Every decision — typography, color, layout, imagery — is intentional. You'll see full-fidelity mockups and we'll refine until it's exactly right."
  },
  {
    num: '04',
    title: 'Development',
    desc: "The design comes to life with clean, fast code. I build with Webflow for most projects — giving you an easy-to-edit CMS while maintaining full design fidelity. No bloated templates, no generic components."
  },
  {
    num: '05',
    title: 'Launch & Handoff',
    desc: "Once you're happy, we launch. I'll walk you through how to manage your site, and you'll receive a full handoff with everything documented. The relationship doesn't end at launch — I'm available for questions and updates."
  },
]

export default function ProcessPage() {
  useScrollReveal()
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div className="spacer-nav" />
        <img src={processHero} alt="Process" loading="eager" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <div className="padding-global" style={{ position: 'relative', zIndex: 1, paddingBottom: 'var(--sp-xl)' }}>
          <div className="container-large">
            <span className="section-subtitle reveal" style={{ opacity: 0.5, display: 'block', marginBottom: 'var(--sp-sm)' }}>How it works</span>
            <h1 className="heading-h1 allcaps reveal reveal-delay-1" style={{ maxWidth: '20ch' }}>
              My<br />Process
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="padding-global" style={{ paddingTop: 'var(--sp-xl)', paddingBottom: 'var(--sp-lg)' }}>
        <div className="container-large">
          <div style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="reveal" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
              Every project follows a clear, collaborative process — designed to eliminate guesswork, reduce revisions, and deliver a website that actually works.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="padding-global">
        <div className="container-large">
          <div className="process-steps">
            {STEPS.map((step, i) => (
              <div key={step.num} className={`process-step reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="process-step-num">{step.num}</div>
                <div className="process-step-title">{step.title}</div>
                <div className="process-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meme / note */}
      <div className="padding-global" style={{ padding: 'var(--sp-xl) var(--sp-md)' }}>
        <div className="container-large">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-lg)', alignItems: 'center' }}>
            <div className="reveal">
              <img src={processMeme} alt="Process meme" loading="lazy" style={{ width: '100%', borderRadius: '0.5rem', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
            <div className="reveal reveal-delay-2" style={{ paddingLeft: 'var(--sp-lg)' }}>
              <h2 className="heading-h2 allcaps" style={{ marginBottom: 'var(--sp-md)' }}>
                Transparency<br />is the whole deal
              </h2>
              <p style={{ lineHeight: 'var(--lh-body)', marginBottom: 'var(--sp-md)' }}>
                No black box. No surprises. You'll always know exactly where we are, what's coming next, and why decisions are being made.
              </p>
              <p style={{ lineHeight: 'var(--lh-body)', opacity: 0.7 }}>
                You're not hiring an order-taker. You're getting a partner who cares about your business outcomes as much as the pixels on screen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="cta-content">
              <span className="section-subtitle text-alternate" style={{ opacity: 0.6 }}>READY TO START?</span>
              <h2 className="heading-h1 allcaps text-center text-alternate reveal">
                Sounds like<br /><span className="text-accent">your thing?</span>
              </h2>
              <Link to="/contact" className="btn-big reveal reveal-delay-1">
                <span className="btn-big-text">Hell <span className="text-accent">yes!</span></span>
              </Link>
              <a href="mailto:hello@bogdankolomiyets.com?subject=Hey, Bogdan! I have a project idea" className="cta-email reveal reveal-delay-2">
                hello@bogdankolomiyets.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

import estelleCover from '../assets/images/portfolio-estelle-cover-D3QlCuqc.avif'
import kivraCover from '../assets/images/portfolio-kirva-cover-DYyIf7hk.avif'
import shovkProjects from '../assets/images/shovk-projects-Oi5vVl6r.avif'
import col1Cover from '../assets/images/portfolio-col1-cover-D1vWbG00.avif'
import collectionCover from '../assets/images/collection_cover-CHy2UtNQ.avif'

const PROJECTS = [
  { to: '/portfolio/estelle', num: '01', title: 'Estelle', type: 'Architecture Portfolio', img: estelleCover },
  { to: '/portfolio/kivra', num: '02', title: 'Kivra', type: 'Architecture Studio', img: kivraCover },
  { to: '/portfolio/shovk', num: '03', title: 'SHOVK STUDIO', type: 'Furniture Studio', img: shovkProjects },
  { to: '/portfolio/collection-v1', num: '04', title: 'Collection V1', type: 'Product Design', img: collectionCover },
  { to: '/portfolio/collection-v2', num: '05', title: 'Collection V2', type: 'Product Design', img: col1Cover },
]

export default function PortfolioPage() {
  useScrollReveal()
  return (
    <div className="page-wrapper">
      <div className="padding-global">
        <div className="container-large">
          <div className="portfolio-hero">
            <div className="spacer-nav" />
            <h1 className="heading-h1 allcaps reveal" style={{ paddingTop: 'var(--sp-xl)' }}>Portfolio</h1>
            <p className="reveal reveal-delay-1" style={{ maxWidth: '40rem', marginTop: 'var(--sp-md)', opacity: 0.6 }}>
              Selected works — websites built to make expertise undeniable and "yes" feel inevitable.
            </p>
          </div>

          <div className="portfolio-grid">
            {PROJECTS.map((p, i) => (
              <Link key={p.num} to={p.to} className={`portfolio-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="portfolio-card-img">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="portfolio-card-info">
                  <div>
                    <div className="portfolio-card-title">{p.title}</div>
                    <div style={{ opacity: 0.5, fontSize: '0.875rem', marginTop: '0.25rem' }}>{p.type}</div>
                  </div>
                  <span className="portfolio-card-num">{p.num}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ padding: 'var(--sp-xl) 0', textAlign: 'center', borderTop: '1.5px solid rgba(0,0,0,0.1)', marginTop: 'var(--sp-xl)' }}>
            <h2 className="heading-h1 allcaps reveal" style={{ marginBottom: 'var(--sp-lg)' }}>
              Ready to be next?
            </h2>
            <Link to="/contact" className="btn-cta reveal reveal-delay-1" style={{ display: 'inline-flex' }}>
              Let's work together
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

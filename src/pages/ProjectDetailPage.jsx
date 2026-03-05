import { useParams, Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

// Estelle
import estelleHome from '../assets/images/estelle-home-DDGSyqfO.avif'
import estelleAbout from '../assets/images/estelle-about-BO0_LBF3.webp'
import estelleMac from '../assets/images/estelle-macbook-CjcK0tpm.webp'
import estelleMobile1 from '../assets/images/estelle-mobile-1-Dz2RNcuk.avif'
import estelleMobile2 from '../assets/images/estelle-mobile-2-BtmxoeSK.avif'
import estelleMenu from '../assets/images/estelle-menu-Ba3-dwbk.webp'
import estelleBizCard from '../assets/images/estelle-business_card-DM91NksU.avif'

// Kivra
import kivraHome from '../assets/images/kivra-home-5AB0MC5d.jpg'
import kivraAbout from '../assets/images/kivra-about-Csh9Qzx_.jpg'
import kivraAbout1 from '../assets/images/kivra-about_1-mfCcXl2V.jpg'
import kivraMobile from '../assets/images/kivra-mobile-mockup-BQ64zf9S.webp'
import kivraExtra from '../assets/images/kivra_extra-CF_OY7jX.avif'

// Shovk
import shovkNav from '../assets/images/shovk-nav-CBWhWLse.jpg'
import shovkJournal from '../assets/images/shovk-journal-mockup-CXfLpe9x.avif'
import shovkProjects from '../assets/images/shovk-projects-Oi5vVl6r.avif'
import shovkExtra from '../assets/images/Shovk_extra_lofi-CWsOkJ5T.avif'

// Collections
import collectionCover from '../assets/images/collection_cover-CHy2UtNQ.avif'
import collectionExtra from '../assets/images/collection_extra-BeHcKc8G.webp'
import col1Cover from '../assets/images/portfolio-col1-cover-D1vWbG00.avif'
import col1Lattice from '../assets/images/col1-lattice-eQcuMtGQ.jpg'
import col1Lattice2 from '../assets/images/col1-lattice-2-DB-4VQ-U.jpg'

const PROJECTS = {
  estelle: {
    title: 'Estelle',
    type: 'Architecture Portfolio',
    year: '2024',
    scope: 'Design & Development',
    summary: "A sophisticated, high-end portfolio website for an architectural firm that needed to communicate expertise and refinement at first glance. The site had to feel as premium as the work it showcased.",
    heroImg: estelleHome,
    gallery: [
      { src: estelleMac, full: true, alt: 'Estelle MacBook mockup' },
      { src: estelleAbout, alt: 'Estelle about page' },
      { src: estelleMenu, alt: 'Estelle menu' },
      { src: estelleMobile1, alt: 'Estelle mobile 1' },
      { src: estelleMobile2, alt: 'Estelle mobile 2' },
      { src: estelleBizCard, full: true, alt: 'Estelle business card' },
    ]
  },
  kivra: {
    title: 'Kivra',
    type: 'Architecture Studio',
    year: '2024',
    scope: 'Design & Development',
    summary: "A bold, striking website for an architecture studio whose vision demands attention. The brief was clear: create something that communicates precision and confidence without saying a word.",
    heroImg: kivraHome,
    gallery: [
      { src: kivraAbout, full: true, alt: 'Kivra about' },
      { src: kivraAbout1, alt: 'Kivra about detail' },
      { src: kivraMobile, alt: 'Kivra mobile' },
      { src: kivraExtra, full: true, alt: 'Kivra extra' },
    ]
  },
  shovk: {
    title: 'SHOVK STUDIO',
    type: 'Furniture Studio',
    year: '2024',
    scope: 'Design Concept',
    summary: "A website concept for a furniture studio that maximizes impact through minimal modern form. Every element is deliberate — because when you have this level of craft, less is always more.",
    heroImg: shovkNav,
    gallery: [
      { src: shovkProjects, full: true, alt: 'Shovk projects' },
      { src: shovkJournal, alt: 'Shovk journal' },
      { src: shovkExtra, alt: 'Shovk extra' },
    ]
  },
  'collection-v1': {
    title: 'Collection V1',
    type: 'Product Design',
    year: '2023',
    scope: 'Design & Development',
    summary: "First iteration of a product collection website — clean, editorial, and built to let the products speak.",
    heroImg: collectionCover,
    gallery: [
      { src: col1Lattice, full: true, alt: 'Collection lattice' },
      { src: col1Lattice2, alt: 'Collection lattice 2' },
      { src: collectionExtra, alt: 'Collection extra' },
    ]
  },
  'collection-v2': {
    title: 'Collection V2',
    type: 'Product Design',
    year: '2024',
    scope: 'Design & Development',
    summary: "Refined second iteration — taking the first version's learnings and pushing the design system further.",
    heroImg: col1Cover,
    gallery: [
      { src: collectionCover, full: true, alt: 'Collection cover' },
      { src: col1Lattice, alt: 'Lattice' },
      { src: collectionExtra, full: true, alt: 'Collection extra' },
    ]
  },
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  useScrollReveal()

  const project = PROJECTS[slug]

  if (!project) {
    return (
      <div style={{ padding: 'calc(var(--navbar-h) + var(--sp-xl)) var(--sp-md)', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <Link to="/portfolio" className="btn-cta" style={{ display: 'inline-flex', marginTop: '2rem' }}>Back to portfolio</Link>
      </div>
    )
  }

  // Group gallery: pairs unless marked full
  const pairs = []
  let i = 0
  while (i < project.gallery.length) {
    if (project.gallery[i].full) {
      pairs.push([project.gallery[i]])
      i++
    } else if (i + 1 < project.gallery.length && !project.gallery[i + 1].full) {
      pairs.push([project.gallery[i], project.gallery[i + 1]])
      i += 2
    } else {
      pairs.push([project.gallery[i]])
      i++
    }
  }

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div className="spacer-nav" />
        <img src={project.heroImg} alt={project.title} loading="eager" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
        <div className="padding-global" style={{ position: 'relative', zIndex: 1, paddingBottom: 'var(--sp-xl)' }}>
          <div className="container-large">
            <h1 className="heading-h1 allcaps reveal" style={{ marginBottom: 'var(--sp-sm)' }}>{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="padding-global">
        <div className="container-large">
          <div className="project-detail-meta">
            <div style={{ gridColumn: '1 / 7' }} className="reveal">
              <h2 className="heading-h2 allcaps" style={{ marginBottom: 'var(--sp-md)', fontSize: 'var(--fs-h3)' }}>{project.type}</h2>
              <p style={{ maxWidth: '45ch', lineHeight: '1.7', fontSize: '1.1rem' }}>{project.summary}</p>
            </div>
            <div style={{ gridColumn: '8 / 13' }} className="project-detail-info reveal reveal-delay-2">
              {[['Year', project.year], ['Scope', project.scope]].map(([k, v]) => (
                <div key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.12)', paddingBottom: 'var(--sp-sm)', paddingTop: 'var(--sp-sm)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.4 }}>{k}</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-extrabold)', textTransform: 'uppercase' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="project-detail-gallery">
            {pairs.map((pair, pi) => (
              <div key={pi} className={pair.length === 1 ? 'gallery-full reveal' : 'gallery-half reveal'}>
                {pair.map((img, ii) => (
                  <img key={ii} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              </div>
            ))}
          </div>

          {/* Back */}
          <div style={{ paddingBottom: 'var(--sp-xl)', borderTop: '1.5px solid rgba(0,0,0,0.1)', paddingTop: 'var(--sp-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/portfolio" className="nav-link" style={{ opacity: 0.6 }}>← Back to portfolio</Link>
            <Link to="/contact" className="btn-cta">Start your project</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

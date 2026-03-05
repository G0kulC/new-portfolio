import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ContactPage() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-wrapper">
      <div className="padding-global">
        <div className="container-large">
          <div className="contact-page">
            <div className="spacer-nav" />
            <h1 className="contact-title reveal">
              Let's<br /><span className="text-accent">talk</span>
            </h1>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--sp-xl) 0' }} className="reveal">
                <h2 className="heading-h2 allcaps" style={{ marginBottom: 'var(--sp-md)' }}>
                  <span className="text-accent">Hell yes!</span> Message received.
                </h2>
                <p style={{ opacity: 0.7, marginBottom: 'var(--sp-lg)' }}>
                  I'll get back to you within 24–48 hours. Looking forward to learning about your project.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-md)' }}>
                  <div className="form-field reveal">
                    <label className="form-label">Your Name *</label>
                    <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" />
                  </div>
                  <div className="form-field reveal reveal-delay-1">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="form-field reveal">
                  <label className="form-label">Company / Project</label>
                  <input className="form-input" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
                </div>
                <div className="form-field reveal">
                  <label className="form-label">Project Type</label>
                  <select className="form-input" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">What are you building?</option>
                    <option value="ai-agent">AI Agent / Automation Pipeline</option>
                    <option value="rag">RAG System / AI Assistant</option>
                    <option value="api">REST API / Backend System</option>
                    <option value="fullstack">Full-Stack Application</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div className="form-field reveal">
                  <label className="form-label">Tell me about your project *</label>
                  <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} required
                    placeholder="What are you building? What problem does it solve? What's the current bottleneck you want automated?" />
                </div>
                <button type="submit" className="form-submit reveal">
                  Send message →
                </button>

                <p style={{ marginTop: 'var(--sp-lg)', opacity: 0.5, fontSize: '0.875rem' }} className="reveal">
                  Or email directly: <a href="mailto:gggokul865@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>gggokul865@gmail.com</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

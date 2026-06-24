import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #e5e7eb' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/oas-logo.png" alt="OAS Logo" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        </a>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: '#4b5563', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#8B1A1A'}
              onMouseLeave={e => e.target.style.color = '#4b5563'}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: 14 }}>
            Contact Us
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #e5e7eb', padding: '16px 24px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', fontWeight: 500, color: '#4b5563', borderBottom: '1px solid #f3f4f6' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            Contact Us
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

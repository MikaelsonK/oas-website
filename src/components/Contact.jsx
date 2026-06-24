import { Mail, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #6a1414 50%, #4a0e0e 100%)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.7, display: 'block', marginBottom: 12 }}>
              Get Started
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
              Let's Get Started
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, lineHeight: 1.75, marginBottom: 36, maxWidth: 440 }}>
              We'd love the opportunity to walk you through OAS in a live demo and answer any questions your team may have. Reach out to us and we'll take it from there.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              <a href="mailto:klo.nexus.2026@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'white', textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.65, marginBottom: 2, letterSpacing: 1, textTransform: 'uppercase' }}>Email</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>klo.nexus.2026@gmail.com</div>
                </div>
              </a>
              <a href="tel:09937268975" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'white', textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.65, marginBottom: 2, letterSpacing: 1, textTransform: 'uppercase' }}>Phone</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>09937268975</div>
                </div>
              </a>
            </div>

            <a href="mailto:klo.nexus.2026@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'white', color: '#8B1A1A',
              padding: '14px 28px', borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              Send Us a Message <ArrowRight size={18} />
            </a>
          </div>

          {/* <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: '40px 32px',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: '16px 24px',
                  marginBottom: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src="/klo-logo.png" alt="KLO Technologies" style={{ height: 72, width: 'auto', objectFit: 'contain' }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>KLO Technologies</div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24 }}>
               
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 80, paddingTop: 24, paddingBottom: 24 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, opacity: 0.6 }}>© 2026 KLO Technologies. All rights reserved.</div>
          <div style={{ fontSize: 13, opacity: 0.6 }}>OAS — Objectives Assessment System</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

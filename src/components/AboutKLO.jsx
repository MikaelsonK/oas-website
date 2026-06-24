export default function AboutKLO() {
  const team = [
    {
      name: 'Chloe Estilo',
      role: 'Software Engineer & Project Lead',
      url: 'https://chloebelle.ky-os.dev/',
      initials: 'CE',
    },
    {
      name: 'Kyle Osunero',
      role: 'Software Engineer & Project Lead',
      url: 'https://ky-os.dev/',
      initials: 'KO',
    },
  ]

  return (
    <section id="about" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">About Us</span>
            <h2 className="section-title">About KLO Technologies</h2>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.8, marginBottom: 32 }}>
              We built OAS from the ground up with the specific workflows of hospital training programs in mind. Every feature — from the evaluation forms to the procedure logger — was designed around the real, day-to-day needs of medical residents, evaluators, and program administrators.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {team.map(({ name, role, url, initials }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px',
                  background: 'white',
                  borderRadius: 14,
                  border: '1px solid #e5e7eb',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(139,26,26,0.12)'; e.currentTarget.style.borderColor = '#8B1A1A' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#e5e7eb' }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: 'linear-gradient(135deg, #8B1A1A, #6a1414)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 800, fontSize: 14, letterSpacing: 0.5,
                  }}>{initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#111827' }}>{name}</div>
                    <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{role}</div>
                  </div>
                  <div style={{ fontSize: 12, color: '#8B1A1A', fontWeight: 600 }}>↗ Portfolio</div>
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
              borderRadius: 32,
              padding: '40px 40px 36px',
              textAlign: 'center',
              maxWidth: 360,
              width: '100%',
              boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
            }}>
              <div style={{
                background: 'white',
                borderRadius: 20,
                padding: '24px 32px',
                marginBottom: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img src="/klo-logo.png" alt="KLO Technologies" style={{ height: 100, width: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>KLO Technologies</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>
                Building digital tools for healthcare training programs.
              </div>
              <div style={{ marginTop: 24, padding: '12px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: 12, color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                klo.nexus.2026@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

import { ArrowRight, CheckCircle } from 'lucide-react'

const badges = ['Role-Based Access', 'Digital Evaluation Forms', 'Procedure Logging', 'Admin Dashboard']

export default function Hero() {
  return (
    <section id="hero" style={{
      background: 'linear-gradient(135deg, #fff 0%, #fdf2f2 50%, #f5f0fa 100%)',
      paddingTop: 140,
      paddingBottom: 100,
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fde8e8', padding: '6px 14px', borderRadius: 99, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#8B1A1A', display: 'inline-block' }}></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#8B1A1A' }}>Digital Residency Evaluation Platform</span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.1, color: '#111827', marginBottom: 20 }}>
              Modernize Your{' '}
              <span style={{ color: '#8B1A1A' }}>Residency</span>{' '}
              Evaluation Program
            </h1>

            <p style={{ fontSize: 18, color: '#4b5563', marginBottom: 32, lineHeight: 1.7 }}>
              OAS brings evaluations, procedure logging, resident tracking, and administrative oversight into a single centralized platform — accessible from any device.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#contact" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>
                Book a Demo <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn btn-outline" style={{ fontSize: 16, padding: '14px 28px' }}>
                See Features
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {badges.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#4b5563' }}>
                  <CheckCircle size={15} color="#8B1A1A" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            <img src="/oas-logo.png" alt="OAS Logo" style={{
              width: '100%', maxWidth: 460, height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 24px 48px rgba(139,26,26,0.25))',
            }} />
            <div style={{
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: 900,
              color: '#8B1A1A',
              letterSpacing: 2,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              Online Assessment System
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero .container > div { grid-template-columns: 1fr !important; }
          #hero .container > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  )
}

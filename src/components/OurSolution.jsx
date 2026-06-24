import { ShieldCheck, LayoutDashboard, ClipboardList, Activity, Users } from 'lucide-react'

const capabilities = [
  { icon: Users, text: 'Role-based access for Admins, Evaluators, and Residents' },
  { icon: ClipboardList, text: 'Structured digital evaluation forms with weighted scoring' },
  { icon: Activity, text: 'Resident procedure logging with case tracking' },
  { icon: LayoutDashboard, text: 'Progress monitoring across evaluation periods' },
  { icon: ShieldCheck, text: 'Admin dashboard for full program oversight' },
]

export default function OurSolution() {
  return (
    <section id="solution" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">Our Solution</span>
            <h2 className="section-title">One Platform for the Entire Evaluation Workflow</h2>
            <p style={{ fontSize: 16, color: '#4b5563', marginBottom: 36, lineHeight: 1.75 }}>
              OAS digitizes and streamlines the resident evaluation process in hospital training programs — bringing evaluations, procedure logging, resident tracking, and administrative oversight into a single centralized platform, accessible from any device.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {capabilities.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: '#fde8e8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={18} color="#8B1A1A" />
                  </div>
                  <span style={{ fontSize: 15, color: '#374151', paddingTop: 7, lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #8B1A1A 0%, #6a1414 60%, #9B59B6 100%)',
              borderRadius: 32,
              padding: 40,
              color: 'white',
              maxWidth: 380,
              width: '100%',
              boxShadow: '0 24px 64px rgba(139,26,26,0.25)',
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>⚕️</div>
              <div style={{ fontWeight: 900, fontSize: 32, marginBottom: 8 }}>OAS</div>
              <div style={{ opacity: 0.85, fontSize: 15, marginBottom: 32 }}>Objectives Assessment System</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { value: '3', label: 'User Roles' },
                  { value: '1', label: 'Platform' },
                  { value: '∞', label: 'Evaluations' },
                  { value: '100%', label: 'Digital' },
                ].map(({ value, label }) => (
                  <div key={label} style={{
                    background: 'rgba(255,255,255,0.12)',
                    borderRadius: 12,
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontWeight: 800, fontSize: 24 }}>{value}</div>
                    <div style={{ opacity: 0.75, fontSize: 12 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #solution .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

import { Settings, GraduationCap, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Settings,
    step: '01',
    title: 'Setup & Configuration',
    desc: 'System deployment, hospital-specific configuration, user account creation, and evaluation form setup — all handled by our team.',
    duration: 'Week 1',
  },
  {
    icon: GraduationCap,
    step: '02',
    title: 'Training',
    desc: 'Role-specific walkthroughs for Admins, Evaluators, and Residents. Every user is onboarded before go-live.',
    duration: 'Week 1–2',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Go-Live & Support',
    desc: 'The system goes live with active monitoring and dedicated support from our team throughout the transition period.',
    duration: 'Week 2–4',
  },
]

export default function ImplementationPlan() {
  return (
    <section id="implementation" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Implementation</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Fully Onboarded in 2–4 Weeks</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            OAS is ready to deploy. Your team can be fully onboarded within 2 weeks to 1 month from acceptance.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 36, left: '16.5%', right: '16.5%', height: 2,
            background: 'linear-gradient(90deg, #8B1A1A, #9B59B6)',
            zIndex: 0,
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative', zIndex: 1 }}>
            {steps.map(({ icon: Icon, step, title, desc, duration }) => (
              <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8B1A1A, #6a1414)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, boxShadow: '0 4px 20px rgba(139,26,26,0.3)',
                  border: '4px solid white',
                }}>
                  <Icon size={30} color="white" />
                </div>

                <div style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 99,
                  background: '#fde8e8', color: '#8B1A1A',
                  fontWeight: 700, fontSize: 11, letterSpacing: 1,
                  textTransform: 'uppercase', marginBottom: 12,
                }}>
                  {duration}
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#111827', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, maxWidth: 260 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #implementation .container > div > div { display: none !important; }
          #implementation .container > div > div:last-child { display: grid !important; grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

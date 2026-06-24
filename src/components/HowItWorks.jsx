import { Settings, ClipboardCheck, BookOpen } from 'lucide-react'

const roles = [
  {
    icon: Settings,
    role: 'Admin',
    color: '#8B1A1A',
    bg: '#fde8e8',
    desc: 'Sets up and manages the program — creates evaluation periods, configures forms and domains, manages user accounts, and has full visibility into all evaluations and results across the institution.',
    tasks: ['Create evaluation periods', 'Configure forms & domains', 'Manage user accounts', 'Full program visibility'],
  },
  {
    icon: ClipboardCheck,
    role: 'Evaluator',
    color: '#7c3aed',
    bg: '#ede9fe',
    desc: 'Receives evaluation assignments and grades residents through structured digital forms. Has a clear view of pending and completed evaluations and can track individual resident performance over time.',
    tasks: ['Receive assignments', 'Grade via digital forms', 'Track pending evaluations', 'Monitor resident performance'],
  },
  {
    icon: BookOpen,
    role: 'Resident',
    color: '#0369a1',
    bg: '#e0f2fe',
    desc: 'Logs clinical procedures completed during training, views assigned evaluations, and receives structured feedback from evaluators — all in one place.',
    tasks: ['Log clinical procedures', 'View assigned evaluations', 'Receive structured feedback', 'Track progress'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Three Roles, One Seamless System</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Every stakeholder gets a tailored experience — purpose-built for their role in the evaluation process.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {roles.map(({ icon: Icon, role, color, bg, desc, tasks }) => (
            <div key={role} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <div style={{
                  width: 56, height: 56, borderRadius: 16, background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                }}>
                  <Icon size={28} color={color} />
                </div>
                <div style={{
                  display: 'inline-block', padding: '3px 12px', borderRadius: 99,
                  background: bg, color, fontWeight: 700, fontSize: 12,
                  letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12,
                }}>
                  {role}
                </div>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
              </div>

              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
                  Key Actions
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {tasks.map(t => (
                    <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#374151' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how-it-works .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

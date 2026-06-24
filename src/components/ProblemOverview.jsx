import { FileText, Users, Clock, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: FileText,
    title: 'Manual & Paper-Based Evaluations',
    desc: 'Resident evaluations are handled through paper forms and spreadsheets, making it difficult to track status and results consistently.',
    color: '#fde8e8',
    iconColor: '#8B1A1A',
  },
  {
    icon: AlertTriangle,
    title: 'Heavy Administrative Burden',
    desc: 'Administrators spend significant time coordinating evaluation schedules, managing forms, and compiling results across departments.',
    color: '#fef3e2',
    iconColor: '#d97706',
  },
  {
    icon: Users,
    title: 'No Centralized Resident Records',
    desc: 'There is no single record of completed clinical procedures per resident, leading to gaps in documentation and accountability.',
    color: '#ede9fe',
    iconColor: '#7c3aed',
  },
  {
    icon: Clock,
    title: 'Slow Feedback to Residents',
    desc: 'Feedback reaches residents late through manual processes, reducing its impact on their clinical development.',
    color: '#e0f2fe',
    iconColor: '#0369a1',
  },
]

export default function ProblemOverview() {
  return (
    <section id="problem" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">The Problem</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Why Traditional Methods Fall Short
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Hospital residency programs face critical challenges that paper-based systems simply cannot solve.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {problems.map(({ icon: Icon, title, desc, color, iconColor }) => (
            <div key={title} className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, background: color,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon size={24} color={iconColor} />
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #problem .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

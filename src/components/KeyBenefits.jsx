import { Zap, MessageSquare, BarChart2, Scale, FileSearch } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Operational Efficiency',
    desc: 'Eliminate paper-based workflows. Evaluations, logs, results — all happen in one system.',
    color: '#d97706', bg: '#fef3e2',
  },
  {
    icon: MessageSquare,
    title: 'Faster Feedback for Residents',
    desc: 'Evaluators submit assessments digitally, so residents receive feedback faster and can act on it sooner.',
    color: '#0369a1', bg: '#e0f2fe',
  },
  {
    icon: Scale,
    title: 'Standardized Assessments',
    desc: 'Structured forms ensure every resident is evaluated consistently and fairly across all evaluators.',
    color: '#7c3aed', bg: '#ede9fe',
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Oversight',
    desc: 'Administrators see a clear, real-time picture of program-wide performance — no manual compilation needed.',
    color: '#059669', bg: '#ecfdf5',
  },
  {
    icon: FileSearch,
    title: 'Full Audit Trail',
    desc: 'Every evaluation, score, and procedure log is recorded and timestamped — ready for accreditation, compliance, and internal review.',
    color: '#8B1A1A', bg: '#fde8e8',
  },
]

export default function KeyBenefits() {
  return (
    <section id="benefits" style={{ background: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Key Benefits</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Built for Real Clinical Programs</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            OAS delivers measurable impact across administration, evaluation, and resident development.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {benefits.slice(0, 3).map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="card">
              <div style={{ width: 48, height: 48, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={24} color={color} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 24, maxWidth: 760, margin: '24px auto 0' }}>
          {benefits.slice(3).map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="card">
              <div style={{ width: 48, height: 48, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={24} color={color} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #benefits .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #benefits .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

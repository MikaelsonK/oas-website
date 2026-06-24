import { useState } from 'react'
import { ClipboardList, Activity, LayoutDashboard } from 'lucide-react'

const features = [
  {
    icon: ClipboardList,
    title: 'Evaluation Forms',
    short: 'Digital forms with weighted scoring',
    desc: 'Residents are assessed through structured digital forms with weighted scoring, ensuring every evaluation is consistent, fair, and measurable. Evaluators can complete and submit assessments from any device.',
    points: [
      'Weighted scoring per competency domain',
      'Save as draft or submit immediately',
      'Any device — phone, tablet, desktop',
      'Auto-linked to resident records',
    ],
    mockup: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <img
          src="/eval-form-2.png"
          alt="New Evaluation"
          style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
        />
        <img
          src="/eval-form-1.png"
          alt="Fill Evaluation Form"
          style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
        />
      </div>
    ),
  },
  {
    icon: Activity,
    title: 'Procedure Logging',
    short: 'Track every clinical case with timestamps',
    desc: 'Residents log their clinical procedures directly in the system — including patient data and case details. Every entry is recorded and timestamped, creating a reliable and accountable trail of completed training activities.',
    points: [
      'Log procedure type, patient HRN, and supervision status',
      'Track progress vs. required targets per rotation',
      'Print PDF progress reports anytime',
      'Timestamped for accreditation compliance',
    ],
    mockup: (
      <img
        src="/procedure-screenshot.png"
        alt="Procedure Monitoring & Summary"
        style={{
          width: '100%', height: 'auto',
          borderRadius: 12,
          border: '1px solid #e5e7eb',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      />
    ),
  },
  {
    icon: LayoutDashboard,
    title: 'Progress Monitoring & Admin Dashboard',
    short: 'Real-time oversight across the program',
    desc: 'Administrators get a real-time view of each resident\'s progress, evaluation completion rates, and overall program performance — all without chasing down paperwork or compiling reports manually.',
    points: [
      'Program-wide evaluation completion rates',
      'Per-resident performance summaries',
      'Evaluation period management',
      'Grading sheet and procedure summary views',
    ],
    mockup: (
      <div style={{ background: '#f9fafb', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden', fontSize: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        {/* Top bar */}
        <div style={{ background: '#8B1A1A', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>OAS Admin Dashboard</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
          </div>
        </div>

        {/* Nav tabs */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 0, padding: '0 16px' }}>
          {['Overview', 'Residents', 'Evaluators', 'Reports'].map((tab, i) => (
            <div key={tab} style={{
              padding: '8px 14px', fontSize: 11, fontWeight: i === 0 ? 700 : 500,
              color: i === 0 ? '#8B1A1A' : '#9ca3af',
              borderBottom: i === 0 ? '2px solid #8B1A1A' : '2px solid transparent',
              cursor: 'pointer',
            }}>{tab}</div>
          ))}
        </div>

        <div style={{ padding: 14 }}>
          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 14 }}>
            {[
              { label: 'Residents', value: '24', icon: '👨‍⚕️', color: '#8B1A1A', bg: '#fde8e8' },
              { label: 'Evaluators', value: '8', icon: '🩺', color: '#7c3aed', bg: '#f3f0ff' },
              { label: 'Submitted', value: '142', icon: '✅', color: '#059669', bg: '#ecfdf5' },
              { label: 'Pending', value: '17', icon: '⏳', color: '#d97706', bg: '#fffbeb' },
            ].map(({ label, value, icon, color, bg }) => (
              <div key={label} style={{ background: 'white', borderRadius: 10, padding: '10px 10px', border: '1px solid #f3f4f6', textAlign: 'center' }}>
                <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
                <div style={{ fontWeight: 900, fontSize: 18, color }}>{value}</div>
                <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          <div style={{ background: 'white', borderRadius: 10, padding: 12, border: '1px solid #f3f4f6', marginBottom: 10 }}>
            <div style={{ fontWeight: 700, color: '#111827', marginBottom: 10, fontSize: 11 }}>Evaluation Completion by Resident</div>
            {[
              { name: 'Dr. A. Reyes', pct: 92 },
              { name: 'Dr. B. Santos', pct: 76 },
              { name: 'Dr. C. Lim', pct: 58 },
              { name: 'Dr. D. Cruz', pct: 41 },
            ].map(({ name, pct }) => (
              <div key={name} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ color: '#374151', fontSize: 10 }}>{name}</span>
                  <span style={{ color: pct >= 75 ? '#059669' : pct >= 50 ? '#d97706' : '#8B1A1A', fontWeight: 700, fontSize: 10 }}>{pct}%</span>
                </div>
                <div style={{ background: '#f3f4f6', borderRadius: 99, height: 6 }}>
                  <div style={{ width: `${pct}%`, height: 6, borderRadius: 99, background: pct >= 75 ? '#059669' : pct >= 50 ? '#d97706' : '#8B1A1A' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div style={{ background: 'white', borderRadius: 10, padding: 12, border: '1px solid #f3f4f6' }}>
            <div style={{ fontWeight: 700, color: '#111827', marginBottom: 8, fontSize: 11 }}>Recent Activity</div>
            {[
              { text: 'Evaluation submitted for Dr. A. Reyes', time: '2m ago', dot: '#059669' },
              { text: 'New resident Dr. E. Gomez added', time: '1h ago', dot: '#7c3aed' },
              { text: 'Period "AY 2026–2027" activated', time: '3h ago', dot: '#8B1A1A' },
            ].map(({ text, time, dot }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, paddingBottom: 7, borderBottom: '1px solid #f9fafb', marginBottom: 7 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: dot, marginTop: 3, flexShrink: 0 }} />
                <div style={{ flex: 1, color: '#374151', fontSize: 10, lineHeight: 1.4 }}>{text}</div>
                <div style={{ color: '#9ca3af', fontSize: 10, whiteSpace: 'nowrap' }}>{time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const f = features[active]

  return (
    <section id="features" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label">Features</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Everything Your Program Needs</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Purpose-built tools for every step of the residency evaluation workflow.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {features.map(({ icon: Icon, title }, i) => (
            <button key={title} onClick={() => setActive(i)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 20px', borderRadius: 99, cursor: 'pointer',
              border: active === i ? 'none' : '1px solid #e5e7eb',
              background: active === i ? '#8B1A1A' : 'white',
              color: active === i ? 'white' : '#4b5563',
              fontWeight: 600, fontSize: 14, transition: 'all 0.2s',
              fontFamily: 'inherit',
            }}>
              <Icon size={16} />
              {title}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{
              width: 52, height: 52, borderRadius: 14, background: '#fde8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
            }}>
              <f.icon size={26} color="#8B1A1A" />
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: '#111827', marginBottom: 12 }}>{f.title}</h3>
            <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, marginBottom: 28 }}>{f.desc}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {f.points.map(p => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#374151' }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fde8e8', color: '#8B1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>{f.mockup}</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #features .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

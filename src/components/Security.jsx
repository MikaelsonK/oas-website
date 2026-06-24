import { Lock, ShieldCheck, EyeOff, Server } from 'lucide-react'

const items = [
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    desc: 'Each user only sees and accesses what their role permits — nothing more. Admins, Evaluators, and Residents each have a strictly scoped view.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Authentication',
    desc: 'Credentials are encrypted and all access to the system is protected. Authentication is handled through industry-standard secure methods.',
  },
  {
    icon: EyeOff,
    title: 'Procedure Log Privacy',
    desc: 'Patient data entered in procedure logs is access-restricted and handled responsibly, in line with data privacy best practices.',
  },
  {
    icon: Server,
    title: 'Secure Hosting',
    desc: 'The system is deployed on professional cloud infrastructure following standard security practices — reliable, scalable, and monitored.',
  },
]

export default function Security() {
  return (
    <section id="security" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">Security & Privacy</span>
            <h2 className="section-title">Your Data Is Protected at Every Level</h2>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.75 }}>
              OAS is built with healthcare data sensitivity in mind. From role-based access control to encrypted credentials and secure cloud hosting, every layer of the system is designed to keep your program's data safe and compliant.
            </p>

            <div style={{ marginTop: 36, padding: '20px 24px', background: '#fde8e8', borderRadius: 14, borderLeft: '4px solid #8B1A1A' }}>
              <div style={{ fontWeight: 700, color: '#8B1A1A', marginBottom: 4, fontSize: 14 }}>Accreditation-Ready</div>
              <div style={{ fontSize: 13, color: '#6b7280' }}>
                Full audit trails and timestamped records make OAS ready for institutional accreditation reviews and compliance audits.
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: '#f9fafb',
                borderRadius: 16,
                padding: 24,
                border: '1px solid #f3f4f6',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: '#fde8e8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <Icon size={22} color="#8B1A1A" />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #security .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #security .container > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

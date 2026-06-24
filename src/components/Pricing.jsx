const oneTimeItems = [
  { item: 'Software License', desc: 'Full OAS platform, all features', cost: '₱160,000' },
  { item: 'Setup & Configuration', desc: 'User accounts, form setup, hospital config', cost: '₱20,000' },
  { item: 'Training', desc: 'All roles onboarded', cost: 'Included' },
  { item: 'Year 1 Hosting', desc: 'All infrastructure costs, first year', cost: 'Included' },
]

const annualItems = [
  { item: 'Vercel Pro (web hosting)', monthly: '₱1,200', annual: '₱14,400' },
  { item: 'Database hosting', monthly: '₱1,100', annual: '₱13,200' },
  { item: 'Domain & SSL', monthly: '₱100', annual: '₱1,200' },
  { item: 'Technical support', monthly: '₱600', annual: '₱7,200' },
]

const tdStyle = { padding: '14px 16px', borderBottom: '1px solid #f3f4f6', fontSize: 14, color: '#374151' }
const thStyle = { padding: '12px 16px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#6b7280', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Transparent, Straightforward Pricing</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            One-time fee to get started, with clear annual maintenance costs from Year 2 onwards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* One-time fee */}
          <div style={{ border: '2px solid #8B1A1A', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ background: '#8B1A1A', padding: '24px 28px' }}>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
                One-Time Fee
              </div>
              <div style={{ color: 'white', fontWeight: 900, fontSize: 28 }}>Per Department</div>
            </div>

            <div style={{ padding: '0 0 24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Item</th>
                    <th style={{ ...thStyle, textAlign: 'right' }}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {oneTimeItems.map(({ item, desc, cost }) => (
                    <tr key={item}>
                      <td style={tdStyle}>
                        <div style={{ fontWeight: 600, color: '#111827' }}>{item}</div>
                        <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{desc}</div>
                      </td>
                      <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 700, color: cost === 'Included' ? '#059669' : '#111827', whiteSpace: 'nowrap' }}>
                        {cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ margin: '0 16px', background: '#fde8e8', borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: '#8B1A1A' }}>Total</div>
                    <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>Up to 10 Evaluators · Up to 50 Residents</div>
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 28, color: '#8B1A1A' }}>₱180,000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Annual maintenance */}
          <div style={{ border: '1px solid #e5e7eb', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ background: '#f9fafb', padding: '24px 28px', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ color: '#9ca3af', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
                Annual Maintenance
              </div>
              <div style={{ color: '#111827', fontWeight: 900, fontSize: 28 }}>Year 2 Onwards</div>
            </div>

            <div style={{ padding: '0 0 24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Item</th>
                    <th style={{ ...thStyle, textAlign: 'right' }}>Monthly</th>
                    <th style={{ ...thStyle, textAlign: 'right' }}>Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {annualItems.map(({ item, monthly, annual }) => (
                    <tr key={item}>
                      <td style={{ ...tdStyle, fontWeight: 500 }}>{item}</td>
                      <td style={{ ...tdStyle, textAlign: 'right', color: '#6b7280' }}>{monthly}</td>
                      <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 600 }}>{annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ margin: '0 16px', background: '#f3f4f6', borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: '#111827' }}>Total</div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 900, fontSize: 22, color: '#111827' }}>₱36,000</span>
                    <span style={{ fontSize: 12, color: '#9ca3af', display: 'block' }}>₱3,000 / month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#9ca3af', marginTop: 24 }}>
          Pricing is preliminary and subject to adjustment based on your institution's existing infrastructure and procurement requirements.{' '}
          <span style={{ color: '#8B1A1A', fontWeight: 600 }}>Multi-department packages are available upon request.</span>
        </p>

        <div style={{
          marginTop: 32,
          padding: '20px 28px',
          background: '#fdf9f0',
          border: '1px solid #e9d8a6',
          borderRadius: 14,
          display: 'flex',
          gap: 14,
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>📋</span>
          <p style={{ fontSize: 13, color: '#6b5a2e', lineHeight: 1.75, margin: 0 }}>
            <strong>Note:</strong> All pricing indicated above is preliminary and subject to further validation. As a government institution, your hospital may have existing infrastructure, domain arrangements, or procurement requirements that could affect the final cost breakdown. Adjustments will be made accordingly in coordination with your administration prior to any formal agreement.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #pricing .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

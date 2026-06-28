const oneTimeItems = [
  { item: 'Software License', desc: 'Full OAS platform, all features', cost: '₱180,000' },
  { item: 'Setup & Configuration', desc: 'User accounts, form setup, hospital config', cost: '₱20,000' },
  { item: 'Training', desc: 'All roles onboarded', cost: 'Included' },
  { item: 'Year 1 Hosting', desc: 'All infrastructure costs, first year', cost: 'Included' },
]

const annualItems = [
  { item: 'Software Maintenance', desc: 'Updates, bug fixes, security patches', monthly: '₱2,000', annual: '₱24,000' },
  { item: 'Technical Support', desc: 'Priority response, all roles covered', monthly: '₱2,500', annual: '₱30,000' },
  { item: 'Infrastructure Management', desc: 'Hosting, database, domain & SSL', monthly: '₱500', annual: '₱6,000' },
]

const tdStyle = { padding: '14px 16px', borderBottom: '1px solid #f3f4f6', fontSize: 14, color: '#374151' }
const thStyle = { padding: '12px 16px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#6b7280', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }

const HospitalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>
    <path d="M12 7v4m-2-2h4"/>
  </svg>
)

const SlidersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
)

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Transparent, Straightforward Pricing</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            One-time fee to get started, with clear annual maintenance costs from Year 2 onwards.
          </p>
        </div>

        {/* Institution-wide callout — shown first intentionally */}
        <div style={{
          marginBottom: 40,
          background: '#111827',
          borderRadius: 16,
          padding: '28px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 32,
        }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ color: '#8B1A1A', flexShrink: 0, marginTop: 2 }}>
              <HospitalIcon />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 800, fontSize: 17, marginBottom: 6 }}>
                Scaling Up? Don't do the math yourself.
              </div>
              <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.75, margin: 0, maxWidth: 520 }}>
                If you're looking to deploy across multiple departments or your entire institution, per-department pricing doesn't apply. Institution-wide packages are available at a significantly lower cost — reach out and we'll build a proposal around your scope.
              </p>
            </div>
          </div>
          <a href="#contact" style={{
            flexShrink: 0,
            background: '#8B1A1A',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
            padding: '12px 24px',
            borderRadius: 8,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            Get a Proposal →
          </a>
        </div>

        {/* Per-department label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1.5, whiteSpace: 'nowrap' }}>
            Single Department Pricing
          </span>
          <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
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
                    <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>Up to 10 Evaluators · Up to 30 Residents</div>
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 28, color: '#8B1A1A' }}>₱200,000</div>
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
                  {annualItems.map(({ item, desc, monthly, annual }) => (
                    <tr key={item}>
                      <td style={tdStyle}>
                        <div style={{ fontWeight: 600, color: '#111827' }}>{item}</div>
                        <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{desc}</div>
                      </td>
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
                    <span style={{ fontWeight: 900, fontSize: 22, color: '#111827' }}>₱60,000</span>
                    <span style={{ fontSize: 12, color: '#9ca3af', display: 'block' }}>₱5,000 / month</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: '#9ca3af', margin: '12px 16px 0', lineHeight: 1.6 }}>
                * Direct infrastructure costs (hosting, database, domain) are billed separately at ~₱28,800/year.
              </p>
            </div>
          </div>
        </div>

        {/* Make It Yours */}
        <div style={{
          marginTop: 24,
          padding: '16px 24px',
          borderLeft: '4px solid #8B1A1A',
          background: '#fdf8f8',
          borderRadius: '0 10px 10px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 24,
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ color: '#8B1A1A', flexShrink: 0 }}>
              <SlidersIcon />
            </div>
            <p style={{ fontSize: 14, color: '#3b1a1a', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#8B1A1A' }}>Make It Yours —</strong> The system can be tailored to your institution's specific workflows upon request. Minor adjustments are covered within the existing pricing; more significant customizations are scoped and priced transparently before any work begins.
            </p>
          </div>
          <a href="#contact" style={{ flexShrink: 0, fontSize: 13, fontWeight: 700, color: '#8B1A1A', textDecoration: 'none', borderBottom: '1.5px solid #8B1A1A', whiteSpace: 'nowrap', paddingBottom: 1 }}>
            Let's talk →
          </a>
        </div>

        {/* Note */}
        <div style={{
          marginTop: 16,
          padding: '16px 20px',
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: 10,
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
        }}>
          <div style={{ color: '#9ca3af', flexShrink: 0, marginTop: 2 }}>
            <InfoIcon />
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75, margin: 0 }}>
            All pricing is preliminary and subject to adjustment based on your institution's existing infrastructure, domain arrangements, or procurement requirements. Adjustments will be made in coordination with your administration prior to any formal agreement.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #pricing .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
          #pricing .container > div:nth-child(2) { flex-direction: column !important; }
          #pricing .container > div:nth-child(2) a { width: 100% !important; text-align: center; }
        }
      `}</style>
    </section>
  )
}

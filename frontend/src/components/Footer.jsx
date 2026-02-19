import { Link } from 'react-router-dom'

const footerLinks = {
    Company: [
        { label: 'Home', path: '/' },
        { label: 'Team', path: '/team' },
        { label: 'Contact', path: '/contact' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Pricing', path: '/pricing' },
    ],
    Services: [
        { label: 'Lead Capture', path: '/services' },
        { label: 'AI Follow-Ups', path: '/services' },
        { label: 'CRM Automation', path: '/services' },
        { label: 'Integrations', path: '/services' },
    ],
    Solutions: [
        { label: 'Marketing Agencies', path: '/solutions' },
        { label: 'Real Estate', path: '/solutions' },
        { label: 'SaaS Companies', path: '/solutions' },
        { label: 'Service Businesses', path: '/solutions' },
    ],
}

export default function Footer() {
    return (
        <footer style={{ background: 'var(--gray-900)', color: 'var(--white)', paddingTop: '80px' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '48px',
                    paddingBottom: '60px',
                    borderBottom: '1px solid var(--gray-700)',
                }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                                background: 'var(--gradient-card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'white', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Poppins, sans-serif',
                            }}>A</div>
                            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.3rem' }}>Arcanext</span>
                        </div>
                        <p style={{ color: 'var(--gray-400)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '300px' }}>
                            AI-powered automation systems that help businesses capture, nurture, and convert leads automatically.
                        </p>

                        {/* Contact Info */}
                        <div style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--gray-400)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                <span>📧</span>
                                <a href="mailto:Arcanextofficial@gmail.com" style={{ color: 'var(--gray-400)', transition: 'var(--transition)' }}
                                    onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}>
                                    Arcanextofficial@gmail.com
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                <span>📞</span>
                                <a href="tel:+918693852452" style={{ color: 'var(--gray-400)', transition: 'var(--transition)' }}
                                    onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}>
                                    +91 8693852452 (Rishi)
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span>📞</span>
                                <a href="tel:+918591545882" style={{ color: 'var(--gray-400)', transition: 'var(--transition)' }}
                                    onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}>
                                    +91 8591545882 (Ayush)
                                </a>
                            </div>
                        </div>

                        {/* Social */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                            <a href="https://www.linkedin.com/in/rishi-sawant-2445b026b" target="_blank" rel="noopener noreferrer" style={{
                                width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                                background: 'var(--gray-800)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'var(--transition)',
                            }} onMouseEnter={e => { e.currentTarget.style.background = '#0077B5' }} onMouseLeave={e => { e.currentTarget.style.background = 'var(--gray-800)' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gray-400)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="https://wa.me/918693852452?text=Hi%2C%20I%27m%20interested%20in%20Arcanext%20services." target="_blank" rel="noopener noreferrer" style={{
                                width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                                background: 'var(--gray-800)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'var(--transition)',
                            }} onMouseEnter={e => { e.currentTarget.style.background = '#25D366' }} onMouseLeave={e => { e.currentTarget.style.background = 'var(--gray-800)' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gray-400)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '20px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {title}
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {links.map(link => (
                                    <Link key={link.label} to={link.path} style={{
                                        color: 'var(--gray-400)', fontSize: '0.9rem', transition: 'var(--transition)',
                                    }} onMouseEnter={e => e.target.style.color = 'white'}
                                        onMouseLeave={e => e.target.style.color = 'var(--gray-400)'}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '24px 0', color: 'var(--gray-500)', fontSize: '0.85rem',
                    flexWrap: 'wrap', gap: '12px',
                }}>
                    <span>© 2026 Arcanext. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ color: 'var(--gray-500)', transition: 'var(--transition)' }}
                            onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--gray-500)'}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--gray-500)', transition: 'var(--transition)' }}
                            onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--gray-500)'}>Terms of Service</a>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    )
}

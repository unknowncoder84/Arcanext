import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const team = [
    {
        name: 'Rishi Sawant',
        role: 'Senior Developer & AI Specialist',
        bio: 'Full-stack developer with 5+ years in AI/ML and automation systems. Specializes in building scalable lead capture and CRM automation pipelines.',
        initials: 'RS',
        color: '#2563EB',
        phone: '8693852452',
        linkedin: 'https://www.linkedin.com/in/rishi-sawant-2445b026b',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    },
    {
        name: 'Ayush Singh',
        role: 'Senior Developer & AI Specialist',
        bio: 'Expert in cloud architecture and API integrations. Builds enterprise-grade automation solutions connecting CRMs, payment systems, and communication platforms.',
        initials: 'AS',
        color: '#7C3AED',
        phone: '8591545882',
        linkedin: 'https://www.linkedin.com/in/ayush0707',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
]

const stats = [
    { value: '20+', label: 'AI Automation Specialists' },
    { value: '50+', label: 'Businesses Served' },
    { value: '200+', label: 'Automations Built' },
    { value: '99.9%', label: 'System Uptime' },
]

export default function Team() {
    return (
        <>
            <section style={{ background: 'var(--gradient-hero)', paddingTop: '160px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '20%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ marginBottom: '16px' }}>Our Team</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px' }}>
                            Meet the <span style={{ background: 'linear-gradient(135deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experts</span>
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
                            A world-class team of AI automation specialists dedicated to transforming your business.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
                <div className="container">
                    <StaggerContainer className="grid-4" staggerDelay={0.1}>
                        {stats.map((s, i) => (
                            <StaggerItem key={i}>
                                <div style={{ textAlign: 'center', padding: '24px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Poppins', marginBottom: 8 }}>{s.value}</div>
                                    <div style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>{s.label}</div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Team Members */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <span className="badge badge-primary">Leadership</span>
                            <h2>20 AI Automation Specialists</h2>
                            <p>Our founding team brings deep expertise in AI, automation, and enterprise software.</p>
                        </div>
                    </AnimatedSection>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, maxWidth: 800, margin: '0 auto' }} className="grid-2">
                        {team.map((m, i) => (
                            <AnimatedSection key={i} delay={i * 0.15}>
                                <div className="card" style={{ textAlign: 'center', padding: 40 }}>
                                    {/* Profile Initial Circle */}
                                    <div style={{
                                        width: 110, height: 110, borderRadius: '50%', margin: '0 auto 24px',
                                        background: `linear-gradient(135deg, ${m.color}, ${m.color}bb)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Poppins',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                    }}>
                                        {m.initials}
                                    </div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: 4 }}>{m.name}</h3>
                                    <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16 }}>{m.role}</div>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>{m.bio}</p>

                                    {/* Action Buttons */}
                                    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                                        {/* LinkedIn */}
                                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
                                            borderRadius: 'var(--radius-full)', background: '#0077B510', color: '#0077B5',
                                            fontWeight: 600, fontSize: '0.8rem', border: '1px solid #0077B530', transition: 'var(--transition)',
                                        }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                            LinkedIn
                                        </a>
                                        {/* WhatsApp */}
                                        <a href={`https://wa.me/91${m.phone}?text=Hi%20${m.name.split(' ')[0]}%2C%20I%27m%20interested%20in%20Arcanext.`}
                                            target="_blank" rel="noopener noreferrer" style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
                                                borderRadius: 'var(--radius-full)', background: '#25D36610', color: '#128C7E',
                                                fontWeight: 600, fontSize: '0.8rem', border: '1px solid #25D36630', transition: 'var(--transition)',
                                            }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                            WhatsApp
                                        </a>
                                        {/* Phone */}
                                        <a href={`tel:+91${m.phone}`} style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px',
                                            borderRadius: 'var(--radius-full)', background: 'var(--primary-50)', color: 'var(--primary)',
                                            fontWeight: 600, fontSize: '0.8rem', border: '1px solid var(--primary-200)', transition: 'var(--transition)',
                                        }}>
                                            📞 Call
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section style={{ background: 'var(--gray-900)', padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <AnimatedSection>
                        <h2 style={{ fontSize: '2.2rem', color: 'white', marginBottom: 16 }}>Want to Join Our Team?</h2>
                        <p style={{ color: 'var(--gray-400)', maxWidth: 480, margin: '0 auto 32px' }}>We're always looking for talented people passionate about AI and automation.</p>
                        <a href="mailto:careers@arcanext.com" className="btn btn-primary btn-lg">View Open Positions</a>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}

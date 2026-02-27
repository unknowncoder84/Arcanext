import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const caseStudies = [
    {
        company: 'Apex Marketing Co.', industry: 'Marketing Agency', logo: '📣', color: '#2563EB',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
        problem: 'Losing 40% of leads due to slow manual follow-up. Team overwhelmed with data entry.',
        solution: 'End-to-end automation: instant capture from 12+ channels, AI follow-ups, automated CRM pipelines.',
        results: [
            { value: '42%', label: 'More Booked Calls' },
            { value: '35%', label: 'Faster Response' },
            { value: '3x', label: 'Leads Processed' },
            { value: '$180K', label: 'Added Revenue' },
        ],
        quote: 'Arcanext transformed our lead management. ROI was visible within the first month.',
        author: 'Sarah Mitchell', role: 'CEO, Apex Marketing',
    },
    {
        company: 'Prestige Realty Group', industry: 'Real Estate', logo: '🏠', color: '#059669',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
        problem: 'Agents manually chasing hundreds of inquiries daily. High-value leads slipping through.',
        solution: 'AI lead scoring, instant property matching, automated showing scheduling with CRM sync.',
        results: [
            { value: '28%', label: 'Revenue Growth' },
            { value: '60%', label: 'Pipeline Visibility' },
            { value: '5min', label: 'Response (was 4hrs)' },
            { value: '2x', label: 'Showings/Agent' },
        ],
        quote: 'Our agents focus on closing, not chasing. Automation handles first contact to confirmation.',
        author: 'David Chen', role: 'Managing Broker',
    },
    {
        company: 'ScaleFlow SaaS', industry: 'SaaS', logo: '💻', color: '#7C3AED',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        problem: '12% trial-to-paid conversion and high churn. No automated engagement or retention.',
        solution: 'Product-led growth engine: onboarding sequences, usage triggers, churn prediction, re-engagement.',
        results: [
            { value: '22%', label: 'Trial Conversion' },
            { value: '45%', label: 'Less Churn' },
            { value: '68%', label: 'Onboarding Done' },
            { value: '$320K', label: 'Support Saved' },
        ],
        quote: 'The automation Arcanext built is the backbone of our growth. Conversion nearly doubled.',
        author: 'Priya Sharma', role: 'VP of Growth',
    },
]

export default function CaseStudies() {
    return (
        <>
            <section className="hero-section" style={{ background: 'var(--gradient-hero)', paddingTop: '160px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '15%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ marginBottom: '16px' }}>Case Studies</span>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px', maxWidth: 650, lineHeight: 1.2 }}>
                            Real Results for <span style={{ background: 'linear-gradient(135deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Real Businesses</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.15rem)', color: 'rgba(255,255,255,0.7)', maxWidth: 520, lineHeight: 1.7 }}>See how Arcanext has helped businesses automate growth and achieve measurable results.</p>
                    </AnimatedSection>
                </div>
            </section>

            {caseStudies.map((cs, i) => (
                <section key={i} className="section" style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--gray-50)' }}>
                    <div className="container">
                        <AnimatedSection>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
                                <div style={{ width: 'clamp(50px, 10vw, 60px)', height: 'clamp(50px, 10vw, 60px)', borderRadius: 'var(--radius-md)', background: `${cs.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)' }}>{cs.logo}</div>
                                <div>
                                    <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: '4px', lineHeight: 1.3 }}>{cs.company}</h2>
                                    <span className="badge badge-primary">{cs.industry}</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="scaleUp" delay={0.1}>
                            <div className="case-study-image" style={{
                                width: '100%',
                                height: '400px',
                                borderRadius: 'var(--radius-xl)',
                                overflow: 'hidden',
                                marginBottom: '48px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                position: 'relative',
                            }}>
                                <img src={cs.image} alt={cs.company} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                }} onMouseEnter={e => {
                                    e.target.style.transform = 'scale(1.05)'
                                    e.target.style.filter = 'brightness(1.1)'
                                }}
                                    onMouseLeave={e => {
                                        e.target.style.transform = 'scale(1)'
                                        e.target.style.filter = 'brightness(1)'
                                    }} />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `linear-gradient(135deg, ${cs.color}40, ${cs.color}20)`,
                                }} />
                            </div>
                        </AnimatedSection>

                        <div className="grid-2" style={{ marginBottom: '48px', gap: '24px' }}>
                            <AnimatedSection variant="fadeLeft">
                                <div className="card" style={{ height: '100%', borderLeft: '4px solid var(--gray-300)', padding: 'clamp(20px, 4vw, 32px)' }}>
                                    <h3 style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>The Problem</h3>
                                    <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{cs.problem}</p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection variant="fadeRight">
                                <div className="card" style={{ height: '100%', borderLeft: `4px solid ${cs.color}`, padding: 'clamp(20px, 4vw, 32px)' }}>
                                    <h3 style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: cs.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>The Solution</h3>
                                    <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{cs.solution}</p>
                                </div>
                            </AnimatedSection>
                        </div>

                        <StaggerContainer className="grid-4 stats-grid" staggerDelay={0.12} style={{ gap: '20px' }}>
                            {cs.results.map((r, j) => (
                                <StaggerItem key={j}>
                                    <div className="card" style={{ textAlign: 'center', borderTop: `3px solid ${cs.color}`, padding: 'clamp(20px, 4vw, 32px)' }}>
                                        <div style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: cs.color, fontFamily: 'Poppins', marginBottom: '8px' }}>{r.value}</div>
                                        <div style={{ color: 'var(--gray-500)', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)' }}>{r.label}</div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <AnimatedSection delay={0.2}>
                            <div className="testimonial-quote" style={{ background: `${cs.color}08`, border: `1px solid ${cs.color}15`, borderRadius: 'var(--radius-xl)', padding: 'clamp(24px, 5vw, 40px)', marginTop: '48px', position: 'relative' }}>
                                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: cs.color, opacity: 0.3, position: 'absolute', top: 16, left: 24 }}>"</div>
                                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: 'var(--gray-700)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '20px', paddingLeft: 16 }}>{cs.quote}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 16, flexWrap: 'wrap' }}>
                                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${cs.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cs.color, fontWeight: 700 }}>{cs.author[0]}</div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{cs.author}</div>
                                        <div style={{ color: 'var(--gray-500)', fontSize: 'clamp(0.8rem, 1.8vw, 0.85rem)' }}>{cs.role}</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            ))}

            <section style={{ background: 'var(--gray-900)', padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <AnimatedSection>
                        <h2 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '16px' }}>Ready to Be Our Next Success Story?</h2>
                        <p style={{ color: 'var(--gray-400)', maxWidth: 480, margin: '0 auto 32px' }}>Let's discuss how Arcanext can deliver similar results for your business.</p>
                        <Link to="/pricing" className="btn btn-primary btn-lg">Book a Strategy Call</Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}

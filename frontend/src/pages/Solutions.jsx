import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const solutions = [
    {
        id: 'marketing',
        icon: '📣',
        title: 'Marketing Agencies',
        desc: 'Scale client agency operations with intelligent automation',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
        features: [
            { icon: '🎯', title: 'Auto Lead Assignment', desc: 'Instantly route leads to the right team member based on custom rules' },
            { icon: '⚡', title: 'Instant Follow-Ups', desc: 'Automated multi-channel responses within seconds of lead capture' },
            { icon: '📊', title: 'Campaign Dashboards', desc: 'Real-time visibility into campaign performance and ROI metrics' },
        ],
        workflow: [
            { step: 1, title: 'Lead Captured', desc: 'From any source' },
            { step: 2, title: 'Auto-Assigned', desc: 'To right team member' },
            { step: 3, title: 'Instant Follow-up', desc: 'Within seconds' },
            { step: 4, title: 'Campaign Tracked', desc: 'Real-time analytics' },
        ],
        stats: [
            { value: '80%', label: 'Faster Setup' },
            { value: '3x', label: 'Higher ROI' },
            { value: '100%', label: 'Custom Workflows' },
            { value: '24/7', label: 'Expert Support' },
        ],
    },
    {
        id: 'realestate',
        icon: '🏠',
        title: 'Real Estate',
        desc: 'Automate property inquiries, lead scoring, and scheduling for faster deals',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
        features: [
            { icon: '🏘️', title: 'Property Inquiry Automation', desc: 'Instant responses with relevant listing details and scheduling' },
            { icon: '⭐', title: 'Lead Scoring', desc: 'AI-powered scoring identifies your hottest prospects automatically' },
            { icon: '📅', title: 'Scheduling Automation', desc: 'Automated showing bookings with calendar sync and reminders' },
        ],
        workflow: [
            { step: 1, title: 'Inquiry Received', desc: 'Property interest' },
            { step: 2, title: 'Lead Scored', desc: 'AI qualification' },
            { step: 3, title: 'Showing Booked', desc: 'Auto-scheduled' },
            { step: 4, title: 'Offer Made', desc: 'Deal closed' },
        ],
        stats: [
            { value: '80%', label: 'Faster Setup' },
            { value: '3x', label: 'Higher ROI' },
            { value: '100%', label: 'Custom Workflows' },
            { value: '24/7', label: 'Expert Support' },
        ],
    },
    {
        id: 'saas',
        icon: '💻',
        title: 'SaaS Companies',
        desc: 'Build product-led growth funnels that convert trials into paying customers',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        features: [
            { icon: '🚀', title: 'Trial Conversion Funnels', desc: 'Automated onboarding sequences that guide users to value' },
            { icon: '📈', title: 'Usage-Based Triggers', desc: 'Engagement tracking triggers the right message at the right time' },
            { icon: '🔄', title: 'Churn Prevention', desc: 'Automated retention campaigns based on usage patterns' },
        ],
        workflow: [
            { step: 1, title: 'Sign Up', desc: 'User registers' },
            { step: 2, title: 'Onboarding', desc: 'Guided setup' },
            { step: 3, title: 'Activation', desc: 'First value' },
            { step: 4, title: 'Conversion', desc: 'Paid customer' },
        ],
        stats: [
            { value: '80%', label: 'Faster Setup' },
            { value: '3x', label: 'Higher ROI' },
            { value: '100%', label: 'Custom Workflows' },
            { value: '24/7', label: 'Expert Support' },
        ],
    },
    {
        id: 'service',
        icon: '🛠️',
        title: 'Service Businesses',
        desc: 'Streamline quotes, bookings, and customer lifecycle management',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
        features: [
            { icon: '💰', title: 'Quote Automation', desc: 'Automated quote generation and follow-up sequences' },
            { icon: '📅', title: 'Booking Systems', desc: 'Self-service scheduling with automated confirmations' },
            { icon: '🔄', title: 'Customer Lifecycle', desc: 'Automated review requests and referral campaigns' },
        ],
        workflow: [
            { step: 1, title: 'Quote Sent', desc: 'Instant pricing' },
            { step: 2, title: 'Follow-Up', desc: 'Auto reminders' },
            { step: 3, title: 'Booked', desc: 'Service scheduled' },
            { step: 4, title: 'Review', desc: 'Feedback collected' },
        ],
        stats: [
            { value: '80%', label: 'Faster Setup' },
            { value: '3x', label: 'Higher ROI' },
            { value: '100%', label: 'Custom Workflows' },
            { value: '24/7', label: 'Expert Support' },
        ],
    },
]

export default function Solutions() {
    return (
        <>
            {/* Hero */}
            <section style={{
                background: 'var(--gradient-hero)', paddingTop: '160px', paddingBottom: '100px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', bottom: '10%', left: '10%', width: 350, height: 350, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ marginBottom: '16px' }}>Solutions</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px' }}>
                            Industry-Specific <span style={{ background: 'linear-gradient(135deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span>
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                            Tailored automation strategies designed for the unique challenges of your industry
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Solutions - One by One */}
            {solutions.map((solution, index) => (
                <section key={solution.id} className="section" style={{ background: index % 2 === 0 ? 'var(--white)' : 'var(--gray-50)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="grid-2">
                            {/* Image */}
                            <AnimatedSection variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'} style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <div style={{
                                    borderRadius: 'var(--radius-xl)',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    position: 'relative',
                                }}>
                                    <img src={solution.image} alt={solution.title} style={{
                                        width: '100%',
                                        height: '400px',
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
                                        background: 'linear-gradient(135deg, rgba(30,58,138,0.6), rgba(37,99,235,0.3))',
                                    }} />
                                    {/* Featured Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 20,
                                        background: 'white',
                                        padding: '8px 16px',
                                        borderRadius: 'var(--radius-full)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontWeight: 600,
                                        fontSize: '0.85rem',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    }}>
                                        <span style={{ fontSize: '1.2rem' }}>{solution.icon}</span>
                                        Featured Service
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Content */}
                            <AnimatedSection variant={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'} style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                <div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>{solution.title}</h2>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                                        {solution.desc}
                                    </p>

                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: 600 }}>Key Features:</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                                        {solution.features.map((f, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                padding: '16px',
                                                background: index % 2 === 0 ? 'var(--gray-50)' : 'white',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid var(--gray-200)',
                                            }}>
                                                <div style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 'var(--radius-sm)',
                                                    background: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.2rem',
                                                    flexShrink: 0,
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                                }}>
                                                    {f.icon}
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 600, marginBottom: '4px', fontSize: '0.95rem' }}>{f.title}</div>
                                                    <div style={{ color: 'var(--gray-500)', fontSize: '0.85rem', lineHeight: 1.5 }}>{f.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Automated Workflow */}
                        <AnimatedSection delay={0.2}>
                            <div style={{
                                background: index % 2 === 0 ? 'var(--gray-50)' : 'white',
                                borderRadius: 'var(--radius-xl)',
                                padding: '48px',
                                marginTop: '48px',
                                border: '1px solid var(--gray-200)',
                            }}>
                                <h3 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '40px' }}>Automated Workflow</h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '24px',
                                }} className="grid-4">
                                    {solution.workflow.map((w, i) => (
                                        <div key={i} style={{ textAlign: 'center' }}>
                                            <div style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                background: 'var(--gradient-card)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.5rem',
                                                fontWeight: 800,
                                                fontFamily: 'Poppins',
                                                margin: '0 auto 16px',
                                                boxShadow: '0 4px 12px rgba(30,58,138,0.3)',
                                            }}>
                                                {w.step}
                                            </div>
                                            <div style={{ fontWeight: 600, marginBottom: '4px', fontSize: '0.95rem' }}>{w.title}</div>
                                            <div style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>{w.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Stats */}
                        <AnimatedSection delay={0.3}>
                            <div style={{ marginTop: '48px' }}>
                                <h3 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '32px' }}>Why Choose This Solution?</h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '20px',
                                }} className="grid-4">
                                    {solution.stats.map((stat, i) => (
                                        <div key={i} style={{
                                            background: 'white',
                                            padding: '28px 20px',
                                            borderRadius: 'var(--radius-lg)',
                                            textAlign: 'center',
                                            border: '1px solid var(--gray-200)',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                        }}>
                                            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Poppins', marginBottom: '8px' }}>{stat.value}</div>
                                            <div style={{ color: 'var(--gray-600)', fontSize: '0.85rem' }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section style={{ background: 'var(--gray-900)', padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <AnimatedSection>
                        <h2 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '16px' }}>Get a Custom Solution for Your Business</h2>
                        <p style={{ color: 'var(--gray-400)', maxWidth: 520, margin: '0 auto 32px' }}>
                            Let's create a tailored automation strategy that fits your industry needs
                        </p>
                        <Link to="/pricing" className="btn btn-primary btn-lg">Request a Demo →</Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}

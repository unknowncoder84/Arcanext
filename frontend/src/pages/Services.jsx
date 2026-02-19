import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const services = [
    {
        id: 'lead-capture',
        icon: '🎯',
        title: 'Lead Capture Automation',
        desc: 'Automatically capture leads from website forms, lead ads, landing pages, and chatbots.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        features: [
            { icon: '📝', title: 'Website forms integration', desc: 'Seamlessly integrate with your existing forms' },
            { icon: '📱', title: 'Lead ad automation', desc: 'Auto-sync leads from Facebook and Google ads' },
            { icon: '🤖', title: 'Smart lead routing', desc: 'Intelligent assignment based on custom rules' },
            { icon: '📊', title: 'Real-time tracking', desc: 'Monitor lead capture performance live' },
        ],
        stats: [
            { value: '98%', label: 'Capture Rate' },
            { value: '24/7', label: 'Active Monitoring' },
        ],
    },
    {
        id: 'ai-followup',
        icon: '🤖',
        title: 'AI Follow-Up Systems',
        desc: 'Intelligent email, SMS, and WhatsApp automation that nurtures leads without manual effort.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop',
        features: [
            { icon: '✉️', title: 'Multi-channel messaging', desc: 'Email, SMS, and WhatsApp in one platform' },
            { icon: '🎯', title: 'AI-powered responses', desc: 'Smart replies based on lead behavior' },
            { icon: '⏰', title: 'Smart sequencing', desc: 'Perfectly timed follow-up campaigns' },
            { icon: '📈', title: 'Personalized content', desc: 'Dynamic messaging for each lead' },
        ],
        stats: [
            { value: '98%', label: 'Delivery Rate' },
            { value: '24/7', label: 'Active Monitoring' },
        ],
    },
    {
        id: 'crm',
        icon: '⚙️',
        title: 'CRM Automation',
        desc: 'Seamless integration with HubSpot, Salesforce, GoHighLevel, and Pipedrive for automated workflows.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        features: [
            { icon: '🔄', title: 'Auto data sync', desc: 'Real-time synchronization across platforms' },
            { icon: '📋', title: 'Pipeline automation', desc: 'Automated deal stage progression' },
            { icon: '👥', title: 'Task assignment', desc: 'Smart task distribution to team members' },
            { icon: '📊', title: 'Contact management', desc: 'Enriched contact profiles automatically' },
        ],
        stats: [
            { value: '99%', label: 'Sync Accuracy' },
            { value: '24/7', label: 'Active Monitoring' },
        ],
    },
    {
        id: 'dashboards',
        icon: '📊',
        title: 'Reporting Dashboards',
        desc: 'Real-time KPI tracking and ROI analytics to monitor performance and growth metrics.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        features: [
            { icon: '📈', title: 'Custom dashboards', desc: 'Build dashboards tailored to your KPIs' },
            { icon: '⏱️', title: 'Real-time analytics', desc: 'Live data updates every second' },
            { icon: '👥', title: 'Performance metrics', desc: 'Track team and campaign performance' },
            { icon: '💰', title: 'ROI tracking', desc: 'Measure return on every automation' },
        ],
        stats: [
            { value: '98%', label: 'Data Accuracy' },
            { value: '24/7', label: 'Active Monitoring' },
        ],
    },
    {
        id: 'integrations',
        icon: '🔗',
        title: 'Custom Integrations',
        desc: 'Connect Stripe, Zapier, Calendly, webhooks and any API to create seamless workflows.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
        features: [
            { icon: '🔌', title: 'API integration', desc: 'Connect any third-party service via API' },
            { icon: '💳', title: 'Webhook setup', desc: 'Real-time event triggers and actions' },
            { icon: '🔄', title: 'Third-party tools', desc: 'Zapier, Calendly, Stripe and more' },
            { icon: '⚙️', title: 'Custom development', desc: 'Bespoke integrations for unique needs' },
        ],
        stats: [
            { value: '98%', label: 'Uptime' },
            { value: '24/7', label: 'Active Monitoring' },
        ],
    },
]

export default function Services() {
    return (
        <>
            {/* Hero */}
            <section style={{
                background: 'var(--gradient-hero)', paddingTop: '160px', paddingBottom: '100px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '20%', right: '5%', width: 300, height: 300, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ marginBottom: '16px' }}>Our Services</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px', maxWidth: 600 }}>
                            Automation Solutions That <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Drive Results</span>
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 520, lineHeight: 1.7 }}>
                            End-to-end AI automation services designed to capture more leads, close more deals, and grow your business.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services - One by One */}
            {services.map((service, index) => (
                <section key={service.id} className="section" style={{ background: index % 2 === 0 ? 'var(--white)' : 'var(--gray-50)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="grid-2">
                            {/* Image - Alternating sides */}
                            <AnimatedSection variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'} style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        borderRadius: 'var(--radius-xl)',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        position: 'relative',
                                    }}>
                                        <img src={service.image} alt={service.title} style={{
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
                                        {/* Featured Service Badge */}
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
                                            <span style={{ fontSize: '1.2rem' }}>{service.icon}</span>
                                            Featured Service
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '16px',
                                        marginTop: '24px',
                                    }}>
                                        {service.stats.map((stat, i) => (
                                            <div key={i} style={{
                                                background: 'var(--primary-50)',
                                                padding: '20px',
                                                borderRadius: 'var(--radius-md)',
                                                textAlign: 'center',
                                            }}>
                                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Poppins' }}>{stat.value}</div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Content */}
                            <AnimatedSection variant={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'} style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                <div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>{service.title}</h2>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                                        {service.desc}
                                    </p>

                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: 600 }}>Key Features:</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                                        {service.features.map((f, i) => (
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

                                    <Link to="/pricing" className="btn btn-primary btn-lg">Learn More →</Link>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section style={{ background: 'var(--gray-900)', padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <AnimatedSection>
                        <h2 style={{ fontSize: '2.2rem', color: 'white', marginBottom: '16px' }}>Need a Custom Solution?</h2>
                        <p style={{ color: 'var(--gray-400)', marginBottom: '32px', maxWidth: 480, margin: '0 auto 32px' }}>
                            Every business is different. Let's build an automation system tailored to your needs.
                        </p>
                        <Link to="/pricing" className="btn btn-primary btn-lg">Book a Strategy Call</Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}

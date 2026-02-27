import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

/* ===== DATA ===== */
const services = [
    { icon: '🎯', title: 'Lead Capture Automation', desc: 'Automatically capture leads from every channel — websites, ads, social, and more.' },
    { icon: '🤖', title: 'AI Follow-Up Systems', desc: 'Intelligent follow-ups via email, SMS, and WhatsApp that convert faster.' },
    { icon: '⚙️', title: 'CRM Automation', desc: 'Seamless CRM workflows that keep your pipeline organized and moving.' },
    { icon: '📊', title: 'Reporting Dashboards', desc: 'Real-time dashboards that track KPIs, ROI, and team performance.' },
    { icon: '🔗', title: 'Custom Integrations', desc: 'Connect your entire tech stack — Stripe, Zapier, Calendly, and more.' },
]

const steps = [
    { num: '01', title: 'Capture Leads', desc: 'We build automated systems that capture leads from all your channels 24/7.' },
    { num: '02', title: 'Automate Follow-Up', desc: 'AI-powered sequences nurture every lead with personalized communication.' },
    { num: '03', title: 'Scale Revenue', desc: 'Watch your pipeline grow as automation handles the heavy lifting.' },
]

const industries = [
    { icon: '📣', title: 'Marketing Agencies', desc: 'Auto lead routing, campaign dashboards, and client reporting automation.' },
    { icon: '🏠', title: 'Real Estate', desc: 'Property inquiry automation, lead scoring, and scheduling workflows.' },
    { icon: '💻', title: 'SaaS Companies', desc: 'Trial-to-paid conversion funnels and product-led growth automation.' },
    { icon: '🛠️', title: 'Service Businesses', desc: 'Quote automation, booking systems, and customer lifecycle management.' },
]

const metrics = [
    { value: '42%', label: 'More Booked Calls' },
    { value: '35%', label: 'Faster Response' },
    { value: '28%', label: 'Revenue Growth' },
    { value: '60%', label: 'Pipeline Visibility' },
]

const pricingPlans = [
    { name: 'Starter', setup: '$1,000', monthly: '$500', features: ['Lead Capture Setup', 'Email Automation', 'Basic Reporting', 'CRM Integration', 'Email Support'] },
    { name: 'Growth', setup: '$2,500', monthly: '$1,200', popular: true, features: ['Everything in Starter', 'AI Follow-Up Systems', 'Advanced Dashboards', 'Multi-Channel Automation', 'Priority Support', 'Custom Workflows'] },
    { name: 'Scale', setup: 'Custom', monthly: 'Custom', features: ['Everything in Growth', 'Dedicated AI Specialist', 'Enterprise Integrations', 'SLA Guarantee', 'White-Glove Onboarding', 'Custom Development'] },
]

/* ===== HERO ===== */
function Hero() {
    return (
        <section style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.93) 100%), url("https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop&q=80") center/cover fixed',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Animated Neural Network Pattern */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
                <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: '10%', right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent 70%)', filter: 'blur(80px)' }} />
                <motion.div animate={{ x: [0, -20, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', bottom: '10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), transparent 70%)', filter: 'blur(80px)' }} />
                <motion.div animate={{ x: [0, 15, 0], y: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: '40%', left: '30%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent 70%)', filter: 'blur(80px)' }} />
            </div>

            {/* Grid Pattern Overlay */}
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                opacity: 0.3
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
                <div style={{ maxWidth: '800px' }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ 
                            marginBottom: '24px',
                            background: 'rgba(59,130,246,0.15)',
                            border: '1px solid rgba(59,130,246,0.3)',
                            backdropFilter: 'blur(10px)',
                            padding: '8px 20px',
                            fontSize: '0.9rem',
                            fontWeight: 600
                        }}>
                            AI-Powered Business Automation
                        </span>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--white)', marginBottom: '28px', lineHeight: 1.1, fontWeight: 800 }}>
                            Transform Leads Into{' '}
                            <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Revenue
                            </span>
                            {' '}With AI
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '48px', maxWidth: '640px' }}>
                            Arcanext builds intelligent automation systems powered by AI voice technology and automated workflows that capture, nurture, and convert leads 24/7 — while you focus on scaling your business.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <Link 
                                to="/contact"
                                className="btn btn-primary btn-lg"
                                style={{ 
                                    padding: '18px 40px',
                                    fontSize: '1.1rem',
                                    boxShadow: '0 10px 40px rgba(59,130,246,0.4)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={e => {
                                    e.target.style.transform = 'translateY(-3px)'
                                    e.target.style.boxShadow = '0 15px 50px rgba(59,130,246,0.5)'
                                }}
                                onMouseLeave={e => {
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = '0 10px 40px rgba(59,130,246,0.4)'
                                }}
                            >
                                Book a Strategy Call →
                            </Link>
                            <Link to="/case-studies" className="btn btn-outline btn-lg" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
                                View Case Studies
                            </Link>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.5}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginTop: '56px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ 
                                    width: 48, 
                                    height: 48, 
                                    borderRadius: '50%', 
                                    background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    boxShadow: '0 8px 20px rgba(245,158,11,0.3)'
                                }}>⭐</div>
                                <div>
                                    <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>50+ Businesses Trust Us</div>
                                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>4.9/5 average rating</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ 
                                    width: 48, 
                                    height: 48, 
                                    borderRadius: '50%', 
                                    background: 'linear-gradient(135deg, #10B981, #059669)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    boxShadow: '0 8px 20px rgba(16,185,129,0.3)'
                                }}>🚀</div>
                                <div>
                                    <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>2-Week Setup</div>
                                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Go live fast</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}

/* ===== SERVICES OVERVIEW ===== */
function ServicesOverview() {
    const serviceImages = [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', // Analytics dashboard
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', // Charts/data
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop', // Team collaboration
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop', // Office workspace
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop', // Technology
    ]

    return (
        <section className="section" style={{ background: 'var(--gray-50)' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="badge badge-primary">Our Services</span>
                        <h2>Everything You Need to Automate Growth</h2>
                        <p>From lead capture to revenue tracking, we build the systems that power your business.</p>
                    </div>
                </AnimatedSection>
                <StaggerContainer className="grid-3" staggerDelay={0.12}>
                    {services.map((s, i) => (
                        <StaggerItem key={i}>
                            <div className="card" style={{ height: '100%', overflow: 'hidden', padding: 0 }}>
                                <div style={{
                                    width: '100%',
                                    height: '240px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <img src={serviceImages[i]} alt={s.title} style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }} onMouseEnter={e => {
                                        e.target.style.transform = 'scale(1.15)'
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
                                        background: 'linear-gradient(135deg, rgba(30,58,138,0.5), rgba(37,99,235,0.3))',
                                    }} />
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--gray-900)' }}>{s.title}</h3>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.6 }}>{s.desc}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

/* ===== HOW IT WORKS ===== */
function HowItWorks() {
    return (
        <section className="section">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="badge badge-primary">How It Works</span>
                        <h2>Three Steps to Automated Growth</h2>
                        <p>Our proven process delivers results in weeks, not months.</p>
                    </div>
                </AnimatedSection>
                <div className="grid-3">
                    {steps.map((s, i) => (
                        <AnimatedSection key={i} delay={i * 0.15}>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px',
                                    background: 'var(--gradient-card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif',
                                }}>{s.num}</div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{s.title}</h3>
                                <p style={{ color: 'var(--gray-500)', lineHeight: 1.6 }}>{s.desc}</p>
                                {i < 2 && <div style={{ display: 'none' }} className="step-arrow">→</div>}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== INDUSTRIES ===== */
function Industries() {
    const industryImages = [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop', // Marketing team
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop', // Real estate
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop', // SaaS/tech
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop', // Service business
    ]

    return (
        <section className="section" style={{ background: 'var(--gray-50)' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="badge badge-primary">Industries</span>
                        <h2>Built for Your Industry</h2>
                        <p>Tailored automation solutions for the industries that need them most.</p>
                    </div>
                </AnimatedSection>
                <StaggerContainer className="grid-4" staggerDelay={0.12}>
                    {industries.map((ind, i) => (
                        <StaggerItem key={i}>
                            <div className="card" style={{ textAlign: 'center', height: '100%', overflow: 'hidden', padding: 0 }}>
                                <div style={{
                                    width: '100%',
                                    height: '200px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <img src={industryImages[i]} alt={ind.title} style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }} onMouseEnter={e => {
                                        e.target.style.transform = 'scale(1.15)'
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
                                        background: 'linear-gradient(135deg, rgba(30,58,138,0.6), rgba(37,99,235,0.4))',
                                    }} />
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{ind.title}</h3>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>{ind.desc}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

/* ===== CASE STUDY PREVIEW ===== */
function CaseStudyPreview() {
    return (
        <section className="section" style={{ background: 'var(--gradient-hero)', color: 'white' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-header" style={{ marginBottom: '48px' }}>
                        <span className="badge badge-light">Proven Results</span>
                        <h2 style={{ color: 'white' }}>Real Impact. Real Numbers.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)' }}>See the measurable results our automation systems deliver for businesses like yours.</p>
                    </div>
                </AnimatedSection>
                <StaggerContainer className="grid-4" staggerDelay={0.12}>
                    {metrics.map((m, i) => (
                        <StaggerItem key={i}>
                            <div className="card-glass" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>{m.value}</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{m.label}</div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
                <AnimatedSection delay={0.3}>
                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/case-studies" className="btn btn-outline btn-lg">View All Case Studies →</Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

/* ===== PRICING PREVIEW ===== */
function PricingPreview() {
    return (
        <section className="section">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="badge badge-primary">Pricing</span>
                        <h2>Simple, Transparent Pricing</h2>
                        <p>Choose the plan that fits your business. No hidden fees. Cancel anytime.</p>
                    </div>
                </AnimatedSection>
                <StaggerContainer className="grid-3" staggerDelay={0.12}>
                    {pricingPlans.map((plan, i) => (
                        <StaggerItem key={i}>
                            <div className="card" style={{
                                position: 'relative', textAlign: 'center', height: '100%',
                                border: plan.popular ? '2px solid var(--primary)' : undefined,
                                boxShadow: plan.popular ? 'var(--shadow-glow)' : undefined,
                            }}>
                                {plan.popular && (
                                    <div style={{
                                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                                        background: 'var(--gradient-card)', color: 'white', padding: '4px 20px',
                                        borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600,
                                    }}>Most Popular</div>
                                )}
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', marginTop: plan.popular ? '8px' : 0 }}>{plan.name}</h3>
                                <div style={{ marginBottom: '8px' }}>
                                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{plan.monthly}</span>
                                    {plan.monthly !== 'Custom' && <span style={{ color: 'var(--gray-500)' }}>/mo</span>}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--gray-400)', marginBottom: '24px' }}>
                                    {plan.setup !== 'Custom' ? `${plan.setup} setup fee` : 'Custom setup'}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
                                    {plan.features.map((f, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                                            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> {f}
                                        </div>
                                    ))}
                                </div>
                                <Link to="/pricing" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                                    {plan.name === 'Scale' ? 'Contact Us' : 'Get Started'}
                                </Link>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

/* ===== FINAL CTA ===== */
function FinalCTA() {
    return (
        <section style={{ background: 'var(--gray-900)', padding: '100px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <AnimatedSection>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '20px' }}>
                        Ready to Automate Your Growth?
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--gray-400)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
                        Join 50+ businesses already using Arcanext to capture more leads and close more deals.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-lg">Book a Strategy Call</Link>
                        <Link to="/services" className="btn btn-outline btn-lg">Explore Services →</Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

/* ===== HOME PAGE ===== */
export default function Home() {
    return (
        <>
            <Hero />
            <ServicesOverview />
            <HowItWorks />
            <Industries />
            <CaseStudyPreview />
            <PricingPreview />
            <FinalCTA />
        </>
    )
}

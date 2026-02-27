import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const plans = [
    {
        name: 'Starter Pack', 
        price: '$1,599', 
        priceLabel: 'One-Time Setup',
        description: 'Foundational AI integration for your business',
        features: [
            'Complete AI System Setup',
            'AI Voice Technology Integration',
            'Lead Capture Automation', 
            'Email & SMS Automation', 
            'Basic CRM Integration', 
            'Automated Workflows',
            'Training & Documentation',
            '30 Days Email Support'
        ],
    },
    {
        name: 'Performance Tier', 
        setup: '$699', 
        commission: '$99',
        priceLabel: 'Setup + Success-Based Commission',
        description: 'Pay for results - only when appointments are booked',
        popular: true,
        features: [
            'Everything in Starter Pack',
            'Advanced AI Follow-Up Systems', 
            'Real-Time Analytics Dashboards', 
            'Multi-Channel Automation', 
            'Custom Workflow Builder',
            'Priority Support & Training',
            'Dedicated Account Manager',
            'Only $99 per booked appointment'
        ],
        highlight: 'Success-Based Pricing'
    },
]

const faqs = [
    { q: 'How long does setup take?', a: 'Most Starter plans are live within 2 weeks. Growth and Scale plans typically take 3-6 weeks depending on complexity.' },
    { q: 'Can I upgrade later?', a: 'Absolutely. You can upgrade your plan at any time. We\'ll migrate your existing automations seamlessly.' },
    { q: 'What CRMs do you support?', a: 'We integrate with HubSpot, Salesforce, GoHighLevel, Pipedrive, and most major CRMs via direct integration or Zapier.' },
    { q: 'Is there a contract?', a: 'No long-term contracts. All plans are month-to-month after the initial setup. Cancel anytime with 30 days notice.' },
]

export default function Pricing() {
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <>
            <section style={{ 
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%), url("https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop&q=80") center/cover',
                paddingTop: '160px', 
                paddingBottom: '100px', 
                position: 'relative', 
                overflow: 'hidden' 
            }}>
                {/* Animated Background Elements */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
                    <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.6), transparent 70%)', filter: 'blur(80px)', animation: 'float 8s ease-in-out infinite' }} />
                    <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)', filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite reverse' }} />
                </div>
                
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ marginBottom: '16px', background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)' }}>Transparent Pricing</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', color: 'white', marginBottom: '20px', fontWeight: 800 }}>
                            Invest in <span style={{ background: 'linear-gradient(135deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered</span> Growth
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
                            Choose the plan that scales with your success. No hidden fees, no long-term contracts.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '80px' }}>
                <div className="container">
                    {/* Plans */}
                    <StaggerContainer className="grid-2" staggerDelay={0.15} style={{ maxWidth: 1000, margin: '0 auto' }}>
                        {plans.map((plan, i) => (
                            <StaggerItem key={i}>
                                <div className="card" style={{
                                    position: 'relative', 
                                    textAlign: 'center', 
                                    height: '100%',
                                    padding: '48px 40px',
                                    border: plan.popular ? '2px solid var(--primary)' : '2px solid var(--gray-200)',
                                    boxShadow: plan.popular ? '0 20px 60px rgba(59,130,246,0.25)' : '0 10px 30px rgba(0,0,0,0.08)',
                                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    background: plan.popular ? 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)' : 'white',
                                }}>
                                    {plan.popular && (
                                        <div style={{
                                            position: 'absolute', 
                                            top: -16, 
                                            left: '50%', 
                                            transform: 'translateX(-50%)',
                                            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', 
                                            color: 'white', 
                                            padding: '6px 24px',
                                            borderRadius: 'var(--radius-full)', 
                                            fontSize: '0.85rem', 
                                            fontWeight: 700,
                                            letterSpacing: '0.05em',
                                            boxShadow: '0 4px 12px rgba(59,130,246,0.4)',
                                        }}>MOST POPULAR</div>
                                    )}
                                    
                                    <h3 style={{ 
                                        fontSize: '1.8rem', 
                                        marginBottom: 12, 
                                        marginTop: plan.popular ? 12 : 0,
                                        fontWeight: 800,
                                        fontFamily: 'Poppins'
                                    }}>{plan.name}</h3>
                                    
                                    <p style={{ 
                                        color: 'var(--gray-600)', 
                                        fontSize: '0.95rem', 
                                        marginBottom: 28,
                                        lineHeight: 1.6
                                    }}>{plan.description}</p>
                                    
                                    {/* Pricing Display */}
                                    <div style={{ marginBottom: 32, padding: '24px', background: plan.popular ? 'rgba(59,130,246,0.05)' : 'var(--gray-50)', borderRadius: 'var(--radius-lg)' }}>
                                        {plan.setup ? (
                                            <>
                                                <div style={{ marginBottom: 16 }}>
                                                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Setup Fee</div>
                                                    <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Poppins' }}>
                                                        {plan.setup}
                                                    </span>
                                                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginLeft: 8 }}>one-time</span>
                                                </div>
                                                <div style={{ 
                                                    padding: '16px', 
                                                    background: 'linear-gradient(135deg, #10B981, #059669)', 
                                                    borderRadius: 'var(--radius-md)',
                                                    color: 'white'
                                                }}>
                                                    <div style={{ fontSize: '0.85rem', marginBottom: 6, opacity: 0.9, fontWeight: 600 }}>Success-Based Commission</div>
                                                    <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Poppins' }}>
                                                        {plan.commission}
                                                    </div>
                                                    <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>per booked appointment</div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Poppins' }}>
                                                    {plan.price}
                                                </span>
                                                <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: 8 }}>
                                                    {plan.priceLabel}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    
                                    {/* Features */}
                                    <div style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap: 14, 
                                        marginBottom: 36, 
                                        textAlign: 'left' 
                                    }}>
                                        {plan.features.map((f, j) => (
                                            <div key={j} style={{ 
                                                display: 'flex', 
                                                alignItems: 'flex-start', 
                                                gap: 12, 
                                                fontSize: '0.95rem', 
                                                color: 'var(--gray-700)',
                                                lineHeight: 1.6
                                            }}>
                                                <div style={{ 
                                                    width: 20, 
                                                    height: 20, 
                                                    borderRadius: '50%', 
                                                    background: plan.popular ? 'linear-gradient(135deg, #3B82F6, #8B5CF6)' : 'var(--primary-100)', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    marginTop: 2
                                                }}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? 'white' : 'var(--primary)'} strokeWidth="3">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                                <span style={{ fontWeight: j === plan.features.length - 1 ? 700 : 500 }}>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* CTA Button - Redirect to Contact */}
                                    <Link 
                                        to="/contact"
                                        className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-lg`} 
                                        style={{ 
                                            width: '100%',
                                            padding: '18px',
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            transition: 'all 0.3s ease',
                                            boxShadow: plan.popular ? '0 10px 30px rgba(59,130,246,0.3)' : 'none',
                                            display: 'block',
                                            textAlign: 'center'
                                        }}
                                        onMouseEnter={e => {
                                            e.target.style.transform = 'translateY(-2px)'
                                            e.target.style.boxShadow = plan.popular ? '0 15px 40px rgba(59,130,246,0.4)' : '0 10px 30px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseLeave={e => {
                                            e.target.style.transform = 'translateY(0)'
                                            e.target.style.boxShadow = plan.popular ? '0 10px 30px rgba(59,130,246,0.3)' : 'none'
                                        }}
                                    >
                                        Book Now →
                                    </Link>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ background: 'var(--gray-50)' }}>
                <div className="container" style={{ maxWidth: 700 }}>
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </AnimatedSection>
                    {faqs.map((faq, i) => (
                        <AnimatedSection key={i} delay={i * 0.08}>
                            <div style={{
                                background: 'white', borderRadius: 'var(--radius-md)', marginBottom: 12,
                                border: '1px solid var(--gray-200)', overflow: 'hidden',
                            }}>
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                                    width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: '1rem', fontWeight: 600,
                                    color: 'var(--gray-900)', textAlign: 'left',
                                }}>
                                    {faq.q}
                                    <span style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'var(--transition)', fontSize: '0.8rem' }}>▼</span>
                                </button>
                                <div style={{
                                    maxHeight: openFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease',
                                }}>
                                    <p style={{ padding: '0 24px 20px', color: 'var(--gray-500)', lineHeight: 1.7 }}>{faq.a}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </>
    )
}

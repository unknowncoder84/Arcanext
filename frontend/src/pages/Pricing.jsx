import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const plans = [
    {
        name: 'Starter', setup: '$1,000', monthly: '$500', annual: '$400',
        features: ['Lead Capture Setup', 'Email Automation', 'Basic Reporting', 'CRM Integration', 'Email Support'],
    },
    {
        name: 'Growth', setup: '$2,500', monthly: '$1,200', annual: '$960', popular: true,
        features: ['Everything in Starter', 'AI Follow-Up Systems', 'Advanced Dashboards', 'Multi-Channel Automation', 'Priority Support', 'Custom Workflows'],
    },
    {
        name: 'Scale', setup: 'Custom', monthly: 'Custom', annual: 'Custom',
        features: ['Everything in Growth', 'Dedicated AI Specialist', 'Enterprise Integrations', 'SLA Guarantee', 'White-Glove Onboarding', 'Custom Development'],
    },
]

const faqs = [
    { q: 'How long does setup take?', a: 'Most Starter plans are live within 2 weeks. Growth and Scale plans typically take 3-6 weeks depending on complexity.' },
    { q: 'Can I upgrade later?', a: 'Absolutely. You can upgrade your plan at any time. We\'ll migrate your existing automations seamlessly.' },
    { q: 'What CRMs do you support?', a: 'We integrate with HubSpot, Salesforce, GoHighLevel, Pipedrive, and most major CRMs via direct integration or Zapier.' },
    { q: 'Is there a contract?', a: 'No long-term contracts. All plans are month-to-month after the initial setup. Cancel anytime with 30 days notice.' },
]

export default function Pricing() {
    const [annual, setAnnual] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <>
            <section style={{ background: 'var(--gradient-hero)', paddingTop: '160px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <AnimatedSection>
                        <span className="badge badge-light" style={{ marginBottom: '16px' }}>Pricing</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px' }}>
                            Simple, <span style={{ background: 'linear-gradient(135deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transparent</span> Pricing
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
                            Choose the plan that fits your business. No hidden fees.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Toggle */}
                    <AnimatedSection>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
                            <span style={{ fontWeight: 600, color: !annual ? 'var(--primary)' : 'var(--gray-400)' }}>Monthly</span>
                            <button onClick={() => setAnnual(!annual)} style={{
                                width: 56, height: 30, borderRadius: 15, border: 'none', cursor: 'pointer', position: 'relative',
                                background: annual ? 'var(--primary)' : 'var(--gray-300)', transition: 'var(--transition)',
                            }}>
                                <div style={{
                                    width: 24, height: 24, borderRadius: '50%', background: 'white', position: 'absolute', top: 3,
                                    left: annual ? 29 : 3, transition: 'var(--transition)', boxShadow: 'var(--shadow-sm)',
                                }} />
                            </button>
                            <span style={{ fontWeight: 600, color: annual ? 'var(--primary)' : 'var(--gray-400)' }}>
                                Annual <span style={{ fontSize: '0.8rem', color: 'var(--primary)', background: 'var(--primary-100)', padding: '2px 8px', borderRadius: 'var(--radius-full)', marginLeft: 4 }}>Save 20%</span>
                            </span>
                        </div>
                    </AnimatedSection>

                    {/* Plans */}
                    <StaggerContainer className="grid-3" staggerDelay={0.1}>
                        {plans.map((plan, i) => (
                            <StaggerItem key={i}>
                                <div className="card" style={{
                                    position: 'relative', textAlign: 'center', height: '100%',
                                    border: plan.popular ? '2px solid var(--primary)' : undefined,
                                    boxShadow: plan.popular ? 'var(--shadow-glow)' : undefined,
                                    transform: plan.popular ? 'scale(1.03)' : undefined,
                                }}>
                                    {plan.popular && (
                                        <div style={{
                                            position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                                            background: 'var(--gradient-card)', color: 'white', padding: '4px 20px',
                                            borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600,
                                        }}>Most Popular</div>
                                    )}
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: 8, marginTop: plan.popular ? 8 : 0 }}>{plan.name}</h3>
                                    <div style={{ marginBottom: 8 }}>
                                        <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary)' }}>
                                            {annual ? plan.annual : plan.monthly}
                                        </span>
                                        {plan.monthly !== 'Custom' && <span style={{ color: 'var(--gray-500)' }}>/mo</span>}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-400)', marginBottom: 28 }}>
                                        {plan.setup !== 'Custom' ? `${plan.setup} one-time setup` : 'Custom setup & pricing'}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, textAlign: 'left' }}>
                                        {plan.features.map((f, j) => (
                                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                                                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> {f}
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/portal" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                                        {plan.name === 'Scale' ? 'Contact Us' : 'Get Started'}
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

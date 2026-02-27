import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { LiquidGlassCard, LiquidBlob, GlassSection } from '../components/LiquidGlass'

const plans = [
    {
        name: 'Agent Essential', 
        price: '$1,599', 
        priceLabel: 'One-Time Setup',
        description: 'Perfect for individual agents and small teams getting started with AI automation',
        features: [
            '24/7 AI Voice Agent Setup',
            'Lead Capture & Qualification',
            'Automated Follow-Up Sequences', 
            'Showing Scheduler Integration', 
            'Basic CRM Connection', 
            'Email & SMS Automation',
            'Training & Documentation',
            '30 Days Priority Support'
        ],
        badge: 'Best for Starters'
    },
    {
        name: 'Performance Scale', 
        setup: '$699', 
        commission: '$99',
        priceLabel: 'Setup + Pay Per Booked Appointment',
        description: 'Scale your real estate business with performance-based pricing - only pay when we deliver results',
        popular: true,
        features: [
            'Everything in Agent Essential',
            'Advanced AI Lead Nurturing', 
            'Real-Time Analytics Dashboard', 
            'Multi-Channel Automation (Voice, SMS, Email)', 
            'Custom Workflow Builder',
            'Priority Support & Training',
            'Dedicated Success Manager',
            'Only $99 per booked showing appointment'
        ],
        highlight: 'Performance-Based Pricing',
        badge: 'Most Popular'
    },
]

const faqs = [
    { q: 'How quickly can I get started?', a: 'Most Agent Essential setups are live within 5-7 business days. Performance Scale plans typically take 7-10 days depending on your CRM and workflow complexity.' },
    { q: 'What if I want to upgrade later?', a: 'You can upgrade from Agent Essential to Performance Scale at any time. We\'ll seamlessly migrate your existing automations and workflows.' },
    { q: 'Which CRMs do you integrate with?', a: 'We integrate with all major real estate CRMs including Follow Up Boss, LionDesk, kvCORE, BoomTown, and more. We also support custom integrations via API.' },
    { q: 'Is there a long-term contract?', a: 'No contracts required. Agent Essential is a one-time setup fee. Performance Scale is month-to-month after setup. Cancel anytime with 30 days notice.' },
    { q: 'How does the $99 per appointment work?', a: 'You only pay $99 when our AI system successfully books a qualified showing appointment. No bookings = no commission fees. It\'s that simple.' },
]

export default function Pricing() {
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <>
            {/* Hero Section with Liquid Glass */}
            <GlassSection style={{ 
                background: 'linear-gradient(135deg, #0A1628 0%, #1E293B 50%, #2D1B69 100%)',
                paddingTop: '160px', 
                paddingBottom: '100px',
            }}>
                {/* Animated Liquid Blobs */}
                <LiquidBlob color="blue" size={500} top="10%" left="5%" delay={0} />
                <LiquidBlob color="purple" size={400} bottom="15%" right="10%" delay={2} />
                <LiquidBlob color="gold" size={350} top="40%" right="30%" delay={4} />
                
                {/* Grid Pattern Overlay */}
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    opacity: 0.3,
                    pointerEvents: 'none'
                }} />
                
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <AnimatedSection>
                        <motion.span 
                            className="badge badge-light" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{ 
                                marginBottom: '16px', 
                                background: 'rgba(212, 175, 55, 0.15)', 
                                border: '1px solid rgba(212, 175, 55, 0.3)',
                                backdropFilter: 'blur(10px)',
                                color: '#F4E4B0'
                            }}
                        >
                            Real Estate AI Automation Pricing
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            style={{ 
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                                color: 'white', 
                                marginBottom: '20px', 
                                fontWeight: 800,
                                lineHeight: 1.1
                            }}
                        >
                            Invest in <span style={{ background: 'linear-gradient(135deg,#D4AF37,#F4E4B0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered</span> Lead Generation
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            style={{ 
                                fontSize: '1.2rem', 
                                color: 'rgba(255,255,255,0.8)', 
                                maxWidth: 700, 
                                margin: '0 auto', 
                                lineHeight: 1.8 
                            }}
                        >
                            Choose the plan that scales with your real estate business. No hidden fees, transparent pricing, performance-based options.
                        </motion.p>
                    </AnimatedSection>
                </div>
            </GlassSection>

            {/* Pricing Cards with Liquid Glass */}
            <section className="section" style={{ paddingTop: '80px', background: 'var(--slate-dark)' }}>
                <div className="container">
                    <div className="grid-2" style={{ maxWidth: 1100, margin: '0 auto', gap: '40px' }}>
                        {plans.map((plan, i) => (
                            <LiquidGlassCard 
                                key={i}
                                delay={i * 0.15}
                                style={{
                                    textAlign: 'center',
                                    padding: '48px 40px',
                                    border: plan.popular ? '2px solid rgba(212, 175, 55, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                                    background: plan.popular 
                                        ? 'rgba(212, 175, 55, 0.08)' 
                                        : 'rgba(255, 255, 255, 0.06)',
                                    position: 'relative',
                                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                                }}
                            >
                                {plan.popular && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        style={{
                                            position: 'absolute', 
                                            top: -16, 
                                            left: '50%', 
                                            transform: 'translateX(-50%)',
                                            background: 'linear-gradient(135deg, #D4AF37, #F4E4B0)', 
                                            color: '#0A1628', 
                                            padding: '6px 24px',
                                            borderRadius: '9999px', 
                                            fontSize: '0.85rem', 
                                            fontWeight: 700,
                                            letterSpacing: '0.05em',
                                            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
                                        }}
                                    >
                                        {plan.badge}
                                    </motion.div>
                                )}
                                
                                {!plan.popular && plan.badge && (
                                    <div style={{
                                        display: 'inline-block',
                                        background: 'rgba(59, 130, 246, 0.15)',
                                        color: '#60A5FA',
                                        padding: '4px 16px',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        marginBottom: '16px',
                                        border: '1px solid rgba(59, 130, 246, 0.3)'
                                    }}>
                                        {plan.badge}
                                    </div>
                                )}
                                
                                <h3 style={{ 
                                    fontSize: '1.9rem', 
                                    marginBottom: 12, 
                                    marginTop: plan.popular ? 12 : 0,
                                    fontWeight: 800,
                                    fontFamily: 'Poppins',
                                    color: 'white'
                                }}>{plan.name}</h3>
                                
                                <p style={{ 
                                    color: 'rgba(255,255,255,0.7)', 
                                    fontSize: '0.95rem', 
                                    marginBottom: 32,
                                    lineHeight: 1.6
                                }}>{plan.description}</p>
                                
                                {/* Pricing Display */}
                                <div style={{ 
                                    marginBottom: 36, 
                                    padding: '28px', 
                                    background: plan.popular 
                                        ? 'rgba(212, 175, 55, 0.1)' 
                                        : 'rgba(59, 130, 246, 0.08)', 
                                    borderRadius: '16px',
                                    border: '1px solid ' + (plan.popular ? 'rgba(212, 175, 55, 0.2)' : 'rgba(59, 130, 246, 0.2)')
                                }}>
                                    {plan.setup ? (
                                        <>
                                            <div style={{ marginBottom: 20 }}>
                                                <div style={{ 
                                                    fontSize: '0.85rem', 
                                                    color: 'rgba(255,255,255,0.6)', 
                                                    marginBottom: 8, 
                                                    fontWeight: 600, 
                                                    textTransform: 'uppercase', 
                                                    letterSpacing: '0.05em' 
                                                }}>Setup Fee</div>
                                                <span style={{ 
                                                    fontSize: '3.2rem', 
                                                    fontWeight: 800, 
                                                    color: '#F4E4B0', 
                                                    fontFamily: 'Poppins' 
                                                }}>
                                                    {plan.setup}
                                                </span>
                                                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginLeft: 8 }}>one-time</span>
                                            </div>
                                            <div style={{ 
                                                padding: '20px', 
                                                background: 'linear-gradient(135deg, #10B981, #059669)', 
                                                borderRadius: '12px',
                                                color: 'white',
                                                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
                                            }}>
                                                <div style={{ fontSize: '0.85rem', marginBottom: 8, opacity: 0.9, fontWeight: 600 }}>Performance Commission</div>
                                                <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Poppins' }}>
                                                    {plan.commission}
                                                </div>
                                                <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>per booked appointment</div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span style={{ 
                                                fontSize: '3.8rem', 
                                                fontWeight: 800, 
                                                color: '#60A5FA', 
                                                fontFamily: 'Poppins' 
                                            }}>
                                                {plan.price}
                                            </span>
                                            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
                                                {plan.priceLabel}
                                            </div>
                                        </>
                                    )}
                                </div>
                                
                                {/* Features */}
                                <div style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: 16, 
                                    marginBottom: 40, 
                                    textAlign: 'left' 
                                }}>
                                    {plan.features.map((f, j) => (
                                        <motion.div 
                                            key={j}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (j * 0.05), duration: 0.3 }}
                                            style={{ 
                                                display: 'flex', 
                                                alignItems: 'flex-start', 
                                                gap: 12, 
                                                fontSize: '0.95rem', 
                                                color: 'rgba(255,255,255,0.9)',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            <div style={{ 
                                                width: 22, 
                                                height: 22, 
                                                borderRadius: '50%', 
                                                background: plan.popular 
                                                    ? 'linear-gradient(135deg, #D4AF37, #F4E4B0)' 
                                                    : 'linear-gradient(135deg, #3B82F6, #60A5FA)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                marginTop: 2,
                                                boxShadow: plan.popular 
                                                    ? '0 2px 8px rgba(212, 175, 55, 0.3)'
                                                    : '0 2px 8px rgba(59, 130, 246, 0.3)'
                                            }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? '#0A1628' : 'white'} strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span style={{ fontWeight: j === plan.features.length - 1 ? 700 : 500 }}>{f}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                {/* CTA Button */}
                                <Link 
                                    to="/contact"
                                    className="hw-accelerate"
                                    style={{ 
                                        display: 'block',
                                        width: '100%',
                                        padding: '18px',
                                        fontSize: '1.05rem',
                                        fontWeight: 700,
                                        borderRadius: '9999px',
                                        background: plan.popular 
                                            ? 'linear-gradient(135deg, #D4AF37, #F4E4B0)'
                                            : 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                                        color: plan.popular ? '#0A1628' : 'white',
                                        textAlign: 'center',
                                        transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                                        boxShadow: plan.popular 
                                            ? '0 10px 30px rgba(212, 175, 55, 0.3)'
                                            : '0 10px 30px rgba(59, 130, 246, 0.3)',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={e => {
                                        e.target.style.transform = 'translateY(-3px)'
                                        e.target.style.boxShadow = plan.popular 
                                            ? '0 15px 40px rgba(212, 175, 55, 0.5)'
                                            : '0 15px 40px rgba(59, 130, 246, 0.4)'
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.transform = 'translateY(0)'
                                        e.target.style.boxShadow = plan.popular 
                                            ? '0 10px 30px rgba(212, 175, 55, 0.3)'
                                            : '0 10px 30px rgba(59, 130, 246, 0.3)'
                                    }}
                                >
                                    Get Started →
                                </Link>
                            </LiquidGlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" style={{ background: 'var(--slate-medium)', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <AnimatedSection>
                        <div className="section-header">
                            <span className="badge badge-light" style={{ 
                                background: 'rgba(59, 130, 246, 0.15)', 
                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                color: '#60A5FA'
                            }}>FAQ</span>
                            <h2 style={{ color: 'white' }}>Frequently Asked Questions</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Everything you need to know about our real estate AI automation pricing</p>
                        </div>
                    </AnimatedSection>
                    {faqs.map((faq, i) => (
                        <AnimatedSection key={i} delay={i * 0.08}>
                            <LiquidGlassCard
                                delay={i * 0.08}
                                style={{
                                    marginBottom: 16,
                                    padding: 0,
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div style={{
                                    padding: '24px 28px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <span style={{ 
                                        fontFamily: 'Poppins', 
                                        fontSize: '1.05rem', 
                                        fontWeight: 600,
                                        color: 'white'
                                    }}>{faq.q}</span>
                                    <motion.span 
                                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ 
                                            fontSize: '0.8rem', 
                                            color: 'rgba(255,255,255,0.6)',
                                            marginLeft: '16px'
                                        }}
                                    >▼</motion.span>
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{ 
                                        height: openFaq === i ? 'auto' : 0,
                                        opacity: openFaq === i ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p style={{ 
                                        padding: '0 28px 24px', 
                                        color: 'rgba(255,255,255,0.7)', 
                                        lineHeight: 1.7,
                                        fontSize: '0.95rem'
                                    }}>{faq.a}</p>
                                </motion.div>
                            </LiquidGlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </>
    )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { LiquidGlassCard, LiquidBlob, GlassSection } from '../components/LiquidGlass'

/* ===== DATA ===== */
const services = [
    { 
        title: 'Lead Qualification System', 
        desc: 'Intelligent lead scoring and qualification that identifies hot prospects before they reach your desk.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    { 
        title: 'Automated Follow-Up', 
        desc: 'Multi-channel follow-up sequences via voice, SMS, and email that nurture leads until they\'re ready to close.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    { 
        title: 'Showing Scheduler', 
        desc: 'Automated appointment booking that syncs with your calendar and sends reminders to reduce no-shows.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
    },
    { 
        title: 'CRM Integration', 
        desc: 'Seamless integration with Follow Up Boss, LionDesk, kvCORE, and all major real estate CRMs.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    },
    { 
        title: 'Real-Time Analytics', 
        desc: 'Track lead response times, conversion rates, and ROI with beautiful real-time dashboards.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
]

const steps = [
    { num: '01', title: 'Capture Every Lead', desc: 'AI agents respond to inquiries within 60 seconds, 24/7. No lead goes cold.' },
    { num: '02', title: 'Qualify & Nurture', desc: 'Smart qualification questions identify serious buyers. Automated follow-ups keep them engaged.' },
    { num: '03', title: 'Book & Close', desc: 'Appointments automatically scheduled. You focus on showing properties and closing deals.' },
]

const metrics = [
    { value: '60s', label: 'Average Response Time' },
    { value: '3x', label: 'More Qualified Leads' },
    { value: '45%', label: 'Increase in Showings' },
    { value: '24/7', label: 'Always Available' },
]

/* ===== HERO WITH LIQUID GLASS ===== */
function Hero() {
    return (
        <GlassSection style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #1E293B 50%, #2D1B69 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '140px',
            paddingBottom: '80px',
        }}>
            {/* Animated Liquid Blobs */}
            <LiquidBlob color="blue" size={600} top="5%" right="5%" delay={0} />
            <LiquidBlob color="purple" size={500} bottom="10%" left="5%" delay={2} />
            <LiquidBlob color="blue" size={400} top="40%" left="40%" delay={4} />

            {/* Grid Pattern Overlay */}
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                opacity: 0.3,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '700px', padding: '0 16px' }}>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{ marginBottom: '24px' }}
                        >
                            <span className="badge badge-light" style={{ 
                                background: 'rgba(59, 130, 246, 0.15)',
                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                backdropFilter: 'blur(10px)',
                                padding: '8px 24px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: '#60A5FA'
                            }}>
                                Built for High-Performance Real Estate Teams
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            style={{ 
                                fontSize: 'clamp(2rem, 6vw, 4.5rem)', 
                                color: 'white', 
                                marginBottom: '28px', 
                                lineHeight: 1.15, 
                                fontWeight: 800,
                                fontFamily: 'Poppins',
                                wordBreak: 'break-word'
                            }}
                        >
                            Every Lead Inquiry Answered{' '}
                            <span style={{ 
                                background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', 
                                WebkitBackgroundClip: 'text', 
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>
                                Within 60 Seconds
                            </span>
                            {' '}— Automatically 24/7.
                        </motion.h1>

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            style={{ 
                                fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
                                color: 'rgba(255,255,255,0.85)', 
                                lineHeight: 1.7, 
                                marginBottom: '48px',
                                wordBreak: 'break-word'
                            }}
                        >
                            From missed calls and website forms to portal leads and WhatsApp messages — we engage, qualify, and book appointments instantly so your agents only handle serious prospects.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                        >
                            <Link 
                                to="/contact"
                                className="btn hw-accelerate"
                                style={{ 
                                    padding: '18px 40px',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    borderRadius: '9999px',
                                    background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                                    color: '#FFFFFF',
                                    boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
                                    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    minWidth: '200px'
                                }}
                                onMouseEnter={e => {
                                    e.target.style.transform = 'translateY(-3px)'
                                    e.target.style.boxShadow = '0 15px 50px rgba(59, 130, 246, 0.5)'
                                }}
                                onMouseLeave={e => {
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.4)'
                                }}
                            >
                                Book a Strategy Call →
                            </Link>
                            <Link 
                                to="/case-studies" 
                                className="btn btn-outline btn-lg hw-accelerate" 
                                style={{ 
                                    padding: '18px 40px', 
                                    fontSize: '1.05rem',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(12px)',
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    textAlign: 'center',
                                    minWidth: '200px'
                                }}
                            >
                                View Case Studies
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </GlassSection>
    )
}

/* ===== SERVICES WITH LIQUID GLASS ===== */
function ServicesOverview() {
    return (
        <section className="section" style={{ background: 'var(--slate-dark)', paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="badge badge-light" style={{ 
                            background: 'rgba(59, 130, 246, 0.15)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#60A5FA'
                        }}>Our Services</span>
                        <h2 style={{ color: 'white' }}>Everything You Need to Automate Growth</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>From lead capture to deal closing, we build AI systems that power your real estate business.</p>
                    </div>
                </AnimatedSection>
                <div className="grid-3" style={{ gap: '32px' }}>
                    {services.map((s, i) => (
                        <LiquidGlassCard key={i} delay={i * 0.1} style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{
                                width: '100%',
                                height: '220px',
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <motion.img 
                                    src={s.image} 
                                    alt={s.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }} 
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.6), rgba(59, 130, 246, 0.3))',
                                }} />
                            </div>
                            <div style={{ padding: '28px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'white', fontWeight: 700 }}>{s.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        </LiquidGlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== HOW IT WORKS ===== */
function HowItWorks() {
    return (
        <section className="section" style={{ background: 'var(--slate-medium)' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-header">
                        <span className="badge badge-light" style={{ 
                            background: 'rgba(59, 130, 246, 0.15)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#60A5FA'
                        }}>How It Works</span>
                        <h2 style={{ color: 'white' }}>Three Steps to More Closed Deals</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Our AI automation system works around the clock to convert leads into appointments.</p>
                    </div>
                </AnimatedSection>
                <div className="grid-3">
                    {steps.map((s, i) => (
                        <LiquidGlassCard key={i} delay={i * 0.15} style={{ textAlign: 'center', padding: '40px 32px' }}>
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
                                style={{
                                    width: 80, 
                                    height: 80, 
                                    borderRadius: '50%', 
                                    margin: '0 auto 24px',
                                    background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: 'white', 
                                    fontWeight: 800, 
                                    fontSize: '1.8rem', 
                                    fontFamily: 'Poppins',
                                    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                                }}
                            >
                                {s.num}
                            </motion.div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'white', fontWeight: 700 }}>{s.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                        </LiquidGlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== METRICS ===== */
function Metrics() {
    return (
        <section className="section" style={{ background: 'var(--slate-dark)' }}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-header" style={{ marginBottom: '56px' }}>
                        <span className="badge badge-light" style={{ 
                            background: 'rgba(59, 130, 246, 0.15)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            color: '#60A5FA'
                        }}>Proven Results</span>
                        <h2 style={{ color: 'white' }}>Real Impact. Real Numbers.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>See the measurable results our AI automation delivers for real estate teams.</p>
                    </div>
                </AnimatedSection>
                <div className="grid-4">
                    {metrics.map((m, i) => (
                        <LiquidGlassCard key={i} delay={i * 0.1} style={{ textAlign: 'center', padding: '40px 24px' }}>
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                                style={{ 
                                    fontSize: '3rem', 
                                    fontWeight: 800, 
                                    marginBottom: '8px', 
                                    fontFamily: 'Poppins',
                                    background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                {m.value}
                            </motion.div>
                            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 500 }}>{m.label}</div>
                        </LiquidGlassCard>
                    ))}
                </div>
                <AnimatedSection delay={0.5}>
                    <div style={{ textAlign: 'center', marginTop: '56px' }}>
                        <Link 
                            to="/case-studies" 
                            className="btn btn-outline btn-lg hw-accelerate"
                            style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(12px)',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                color: 'white'
                            }}
                        >
                            View All Case Studies →
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

/* ===== FINAL CTA ===== */
function FinalCTA() {
    return (
        <GlassSection style={{ 
            background: 'linear-gradient(135deg, #0A1628 0%, #1E293B 100%)', 
            padding: '120px 0',
            position: 'relative'
        }}>
            <LiquidBlob color="blue" size={500} top="20%" right="10%" delay={0} />
            <LiquidBlob color="purple" size={400} bottom="20%" left="10%" delay={2} />
            
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <AnimatedSection>
                    <h2 style={{ 
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
                        color: 'white', 
                        marginBottom: '24px',
                        fontWeight: 800,
                        fontFamily: 'Poppins'
                    }}>
                        Ready to Close More Deals?
                    </h2>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: 'rgba(255,255,255,0.8)', 
                        marginBottom: '48px', 
                        maxWidth: '600px', 
                        margin: '0 auto 48px',
                        lineHeight: 1.7
                    }}>
                        Join top-performing real estate teams using AI automation to convert more leads and book more showings.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link 
                            to="/contact" 
                            className="btn hw-accelerate"
                            style={{
                                padding: '20px 48px',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: '9999px',
                                background: 'linear-gradient(135deg, #D4AF37, #F4E4B0)',
                                color: '#0A1628',
                                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)',
                                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'inline-block'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'translateY(-3px)'
                                e.target.style.boxShadow = '0 15px 50px rgba(212, 175, 55, 0.5)'
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'translateY(0)'
                                e.target.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.4)'
                            }}
                        >
                            Book a Strategy Call
                        </Link>
                        <Link 
                            to="/pricing" 
                            className="btn btn-outline btn-lg hw-accelerate"
                            style={{
                                padding: '20px 48px',
                                fontSize: '1.1rem',
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(12px)',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                color: 'white'
                            }}
                        >
                            View Pricing →
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </GlassSection>
    )
}

/* ===== HOME PAGE ===== */
export default function Home() {
    return (
        <>
            <Hero />
            <ServicesOverview />
            <HowItWorks />
            <Metrics />
            <FinalCTA />
        </>
    )
}

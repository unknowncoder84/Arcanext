import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [location])

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: scrolled ? '12px 0' : '20px 0',
            background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--gray-200)' : '1px solid transparent',
            transition: 'var(--transition)',
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: 42,
                        height: 42,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'var(--transition)',
                    }}>
                        <Logo 
                            size={42} 
                            color={scrolled ? '#1E3A8A' : '#FFFFFF'} 
                        />
                    </div>
                    <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.4rem',
                        color: scrolled ? 'var(--gray-900)' : 'var(--white)',
                        transition: 'var(--transition)',
                        letterSpacing: '-0.02em'
                    }}>Arcanext</span>
                </Link>

                {/* Desktop Nav */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }} className="desktop-nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                padding: '8px 16px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: location.pathname === link.path
                                    ? (scrolled ? 'var(--primary)' : 'var(--white)')
                                    : (scrolled ? 'var(--gray-600)' : 'rgba(255,255,255,0.75)'),
                                background: location.pathname === link.path
                                    ? (scrolled ? 'var(--primary-100)' : 'rgba(255,255,255,0.1)')
                                    : 'transparent',
                                transition: 'var(--transition)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/portal" className="btn btn-primary btn-sm" style={{ marginLeft: '8px' }}>
                        Portal
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                >
                    <div style={{
                        width: 24,
                        height: 2,
                        background: scrolled ? 'var(--gray-900)' : 'white',
                        borderRadius: 2,
                        transition: 'var(--transition)',
                        transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
                    }} />
                    <div style={{
                        width: 24,
                        height: 2,
                        background: scrolled ? 'var(--gray-900)' : 'white',
                        borderRadius: 2,
                        margin: '6px 0',
                        transition: 'var(--transition)',
                        opacity: mobileOpen ? 0 : 1,
                    }} />
                    <div style={{
                        width: 24,
                        height: 2,
                        background: scrolled ? 'var(--gray-900)' : 'white',
                        borderRadius: 2,
                        transition: 'var(--transition)',
                        transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
                    }} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'rgba(255,255,255,0.98)',
                            backdropFilter: 'blur(20px)',
                            borderTop: '1px solid var(--gray-200)',
                            overflow: 'hidden',
                        }}
                    >
                        <div className="container" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: location.pathname === link.path ? 'var(--primary)' : 'var(--gray-700)',
                                        background: location.pathname === link.path ? 'var(--primary-50)' : 'transparent',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link to="/portal" className="btn btn-primary" style={{ marginTop: '8px', textAlign: 'center' }}>
                                Portal
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    )
}

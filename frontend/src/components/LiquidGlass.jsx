import { motion } from 'framer-motion'

export function LiquidGlassCard({ children, className = '', delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`card-glass hw-accelerate ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function LiquidGlassButton({ children, className = '', variant = 'primary', ...props }) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
      color: '#FFFFFF',
      boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
    },
    gold: {
      background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4B0 100%)',
      color: '#0A1628',
      boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
    }
  }

  return (
    <motion.button
      whileHover={{ 
        y: -3,
        boxShadow: variant === 'primary' 
          ? '0 15px 50px rgba(59, 130, 246, 0.5)'
          : variant === 'gold'
          ? '0 15px 40px rgba(212, 175, 55, 0.4)'
          : '0 10px 30px rgba(255, 255, 255, 0.2)',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      whileTap={{ y: -1 }}
      className={`btn hw-accelerate ${className}`}
      style={{
        ...variants[variant],
        padding: '18px 40px',
        borderRadius: '9999px',
        fontSize: '1.05rem',
        fontWeight: 600,
        cursor: 'pointer',
        border: variant === 'glass' ? '2px solid rgba(255, 255, 255, 0.2)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
        transform: 'translateZ(0)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export function LiquidBlob({ color = 'blue', size = 400, top, left, right, bottom, delay = 0 }) {
  const colors = {
    blue: 'rgba(59, 130, 246, 0.6)',
    purple: 'rgba(139, 92, 246, 0.5)',
    green: 'rgba(16, 185, 129, 0.4)',
    gold: 'rgba(212, 175, 55, 0.5)',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="animate-liquid"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colors[color]}, transparent 70%)`,
        filter: 'blur(80px)',
        top,
        left,
        right,
        bottom,
        pointerEvents: 'none',
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        maxWidth: '80vw',
        maxHeight: '80vh',
      }}
    />
  )
}

export function GlassSection({ children, className = '', ...props }) {
  return (
    <section 
      className={`section ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        ...props.style
      }}
      {...props}
    >
      {children}
    </section>
  )
}

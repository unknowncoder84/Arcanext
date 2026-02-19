import { motion } from 'framer-motion'

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 }
  },
  pop: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  }
}

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: variant === 'pop' ? 'spring' : 'tween',
        stiffness: variant === 'pop' ? 100 : undefined,
        damping: variant === 'pop' ? 15 : undefined
      }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.15 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: 'spring',
            stiffness: 80,
            damping: 15
          } 
        }
      }}
    >
      {children}
    </motion.div>
  )
}

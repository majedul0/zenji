import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

/**
 * Fades + slides children into view on scroll. Wraps framer-motion so
 * sections don't each re-implement observer + variants boilerplate.
 */
export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div', threshold = 0.2 }) {
  const [ref, inView] = useInView({ threshold })
  const Comp = motion[as] ?? motion.div

  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}

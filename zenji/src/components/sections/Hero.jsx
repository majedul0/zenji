import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import heroVideo from '../../assets/video/hero.mp4'
import { CanvasRoot } from '../../three/CanvasRoot'
import './Hero.css'

const EnergyOrb = lazy(() => import('../../three/EnergyOrb').then((m) => ({ default: m.EnergyOrb })))

export function Hero({ pointer }) {
  return (
    <section className="hero" id="top">
      <video className="hero__video" autoPlay muted loop playsInline poster="">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero__overlay" />

      <div className="hero__orb">
        <CanvasRoot camera={{ position: [0, 0, 5.5] }}>
          <Suspense fallback={null}>
            <EnergyOrb pointer={pointer} />
          </Suspense>
        </CanvasRoot>
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="hero__eyebrow-dot" />
          THE_ORIGIN_DROP // LIVE NOW
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          WEAR YOUR
          <br />
          <span className="hero__title-glow">STORY</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          Anime art meets street culture. The warrior within refuses to fade into the crowd.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <a href="#drop" className="btn" data-cursor-grab>
            Shop the Drop →
          </a>
          <a href="#story" className="btn" data-cursor-grab>
            Our Story
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  )
}

import ctaVideo from '../../assets/video/cta.mp4'
import { Reveal } from '../ui/Reveal'
import './CTA.css'

export function CTA() {
  return (
    <section className="cta" id="cta">
      <video className="cta__video" autoPlay muted loop playsInline>
        <source src={ctaVideo} type="video/mp4" />
      </video>
      <div className="cta__overlay" />

      <div className="cta__content">
        <Reveal>
          <p className="section-heading__eyebrow">Coming Soon</p>
          <h2 className="cta__title">Own Your Vibe.</h2>
          <p className="cta__subtitle">
            New drop notifications go out first to the list. Designed for everyday warriors — built different, made
            to last.
          </p>
          <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="your@email.com" aria-label="Email address" />
            <button type="submit" className="btn" data-cursor-grab>
              Notify Me
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

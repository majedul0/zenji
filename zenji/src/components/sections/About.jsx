import ctaVideo from '../../assets/video/cta.mp4'
import { Reveal } from '../ui/Reveal'
import './About.css'

export function About() {
  return (
    <section className="about" id="story">
      <video className="about__video" autoPlay muted loop playsInline>
        <source src={ctaVideo} type="video/mp4" />
      </video>
      <div className="about__overlay" />

      <div className="about__inner">
        <Reveal className="about__content">
          <p className="about__eyebrow">About // Zenji</p>
          <span className="about__rule" />
          <h2 className="about__title">
            Born From The
            <br /> Warrior Spirit.
          </h2>

          <p className="about__lead">ZENJI began with one belief: what you wear should tell a story.</p>

          <p>
            Inspired by samurai discipline, anime art and modern street culture, we create premium streetwear for
            those who choose their own path.
          </p>

          <p>
            Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism and oversized silhouettes to
            express courage, creativity and individuality.
          </p>

          <blockquote className="about__quote">&quot;The warrior within refuses to fade into the crowd.&quot;</blockquote>

          <p className="about__tagline">For the dreamers. Fighters. Creators. Outsiders.</p>

          <a href="#lookbook" className="about__link" data-cursor-grab>
            Explore The Collection →
          </a>
        </Reveal>
      </div>
    </section>
  )
}

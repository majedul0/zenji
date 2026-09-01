import { products } from '../../data/products'
import './Lookbook.css'

const FEATURED_IDS = ['will-of-the-sun', 'free-bird', 'domain-expansion', 'water-breathing', 'bushido']
const FEATURED = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean)

export function Lookbook() {
  return (
    <section className="lookbook" id="lookbook">
      {FEATURED.map((product, index) => (
        <div className="lookbook__card" key={product.id} style={{ zIndex: index + 1 }}>
          <img src={product.image} alt={`${product.name} tee`} className="lookbook__img" loading="lazy" />
          <div className="lookbook__overlay" />
          <div className="lookbook__content">
            <p className="lookbook__eyebrow">Collection // The_Origin_Drop</p>
            <h3 className="lookbook__title">{product.name}</h3>
            <a href="#drop" className="lookbook__link" data-cursor-grab>
              Shop {product.name} →
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

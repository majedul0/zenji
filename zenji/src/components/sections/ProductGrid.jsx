import { products } from '../../data/products'
import { ProductCard } from '../ui/ProductCard'
import { Reveal } from '../ui/Reveal'
import './ProductGrid.css'

export function ProductGrid() {
  return (
    <section className="product-grid-section" id="drop">
      <div className="product-grid-section__inner">
        <Reveal className="section-heading">
          <p className="section-heading__eyebrow">The Origin Drop</p>
          <h2>Built Different. Made To Last.</h2>
          <p className="section-heading__sub">
            Every graphic is hand-illustrated and screen-printed on heavyweight cotton. Once a piece sells out —
            it&apos;s gone. No restocks, no reprints.
          </p>
        </Reveal>

        <div className="product-grid" id="collection">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import './ProductCard.css'

export function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const onSale = Boolean(product.salePrice)

  return (
    <article
      className="product-card"
      style={{ '--delay': `${(index % 3) * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-grab
    >
      <div className="product-card__frame">
        <span className="product-card__tag">{product.tag}</span>
        <img
          src={product.image}
          alt={`${product.name} tee`}
          className={`product-card__img ${hovered ? 'is-hidden' : ''}`}
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt=""
          aria-hidden="true"
          className={`product-card__img product-card__img--hover ${hovered ? 'is-visible' : ''}`}
          loading="lazy"
        />
        <div className="product-card__scan" />
      </div>

      <div className="product-card__meta">
        <div>
          <h3>{product.name}</h3>
          <p className="product-card__jp">{product.jp}</p>
        </div>
        <div className={`product-card__price ${onSale ? 'is-sale' : ''}`}>
          {onSale && <span className="product-card__price-old">${product.price.toFixed(2)}</span>}
          <span>${(product.salePrice ?? product.price).toFixed(2)}</span>
        </div>
      </div>
    </article>
  )
}

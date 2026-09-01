import './Marquee.css'

const DEFAULT_ITEMS = [
  'NOW AVAILABLE',
  'LIMITED STOCK',
  'THE_ORIGIN_DROP COLLECTION LIVE',
  'FREE SHIPPING ON ORDERS OVER $150',
]

export function Marquee({ items = DEFAULT_ITEMS, speed = 28 }) {
  const track = [...items, ...items]

  return (
    <div className="marquee">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {track.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

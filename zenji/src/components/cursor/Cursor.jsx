import { useEffect, useRef, useState } from 'react'
import { lerp } from '../../utils/math'
import './Cursor.css'

/**
 * A two-layer custom cursor: a dot that tracks the pointer near-instantly
 * and a ring that trails behind with spring-like lag. The ring expands and
 * fills over interactive elements to read as a "grab" affordance.
 */
export function Cursor({ pointer }) {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
  const [grabbing, setGrabbing] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)
  const [visible, setVisible] = useState(false)

  const state = useRef({ dotX: 0, dotY: 0, ringX: 0, ringY: 0, raf: null })

  useEffect(() => {
    if (!enabled) return undefined

    document.body.classList.add('cursor-none')

    const onDown = () => setGrabbing(true)
    const onUp = () => setGrabbing(false)
    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor-grab], input, textarea, select')
      setHoveringInteractive(Boolean(interactive))
    }

    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseover', onOver)

    return () => {
      document.body.classList.remove('cursor-none')
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled) return undefined

    const tick = () => {
      const target = pointer.current
      const s = state.current

      s.dotX = lerp(s.dotX, target.x, 0.5)
      s.dotY = lerp(s.dotY, target.y, 0.5)
      s.ringX = lerp(s.ringX, target.x, 0.16)
      s.ringY = lerp(s.ringY, target.y, 0.16)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${s.dotX}px, ${s.dotY}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${s.ringX}px, ${s.ringY}px, 0)`
      }

      s.raf = requestAnimationFrame(tick)
    }

    const s = state.current
    s.raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(s.raf)
  }, [enabled, pointer])

  if (!enabled) return null

  const isGrab = grabbing || hoveringInteractive

  return (
    <div className={`cursor ${visible ? 'is-visible' : ''}`} aria-hidden="true">
      <div ref={dotRef} className={`cursor__dot ${isGrab ? 'is-grabbing' : ''}`} />
      <div ref={ringRef} className={`cursor__ring ${isGrab ? 'is-grabbing' : ''} ${grabbing ? 'is-down' : ''}`} />
    </div>
  )
}

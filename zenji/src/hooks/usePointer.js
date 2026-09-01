import { useEffect, useRef } from 'react'

/**
 * Tracks raw viewport pointer position in a ref (no re-renders).
 * Also exposes normalized [-1, 1] coords for three.js consumers.
 */
export function usePointer() {
  const pointer = useRef({ x: 0, y: 0, nx: 0, ny: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      pointer.current.x = x
      pointer.current.y = y
      pointer.current.nx = (x / window.innerWidth) * 2 - 1
      pointer.current.ny = -(y / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return pointer
}

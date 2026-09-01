import { Canvas } from '@react-three/fiber'

/**
 * Shared three.js canvas config. Kept lightweight (capped dpr, no shadows)
 * since it renders as a fixed full-viewport layer behind page content.
 */
export function CanvasRoot({ children, camera, className, style }) {
  return (
    <Canvas
      className={className}
      style={style}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 45, ...camera }}
    >
      {children}
    </Canvas>
  )
}

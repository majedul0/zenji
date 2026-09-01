import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

/**
 * Fixed, page-wide ambient particle backdrop — drifting cursed-energy
 * embers in violet + magenta. Sits behind every section at low opacity.
 */
export function EmberField({ pointer }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const targetX = pointer?.current?.nx ?? 0
    const targetY = pointer?.current?.ny ?? 0
    group.current.rotation.y += (targetX * 0.15 - group.current.rotation.y) * 0.02
    group.current.rotation.x += (-targetY * 0.1 - group.current.rotation.x) * 0.02
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.2
  })

  return (
    <group ref={group}>
      <Sparkles
        count={90}
        scale={[14, 9, 6]}
        size={2.4}
        speed={0.35}
        opacity={0.55}
        color="#ff4d4d"
        noise={1.2}
      />
      <Sparkles
        count={50}
        scale={[16, 10, 6]}
        size={3.2}
        speed={0.2}
        opacity={0.35}
        color="#ff6a1a"
        noise={1.6}
      />
      <ambientLight intensity={0.4} />
    </group>
  )
}

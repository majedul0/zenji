import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei'

/**
 * The hero centerpiece — a distorted, glowing "cursed energy" orb that
 * slowly rotates and tilts toward the pointer.
 */
export function EnergyOrb({ pointer }) {
  const mesh = useRef(null)
  const group = useRef(null)

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25
      mesh.current.rotation.x += delta * 0.08
    }
    if (group.current) {
      const targetX = (pointer?.current?.ny ?? 0) * 0.25
      const targetY = (pointer?.current?.nx ?? 0) * 0.35
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
    }
  })

  return (
    <group ref={group} position={[2.4, 0.6, -1.5]}>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.3}>
        <Icosahedron ref={mesh} args={[1, 4]}>
          <MeshDistortMaterial
            color="#e01123"
            emissive="#7a0a12"
            emissiveIntensity={0.7}
            roughness={0.1}
            metalness={0.5}
            distort={0.5}
            speed={1.8}
            transparent
            opacity={0.55}
          />
        </Icosahedron>
        <Icosahedron args={[1.28, 1]}>
          <meshBasicMaterial color="#ff5b4d" wireframe transparent opacity={0.22} />
        </Icosahedron>
      </Float>
      <pointLight position={[3, 2, 4]} intensity={30} color="#ff5b4d" distance={12} />
      <pointLight position={[-3, -2, 2]} intensity={18} color="#ff6a1a" distance={12} />
      <ambientLight intensity={0.2} />
    </group>
  )
}

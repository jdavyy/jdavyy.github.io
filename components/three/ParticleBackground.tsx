
// components/three/ParticleBackground.tsx
'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'

const starCount = 5000
const positions = random.inSphere(new Float32Array(starCount * 3), { radius: 1.5 })

const Particles: React.FC = () => {
  const ref = useRef<any>()
  const { viewport } = useThree()

  useFrame((state, delta) => {
    // Subtle rotation based on mouse movement for interactivity
    const { x, y } = state.mouse
    if (ref.current) {
      ref.current.rotation.x = x * 0.05
      ref.current.rotation.y = y * 0.05
    }
    // Continuous slow self-rotation
    ref.current.rotation.z += delta * 0.005 
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#00F0FF" // Neon Blue
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const ParticleBackground: React.FC = () => {
  return (
    // Fixed inset 0 and low opacity for the subtle background effect
    <div className="fixed inset-0 z-0 opacity-20"> 
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleBackground

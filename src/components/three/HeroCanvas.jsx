// src/components/three/HeroCanvas.jsx
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

const FloatingShapes = () => {
  const groupRef = useRef()
  const shapes = useMemo(() => {
    const geometries = [
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      new THREE.ConeGeometry(0.5, 1, 32),
    ]
    return geometries.map((geometry, i) => ({
      geometry,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5 - 2,
      ],
      color: ['#0F4C81', '#2FBF71', '#F4A261'][i % 3],
      scale: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.01 + 0.005,
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <mesh key={index} position={shape.position} scale={shape.scale}>
          <primitive object={shape.geometry} attach="geometry" />
          <meshStandardMaterial color={shape.color} roughness={0.3} metalness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#0F4C81" />
        <FloatingShapes />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default HeroCanvas
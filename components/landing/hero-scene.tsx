"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 220
    const arr = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      arr[i * 3] = -3 + Math.random() * 0.5
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5
    }

    return arr
  }, [])

  const speeds = useMemo(() => {
    const arr = new Float32Array(220)
    for (let i = 0; i < 220; i++) {
      arr[i] = 0.01 + Math.random() * 0.015
    }
    return arr
  }, [])

  useFrame(() => {
    if (!ref.current) return

    const geo = ref.current.geometry
    const pos = geo.attributes.position.array as Float32Array

    for (let i = 0; i < 220; i++) {
      const i3 = i * 3

      pos[i3] += speeds[i]

      if (pos[i3] > 3) {
        pos[i3] = -3
      }
    }

    geo.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4fdcff"
        size={0.035}
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  )
}

function FlowLines() {
  const group = useRef<THREE.Group>(null)

  const curves = useMemo(() => {
    return [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3, 0.4, 0),
        new THREE.Vector3(-1, 0.7, 0.1),
        new THREE.Vector3(0, 0.2, 0.05),
        new THREE.Vector3(1.5, 0.6, 0.02),
        new THREE.Vector3(3, 0.4, 0),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3, 0, 0),
        new THREE.Vector3(-1, -0.3, 0.08),
        new THREE.Vector3(0.5, 0.1, 0.04),
        new THREE.Vector3(2, -0.2, 0.02),
        new THREE.Vector3(3, 0, 0),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3, -0.5, 0),
        new THREE.Vector3(-1, -0.7, 0.06),
        new THREE.Vector3(0, -0.3, 0.03),
        new THREE.Vector3(1.5, -0.6, 0.02),
        new THREE.Vector3(3, -0.5, 0),
      ]),
    ]
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = Math.sin(t * 0.5) * 0.02
  })

  return (
    <group ref={group}>
      {curves.map((curve, i) => {
        const points = curve.getPoints(60)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color={["#24d2ee", "#4fdcff", "#b6ef4b"][i]}
              transparent
              opacity={0.5}
            />
          </line>
        )
      })}
    </group>
  )
}

function LogoMark() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()

    group.current.rotation.y = Math.sin(t * 0.6) * 0.25
    group.current.rotation.x = Math.sin(t * 0.3) * 0.08
  })

  return (
    <Float speed={1.2} floatIntensity={0.2}>
      <group ref={group}>
        <mesh>
          <torusGeometry args={[1, 0.04, 16, 100]} />
          <meshStandardMaterial color="#1bcfea" emissive="#1bcfea" emissiveIntensity={1} />
        </mesh>

        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[1.5, 0.1, 0.05]} />
          <meshStandardMaterial color="#4fdcff" emissive="#1bcfea" />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.1, 0.05]} />
          <meshStandardMaterial color="#4fdcff" emissive="#1bcfea" />
        </mesh>

        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1.5, 0.1, 0.05]} />
          <meshStandardMaterial color="#b6ef4b" emissive="#88b829" />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={4} />
      <pointLight position={[-2, -2, 2]} intensity={2} color="#b6ef4b" />

      <Particles />
      <FlowLines />
      <LogoMark />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="relative w-full h-full rounded-2xl border border-border/30 bg-black/20 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

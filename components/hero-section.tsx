"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type * as THREE from "three"

function QuantumGeometry() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = state.clock.elapsedTime * 0.15
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -state.clock.elapsedTime * 0.12
      outerRef.current.rotation.z = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer dodecahedron */}
      <mesh ref={outerRef} scale={1.8}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#C87E4F"
          emissive="#C87E4F"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Middle octahedron */}
      <mesh scale={1.3}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#C6B4E2"
          emissive="#C6B4E2"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Inner icosahedron */}
      <mesh ref={innerRef} scale={0.8}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#C87E4F"
          emissive="#C87E4F"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Connection nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 2
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#C6B4E2" emissive="#C6B4E2" emissiveIntensity={0.8} />
          </mesh>
        )
      })}
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  const particlesCount = 300
  const positions = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#C6B4E2" transparent opacity={0.3} />
    </points>
  )
}

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true)
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef as any}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10"
    >
      <div className="absolute inset-0 z-0 opacity-50">
        {inView && (
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.6} color="#C87E4F" />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#C6B4E2" />
            <ParticleField />
            <QuantumGeometry />
          </Canvas>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            از قدیم گفتن <span className="gradient-text">کارو بسپار به کاربلد</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 text-balance font-light max-w-3xl mx-auto">
            تیمی از متخصصان نسل Z که با کد تمیز، دانش روز و خلاقیت بی‌حد، پروژه‌های دیجیتال شما رو به واقعیت تبدیل می‌کنن
          </p>

          <motion.button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 soft-glow font-medium text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            بزن بریم ببینیم چیکارا می‌کنیم
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7 text-primary/60" />
      </motion.div>
    </section>
  )
}

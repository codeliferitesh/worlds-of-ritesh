"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SkyAndAtmosphere() {
  const particlesRef = useRef<THREE.Points>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const sunLightRef = useRef<THREE.DirectionalLight>(null);

  // 750 procedural golden-orange sunset & electric cyan floating embers
  const { positions, colors } = useMemo(() => {
    const count = 750;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color("#54E5FF");
    const amber = new THREE.Color("#FFB15E");
    const sunset = new THREE.Color("#FF7043");

    for (let i = 0; i < count; i++) {
      // Spread across the vast floating world along camera path
      pos[i * 3] = (Math.random() - 0.5) * 70;
      pos[i * 3 + 1] = (Math.random() - 0.2) * 45;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 70;

      const r = Math.random();
      const chosen = r > 0.45 ? (r > 0.75 ? sunset : amber) : cyan;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return { positions: pos, colors: col };
  }, []);

  // Soft drifting clouds and ember particle dynamics
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.025;
      particlesRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
      const positionsArr = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positionsArr.length; i += 3) {
        positionsArr[i] += Math.sin(t * 0.8 + i) * 0.005;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.012;
    }

    if (sunLightRef.current) {
      sunLightRef.current.intensity = 2.8 + Math.sin(t * 1.5) * 0.4;
    }
  });

  return (
    <>
      {/* Volumetric Sunset Lighting & Fog */}
      <color attach="background" args={["#08111F"]} />
      <fog attach="fog" args={["#0a1424", 12, 75]} />

      {/* Primary Sunset Key Light: Warm Golden Amber */}
      <directionalLight
        ref={sunLightRef}
        position={[25, 12, -20]}
        intensity={3.0}
        color="#FFB15E"
      />

      {/* Secondary Sunset Glow: Warm Orange */}
      <directionalLight
        position={[-15, 8, -25]}
        intensity={1.8}
        color="#FF7043"
      />

      {/* Cyber Fill Light: Electric Cyan */}
      <directionalLight
        position={[0, -10, 15]}
        intensity={1.1}
        color="#54E5FF"
      />

      {/* Ambient twilight skylight */}
      <ambientLight intensity={0.7} color="#182338" />

      {/* 750 Floating Embers / Fireflies / Data Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.18}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Distant Radiant Sun Glow Orb */}
      <mesh position={[24, 10, -38]}>
        <sphereGeometry args={[9, 32, 32]} />
        <meshBasicMaterial
          color="#FF9640"
          transparent
          opacity={0.38}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh position={[24, 10, -38]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial
          color="#FFE0B2"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Floating Low-Poly Cloud Formations */}
      <group ref={cloudsRef} position={[0, -10, -12]}>
        {[
          { pos: [-16, 0, -12], scale: [16, 3, 10] },
          { pos: [14, 1, -18], scale: [18, 3.5, 12] },
          { pos: [-2, -2, -24], scale: [25, 4, 14] },
          { pos: [22, -1, -8], scale: [14, 2.5, 9] },
          { pos: [-22, 2, -6], scale: [17, 3, 10] },
          { pos: [4, 6, -30], scale: [20, 3.2, 11] },
        ].map((c, i) => (
          <mesh key={i} position={c.pos as [number, number, number]} scale={c.scale as [number, number, number]}>
            <sphereGeometry args={[1, 16, 12]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#FFB15E" : "#243247"}
              roughness={0.9}
              transparent
              opacity={0.32}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

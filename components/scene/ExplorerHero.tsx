"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ExplorerHero() {
  const droneRef = useRef<THREE.Group>(null);
  const lanternLightRef = useRef<THREE.PointLight>(null);
  const lanternMeshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Hovering companion drone
    if (droneRef.current) {
      droneRef.current.position.y = -0.5 + Math.sin(t * 1.8) * 0.15;
      droneRef.current.position.x = 4.2 + Math.cos(t * 1.1) * 0.08;
      droneRef.current.rotation.z = Math.sin(t * 1.5) * 0.05;
    }

    // Glowing lantern pulse
    if (lanternLightRef.current) {
      lanternLightRef.current.intensity = 1.8 + Math.sin(t * 3.5) * 0.5;
    }
    if (lanternMeshRef.current) {
      lanternMeshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group position={[3.6, -1.8, 1.2]}>
      {/* ============================================================ */}
      {/* 1. FOREGROUND ROCKY PROMONTORY / CLIFF (Right side) */}
      {/* ============================================================ */}
      <mesh position={[0.6, -1.4, -0.4]} rotation={[0.08, -0.2, -0.05]}>
        <cylinderGeometry args={[2.5, 3.2, 3.8, 7]} />
        <meshStandardMaterial
          color="#161c27"
          roughness={0.92}
          metalness={0.15}
          flatShading
        />
      </mesh>
      {/* Cliff Top Crag */}
      <mesh position={[0.5, 0.45, -0.4]} rotation={[0, 0.4, 0]}>
        <cylinderGeometry args={[2.2, 2.5, 0.5, 6]} />
        <meshStandardMaterial
          color="#1e2634"
          roughness={0.9}
          flatShading
        />
      </mesh>

      {/* ============================================================ */}
      {/* 2. STYLIZED EXPLORER CHARACTER (Silhouetted / Low-Poly) */}
      {/* Facing towards the distant floating islands */}
      {/* ============================================================ */}
      <group position={[0.2, 0.7, -0.2]} rotation={[0, -0.65, 0]}>
        {/* Boots / Lower legs */}
        <mesh position={[-0.2, 0.35, 0]}>
          <boxGeometry args={[0.22, 0.7, 0.28]} />
          <meshStandardMaterial color="#0c121d" roughness={0.8} />
        </mesh>
        <mesh position={[0.2, 0.35, 0]}>
          <boxGeometry args={[0.22, 0.7, 0.28]} />
          <meshStandardMaterial color="#0c121d" roughness={0.8} />
        </mesh>

        {/* Torso & Utility Coat */}
        <mesh position={[0, 1.15, 0]}>
          <boxGeometry args={[0.55, 0.9, 0.35]} />
          <meshStandardMaterial color="#1a2332" roughness={0.7} />
        </mesh>

        {/* Explorer Backpack / Power Pack */}
        <mesh position={[0, 1.2, 0.26]}>
          <boxGeometry args={[0.42, 0.6, 0.22]} />
          <meshStandardMaterial color="#0e1522" roughness={0.8} />
        </mesh>
        {/* Backpack cyan energy cell */}
        <mesh position={[0, 1.2, 0.38]}>
          <boxGeometry args={[0.18, 0.35, 0.05]} />
          <meshBasicMaterial color="#54E5FF" />
        </mesh>

        {/* Head / Hooded silhouette */}
        <mesh position={[0, 1.85, -0.02]}>
          <sphereGeometry args={[0.24, 12, 12]} />
          <meshStandardMaterial color="#121824" roughness={0.85} />
        </mesh>

        {/* Left Arm Resting at side */}
        <mesh position={[-0.38, 1.1, 0]} rotation={[0, 0, -0.15]}>
          <boxGeometry args={[0.16, 0.7, 0.18]} />
          <meshStandardMaterial color="#151e2c" />
        </mesh>

        {/* Right Arm Extended Forward holding the lantern */}
        <mesh position={[0.38, 1.25, -0.32]} rotation={[-0.7, 0.3, -0.2]}>
          <boxGeometry args={[0.16, 0.65, 0.18]} />
          <meshStandardMaterial color="#151e2c" />
        </mesh>

        {/* ============================================================ */}
        {/* 3. GLOWING HOLOGRAPHIC DEVICE / LANTERN */}
        {/* ============================================================ */}
        <group position={[0.52, 1.45, -0.72]}>
          {/* Lantern Cage */}
          <mesh>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial color="#0a101a" wireframe />
          </mesh>
          {/* Inner Glowing Hologram Core */}
          <mesh ref={lanternMeshRef}>
            <octahedronGeometry args={[0.14, 0]} />
            <meshBasicMaterial color="#54E5FF" />
          </mesh>
          {/* Soft Cyan Lantern Point Light illuminating cliff & explorer */}
          <pointLight
            ref={lanternLightRef}
            color="#54E5FF"
            intensity={2.2}
            distance={6}
          />
        </group>
      </group>

      {/* ============================================================ */}
      {/* 4. COMPANION DRONE (Hovering near explorer) */}
      {/* ============================================================ */}
      <group ref={droneRef} position={[1.8, 1.4, -0.8]} rotation={[0, -0.8, 0]}>
        {/* Drone Center Chassis */}
        <mesh>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>
        {/* Cyan Visor / Sensor Eye */}
        <mesh position={[0, 0, -0.18]}>
          <boxGeometry args={[0.22, 0.1, 0.08]} />
          <meshBasicMaterial color="#54E5FF" />
        </mesh>
        <pointLight position={[0, 0, -0.25]} color="#54E5FF" intensity={1.2} distance={3} />

        {/* Left Thruster Wing */}
        <mesh position={[-0.32, 0, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.32, 8]} />
          <meshStandardMaterial color="#1a2332" />
        </mesh>
        <mesh position={[-0.45, 0.05, 0]}>
          <torusGeometry args={[0.1, 0.02, 8, 16]} />
          <meshBasicMaterial color="#54E5FF" />
        </mesh>

        {/* Right Thruster Wing */}
        <mesh position={[0.32, 0, 0]} rotation={[0, 0, -0.2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.32, 8]} />
          <meshStandardMaterial color="#1a2332" />
        </mesh>
        <mesh position={[0.45, 0.05, 0]}>
          <torusGeometry args={[0.1, 0.02, 8, 16]} />
          <meshBasicMaterial color="#54E5FF" />
        </mesh>
      </group>
    </group>
  );
}

"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CitadelIslands() {
  const groupRef = useRef<THREE.Group>(null);
  const waterfallRef = useRef<THREE.Points>(null);
  const gyroRef1 = useRef<THREE.Group>(null);
  const gyroRef2 = useRef<THREE.Group>(null);
  const skillsConstellationRef = useRef<THREE.Group>(null);
  const workshopRef = useRef<THREE.Group>(null);
  const beaconRingsRef = useRef<THREE.Group>(null);
  const creativeLabRef = useRef<THREE.Group>(null);

  // Animate all 3D structures continuously across all scenes
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Gentle global island levitation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.4;
    }

    // 1. Scene 2 Observatory Gyro Rings rotation
    if (gyroRef1.current) {
      gyroRef1.current.rotation.x += delta * 0.4;
      gyroRef1.current.rotation.y += delta * 0.6;
    }
    if (gyroRef2.current) {
      gyroRef2.current.rotation.y -= delta * 0.5;
      gyroRef2.current.rotation.z += delta * 0.3;
    }

    // 2. Scene 3 Skills Constellation Crystals rotation & float
    if (skillsConstellationRef.current) {
      skillsConstellationRef.current.rotation.y += delta * 0.15;
      skillsConstellationRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(t * 1.5 + i) * 0.004;
        child.rotation.x += delta * 0.3;
      });
    }

    // 3. Scene 5 Workshop Holographic Circuit rotation
    if (workshopRef.current) {
      workshopRef.current.rotation.y += delta * 0.25;
    }

    // 4. Scene 6 Creative Lab Polyhedra rotation
    if (creativeLabRef.current) {
      creativeLabRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * (0.2 + i * 0.1);
        child.rotation.y += delta * (0.3 + i * 0.1);
        child.position.y += Math.cos(t * 1.2 + i * 2) * 0.003;
      });
    }

    // 5. Scene 7 Beacon Ascending Energy Rings
    if (beaconRingsRef.current) {
      beaconRingsRef.current.children.forEach((ring, i) => {
        ring.position.y += delta * 1.5;
        if (ring.position.y > 14) {
          ring.position.y = 0;
        }
        ring.scale.setScalar(1 + (ring.position.y / 14) * 0.8);
      });
    }

    // 6. Waterfall particles flow
    if (waterfallRef.current) {
      const positions = waterfallRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.16;
        if (positions[i] < -18) {
          positions[i] = -1;
        }
      }
      waterfallRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Waterfall particle system
  const waterfallParticles = useMemo(() => {
    const count = 240;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = -4.5 + (Math.random() - 0.5) * 1.2;
      pos[i * 3 + 1] = -1 - Math.random() * 16;
      pos[i * 3 + 2] = -14 + (Math.random() - 0.5) * 1.2;
    }
    return pos;
  }, []);

  return (
    <group ref={groupRef}>
      {/* ============================================================ */}
      {/* 1. HERO CITADEL ISLAND (Scene 1) */}
      {/* ============================================================ */}
      <group position={[-2.5, 0, -14]}>
        {/* Floating Basalt Cone Base */}
        <mesh position={[0, -4.5, 0]}>
          <coneGeometry args={[7, 9.5, 8]} />
          <meshStandardMaterial color="#111824" roughness={0.9} metalness={0.25} flatShading />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[6.8, 7.1, 1.2, 8]} />
          <meshStandardMaterial color="#182230" roughness={0.85} flatShading />
        </mesh>

        {/* Central Gothic Cathedral Spire */}
        <mesh position={[0, 5.5, 0]}>
          <cylinderGeometry args={[2.4, 3, 10, 8]} />
          <meshStandardMaterial color="#212a3b" roughness={0.7} metalness={0.35} />
        </mesh>
        <mesh position={[0, 12, 0]}>
          <coneGeometry args={[2.5, 6, 8]} />
          <meshStandardMaterial color="#17202f" roughness={0.5} metalness={0.55} />
        </mesh>

        {/* Glowing Rose Window / Portal */}
        <mesh position={[0, 5.5, 2.5]}>
          <torusGeometry args={[1.0, 0.2, 16, 32]} />
          <meshBasicMaterial color="#54E5FF" />
        </mesh>
        <mesh position={[0, 5.5, 2.45]}>
          <circleGeometry args={[0.9, 32]} />
          <meshBasicMaterial color="#E0F7FA" />
        </mesh>
        <pointLight position={[0, 5.5, 3]} color="#54E5FF" intensity={3.5} distance={16} />

        {/* Flanking Gothic Turrets */}
        <mesh position={[-3.2, 4.2, 0.6]}>
          <cylinderGeometry args={[1.1, 1.4, 8, 6]} />
          <meshStandardMaterial color="#1e2738" roughness={0.8} />
        </mesh>
        <mesh position={[-3.2, 9, 0.6]}>
          <coneGeometry args={[1.2, 4, 6]} />
          <meshStandardMaterial color="#17202e" metalness={0.4} />
        </mesh>
        <mesh position={[3.2, 4.2, -0.6]}>
          <cylinderGeometry args={[1.1, 1.4, 8, 6]} />
          <meshStandardMaterial color="#1e2738" roughness={0.8} />
        </mesh>
        <mesh position={[3.2, 9, -0.6]}>
          <coneGeometry args={[1.2, 4, 6]} />
          <meshStandardMaterial color="#17202e" metalness={0.4} />
        </mesh>

        {/* Autumn Foliage Clusters */}
        {[
          { pos: [-3.5, 1.4, 2.5], scale: 1.8, col: "#FF7043" },
          { pos: [-4.6, 1.0, 1.2], scale: 1.5, col: "#E05A2B" },
          { pos: [3.8, 1.2, 1.9], scale: 1.6, col: "#FFB15E" },
          { pos: [2.8, 0.8, 3.4], scale: 1.3, col: "#FF7043" },
          { pos: [0.6, 1.0, 4.2], scale: 1.5, col: "#D84A1B" },
        ].map((tree, i) => (
          <group key={i} position={tree.pos as [number, number, number]}>
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.18, 0.28, 1.4, 5]} />
              <meshStandardMaterial color="#2B1D14" roughness={0.9} />
            </mesh>
            <mesh position={[0, 1.6, 0]} scale={tree.scale}>
              <dodecahedronGeometry args={[0.85, 1]} />
              <meshStandardMaterial color={tree.col} roughness={0.7} flatShading />
            </mesh>
          </group>
        ))}
      </group>

      {/* ============================================================ */}
      {/* 2. THE OBSERVATORY ISLAND (Scene 2 - About Me) */}
      {/* Dynamic spinning gyroscopic armillary rings */}
      {/* ============================================================ */}
      <group position={[-10, 4, -22]}>
        <mesh position={[0, -4, 0]}>
          <coneGeometry args={[5, 7.5, 6]} />
          <meshStandardMaterial color="#131a26" roughness={0.9} flatShading />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[4.8, 5, 0.8, 6]} />
          <meshStandardMaterial color="#1c2535" roughness={0.8} />
        </mesh>

        {/* Observatory Base Dome */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[2.5, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#253043" roughness={0.6} metalness={0.4} />
        </mesh>

        {/* Gyroscopic Holographic Armillary Sphere */}
        <group ref={gyroRef1} position={[0, 4.5, 0]}>
          <mesh>
            <torusGeometry args={[2.2, 0.08, 16, 32]} />
            <meshBasicMaterial color="#54E5FF" />
          </mesh>
        </group>
        <group ref={gyroRef2} position={[0, 4.5, 0]}>
          <mesh>
            <torusGeometry args={[1.8, 0.07, 16, 32]} />
            <meshBasicMaterial color="#FFB15E" />
          </mesh>
          {/* Inner Glowing Crystal */}
          <mesh>
            <octahedronGeometry args={[0.9, 0]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          <pointLight color="#54E5FF" intensity={2.8} distance={10} />
        </group>
      </group>

      {/* ============================================================ */}
      {/* 3. SKILLS CONSTELLATION NODES (Scene 3 - Skills) */}
      {/* Floating rotating crystal polyhedra connected by energy lines */}
      {/* ============================================================ */}
      <group ref={skillsConstellationRef} position={[-8, 7, -16]}>
        {[
          { pos: [-3, 2, -2], color: "#54E5FF", scale: 0.6 },
          { pos: [3, 1, 1], color: "#FFB15E", scale: 0.7 },
          { pos: [-1, -2, 2], color: "#54E5FF", scale: 0.5 },
          { pos: [2, 3, -1], color: "#FF7043", scale: 0.65 },
          { pos: [-4, 0, 3], color: "#54E5FF", scale: 0.55 },
          { pos: [1, -2, -3], color: "#FFB15E", scale: 0.6 },
        ].map((node, idx) => (
          <group key={idx} position={node.pos as [number, number, number]}>
            <mesh scale={node.scale}>
              <octahedronGeometry args={[1, 0]} />
              <meshBasicMaterial color={node.color} wireframe />
            </mesh>
            <mesh scale={node.scale * 0.6}>
              <icosahedronGeometry args={[0.7, 0]} />
              <meshBasicMaterial color={node.color} />
            </mesh>
            <pointLight color={node.color} intensity={1.8} distance={6} />
          </group>
        ))}
      </group>

      {/* ============================================================ */}
      {/* 4. SUSPENSION BRIDGES & GLOWING PATHWAYS */}
      {/* ============================================================ */}
      <mesh position={[3.5, 1.2, -16.5]} rotation={[0.1, -0.4, 0.15]}>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(-3, 0, 0),
              new THREE.Vector3(2, -0.8, 0),
              new THREE.Vector3(7, 1.2, -1),
            ]),
            24,
            0.08,
            8,
            false,
          ]}
        />
        <meshStandardMaterial color="#3a485e" roughness={0.6} metalness={0.7} />
      </mesh>
      <mesh position={[3.5, 1.0, -16.5]} rotation={[0.1, -0.4, 0.15]}>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(-3, 0, 0),
              new THREE.Vector3(2, -0.9, 0),
              new THREE.Vector3(7, 1.1, -1),
            ]),
            24,
            0.04,
            6,
            false,
          ]}
        />
        <meshBasicMaterial color="#54E5FF" />
      </mesh>

      {/* ============================================================ */}
      {/* 5. CASCADING GLOWING WATERFALL */}
      {/* ============================================================ */}
      <points ref={waterfallRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[waterfallParticles, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.25}
          color="#6EE7B7"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* ============================================================ */}
      {/* 6. SUSPENDED WORKSHOP (Scene 5 - Journey) */}
      {/* Floating laboratory platform with holographic matrix grid */}
      {/* ============================================================ */}
      <group position={[12, 5, -20]}>
        <mesh position={[0, -3.5, 0]}>
          <coneGeometry args={[4.5, 7, 6]} />
          <meshStandardMaterial color="#151d2b" roughness={0.9} flatShading />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[4.3, 4.5, 0.8, 6]} />
          <meshStandardMaterial color="#1f2838" roughness={0.85} />
        </mesh>
        {/* Holographic Workshop Tech Relays */}
        <group ref={workshopRef} position={[0, 2, 0]}>
          <mesh>
            <cylinderGeometry args={[2, 2, 0.1, 16]} />
            <meshBasicMaterial color="#54E5FF" wireframe />
          </mesh>
          <mesh position={[0, 1.2, 0]}>
            <boxGeometry args={[1.4, 1.4, 1.4]} />
            <meshBasicMaterial color="#FFB15E" wireframe />
          </mesh>
          <pointLight color="#FFB15E" intensity={2.5} distance={8} />
        </group>
      </group>

      {/* ============================================================ */}
      {/* 7. CREATIVE LAB POLYHEDRA (Scene 6 - Interests) */}
      {/* ============================================================ */}
      <group ref={creativeLabRef} position={[-5, 10, -22]}>
        <mesh position={[-3, 1, 0]}>
          <torusKnotGeometry args={[0.9, 0.25, 64, 16]} />
          <meshBasicMaterial color="#54E5FF" wireframe />
        </mesh>
        <mesh position={[3, 0, 1]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshBasicMaterial color="#FF7043" wireframe />
        </mesh>
        <mesh position={[0, 2.5, -2]}>
          <octahedronGeometry args={[1.0, 0]} />
          <meshBasicMaterial color="#FFB15E" wireframe />
        </mesh>
      </group>

      {/* ============================================================ */}
      {/* 8. TRANSMISSION BEACON PLATFORM (Scene 7 - Contact) */}
      {/* Tower reaching high with ascending energy rings into sunset */}
      {/* ============================================================ */}
      <group position={[0, 2, -26]}>
        {/* Foundation Island */}
        <mesh position={[0, -4, 0]}>
          <coneGeometry args={[5.5, 8, 7]} />
          <meshStandardMaterial color="#121824" roughness={0.9} flatShading />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[5.2, 5.5, 0.8, 7]} />
          <meshStandardMaterial color="#1c2534" roughness={0.8} />
        </mesh>
        {/* Central Spire Mast */}
        <mesh position={[0, 6, 0]}>
          <cylinderGeometry args={[0.3, 0.9, 12, 8]} />
          <meshStandardMaterial color="#54E5FF" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* Beacon Crown Light */}
        <mesh position={[0, 12.2, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial color="#FFE082" />
        </mesh>
        <pointLight position={[0, 12.2, 0]} color="#FFB15E" intensity={4.5} distance={30} />

        {/* Ascending Pulsing Energy Rings */}
        <group ref={beaconRingsRef} position={[0, 1, 0]}>
          {[2, 5, 8, 11].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1.8, 0.06, 12, 32]} />
              <meshBasicMaterial color="#54E5FF" transparent opacity={0.75} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
}

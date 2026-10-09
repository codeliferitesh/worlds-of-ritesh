"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ProjectNodesProps {
  activeProjectId?: string | null;
  onSelectProject?: (id: string) => void;
}

export function ProjectNodes({ activeProjectId, onSelectProject }: ProjectNodesProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Position the 6 primary project islands in the 3D space
  const projectPositions = React.useMemo(() => [
    { id: "mediai", pos: [-4.2, 2.5, -6.5], color: "#54E5FF", shape: "cross" },
    { id: "shipment-tracking", pos: [4.5, 3.8, -7.5], color: "#FFB15E", shape: "telemetry" },
    { id: "stacksolve", pos: [-2.2, 4.8, -8.5], color: "#54E5FF", shape: "network" },
    { id: "aether-night", pos: [2.5, 1.2, -5.5], color: "#9BA9BA", shape: "cube" },
    { id: "airboard", pos: [-5.5, -0.8, -6.8], color: "#54E5FF", shape: "vision" },
    { id: "drovio", pos: [5.0, -0.5, -6.2], color: "#FF7043", shape: "p2p" },
  ], []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        // Organic vertical floating
        child.position.y += Math.sin(t * 1.4 + i * 1.1) * 0.003;

        // Find the inner rotating core
        const core = child.getObjectByName("projectCore");
        if (core) {
          core.rotation.y += delta * 0.8;
          core.rotation.x += delta * 0.4;
        }

        // Find the scanner ring
        const ring = child.getObjectByName("scannerRing");
        if (ring) {
          ring.rotation.z += delta * 0.6;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {projectPositions.map((p) => {
        const isSelected = activeProjectId === p.id;

        return (
          <group
            key={p.id}
            position={p.pos as [number, number, number]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectProject?.(p.id);
            }}
          >
            {/* Floating Volcanic Island Shelf */}
            <mesh position={[0, -0.8, 0]}>
              <coneGeometry args={[1.5, 2.0, 6]} />
              <meshStandardMaterial color="#131a26" roughness={0.9} flatShading />
            </mesh>
            <mesh position={[0, 0.1, 0]}>
              <cylinderGeometry args={[1.4, 1.5, 0.3, 6]} />
              <meshStandardMaterial color="#1b2332" roughness={0.8} />
            </mesh>

            {/* Glowing Holographic Project Core */}
            <group name="projectCore" position={[0, 0.9, 0]}>
              <mesh>
                <octahedronGeometry args={[isSelected ? 0.6 : 0.45, 0]} />
                <meshBasicMaterial color={p.color} wireframe={!isSelected} />
              </mesh>
              <mesh>
                <icosahedronGeometry args={[isSelected ? 0.35 : 0.22, 0]} />
                <meshBasicMaterial color={p.color} />
              </mesh>
            </group>

            {/* Spinning Holographic Scanner Ring */}
            <group name="scannerRing" position={[0, 0.9, 0]} rotation={[Math.PI / 2.3, 0, 0]}>
              <mesh>
                <torusGeometry args={[0.9, 0.025, 8, 32]} />
                <meshBasicMaterial color={p.color} transparent opacity={0.8} />
              </mesh>
            </group>

            {/* Vertical Telemetry Light Pillar */}
            <mesh position={[0, 2.5, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 3, 4]} />
              <meshBasicMaterial color={p.color} transparent opacity={0.4} />
            </mesh>

            {/* Point Light Glow */}
            <pointLight
              position={[0, 1.1, 0]}
              color={p.color}
              intensity={isSelected ? 4.5 : 2.0}
              distance={7}
            />
          </group>
        );
      })}
    </group>
  );
}

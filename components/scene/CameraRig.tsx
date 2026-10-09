"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraRigProps {
  scrollProgress: number; // 0 to 1
  selectedProjectId?: string | null;
}

// 7 Carefully Choreographed Camera Waypoints matched to 3D world landmarks
const WAYPOINTS = [
  // 0: Scene 1 - Hero / Arrival (Behind & slightly above explorer looking across the citadel)
  { pos: new THREE.Vector3(0.6, 1.2, 6.2), target: new THREE.Vector3(-1.5, 0.8, -12) },
  // 1: Scene 2 - About Me / Observatory Island (Swoops toward spinning gyroscopic armillary dome)
  { pos: new THREE.Vector3(-5.5, 3.5, -5.5), target: new THREE.Vector3(-9.5, 4.2, -21) },
  // 2: Scene 3 - Skills / Constellation (Frames the floating rotating crystal polyhedra)
  { pos: new THREE.Vector3(-4.0, 5.8, -3.0), target: new THREE.Vector3(-7.5, 6.8, -15) },
  // 3: Scene 4 - Projects / Archipelago (Directly amidst the 6 floating project islands)
  { pos: new THREE.Vector3(0.0, 3.0, -0.5), target: new THREE.Vector3(0.0, 2.0, -9) },
  // 4: Scene 5 - Journey / Workshop (Suspended lab platform with holographic circuits)
  { pos: new THREE.Vector3(5.8, 4.2, -6.5), target: new THREE.Vector3(11.0, 5.0, -19) },
  // 5: Scene 6 - Interests / Creative Lab (Elevates toward floating geometric polyhedra)
  { pos: new THREE.Vector3(-2.0, 7.2, -8.5), target: new THREE.Vector3(-4.5, 9.2, -21) },
  // 6: Scene 7 - Contact / The Final Beacon (Ascending angle looking up at the glowing spire & energy rings)
  { pos: new THREE.Vector3(0.0, 3.8, -7.5), target: new THREE.Vector3(0.0, 9.0, -25) },
];

export function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0.6, 1.2, 6.2));
  const currentTarget = useRef(new THREE.Vector3(-1.5, 0.8, -12));
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Smooth waypoint interpolation
    const totalSegments = WAYPOINTS.length - 1;
    const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
    const scaled = clampedProgress * totalSegments;
    const index = Math.floor(scaled);
    const fraction = scaled - index;

    const currentWP = WAYPOINTS[Math.min(index, totalSegments)];
    const nextWP = WAYPOINTS[Math.min(index + 1, totalSegments)];

    // Interpolate waypoint position and target
    const desiredPos = new THREE.Vector3().lerpVectors(currentWP.pos, nextWP.pos, fraction);
    const desiredTarget = new THREE.Vector3().lerpVectors(currentWP.target, nextWP.target, fraction);

    // Responsive 3D pointer parallax
    desiredPos.x += mousePos.current.x * 0.75;
    desiredPos.y += mousePos.current.y * 0.5;

    // Smooth lerp camera movement
    const lerpFactor = Math.min(delta * 2.8, 0.12);
    currentPos.current.lerp(desiredPos, lerpFactor);
    currentTarget.current.lerp(desiredTarget, lerpFactor);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}

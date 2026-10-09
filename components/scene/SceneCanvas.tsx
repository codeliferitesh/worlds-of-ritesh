"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { SkyAndAtmosphere } from "./SkyAndAtmosphere";
import { CitadelIslands } from "./CitadelIslands";
import { ExplorerHero } from "./ExplorerHero";
import { ProjectNodes } from "./ProjectNodes";
import { CameraRig } from "./CameraRig";

interface SceneCanvasProps {
  scrollProgress: number;
  activeProjectId?: string | null;
  onSelectProject?: (id: string) => void;
  onWebGLError?: () => void;
}

export function SceneCanvas({
  scrollProgress,
  activeProjectId,
  onSelectProject,
  onWebGLError,
}: SceneCanvasProps) {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Test basic WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setHasWebGLError(true);
        onWebGLError?.();
      }
    } catch {
      setHasWebGLError(true);
      onWebGLError?.();
    }
  }, [onWebGLError]);

  if (!mounted || hasWebGLError) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-auto z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0.5, 1.0, 5.8], fov: 48, near: 0.1, far: 120 }}
        dpr={[1, typeof window !== "undefined" && window.devicePixelRatio > 1.5 ? 1.5 : 1]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener(
            "webglcontextlost",
            (e) => {
              e.preventDefault();
              setHasWebGLError(true);
              onWebGLError?.();
            },
            false
          );
        }}
      >
        <SkyAndAtmosphere />
        <CitadelIslands />
        <ExplorerHero />
        <ProjectNodes
          activeProjectId={activeProjectId}
          onSelectProject={onSelectProject}
        />
        <CameraRig
          scrollProgress={scrollProgress}
          selectedProjectId={activeProjectId}
        />
      </Canvas>
    </div>
  );
}

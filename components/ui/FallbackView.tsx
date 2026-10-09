"use client";

import React from "react";

export function FallbackView() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08111F]">
      {/* Sunset sky gradient backdrop */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 75% 45%, rgba(255, 177, 94, 0.45) 0%, rgba(255, 112, 67, 0.25) 30%, rgba(16, 23, 34, 0.8) 70%, #08111F 100%)",
        }}
      />

      {/* Distant Citadel Floating Silhouette */}
      <div className="absolute top-[20%] left-[25%] w-[420px] h-[340px] opacity-25 filter blur-[1px]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-[#54E5FF]">
          <polygon points="100,20 115,70 140,80 150,130 50,130 60,80 85,70" />
          <polygon points="80,130 120,130 100,180" opacity="0.6" />
        </svg>
      </div>

      {/* Floating particles grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20" />

      {/* Atmospheric Fog Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#08111F] via-[#08111F]/80 to-transparent" />
    </div>
  );
}
